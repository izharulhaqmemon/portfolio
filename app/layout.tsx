import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Izhar Ul Haq — Software Engineer",
  description:
    "Portfolio of Izhar Ul Haq, a Software Engineering student focused on backend development, full-stack applications, and machine learning.",
  metadataBase: new URL("https://izharulhaq-portfolio.vercel.app"),
  openGraph: {
    title: "Izhar Ul Haq — Software Engineer",
    description:
      "Backend development, full-stack applications, and applied machine learning.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101116",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
