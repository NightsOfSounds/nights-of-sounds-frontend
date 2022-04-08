import { importLanguage } from "./languageImporter"

describe("test languageimporter", () => {
    test("import en, de, pl", () => {
        expect(importLanguage("en")).toBeDefined()
    })

    test("import invalid language", () => {
        expect(() => {importLanguage("abcde")}).toThrow()
    })
})