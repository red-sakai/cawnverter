import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
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
          <header className="navbar-wrap">
            <div className="container navbar">
              <Link href="/" className="brand-link" aria-label="Cawnverter home">
                Cawnverter
              </Link>

              <nav className="nav-links" aria-label="Primary">
                <Link href="/">Home</Link>
                <Link href="/#features">Features</Link>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/convert" className="nav-cta">
                  Convert now
                </Link>
              </nav>
            </div>
          </header>

          <main className="app-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
