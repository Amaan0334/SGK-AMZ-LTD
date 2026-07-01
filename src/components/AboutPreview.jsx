import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpeg";
import { CheckCircle } from "lucide-react";

const features = [
  "Authentic Premium Perfumes",
  "UK-Based Wholesale Supplier",
  "Reliable Business Partnerships",
  "Professional Customer Support",
];

const AboutPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute -inset-5 bg-[#C89B3C]/20 rounded-full blur-3xl"></div>

              <img
                src={aboutImage}
                alt="About SGK AMZ LTD"
                className="relative w-[350px] lg:w-[450px] rounded-3xl shadow-2xl"
              />

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
              About Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900 leading-tight">
              Your Trusted Partner for Premium Perfume Wholesale
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              SGK AMZ LTD is a UK-based wholesale supplier specializing in
              authentic perfumes and luxury fragrances. We work closely with
              trusted brands to supply retailers and business partners with
              premium products, dependable sourcing, and professional service.
            </p>

            <div className="mt-8 space-y-4">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-[#C89B3C]"
                    size={22}
                  />

                  <span className="text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/about"
              className="inline-block mt-10 bg-[#C89B3C] hover:bg-[#B8892E] transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Learn More
            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;