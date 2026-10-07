import trainingImage from "../images/training.jpg";

function Training() {
  const trainingAreas = [
    {
      title: "Plumbing",
      description:
        "Apprenticeships, trade-test preparation, practical plumbing skills and workplace experience.",
    },
    {
      title: "Construction",
      description:
        "Bricklaying, tiling, scaffolding, formwork and construction health and safety.",
    },
    {
      title: "Driver Training",
      description:
        "Code 10 and Code 14 training, driver licensing, defensive driving and fleet management.",
    },
    {
      title: "Culinary & Hospitality",
      description:
        "Food preparation, catering management, food safety and hygiene certification.",
    },
    {
      title: "Water & Sanitation Management",
      description:
        "Borehole maintenance, water treatment, sanitation-system operations and irrigation management.",
    },
    {
      title: "Cold Chain & Refrigeration",
      description:
        "Refrigeration maintenance, temperature monitoring and food-safety compliance.",
    },
    {
      title: "Waste Management",
      description:
        "Waste handling, recycling operations, hazardous waste management and environmental compliance.",
    },
    {
      title: "Small Enterprise Development",
      description:
        "Business management, tender readiness, financial literacy and mentorship.",
    },
  ];

  return (
    <section id="training" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        {/* Introduction */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={trainingImage}
              alt="GCALEKA training and skills development"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B8860B]">
              Training & Skills Development
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B1F33] lg:text-5xl">
              Building skills for better project delivery.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              GCALEKA provides training and skills development solutions
              designed to support individuals, projects and organisational
              needs across multiple sectors.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              GCALEKA identifies training needs, coordinates learner
              enrolment and manages training logistics while working with
              accredited external training providers. These providers
              deliver the training and issue nationally recognised
              qualifications.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-lg bg-[#0B1F33] px-7 py-3 font-semibold text-white transition hover:bg-[#162D45]"
            >
              Enquire About Training
            </a>
          </div>
        </div>

        {/* Training Areas */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Training Areas
            </p>

            <h3 className="mt-3 text-3xl font-bold text-[#0B1F33] sm:text-4xl">
              Practical skills across multiple sectors.
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Training opportunities are coordinated across technical,
              operational and enterprise-development areas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#C9A227]" />

                <h4 className="text-lg font-bold text-[#0B1F33]">
                  {area.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Accredited Training Partnerships */}
        <div className="mt-12 rounded-2xl border border-[#C9A227]/30 bg-[#0B1F33] p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            Accredited Training Partnerships
          </p>

          <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Training coordinated through accredited partners.
          </h3>

          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            GCALEKA works with accredited external training providers to
            support access to nationally recognised qualifications. The
            partnership model supports training coordination, accredited
            assessment and moderation, and skills-development requirements.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white">
                Accredited Providers
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Training is delivered through accredited external providers.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white">
                Recognised Qualifications
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Learners can access nationally recognised qualifications
                through the appropriate accredited providers.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-bold text-white">
                Skills Development
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The model supports organisational skills-development and
                relevant compliance requirements.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Training;