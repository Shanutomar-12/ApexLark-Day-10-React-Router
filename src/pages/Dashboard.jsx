import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const stats = [
  { label: "Courses enrolled", value: 5 },
  { label: "Completed", value: 2 },
  { label: "Hours learned", value: 46 },
  { label: "Certificates", value: 1 },
];

const activities = [
  "Completed lesson “Nested routes” in React Router & SPAs",
  "Submitted project “Portfolio v1” for review",
  "Enrolled in Node.js & Express APIs",
  "Earned the “JavaScript Foundations” certificate",
];

const actions = [
  { to: "/courses", title: "Browse courses", text: "Find your next course." },
  { to: "/contact", title: "Ask a mentor", text: "Get help with a project." },
  { to: "/services", title: "View services", text: "See mentoring options." },
];

export default function Dashboard() {
  const { user } = useApp();
  return (
    <section className="container page">
      <h1>Welcome back, {user.name.split(" ")[0]}</h1>
      <p className="lead">Here's where your learning stands today.</p>

      <div className="dash">
        <aside className="card profile">
          <div className="avatar big">{user.name.charAt(0).toUpperCase()}</div>
          <h3>{user.name}</h3>
          <p className="muted">{user.email}</p>
          <span className="tag">Student</span>
        </aside>

        <div>
          <div className="grid grid-4">
            {stats.map((s) => (
              <div className="card stat" key={s.label}>
                <p className="big">{s.value}</p>
                <p className="muted">{s.label}</p>
              </div>
            ))}
          </div>

          <h2>Recent activity</h2>
          {activities.length === 0 ? (
            <div className="empty"><p>No activity yet. Enroll in a course to get started.</p></div>
          ) : (
            <ul className="activity card">
              {activities.map((a) => <li key={a}>{a}</li>)}
            </ul>
          )}

          <h2>Quick actions</h2>
          <div className="grid">
            {actions.map((a) => (
              <Link to={a.to} className="card action" key={a.to}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
