export const OG_SIZE = { width: 1200, height: 630 } as const;

/** The social card, rasterised at build time by src/pages/opengraph-image.ts. */
export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // Current satori sizes boxes as content-box; next/og sized this one as
        // border-box, so without this the padding pushes the copy off the card.
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f8fbff",
        background:
          "radial-gradient(circle at 78% 18%, #2997ff 0%, transparent 28%), linear-gradient(135deg, #07111f, #17253a)",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
        AI Studio TH
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Desktop local AI rigs
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#b7d8ff",
          }}
        >
          Built around your model, VRAM and runtime.
        </div>
      </div>
    </div>
  );
}
