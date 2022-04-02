import { createContext, useContext, useState } from "react"
import EN from './img/british-flag-2.png';
import DE from './img/german-flag-2.png';
import PL from './img/polish-flag-2.png';


const folder = "./translations/"
const defaultLanguage = "en"

export const languages = [
    {
        name: "English",
        short: "en",
        image: EN,
    }, {
        name: "Deutsch",
        short: "de",
        image: DE,
    }, {
        name: "Polski",
        short: "pl",
        image: PL,
    },
]

type LanguageProviderType = {
    children?: string | JSX.Element | JSX.Element[]
}

type LanguageContextType = {
    getData: (q:string) => string,
    setLang: (lang:string) => void,
    lang: string,
}
const LanguageContext = createContext<LanguageContextType>({getData: () => "Loading language...", setLang: () => {}, lang: "en"})
const defaultTranslation = require(`${folder}${defaultLanguage}.json`)

export const useLanguage = () => useContext(LanguageContext).getData

export const useSetLanguage = () => useContext(LanguageContext).setLang

export const useLanguageSelected = () => useContext(LanguageContext).lang

export function LanguageProvider({children}:LanguageProviderType) {
    
    const lang = getCookieOrDefault("lang", defaultLanguage)

    const [language, setLang] = useState(lang)

    const setLanguage = (lang:string) => {
        setLang(lang)
        setCookie("lang", lang)
    }
    
    let translation:any = {};
    try {
        translation = require(`${folder}${language}.json`)
    } catch(e) {
        translation = defaultTranslation
    }

    const search = (q:string) => {
        return pathFromObject(q, translation) || pathFromObject(q, defaultTranslation)
    }
    
    return <LanguageContext.Provider value={{getData: search, setLang: setLanguage, lang: language}}>
        {children}
    </LanguageContext.Provider>
}

function pathFromObject(path: string, source:any):string {
    const splitPath = path.split(".")
    let o = source;
    for(var i = 0; i < splitPath.length; i++) {
        o = o[splitPath[i]] || {}
    }
    if (typeof o === "string") {
        return o
    }
    return ""
}

function getCookieOrDefault(key:string, standard:string):string {
    var cookie = document.cookie.split("; ").map(e=>e.split("=")).find(e=>e[0]==key)
    if(cookie) return cookie[1]
    return standard
}

function setCookie(key:string, value:string) {
    document.cookie = key + "=" + value + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}