import SliderMain from "../[lng]/pages/SliderMain";
import BookingSystem from "../[lng]/_components/BookingSystem";
import ElgiwarFeatures from "../[lng]/_components/ElgiwarFeatures";
import Offers from "../[lng]/_components/Offers";
import { useTranslation } from '../i18n'
import { MdOutlineLanguage } from "react-icons/md";

import Link from 'next/link';

 const Home=async({ params: { lng } } )=>{
  const { t } = await useTranslation(lng,"home")

  return (
     
      <main className="main-content ">
           {/*
           <Link href={`/${lng}/sec`} className="text-[red]">Sec</Link><br/>
            <Link href={`/${lng}/pages`} className="text-[red]">Error(Pages)</Link>
            */} 
              <SliderMain lng={lng}/>
              <ElgiwarFeatures lng={lng}/>
              <BookingSystem lng={lng} ticket="ticket"/>
               <Offers lng={lng}/>

             <div className={`home-langSwitcher  fixed top-[8px] z-20 ${lng=="ar"?"left-[5%] ":"right-[5%]"} `}>
            <Link href={`/${lng=="en"?"ar":"en"}`} className="text-[black] flex items-center gap-2 text-[20px]">
                         <span> {lng=="en"?"العربية":"English"}</span>
                         <MdOutlineLanguage/>
            </Link>

           </div>

      </main>
  );
}


export default Home;