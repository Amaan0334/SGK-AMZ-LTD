import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQPreview";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
        <WhyChooseUs />
        <FAQ />
        <ContactCTA />
        <Footer />
    </>
  );
};

export default Home;