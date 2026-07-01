const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[5px] text-[#C89B3C] font-semibold">
        {subtitle}
      </span>

      <h2 className="text-4xl lg:text-5xl font-bold mt-4">
        {title}
      </h2>

      <p className="text-gray-600 mt-6 leading-8">
        {description}
      </p>

    </div>
  );
};

export default SectionTitle;