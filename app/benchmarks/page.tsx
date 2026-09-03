import type { Metadata } from "next";
import BenchmarksSection from "@/components/BenchmarksSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Benchmarks", description: "AI Studio TH เผยแพร่ benchmark เมื่อระบุ model, runtime, quantisation และ context length ชัดเจนเท่านั้น." };
export default function BenchmarksPage() { return <><Navbar /><main><BenchmarksSection /><Contact /></main><Footer /></>; }
