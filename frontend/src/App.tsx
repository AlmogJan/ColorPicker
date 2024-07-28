import { useState, useEffect } from "react";
import { ColorPicker } from "./comps/colorPicker";

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://colorpicker-qaw9.onrender.com/api/picker")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Hello pitzy24456232werwesadfadsr</h1>
      <h1>{message}</h1>
      <ColorPicker></ColorPicker>
    </div>
  );
}