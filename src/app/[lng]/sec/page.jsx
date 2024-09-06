
import React from 'react'
import Link from 'next/link';
import { useTranslation } from '../../i18n'

export default  async function  page({ params: { lng } }) {
      const { t } = await useTranslation(lng, 'home')
       console.log(lng);
  return (
      <>
    <div>
      hi from sec page

    </div>
             
    <h1>{t('terms')}</h1>
        <div className={`home-langSwitcher fixed top-[8px] z-20 ${lng=="ar"?"left-[5%] ":"right-[5%]"} `}>
            <Link href={`/${lng=="en"?"ar":"en"}/sec`} className="text-[red]">{lng=="en"?"العربية":"English"}</Link>
           </div> 
   

      </>
  )
}


//   <Link href={`/${"ar"}/sec`} className="text-[red]">arrrr</Link>
//      <br/>
//      <Link href={`/${"en"}/sec`} className="text-[red]">ennnn</Link>