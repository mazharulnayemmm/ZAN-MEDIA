import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-surface border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Zan Logo" className="w-10 h-10 rounded-xl object-cover shadow-glow" />
      </div>

      <p className="font-body text-muted-foreground text-sm flex items-center gap-1.5">
        © {new Date().getFullYear()} ZAN. Made with{" "}
        <Heart className="w-3.5 h-3.5 text-primary fill-current" /> and
        precision cuts.
      </p>

      <nav className="flex gap-6">
        {["Portfolio", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() =>
              document
                .querySelector(`#${item.toLowerCase()}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-body text-muted-foreground hover:text-primary text-sm transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
