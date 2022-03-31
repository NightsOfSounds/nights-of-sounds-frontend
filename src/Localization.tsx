import { createContext, useContext } from "react"

const folder = "./translations/"
const defaultLanguage = "en"

type LanguageProviderType = {
    language: string,
    children?: string | JSX.Element | JSX.Element[]
}

type LanguageContextType = (q:string) => string
const LanguageContext = createContext<LanguageContextType>((q:string) => "Loading language...")
const defaultTranslation = require(`${folder}${defaultLanguage}.json`)

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({children, language}:LanguageProviderType) {
    
    let translation:any = {};
    try {
        translation = require(`${folder}${language}.json`)
    } catch(e) {
        translation = defaultTranslation
    }

    const search = (q:string) => {
        return pathFromObject(q, translation) || pathFromObject(q, defaultTranslation)
    }
    
    return <LanguageContext.Provider value={search}>
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