import React from 'react'
import Timer from './Timer'
import Player from './Player'

function Game () {
    return (
        <div className='game'>
            <h1>Game Render</h1>
            <Timer />

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