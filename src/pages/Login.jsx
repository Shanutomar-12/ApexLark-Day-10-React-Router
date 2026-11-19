import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Login() {
  const { user, login, toast } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/dashboard";
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  if (user) return <Navigate to="/dashboard" replace />;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!emailOk(form.email)) err.email = "Enter a valid email address.";
    if (form.password.length < 6) err.password = "Password must be at least 6 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;

    // Demo authentication: any valid email + password (6+ chars) signs you in.
    const name = form.email.split("@")[0].replace(/[._-]+/g, " ");
    login({ name: name.replace(/\b\w/g, (c) => c.toUpperCase()), email: form.email });
    toast("Welcome back! You're logged in.");
    navigate(from, { replace: true });
  };

  return (
    <section className="container page narrow">
      <h1>Log in</h1>
      {location.state?.notice && <p className="notice">{location.state.notice}</p>}
      <form className="form" onSubmit={submit} noValidate>
        <label>Email
          <input className="input" name="email" type="email" value={form.email} onChange={change} autoComplete="email" />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>Password
          <input className="input" name="password" type="password" value={form.password} onChange={change} autoComplete="current-password" />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
        <button className="btn" type="submit">Log in</button>
        <p className="muted">Demo app: any valid email with a 6+ character password works.</p>
      </form>
    </section>
  );
}
