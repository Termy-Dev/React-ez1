import React from 'react';
import './App.css';

import Card from './componets/card';

function App() {

  const arr = ["Pippo", "Pluto", "Paperino"];

  return (
    <div>
      {arr.map((item, index) => <Card name={item} imgIndex={index} /> )}
    </div>
    
  );
}

export default App;
