"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; url: string }
  | { kind: "error"; message: string };

const inputClass =
  "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/60 transition focus:border-lime-deep focus:outline-none focus:ring-2 focus:ring-lime/40";

const labelClass = "mb-2 block text-sm font-semibold text-ink";

export default function MitraForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: "loading" });

    const formData = new FormData(form);
    const payload = {
      nama: formData.get("nama"),
      hp: formData.get("hp"),
      kota: formData.get("kota"),
      kendaraan: formData.get("kendaraan"),
      nomor: formData.get("nomor"),
      catatan: formData.get("catatan"),
    };

    try {
      const response = await fetch("/api/daftar-mitra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        issue_url?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Terjadi kesalahan. Coba lagi.");
      }

      setStatus({ kind: "success", url: data.issue_url ?? "" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error ? err.message : "Terjadi kesalahan tak terduga.",
      });
    }
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div>
          <label htmlFor="nama" className={labelClass}>
            Nama lengkap
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            maxLength={80}
            placeholder="Contoh: Budi Santoso"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="hp" className={labelClass}>
            No. HP / WhatsApp
          </label>
          <input
            id="hp"
            name="hp"
            type="tel"
            required
            maxLength={30}
            placeholder="Contoh: 0812 3456 7890"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="kota" className={labelClass}>
            Kota domisili
          </label>
          <input
            id="kota"
            name="kota"
            type="text"
            required
            maxLength={50}
            placeholder="Contoh: Jakarta Selatan"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="kendaraan" className={labelClass}>
            Jenis kendaraan
          </label>
          <select
            id="kendaraan"
            name="kendaraan"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Pilih kendaraan
            </option>
            <option value="Motor">Motor</option>
            <option value="Mobil">Mobil</option>
          </select>
        </div>

        <div>
          <label htmlFor="nomor" className={labelClass}>
            No. polisi kendaraan <span className="text-ink-muted">(opsional)</span>
          </label>
          <input
            id="nomor"
            name="nomor"
            type="text"
            maxLength={30}
            placeholder="Contoh: B 1234 XYZ"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="catatan" className={labelClass}>
            Catatan / kode referral <span className="text-ink-muted">(opsional)</span>
          </label>
          <textarea
            id="catatan"
            name="catatan"
            rows={3}
            maxLength={500}
            placeholder="Kalau ada, tulis kode referral atau pertanyaanmu."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status.kind === "loading"}
          className={buttonVariants({
            size: "lg",
            className:
              "h-12 rounded-xl px-6 font-bold disabled:cursor-not-allowed",
          })}
        >
          {status.kind === "loading" ? "Mengirim..." : "Daftar Jadi Mitra"}
        </button>
      </form>

      {status.kind === "success" && (
        <div
          role="status"
          className="rounded-2xl border border-lime-deep bg-lime/20 p-5 text-sm leading-relaxed text-ink"
        >
          <p className="font-bold">Pendaftaran demo berhasil! 🎉</p>
          <p className="mt-2">
            Data kamu dikirim lewat GitHub (MCP) dan dibuatkan issue baru:{" "}
            <a
              href={status.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-lime-deep decoration-2 underline-offset-4"
            >
              {status.url}
            </a>
          </p>
        </div>
      )}

      {status.kind === "error" && (
        <div
          role="alert"
          className="rounded-2xl border border-destructive/30 bg-destructive/10 p-5 text-sm leading-relaxed text-destructive"
        >
          {status.message}
        </div>
      )}
    </div>
  );
}
