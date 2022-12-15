import { ref } from 'vue'

const currentLocale = ref('en')
const localeOptions = ref([
  {
    code: 'en',
    label: 'English',
  },
  {
    code: 'ja',
    label: 'Japanese',
  },
])
function setLocale() {}

export { currentLocale, setLocale, localeOptions }
