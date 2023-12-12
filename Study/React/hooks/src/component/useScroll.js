import { useState, useEffect, useRef  } from "react"

const useScroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0
    });

    const onScroll = () => {
        console.log("y", window.scrollY, "x", window.scrollX);
        setState({ y: window.scrollY, x: window.scrollX});
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, []);
    return state;
};


export default useScroll ;