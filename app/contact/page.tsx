import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/contact");
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <SitelinkTrail path="/contact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
