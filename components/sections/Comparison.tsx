"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const comparisonData = [
  { aspect: "Timeline", manual: "6-12 months", migraition: "1-2 weeks" },
  { aspect: "Cost", manual: "$100k - $500k", migraition: "$10k - $50k" },
  { aspect: "Risk", manual: "High (65% fail)", migraition: "Low (guaranteed)" },
  { aspect: "Downtime", manual: "Days to weeks", migraition: "Zero" },
  { aspect: "Team Needed", manual: "5-10 developers", migraition: "1 coordinator" },
  { aspect: "Testing", manual: "Manual rewrite", migraition: "Automated" },
  { aspect: "Rollback", manual: "Complex", migraition: "Instant" },
  { aspect: "Support", manual: "Ends at delivery", migraition: "6 months included" },
];

export function Comparison() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            migrAItion vs. Manual Migration
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See why AI-powered migration is the clear choice for modernizing your Django frontend.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-gray-800">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-900/50 border-gray-800">
                <TableHead className="text-gray-400 font-semibold">Aspect</TableHead>
                <TableHead className="text-center">
                  <div className="text-red-400 font-semibold">Manual Migration</div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="text-emerald-400 font-semibold">migrAItion</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow 
                  key={index}
                  className="border-gray-800 hover:bg-gray-900/30 transition-colors"
                >
                  <TableCell className="font-medium text-white">
                    {row.aspect}
                  </TableCell>
                  <TableCell className="text-center text-gray-400">
                    {row.manual}
                  </TableCell>
                  <TableCell className="text-center text-gray-300 font-semibold">
                    {row.migraition}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg border border-gray-800 p-4">
              <div className="font-semibold text-white mb-3">{row.aspect}</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-red-400 mb-1">Manual</div>
                  <div className="text-sm text-gray-400">{row.manual}</div>
                </div>
                <div>
                  <div className="text-xs text-emerald-400 mb-1">migrAItion</div>
                  <div className="text-sm text-gray-300 font-semibold">{row.migraition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-emerald-900/20 rounded-xl border border-emerald-800 p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">
            10x Faster, 75% Cheaper, 100% Safer
          </h3>
          <p className="text-gray-400">
            The numbers speak for themselves. Ready to modernize your Django frontend?
          </p>
        </div>
      </div>
    </section>
  );
}