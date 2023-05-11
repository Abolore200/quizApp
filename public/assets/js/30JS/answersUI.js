const loaders = document.querySelector('.displayLoader')
const results = document.querySelector('.displayResult')

class answersUI{
    
    //disable all answer buttons when clicked
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }

    //get the total score from the localStorage
    getAnswer(){
        const totalScore = localStorage.getItem('score')

        if(totalScore === null || totalScore === []){
            this.showEmptyScore()
        }
        let scoreJSON;
        scoreJSON = JSON.parse(totalScore)
        
        let scoreLength = scoreJSON.length
        this.getScoreLength(scoreJSON,scoreLength)

    }
    //if users fail to score all question, score them zero
    showEmptyScore(){
        loaders.style.display = 'block'
        let html = ''
        html += `
            <p>Total Score: <span> 0 </span></p>
        `;
        document.querySelector('.showResult').innerHTML = html
        setTimeout(() => {
            loaders.style.display = 'none'
            results.style.display = 'block'
        },3000)
    }

    //sum the all score from localStorage and give the output
    getScoreLength(scoreJSON, scoreLength){
        let sum = 0;
        for(let i = 0; i < scoreLength; i++){
            sum += scoreJSON[i]
        } return this.displayAnswer(sum)
    }

    //display the answer
    displayAnswer(sum){
        loaders.style.display = 'block'
        let html = ''
        html += `
            <p>Total Score: <span>${sum}</span></p>
        `;
        document.querySelector('.showResult').innerHTML = html
        setTimeout(() => {
            loaders.style.display = 'none'
            results.style.display = 'block'
        },3000)
    }

    //100 points is given for each correct answer
    getScore(){
        const valid = 100
        this.saveScore(valid);
    }

    //push each correct score to the localStorage
    saveScore(btn){
        let score = this.saveScoreLS()
        score.push(btn)
        localStorage.setItem('score', JSON.stringify(score))
    }

    //save the score to localStorage
    saveScoreLS(){
        let score;
        let scoreLS = localStorage.getItem('score')
        if(scoreLS === null){
            score = []
        } else {
            score = JSON.parse(scoreLS)
        } return score;
    }
}

const UI = new answersUI()