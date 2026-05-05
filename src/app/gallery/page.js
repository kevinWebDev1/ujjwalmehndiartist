"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "photo",
      src: "/images/gallery1.png",
      alt: "Intricate Bridal Mehndi",
      title: "Royal Bridal",
      category: "Bridal",
    },
    {
      id: 2,
      type: "photo",
      src: "/images/arabic.png",
      alt: "Modern Arabic Design",
      title: "Arabic Fusion",
      category: "Arabic",
    },
    {
      id: 3,
      type: "photo",
      src: "/images/arabic2.png",
      alt: "Detailed Henna",
      title: "Floral Patterns",
      category: "Modern",
    },
    {
      id: 4,
      type: "photo",
      src: "/images/gallery2.png",
      alt: "Ceremonial Art",
      title: "Engagement Special",
      category: "Events",
    },
    {
      id: 5,
      type: "video",
      src: "/images/traditional.png", // Using an image as a placeholder for video thumbnail
      alt: "Applying Henna Video",
      title: "Behind the Scenes",
      category: "BTS",
    },
    {
      id: 6,
      type: "photo",
      src: "/images/hero_ujjwal_mobile.png",
      alt: "Signature Design",
      title: "Signature Strokes",
      category: "Bridal",
    },
    // Add more items as needed
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 md:pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-3 transition-all text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Home
            </Link>
          </div>

          <div className="flex bg-surface-container p-1 rounded-xl">
            {["all", "photo", "video"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 md:px-8 py-2 md:py-2.5 rounded-lg font-body font-semibold text-sm transition-all capitalize ${
                  filter === type
                    ? "bg-white text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {type === "all" ? "All" : `${type}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 md:p-6">
                  <span className="text-white/80 text-xs font-body uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white font-serif text-lg md:text-xl italic">{item.title}</h3>
                </div>
                {item.type === "video" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32">
            <p className="font-body text-on-surface-variant">No items found in this category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
