import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState("Session");

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
