"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section
      className="py-20 md:py-28 lg:py-36 px-6 bg-surface-container-low"
      id="contact"
    >
      <div className="max-w-3xl lg:max-w-4xl mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl shadow-primary/5">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-body text-4xl md:text-[3rem] lg:text-[3.5rem] text-primary mb-4 leading-[1.1] tracking-tight">
            Begin Your Journey
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant">
            Tell me about your special occasion
          </p>
        </div>
        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant block"
              >
                Full Name
              </label>
              <input
                id="name"
                className="input-premium"
                placeholder="E.g. Anjali Sharma"
                type="text"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="date"
                className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant block"
              >
                Event Date
              </label>
              <input id="date" className="input-premium" type="date" required />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="event-type"
              className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant block"
            >
              Event Type
            </label>
            <select id="event-type" className="input-premium appearance-none">
              <option>Bridal Mehendi</option>
              <option>Engagement</option>
              <option>Private Party</option>
              <option>Festive Celebration</option>
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="vision"
              className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant block"
            >
              Your Vision
            </label>
            <textarea
              id="vision"
              className="input-premium resize-none"
              placeholder="Share any specific design preferences..."
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto md:px-20 bg-primary text-white py-4 md:py-5 rounded-xl font-body font-bold tracking-widest uppercase text-sm shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Send Inquiry
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col items-center">
          <p className="text-sm font-body text-on-surface-variant mb-4">Prefer a quicker chat?</p>
          <a
            href="https://wa.me/917390928796"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 rounded-full font-body font-bold text-sm tracking-wide shadow-lg shadow-green-500/20 hover:scale-105 transition-all"
          >
            <div className="w-5 h-5 relative">
              <Image
                src="/images/socials/WhatsApp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            Quick WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
