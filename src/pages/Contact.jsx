import { useState } from "react";
import { useApp } from "../context/AppContext.jsx";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const { toast } = useApp();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!emailOk(form.email)) err.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) err.message = "Message must be at least 10 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    toast("Message sent. We'll reply within one working day.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container page narrow">
      <h1>Contact us</h1>
      <p className="lead">Questions about a course or your account? Send us a message.</p>
      <form className="form" onSubmit={submit} noValidate>
        <label>Name
          <input className="input" name="name" value={form.name} onChange={change} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>
        <label>Email
          <input className="input" name="email" type="email" value={form.email} onChange={change} />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>Message
          <textarea className="input" name="message" rows="5" value={form.message} onChange={change} />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>
        <button className="btn" type="submit">Send message</button>
      </form>
    </section>
  );
}
