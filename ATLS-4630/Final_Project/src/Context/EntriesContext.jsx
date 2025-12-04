import { createContext, useContext, useEffect, useState } from "react";

const EntriesContext = createContext();

export function EntriesProvider({ children }) {
    const [entries, setEntries] = useState([]);

    // Load the saved entries from Local Storage 
    useEffect(() => {
        const saved = localStorage.getItem("entries");
        if (saved) setEntries(JSON.parse(saved));
    }, []);

    // Save the entry whenever it changes 
    useEffect(() => {
        localStorage.setItem("entries", JSON.stringify(entries));
    }, [entries]);

    const addEntry = (entry) => {
        setEntries([...entries, entry]);
    };

    return (
        <EntriesContext.Provider value={{ entries, addEntry }}>
            {children}
        </EntriesContext.Provider>
    );
}

export function useEntries() {
    return useContext(EntriesContext);  
}