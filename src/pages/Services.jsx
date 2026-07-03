import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Package,
  Boxes,
  Handshake,
  Truck,
  MessageSquare,
  ClipboardCheck,
  ShoppingBag,
  CircleCheckBig,
  Store,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Wholesale Perfume Supply",
    description:
      "Supplying authentic premium perfumes to retailers, wholesalers, and businesses across the UK with reliable service and competitive pricing.",
  },
  {
    icon: Boxes,
    title: "Bulk Order Fulfillment",
    description:
      "Efficient handling of large-volume orders with secure packaging, timely dispatch, and professional customer support.",
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    description:
      "Building long-term partnerships with retailers, distributors, and online businesses.",
  },
  {
    icon: Store,
    title: "Amazon Account Management",
    description:
      "Comprehensive Amazon account management services including PPC campaign management, inventory management, shipment planning, product listing optimization, account health monitoring, A+ Content creation, brand management, and performance reporting.",
    hasButton: true,
  },
  {
    icon: Truck,
    title: "Reliable Product Sourcing",
    description:
      "Providing authentic branded fragrance products sourced from trusted suppliers and manufacturers.",
  },
  {
    icon: Store,
    title: "TikTok Shop Management & Ads",
    description:
      "Professional TikTok Shop management including product listings, paid advertising campaigns, audience targeting, performance monitoring, and sales growth strategies.",
  },
  {
    icon: ShoppingBag,
    title: "eBay Account Management",
    description:
      "Complete eBay account handling including listings, inventory management, order fulfillment, customer support, account optimization, and performance reporting.",
  },
  {
    icon: MonitorSmartphone,
    title: "Full Stack Web Development",
    description:
      "Custom business websites, eCommerce stores, dashboards, APIs, and web applications developed using modern frontend and backend technologies.",
  },
];

const process = [
  {
    icon: MessageSquare,
    title: "Inquiry",
  },
  {
    icon: ShoppingBag,
    title: "Product Selection",
  },
  {
    icon: ClipboardCheck,
    title: "Quotation",
  },
  {
    icon: CircleCheckBig,
    title: "Order Confirmation",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Our Services
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            SGK AMZ LTD delivers comprehensive business solutions including wholesale perfume supply, Amazon marketplace management, TikTok Shop advertising, eBay account management, and full stack web development to help businesses grow online.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
              What We Offer
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Professional Wholesale Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 rounded-3xl p-8 shadow-md text-center flex flex-col"
                >
                  <Icon
                    size={45}
                    className="mx-auto text-[#C89B3C]"
                  />

                  <h3 className="text-2xl font-bold mt-6">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7 flex-grow">
                    {service.description}
                  </p>

                 {service.hasButton && (
  <>
    <div className="mt-6 p-4 rounded-xl bg-[#C89B3C]/10 border border-[#C89B3C]/20">
      <p className="text-sm text-gray-700">
        Explore one of our client's Amazon account management case studies,
        showcasing PPC campaigns, advertising performance, inventory control,
        shipment management, and overall marketplace growth.
      </p>
    </div>

    <Link
      to="/amazon-dashboard"
      className="mt-5 inline-flex items-center justify-center w-full bg-[#C89B3C] hover:bg-[#b8892e] text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
    >
      View Amazon Case Study →
    </Link>
  </>
)}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-[#C89B3C] font-semibold">
              Our Process
            </span>

            <h2 className="text-4xl font-bold mt-4">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl shadow-md p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C89B3C]/10 mx-auto flex items-center justify-center">
                    <Icon
                      size={32}
                      className="text-[#C89B3C]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    {step.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  );
};

export default Services;