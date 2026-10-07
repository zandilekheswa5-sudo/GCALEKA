import "./Governance.css";

const frameworks = [
  "Companies Act, 2008",
  "Occupational Health and Safety Act (OHSA)",
  "National Environmental Management Act (NEMA)",
  "National Environmental Management: Waste Act (NEM:WA)",
  "Foodstuffs, Cosmetics and Disinfectants Act",
  "National Water Act",
  "Applicable municipal by-laws",
  "Skills Development Act (through accredited training partners)",
];

const commitments = [
  "Filing annual returns with CIPC",
  "Maintaining beneficial ownership information",
  "Submitting annual financial statements or financial accountability supplements",
  "Reporting changes in directorship, address, or financial year-end",
  "Ensuring all training partners maintain valid accreditation with relevant SETAs",
  "Ensuring all waste management services are delivered through a licensed and compliant partner",
];

function Governance() {
  return (
    <section className="governance" id="governance">
      <div className="governance-container">

        <div className="governance-heading">
          <p className="section-label">GOVERNANCE & COMPLIANCE</p>

          <h2>
            Responsible Operations.
            <span> Strong Compliance.</span>
          </h2>

          <p className="governance-intro">
            The company adheres to relevant legislative and regulatory
            frameworks while maintaining responsible business practices
            across its operations.
          </p>
        </div>

        <div className="governance-grid">

          <div className="governance-card">
            <div className="governance-number">01</div>

            <h3>Legislative Frameworks</h3>

            <ul>
              {frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>

          <div className="governance-card">
            <div className="governance-number">02</div>

            <h3>Our Commitments</h3>

            <ul>
              {commitments.map((commitment, index) => (
                <li key={index}>{commitment}</li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Governance;