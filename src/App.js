import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const progress = 30;
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
