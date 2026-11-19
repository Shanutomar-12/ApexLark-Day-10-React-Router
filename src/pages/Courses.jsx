import { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const courses = [
  { id: 1, title: "HTML & CSS Foundations", level: "Beginner", hours: 12 },
  { id: 2, title: "Modern JavaScript (ES6+)", level: "Beginner", hours: 18 },
  { id: 3, title: "React Essentials", level: "Intermediate", hours: 24 },
  { id: 4, title: "React Router & SPAs", level: "Intermediate", hours: 8 },
  { id: 5, title: "Node.js & Express APIs", level: "Intermediate", hours: 22 },
  { id: 6, title: "MongoDB for Developers", level: "Advanced", hours: 16 },
];

export default function Courses() {
  const [query, setQuery] = useState("");
  const { user, toast } = useApp();
  const shown = courses.filter((c) => c.title.toLowerCase().includes(query.trim().toLowerCase()));

  const enroll = (title) =>
    user ? toast(`Enrolled in “${title}”.`) : toast("Log in to enroll in a course.", "error");

  return (
    <section className="container page">
      <h1>Courses</h1>
      <input
        className="input search"
        type="search"
        placeholder="Search courses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search courses"
      />

      {shown.length === 0 ? (
        <div className="empty">
          <h3>No courses match “{query}”</h3>
          <p>Try a different keyword, or clear the search to see all courses.</p>
          <button className="btn btn-sm" onClick={() => setQuery("")}>Clear search</button>
        </div>
      ) : (
        <div className="grid">
          {shown.map((c) => (
            <div className="card" key={c.id}>
              <span className="tag">{c.level}</span>
              <h3>{c.title}</h3>
              <p>{c.hours} hours of lessons and projects</p>
              <button className="btn btn-sm" onClick={() => enroll(c.title)}>Enroll</button>
            </div>
          ))}
        </div>
      )}
      {!user && (
        <p className="muted">
          Want to track progress? <Link to="/login">Log in</Link> to enroll.
        </p>
      )}
    </section>
  );
}
