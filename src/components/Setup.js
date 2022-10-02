import React from 'react'

function Setup () {

    const initialFormData = Object.freeze({
        player1: "",
        player2: "",
        time: ""
    })

    const [formData, setFormData] = React.useState(initialFormData)

    function handleChange (event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        })
     }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return (
        <div className='setup'>
            <h1 styles={{color: "black"}}>Setup Render</h1>
            <form>
            <label>Player 1:
                <input type="text" name="player1" onChange={handleChange}/>
            </label>
            <label>Player 2:
                <input type="text" name="player2" onChange={handleChange} />
            </label>
            <label>Time (in minutes):
                <input type="radio" value="1" name="time" onChange={handleChange} /> 1
                <input type="radio" value="2" name="time" onChange={handleChange}/> 2
                <input type="radio" value="3" name="time" onChange={handleChange}/> 3
                <input type="radio" value="4" name="time" onChange={handleChange}/> 4
                <input type="radio" value="5" name="time" onChange={handleChange}/> 5
                <input type="radio" value="6" name="time" onChange={handleChange}/> 6
                <input type="radio" value="7" name="time" onChange={handleChange}/> 7
                <input type="radio" value="8" name="time" onChange={handleChange}/> 8
                <input type="radio" value="9" name="time" onChange={handleChange}/> 9
                <input type="radio" value="10" name="time" onChange={handleChange}/> 10
            </label>
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        
        
    )
}

export default Setup