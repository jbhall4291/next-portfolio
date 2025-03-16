
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Head from 'next/head'
import GoogleAnalytics from '@/components/GoogleAnalytics'





const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Johnny Hall Software Developer Portfolio",
  description: "Johnny Hall Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  const GA_MEASUREMENT_ID = "G-V5LK0N55KQ";
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* 
        <link rel="apple-touch-icon" href="/apple-icon-180x180.png" />


        <link rel="icon" href="/android-icon-192x192.png" sizes="192x192" />


        <link rel="icon" href="/favicon-512x512.png" sizes="512x512" /> */}
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>

      <body className={roboto.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />

        <Header />


        {children}
      </body>
    </html>
  );
}
