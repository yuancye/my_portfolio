import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">
                  Portfolio
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
                <Link href="/about" className="hover:text-gray-600 dark:hover:text-gray-300">About</Link>
                <Link href="/education" className="hover:text-gray-600 dark:hover:text-gray-300">Education</Link>
                <Link href="/experience" className="hover:text-gray-600 dark:hover:text-gray-300">Experience</Link>
                <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</Link>
                <Link href="/publications" className="hover:text-gray-600 dark:hover:text-gray-300">Publications</Link>
                <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
