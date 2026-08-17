import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Norbitlink Ltd | Specialist Recruitment Liverpool",
    template: "%s | Norbitlink Ltd",
  },
  description:
    "Norbitlink Ltd is a Liverpool-based specialist recruitment agency providing reliable temporary and permanent staff across Health & Social Care and Construction.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#09090b] text-neutral-200 antialiased font-sans flex flex-col min-h-screen selection:bg-cyan-500/20 selection:text-cyan-200"
        suppressHydrationWarning
      >
        <ModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
