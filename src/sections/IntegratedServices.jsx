import React from "react";
import "./IntegratedServices.css";

const integratedSolutions = [
  {
    number: "01",
    title: "Construction Site Support",
    description:
      "Construction services, material transport, water supply, site catering, sanitation, cold storage, and waste management coordination.",
  },
  {
    number: "02",
    title: "Event Management",
    description:
      "Catering, water supply, VIP mobile toilets, mobile refrigeration, logistics, and event waste management coordination.",
  },
  {
    number: "03",
    title: "Community Projects",
    description:
      "Infrastructure development, feeding schemes, sanitation facilities, cold storage, and waste management coordination, with integrated skills training coordination.",
  },
  {
    number: "04",
    title: "Emergency Response",
    description:
      "Rapid deployment of water, catering, sanitation, refrigeration, and waste management services through licensed partners.",
  },
  {
    number: "05",
    title: "Cold Chain Management",
    description:
      "Temperature-controlled transport and storage for perishable goods.",
  },
  {
    number: "06",
    title: "Full-Site Services",
    description:
      "Comprehensive site management including construction, sanitation, catering, cold storage, and waste removal coordination for remote sites and camps.",
  },
];

function IntegratedServices() {
  return (
    <section className="integrated-services" id="integrated-services">
      <div className="integrated-services-container">

        <div className="integrated-services-header">
          <span className="section-label">
            INTEGRATED SERVICE OFFERING
          </span>

          <h2>
            Integrated Solutions for
            <span> Complex Client Needs.</span>
          </h2>

          <p>
            The company offers integrated solutions that combine multiple
            divisions to meet complex client needs.
          </p>
        </div>

        <div className="integrated-services-grid">
          {integratedSolutions.map((solution) => (
            <article
              className="integrated-service-card"
              key={solution.number}
            >
              <div className="integrated-service-number">
                {solution.number}
              </div>

              <div className="integrated-service-content">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IntegratedServices;