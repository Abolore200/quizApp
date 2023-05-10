const totalScoreBtn = document.querySelector('#totalScore')
document.addEventListener('DOMContentLoaded', () => {
//onload of the page, disable the button
totalScoreBtn.disabled = true
totalScoreBtn.className ='bgColor'
})

//auto generate random numbers
const randomMin = Math.floor(Math.random() * 50)

//auto generate random numbers
const randomMax = Math.floor(Math.random() * 50)

//insert the question from JSON file into the <p>
document.querySelector('.questions p').innerHTML = `${randomMin} * ${randomMax}`

//insert the answers from JSON file
const answerOne = Math.floor(Math.random() * 999)
const answerTwo = Math.floor(Math.random() * 999)
const correct = randomMin * randomMax

const allAnswers = Array.from([correct, answerTwo, answerOne])

let html = ''

//looping all the answers
for(let i = 0; i < allAnswers.length; i++){

//creating buttons to insert the answers into
html += `
<button> ${allAnswers[i]} </button>
`
}

//insert the answers into the html page
document.querySelector('.answers .display-answers').innerHTML = html

const btn = Array.from(document.querySelectorAll('.answers .display-answers button'))
btn[0].className = `${correct} red`
btn[1].className = `${answerTwo} blue`
btn[2].className = `${answerOne} green`

//when each of the button is clicked
btn.forEach(clickBtn => {
    clickBtn.addEventListener('click', (e) => {

        //validate the answer, if correct
        if(e.target.classList.contains(`${correct}`)){
            document.querySelector('.questions .results').innerHTML = `
                <p style="color:green">Correct!!!</p>
            `

            //function to disable all answer buttons when clicked
            UI.disableInvalid([btn[0],btn[1],btn[2]])

            //enable the totalscore button
            totalScoreBtn.disabled = false

            //function to sum the total score
            totalScoreBtn.addEventListener('click', () => {
                UI.getAnswer()
            })

            UI.getScore();
        }

        //invalidate the answers, if incorrect
        else {
            document.querySelector('.questions .results').innerHTML = `
                <p style="color:red">Incorrect!!!</p>
            `

            //disable all answer buttons when clicked
            UI.disableInvalid([btn[0],btn[1],btn[2]])

            //enable the next button
            totalScoreBtn.disabled = false
            totalScoreBtn.addEventListener('click', () => {
                UI.getAnswer()
            })
        }
    })
})