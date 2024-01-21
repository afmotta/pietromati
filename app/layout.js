import {
  Allison as Handwrite,
  Inter as Sans,
} from "next/font/google";
import "./globals.css";

const sans = Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const handwrite = Handwrite({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-handwrite",
});

export const metadata = {
  title: "Pietro e Maria Teresa",
  description: "Il nostro Matrimonio",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${sans.variable} ${handwrite.variable}`}>
      <body>{children}</body>
    </html>
  );
}
