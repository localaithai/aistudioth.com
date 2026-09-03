import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ModelsSection from "@/components/ModelsSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "VRAM เทียบกับ model", description: "คู่มือหน่วยความจำ model weights ที่คำนวณสำหรับ local model 8B ถึง 405B บน GPU 32 GB และ rig unified memory." };
export default function ModelsPage() { return <><Navbar /><main><ModelsSection /><Contact /></main><Footer /></>; }
