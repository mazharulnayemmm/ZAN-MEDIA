import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown, Play } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      {/* Green vignette bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, hsl(0 0% 5%))",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
         <div className="inline-flex items-center gap-2  rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-display font-semibold  uppercase mb-12 ">
          {/* <span className="w-2 h-2 rounded-full bg-glow animate-ping" />
          Available for Projects */}
        </div>

       <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-8xl leading-none tracking-tight mb-6">
  <span className="text-foreground">We Turn Raw Clips</span>
  <br />
  <span className="text-glow">Into Masterpieces</span>
</h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Story-driven video editing that increases engagement and drives sales
        </p>

        {/* Showreel embed — replace src with your YouTube showreel URL */}
        <div className="mb-10 max-w-3xl mx-auto rounded-xl overflow-hidden border border-primary/30 shadow-glow-lg ">
          <div className="video-ratio">
         
            <iframe
              src="https://www.youtube.com/embed/TaDa6t1QUtA?si=37jbG3TPY4ixwG0H"
              title="Professional Video Editor Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            


          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
  onClick={() => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
  className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-glow text-white font-display font-bold text-base tracking-wider transition-all duration-300 shadow-glow hover:shadow-glow-md hover:scale-105"
>
  <Play className="w-5 h-5 fill-current" />
  Let's Work Together
</button>
          {/* <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-primary/50 text-primary hover:border-glow hover:text-glow font-display font-bold text-base tracking-wider transition-all duration-300 hover:shadow-glow"
          >
            Get in Touch
          </button> */}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button> */}
    </section>
  );
};

export default Hero;
