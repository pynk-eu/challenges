import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, SetIsActive] = useState(false);

  function handleClick() {
    SetIsActive(!isActive);

    // Check that the value changes correctly.
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
