import { useEntries } from "../Context/EntriesContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Displays current data

export default function Dashboard() {

    const {entries} = useEntries();
    console.log(entries);
    const chartData = entries.map((entry) => ({
        date: entry.date,
        mood: entry.moodId
    }));

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Entries: {entries.length}</p>

      <div style={{ marginTop: "25px" }}>
        <h3>Mood Over Time</h3>

        {/* Create a line chart using the emoji data*/}

        <LineChart width={500} height={250} data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis domain={[1, 4]} />
          <Tooltip />
          <Line type="monotone" dataKey="mood" stroke="#5e4ae2ff" />
        </LineChart>
      </div>
    </div>
  );
}
