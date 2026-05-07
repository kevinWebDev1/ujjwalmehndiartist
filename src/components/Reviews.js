"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Bridal Client",
    text: "Ujjwal's presence is as calming as the henna application itself. Every tiny dot was meticulous, and my bridal stain was the talk of the entire wedding weekend. Truly a master of the craft!",
    clientImage: "/images/gallery1.jpg",
    mehndiImage: "/images/gallery1.jpg",
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "Bridal Client",
    text: "The intricate detailing in my bridal mehndi was beyond my expectations. Ujjwal is truly an artist who understands modern trends while keeping traditional roots intact.",
    clientImage: "/images/gallary3.jpg",
    mehndiImage: "/images/gallary3.jpg",
  },
  {
    id: 3,
    name: "Rahul Singh",
    role: "Groom's Family",
    text: "Hired Ujjwal for my sister's wedding. The team was punctual, professional, and the designs were stunning. Highly recommended for any large event!",
    clientImage: "/images/hero_ujjwal_desktop.jpg",
    mehndiImage: "/images/hero_ujjwal_desktop.jpg",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Engagement Client",
    text: "I wanted something minimal yet elegant for my engagement. Ujjwal created a beautiful Arabic pattern that was perfect. The stain color was deep and rich.",
    clientImage: "/images/gallary4.jpg",
    mehndiImage: "/images/gallary4.jpg",
  },
  {
    id: 5,
    name: "Priya Verma",
    role: "Festival Client",
    text: "Got mehndi done for Karwa Chauth and Ujjwal nailed it! The design was intricate yet finished quickly. Everyone at the gathering was asking for his number. Will definitely book again.",
    clientImage: "/images/gallery2.jpg",
    mehndiImage: "/images/gallery2.jpg",
  }
];

function ReviewCard({ review, activeReview, toggleReview, openLightbox }) {
  const isFlipped = activeReview === review.id;

  return (
    <div 
      className={`relative bg-white border border-outline-variant/30 rounded-2xl md:rounded-3xl shadow-xl h-[420px] md:h-[450px] lg:h-[400px] overflow-hidden flex flex-col transition-all duration-500 ${isFlipped ? 'cursor-zoom-in' : 'cursor-default'}`}
      onClick={() => {
        if (isFlipped) openLightbox(review.mehndiImage);
      }}
    >
      {/* Photo Layer */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isFlipped ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Image 
          src={review.mehndiImage}
          alt={review.name + "'s Mehndi"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        {/* Full View Label */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-body tracking-[0.2em] uppercase">
          <span className="material-symbols-outlined text-sm">fullscreen</span>
          Full View
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 p-7 md:p-8 lg:p-10 h-full flex flex-col justify-between pointer-events-none">
        <div className={`transition-all duration-500 transform ${isFlipped ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
          <span className="material-symbols-outlined text-primary-container opacity-10 text-5xl select-none block mb-3">
            format_quote
          </span>
          <p className="font-serif text-lg md:text-xl text-on-surface italic leading-relaxed">
            &ldquo;{review.text}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto pointer-events-auto">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleReview(review.id);
            }}
            className="relative w-13 h-13 rounded-full border-2 border-primary bg-primary flex items-center justify-center cursor-pointer z-30 transition-transform active:scale-90"
            aria-label={isFlipped ? "Close revealed image" : "Reveal client artwork"}
          >
            {/* Pulse Effect */}
            {!isFlipped && (
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
            )}

            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src={review.clientImage}
                alt={review.name}
                fill
                className={`object-cover transition-all duration-500 ${isFlipped ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
              />
            </div>
            
            {!isFlipped && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-white z-40 shadow-md">
                <span className="material-symbols-outlined text-[10px] text-white">visibility</span>
              </div>
            )}

            <span className={`material-symbols-outlined text-white text-xl absolute z-40 transition-all duration-500 transform ${isFlipped ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`}>
              close
            </span>
          </button>

          <div className={`transition-all duration-500 ${isFlipped ? 'text-white translate-x-2' : 'text-primary'}`}>
            <h5 className="font-body font-bold text-base">
              {review.name}
            </h5>
            <p className={`font-body text-[10px] uppercase tracking-[0.2em] ${isFlipped ? 'text-white/70' : 'text-on-surface-variant'}`}>
              {isFlipped ? "Viewing Masterpiece" : review.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);

  const toggleReview = (id) => {
    setActiveReview(activeReview === id ? null : id);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.7 : scrollLeft + clientWidth * 0.7;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-28 lg:py-36 overflow-hidden bg-surface-container-low/30 relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all z-[110]"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[3/4] lg:aspect-video animate-scale-up">
            <Image 
              src={lightboxImage}
              alt="Mehndi Full View"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-4xl md:text-[3rem] lg:text-[3.5rem] text-primary italic leading-[1.1] tracking-tight mb-4">
            Client Reviews
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl text-sm md:text-base">
            Click the profile to reveal the masterpiece. Once revealed, click the image for a full view.
          </p>
        </div>

        {/* Navigation Arrows — mobile/tablet only */}
        <div className="hidden md:flex lg:hidden gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous Review"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next Review"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Mobile + Tablet: Horizontal Scroll */}
      <div className="lg:hidden">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 px-6 pb-8 scrollbar-hide snap-x snap-proximity scroll-smooth"
        >
          {reviews.map((review) => (
            <div key={review.id} className="min-w-[85vw] md:min-w-[420px] snap-center">
              <ReviewCard 
                review={review} 
                activeReview={activeReview} 
                toggleReview={toggleReview} 
                openLightbox={openLightbox} 
              />
            </div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-8 h-1.5 rounded-full bg-primary/10"></div>
          <div className="w-12 h-1.5 rounded-full bg-primary/40"></div>
          <div className="w-8 h-1.5 rounded-full bg-primary/10"></div>
        </div>
      </div>

      {/* Desktop: 2×2 Grid */}
      <div className="hidden lg:block px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-6">
          {(showAll ? reviews : reviews.slice(0, 4)).map((review) => (
            <ReviewCard 
              key={review.id}
              review={review} 
              activeReview={activeReview} 
              toggleReview={toggleReview} 
              openLightbox={openLightbox} 
            />
          ))}
        </div>
        {reviews.length > 4 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border border-primary text-primary px-10 py-3.5 rounded-lg font-body font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              {showAll ? 'Show Less' : `View All Reviews (${reviews.length})`}
              <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
