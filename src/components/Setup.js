import React from 'react'



function Setup (props) {
    
    return (
        <div className='setup'>
            <form>
            <label className='player-one'>Player 1:
                <input type="text" name="player1" onChange={props.handleChange}/>
            </label>
            <label className='player-two'>Player 2:
                <input type="text" name="player2" onChange={props.handleChange} />
            </label>
            <label className='time'>
                <h3>Time <span>(in minutes)</span>:</h3>
                <label><input type="radio" value="60" name="time" onChange={props.handleChangeNumber}/> 1 </label>
                <label><input type="radio" value="120" name="time" onChange={props.handleChangeNumber} />2 </label>
                <label><input type="radio" value="180" name="time" onChange={props.handleChangeNumber}/> 3 </label>
                <label><input type="radio" value="240" name="time" onChange={props.handleChangeNumber}/> 4 </label>
                <label><input type="radio" value="300" name="time" onChange={props.handleChangeNumber}/> 5 </label>
                <label><input type="radio" value="360" name="time" onChange={props.handleChangeNumber}/> 6 </label>
                <label><input type="radio" value="420" name="time" onChange={props.handleChangeNumber}/> 7 </label>
                <label><input type="radio" value="480" name="time" onChange={props.handleChangeNumber}/> 8 </label>
                <label><input type="radio" value="540" name="time" onChange={props.handleChangeNumber}/> 9 </label>
                <label><input type="radio" value="600" name="time" onChange={props.handleChangeNumber}/> 10 </label>
            </label>
            <button onClick={props.handleSubmit}>Submit</button>
            </form>
        </div>

    )
}

export default Setup