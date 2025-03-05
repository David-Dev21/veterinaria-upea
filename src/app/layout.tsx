import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Veterinaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-veterinaria.png" />
      </head>
      <body className="bg-gray-100">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
