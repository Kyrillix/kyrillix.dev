import de from './locales/de.json'
import en from './locales/en.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
    return {
        defaultLocale: 'de',
        fallbackLocale: 'en',
        legacy: false,
        locale: 'de',
        messages: {
            en,
            de
        }
    }
})


