import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const handwrite = localFont({
  src: "./fonts/enchantress_regular.otf",
  display: "swap",
  variable: "--font-handwrite",
});

export const metadata = {
  title: "Pietro e Maria Teresa",
  description: "Il nostro Matrimonio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='it' className={`${sans.variable} ${handwrite.variable}`}>
      <body>{children}</body>
    </html>
  );
}
