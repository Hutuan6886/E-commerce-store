import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const fontText = Urbanist({ subsets: ["latin"] }); //todo: Tạo font text cho trang web

export const metadata: Metadata = {
  //todo: Tiêu để của trình duyệt web chrome
  title: "Store",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontText.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
