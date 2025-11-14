import {useEffect, useRef} from "react";

//Take a piece of state, and returns whatever that state was on the previous render

// Store previous value 
// Do not want re rendering of previous values
export default function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        // Current value becomes the previous value 
        ref.current = value;
    }, [value]);
    return ref.current;
}
