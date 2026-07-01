import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import StatsCard from "../components/dashboard/StatsCard";
import { dashboardStats } from "../data/amazonSummary";
import IncomeExpenseChart from "../components/dashboard/IncomeExpenseChart";
import SalesOverview from "../components/dashboard/SalesOverview";
import BusinessInfo from "../components/dashboard/BusinessInfo";
import SummaryTable from "../components/dashboard/SummaryTable";
import Verification from "../components/dashboard/Verification";
import CTA from "../components/dashboard/CTA";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const AmazonDashboard = () => {
  return (
    <>
      <Navbar />

      <DashboardHeader />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            Amazon Business Dashboard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8"
          >
            A transparent overview of Amazon marketplace performance and
            wholesale business operations.
          </motion.p>
        </div>
      </section>

      {/* Client Case Study Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#C89B3C] text-white px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Client Case Study
          </div>

          <h2 className="text-3xl font-bold text-[#111827]">
            Client Performance Showcase
          </h2>

          <p className="mt-5 text-gray-700 leading-8 text-lg">
            The statistics, charts, and business summary presented below
            belong to one of our valued clients and are shared for
            demonstration purposes only. They showcase the type of Amazon
            marketplace performance we support and should not be interpreted
            as the trading statistics of SGK AMZ LTD.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {dashboardStats.map((item, index) => (
              <StatsCard
                key={index}
                title={item.title}
                value={item.value}
                color={item.color}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <IncomeExpenseChart />
            <SalesOverview />
          </div>
        </div>
      </section>

      <BusinessInfo />
      <SummaryTable />
      <Verification />

      {/* Business Highlights */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold text-[#C89B3C]">100%</h2>
            <p className="mt-3">Authentic Products</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#C89B3C]">UK</h2>
            <p className="mt-3">Registered Business</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#C89B3C]">24/7</h2>
            <p className="mt-3">Business Support</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#C89B3C]">Amazon</h2>
            <p className="mt-3">Marketplace Partner</p>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </>
  );
};

export default AmazonDashboard;