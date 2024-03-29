import { merge } from "lodash";
import { createContext, useContext, useState } from "react";
import EN from '../../img/british-flag.png';
import DE from '../../img/german-flag.png';
import PL from '../../img/polish-flag.png';
import { importLanguage } from "../../languageImporter";

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
    getTree: (q: string) => any,
    setLang: (lang:string) => void,
    lang: string,
}
const LanguageContext = createContext<LanguageContextType>({getData: () => "Loading language...", getTree: () => {}, setLang: () => {}, lang: "en"})
const defaultTranslation = importLanguage(defaultLanguage)

export const useLanguage = () => useContext(LanguageContext).getData
export const useLanguageTree = () => useContext(LanguageContext).getTree

export const useSetLanguage = () => useContext(LanguageContext).setLang

export const useLanguageSelected = () => useContext(LanguageContext).lang

export function LanguageProvider({children}:LanguageProviderType) {
    
    const preferredLanguages = navigator.languages
    let preferredLanguage = null
    for(const iterateLang of preferredLanguages) {
        if(isLanguagePresent(iterateLang)) {
            preferredLanguage = iterateLang
            break
        }
    }
    const lang = getCookieOrDefault("lang", preferredLanguage || defaultLanguage)
    document.documentElement.setAttribute("lang", lang)

    const [language, setLang] = useState(lang)

    const setLanguage = (lang:string) => {
        setLang(lang)
        setCookie("lang", lang)
    }
    
    let translation:any = {};
    try {
        translation = importLanguage(language)
    } catch(e) {
        translation = defaultTranslation
    }

    const search = (q:string) => {
        return stringFromPath(q, translation) || stringFromPath(q, defaultTranslation)
    }

    const tree = (q: string) => {
        const all = merge(defaultTranslation, translation)
        return objectFromPath(q, all)
    }
    
    
    return (
        <LanguageContext.Provider value={{getData: search, getTree: tree, setLang: setLanguage, lang: language}}>
            {children}
        </LanguageContext.Provider>
    )
}

function objectFromPath(path: string, source:any): any {
    const splitPath = path.split(".")
    let o = source;
    for(var i = 0; i < splitPath.length; i++) {
        o = o[splitPath[i]] || {}
    }
    return o
}

function stringFromPath(path: string, source: any): string {
    const o = objectFromPath(path, source);
    if (typeof o === "string") {
        return o
    }
    return ""
}

function getCookieOrDefault(key:string, standard:string):string {
    var cookie = document.cookie.split("; ").map(e=>e.split("=")).find(e=>e[0]===key)
    if(cookie) return cookie[1]
    return standard
}

function setCookie(key:string, value:string) {
    document.cookie = key + "=" + value + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function isLanguagePresent(lang:string) {
    return languages.map(e => e.short).includes(lang)
}