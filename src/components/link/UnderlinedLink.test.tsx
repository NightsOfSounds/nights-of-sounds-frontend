import { render, screen } from "@testing-library/react"
import exp from "constants"
import { BrowserRouter } from "react-router-dom"
import UnderlinedLink from "./UnderlinedLink"

describe("renders underlined link", () => {
    test("link has correct display", () => {
        render(<BrowserRouter><UnderlinedLink to="/test">Test</UnderlinedLink></BrowserRouter>)
    
        const element = screen.getByText("Test")
        expect(element).toBeInTheDocument()
        expect(element.nodeName).toBe("P")
        expect(element.textContent).toBe("Test")
    })

    test("link has correct link", () => {
        render(<BrowserRouter><UnderlinedLink to="/test">Test</UnderlinedLink></BrowserRouter>)
    
        const element = screen.getByText("Test")
        if(!element.parentElement) {
            fail("link a wrapper not found")
        }
        expect(element.parentElement.nodeName).toBe("A")
        expect(element.parentElement.getAttribute("href")).toBe("/test")
    })
})
