import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Lark Academy. Built with React Router.</p>
        <nav aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
