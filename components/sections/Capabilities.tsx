"use client";

import { Check } from "lucide-react";

const capabilities = [
  {
    category: "SEO & URLs",
    items: ["URL parity", "Redirects", "Sitemap import", "Structured data carry-over"],
  },
  {
    category: "SSR/SSG",
    items: ["Next.js", "Hydration", "Image/static pipeline"],
  },
  {
    category: "Forms & Auth",
    items: ["CSRF/session nuances", "Login/registration flows"],
  },
  {
    category: "APIs",
    items: ["DRF/GraphQL scaffolding", "View extraction helpers"],
  },
  {
    category: "Styling",
    items: ["Tailwind/Bootstrap", "Jinja filter equivalents where feasible"],
  },
  {
    category: "Testing",
    items: ["Snapshot/unit test scaffolds for generated components"],
  },
  {
    category: "Rollout",
    items: ["Page-by-page migration", "Feature flags", "Fallback to Django when needed"],
  },
  {
    category: "Security",
    items: ["Local/VPC runner", "No source retained by us", "SOC-friendly process"],
  },
];

export function Capabilities() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Capabilities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {cap.category}
              </h3>
              <ul className="space-y-1">
                {cap.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}