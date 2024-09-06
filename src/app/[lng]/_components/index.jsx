import { useTranslation } from '../../../i18n'
import { Headers } from './HeaderS'

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, 'footer')
  return <Headers t={t} lng={lng} />
}