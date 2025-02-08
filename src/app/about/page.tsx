'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&auto=format&fit=crop&q=80"
          alt="Niro Empire Office"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Niro Empire Property has established itself as a leading force in the UK luxury real estate market. 
            With years of experience and a deep understanding of the property market, we provide unparalleled 
            service to our clients, whether they're seeking their dream home or making strategic investments.
          </p>
          <p className="text-gray-600 text-lg">
            Our commitment to excellence and attention to detail has earned us the trust of countless clients 
            and recognition within the industry. We pride ourselves on our ability to match our clients with 
            properties that not only meet but exceed their expectations.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Trust & Integrity</h3>
            <p className="text-gray-600">
              We build lasting relationships based on trust, transparency, and unwavering integrity in every transaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every aspect of our service, ensuring the highest standards in property solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Client Focus</h3>
            <p className="text-gray-600">
              Our clients' needs are at the heart of everything we do, providing personalized solutions for every requirement.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 