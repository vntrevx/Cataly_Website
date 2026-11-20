interface BrandProps {
  href?: string;
}

export function Brand({ href = "/" }: BrandProps) {
  return (
    <a className="brand" href={href} aria-label="Cataly home">
      <svg width="27" height="27" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M25.3 8.5a11.4 11.4 0 1 0 0 15M23.6 10.5a8.7 8.7 0 1 0 0 11" stroke="currentColor" strokeWidth="1.15" />
        <path d="M27.5 11.5 28.5 15l3 1-3 1-1 3.5-1-3.5-3-1 3-1 1-3.5Z" fill="currentColor" />
        <path d="M9.5 3.5v4m-2-2h4M4.5 24v4m-2-2h4" stroke="currentColor" strokeWidth=".9" />
      </svg>
      <span>Cataly</span>
    </a>
  );
}
