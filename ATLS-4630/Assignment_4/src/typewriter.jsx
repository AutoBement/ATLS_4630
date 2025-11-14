import { useState, useEffect } from "react";

// takes a string and a delay in ms 
// returns that string typed out with the given delay between each letter

export default function useTypewriter(text, delay) {
    const [displayed, setDisplayed] = useState(""); 

    useEffect(() => {
       // Reset the animation each time the text changes 
        setDisplayed("");
        let index = 0;

        const interval = setInterval(() => {
            index++;
            setDisplayed(text.slice(0,index));

            if (index === text.length) {
                // Stop when complete 
                clearInterval(interval);    
            }
        }, delay);
        return () => clearInterval(interval);
    }, [text, delay]);
    return displayed;
}