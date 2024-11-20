import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from '../i18n';

// Lazy load dynmic components
const SliderMain = dynamic(() => import("../[lng]/_components/SliderMain"), { suspense: true });
const BookingSystem = dynamic(() => import("../[lng]/_components/BookingSystem"), { suspense: true });
const ElgiwarFeatures = dynamic(() => import("../[lng]/_components/ElgiwarFeatures"), { suspense: true });
const Offers = dynamic(() => import("../[lng]/_components/Offers"), { suspense: true });
const WhyUs = dynamic(() => import("../[lng]/_components/WhyUs"), { suspense: true });
const OurLocation = dynamic(() => import("../[lng]/_components/OurLocation"), { suspense: true });
const LoadingPage = dynamic(() => import("../[lng]/_components/LoadingPage"), { suspense: true });

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, "home");

  return (
    <main className="main-content">
      {/* Language Switcher for home page */}
      <div className={`home-langSwitcher fixed top-[8px] z-20 ${lng === "ar" ? "left-[5%]" : "right-[5%]"}`}>
        <Link href={`/${lng === "en" ? "ar" : "en"}`} className="text-[black] flex items-center gap-2 text-[20px]">
          <span>{lng === "en" ? "العربية" : "English"}</span>
          <MdOutlineLanguage />
        </Link>
      </div>

      {/* Lazy-loady comps */}
      <Suspense fallback={<LoadingPage />}>
        <SliderMain lng={lng} />
      </Suspense>

      <Suspense fallback={<LoadingPage />}>
        <ElgiwarFeatures lng={lng} />
      </Suspense>

      <Suspense fallback={<LoadingPage />}>
        <BookingSystem lng={lng} ticket="ticket" />
      </Suspense>

      <Suspense fallback={<LoadingPage />}>
        <Offers lng={lng} />
      </Suspense>

      <Suspense fallback={<LoadingPage />}>
        <WhyUs lng={lng} />
      </Suspense>

      <Suspense fallback={<LoadingPage />}>
        <OurLocation lng={lng} />
      </Suspense>
    </main>
  );
};

export default Home;
