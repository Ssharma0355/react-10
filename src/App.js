import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import UserList from "./components/UserList";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let newProgress = 0;
    if (name !== "") newProgress += 50;
    if (age !== "") newProgress += 50;
    setProgress(newProgress);
  }, [name, age]); // Listen to both name and age

  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={progress} />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <UserList />
    </div>
  );
}

export default App;
