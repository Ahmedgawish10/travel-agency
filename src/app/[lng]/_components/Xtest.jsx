'use client'; // This ensures the component is treated as a Client Component

import React, { useEffect, useState } from 'react';

export default function ClientComponent() {
  // State to handle the display of the message
  const [message, setMessage] = useState('ddddfddd');

  // Use useEffect to handle the window load event
  useEffect(() => {
      setMessage("ll")
      console.log("lkk");

  }, []); 

  return (
        <div className={`  ${message=="ll"?"hidden":"flex"}  fixed z-[400] layout-loader bg-[#213d52]  items-center justify-center overflow-hidden`}>
            <div className="containerr flex flex-col items-center gap-3">
            
             <div className="loader flex justify-center items-center">
                            <div className="company-logo  z-20"></div>

                            </div>
                            <div className="loader2"></div>
            
            </div>
                          

                            </div>
  );
}
