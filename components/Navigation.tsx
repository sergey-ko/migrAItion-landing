"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/migrAItion-icon-blocks-512.png"
              alt="migrAItion"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">migrAItion</span>
          </Link>

          {/* CTA Button */}
          <Link href="https://www.linkedin.com/company/migraition/" target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Drop us a line
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}