const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#F8F7F3] px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B08A3C]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#1B263B] md:text-5xl">
            Let's discuss your project.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Tell us what you need and our team will get back to you with
            practical solutions tailored to your project or organisation.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-[#1B263B] p-8 text-white md:p-10">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A84F]">
              GCALEKA Projects & Training
            </p>

            <h3 className="text-3xl font-bold">
              How can we help?
            </h3>

            <p className="mt-5 max-w-lg leading-7 text-gray-300">
               Whether you need plumbing supplies, building and construction,
               transport and logistics, water supply solutions, catering services,
               VIP mobile toilet hire, mobile fridge hire or training, we're ready
               to discuss your requirements.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}
              <div>
                <p className="text-sm font-semibold text-[#D4A84F]">
                  Email
                </p>
                <p className="mt-1 text-gray-200">
                  nollykheswa7@gmail.com
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm font-semibold text-[#D4A84F]">
                  Phone
                </p>
                <p className="mt-1 text-gray-200">
                  +27 73 951 0063
                </p>
              </div>

              {/* Physical Address */}
              <div>
                <p className="text-sm font-semibold text-[#D4A84F]">
                  Physical Address
                </p>
                <p className="mt-1 leading-6 text-gray-200">
                  Khayelitsha Section, Khayakhulu,
                  <br />
                  Rustenburg, North West, 2840
                </p>
              </div>

              {/* Postal Address */}
              <div>
                <p className="text-sm font-semibold text-[#D4A84F]">
                  Postal Address
                </p>
                <p className="mt-1 leading-6 text-gray-200">
                  Khayelitsha Section, Khayakhulu,
                  <br />
                  Rustenburg, North West, 2840
                </p>
              </div>

              {/* Services */}
              <div>
                <p className="text-sm font-semibold text-[#D4A84F]">
                  Services
                </p>
                <p className="mt-1 text-gray-300">
                  Plumbing Supplies • Building & Construction • Transport & Logistics • Water Supply Solutions • Catering Services •
                  VIP Mobile Toilets Hire • Mobile Fridges Hire • Training
                </p>
              </div>

            </div>
          </div>

          {/* Quote Form */}
          <form className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#B08A3C]"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                  Company / Organisation
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#B08A3C]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#B08A3C]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+27 ..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#B08A3C]"
                />
              </div>

            </div>

            {/* Service */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                Service Required
              </label>

              <select
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-600 outline-none transition focus:border-[#B08A3C]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Plumbing Supplies</option>
                <option>Building & Construction</option>
                <option>Transport & Logistics</option>
                <option>Water Supply Solutions</option>
                <option>Catering Services</option>
                <option>Cold-Chain Solutions</option>
                <option>Training</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#1B263B]">
                Project Details
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your project or requirements..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-[#B08A3C]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-[#1B263B] px-6 py-4 font-semibold text-white transition hover:bg-[#263650]"
            >
              Request a Quote
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;