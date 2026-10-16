export default function ContactPixelCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 25"
      width={96}
      height={80}
      aria-hidden="true"
      focusable="false"
      shapeRendering="crispEdges"
      className={`contact-pixel-cat ${className ?? ""}`}
    >
      <g className="contact-pixel-cat__tail">
        <path
          d="M9 18H6V16H4V13H6V15H8V13H10V10H12V12H10V15H9Z"
          fill="#fff"
          stroke="#131313"
          strokeLinejoin="miter"
          strokeWidth="0.8"
        />
      </g>
      <path
        d="M8 14H6V11H8V8H9V5H11V3H14V5H16V4H19V5H21V8H23V13H22V17H20V20H18V23H16V20H14V23H12V20H10V18H8V16Z"
        fill="#fff"
        stroke="#131313"
        strokeLinejoin="miter"
        strokeWidth="0.8"
      />
      <path d="M11 10h1v1h-1zM18 10h1v1h-1zM14 12h2v1h-2z" fill="#131313" />
      <g className="contact-pixel-cat__wave">
        <path
          d="M20 14H22V11H23V8H25V9H26V11H25V14H24V17H22V18H20Z"
          fill="#fff"
          stroke="#131313"
          strokeLinejoin="miter"
          strokeWidth="0.8"
        />
      </g>
    </svg>
  );
}
