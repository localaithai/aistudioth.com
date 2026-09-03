import type { Metadata } from "next";
import BuildsSection from "@/components/BuildsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "AI rig builds", description: "จุดตั้งต้นของ AI rig บนโต๊ะ: DGX Spark, 2x Spark, RTX 5090 workstation และ Mac Studio Ultra." };
export default function BuildsPage() { return <><Navbar /><main><BuildsSection /><Contact /></main><Footer /></>; }
