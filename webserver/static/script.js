const test = () => {
    document.getElementById('test-button').innerHTML = 'button has been pressed'
}


const handleBrightness = (e) => {
    fetch(`http://127.0.0.1:8000/api/${e}`, {
    // fetch(`http://localhost:8000/api/` + new URLSearchParams({'brightness': e}), {
    // fetch(`http://127.0.0.1:8000/api/200`, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
            
          }
          
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('beep boop')
        })
}

// document.addEventListener('DOMContentLoaded', (event) => {
    // document.getElementById('brightness-form').addEventListener('submit', function(e) {
    //     e.preventDefault()
    //     handleBrightness(e);
    // })
// })

document.getElementById('brightness-form').addEventListener('click', () => {
    e.preventDefault()
    handleBrightness(e);
})