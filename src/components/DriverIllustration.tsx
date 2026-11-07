import { cn } from "@/lib/utils";

/**
 * Ilustrasi pengemudi ojek (tampak belakang) memakai jaket hijau khas,
 * duduk di atas skuter — terinspirasi dari jaket ojek hijau yang ikonik.
 */
export default function DriverIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 290"
      className={cn("float-y", className)}
      role="img"
      aria-label="Pengemudi ojek memakai jaket hijau di atas skuter"
    >
      {/* Bayangan tanah */}
      <ellipse cx="120" cy="274" rx="86" ry="9" fill="#131511" opacity="0.10" />

      {/* Roda belakang */}
      <circle cx="94" cy="248" r="22" fill="#131511" />
      <circle cx="94" cy="248" r="11" fill="#f5f2ea" />
      <circle cx="94" cy="248" r="4" fill="#c8f135" />

      {/* Roda depan */}
      <circle cx="180" cy="248" r="18" fill="#131511" />
      <circle cx="180" cy="248" r="9" fill="#f5f2ea" />
      <circle cx="180" cy="248" r="3.5" fill="#c8f135" />

      {/* Badan skuter */}
      <rect x="68" y="212" width="110" height="32" rx="15" fill="#1c3629" />
      <rect x="74" y="224" width="42" height="14" rx="7" fill="#c8f135" />
      <circle cx="174" cy="228" r="5" fill="#c8f135" />

      {/* Jok */}
      <rect x="96" y="200" width="44" height="16" rx="8" fill="#131511" />

      {/* Boks belakang khas ojek */}
      <rect x="64" y="184" width="32" height="28" rx="7" fill="#c8f135" />
      <rect x="72" y="198" width="16" height="3" rx="1.5" fill="#131511" />

      {/* Setang */}
      <line x1="58" y1="170" x2="184" y2="170" stroke="#131511" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="174" x2="166" y2="214" stroke="#131511" strokeWidth="6" strokeLinecap="round" />

      {/* Leher */}
      <rect x="112" y="80" width="16" height="12" rx="6" fill="#d7a46a" />

      {/* Badan jaket hijau */}
      <path
        d="M86 118
           C82 102 102 94 120 94
           C138 94 158 102 154 118
           L150 186
           C149 194 141 196 135 196
           L105 196
           C99 196 91 194 90 186
           Z"
        fill="#16a34a"
      />

      {/* Kerah jaket */}
      <rect x="104" y="90" width="32" height="10" rx="5" fill="#c8f135" />

      {/* Logo petir di punggung */}
      <g transform="translate(107 108) scale(1.1)">
        <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2z" fill="#c8f135" />
      </g>

      {/* Garis reflektif */}
      <rect x="94" y="148" width="52" height="7" rx="3.5" fill="#c8f135" />
      <rect x="94" y="160" width="52" height="4" rx="2" fill="#f5f2ea" />

      {/* Lengan menuju setang */}
      <path
        d="M92 124 C70 132 60 150 58 168"
        stroke="#16a34a"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 124 C170 132 180 150 182 168"
        stroke="#16a34a"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sarung tangan */}
      <circle cx="58" cy="170" r="8" fill="#131511" />
      <circle cx="182" cy="170" r="8" fill="#131511" />

      {/* Pinggang / celana */}
      <rect x="102" y="192" width="36" height="18" rx="8" fill="#131511" />

      {/* Helm */}
      <path d="M86 78 A34 34 0 0 1 154 78 Z" fill="#c8f135" />
      <rect x="86" y="74" width="68" height="6" rx="3" fill="#b3d929" />
    </svg>
  );
}
