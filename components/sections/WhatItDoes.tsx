"use client";

import { Check } from "lucide-react";

const features = [
  "URL & SEO parity: preserve routes, meta tags, canonicals, redirects.",
  "SSR/SSG: Next.js by default for optimal performance.",
  "Template → Component: convert Django templates into React/TS components.",
  "Forms & auth nuances: CSRF/session handling carried forward.",
  "API scaffolding: helpers for DRF/GraphQL when views need extraction.",
  "Incremental rollout: page-by-page migration with fallback to Django.",
  "Tests: snapshot/unit test scaffolds for generated components.",
];

export function WhatItDoes() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          What it does
        </h2>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}