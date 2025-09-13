"use client";

import { CheckCircle2, Shield, Code2 } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Keep SEO intact",
    description: "URL parity, meta, canonicals, and redirects carried over.",
  },
  {
    icon: Shield,
    title: "Modernize safely",
    description: "SSR/SSG with Next.js, tests and snapshots generated, incremental cutover.",
  },
  {
    icon: Code2,
    title: "Less boilerplate",
    description: "Automated component extraction from templates; engineers review edge cases.",
  },
];

export function WhyTeamsUse() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Why teams use migrAItion
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg flex items-center justify-center mb-3">
                <reason.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}