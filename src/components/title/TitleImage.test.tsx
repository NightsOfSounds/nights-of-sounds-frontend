import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import TitleImage from "./TitleImage"

describe("renders TitleImage", () => {

    test("renders correct title", () => {
        render(<TitleImage showScrollDownNotice={false}/>)
    
        const headerTitle = screen.getByText("NIGHTS OF SOUNDS")
        expect(headerTitle.nodeName).toBe("P")
    })

})
