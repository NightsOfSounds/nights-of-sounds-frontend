import { getByRole, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Fireflies from "./Fireflies";

test("fireflies render", async () => {
    const height = 500
    const width = 1000

    jest
        .spyOn(document.body, 'clientHeight', 'get')
        .mockImplementation(() => height);

    jest
        .spyOn(document.body, 'clientWidth', 'get')
        .mockImplementation(() => width);
    
    let fireflies:any
    await act(async () => {
        fireflies = render(<BrowserRouter><Fireflies/></BrowserRouter>)
        await new Promise(e => setTimeout(e, 400))
    })
    
    if(!fireflies) fail("no fireflies rendered")

    const amount = parseInt((height * width * .00002).toString())
    expect(fireflies.container).toBeInTheDocument()
    expect(fireflies.container.childNodes[0].childNodes.length).toBe(amount)
})