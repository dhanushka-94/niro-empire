'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-white p-1 rounded-lg">
            <Image
              src="/niro-logo.png"
              alt="Niro Empire Property Logo"
              width={120}
              height={50}
              className="h-auto"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/properties" className="nav-link">Properties</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation - Hidden by default */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/properties" className="block px-3 py-2 rounded-md text-white hover:bg-red-600">
            Properties
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-white hover:bg-red-600">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-red-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 