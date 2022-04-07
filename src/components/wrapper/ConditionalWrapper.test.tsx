import { render } from '@testing-library/react'
import ConditionalWrapper from './ConditionalWrapper'

describe("renders ConditionalWrapper", ()=>{
    test("renders ConditionalWrapper with false condition", ()=>{

        const conditionalWrapper = render(<ConditionalWrapper condition={false} wrapper={(c)=><div>{c}</div>}><a>Content</a></ConditionalWrapper>)
        
        expect(conditionalWrapper.baseElement.childNodes[0].nodeName === "A")

    })

    test("renders ConditionalWrapper with true condition", ()=>{

        const conditionalWrapper = render(<ConditionalWrapper condition={true} wrapper={(c)=><div>{c}</div>}><a>Content</a></ConditionalWrapper>)
        
        expect(conditionalWrapper.baseElement.childNodes[0].nodeName === "DIV")

    })
})
