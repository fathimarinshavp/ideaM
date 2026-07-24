import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Idea Media | Creative Branding & Digital Marketing Agency",
  description:
    "Idea Media is a creative media, branding, and digital marketing company dedicated to helping businesses grow while preparing the next generation of digital professionals through practical training and internships.",
  keywords:
    "digital marketing, branding, social media management, internship, training, graphic design, video editing, AI, India",
  openGraph: {
    title: "Idea Media | Empowering Brands. Building Careers.",
    description:
      "Creative media, branding, and digital marketing company. Helping businesses grow and students build careers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
