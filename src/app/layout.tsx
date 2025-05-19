import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanjai Uthup Thomas – Full Stack Developer",
  description: "Portfolio of Sanjai Uthup Thomas, a Full Stack Web & Mobile Developer specializing in React, Node.js, NestJS, and scalable backend systems.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
  "Sanjai Uthup Thomas",
  "Sanjai Uthup",
  "Sanjai Thomas",
  "Sanjai Uthup Thomas Developer",
  "Sanjai Uthup Thomas Portfolio",
  "Sanjai Uthup Thomas Full Stack Developer",
  "Full Stack Developer India",
  "Full Stack Developer Kochi",
  "React Developer Sanjai",
  "Node.js Developer Sanjai",
  "NestJS Developer Sanjai",
  "React Native Developer Sanjai",
  "TypeScript Developer Sanjai",
  "Backend Developer Sanjai",
  "Sanjaiuthupthomas",
  "Sanjai Uthup GitHub",
  "Sanjai Uthup LinkedIn",
  "Freelance Developer Sanjai",
  "Web Developer Sanjai Uthup",
  "Mobile App Developer Sanjai",
  "sanjaiuthupthomas.in",
  "sanjai",
  "uthup",
  "thomas",
  "Freelance developer in Kerala",
  "Freelance developer in Kochi",
  "Freelance developer in Kottayam"
],
  authors: [{ name: "Sanjai Uthup Thomas" }],
  creator: "Sanjai Uthup Thomas",
  metadataBase: new URL("https://www.sanjaiuthupthomas.in"),
  openGraph: {
    title: "Sanjai Uthup Thomas – Full Stack Developer",
    description: "Explore my portfolio showcasing modern full stack applications.",
    url: "https://www.sanjaiuthupthomas.in",
    siteName: "Sanjai Uthup Thomas Portfolio",
    locale: "en_IN",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
