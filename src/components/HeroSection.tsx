import heroImage from "@/assets/goebel-store.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Interior of the historic Goebel Store in Winchester, Texas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsla(24,10%,10%,0.25), hsla(24,10%,10%,0.7))" }} />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-primary-foreground/70 font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Winchester, Texas
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
          Goebel Store
        </h1>
        <p className="text-primary-foreground/80 font-sans text-lg md:text-xl font-light max-w-xl mx-auto">
          A piece of Texas history, preserved on the rolling hills of Winchester.
        </p>
        <div className="mt-10">
          <a
            href="#history"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Explore the Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
