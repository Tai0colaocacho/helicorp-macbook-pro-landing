import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MacBook Pro Landing Page preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f5f5f7 0%, #ffffff 45%, #dbeafe 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "48px",
            background: "rgba(255, 255, 255, 0.78)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 40px 120px rgba(0, 0, 0, 0.16)",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "72px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#0071e3",
                fontWeight: 700,
                marginBottom: "28px",
              }}
            >
              MacBook Pro
            </div>

            <div
              style={{
                fontSize: "76px",
                lineHeight: 1,
                fontWeight: 800,
                color: "#1d1d1f",
                letterSpacing: "-0.06em",
              }}
            >
              Built for Pro Workflows.
            </div>

            <div
              style={{
                marginTop: "32px",
                fontSize: "28px",
                lineHeight: 1.35,
                color: "#6e6e73",
                maxWidth: "680px",
              }}
            >
              A premium Next.js landing page with performance highlights,
              technical specs, dark mode, chatbot and validated form.
            </div>
          </div>

          <div
            style={{
              width: "34%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: "56px",
            }}
          >
            <div
              style={{
                width: "310px",
                height: "210px",
                borderRadius: "24px",
                background: "#111827",
                border: "10px solid #1f2937",
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 700,
              }}
            >
              M5
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}