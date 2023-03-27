import { render, screen } from "@testing-library/react"
import TitleImage from "./TitleImage"

describe("renders TitleImage", () => {

    test("renders correct title", () => {
        render(<TitleImage showScrollDownNotice={false}/>)
    
        const headerTitle = screen.getByText("NIGHTS OF SOUNDS")
        expect(headerTitle).toBeInTheDocument()
        expect(headerTitle.nodeName).toBe("P")
    })

})
