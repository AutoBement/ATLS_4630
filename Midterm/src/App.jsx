import { useState } from 'react'

export default function App () {
  // Changeable counter 
  const [counter, setCounter] = useState(0);

  // Increase Function
  // When clicked, the function would increase the counter by 1`
  function Increase(){
    setCounter(counter + 1); 
  }

  // Reset Function
  // Reset would reset the counter back to zero when clicked
  function Reset(){
    setCounter(0)
  }

  
  return (
    <div>
      {counter}
      <button onClick={Increase}>Increase</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )

  
}