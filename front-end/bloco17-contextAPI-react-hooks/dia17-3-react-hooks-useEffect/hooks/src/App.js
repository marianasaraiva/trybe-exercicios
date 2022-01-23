import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [randomNumber, setRandomNumber ] = useState(1);
  const [ multiple, setMultiple ] = useState(false);
  const [ timer, setTimer ] = useState(1);

  useEffect(()=> {
    const interval = setInterval(() => {
      const number = Math.round(Math.random() * 10);
      setRandomNumber(number);
      multipleNumber(number);
      setTimer(0);

    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, []);
  
  useEffect(()=> {
    const interval = setInterval(() => {
      setTimer(timer => timer +1)
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const multipleNumber = (randomNumber) => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMultiple(true);
      setTimeout(() => setMultiple(false), 4000);
    }
  }

  return (
    <div>
      <h1>Olá</h1>
      <p>{ randomNumber }</p>
      <p>{ timer }</p>
      <p>{ multiple && 'Acerto' }</p>
    </div>
  );
}

export default App;
