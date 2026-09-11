type MarkProps = {
  className?: string;
};

export function SquiggleMark({ className }: MarkProps) {
  return (
    <svg
      viewBox="0 0 250 22"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M4 13 C18 5 30 19 46 12 C62 5 74 18 90 11 C106 4 118 17 134 11 C150 5 162 17 178 11 C194 5 206 16 222 10 C232 6 240 12 246 9"
        stroke="#FF9595"
        strokeWidth={4}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function TealDoodle({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 130 60" fill="none" aria-hidden="true" className={className}>
      <path
        d="M10 42 C28 18 44 10 42 26 C40 42 58 14 64 28 C70 42 80 18 88 30 C94 40 104 22 112 28 C118 33 122 26 124 22"
        stroke="#7CDFCD"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <circle cx="117" cy="46" r="3" fill="#7CDFCD" />
    </svg>
  );
}
