const options = document.querySelectorAll('.options-home ul li')
options[2].id = 'exit'
options[0].innerHTML = 'Quit and Save'


const exitBtn = document.querySelector('#exit')
exitBtn.addEventListener('click', () => {
    //when clicked, exit the page
    window.location.href = '../index.html'

    //when clicked, clear the local storage
    if(window.location.href === '../index.html'){
        localStorage.removeItem('score')
    }
})

const siteUrl = 'aboquizapp.netlify.app'

//when clicked, remove options home
options[1].addEventListener('click', () => {
    document.querySelector('.options-home').classList.remove('showOption')
})

//share to twitter when clicked
options[1].innerHTML = `
    <a 
        href="https://twitter.com/intent/tweet?text=Visit%20our%20website%20to%20play%20at%20${siteUrl}" 
        target="_blank">
            Share
    </a>
`

const shareBtn = document.querySelector('.options-home ul li a')
shareBtn.className = 'add'