import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextAuthProvider} from "./providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "la-fondation-dassault-systemes",
  description: "La Fondation Dassault Systèmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
