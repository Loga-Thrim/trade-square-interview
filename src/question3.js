import './question3.css';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [score, setScore] = useState(0);

  const changeInput = n => {
    if(n != undefined) {
      const bot = Math.floor(Math.random() * 3) + 1;
      console.log('---> ', bot);
      if((n % 3) + 1 === bot) setScore(score + 1);
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={() => changeInput(1)}>ค้อน</button>
        <button onClick={() => changeInput(2)}>กระไกร</button>
        <button onClick={() => changeInput(3)}>กระดาษ</button>
      </div>
      <br/>
      Your score: {score}
    </div>
  );
}