import { motion } from "framer-motion";

const StatsCard = ({ title, value, color }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-8 border-l-4"
      style={{ borderColor: color }}
    >
      <p className="text-gray-500 text-sm uppercase tracking-wide">
        {title}
      </p>

      <h2
        className="text-4xl font-bold mt-4"
        style={{ color }}
      >
        {value}
      </h2>
    </motion.div>
  );
};

export default StatsCard;