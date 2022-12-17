import './App.css';
import Game from './components/Game'
import Setup from './components/Setup'
import React from 'react'




function App() {

  const initialFormData = Object.freeze({
    player1: "Player 1",
    player2: "Player 2",
    time: 300,
})

const [formData, setFormData] = React.useState(initialFormData)

const [activeGame, setActiveGame] = React.useState(false)


function handleChange (event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value.trim()
    })
    
 }

function handleChangeNumber (event) {
    setFormData({
        ...formData,
        [event.target.name]: parseInt(event.target.value)
    })
}

function handleSubmit(event) {
    event.preventDefault()
    setActiveGame(true)
}

function newGame(){
    setActiveGame(false)
}

  
  return (
    
    <div className="App">
      <h1>BJJ Score Tracker</h1>
      {!activeGame && <Setup handleChange={handleChange} handleChangeNumber={handleChangeNumber} handleSubmit={handleSubmit}  />}
      {activeGame && <Game player1 = {formData.player1} player2={formData.player2} time={formData.time} newGame={newGame}/>}
      <footer>BJJScore &copy; Aldo Portillo 2022</footer>
    </div>
  );
}

export default App;
