'use client'; 
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleContentLoaded = () => {
      setIsLoading(false); 
    };

    if (document.readyState === 'complete') {
        console.log("hi");
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleContentLoaded);
    }

    return () => {
      window.removeEventListener('load', handleContentLoaded);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
         <div className={`  flex fixed z-[400] layout-loader bg-[#213d52]   items-center justify-center overflow-hidden`}>
            <div className="containerr flex flex-col items-center gap-3">
           
             <div className="loader flex justify-center items-center">
                          <div className="company-logo  z-20"></div>

                           </div>
                           <div className="loader2"></div>
           
            </div>
                         

                            </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  );
}


