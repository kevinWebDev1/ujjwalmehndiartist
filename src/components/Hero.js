import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[700px] flex flex-col justify-end overflow-hidden px-6 pb-20 md:pb-28 lg:pb-36">
      <div className="absolute inset-0 z-0">
        {/* Mobile hero */}
        <Image
          src="/images/hero_ujjwal_mobile.jpg"
          alt="Ujjwal Mehndi Artist - Master of Bridal Henna"
          fill
          className="object-cover object-top lg:hidden"
          priority
        />
        {/* Desktop hero */}
        <Image
          src="/images/hero_ujjwal_desktop.jpg"
          alt="Ujjwal Mehndi Artist - Master of Bridal Henna"
          fill
          className="object-cover object-top hidden lg:block"
          priority
        />
        {/* Top gradient for header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-transparent h-1/4" />
        {/* Bottom gradient — lighter on desktop so the image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:from-background/90 lg:via-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full animate-fade-up pt-40">
        <div className="hidden md:flex items-center gap-2 mb-4 bg-secondary/10 text-secondary-900 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm border border-secondary/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span className="text-xs font-bold uppercase tracking-widest">Home Service available in HARDOI & Out of City</span>
        </div>
        <h1 className="font-body text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-primary leading-[1.1] mb-5 drop-shadow-sm">
          Artistry in <br /> Every Stroke.
        </h1>
        <p className="font-body text-base md:text-lg lg:text-xl text-on-surface-variant mb-7 md:max-w-lg lg:max-w-2xl leading-relaxed">
          Timeless Henna designs for your most cherished moments. Based in Civil Lines, Hardoi — available for home service locally & out of city. DM for bookings!
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-3.5 md:px-10 md:py-4 rounded-lg font-body font-semibold tracking-wide shadow-xl shadow-primary/30 hover:scale-105 transition-all text-sm md:text-base"
          >
            Book a Session
          </a>
          <a
            href="https://wa.me/917390928796"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#25D366] border-2 border-[#25D366] px-8 py-3.5 md:px-10 md:py-4 rounded-lg font-body font-semibold tracking-wide hover:bg-[#25D366] hover:text-white transition-all text-sm md:text-base shadow-lg shadow-green-500/10 group"
          >
            <div className="w-5 h-5 relative">
              <Image
                src="/images/socials/WhatsApp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
