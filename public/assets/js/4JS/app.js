const optionHome = document.querySelector('.options-home')
const iconBarBtn = document.querySelector('.three-dot button')
iconBarBtn.addEventListener('click', (e) => {
    if(e.target){
        optionHome.classList.toggle('showOption')
    }
})