"use client";

const steps = [
  {
    number: "1",
    title: "Analyze",
    description: "Read-only access to your repo; we map templates, routes, and assets.",
  },
  {
    number: "2",
    title: "Transform",
    description: "Generate React/TS components + Next.js pages with routing/meta.",
  },
  {
    number: "3",
    title: "Review & rollout",
    description: "You review PRs; we guide incremental cutover.",
  },
];

const outputs = [
  "Migration plan",
  "PRs with diffs",
  "Redirect map",
  "Test stubs",
  "Rollout checklist",
];

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
          How it works
        </h2>
        
        {/* Steps */}
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outputs */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Outputs:
          </p>
          <div className="flex flex-wrap gap-2">
            {outputs.map((output, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-sm"
              >
                {output}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}