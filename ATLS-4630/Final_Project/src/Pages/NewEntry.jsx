import MoodSelector from "../Components/MoodSelector";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEntries} from "../Context/EntriesContext";

export default function NewEntry(){
    
    const [mood, setMood] = useState(null);
    const [notes, setNotes] = useState("");
    const { addEntry } = useEntries();
    const navigate = useNavigate();

    // Pop up alert if a mood is not selected 
    const handleSave = () => {
        if (!mood) {
            alert("Please pick a mood.");
            return;
        }

    // Create a new entry with all of the needed data
    const newEntry = {
        // unique ID based on timestamp
        id: Date.now(),
        // The emoji 
        mood: mood.emoji,
        // numeric mood value for chart
        moodId: mood.id,
        // Notes left by the user
        notes,
        // Date
        date: new Date().toISOString().split("T")[0]
    };

    addEntry(newEntry);
    
    // go back to dashboard
    navigate("/"); 
  };

    return (
        <div>
            <h2>New Entry</h2>

            {/* Mood Selector */}
            <label>Pick Your Mood:</label>
            <MoodSelector selected={mood} onSelect={setMood}/>

            {/* Leave any Notes */}
            <div style ={{marginTop:"20px"}}>
                <label>Notes:</label>
                <textarea 
                    value = {notes}
                    onChange={(e) => setNotes(e.target.value)}
                style={{ width: "100%", height: "80px" }} />
            </div>

            {/* Save the note */}
            <button onClick={handleSave} style={{ marginTop: "20px" }}>
                Save Entry
            </button>
        </div>
    );
}