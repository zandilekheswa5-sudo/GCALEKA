import aboutLogo from "../logos/logo-circle.png";

function About() {
  return (
    <section id="about" className="bg-[#F5F7FA]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* About Logo */}
        <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-[#0B1F33] p-8 shadow-lg sm:p-12">
          <img
            src={aboutLogo}
            alt="GCALEKA Projects and Training (Pty) Ltd logo"
            className="h-auto w-full max-w-md scale-125 object-contain"
          />
        </div>

        {/* About Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            About GCALEKA
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0B1F33] sm:text-4xl">
            Integrated solutions built around quality, reliability and delivery.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            GCALEKA Projects and Training (Pty) Ltd is a private company
            incorporated in the Republic of South Africa under the Companies
            Act, 2008. The company was registered on 20 November 2024 and is
            committed to delivering quality services and products across
            multiple sectors.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            The company is 100% South African owned and managed, with a focus
            on skills development and community empowerment through
            partnerships with accredited training providers and licensed
            service partners.
          </p>

          {/* Company Information */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-[#0B1F33]">
                Company Status
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Private company · In Business
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-[#0B1F33]">
                Registration
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                2024/734846/07
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-[#0B1F33]">
                Ownership
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                100% South African owned and managed
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-[#0B1F33]">
                Our Approach
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Integrated services through accredited and licensed partners.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;