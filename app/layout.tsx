import "./globals.css";

import { Libre_Franklin, Permanent_Marker, Rock_Salt } from "next/font/google";
import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanentMarker",
  weight: ["400"],
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  variable: "--font-rockSalt",
  weight: ["400"],
});

export const metadata: Metadata = {
  description: SITE.description,
  openGraph: OPEN_GRAPH,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
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
      className={`${libreFranklin.variable} ${rockSalt.variable} antialiased`}
    >
      <body className="font-sans">
        <div className="flex flex-col justify-between h-screen">
          <Nav links={nav} />
          <div className="">{children}</div>
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
