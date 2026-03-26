import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-surface border-t border-border py-10">
    <div className="container mx-auto px-4 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Zan Logo"
          className="w-10 h-10 rounded-xl object-cover shadow-glow cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <p className="font-body text-muted-foreground text-sm flex items-center gap-1.5">
          © {new Date().getFullYear()} ZAN. Made with{" "}
          <Heart className="w-3.5 h-3.5 text-primary fill-current" /> and
          precision cuts.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
