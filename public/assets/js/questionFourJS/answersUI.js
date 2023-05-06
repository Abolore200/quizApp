const loader = document.querySelector('.displayLoader')
const result = document.querySelector('.displayResult')

class answersUI{
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }
    getAnswer(){
        const totalScore = localStorage.getItem('score')
        let scoreJSON;
        scoreJSON = JSON.parse(totalScore)
        
        let scoreLength = scoreJSON.length
        this.getScoreLength(scoreJSON,scoreLength)

    }
    getScoreLength(scoreJSON, scoreLength){
        let sum = 0;
        for(let i = 0; i < scoreLength; i++){
            sum += scoreJSON[i]
        } return this.displayAnswer(sum)
    }
    displayAnswer(sum){
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
    getScore(){
        const valid = 100
        this.saveScore(valid);
    }
    saveScore(btn){
        let score = this.saveScoreLS()
        score.push(btn)
        localStorage.setItem('score', JSON.stringify(score))
    }
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