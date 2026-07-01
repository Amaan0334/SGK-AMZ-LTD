import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden group"
    >
      <div className="overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-contain p-6 transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <span className="text-[#C89B3C] text-sm font-semibold uppercase">
          {product.brand}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
          {product.description}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-6 inline-flex items-center gap-2 text-[#C89B3C] font-semibold"
        >
          View Details

          <ArrowRight size={18} />
        </Link>

      </div>
    </motion.div>
  );
};

export default ProductCard;