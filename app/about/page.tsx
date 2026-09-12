import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/about");
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/about" />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
