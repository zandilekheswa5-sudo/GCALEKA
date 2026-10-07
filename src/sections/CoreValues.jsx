import "./CoreValues.css";

const coreValues = [
  {
    title: "Integrity",
    description: "Honest and transparent business conduct",
  },
  {
    title: "Quality",
    description: "Delivery of high-standard products and services",
  },
  {
    title: "Reliability",
    description: "Commitment to deadlines and agreements",
  },
  {
    title: "Community",
    description: "Investment in local development and empowerment",
  },
  {
    title: "Safety",
    description: "Priority on health, safety, and hygiene",
  },
  {
    title: "Compliance",
    description: "Adherence to legal and regulatory requirements",
  },
  {
    title: "Partnership",
    description:
      "Collaboration with accredited training providers and licensed service partners to ensure quality delivery",
  },
  {
    title: "Sustainability",
    description:
      "Commitment to environmentally responsible practices through licensed partners",
  },
];

function CoreValues() {
  return (
    <section className="core-values" id="core-values">
      <div className="core-values-container">

        <div className="core-values-heading">
          <p className="section-label">CORE VALUES</p>

          <h2>
            Built on strong
            <span> values.</span>
          </h2>

          <p className="core-values-intro">
            Our values guide how we conduct business, serve our clients,
            develop partnerships, and contribute to the communities we operate in.
          </p>
        </div>

        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <div className="core-value-card" key={index}>
              <div className="core-value-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CoreValues;