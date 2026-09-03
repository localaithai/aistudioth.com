import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Ecosystem from "@/components/Ecosystem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Local หรือ cloud", description: "เลือก local AI rig พร้อม Mimir Suites Local หรือ cloud models เมื่อไม่ต้องรัน inference ในเครื่อง." };
export default function EcosystemPage() { return <><Navbar /><main><Ecosystem /><Contact /></main><Footer /></>; }
