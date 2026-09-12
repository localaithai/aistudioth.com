import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.displayName}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#f8fbff", background: "radial-gradient(circle at 78% 18%, #2997ff 0%, transparent 28%), linear-gradient(135deg, #07111f, #17253a)" }}>
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>AI Studio TH</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Desktop local AI rigs</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#b7d8ff" }}>Built around your model, VRAM and runtime.</div>
      </div>
    </div>,
    size,
  );
}
