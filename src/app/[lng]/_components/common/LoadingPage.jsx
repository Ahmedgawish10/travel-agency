'use client'; 
import { useEffect, useState } from 'react';
import Image from "next/image"
import CompanyLogo from "../../../../../public/imgs/spiner.jpg";
export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleContentLoaded = () => {
      setIsLoading(false); 
    };
       
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleContentLoaded);
    }
      return ()=> () => {
      window.removeEventListener('load', handleContentLoaded);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
         <div className={` w-[100%] h-[100vh] flex fixed z-[400] layout-loader bg-[#213d52]   items-center justify-center overflow-hidden`}>
            <div className="containerr flex flex-col items-center gap-3 ">
              <div className="w-[120px] h-[120px]  bg-white flex justify-center items-center overflow-hidden rounded-full">
                <Image priority src={CompanyLogo} className="w-[90px] h-[120px]  " alt='logo' />
               </div> 
               <div className="loader2 dots"></div>
            </div>
         </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}