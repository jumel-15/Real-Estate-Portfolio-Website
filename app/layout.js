import { Rubik } from "next/font/google";
import "./globals.css";

/* Rubik — the Realshed-style grotesque used for all type (self-hosted) */
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emilia Estates — Luxury Real Estate",
  description:
    "Discover exceptional residences curated by Emilia Estates. A portfolio landing page for a fictional luxury real estate property.",
  authors: [{ name: "Jumel Fernandez" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
