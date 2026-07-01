import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[5px] text-[#C89B3C] font-semibold">
            Featured Products
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Premium Fragrances
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover our carefully selected collection of authentic premium
            perfumes available for wholesale supply.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;