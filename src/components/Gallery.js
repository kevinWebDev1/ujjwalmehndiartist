import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const images = [
    {
      src: "/images/gallery1.png",
      alt: "Intricate Bridal Mehndi Excellence",
      title: "Bridal Excellence",
      span: "col-span-2 row-span-2",
    },
    {
      src: "/images/arabic.png",
      alt: "Modern Arabic Henna Design",
      span: "col-span-2 row-span-1",
    },
    {
      src: "/images/arabic2.png",
      alt: "Detailed Decorative Henna",
      span: "col-span-1 row-span-1",
    },
    {
      src: "/images/gallery2.png",
      alt: "Ceremonial Mehndi Art",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 lg:py-36 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-4xl md:text-[3rem] lg:text-[3.5rem] text-primary mb-4 leading-[1.1] tracking-tight">
          Curated Masterpieces
        </h2>
        <p className="font-body text-base md:text-lg text-on-surface-variant italic md:max-w-xl lg:max-w-2xl mx-auto">
          A glimpse into the intricate world of our henna artistry
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-5 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[280px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.span} rounded-2xl lg:rounded-3xl overflow-hidden shadow-md relative group`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 md:p-6">
                <span className="text-white font-serif text-lg md:text-xl italic">
                  {image.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <Link 
          href="/gallery"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 md:px-10 md:py-3.5 rounded-lg font-body font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-sm md:text-base"
        >
          View Full Gallery
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      </div>
    </section>
  );
}
