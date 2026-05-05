import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Bridal Packages",
      description:
        "Comprehensive bridal designs from palms to elbows, including matching designs for the feet.",
      tag: "Premium Quality",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#775a19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
    {
      title: "Guest Henna",
      description:
        "Elegant and quick patterns for your wedding guests or festive parties at scale.",
      tag: "Events & Parties",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#775a19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Arabic & Modern",
      description:
        "Stylish, minimalist, and contemporary designs for everyday elegance or light celebrations.",
      tag: "Chic & Minimal",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#775a19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 px-6 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-[3rem] lg:text-[3.5rem] text-primary mb-12 md:mb-16 text-center leading-[1.1] tracking-tight">
          Service Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-premium flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="font-serif text-xl md:text-2xl text-primary mb-4">
                {service.title}
              </h4>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              <span className="mt-auto inline-block bg-secondary-container text-on-secondary-container px-6 py-1.5 rounded-full font-body font-semibold text-sm mb-4">
                {service.tag}
              </span>
              <a
                href={`https://wa.me/917390928796?text=I'm interested in your ${service.title} service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-body font-bold uppercase tracking-widest text-[#25D366] hover:opacity-80 transition-opacity flex items-center gap-2 group"
              >
                <div className="w-4 h-4 relative">
                  <Image
                    src="/images/socials/WhatsApp.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                Inquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
