import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              SGK AMZ LTD
            </h3>

            <p className="mt-5 leading-7">
              Trusted UK wholesale supplier of authentic premium perfumes,
              serving retailers and business partners with quality products
              and professional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-2">
  <li>
    <Link to="/" className="hover:text-[#C89B3C] transition">
      Home
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-[#C89B3C] transition">
      About
    </Link>
  </li>

  <li>
    <Link to="/services" className="hover:text-[#C89B3C] transition">
      Services
    </Link>
  </li>

  <li>
    <Link to="/products" className="hover:text-[#C89B3C] transition">
      Products
    </Link>
  </li>

  <li>
    <Link to="/faq" className="hover:text-[#C89B3C] transition">
      FAQs
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-[#C89B3C] transition">
      Contact
    </Link>
  </li>
<li>
  <Link
    to="/amazon-dashboard"
    className="hover:text-[#C89B3C] transition"
  >
    Amazon Dashboard
  </Link>
</li>

</ul>
          </div>

          {/* Contact */}
          <div>

            <h4 className="text-xl font-semibold text-white mb-5">
              Contact
            </h4>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#C89B3C]" />
                sales.sgk178@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#C89B3C]" />
                +44 7848 162760
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-[#C89B3C]" />
                United Kingdom
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SGK AMZ LTD. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;