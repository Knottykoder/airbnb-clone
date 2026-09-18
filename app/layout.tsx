import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description: "Entire serviced apartment in Candolim, India. 3 guests · 1 bedroom · 1 bed · 1 bathroom. Enjoy a private heated jacuzzi, plunge pool, and dedicated workspace in peaceful North Goa.",
  openGraph: {
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    description: "Entire serviced apartment in Candolim, Goa with private jacuzzi, plunge pool, fast Wi-Fi, and chef's kitchen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#222222] selection:bg-[#FF385C]/20 selection:text-[#FF385C]">
        {children}
      </body>
    </html>
  );
}
