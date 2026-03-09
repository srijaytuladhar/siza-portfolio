import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Srijay Tuladhar | Senior Backend Engineer Portfolio",
  description: "Official portfolio of Srijay Tuladhar, a Senior Backend Engineer. Showcasing expertise in backend development, scalable architecture, and technical leadership.",
  alternates: {
    canonical: "https://srijaytuladhar.com.np",
  },
  openGraph: {
    title: "Srijay Tuladhar | Senior Backend Engineer Portfolio",
    description: "Official portfolio of Srijay Tuladhar, a Senior Backend Engineer specializing in scalable architecture and technical leadership.",
    url: "https://srijaytuladhar.com.np",
    siteName: "Srijay Tuladhar Portfolio",
    images: [
      {
        url: "/profile-8bit-v4.png",
        width: 1200,
        height: 630,
        alt: "Srijay Tuladhar - Senior Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijay Tuladhar | Senior Backend Engineer Portfolio",
    description: "Official portfolio of Srijay Tuladhar, a Senior Backend Engineer specializing in scalable architecture.",
    images: ["/profile-8bit-v4.png"],
  },
  other: {
    "og:updated_time": new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            })();
          `,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-N1CGWY80X0" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N1CGWY80X0');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
