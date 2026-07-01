import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[5px] text-[#C89B3C] font-semibold">
            Get In Touch
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 leading-tight">
            Looking for a Trusted
            <br />
            Perfume Wholesale Supplier?
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            Whether you're a retailer, distributor, or business partner,
            SGK AMZ LTD is ready to supply authentic premium fragrances with
            professional service and dependable wholesale support.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-[#C89B3C] hover:bg-[#B8892E] transition px-8 py-4 rounded-full font-semibold"
          >
            Request a Quote
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactCTA;