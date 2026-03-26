import { useEffect, useRef, useState } from "react";
import { Send, Mail, MessageCircle, Facebook, Youtube, Instagram } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mlgoeqjw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/zanmediaaa", label: "facebook" },
    { icon: Youtube, href: "https://www.youtube.com/@Zan_Mediaaa", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/zan_mediaaa/", label: "Instagram" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-0 bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-14 fade-in">
          <h2 className="font-display font-black text-4xl md:text-5xl text-foreground section-title">
            Ready to Grow Your Brand? Let us Talk!
          </h2>
          <p className="font-body text-muted-foreground mt-5 max-w-xl mx-auto">
            Reach out to our team and start your project today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 fade-in flex flex-col gap-6">

            <a href="mailto:nayemm0345@gmail.com" className="group flex items-center gap-4 bg-surface border border-border rounded-2xl p-5 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-glow group-hover:shadow-glow transition-all duration-300">
                <Mail className="w-5 h-5 text-primary group-hover:text-glow transition-colors" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">Email Me</p>
                <p className="font-body text-muted-foreground text-sm">nayemm0345@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/+8801971727137" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-surface border border-border rounded-2xl p-5 card-hover">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-glow group-hover:shadow-glow transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-primary group-hover:text-glow transition-colors" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="font-body text-muted-foreground text-sm">+880 1971727137</p>
              </div>
            </a>

            <div className="bg-surface border border-border rounded-2xl p-5">
              <p className="font-display font-semibold text-foreground text-sm mb-4">Follow My Work</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:shadow-glow transition-all duration-300">
                    <Icon className="w-4 h-4 text-primary hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-3 fade-in">
            <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-7 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-display font-semibold text-foreground text-sm mb-2 block">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-display font-semibold text-foreground text-sm mb-2 block">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nayemm0345@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onClick={() => {
                          if (!form.email) setForm({ ...form, email: "nayemm0345@gmail.com" });
                        }}
                    className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-display font-semibold text-foreground text-sm mb-2 block">Project Details</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project — type, length, deadline, budget..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-glow transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary hover:bg-glow text-white font-display font-bold tracking-wider transition-all duration-300 shadow-glow hover:shadow-glow-md hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
              </button>

              {sent && (
                <p className="text-center text-primary font-body text-sm animate-fade-in">
                  Thank you! I will be in touch as soon as possible.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
