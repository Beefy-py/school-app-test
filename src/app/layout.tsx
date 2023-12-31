import "./globals.css";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Inter } from "next/font/google";
import BeeCursorFollowerComponent from "@/components/bee-cursor-follower.component";
import AosInitWrapperComponent from "@/components/aos-init-wrapper.component";
import TanstackQueryWrapperComponent from "@/components/queries-wrapper.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bijles SR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth", overflowX: "hidden" }}>
      <head>
        <ColorSchemeScript />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={`${inter.className}`}>
        <MantineProvider>
          <main className="flex min-h-screen flex-col mx-auto items-center">
            <AosInitWrapperComponent>
              <TanstackQueryWrapperComponent>
                <BeeCursorFollowerComponent>
                  {children}
                </BeeCursorFollowerComponent>
              </TanstackQueryWrapperComponent>
            </AosInitWrapperComponent>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
