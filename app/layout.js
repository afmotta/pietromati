import { Comforter, Inter, Merriweather } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const serif = Merriweather({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: "--font-serif",
});
const handwrite = Comforter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-handwrite",
});

export const metadata = {
  title: "Pietro e Maria Teresa",
  description: "Il nostro Matrimonio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${sans.variable} ${serif.variable} ${handwrite.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
