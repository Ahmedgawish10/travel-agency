import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Location from "./_components/OurLocation";
import React, { Suspense } from "react";
import Image from "next/image"
import LoadingImg from "../../../public/imgs/spiner.jpg"
import LoadingPage from "./_components/LoadingPage";
const inter = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Al-jewar For Tourism & Travels",
  description: "Explore the best travel destinations and unforgettable experiences with Al-jewar for Tourism & Travels.",
};

import { dir } from "i18next";
import languages from "../i18n/settings";
export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
      <LoadingPage/>
        <Suspense fallback={ <div className=" w-full h-[100vh]">  ....... </div>}>
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </Suspense>
      </body>
    </html>
  );
}
