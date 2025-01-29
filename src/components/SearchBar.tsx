'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchParams: {
    location: string;
    propertyType: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      propertyType,
      minPrice,
      maxPrice,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, postcode, or area"
              className="search-input w-full"
            />
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              id="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="search-input w-full"
            >
              <option value="">Any type</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="bungalow">Bungalow</option>
              <option value="maisonette">Maisonette</option>
            </select>
          </div>

          <div>
            <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Min Price
            </label>
            <select
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="search-input w-full"
            >
              <option value="">No min</option>
              <option value="100000">£100,000</option>
              <option value="200000">£200,000</option>
              <option value="300000">£300,000</option>
              <option value="400000">£400,000</option>
              <option value="500000">£500,000</option>
              <option value="750000">£750,000</option>
              <option value="1000000">£1,000,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Max Price
            </label>
            <select
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="search-input w-full"
            >
              <option value="">No max</option>
              <option value="200000">£200,000</option>
              <option value="300000">£300,000</option>
              <option value="400000">£400,000</option>
              <option value="500000">£500,000</option>
              <option value="750000">£750,000</option>
              <option value="1000000">£1,000,000</option>
              <option value="2000000">£2,000,000</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn-primary w-full">
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
} 