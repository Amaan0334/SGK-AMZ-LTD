import { motion } from "framer-motion";
import {
  ShieldCheck,
  PackageCheck,
  BadgeCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description:
      "We supply genuine premium perfumes sourced from trusted fragrance brands.",
  },
  {
    icon: PackageCheck,
    title: "Wholesale Expertise",
    description:
      "Reliable B2B wholesale solutions tailored for retailers and distributors.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every product is selected with a focus on quality, authenticity, and presentation.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We believe in building long-term relationships through professionalism and reliability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-[#C89B3C] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Trusted Wholesale Partner
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            SGK AMZ LTD is committed to delivering authentic premium perfumes,
            dependable wholesale services, and professional support for
            retailers and business partners.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-[#F8FAFC] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-[#C89B3C]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#C89B3C]" size={32} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;