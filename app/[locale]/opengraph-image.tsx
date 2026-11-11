import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Noor Al Hassan General Trading";

export default async function OG() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 60,
          background: "radial-gradient(circle at 30% 30%, #1d3f86 0%, #050a1c 60%)",
          color: "#eef2fb",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={280} height={320} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800 }}>Noor Al Hassan</div>
          <div style={{ fontSize: 36, color: "#f4b54f", marginTop: 12 }}>General Trading · Stationery</div>
          <div style={{ fontSize: 26, color: "#9aa7c7", marginTop: 18 }}>Baghdad — Zayouna</div>
        </div>
      </div>
    ),
    size,
  );
}
