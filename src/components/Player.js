import React from 'react'

export default function Player(props) {
    const [score, setScore] = React.useState(0)

    function modifyScore(points) {
        setScore(prevScore => {
            return prevScore + points
        })
    }
    return ( 
        <div className={`playerContainer ${props.playerNumber}`}>
            <h3>{props.player}</h3>
            <h2>{score}</h2>
            <div className='point-buttons'>
                <button onClick={()=> modifyScore(4)}>Mount</button>
                <button onClick={()=> modifyScore(4)}>Back Grab</button>
                <button onClick={()=> modifyScore(3)}>Guard Pass</button>
                <button onClick={()=> modifyScore(2)}>Take Down</button>
                <button onClick={()=> modifyScore(2)}>Sweep</button>
                <button onClick={()=> modifyScore(2)}>Knee on Belly</button>
                <button onClick={()=> modifyScore(1)} className="advantage">Advantage</button>
                <button onClick={()=> modifyScore(-1)} className="penalty">Penalty</button>
            </div>
        </div>
    )
}