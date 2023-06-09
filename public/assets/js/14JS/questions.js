const nextBtn = document.querySelector('#nextBtn')
document.addEventListener('DOMContentLoaded', () => {
//onload of the page, disable the button
nextBtn.disabled = true
})

//auto generate random numbers
const randomMin = Math.floor(Math.random() * 50)

//auto generate random numbers
const randomMax = Math.floor(Math.random() * 50)

//insert the question from JSON file into the <p>
document.querySelector('.questions p').innerHTML = `${randomMin} + ${randomMax}`

//insert the answers from JSON file
const answerOne = Math.floor(Math.random() * 999)
const answerTwo = Math.floor(Math.random() * 999)
const correct = randomMin + randomMax

const allAnswers = Array.from([answerOne, answerTwo, correct])

let html = ''

//randomize the answers
function shuffle(allAnswers){
    const nums = allAnswers.sort(() => Math.random() - 0.5)
    
    for(let i = 0; i < nums.length; i++){

        //creating buttons to insert the answers into
        html += `
            <button class="${nums[i]}"> ${nums[i]} </button>
        `
    }
}
shuffle(allAnswers)

//insert the answers into the html page
document.querySelector('.answers .display-answers').innerHTML = html

const btn = Array.from(document.querySelectorAll('.answers .display-answers button'))

btn[2].style.backgroundColor = "red"
btn[0].style.backgroundColor = "blue"
btn[1].style.backgroundColor = "green"

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

            //enable the next button
            nextBtn.disabled = false

            //function to navigate to next page
            nextBtn.addEventListener('click', () => {
                UI.nextPage()
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
            nextBtn.disabled = false

            //enable the next button
            nextBtn.addEventListener('click', () => {
                UI.nextPage()
            })
        }
    })
})