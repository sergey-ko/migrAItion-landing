"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 rounded-2xl border border-emerald-800 p-8 md:p-12">
          <div className="text-center mb-8">
            <Badge className="bg-emerald-900/30 text-emerald-400 border-emerald-700 mb-4">
              LIMITED TIME OFFER
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Start Your Migration Journey Today
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join 50+ companies already transforming their Django applications. 
              Get early access and special pricing.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-emerald-600"
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6"
                >
                  {isLoading ? "Joining..." : "Join the Waitlist"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                No spam, ever. One-click unsubscribe.
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-900/30 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                You're on the List! 🎉
              </h3>
              <p className="text-gray-300 mb-4">
                You're #51 on our waitlist. We'll contact you within 48 hours with:
              </p>
              <ul className="text-left max-w-sm mx-auto space-y-2 text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  Free migration assessment
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  Early access invitation
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  Special launch pricing
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                  Django migration guide
                </li>
              </ul>
            </div>
          )}

          {/* Alternative CTAs */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <button 
                id="demo"
                className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold text-white mb-1">Schedule a Demo</h4>
                <p className="text-sm text-gray-400">See migrAItion in action</p>
              </button>
              <button className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-semibold text-white mb-1">Get Free Assessment</h4>
                <p className="text-sm text-gray-400">Analyze your Django app</p>
              </button>
              <button className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                <h4 className="font-semibold text-white mb-1">Download Guide</h4>
                <p className="text-sm text-gray-400">Migration best practices</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}