"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

const criteria = [
  "Django apps using server-rendered templates (not already headless)",
  "50–2,000 templates, standard auth, typical middleware",
  "A dev lead willing to review PRs and give feedback",
];

export function EarlyAccess() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Early Access
        </h2>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Who we're looking for:
          </h3>
          <ul className="space-y-2">
            {criteria.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <p className="text-gray-700 mb-6 text-center">
            <strong>What you get:</strong> updates on the alpha, first invites, and the migration checklist.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    required 
                    className="bg-white border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="text-gray-700">Company</Label>
                <Input 
                  id="company" 
                  type="text" 
                  className="bg-white border-gray-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="templates" className="text-gray-700">Approx. templates</Label>
                  <Input 
                    id="templates" 
                    type="text" 
                    placeholder="e.g., 100-200"
                    className="bg-white border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="django" className="text-gray-700">Django version</Label>
                  <Input 
                    id="django" 
                    type="text" 
                    placeholder="e.g., 4.2"
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-gray-700">Notes (optional)</Label>
                <Input 
                  id="notes" 
                  type="text" 
                  className="bg-white border-gray-300"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Join the waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Thanks for your interest!
              </h3>
              <p className="text-gray-600">
                We'll be in touch when early access opens.
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Questions? Email us at{" "}
          <a href="mailto:hello@migraition.com" className="text-emerald-600 hover:underline">
            hello@migraition.com
          </a>
        </p>
      </div>
    </section>
  );
}