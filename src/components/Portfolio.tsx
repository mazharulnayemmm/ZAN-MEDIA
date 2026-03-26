import { useEffect, useRef, useState, useCallback } from "react";
import { Tag } from "lucide-react";

const CATEGORIES = {
  ALL: "All",
  YOUTUBE: "YoutubeVideo",
  REELS: "Reels",
};

const projects = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/Co9smNDCIC8?si=kJODCH3R3t7rdfjS" ,
    
    category: CATEGORIES.YOUTUBE,
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/3zt8SV3mqJc?si=DRK3LWpKn9oU6c-Q",
    
    category: CATEGORIES.YOUTUBE,
  },
   {
    id: 3,
    src: "https://www.youtube.com/embed/s7H3zpOibfA?si=zlpxJ48eTOwviY-B",
    
    category: CATEGORIES.YOUTUBE,
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/TzCGYyO8Tqk",
  
    category: CATEGORIES.REELS,
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/R4rGaIKDlBM",
  
    category: CATEGORIES.REELS,
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/Ohg3RRYDGYQ",
  
    category: CATEGORIES.REELS,
  },
   
];

const VideoCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <div className="card-hover group rounded-xl overflow-hidden border border-border bg-surface shadow-card">
      <div className="video-ratio">
        <iframe
          src={project.src}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-3 h-3 text-primary" />
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full border bg-primary/20 text-primary border-primary/40">
            {project.category}
          </span>
        </div>

        <h3 className="font-bold text-base mb-1 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400">
          {(project as any).description || ""}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);
  const [displayedCategory, setDisplayedCategory] = useState(CATEGORIES.ALL);
  const [visible, setVisible] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleCategoryChange = useCallback(
    (cat: string) => {
      if (cat === activeCategory) return;

      setIsFiltering(true);
      setVisible(false);

      setTimeout(() => {
        setDisplayedCategory(cat);
        setActiveCategory(cat);
        // show immediately — no rAF delay, no height math
        setVisible(true);
      }, 60);
    },
    [activeCategory]
  );

  const filteredProjects = projects.filter((p) => {
    if (displayedCategory === CATEGORIES.ALL) return true;
    return p.category === displayedCategory;
  });

  // initial page-load stagger (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-8 bg-background">
      <style>{`
        .filter-grid {
          transition: opacity 60ms ease;
        }
        .filter-grid.hidden-grid {
          opacity: 0;
          pointer-events: none;
        }
        .filter-grid.shown-grid {
          opacity: 1;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14 fade-in">
          <h2 className="font-black text-4xl md:text-5xl text-foreground">
            Our Work
          </h2>

          <p className="mt-5 text-gray-400 max-w-xl mx-auto">
            Turning Views Into Revenue.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            {[CATEGORIES.ALL, CATEGORIES.YOUTUBE, CATEGORIES.REELS].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-green-400 text-black shadow-[0_0_15px_#4ade80]"
                      : "text-green-400 border-green-400 hover:bg-green-400 hover:text-black hover:shadow-[0_0_10px_#4ade80]"
                  }`}
              >
                {cat === CATEGORIES.YOUTUBE ? "YouTube Video" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid — no height locking, just opacity fade */}
        <div
          className={`filter-grid ${visible ? "shown-grid" : "hidden-grid"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={isFiltering ? "visible fade-in" : "fade-in"}
                style={isFiltering ? {} : { transitionDelay: `${i * 60}ms` }}
              >
                <VideoCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-gray-400 mt-10">No videos found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;