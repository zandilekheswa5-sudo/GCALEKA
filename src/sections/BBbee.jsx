import "./BBbee.css";

function BBbee() {
  return (
    <section className="bbbee" id="bbbee">
      <div className="bbbee-container">

        <div className="bbbee-heading">
          <p className="section-label">B-BBEE</p>

          <h2>
            Empowerment.
            <span>Inclusive Growth.</span>
          </h2>

          <p className="bbbee-intro">
            The company is committed to meaningful transformation,
            economic participation, and creating opportunities that
            contribute to inclusive growth.
          </p>
        </div>

        <div className="bbbee-grid">

          <div className="bbbee-card">
            <div className="bbbee-number">01</div>

            <h3>Our Approach</h3>

            <p>
              We support Broad-Based Black Economic Empowerment principles
              through responsible business practices and meaningful
              participation across our operations.
            </p>
          </div>

          <div className="bbbee-card">
            <div className="bbbee-number">02</div>

            <h3>Our Commitment</h3>

            <p>
              We aim to create opportunities for skills development,
              enterprise participation, and sustainable economic inclusion.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BBbee;