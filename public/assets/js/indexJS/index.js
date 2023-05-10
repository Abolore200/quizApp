const options = document.querySelectorAll('.options-home ul li')
options[2].id = 'exit'
options[0].innerHTML = 'Save'

options[0].addEventListener('click', () => {
    htmlUI.sumAnswers()
})

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

// when clicked, remove options home

options[0].addEventListener('click', () => {
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

const loader = document.querySelector('.displayLoader')
const result = document.querySelector('.displayResult')

class HTMLUI{
    sumAnswers(){
        const scoreArray = localStorage.getItem('score')

        if(scoreArray === null || scoreArray === []){
            this.displayEmptyScore()
        }

        let scoreJSON;
        scoreJSON = JSON.parse(scoreArray)
        
        let scoreLength = scoreJSON.length
        this.getScoreLength(scoreJSON,scoreLength)
    }
    displayScore(sum){
        loader.style.display = 'block'
        let html = ''
        html += `
            <p>Total Score: <span>${sum}</span></p>
        `;
        document.querySelector('.showResult').innerHTML = html
        setTimeout(() => {
            loader.style.display = 'none'
            result.style.display = 'block'
        },3000)
    }
    displayEmptyScore(){
        loader.style.display = 'block'
        let html = ''
        html += `
            <p>Total Score: <span> 0 </span></p>
        `;
        document.querySelector('.showResult').innerHTML = html
        setTimeout(() => {
            loader.style.display = 'none'
            result.style.display = 'block'
        },3000)
    }
    getScoreLength(scoreJSON, scoreLength){
        let sum = 0;
        for(let i = 0; i < scoreLength; i++){
            sum += scoreJSON[i]
        } return this.displayScore(sum)
    }
}
const htmlUI = new HTMLUI()

const closeResult = document.querySelector('.result .closeBtn #close')

closeResult.addEventListener('click', (e) => {

    const closeHome = e.target.parentElement.parentElement.parentElement.parentElement
    closeHome.remove()

    window.location.href = '../index.html'

    localStorage.removeItem('score')
})