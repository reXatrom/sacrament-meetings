// 3. Root layout for the application shell.
// It loads the project fonts, renders the shared header and footer, and wraps all pages in a consistent layout.
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan, review, and print sacrament meeting agendas in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
