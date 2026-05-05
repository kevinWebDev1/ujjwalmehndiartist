import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 lg:py-36 px-6 bg-surface-container-low relative overflow-hidden"
    >
      <div className="mandala-pattern absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
        <div className="order-2 md:order-1">
          <span className="text-secondary font-semibold uppercase tracking-widest text-xs mb-4 block font-body">
            The Artist
          </span>
          <h2 className="font-serif text-4xl md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-primary mb-6 leading-[1.1] tracking-tight">
            Crafting Elegance <br /> Through Heritage
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant mb-10 leading-relaxed md:max-w-xl lg:max-w-2xl">
            Based in Civil Lines, Hardoi, I bring the ancient art of henna directly to your doorstep. Whether you're in Hardoi or any other city, I specialize in blending traditional motifs with contemporary patterns, ensuring every design is a unique masterpiece that tells your story.
          </p>
          <div className="flex gap-8 md:gap-12">
            <div className="border-l-2 border-outline-variant pl-6">
              <span className="block font-serif text-3xl lg:text-4xl text-primary">8+</span>
              <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider font-body">
                Years Exp.
              </span>
            </div>
            <div className="border-l-2 border-outline-variant pl-6">
              <span className="block font-serif text-3xl lg:text-4xl text-primary">
                1000+
              </span>
              <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider font-body">
                Brides
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-xs md:max-w-full aspect-[3/4] mask-organic-2 overflow-hidden shadow-2xl shadow-primary/10 relative">
            <Image
              src="/images/about_ujjwal.jpg"
              alt="Ujjwal Mehndi Artist - Traditional Henna Work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
