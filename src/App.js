import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
   const [name, setName] = useState("");
   const [progress, setProgress] = useState(0);

   useEffect(()=>{
      if (name !== "") {
         setProgress(10);
      }
      else{
        setProgress(0);
      }

   },[name])
 
  
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={progress} />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
export default App;
