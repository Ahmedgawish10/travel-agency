'use client'

import  Headers  from '../_components/HeaderS'
import { useTranslation } from '../../i18n/clinet'
//      <Headers t={t} lng={lng}/> 

 const ClintChan = ({ lng }) => {
  const { t } = useTranslation(lng, 'footer')
  return (
      <>
      <div>f</div>
      <Headers t={t} lng={lng}/> 
      </>
  )}
 
 export default ClintChan; 