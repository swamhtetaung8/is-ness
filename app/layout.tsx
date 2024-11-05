import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dreamAvenue = localFont({
  src: "./fonts/DreamAvenue.ttf",
  variable: "--font-dream-avenue",
});
const scripter = localFont({
  src: "./fonts/Scripter.ttf",
  variable: "--font-scripter",
});

export const metadata: Metadata = {
  title: "is~ness",
  description: "your milk, their comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dreamAvenue.variable} ${scripter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
