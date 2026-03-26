import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO */}
      <title>7ZN — Professional Video Editor | Reels & Social Media</title>

      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
