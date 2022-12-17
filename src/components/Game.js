import React from 'react'
import Player from './Player'
import Timer from './Timer'


function Game (props) {


    return (
        <div className='game'>
            
            <Timer time={props.time} timeSet={props.timeSet}/>
            
            <Player player={props.player1} playerNumber="player1"/>

            <Player player={props.player2} playerNumber="player2"/>
    
            <button onClick={props.newGame} className="new-game-button">New Game</button>
        </div> 
        
    )
}

export default Game