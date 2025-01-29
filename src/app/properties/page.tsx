import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyFilters from './PropertyFilters';
import PropertyGrid from './PropertyGrid';

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
};

const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse in London',
    location: 'Mayfair, London',
    price: '£2,500,000',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,200 sq ft',
    type: 'Penthouse',
    image: '/images/london-luxury.jpg'
  },
  {
    id: '2',
    title: 'Modern Apartment with City Views',
    location: 'Kensington, London',
    price: '£1,850,000',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,500 sq ft',
    type: 'Apartment',
    image: '/images/kensington-modern.jpg'
  },
  {
    id: '3',
    title: 'Georgian Townhouse',
    location: 'Bath, Somerset',
    price: '£1,200,000',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,800 sq ft',
    type: 'House',
    image: '/images/bath-georgian.jpg'
  },
  {
    id: '4',
    title: 'Contemporary Villa',
    location: 'Surrey',
    price: '£3,200,000',
    bedrooms: 5,
    bathrooms: 4,
    area: '3,500 sq ft',
    type: 'Villa',
    image: '/images/surrey-villa.jpg'
  },
  {
    id: '5',
    title: 'Riverside Apartment',
    location: 'Thames Bank, London',
    price: '£1,750,000',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,400 sq ft',
    type: 'Apartment',
    image: '/images/riverside-apartment.jpg'
  },
  {
    id: '6',
    title: 'Country Estate',
    location: 'Cotswolds',
    price: '£4,500,000',
    bedrooms: 6,
    bathrooms: 5,
    area: '5,000 sq ft',
    type: 'Estate',
    image: '/images/cotswolds-estate.jpg'
  }
];

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