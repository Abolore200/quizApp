const options = document.querySelectorAll('.options-home ul li')
options[2].id = 'exit'

const exitBtn = document.querySelector('#exit')
//when clicked, exit the page
exitBtn.addEventListener('click', () => {
    window.location.href = 'index.html'

    localStorage.removeItem('score')
})