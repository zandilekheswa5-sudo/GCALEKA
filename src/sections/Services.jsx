import ServiceCard from "../components/ServiceCard";

import plumbingImage from "../images/plumbing.jpg";
import constructionImage from "../images/construction.jpg";
import logisticsImage from "../images/logistics.jpg";
import waterImage from "../images/water.jpg";
import cateringImage from "../images/catering.jpg";
import mobileToiletImage from "../images/mobile-toilet.jpg";
import coldChainImage from "../images/cold-chain.jpg";
import wasteManagementImage from "../images/waste-management.jpg";

function Services() {
  const services = [
    {
      image: plumbingImage,
      title: "Plumbing Supplies",
      description:
        "Supply of pipes, fittings, bathroomware, geysers, tools and waste management products. Products are sourced from reputable manufacturers with SANS compliance and supplied to contractors, developers and retail customers.",
    },

    {
      image: constructionImage,
      title: "Building & Construction",
      description:
        "Residential and commercial new builds, renovations, extensions and civil works, supported by project management, maintenance services and installation of permanent ablution facilities.",
    },

    {
      image: logisticsImage,
      title: "Transport & Logistics",
      description:
        "Material haulage and equipment delivery, fleet management and third-party logistics, including cold-chain and catering logistics, sanitation equipment transport and servicing, and waste collection and transportation coordination.",
    },

    {
      image: waterImage,
      title: "Water Supply Solutions",
      description:
        "Bulk water delivery, water storage tanks, rainwater harvesting systems, borehole drilling, pump installation, water treatment and irrigation systems.",
    },

    {
      image: cateringImage,
      title: "Catering Services",
      description:
        "Corporate, event and institutional catering, including construction-site and mobile catering, VIP catering, specialised dietary menus, and full-service event food and beverage management.",
    },

    {
      image: mobileToiletImage,
      title: "VIP Mobile Toilet Hire",
      description:
        "Standard, luxury and disabled-accessible portable toilets, shower units, urinal units and event restroom trailers, with regular servicing, cleaning and emergency support.",
    },

    {
      image: coldChainImage,
      title: "Mobile Fridge Hire",
      description:
        "Mobile fridge and freezer units, refrigerated trailers, cold-room hire, ice machines and beverage coolers, with temperature-controlled storage for events and catering.",
    },

    {
      image: wasteManagementImage,
      title: "Waste Management",
      description:
        "Waste management services coordinated through a licensed and accredited waste management partner, covering general, construction and demolition, hazardous, recyclable, liquid and organic waste, skip hire and event waste management.",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1F33] sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            GCALEKA provides integrated service solutions across construction,
            infrastructure, logistics, water, catering, facilities and waste
            management.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;