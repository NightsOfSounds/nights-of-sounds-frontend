import * as en from "./translations/en.json"
import * as de from "./translations/de.json"
import * as pl from "./translations/pl.json"

const languages = new Map()
languages.set("en", en);
languages.set("de", de);
languages.set("pl", pl);

export function importLanguage(language:string) {
    const imported = languages.get(language);
    if(!imported) {
        throw new Error("language not found")
    }
    return imported
}