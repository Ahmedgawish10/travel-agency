'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import CompanyLogo from '../../../../../public/imgs/spiner.jpg';

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

    return () => {
      window.removeEventListener('load', handleContentLoaded);
    };
  }, []);

  if (!isLoading) return null; 

  return (
    <div
      className="w-full h-screen flex fixed z-[400] bg-[#213d52] items-center justify-center overflow-hidden"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-30 h-30 bg-white flex justify-center items-center overflow-hidden rounded-full">
          <Image
            priority
            src={CompanyLogo}
            className="w-[90px] h-[120px]"
            alt="Company Logo"
          />
        </div>
        <div className="loader dots"></div>
      </div>
    </div>
  );
}
  
