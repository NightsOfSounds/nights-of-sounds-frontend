import { render, screen } from "@testing-library/react"
import TitleImage from "./TitleImage"

describe("renders TitleImage", () => {

    test("renders correct image", () => {
        render(<TitleImage/>)
        
        const img = screen.getByRole("img")
        expect(img).toBeInTheDocument()
        expect(img.getAttribute("src")).toBe("/img/untitled2.webp")
        expect(img.style.width).toBe("100%")
    })

    test("renders correct title", () => {
        render(<TitleImage/>)
    
        const headerTitle = screen.getByText("NIGHTS OF SOUNDS")
        expect(headerTitle).toBeInTheDocument()
        expect(headerTitle.nodeName).toBe("H3")
    })

})
