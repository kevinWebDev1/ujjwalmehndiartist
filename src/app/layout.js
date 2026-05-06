import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Ujjwal Mehndi Artist | Bridal & Traditional Henna Excellence",
  description: "Premium bridal and traditional mehndi services by Ujjwal Mehndi Artist. Exquisite designs for every occasion, serving Hardoi and beyond with passion and intricate detail.",
  keywords: ["Mehndi Artist", "Bridal Mehndi", "Hardoi Mehndi", "Traditional Henna", "Henna Artist"],
  authors: [{ name: "Ujjwal Mehndi" }],
  openGraph: {
    title: "Ujjwal Mehndi Artist | Bridal & Traditional Henna Excellence",
    description: "Premium bridal and traditional mehndi services. Exquisite designs for every occasion.",
    url: "https://ujjwalmehndiartist.com",
    siteName: "Ujjwal Mehndi Artist",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Mehndi Artist | Bridal & Traditional Henna Excellence",
    description: "Premium bridal and traditional mehndi services.",
  },
  icons: {
    icon: "/images/ujjwal_logo.jpg",
    shortcut: "/images/ujjwal_logo.jpg",
    apple: "/images/ujjwal_logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-on-surface font-manrope selection:bg-primary-container selection:text-on-primary-container">
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
