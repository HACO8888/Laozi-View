// Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Styles
import "@/styles/globals.scss";

// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "台灣老子關",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-tw">
      <body className="h-[100dvh] w-[100dvw]">
        <Navbar />
        <div className="min-h-[calc(100dvh-9rem)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
