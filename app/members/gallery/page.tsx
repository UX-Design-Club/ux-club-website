import Image from "next/image";

export default function Gallery() {
  const firstGeneralMeetingImages = Array.from({ length: 24 }, (_, i) => ({
    src: `/images/first-gm/first-gm (${i + 1}).jpg`,
    alt: `First General Meeting ${i + 1}`,
  }));

  return (
    <div className="w-full bg-slate-100">
      <div className="lg:max-w-7xl mx-auto py-16">
        <h1 className="text-slate-800 font-bold text-4xl mb-4 uppercase">
          Events Gallery
        </h1>
        <p>Explore the gallery of our club events below.</p>

        <h2 className="text-slate-800 font-semibold text-3xl mt-8 mb-4">First General Meeting</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {firstGeneralMeetingImages.map((image, index) => (
            <div key={index} className="relative w-full h-60 bg-gray-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        <h2 className="text-slate-800 font-semibold text-3xl mt-8 mb-4">Activities Fair Day</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/fair-day-one.jpg"
              alt="Activities Fair Day 1"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
          <div className="relative w-full h-60 bg-gray-200">
            <Image
              src="/images/events-gallery/fair-day-two.jpg"
              alt="Activities Fair Day 2"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
          </div>
        </div>

        <h2 className="text-slate-800 font-semibold text-3xl mt-8 mb-4">Pickleball Social</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>

        {/* Showcase Event Section */}
        <h2 className="text-slate-800 font-semibold text-3xl mt-8 mb-4">Showcase Event</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
