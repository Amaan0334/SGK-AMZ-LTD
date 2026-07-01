import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you sell authentic perfumes?",
    answer:
      "Yes. SGK AMZ LTD supplies authentic premium perfumes sourced from trusted suppliers.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "Yes. We specialize in wholesale supply for retailers, distributors, and business partners.",
  },
  {
    question: "Can I request a quotation?",
    answer:
      "Absolutely. Simply complete the Contact form and our team will get back to you with a quotation.",
  },
  {
    question: "Do you sell directly to consumers?",
    answer:
      "No. Our business primarily focuses on wholesale supply and business partnerships.",
  },
  {
    question: "Which perfume brands do you currently supply?",
    answer:
      "We currently supply selected premium fragrance brands including Khadlaj and Riiffs.",
  },
  {
    question: "How can I contact SGK AMZ LTD?",
    answer:
      "You can contact us via email at sales.sgk178@gmail.com or by using the Contact page.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B0F19] via-[#111827] to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
            Find answers to common questions about our wholesale perfume business.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl mb-5 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}

                {openIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default FAQPage;