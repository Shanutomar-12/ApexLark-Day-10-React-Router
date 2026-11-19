import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user, logout, theme, toggleTheme, toast } = useApp();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close menus on navigation
  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [location.pathname]);

  // Close the profile dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => menuRef.current && !menuRef.current.contains(e.target) && setMenu(false);
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = () => {
    logout();
    toast("You have been logged out.", "info");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Lark Academy home">
          <span className="brand-mark">L</span>
          Lark Academy
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
          {user && (
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          )}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <div className="dropdown" ref={menuRef}>
              <button className="avatar" onClick={() => setMenu((m) => !m)} aria-haspopup="menu" aria-expanded={menu}>
                {user.name.charAt(0).toUpperCase()}
              </button>
              {menu && (
                <div className="dropdown-menu" role="menu">
                  <p className="dd-name">{user.name}</p>
                  <p className="dd-mail">{user.email}</p>
                  <Link to="/dashboard" role="menuitem">My dashboard</Link>
                  <button onClick={handleLogout} role="menuitem">Log out</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm">Log in</Link>
          )}

          <button className="icon-btn burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
