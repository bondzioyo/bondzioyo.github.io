import { createI18n } from 'vue-i18n'
import enLocale from '../locales/en.json'
import plLocale from '../locales/pl.json'
import Cookies from 'js-cookie';


function setLocale(locale = null) {
    let userLocale = Cookies.get('locale');
    if (!locale) {
        if (!userLocale) {
            Cookies.set('locale', 'en', { expires: 30 })
            userLocale = Cookies.get('locale');
        }
    } else {
        if (locale !== userLocale) {
            Cookies.set('locale', locale, { expires: 30 })
            userLocale = Cookies.get('locale');
            window.location.reload()
        }
    }
    return userLocale;
}

const userLocale = setLocale();

const i18n = createI18n({
    legacy: false,
    locale: userLocale,
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en: { ...enLocale },
        pl: { ...plLocale },
    },
})

export { i18n, setLocale, userLocale };