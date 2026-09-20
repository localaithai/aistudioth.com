"use client";

import { studioFrameUrls } from "@/lib/assets";
import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 180;
const WIDTH = 1920;
const HEIGHT = 1080;

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [loaded, setLoaded] = useState(false);

  /* ── preload all JPEG frames ─────────────────────── */
  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];
    loadedRef.current = new Array(TOTAL_FRAMES).fill(false);
    setLoaded(false);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = studioFrameUrls[i];
      img.onload = () => {
        count++;
        loadedRef.current[i] = true;
        if (count >= TOTAL_FRAMES * 0.15) setLoaded(true);
      };
      img.onerror = () => {
        count++;
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  /* ── scroll → progress ───────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(scrolled / sectionHeight, 1)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── draw current frame to canvas ────────────────── */
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const frameIndex = Math.min(
      Math.floor(progress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );
    const img = imagesRef.current[frameIndex];
    if (
      img &&
      loadedRef.current[frameIndex] &&
      img.complete &&
      img.naturalWidth > 0
    ) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [progress]);

  useEffect(() => {
    const raf = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(raf);
  }, [drawFrame]);

  return (
    <section ref={sectionRef} className="relative h-[250vh] sm:h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white px-0">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[4px] sm:h-[3px] bg-[#e5e5ea] z-20">
          <div
            className="h-full"
            style={{
              width: `${progress * 100}%`,
              background:
                "linear-gradient(90deg, #1d1d1f, #6e6e73, #1d1d1f)",
              transition: "none",
            }}
          />
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="sm:object-contain object-cover"
          style={{
            width: `min(100vw, ${(100 * WIDTH) / HEIGHT}vh)`,
            height: `min(100vh, ${(100 * HEIGHT) / WIDTH}vw)`,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />

        {/* Loading spinner */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-30">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-[#1d1d1f] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-[14px] text-[#6e6e73]">
                กำลังโหลด...
              </p>
            </div>
          </div>
        )}

        {/* Scroll hint at start */}
        {progress < 0.03 && loaded && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 text-center px-6"
            style={{ opacity: 1 - progress * 33 }}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-[#1d1d1f]/20 flex justify-center pt-2">
                <div className="w-1 h-2.5 rounded-full bg-[#1d1d1f] animate-pulse" />
              </div>
              <span className="text-[11px] text-[#6e6e73] font-medium tracking-widest">
                SCROLL
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
