import { createContext, useContext, useState } from "react"

const folder = "./translations/"
const defaultLanguage = "en"

type LanguageProviderType = {
    lang: string,
    children?: string | JSX.Element | JSX.Element[]
}

type LanguageContextType = {
    getData: (q:string) => string,
    setLang: (lang:string) => void,
}
const LanguageContext = createContext<LanguageContextType>({getData: () => "Loading language...", setLang: () => {}})
const defaultTranslation = require(`${folder}${defaultLanguage}.json`)

export const useLanguage = () => useContext(LanguageContext).getData

export const useSetLanguage = () => useContext(LanguageContext).setLang

export function LanguageProvider({children, lang}:LanguageProviderType) {
    
    const [language, setLang] = useState(lang)

    const setLanguage = (lang:string) => {
        setLang(lang)
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
    
    return <LanguageContext.Provider value={{getData: search, setLang: setLanguage}}>
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