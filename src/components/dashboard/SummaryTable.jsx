import { motion } from "framer-motion";

const tableData = [
  {
    metric: "Product Sales",
    value: "£89,019.23",
  },
  {
    metric: "Net Transfers",
    value: "£62,764.12",
  },
  {
    metric: "Amazon Fees",
    value: "£29,163.87",
  },
  {
    metric: "Advertising Cost",
    value: "£11.96",
  },
  {
    metric: "Reporting Period",
    value: "Jan 2026 - Jun 2026",
  },
];

const SummaryTable = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Amazon Business Summary
        </motion.h2>

        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="w-full">

            <thead className="bg-[#111827] text-white">
              <tr>
                <th className="p-5 text-left">Metric</th>
                <th className="p-5 text-right">Amount</th>
              </tr>
            </thead>

            <tbody>

              {tableData.map((item, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-medium">
                    {item.metric}
                  </td>

                  <td className="p-5 text-right font-semibold text-[#C89B3C]">
                    {item.value}
                  </td>
                </tr>

              ))}

            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default SummaryTable;