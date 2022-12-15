import { createI18n } from 'vue-i18n'
import { currentLocale } from '@/localize/store/localeStore'
import messages from './messages'


const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale:  'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

export default i18n
