class answersUI{
    disableInvalid(disableButton){
        disableButton.forEach(button => {
            button.disabled = true
        })
    }
    nextPage(){
        window.location.href = 'questionThree.html'
    }
}
