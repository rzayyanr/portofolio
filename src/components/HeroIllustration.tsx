type Props = {
  className?: string;
  title: string;
};

export default function HeroIllustration({ className, title }: Props) {
  return (
    <svg viewBox="0 0 520 440" fill="none" role="img" aria-label={title} className={className}>
      {/* lantai */}
      <ellipse cx="260" cy="400" rx="212" ry="26" fill="#F4F7F9" />

      {/* tanaman */}
      <g>
        <ellipse cx="90" cy="298" rx="10" ry="24" fill="#7CDFCD" />
        <ellipse cx="72" cy="306" rx="9" ry="20" fill="#7CDFCD" transform="rotate(-28 72 306)" />
        <ellipse cx="108" cy="306" rx="9" ry="20" fill="#7CDFCD" transform="rotate(28 108 306)" />
        <rect x="66" y="322" width="48" height="10" rx="5" fill="#E0E7EB" />
        <path d="M72 332 L108 332 L102 372 L78 372 Z" fill="#EDF2F5" />
      </g>

      {/* gitar bersandar */}
      <g transform="rotate(12 420 300)">
        <rect x="414" y="118" width="12" height="120" rx="3" fill="#131313" />
        <rect x="410" y="94" width="20" height="28" rx="5" fill="#131313" />
        <path d="M416 132 L424 132 M416 152 L424 152 M416 172 L424 172" stroke="#EDF2F5" strokeWidth="2" strokeLinecap="round" />
        <path d="M400 260 C378 262 368 284 372 306 C376 332 396 352 420 352 C444 352 462 334 462 310 C462 290 452 272 436 264 C448 250 446 232 434 226 C420 220 406 232 404 248 C403 252 402 256 400 260 Z" fill="#FF9595" />
        <circle cx="424" cy="300" r="14" fill="#131313" />
        <rect x="410" y="324" width="28" height="7" rx="3.5" fill="#131313" />
        <path d="M420 122 L419 324 M425 122 L424 324" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.9" />
      </g>

      {/* karakter duduk bersila */}
      <g>
        {/* kaki tersilang */}
        <path
          d="M125 330 C125 302 175 292 235 292 C295 292 345 302 345 328 C345 350 295 358 235 358 C175 358 125 352 125 330 Z"
          fill="#5A6065"
        />
        {/* torso hoodie */}
        <rect x="178" y="182" width="114" height="112" rx="34" fill="#AEDFFD" />
        {/* kepala */}
        <circle cx="235" cy="140" r="38" fill="#F2C9A0" />
        {/* rambut */}
        <path
          d="M198 138 C198 112 214 100 235 100 C256 100 272 112 272 138 C272 126 260 118 235 118 C210 118 198 126 198 138 Z"
          fill="#131313"
        />
        {/* wajah */}
        <circle cx="222" cy="146" r="3" fill="#131313" />
        <circle cx="248" cy="146" r="3" fill="#131313" />
        <path d="M226 158 Q235 166 244 158" stroke="#131313" strokeWidth="3" strokeLinecap="round" />
        <circle cx="208" cy="154" r="4.5" fill="#FF9595" opacity="0.5" />
        <circle cx="262" cy="154" r="4.5" fill="#FF9595" opacity="0.5" />
        {/* laptop */}
        <g transform="rotate(-6 235 268)">
          <rect x="200" y="234" width="70" height="50" rx="5" fill="#131313" />
          <rect x="206" y="240" width="58" height="38" rx="3" fill="#A4DCFE" />
          <path d="M214 250 C222 246 232 246 240 250 M214 262 C224 258 236 258 246 262" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
          <rect x="186" y="284" width="98" height="9" rx="4.5" fill="#131313" />
        </g>
        {/* lengan */}
        <path d="M188 216 C168 236 168 266 192 288" stroke="#AEDFFD" strokeWidth="15" strokeLinecap="round" />
        <path d="M282 216 C302 236 302 266 278 288" stroke="#AEDFFD" strokeWidth="15" strokeLinecap="round" />
        <circle cx="194" cy="290" r="7.5" fill="#F2C9A0" />
        <circle cx="276" cy="290" r="7.5" fill="#F2C9A0" />
      </g>

      {/* coretan melayang */}
      <path
        d="M336 88 C344 74 372 70 386 76 C398 82 396 94 380 98 C362 102 340 98 336 88 C334 82 344 76 354 74"
        stroke="#A4DCFE"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M96 84 C108 76 116 92 128 84 C140 76 146 88 158 82"
        stroke="#FF9595"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M462 150 L462 168 M453 159 L471 159" stroke="#7CDFCD" strokeWidth="4" strokeLinecap="round" />
      <circle cx="62" cy="200" r="8" stroke="#A4DCFE" strokeWidth="4" />
    </svg>
  );
}
