
import { Roboto } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header";
import Head from 'next/head'




const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Johnny Hall Software Developer Portfolio",
  description: "Johnny Hall Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>

      <body className={roboto.className}>

        <Header />


        {children}
      </body>
    </html>
  );
}
