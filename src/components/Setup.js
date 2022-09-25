import React from 'react'

function Setup () {
    return (
        <div className='setup'>
            <h1 styles={{color: "black"}}>Setup Render</h1>
            <form>
            <label>Player 1:
                <input type="text" />
            </label>
            <label>Player 2:
                <input type="text" />
            </label>
            <label>Time (in minutes):
                <input type="number" />
            </label>
            </form>
        </div>
        
        
    )
}

export default Setup