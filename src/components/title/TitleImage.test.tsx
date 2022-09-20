import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TitleImage from "./TitleImage"

describe("renders TitleImage", () => {

    test("renders correct image", () => {
        render(<BrowserRouter><TitleImage/></BrowserRouter>)
        
        const img = screen.getByRole("img")
        expect(img).toBeInTheDocument()
        expect(img.getAttribute("src")).toBe("/img/banner/banner-1920-1080.webp")
        expect(img.style.width).toBe("100%")
    })

    test("renders correct title", () => {
        render(<BrowserRouter><TitleImage/></BrowserRouter>)
    
        const headerTitle = screen.getByText("NIGHTS OF SOUNDS")
        expect(headerTitle).toBeInTheDocument()
        expect(headerTitle.nodeName).toBe("P")
    })

})
