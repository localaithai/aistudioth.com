import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "เกี่ยวกับเรา", description: "AI Studio TH ประกอบ local AI rig บนโต๊ะตาม model และ runtime ที่ผู้ใช้ต้องการ." };
export default function AboutPage() { return <><Navbar /><main><AboutSection /><Contact /></main><Footer /></>; }
