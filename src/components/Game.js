import React from 'react'
import Player from './Player'
import {TimerInput, Timer, StartTime} from './Timer'

function Game () {

    const [seconds, setSeconds] = React.useState('00');
    const [minutes, setMinutes] = React.useState('00')

    let secondsRemaining
    let intervalHandle 

    function handleChange (event) {
        console.log(event.target.value)
        setMinutes(event.target.value)
        
    }

    function tick () {
        let min = Math.floor(secondsRemaining / 60)
        let sec = secondsRemaining - (min * 60)

        setSeconds(sec)
        setMinutes(min)

        if(sec < 10) {
            setSeconds("0" + sec)
        }

        if (min < 10) {
            setMinutes("0" + min)
        }

        if (min === 0 & sec === 0) {
            clearInterval(intervalHandle);
        }

        secondsRemaining--
    }

    function startCountDown() {
        intervalHandle = setInterval(tick, 1000);

        let time = minutes;

        secondsRemaining = time * 60;
    }
    return (
        <div className='game'>
            
            <TimerInput minutes={minutes} handleChange={handleChange}/>
            <Timer minutes={minutes} seconds={seconds}/>
            <StartTime handleClick={startCountDown}/>

            <Player player="Player 1" />
            <Player player="Player 2" />
    
            <div className='game-buttons'>
            <button>Pause Timer</button>
            <button>New Game</button>
            </div>
        </div>
        
    )
}

export default Game