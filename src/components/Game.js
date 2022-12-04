import React from 'react'
import Player from './Player'
import Timer from './Timer'


function Game (props) {


    return (
        <div className='game'>
            
            <Timer time={props.time} timeSet={props.timeSet}/>

            <div className='player-conatiner'> 
                <Player player={props.player1} />
                <Player player={props.player2} />
            </div>
    
            <button onClick={props.newGame} className="new-game-button">New Game</button>
        </div>
        
    )
}

export default Game