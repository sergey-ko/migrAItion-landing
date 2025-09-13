"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, CheckCircle, TrendingUp, Target, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Complete migration in days instead of months. Our AI processes thousands of templates per hour.",
  },
  {
    icon: Shield,
    title: "Zero Downtime",
    description: "Progressive migration with automatic fallbacks. Your application stays live throughout the process.",
  },
  {
    icon: CheckCircle,
    title: "Test Preservation",
    description: "All existing tests are maintained and adapted. New component tests are automatically generated.",
  },
  {
    icon: TrendingUp,
    title: "Performance Boost",
    description: "Average 40-60% performance improvement. Faster page loads, better SEO, happier users.",
  },
  {
    icon: Target,
    title: "Pixel Perfect",
    description: "AI ensures visual consistency. Every migration is validated against original designs.",
  },
  {
    icon: RefreshCw,
    title: "Incremental Migration",
    description: "Start with one page or migrate everything at once. You control the pace and scope.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Everything You Need for Seamless Migration
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Powerful features designed to make your Django to React migration smooth, 
            safe, and successful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-emerald-600 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-900/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 rounded-xl border border-emerald-900/50 p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Plus Everything You'd Expect
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                "TypeScript Support",
                "SSR/SSG Ready",
                "SEO Optimized",
                "Mobile Responsive",
                "API Integration",
                "Form Handling",
                "State Management",
                "Route Migration",
                "Asset Optimization",
                "CI/CD Ready",
              ].map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}