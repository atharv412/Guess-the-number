let RandomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const Userinput=document.querySelector('#guess_field')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastresult')
const lowOrHi=document.querySelector('.lowORhi')
const restart=document.querySelector('.resultParse')

const p=document.createElement('p')

let prevGuess=[]
let NumGuess=1
let playgame=true
if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(Userinput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    }
    else if(guess<1){
        alert('Please enter number more than 1')
    }
    else if(guess>100){
        alert('Please enter number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(NumGuess==10){
            CleanupGuess(guess)
            displayMsg(`Game over ,THE NUMBER WAS ${RandomNumber}`)
            Endgame()
        }
        else{
            CleanupGuess(guess)
            chkguess(guess)
        }
    }
}
function chkguess(guess){
    if (guess===RandomNumber) {
        displayMsg('the Guess was right')
        Endgame()
    }
    else if(guess<RandomNumber){
        displayMsg('NUmber is low')
    }
    else if(guess>RandomNumber){
        displayMsg("Number is high")
    }
}
function CleanupGuess(guess) {
    Userinput.value=''
    guessSlot.innerHTML+=`${guess},    `
    NumGuess++
    remaining.innerHTML=`${11-NumGuess}`
}
function displayMsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function Endgame(){
    Userinput.value=''
    Userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<span id="newgame">Start New Game</span>'
    restart.appendChild(p)
    playgame=false
    NewGame()
}
function NewGame() {
     const newButton=document.querySelector('#newgame')
     newButton.addEventListener('click',(e)=>{
     RandomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        NumGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-NumGuess}`
        Userinput.removeAttribute('disabled')
        restart.removeChild(p)
        lowOrHi.innerHTML=''
        playgame=true
     })
}