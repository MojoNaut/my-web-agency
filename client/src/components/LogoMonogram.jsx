{/* LogoMonogram.jsx */}
export default function LogoMonogram({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-label="Punto Vista Monogram"
      role="img"
      style={{ display: 'block' }}
    >
      {/* P massiva */}
      <path d="M12 8h18c9 0 16 7 16 16s-7 16-16 16H12V8z" fill="currentColor" />
      {/* V geometrica */}
      <polygon points="12,40 28,56 44,40 36,40 28,48 20,40" fill="currentColor" />
    </svg>
  );
}
