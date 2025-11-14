import { useState, useEffect } from "react";

// Take an initial value and a debounce time in ms
// Should return a [state, setState], but statte value should be denounced by the time 

export default function useDebouncedState(initialValue, delay) {
    // Raw 
    const [value, setValue] = useState(initialValue);

    // Debounded 
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Update but only after a delay
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return [debouncedValue, setValue]; 
}