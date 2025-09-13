"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Zap, DollarSign } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden bg-gradient-to-b from-emerald-950 via-gray-900 to-gray-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgb(16 185 129 / 0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          <Badge variant="secondary" className="bg-emerald-900/30 text-emerald-400 border-emerald-700 px-3 py-1">
            <Zap className="w-3 h-3 mr-1" />
            90% faster migration
          </Badge>
          <Badge variant="secondary" className="bg-emerald-900/30 text-emerald-400 border-emerald-700 px-3 py-1">
            <DollarSign className="w-3 h-3 mr-1" />
            75% cost reduction
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Migrate Django to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            React
          </span>
          <br />
          in Days, Not Months
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          AI-powered automation that transforms your Django templates 10x faster than manual migration, 
          with zero downtime.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://www.linkedin.com/company/migraition/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}