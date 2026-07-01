import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Package,
  Handshake,
} from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            About SGK AMZ LTD
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            SGK AMZ LTD is a trusted UK-based wholesale supplier specializing in
            authentic premium perfumes for retailers, distributors, and business
            partners.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
            Our Story
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Building Trust Through Quality & Reliability
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            SGK AMZ LTD specializes in supplying authentic premium perfumes to
            retailers, distributors, and business partners. We are committed to
            delivering genuine products, dependable wholesale solutions, and
            professional customer service.
          </p>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            Our goal is to establish long-term business relationships by
            maintaining the highest standards of integrity, quality, and
            reliability in every order we supply.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-lg p-10"
          >
            <Target className="text-[#C89B3C]" size={45} />

            <h3 className="text-3xl font-bold mt-6">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              To provide authentic premium fragrances through dependable
              wholesale services while creating long-term value for our
              customers and business partners.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-lg p-10"
          >
            <Eye className="text-[#C89B3C]" size={45} />

            <h3 className="text-3xl font-bold mt-6">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 leading-8">
              To become a trusted and recognized wholesale supplier of premium
              perfumes by consistently delivering quality, professionalism, and
              exceptional customer service.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
              Why Choose SGK AMZ LTD
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Our Core Values
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl shadow-md p-8 text-center"
            >
              <ShieldCheck
                className="mx-auto text-[#C89B3C]"
                size={45}
              />

              <h3 className="text-2xl font-bold mt-6">
                Authenticity
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We supply only genuine products sourced from trusted partners.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl shadow-md p-8 text-center"
            >
              <Package
                className="mx-auto text-[#C89B3C]"
                size={45}
              />

              <h3 className="text-2xl font-bold mt-6">
                Quality
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Every product is selected with a focus on quality,
                presentation, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl shadow-md p-8 text-center"
            >
              <Handshake
                className="mx-auto text-[#C89B3C]"
                size={45}
              />

              <h3 className="text-2xl font-bold mt-6">
                Partnership
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We believe in building long-term relationships through trust,
                reliability, and professional service.
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      <ContactCTA />
      <Footer />
    </>
  );
};

export default About;