import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import Location from "./_components/OurLocation";
import React, { Suspense } from "react";
import Image from "next/image"
import LoadingImg from "../../../public/imgs/spiner.jpg"
import LoadingPage from "./_components/common/LoadingPage";
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
        <Suspense fallback={
                        <div className={` w-[100%] h-[100vh] flex fixed z-[400] layout-loader bg-[#213d52]   items-center justify-center overflow-hidden`}>
            <div className="containerr flex flex-col items-center gap-3 ">
              <div className="w-[120px] h-[120px]  bg-white flex justify-center items-center overflow-hidden rounded-full">
                <Image  priority src={LoadingImg} className="w-[90px] h-[120px]  " alt='logo' />
               </div> 
               <div className="loader2 dots"></div>
            </div>
         </div>
                           }>
          <Header lng={lng} />
          {children}
          <Footer lng={lng} />
        </Suspense>
      </body>
    </html>
  );
}
           
                    