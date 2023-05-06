const options = document.querySelectorAll('.options-home ul li')
options[2].id = 'exit'

const exitBtn = document.querySelector('#exit')
exitBtn.addEventListener('click', () => {
    window.location.href = 'index.html'

    localStorage.removeItem('score')
})