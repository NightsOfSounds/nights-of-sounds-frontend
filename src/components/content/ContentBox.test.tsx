import { render, screen } from "@testing-library/react"
import ContentBox from "./ContentBox"

describe("ckeck content box", () => {
    test("check styles for content box", () => {
        const box = render(<ContentBox></ContentBox>)

        const container = box.container.childNodes[0] as HTMLDivElement

        expect(window.getComputedStyle(container).width).toBe("1200px")
        expect(window.getComputedStyle(container).maxWidth).toBe("calc( 100% - 20px )")
        expect(window.getComputedStyle(container).margin).toBe("auto")
    })

    test("check children", () => {

        render(<ContentBox><div>test</div></ContentBox>)

        expect(screen.getByText("test")).toBeInTheDocument()
        expect(screen.getByText("test").nodeName).toBe("DIV")
    })
})