import { render } from '@testing-library/react';
import TextProcessor from './TextProcessor'

const tests = [
    {
        "text": "Hallo, ich bin ein | Test",
        "textnodes": 2,
        "listnodes": 0,
    }, {
        "text": "Hallo, ich bin ein | Test | auch",
        "textnodes": 3,
        "listnodes": 0,
    }, {
        "text": "Hallo, ich bin ein [a,, b] Test",
        "textnodes": 2,
        "listnodes": 1,
    }, {
        "text": "Hallo, ich bin ein | [[a,,b]",
        "textnodes": 1,
        "listnodes": 1,
    }, {
        "text": "Hallo, ich bin ein [[a,,b]",
        "textnodes": 1,
        "listnodes": 1,
    }, 
]

test('renders textprocessor content correctly', () => {
    for(const i in tests) {
        const test = tests[i]

        const textProcesssor = render(<TextProcessor>{test.text}</TextProcessor>);
        const childNodes = Array.from(textProcesssor.container.childNodes[0].childNodes.values())

        const textnodes = childNodes.filter(e => e.nodeName === "P").length
        const listnodes = childNodes.filter(e => e.nodeName === "UL").length

        expect(textnodes).toBe(test.textnodes)
        expect(listnodes).toBe(test.listnodes)
    }
    
});
  