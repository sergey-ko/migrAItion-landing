"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scan, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: Scan,
    number: "01",
    title: "Analyze",
    description: "Our AI scans your entire Django codebase, understanding template structure, data flow, and business logic.",
    duration: "Minutes",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Transform",
    description: "Intelligent automation converts Django templates to React components, maintaining all functionality and tests.",
    duration: "Hours",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deploy",
    description: "Zero-downtime deployment with automatic rollback capability. Your Django backend remains untouched.",
    duration: "Days",
  },
];

export function Solution() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-900/30 text-emerald-400 border-emerald-700 mb-4">
            THE SOLUTION
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Migration That Actually Works
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our intelligent automation handles the complexity so you don't have to. 
            Here's how we transform your Django frontend in days:
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-emerald-600 to-transparent transform translate-x-1/2 -z-10"></div>
              )}
              
              <Card className="bg-gray-900/80 border-gray-800 hover:border-emerald-700 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-bold text-gray-800">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <Badge variant="outline" className="border-emerald-700 text-emerald-400">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}