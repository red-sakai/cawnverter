import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const headingFont = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cawnverter | Smart PDF Conversion",
  description: "Landing page and conversion workspace for PDF exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="app-frame">
          <Navbar />

          <main className="app-main">{children}</main>

          <footer className="site-footer">
            <div className="container site-footer-inner">
              <p>&copy; {new Date().getFullYear()} Cawnverter · Made by jhered</p>
              <nav aria-label="Footer" className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/#features">Features</Link>
                <Link href="/convert">Convert</Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
