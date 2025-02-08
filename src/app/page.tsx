'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";

// Sample featured properties data
const featuredProperties = [
  {
    id: "1",
    title: "2 Bed Flat in North Birkbeck Road",
    price: 1750,
    location: "Leytonstone, London E11",
    bedrooms: 2,
    bathrooms: 1,
    area: 472,
    imageUrl: "/properties/north-birkbeck.jpg",
    features: [
      "First Floor Flat",
      "Open-Plan Living Area",
      "Near Leyton Underground",
      "Double Glazed Windows",
      "Gas Central Heating"
    ]
  },
  {
    id: "2",
    title: "2 Bed Maisonette in Seymour Road",
    price: 1700,
    location: "London, E10",
    bedrooms: 2,
    bathrooms: 1,
    area: 450,
    imageUrl: "/properties/seymour-road.jpg",
    features: [
      "Ground Floor Maisonette",
      "Private Garden",
      "Newly Refurbished",
      "Spacious Lounge",
      "Modern Interior"
    ]
  },
  {
    id: "3",
    title: "1 Bed Flat in Tredegar Road",
    price: 1500,
    location: "Bow, London",
    bedrooms: 1,
    bathrooms: 1,
    area: 400,
    imageUrl: "/properties/tredegar-road.jpg",
    features: [
      "Modern Development",
      "Close to Mile End Station",
      "Fully Furnished",
      "Open Plan Kitchen",
      "Available Now"
    ]
  }
];

export default function Home() {
  const handleSearch = (searchParams: {
    location: string;
    propertyType: string;
    minPrice: string;
    maxPrice: string;
  }) => {
    console.log("Search params:", searchParams);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&auto=format&fit=crop&q=80"
          alt="Luxury UK Property"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fadeIn">
            Find Your Dream Property with Niro Empire
          </h1>
          <p className="text-xl mb-12 animate-fadeIn">
            Premium Properties Across the United Kingdom
          </p>
          <div className="w-full animate-fadeIn">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Niro Empire Property
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Locations</h3>
              <p className="text-gray-600">Exclusive properties in the most desirable UK locations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-600">Your trusted partner in real estate excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional guidance throughout your property journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let Niro Empire Property help you find the perfect property that matches your needs and preferences.
            Our expert team is ready to guide you through every step of the process.
          </p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
