import React from 'react'

export default function ChoiceCard ( props) {   //B capital means components  //syntax inline style ben duoi style={{"width":"400px"}}
console.log("Props:", props);  
    return (
        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>
            <h1>{props.title}</h1>
            <img src={props.imgURL} alt={props.title}/>
            <h3>{props.winner ? 'Won' : 'Loss'}</h3>
        </div>
    )
}


