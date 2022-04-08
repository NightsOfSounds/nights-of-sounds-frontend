import { render, screen } from "@testing-library/react"
import Category from "./Category"

const categoryContent = {
    name: "Name",
    subtitle: "Subtitle",
    content: [{
        "name": "ContentName",
        "text": "ContentText",
    }, {
        "name": "ContentName2",
        "text": "ContentText2",
    }]
}

describe("renders Category", () => {
    test("check headline", () => {
        const category = render(<Category {...categoryContent}/>)

        const nameEl = screen.getByText(categoryContent.name);
        expect(nameEl).toBeInTheDocument()
        expect(category.container).toContainElement(nameEl)
        expect(nameEl.nodeName).toBe("H3")
        
        const subtitleEl = screen.getByText(categoryContent.subtitle);
        expect(subtitleEl).toBeInTheDocument()
        expect(category.container).toContainElement(subtitleEl)
        expect(subtitleEl.nodeName).toBe("P")

        for(const i in categoryContent.content) {
            const content = categoryContent.content[i]

            const titleEl = screen.getByText(content.name)
            expect(titleEl).toBeInTheDocument()
            expect(category.container).toContainElement(titleEl)

            const descriptionEl = screen.getByText(content.text)
            expect(descriptionEl).toBeInTheDocument()
            expect(category.container).toContainElement(descriptionEl)
        }
    })
})
