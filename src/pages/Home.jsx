import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

export default function Home() {
  const { user } = useApp();
  return (
    <>
      <section className="hero container">
        <div>
          <h1>Learn to build the web, one route at a time.</h1>
          <p className="lead">
            Lark Academy is a hands-on learning platform for aspiring full stack developers. Pick a course, track your progress and ship real projects.
          </p>
          <div className="row">
            <Link to="/courses" className="btn">Browse courses</Link>
            <Link to={user ? "/dashboard" : "/login"} className="btn btn-ghost">
              {user ? "Go to dashboard" : "Log in"}
            </Link>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <p className="mono">{"<Route path=\"/learn\" />"}</p>
          <p className="big">12,400+</p>
          <p>learners building projects this month</p>
        </div>
      </section>

      <section className="container">
        <h2>Why learners stay</h2>
        <div className="grid">
          {[
            ["Project first", "Every module ends with something you can put on GitHub."],
            ["Mentor reviews", "Get code feedback within 24 hours from working developers."],
            ["Self-paced", "Pause and resume anywhere — your progress is always saved."],
          ].map(([t, d]) => (
            <div className="card" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
