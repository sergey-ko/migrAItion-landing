"use client";

import { Shield, Lock, Server, Trash2, Network, Home } from "lucide-react";

const securityPoints = [
  {
    icon: Server,
    title: "Ephemeral container",
    description: "Your repo is cloned into a single-tenant Docker container created just for your run; the container and its storage are destroyed at completion.",
  },
  {
    icon: Lock,
    title: "Least privilege",
    description: "Access via read-only deploy key/PAT with minimal scopes.",
  },
  {
    icon: Trash2,
    title: "No code retention",
    description: "We do not store your source code or use it for model training.",
  },
  {
    icon: Shield,
    title: "Logs",
    description: "Operational logs exclude source and are purged on request.",
  },
  {
    icon: Network,
    title: "Network",
    description: "Outbound access limited to your Git provider and required artifacts.",
  },
  {
    icon: Home,
    title: "On-prem option",
    description: "Self-hosted runner coming soon for teams that can't allow cloud processing.",
  },
];

export function Security() {
  return (
    <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
          Security & privacy
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          How we handle your code
        </p>

        <div className="space-y-6 mb-8">
          {securityPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-emerald-700" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>NDA:</strong> Happy to sign a mutual NDA before access (on request).
          </p>
        </div>

        {/* Short version for alternative display */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 italic text-center">
            <strong>TL;DR:</strong> We temporarily clone your repo into a single-tenant, ephemeral container to generate PRs. 
            The container is destroyed after the run. We never retain your code. On-prem runner coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}