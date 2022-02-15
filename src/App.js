import { useState } from "react";
import "./App.css";
import Details from "./components/Details";
import { Tiptap } from "./components/TipTap";

function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <Tiptap setDescription={setDescription} />
      <Details description={description} />
    </div>
  );
}

export default App;
