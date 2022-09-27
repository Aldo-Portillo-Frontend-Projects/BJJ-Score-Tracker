import React from 'react'

function TimerInput (props) {
    return (
        <div>
            <h3>Set Timer</h3>
            <input type="number" required minutes={props.minutes} onChange={props.handleChange}/>
        </div>
    )
}


function Timer (props) {
    return (
        <div>
            <h1>{props.minutes}:{props.seconds}</h1>
        </div>
    )
}
function StartTime (props) {
    return (
        <div>
            <button onClick={props.handleClick}>Start</button>
        </div>
    )
}

export {TimerInput, Timer, StartTime}