import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [location]);

    return <></>
}

export default ScrollTop