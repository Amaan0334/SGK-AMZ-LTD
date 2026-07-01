import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { salesOverview } from "../../data/amazonSummary";

const SalesOverview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-[450px]">
      <h2 className="text-2xl font-bold mb-8">
        Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={salesOverview}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="amount"
            fill="#C89B3C"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverview;