import Contact from "@/components/Contact";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/ecosystem");
export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/ecosystem" />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
