import BenchmarksSection from "@/components/BenchmarksSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/benchmarks");
export default function BenchmarksPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/benchmarks" />
        <BenchmarksSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
