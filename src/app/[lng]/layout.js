import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Location from "./_components/OurLocation";
import React, { Suspense } from "react";
import Loading from "./_components/cc";
import Image from "next/image"
import X from "../../../public/imgs/spiner.jpg"

const inter = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { dir } from "i18next";
import languages from "../i18n/settings";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function DelayedContent() {
  await delay(6000);
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Suspense fallback={
            <div className="layout-loader bg-[#213d52] flex items-center justify-center overflow-hidden">
            <div className="containerr flex flex-col items-center gap-3">
            
             <div class="loader flex justify-center items-center">
                            <div className="company-logo  z-20"></div>

                            </div>
                            <div class="loader2"></div>
            
            </div>
                          

                            </div>}>
           <DelayedContent />
          <Header lng={lng} />
          {children}
          <Location lng={lng} />
          <Footer lng={lng} />
        </Suspense>
      </body>
    </html>
  );
}
