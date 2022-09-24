import React from 'react'

export default function Player(props) {
    const [score, setScore] = React.useState(0)

    function modifyScore(points) {
        setScore(prevScore => {
            return prevScore + points
        })
    }
    return ( 
        <div className='playerContainer'>
            <h3>{props.player}</h3>
            <h2>{score}</h2>
            <div className='buttons'>
                <button onClick={()=> modifyScore(4)}>Mount or Back Grab</button>
                <button onClick={()=> modifyScore(3)}>Guard pass</button>
                <button onClick={()=> modifyScore(2)}>Take Down, Sweep, or Knee on belly</button>
                <button onClick={()=> modifyScore(1)}>Advantage</button>
                <button onClick={()=> modifyScore(-1)}>Penalty</button>
            </div>
        </div>
    )
}