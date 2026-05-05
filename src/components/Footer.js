import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-outline-variant/30 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif italic text-primary mb-2">
            Ujjwal Mehndi
          </h2>
          <p className="font-body text-on-surface-variant leading-relaxed max-w-xs mb-4">
            Professional Henna Artist based in Civil Lines, Hardoi. Home services available locally and out of city. DM for bookings!
          </p>
          <div className="space-y-2 mb-4">
            <p className="font-body text-sm text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Civil Lines, Hardoi 241001
            </p>
          </div>
          <p className="text-xs font-body uppercase tracking-[0.2em] text-on-surface-variant">
            © {currentYear} Ujjwal Mehndi Artist. Crafted with Intention.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {[
            { name: "About me", id: "/#about" },
            { name: "Gallery", id: "/#gallery" },
            { name: "Services", id: "/#services" },
            { name: "Reviews", id: "/#reviews" },
            { name: "Contact", id: "/#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.id}
              className="text-xs font-body font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4 md:gap-6">
          <a
            href="https://www.instagram.com/ujjwalmehendiart0909?igsh=c2ljcnU0b2ZjaDls"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-all p-2"
          >
            <div className="w-full h-full relative">
              <Image
                src="/images/socials/instagram.png"
                alt="Instagram"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="https://wa.me/917390928796"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-all p-2"
          >
            <div className="w-full h-full relative">
              <Image
                src="/images/socials/WhatsApp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <a
            href="tel:+917390928796"
            aria-label="Phone"
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
