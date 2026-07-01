import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">

          <h1 className="text-8xl font-bold text-[#C89B3C]">
            404
          </h1>

          <h2 className="text-4xl font-bold mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-[#C89B3C] hover:bg-[#B8892E] text-white px-8 py-4 rounded-xl transition"
          >
            Back to Home
          </Link>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;