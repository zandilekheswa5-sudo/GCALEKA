function ServiceCard({ image, title, description }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="h-56 shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 h-1 w-10 shrink-0 rounded-full bg-[#C9A227]" />

        <h3 className="text-xl font-bold text-[#0B1F33]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
}

export default ServiceCard;