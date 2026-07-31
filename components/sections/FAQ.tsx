"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--accent)">
          FAQ
        </p>
        <h2 className="mt-4 font-heading text-4xl font-black uppercase text-[#202020] md:text-6xl">
          Common Questions
        </h2>
      </div>
      <div className="grid items-start gap-5 md:grid-cols-2">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full self-start cursor-pointer text-left"
              aria-expanded={isOpen}
            >
              <div className="w-full border border-[#d8d5ce] bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-heading text-xs font-black uppercase tracking-[0.3em]">
                    {item.question}
                  </span>
                  <span className="text-xl leading-none">
                    {isOpen ? "x" : "+"}
                  </span>
                </div>
                {isOpen && <p className="pt-4 text-[#625f59]">{item.answer}</p>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
