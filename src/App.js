import 'semantic-ui-css/semantic.min.css';
import React,{useState} from 'react';
import './App.css';
import data from './dataLab';
import Card from './card';
import Filter from './filter';



function App() {
  const [myData,setMyData] = useState([]);
const myFun = (item) => {
  var compare = [];
  if(item === "All"){
    setMyData(data);
  }
  if(item === "Rich"){
    compare = data.filter(e => e.salary > 100000);
    setMyData(compare);
  }
  if(item === "Poor"){
    compare = data.filter(e => e.salary <= 100000);
    setMyData(compare);
  }
}
  return (
    <div className="app"> 
        <h1 style={{color: "white", textAlign: "center"}}>DropDown Filter</h1>
        <Filter myFun={myFun}/>
        <Card myData={myData}/>
    </div>
  );
}

export default App;
