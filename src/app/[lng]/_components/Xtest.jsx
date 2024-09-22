'use client'; // This ensures the component is treated as a Client Component

import React, { useEffect, useState } from 'react';

export default function ClientComponent() {
  // State to handle the display of the message
  const [message, setMessage] = useState('ddddfddd');

  // Use useEffect to handle the window load event
    
  useEffect(() => {
      setMessage("ll")
       sessionStorage.setItem('isLoaded', 'true');
 

  }, []); 
      if (sessionStorage.getItem('isLoaded')=="true") {
    return ;
   }
  return (
        <div className={`  ${message=="ll"?"hidden":"flex"}  fixed z-[400] layout-loader bg-[#213d52]   items-center justify-center overflow-hidden`}>
            <div className="containerr flex flex-col items-center gap-3">
            
             <div className="loader flex justify-center items-center">
                            <div className="company-logo  z-20"></div>

                            </div>
                            <div className="loader2"></div>
            
            </div>
                          

                            </div>
  );
}





//'use client'; // This ensures the component is treated as a Client Component
//
//import React, { useEffect, useState } from 'react';
//
//function ClientComponent() {
//  // State to handle the display of the loading screen
//  const [isLoading, setIsLoading] = useState(true);
//
//  // Use useEffect to handle session-based logic for loading state
//      if (sessionStorage.getItem('isLoaded')=="true") {
//     return 0;
//    }
//  useEffect(() => {
//
//    // Check sessionStorage for a specific key/value to control loading visibility
//    const sessionValue = sessionStorage.getItem('isLoaded');
//
//    // If the session value indicates the content has already loaded, set loading to false
//    if (sessionValue === 'true') {
//        console.log(8);
//      setIsLoading(false);
////        return 0;
//    } else {
//      // If session value is not set, assume it's the first load
//      setIsLoading(true);
//      
//      // Simulate a loading delay or handle actual session-based condition
//      setTimeout(() => {
//        // Update sessionStorage to indicate that loading has completed
//        sessionStorage.setItem('isLoaded', 'true');
//
//        // Update the state to hide the loading screen
//        setIsLoading(false);
//      }, 2000); // Adjust the delay as needed
//    }
//  }, []);
//
//  return (
//    <div
//      className={`${
//        isLoading ? 'flex' : 'hidden'
//      } fixed z-[400] layout-loader bg-[red] items-center justify-center overflow-hidden`}
//    >
//      <div className="containerr flex flex-col items-center gap-3">
//        <div className="loader flex justify-center items-center">
//          <div className="company-logo z-20"></div>
//        </div>
//        <div className="loader2"></div>
//      </div>
//    </div>
//  );
//}
//
//export default React.memo(ClientComponent);