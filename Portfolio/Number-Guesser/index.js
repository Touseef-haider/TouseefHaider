let min=1,
    max=10,
    Left=3;
let Win=Math.floor(Math.random()*(max-min+1)+min);

    let Minimum = document.querySelector('.Minimum');
    let Maximum = document.querySelector('.Maximum');
    Minimum.innerText = min;
    Maximum.innerText =max;
document.querySelector('#btn').addEventListener('click',()=>{
    let guess = document.querySelector('#Guess');
    let message =document.querySelector('.msg');
    if (!guess.value) {
        alert("please enter the number")
    }
    else if(guess.value == Win) {
        message.textContent = `${Win} is a number,You won!`;
        message.style.color = 'green';
        guess.style.borderColor='green';
        playAgain();
    }
    else{
        if (Left==1) {
            message.textContent = `You Lost ${Win} was that number`;
            message.style.color = 'red';
            guess.style.borderColor='red';   
            playAgain()        
        }else{
            message.textContent = `No ${guess.value} is not that number,You have ${Left=Left-1} turns left`;
            message.style.color = 'red';
            guess.style.borderColor='red';
            guess.value = ''
            guess.focus();
        }
    }
})
function playAgain(){
    let message =document.querySelector('.msg');
    let Mess =document.querySelector('.Message');
    let button = document.createElement('button');
    button.setAttribute('class','play-again');
    button.appendChild(document.createTextNode('Play Again'));
    button.addEventListener('click',Refresh);
    Mess.insertBefore(button,message); 
}

function Refresh(){
    location.reload()
}