import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import AmazonDashboard from "../pages/AmazonDashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route
path="/amazon-dashboard"
  element={<AmazonDashboard />}
/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;