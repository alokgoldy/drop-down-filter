import React from 'react';
import './App.css';
import dataLab from './dataLab';
import Card from "./card";

function App() {
  console.log(dataLab);
  return (
    <div className="app"> 
        <h1 style={{color: "white", textAlign: "center"}}>DropDown Filter</h1>
        <Card dataLab={dataLab}/>
    </div>
  );
}

export default App;
