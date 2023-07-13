import "./globals.css";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Staatliches } from "next/font/google";
import NavTailwind from "@/components/NavTailwind";
import Script from "next/script";

const customFont = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-custom-font",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keithscottblues.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: {
    default: "Keith Scott Blues",
    template: "%s | Keith Scott Blues",
  },
  description: "Description goes here",
  openGraph: {
    title: "Keith Scott - This and that",
    description: "Showcasing the ..",
    url: "https://keithscottblues.com/",
    siteName: "Keith Scott Blues",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent("/images/IMG_9823.jpg")}`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.className}>
      <body>
        <NavTailwind />
        <div className="pt-4">
          {children}
          <Footer />
        </div>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
        </Script>
      </body>
    </html>
  );
}
