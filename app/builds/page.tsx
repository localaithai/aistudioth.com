import BuildsSection from "@/components/BuildsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/builds");
export default function BuildsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/builds" />
        <BuildsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
