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

beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResponseOnce(JSON.stringify(mockedData))
})

afterAll(() => {
    fetchMock.resetMocks()
})

describe("test youtubeEmbed", () => {
    
    test("test correct url 1/4", async () => {
        render(<YoutubeEmbed/>)

        await wait()

        const embed = screen.getByRole("Latest")
        expect(embed.getAttribute("src")).toBe(embedUrl(false, false))
    })

    test("test correct url 2/4", async () => {
        render(<YoutubeEmbed autoplay/>)

        await wait()

        const embed = screen.getByRole("Latest")
        expect(embed.getAttribute("src")).toBe(embedUrl(false, true))
    })

    test("test correct url 3/4", async () => {
        render(<YoutubeEmbed controls/>)

        await wait()

        const embed = screen.getByRole("Latest")
        expect(embed.getAttribute("src")).toBe(embedUrl(true, false))
    })

    test("test correct url 4/4", async () => {
        render(<YoutubeEmbed autoplay controls/>)

        await wait()

        const embed = screen.getByRole("Latest")
        expect(embed.getAttribute("src")).toBe(embedUrl(true, true))
    })

})

function wait() {
    return new Promise(e => setTimeout(e, 100))
}