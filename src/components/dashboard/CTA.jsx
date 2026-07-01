import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold">
          Looking for a Trusted Wholesale Partner?
        </h2>

        <p className="mt-6 text-gray-300 text-lg leading-8">
          SGK AMZ LTD supplies authentic branded perfumes to wholesale
          customers and Amazon marketplace businesses across the United
          Kingdom.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 bg-[#C89B3C] hover:bg-[#b8892e] px-8 py-4 rounded-xl font-semibold transition"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
};

export default CTA;