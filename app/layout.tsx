import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: "AI-STEM Conference 2025",
  
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
