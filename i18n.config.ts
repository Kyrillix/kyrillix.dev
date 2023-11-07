import de from './locales/de.json'
import en from './locales/en.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
    return {
        // defaultLocale: 'de', not working, mby optional
        fallbackLocale: 'en',
        legacy: false,
        // locale: 'de',
        locale: (typeof window !== 'undefined' ? localStorage.getItem('lang') || 'de' : 'de'), //(localStorage.getItem('lang') || 'de') 'en'
        messages: {
            en,
            de
        },
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        }
    }
})


