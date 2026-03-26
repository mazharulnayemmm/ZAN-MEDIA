import { useEffect, useRef } from "react";
import portrait from "@/assets/editor-portrait.jpg";
import { CheckCircle2 } from "lucide-react";

const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Adobe Audition",
  "Cinema 4D",
  "Final Cut Pro",
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "15M+", label: "Views Generated" },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait side */}
          <div className="fade-in flex flex-col items-center lg:items-start gap-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary shadow-glow-lg">
                <img
                  src={portrait}
                  alt="ZAN MEDIA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-surface-2 border border-primary/40 rounded-xl px-4 py-3 shadow-glow">
                <p className="font-display font-black text-3xl text-glow leading-none">
                  5+
                </p>
                <p className="font-body text-muted-foreground text-xs mt-1">
                  Years in Film
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-2 border border-border rounded-xl p-4 text-center"
                >
                  <p className="font-display font-black text-2xl text-primary">
                    {s.value}
                  </p>
                  <p className="font-body text-muted-foreground text-xs mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="fade-in">
            <p className="font-display text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-foreground section-title !text-left mb-6">
              Cinematic Storytelling
            </h2>

            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              I'm <strong className="text-foreground">NYM</strong>, a
              professional video editor with over 5 years of experience crafting
              compelling visual stories for brands, YouTubers, agencies, and
              independent filmmakers worldwide.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              My approach combines technical precision with creative intuition —
              every cut, colour grade, and sound decision serves the story. I
              believe great editing is invisible: it keeps audiences glued to the
              screen without ever noticing the craft behind it.
            </p>

            <h3 className="font-display font-bold text-foreground text-lg mb-4">
              Tools & Software
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div key={tool} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-body text-muted-foreground text-sm">
                    {tool}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-10 inline-flex items-center px-7 py-3.5 rounded-full bg-primary hover:bg-glow text-white font-display font-bold tracking-wider transition-all duration-300 shadow-glow hover:shadow-glow-md hover:scale-105"
            >
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
