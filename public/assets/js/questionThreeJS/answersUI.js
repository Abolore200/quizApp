class answersUI{
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }
    nextPage(){
        window.location.href = 'questionFour.html'
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