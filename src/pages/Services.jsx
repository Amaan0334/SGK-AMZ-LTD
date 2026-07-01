import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";
import {
  Package,
  Boxes,
  Handshake,
  Truck,
  MessageSquare,
  ClipboardCheck,
  ShoppingBag,
  CircleCheckBig,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Wholesale Perfume Supply",
    description:
      "Supplying authentic premium perfumes to retailers and wholesale businesses.",
  },
  {
    icon: Boxes,
    title: "Bulk Order Fulfillment",
    description:
      "Efficient handling of bulk orders with reliable service and professional support.",
  },
  {
    icon: Handshake,
    title: "Business Partnerships",
    description:
      "Building long-term partnerships with retailers and distributors.",
  },
  {
    icon: Truck,
    title: "Reliable Product Sourcing",
    description:
      "Providing authentic fragrance products sourced from trusted suppliers.",
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
            SGK AMZ LTD provides reliable wholesale perfume solutions,
            authentic products, and professional support for retailers and
            business partners.
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
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-3xl p-8 shadow-md text-center"
                >
                  <Icon
                    size={45}
                    className="mx-auto text-[#C89B3C]"
                  />

                  <h3 className="text-2xl font-bold mt-6">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {service.description}
                  </p>
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
                <div
                  key={index}
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
                </div>
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