import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Idea Media | Creative Digital Agency & Training School",
  description:
    "Idea Media is a creative branding and digital marketing agency that also runs a practical training school — helping businesses grow and students build careers.",
  keywords:
    "digital marketing, branding, social media, internship, training, graphic design, video editing, AI, creative agency",
  openGraph: {
    title: "Idea Media | Empowering Brands. Building Careers.",
    description:
      "Creative media, branding and digital marketing agency. Helping businesses grow and students build careers through practical education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
