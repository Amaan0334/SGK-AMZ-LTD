import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-[#C89B3C]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 min-h-screen grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[6px] text-[#C89B3C] font-semibold mb-4">
            Welcome to SGK AMZ LTD
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premium
            <br />
            Perfume
            <br />
            Wholesale Supplier
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
            SGK AMZ LTD is a trusted UK-based wholesale supplier of authentic
            premium perfumes. We provide high-quality fragrances to retailers,
            distributors, and business partners with professionalism,
            reliability, and exceptional service.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              to="/products"
              className="bg-[#C89B3C] hover:bg-[#B8892E] transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Golden Circle */}
          <div className="absolute w-80 h-80 bg-[#C89B3C]/20 rounded-full blur-3xl"></div>

          {/* Floating Bottle */}
          <motion.img
            src={heroImage}
            alt="Premium Perfume"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[320px] md:w-[420px] lg:w-[480px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;