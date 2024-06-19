import React, { useEffect, useState } from 'react'




function App() {

    const [ledBrightness, setLedBrightness] = useState('0')

    function buttonRed() {
        fetch(`http://127.0.0.1:8000/color/red`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                  },
                body: ledBrightness
            })
                .then(response => {
                    
                    console.log('all good in the hood')
                })
    }

    function buttonGreen() {
        fetch(`http://127.0.0.1:8000/color/green`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                  },
                body: ledBrightness
            })
                .then(response => {
                    
                    console.log('all good in the hood')
                })
    }

    function buttonBlue() {
        fetch(`http://127.0.0.1:8000/color/blue`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                  },
                body: ledBrightness
            })
                .then(response => {
                    
                    console.log('all good in the hood')
                })
    }

    function buttonRainbow() {
        fetch(`http://127.0.0.1:8000/color/rainbow`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                  },
                body: ledBrightness
            })
                .then(response => {
                    
                    console.log('all good in the hood')
                })
    }

    function buttonResetLeds() {
        fetch(`http://127.0.0.1:8000/color/reset`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                  },
                body: ledBrightness
            })
                .then(response => {
                    
                    console.log('all good in the hood')
                })
    }

    function empty() {
        return 'shitass'
    }


    return (
        <div>
            <div className="button-container">
                <form action="/" id="brightness-form">
                    <label>Brightness: </label>
                    <input type="text" id="brightness-input" value={ledBrightness} onChange={e => setLedBrightness(e.target.value)}/>
                    <button>Press Me!</button>
                </form>
        
            </div>
            <div className="button-container">
                <label>Turn Lights Red</label>
                <button id="buttonRed" onClick={buttonRed}>Press Me!</button>
            </div>
            <div className="button-container">
                <label>Turn Lights Green</label>
                <button id="button2" onClick={buttonGreen}>Press Me!</button>
            </div>
            <div className="button-container">
                <label>Turn Lights Blue</label>
                <button id="button3" onClick={buttonBlue}>Press Me!</button>
            </div>
            <div className="button-container">
                <label>Turn Lights Rainbow</label>
                <button id="button4" onClick={buttonRainbow}>Press Me!</button>
            </div>
            <div className="button-container">
                <label>Button 5</label>
                <button id="button5" onClick={empty}>Press Me!</button>
            </div>
            <div className="button-container">
                <label>Button 6</label>
                <button id="button6" onClick={empty}>Press Me!</button>
            </div>
            <br />
            <br />
            <div className='button-container'>
                <label>Reset Leds</label>
                <button id='button7' onClick={buttonResetLeds}>Reset that shit!</button>
            </div>
        </div>
    )
}

export default App