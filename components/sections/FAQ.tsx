"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI understand my Django templates?",
    answer: "Our AI is trained on millions of Django patterns. It understands template inheritance, filters, tags, and context processors better than most developers. The system analyzes your entire codebase to maintain consistency and preserve business logic.",
  },
  {
    question: "Will my Django backend change?",
    answer: "No. We only migrate the frontend. Your Django backend, APIs, and business logic remain untouched. The new React frontend connects to your existing Django APIs seamlessly.",
  },
  {
    question: "What if something goes wrong?",
    answer: "Every migration includes automatic rollback capability. If any issues arise, you can instantly revert while we fix them. Our success guarantee means we don't stop until your migration is perfect.",
  },
  {
    question: "Do you support custom Django template tags?",
    answer: "Yes. Our AI learns your custom tags and filters, converting them to appropriate React equivalents. Complex template logic is transformed into clean, maintainable component code.",
  },
  {
    question: "What about SEO?",
    answer: "We implement SSR/SSG for React, often improving SEO. Most clients see 20-30% better search rankings due to faster page loads and better core web vitals.",
  },
  {
    question: "Can I migrate incrementally?",
    answer: "Absolutely. Start with one section and expand at your pace. Our progressive migration ensures zero disruption. You can run Django templates and React components side by side.",
  },
  {
    question: "What support do you provide?",
    answer: "Every plan includes support during and after migration. We ensure your team is confident with the new stack. Extended support packages are available for ongoing assistance.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about 
            our Django to React migration service.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-6 data-[state=open]:border-emerald-700 transition-colors"
            >
              <AccordionTrigger className="text-left text-white hover:text-emerald-400 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-gray-800/50 rounded-xl border border-gray-700 p-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-4">
            Our team is here to help. Schedule a call to discuss your specific needs.
          </p>
          <Link href="https://www.linkedin.com/company/migraition/" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30"
            >
              Drop us a line
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Need to import Button
import { Button } from "@/components/ui/button";