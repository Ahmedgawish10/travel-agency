import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from '../i18n';
import "./globals.css";

// Lazy load dynmic components.
const SliderMain = dynamic(() => import("../[lng]/_components/common/SliderMain"), { suspense: true });
const BookingSystem = dynamic(() => import("../[lng]/_components/BookingSystem"), { suspense: true });
const ElgiwarFeatures = dynamic(() => import("../[lng]/_components/ElgiwarFeatures"), { suspense: true });
const Offers = dynamic(() => import("../[lng]/_components/Offers"), { suspense: true });
const WhyUs = dynamic(() => import("../[lng]/_components/WhyUs"), { suspense: true });
const OurLocation = dynamic(() => import("../[lng]/_components/OurLocation"), { suspense: true });
const LoadingPage = dynamic(() => import("../[lng]/_components/common/LoadingPage"), { suspense: true });

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="main-content">
      {/* Language Switcher for home page */}
      <div className={`home-langSwitcher  min-h-[40px] min-w-[120px] flex justify-end fixed top-[8px] z-20 ${lng === "ar" ? "left-[5%]" : "right-[5%]"}`}>
        <Link href={`/${lng === "en" ? "ar" : "en"}`} className="text-[black] flex items-center gap-2 text-[20px]">
          <span>{lng === "en" ? "العربية" : "English"}</span>
          <MdOutlineLanguage />
        </Link>
      </div>

      {/* Lazy-loady comps */}
        <SliderMain lng={lng} />
      

        <ElgiwarFeatures lng={lng} />

        <BookingSystem lng={lng} ticket="ticket" />

        <Offers lng={lng} />

        <WhyUs lng={lng} />

        <OurLocation lng={lng} />
    </main>
  );
};

export default Home;
