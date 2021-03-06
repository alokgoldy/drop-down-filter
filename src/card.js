import React from 'react'
import './card.css';

function Card({myData}) {
    return (
        <div className="mycontainer">
            {myData.map((item) => {
                return(<div className="mycard">
                <h3 style={{padding: "2px"}}>{item.name}</h3>
                <h4 style={{padding: "2px"}}>Job: {item.job}</h4>
                <h4 style={{padding: "2px"}}>Salary: {item.salary}</h4>
                <p style={{fontSize: "14px" ,padding: "2px",bottom: "10%", position: "absolute"}}>{item.des}</p>
            </div>)
            })}
        </div>
    )
}

export default Card
