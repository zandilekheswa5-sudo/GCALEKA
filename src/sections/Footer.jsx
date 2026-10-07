import logo from "../logos/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B263B] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-20">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="GCALEKA Projects and Training"
              className="mb-5 h-14 w-auto object-contain"
            />

            <p className="max-w-md leading-7 text-gray-300">
              GCALEKA Projects and Training provides practical, integrated
              solutions across construction, logistics, catering, water,
              plumbing, cold-chain services, waste management and training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="transition hover:text-[#D4A84F]">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-[#D4A84F]">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-[#D4A84F]">
                  Services
                </a>
              </li>

              <li>
                <a href="#training" className="transition hover:text-[#D4A84F]">
                  Training
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-[#D4A84F]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Construction</li>
              <li>Logistics</li>
              <li>Catering</li>
              <li>Water Supply</li>
              <li>Plumbing</li>
              <li>Cold-Chain Solutions</li>
              <li>Waste Management</li>
              <li>Training</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} GCALEKA Projects and Training (Pty) Ltd.
            All rights reserved.
          </p>

          <a
            href="#contact"
            className="font-semibold text-[#D4A84F] transition hover:text-white"
          >
            Request a Quote →
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;