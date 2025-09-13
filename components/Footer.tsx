import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
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
            <span className="text-sm text-gray-400">
              © 2025 migrAItion. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center">
            <Link
              href="https://www.linkedin.com/company/migraition/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}