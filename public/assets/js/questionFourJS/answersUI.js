class answersUI{
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }
    displayAnswer(){
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
        }
        console.log(sum);
        // return sum
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