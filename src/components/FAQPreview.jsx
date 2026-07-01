import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What products does SGK AMZ LTD supply?",
    answer:
      "We specialize in authentic premium perfumes from trusted fragrance brands for wholesale distribution.",
  },
  {
    question: "Do you sell directly to consumers?",
    answer:
      "No. Our business is focused on wholesale supply for retailers, distributors, and business partners.",
  },
  {
    question: "Are all products authentic?",
    answer:
      "Yes. We are committed to supplying only genuine, authentic fragrance products from trusted sources.",
  },
  {
    question: "How can I request product information?",
    answer:
      "Simply visit our Contact page or submit the inquiry form, and our team will get back to you.",
  },
  {
    question: "Can I request a wholesale quotation?",
    answer:
      "Yes. Use our contact form to request a quote based on your business requirements.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-[#C89B3C] font-semibold">
            FAQs
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5">
            Find answers to common questions about our wholesale perfume business.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                {active === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;