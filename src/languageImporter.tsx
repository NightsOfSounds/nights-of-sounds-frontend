const folder = "./translations/"

export function importLanguage(language:string) {
    return require(`${folder}${language}.json`)
}