export const OG_SIZE = { width: 1200, height: 630 } as const;

const METER_SEGMENTS = Array.from({ length: 16 }, (_, cell) => cell);

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
        position: "relative",
        color: "#131416",
        background: "#e4e5e7",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 30,
          fontWeight: 400,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            background: "#c8102e",
            marginRight: 16,
          }}
        />
        AI Studio TH
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 880 }}>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#131416",
          }}
        >
          Desktop local AI rigs
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            color: "#474a4f",
          }}
        >
          Built around your model, VRAM and runtime.
        </div>
        <div style={{ display: "flex", marginTop: 44 }}>
          {METER_SEGMENTS.map((cell) => (
            <div
              key={cell}
              style={{
                width: 50,
                height: 18,
                marginRight: 6,
                background: cell < 8 ? "#131416" : "#b4b7bc",
              }}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 20,
          background: "#c8102e",
        }}
      />
    </div>
  );
}
