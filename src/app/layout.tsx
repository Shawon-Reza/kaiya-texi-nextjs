import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/common/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaiya Taxi",
  description: "Single-page landing site for Kaiya Taxi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function () {
              var mountNode = document.getElementById("google_translate_element");
              if (!mountNode || !window.google || !window.google.translate || !window.google.translate.TranslateElement) {
                return;
              }

              new window.google.translate.TranslateElement(
                {
                  pageLanguage: "en",
                  includedLanguages: "en,fr,es,pt,de,bn,zh-CN,zh-TW,ja,ko,ru,it,ar",
                  layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                },
                "google_translate_element"
              );
            };
          `}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
