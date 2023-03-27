import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
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
        expect(nameEl.nodeName).toBe("H3")
        
        const subtitleEl = screen.getByText(categoryContent.subtitle);
        expect(subtitleEl.nodeName).toBe("P")
    })
})
