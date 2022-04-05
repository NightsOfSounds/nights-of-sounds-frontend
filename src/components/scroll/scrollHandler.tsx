import { useEffect } from "react"

export const useScrollHandler = (handler: ()=>void) => {
    useEffect(() => {
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [handler])
}