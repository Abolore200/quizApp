const nextBtn = document.querySelector('#nextBtn')
document.addEventListener('DOMContentLoaded', () => {
    nextBtn.disabled = true
})

const url = fetch('./assets/json/questions.json')
            .then((data) => { return data.json() })
            .then((data) => {
                const UI = new answersUI()

                document.querySelector('.questions p').innerHTML = data[0]?.[0]?.question
                const answerArray = data[0]?.[0].answer
                let html = ''
                for(let i = 0; i < answerArray.length; i++){
                    html += `
                        <button> ${answerArray[i]} </button>
                    `
                }
                document.querySelector('.answers .display-answers').innerHTML = html

                const btn = Array.from(document.querySelectorAll('.answers .display-answers button'))
                btn[0].style.backgroundColor = 'rgba(255, 0, 0, 0.8)'
                btn[1].style.backgroundColor = 'rgba(0, 0, 255, 0.8)'
                btn[2].style.backgroundColor = 'rgba(0, 128, 0, 0.8)'

                btn[0].setAttribute('class', 'valid')

                btn.forEach(clickBtn => {
                    clickBtn.addEventListener('click', (e) => {
                        if(e.target.classList.contains('valid')){
                            document.querySelector('.questions .results').innerHTML = `
                                <p style="color:green">Correct!!!</p>
                            `
                            UI.disableInvalid([btn[1],btn[2]])
                            nextBtn.disabled = false
                            nextBtn.addEventListener('click', () => {
                                UI.nextQuestion(data, nextBtn)
                            })
                        }
                        else {
                            document.querySelector('.questions .results').innerHTML = `
                                <p style="color:red">Incorrect!!!</p>
                            `
                        }
                    })
                })
            })