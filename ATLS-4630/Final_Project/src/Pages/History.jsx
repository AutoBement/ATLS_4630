import { useEntries } from "../Context/EntriesContext";

export default function History() {
  const { entries } = useEntries();

  return (
    <div>
      <h2>History</h2>

      {/* Message to let you know if there are no entries yet */}
      {entries.length === 0 && <p>No entries yet.</p>}

      {entries.map((e) => (
        <div
          key={e.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "6px"
          }}
        >
          <strong>{e.date}</strong> — {e.mood}
          <p>{e.notes}</p>
        </div>
      ))}
    </div>
  );
}