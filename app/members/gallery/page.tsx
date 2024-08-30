// File: /app/members/events-gallery/page.tsx
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-7xl mx-auto py-16">
        <h1 className="text-slate-800 font-bold text-4xl mb-4 uppercase">
          Events Gallery
        </h1>
        <p>Explore the gallery of our club events below.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example photos */}
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/fair-day-one.jpg"
              alt="Fair Day 1"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/fair-day-two.jpg"
              alt="Fair Day 2"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/pickleball-one.jpg"
              alt="Pickleball 1"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/pickleball-two.jpg"
              alt="Pickleball 2"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/showcase-one.jpg"
              alt="Showcase 1"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/showcase-two.jpg"
              alt="Showcase 2"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
