'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';

// Properties data
const properties = [
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

// Property Filters Component
function PropertyFilters() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
            <option value="">All Types</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="maisonette">Maisonette</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
            <option value="">No Min</option>
            <option value="1000">£1,000 PCM</option>
            <option value="1500">£1,500 PCM</option>
            <option value="2000">£2,000 PCM</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
            <option value="">No Max</option>
            <option value="2000">£2,000 PCM</option>
            <option value="2500">£2,500 PCM</option>
            <option value="3000">£3,000 PCM</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
          Search Properties
        </button>
      </div>
    </div>
  );
}

// Property Grid Component
function PropertyGrid({ properties }: { properties: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&auto=format&fit=crop&q=80"
          alt="Properties"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Our Properties</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PropertyFilters />
        <PropertyGrid properties={properties} />
      </div>

      <Footer />
    </div>
  );
} 