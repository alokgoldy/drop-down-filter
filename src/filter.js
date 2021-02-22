import React,{useState,useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'

function Filter({myFun}) {

    const[drop,setDrop] = useState("All");

    useEffect(() => {
        myFun(drop);
      },[drop]);
    
    const handleChange = (e,data) => {
        setDrop(data.value);

    }
    const options = [
        { key: 1, text: 'All', value: "All" },
        { key: 2, text: 'Rich', value: "Rich" },
        { key: 3, text: 'Poor', value: "Poor" },
      ]
    return (
        <div style={{display:"flex",justifyContent: "center",padding:"20px"}}>
            <Dropdown clearable options={options} selection onChange={handleChange} />
        </div>
    )
}

export default Filter