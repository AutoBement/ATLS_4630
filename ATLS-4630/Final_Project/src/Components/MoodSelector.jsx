// Emoji picker 

import { moods } from "../Utils/Emojis";

export default function MoodSelector({ selected, onSelect}) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      {moods.map((m) => (
        <span
          key={m.id}
          onClick={() => onSelect(m)}
          style={{
            fontSize: "35px",
            cursor: "pointer",
            padding: "5px",
            borderRadius: "8px",
            background: selected?.id === m.id ? "#d0f0d0" : "transparent"
          }}
        >
          {m.emoji}
        </span>
      ))}
    </div>
  );
}
