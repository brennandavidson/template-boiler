import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HeaderProvider } from "@/contexts/HeaderContext";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { Analytics } from "@/components/admin/Analytics";
import { generateMetadata } from "@/seo/seo-utils";
import { seoConfig } from "@/seo/seo.config";
import "@/styles/globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["700", "800"],
  subsets: ["latin"],
});

// Generate metadata using our SEO utilities
export const metadata: Metadata = {
  ...generateMetadata(),
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

// Export viewport configuration separately (Next.js 13+ pattern)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-theme', 'dark');
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <HeaderProvider>
            <Analytics />
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </HeaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
