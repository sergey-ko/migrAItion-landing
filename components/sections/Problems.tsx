"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, DollarSign, AlertTriangle } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Slow Development Velocity",
    description: "Your team spends more time fighting with Django templates than building features. Modern frontend frameworks offer 3x faster development.",
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Django templates can't match the interactivity users expect. React delivers the responsive, dynamic experiences that keep users engaged.",
  },
  {
    icon: DollarSign,
    title: "Talent Shortage",
    description: "Finding Django template experts is hard. React developers are 10x more available and cost 30% less.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Migration Nightmare",
    description: "Consultancies quote 6-12 months and $100k+ for migration. Most projects fail or go over budget by 200%.",
  },
];

const stats = [
  { value: "73%", label: "of Django projects need frontend modernization" },
  { value: "$150/hr", label: "average consultant rate for manual migration" },
  { value: "8 months", label: "typical migration timeline" },
  { value: "65%", label: "of manual migrations exceed budget" },
];

export function Problems() {
  return (
    <section className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Your Django Frontend is Holding You Back
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Legacy Django templates are costing you time, money, and talent. 
            Here's what you're dealing with:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-emerald-700 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Bar - Hidden for now */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-gradient-to-r from-red-950/30 to-orange-950/30 rounded-xl border border-red-900/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}