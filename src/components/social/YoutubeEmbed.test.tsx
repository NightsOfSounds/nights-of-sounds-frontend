import { render, screen } from "@testing-library/react";
import YoutubeEmbed from "./YoutubeEmbed";

const mockedData = {
    items: [
        {
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ]
}

const link = mockedData.items[0].link
const id = link.substring(link.indexOf("=")+1)

const embedUrl = (controls: boolean, autoplay: boolean) => `https://youtube.com/embed/${id}?controls=${controls ? 1 : 0}&autoplay=${autoplay ? 1 : 0}`

beforeEach(()=>{
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(mockedData))
})

afterAll(()=>{
    fetchMock.resetMocks()
})

describe("test youtubeEmbed", ()=>{
    
    test("test correct url 1/4", ()=>{
        render(<YoutubeEmbed/>)

        setTimeout(()=> {
            const embed = screen.getByRole("iframe")
            expect(embed.getAttribute("src")).toBe(embedUrl(false, false))
        }, 100)
    })

    test("test correct url 2/4", ()=>{
        render(<YoutubeEmbed autoplay/>)

        setTimeout(()=> {
            const embed = screen.getByRole("iframe")
            expect(embed.getAttribute("src")).toBe(embedUrl(false, true))
        }, 100)
    })

    test("test correct url 3/4", ()=>{
        render(<YoutubeEmbed controls/>)

        setTimeout(()=> {
            const embed = screen.getByRole("iframe")
            expect(embed.getAttribute("src")).toBe(embedUrl(true, false))
        }, 100)
    })

    test("test correct url 4/4", ()=>{
        render(<YoutubeEmbed autoplay controls/>)

            setTimeout(()=> {
            const embed = screen.getByRole("iframe")
            expect(embed.getAttribute("src")).toBe(embedUrl(true, true))
        }, 100)
    })

})