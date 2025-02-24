import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import '../assets/styles/style.css'

const faqs = [
  {
    id: 1,
    question: "What are the ingredients in Fanapo pads?",
    answer: "Fanapo pads are made with GOTS organic cotton top sheet, ensuring they are free from harmful chemicals."
  },
  {
    id: 2,
    question: "Why organic cotton?",
    answer: "Organic cotton is naturally breathable, hypoallergenic, and free from pesticides and harmful chemicals, making it ideal for sensitive skin."
  },
  {
    id: 3,
    question: "What size are Fanapo pads?",
    answer: "Fanapo pads come in various sizes to suit different needs: Regular (240mm), Heavy Flow (280mm), and Overnight (320mm)."
  },
  {
    id: 4,
    question: "How often do I change a Fanapo pads?",
    answer: "For optimal hygiene, we recommend changing your pad every 4-6 hours, or more frequently during heavy flow days."
  },
  {
    id: 5,
    question: "What is Fanapo's shipping policy?",
    answer: "We offer free shipping on all orders above ₹499. Orders are delivered within 3-5 business days across India."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = React.useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>FAQ - Fanapo</title>
        <meta name="description" content="Frequently asked questions about Fanapo products" />
      </Helmet>
      <section className="py-16 bg-[#F4EFF6]">
        <div className="container max-w-7xl mx-auto ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            FAQ's
          </motion.h1>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-[#D70283]"
              >
                <button
                  className="w-full text-left py-6   gruop  transition-all flex justify-between items-center"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-medium faq-font text-[#D70283]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                     className="ml-4 flex-shrink-0"
                  >
                    {openId === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-[#D70283]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#D70283]" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className=" pb-6  ">
                        <p className="text-[#D70283]">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;