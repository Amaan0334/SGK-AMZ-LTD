import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_rdosjd5",
        "template_1ddx7e7",
        form.current,
        "H8NObnSxBOZ44nOMV"
      )
      .then(() => {
        alert("✅ Quote request sent successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Contact Us
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            We'd love to hear from you. Contact us for wholesale perfume
            inquiries and business partnerships.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <Mail className="text-[#C89B3C]" size={28} />
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-gray-600">
                    sales.sgk178@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#C89B3C]" size={28} />
                <div>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <p className="text-gray-600">
                    +44 7848 162760
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="text-[#C89B3C]" size={28} />
                <div>
                  <h3 className="font-semibold text-xl">Company</h3>
                  <p className="text-gray-600">
                    SGK AMZ LTD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#C89B3C]" size={28} />
                <div>
                  <h3 className="font-semibold text-xl">Business</h3>
                  <p className="text-gray-600">
                    UK Wholesale Perfume Supplier
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <input
                type="text"
                name="company_no"
                placeholder="Company No."
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              />

              <select
                name="category"
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              >
                <option value="">Select Product Category</option>
                <option value="Perfumes">Perfumes</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
                className="w-full border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C89B3C] hover:bg-[#B8892E] text-white py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Request a Quote"}
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;