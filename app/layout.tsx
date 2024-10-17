import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Background } from "./components/layout";
import { Navigation } from "./components/nav";
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: {
        default: "Anna Kis",
        template: "%s | Anna Kis"
  },
  description: "Math Graduate Student at the Ohio State University",
  openGraph: {
    title: "Anna Kis",
    description:
      "Math Graduate Student at the Ohio State University",
      url: "https://anna-kis-portfolio.vercel.app/",
    siteName: "Anna Kis Portfolio",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Anna Kis",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/letterA.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
        <head>
          <Analytics />
        </head>
        <body
          className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
            }`}
        >
          <Background particles={true}>
            <Navigation />
            {children}
          </Background>
        </body>
    </html>
  );
}
