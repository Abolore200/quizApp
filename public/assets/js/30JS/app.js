const optionHome = document.querySelector('.options-home')
const iconBarBtn = document.querySelector('.three-dot button')
iconBarBtn.addEventListener('click', (e) => {
    if(e.target){
        optionHome.classList.toggle('showOption')
    }
})

const closeResult = document.querySelector('.result .closeBtn #close')

closeResult.addEventListener('click', (e) => {

    const closeHome = e.target.parentElement.parentElement.parentElement.parentElement
    closeHome.remove()

    window.location.href = '../index.html'

    // localStorage.removeItem('score')
})

if(window.location.href = "../index.html"){
    localStorage.removeItem('score')
}