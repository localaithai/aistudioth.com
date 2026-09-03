import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Configure your studio", description: "ส่งความต้องการ model, memory, runtime และ hardware เพื่อปรับ AI rig บนโต๊ะกับ AI Studio TH." };
export default function ContactPage() { return <><Navbar /><main><Contact /></main><Footer /></>; }
