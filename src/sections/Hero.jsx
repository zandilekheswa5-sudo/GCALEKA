import heroImage from "../images/hero-integrated-services.jpg";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Hero Content */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            GCALEKA Projects and Training (Pty) Ltd
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#0B1F33] sm:text-5xl lg:text-6xl">
            Integrated Solutions.
            <span className="block text-[#C9A227]">
              Reliable Delivery.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Delivering practical solutions across construction, logistics,
            water supply, catering, mobile facilities, cold-chain services,
            waste management and skills development.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-lg bg-[#0B1F33] px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[#C9A227] hover:text-[#0B1F33]"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="rounded-lg border-2 border-[#0B1F33] px-6 py-3 text-center font-semibold text-[#0B1F33] transition hover:bg-[#0B1F33] hover:text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1F33] shadow-xl">
          <img
            src={heroImage}
            alt="GCALEKA integrated services"
            className="h-[500px] w-full object-cover object-center sm:h-[580px] lg:h-[650px]"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#0B1F33]/90 px-6 py-5">
            <p className="text-sm font-semibold text-white">
              Integrated service solutions
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Supporting projects, businesses and communities with reliable
              delivery across multiple service areas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;