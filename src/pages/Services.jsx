const services = [
  ["Live mentoring", "Weekly one-to-one sessions with an industry mentor."],
  ["Code reviews", "Detailed pull-request feedback on every project."],
  ["Career support", "Resume reviews, mock interviews and portfolio guidance."],
  ["Team training", "Custom learning tracks for companies upskilling developers."],
];

export default function Services() {
  return (
    <section className="container page">
      <h1>Services</h1>
      <p className="lead">Support that goes beyond video lessons.</p>
      <div className="grid grid-2">
        {services.map(([t, d]) => (
          <div className="card" key={t}><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </section>
  );
}
