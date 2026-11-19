import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container page center">
      <p className="big">404</p>
      <h1>Page not found</h1>
      <p className="lead" style={{ margin: "0 auto 1.5rem" }}>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn">Back to home</Link>
    </section>
  );
}
