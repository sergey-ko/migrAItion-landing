"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Free Assessment",
    price: "$0",
    description: "Analyze your Django application",
    features: [
      "Detailed migration report",
      "Timeline estimate",
      "Cost breakdown",
      "Complexity analysis",
      "Risk assessment",
    ],
    cta: "Get Free Assessment",
    highlighted: false,
  },
  {
    name: "Pilot Project",
    price: "$2,500",
    description: "Try with 5 templates",
    features: [
      "Perfect for validation",
      "3-day delivery",
      "Full support",
      "Production ready code",
      "Success guarantee",
    ],
    cta: "Start Pilot",
    highlighted: false,
  },
  {
    name: "Standard Migration",
    price: "$15,000",
    description: "Up to 100 templates",
    features: [
      "Most applications",
      "2-week delivery",
      "3 months support",
      "Zero downtime migration",
      "Performance optimization",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Unlimited templates",
    features: [
      "Complex applications",
      "Dedicated team",
      "12 months support",
      "Priority delivery",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transparent, Value-Based Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our AI-powered migration technology 
            and success guarantee.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`relative ${
                tier.highlighted 
                  ? 'bg-gradient-to-b from-emerald-950/50 to-gray-900 border-emerald-700 scale-105' 
                  : 'bg-gray-900/50 border-gray-800'
              } hover:border-emerald-600 transition-all duration-300`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white">
                  {tier.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  {tier.description}
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  {tier.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    tier.highlighted 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Savings Calculator */}
        <div className="mt-16 bg-gray-900/50 rounded-xl border border-gray-800 p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Calculate Your Savings
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Number of templates
              </label>
              <input 
                type="number" 
                placeholder="50"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Current team size
              </label>
              <input 
                type="number" 
                placeholder="5"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Estimated timeline (months)
              </label>
              <input 
                type="number" 
                placeholder="6"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-2">Estimated savings with migrAItion</div>
            <div className="text-4xl font-bold text-emerald-400">$125,000</div>
            <div className="text-sm text-gray-400 mt-2">and 5 months of time</div>
          </div>
        </div>
      </div>
    </section>
  );
}