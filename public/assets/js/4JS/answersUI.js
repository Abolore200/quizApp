class answersUI{

    //disable all answer buttons when clicked
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }

    //navigate to the next page
    nextPage(){
        window.location.href = '5.html'
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