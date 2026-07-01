import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { incomeExpense } from "../../data/amazonSummary";

const COLORS = ["#C89B3C", "#EF4444"];

const IncomeExpenseChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-[450px]">
      <h2 className="text-2xl font-bold mb-8">
        Income vs Expenses
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={incomeExpense}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            label
          >
            {incomeExpense.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;