import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";
import products from "../data/products";
import { CheckCircle } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="py-40 text-center">
          <h1 className="text-4xl font-bold">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="text-[#C89B3C] mt-6 inline-block"
          >
            Back to Products
          </Link>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="bg-gray-100 rounded-3xl p-10">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-contain"
              />

            </div>

            <div>

              <span className="uppercase text-[#C89B3C] font-semibold tracking-[4px]">
                {product.brand}
              </span>

              <h1 className="text-5xl font-bold mt-4">
                {product.name}
              </h1>

              <p className="mt-8 text-gray-600 leading-8">
                {product.description}
              </p>

              <div className="mt-10 space-y-4">

                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      className="text-[#C89B3C]"
                    />

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <Link
                to="/contact"
                className="inline-block mt-10 bg-[#C89B3C] hover:bg-[#B8892E] text-white px-8 py-4 rounded-full transition"
              >
                Request a Quote
              </Link>

            </div>

          </div>

        </div>

      </section>

      <ContactCTA />

      <Footer />
    </>
  );
};

export default ProductDetails;