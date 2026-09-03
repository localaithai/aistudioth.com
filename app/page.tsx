import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BuildsSection from "@/components/BuildsSection";
import ModelsSection from "@/components/ModelsSection";
import BenchmarksSection from "@/components/BenchmarksSection";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return <><Navbar /><main><Hero /><Services /><BuildsSection /><ModelsSection /><BenchmarksSection /><Ecosystem /><Contact /></main><Footer /></>;
}
