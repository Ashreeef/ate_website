import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const _geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const _notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ATE Website",
  description: "Official website of the ATE mobile application.",
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_notoSansArabic.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
