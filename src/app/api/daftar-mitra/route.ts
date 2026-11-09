import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { writeFile, unlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";

const execFileAsync = promisify(execFile);

const REPO = process.env.GITHUB_REPO ?? "rifkihideng/reverse-gojek";

const KENDARAAN_VALID = ["Motor", "Mobil"];

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function error(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return error("Body request tidak valid.", 400);
  }

  const nama = asText(payload.nama).trim().replace(/\s+/g, " ").slice(0, 80);
  const hp = asText(payload.hp).trim().slice(0, 30);
  const kota = asText(payload.kota).trim().slice(0, 50);
  const kendaraan = asText(payload.kendaraan).trim();
  const nomor = asText(payload.nomor).trim().slice(0, 30);
  const catatan = asText(payload.catatan).trim().slice(0, 500);

  if (!nama || !hp || !kota) {
    return error("Nama, nomor HP, dan kota wajib diisi.", 400);
  }
  if (!KENDARAAN_VALID.includes(kendaraan)) {
    return error("Pilih jenis kendaraan: Motor atau Mobil.", 400);
  }

  const title = `Pendaftaran Mitra — ${nama}`;

  const body = [
    "### Data Pendaftaran Mitra Laju",
    "",
    `- **Nama:** ${nama}`,
    `- **No. HP:** ${hp}`,
    `- **Kota:** ${kota}`,
    `- **Kendaraan:** ${kendaraan}`,
    nomor ? `- **No. kendaraan:** ${nomor}` : null,
    catatan ? `- **Catatan:** ${catatan}` : null,
    "",
    "_Dibuat otomatis dari form demo /daftar-mitra._",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const filePath = join(tmpdir(), `laju-mitra-${randomUUID()}.md`);
  await writeFile(filePath, body, "utf8");

  try {
    const { stdout } = await execFileAsync("gh", [
      "issue",
      "create",
      "--repo",
      REPO,
      "--title",
      title,
      "--body-file",
      filePath,
    ]);
    return Response.json({ ok: true, issue_url: stdout.trim() });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Gagal membuat issue di GitHub.";
    return error(
      `Demo MCP gagal: ${message}. Pastikan gh CLI sudah terautentikasi (gh auth login).`,
      502
    );
  } finally {
    await unlink(filePath).catch(() => {});
  }
}
