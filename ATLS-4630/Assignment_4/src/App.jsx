import { useState } from "react";
import usePrevious from "./Previous";
import useDebouncedState from "./debouncedState";
import useTypewriter from "./typewriter";
import './App.css'


export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  // Call the three custom hooks
  const previousCount = usePrevious(count);
  const [debouncedValue, setDebounced] = useDebouncedState("", 500); 
  const typewriterText = useTypewriter(input, 100);

  return (
    <div>
      <h1>Assignment 4: React Hooks</h1>
      <div>
        <h2>1: usePrevious</h2>
        <p>Current Input: {count}</p>
        <p>Previous Input: {previousCount}</p>
        <button onClick={() => setCount(count + 1)}>Increment by 1</button>

      </div>

      <div>
        <h2>2: useDebouncedState </h2>
        <input
          onChange={(e) => setDebounced(e.target.value)}
          placeholder="Type to see debounced output."
        />
        <p>Debounced Value: {debouncedValue} </p>
      </div>

      <div>
        <h2>3: useTypewriter</h2>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please type something."
        />
        <p>Typewriter Output: {typewriterText}</p>
      </div>
      
    </div>
  );
}
