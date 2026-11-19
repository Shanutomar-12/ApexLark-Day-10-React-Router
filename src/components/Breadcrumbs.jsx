import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {parts.map((p, i) => {
        const to = "/" + parts.slice(0, i + 1).join("/");
        const label = p.charAt(0).toUpperCase() + p.slice(1);
        return (
          <span key={to}>
            <span className="sep">/</span>
            {i === parts.length - 1 ? <span aria-current="page">{label}</span> : <Link to={to}>{label}</Link>}
          </span>
        );
      })}
    </nav>
  );
}
