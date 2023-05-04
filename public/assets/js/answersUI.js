class answersUI{
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }
    nextQuestion(data, nextBtn){
        setTimeout(() => {
            nextBtn.disabled = true
        },3000)

        const newQuestion = data[0]?.[1]?.question
        const newEle = document.createElement('p')
        newEle.appendChild(document.createTextNode(newQuestion))

        const oldQuestion = document.querySelector('.questions p')
        const questionHome = document.querySelector('.questions')
        questionHome.replaceChild(newEle, oldQuestion)

        //
        const btn = Array.from(document.querySelectorAll('.answers .display-answers button'))
    
        const newNumber = data[0]?.[1]?.answer
        btn.forEach(newBtn => {
            for(let i = 0; i <= newNumber.length; i++){
                const numberHome = document.querySelector('.answers .display-answers')
                numberHome.replaceChild()
            }
        })
    }
}