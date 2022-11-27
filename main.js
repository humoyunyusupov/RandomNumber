var elForm = document.querySelector(".form-js");
var elInput = document.querySelector(".input-js");
var elOutput = document.querySelector(".output-js");


var randomNumber = Number(Math.ceil(Math.random() *  100)); 


elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    var elInputValue = Number(elInput.value.trim());
    
    if(randomNumber == elInputValue){
        elOutput.textContent = "Topdingiz"
    } else if (randomNumber <= elInputValue){
        elOutput.textContent = "Kichikroq son kiriting"
    } else if (randomNumber >= elInputValue){
        elOutput.textContent = "Kattaroq son kiriting"
    } else if (randomNumber - elInputValue == 1){
        elOutput.textContent = "Juda yaqin keldingiz"
        
    }



})

