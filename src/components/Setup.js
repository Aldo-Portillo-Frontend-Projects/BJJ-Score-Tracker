import React from 'react'
import Game from './Game'



function Setup () {


    const initialFormData = Object.freeze({
        player1: "Player 1",
        player2: "Player 2",
        time: 300,
    })

    const [formData, setFormData] = React.useState(initialFormData)

    const [timeSet, setTimeSet] = React.useState(false)

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
        setTimeSet(true)
        console.log(formData)
    }

    function newGame(){
        setTimeSet(false)
        console.log("Button works")
    }

    
    

    
    return (
        <>
        
        {timeSet === false && <div className='setup'>
            <form>
            <label>Player 1:
                <input type="text" name="player1" onChange={handleChange}/>
            </label>
            <label>Player 2:
                <input type="text" name="player2" onChange={handleChange} />
            </label>
            <label className='time'>
                <h3>Time (in minutes):</h3>
                <label><input type="radio" value="60" name="time" onChange={handleChangeNumber}/> 1 </label>
                <label><input type="radio" value="120" name="time" onChange={handleChangeNumber} />2 </label>
                <label><input type="radio" value="180" name="time" onChange={handleChangeNumber}/> 3 </label>
                <label><input type="radio" value="240" name="time" onChange={handleChangeNumber}/> 4 </label>
                <label><input type="radio" value="300" name="time" onChange={handleChangeNumber}/> 5 </label>
                <label><input type="radio" value="360" name="time" onChange={handleChangeNumber}/> 6 </label>
                <label><input type="radio" value="420" name="time" onChange={handleChangeNumber}/> 7 </label>
                <label><input type="radio" value="480" name="time" onChange={handleChangeNumber}/> 8 </label>
                <label><input type="radio" value="540" name="time" onChange={handleChangeNumber}/> 9 </label>
                <label><input type="radio" value="600" name="time" onChange={handleChangeNumber}/> 10 </label>
            </label>
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>}
        {timeSet && <div className='game'>

            <div className='timer'>
            </div>
            <Game player1 = {formData.player1} player2={formData.player2} time={formData.time} timeSet={timeSet} newGame={newGame}/>

        </div>}
        </>

        
        
        
    )
}

export default Setup