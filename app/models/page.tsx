import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ModelsSection from "@/components/ModelsSection";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/models");
export default function ModelsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/models" />
        <ModelsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
