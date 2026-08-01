import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import useReveal from "../../Hooks/UseReveal";
import useStaggerReveal from "../../Hooks/useStaggerReveal";

const faqs = [
  {
    id: 1,
    question: "What are your opening hours?",
    answer:
      "We're open every day from 8:00 AM to 10:00 PM, including weekends and holidays.",
  },
  {
    id: 2,
    question: "Do you offer takeaway and delivery?",
    answer:
      "Yes. You can enjoy takeaway from our café or order online for home delivery.",
  },
  {
    id: 3,
    question: "Do you serve vegetarian or vegan options?",
    answer:
      "Absolutely! We offer a variety of vegan drinks, dairy-free milk alternatives, and vegetarian snacks.",
  },
  {
    id: 4,
    question: "Can I reserve a table?",
    answer:
      "Yes. Reservations are available for small groups and private gatherings.",
  },
  {
    id: 5,
    question: "Do you sell coffee beans?",
    answer:
      "Yes. We sell freshly roasted whole beans and ground coffee in multiple roast profiles.",
  },
  {
    id: 6,
    question: "Do you provide free Wi-Fi?",
    answer:
      "Yes. High-speed Wi-Fi is available free of charge for all customers.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(1);

  useReveal(".faq-section");
  useStaggerReveal(".faq-section", ".faq-item");

  const toggleFAQ = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section py-24 bg-[#181715]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-amber-500">
            FAQs
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-zinc-400 leading-8 max-w-2xl mx-auto">
            Find quick answers to the questions we receive most often from
            our customers.
          </p>

        </div>

        {/* Accordion */}

        <div className="space-y-5">

          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="faq-item rounded-3xl border border-zinc-800 bg-[#111111] overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-xl font-semibold">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    active === faq.id ? "rotate-180 text-amber-500" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === faq.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-zinc-400 leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;