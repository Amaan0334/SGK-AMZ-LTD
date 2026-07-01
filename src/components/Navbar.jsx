import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Amazon Dashboard", path: "/amazon-dashboard" },
  { name: "FAQs", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-[#C89B3C]">
              SGK AMZ LTD
            </h1>

            <p className="text-xs text-gray-500">
              Premium Perfume Wholesale
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-[#C89B3C]"
                    : "text-gray-700 hover:text-[#C89B3C]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="bg-[#C89B3C] text-white px-6 py-3 rounded-full hover:bg-[#ad8533] transition"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium ${
                      isActive
                        ? "text-[#C89B3C]"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-[#C89B3C] text-white rounded-full py-3 text-center"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;