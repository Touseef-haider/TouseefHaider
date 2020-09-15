let min=1,
    max=10,
    Left=3;
window.onload=()=>{
    let guess = document.querySelector('#Guess');
    guess.focus();
}
let Win=Math.floor(Math.random()*(max-min+1)+min);
    let Minimum = document.querySelector('.Minimum');
    let Maximum = document.querySelector('.Maximum');
    Minimum.innerText = min;
    Maximum.innerText = max;
document.querySelector('#btn').addEventListener('click',()=>{
    let showLoading = document.querySelector('.showLoading');
    let guess = document.querySelector('#Guess');
    let message = document.querySelector('.msg');
    showLoading.style.display = "block";
    if (!guess.value) {
        alert("please enter the number")
        guess.focus();
        showLoading.style.display='none';
    }
    else if(guess.value == Win) {
        Won(showLoading,message,guess);
    }
    else{
        if (Left==1) {
            Lost(showLoading,message,guess);   
        }else{
            if (guess.value>10) {
                alert("Please Enter the number between 1 and 10");
                guess.focus();
                guess.value = ''
                showLoading.style.display='none';
        }else{
                Load(showLoading,message,guess);
            }
        }
    }
    
})
function Won(showLoading,message,guess) {
    let shl = showLoading;
    setTimeout(() => {
        shl.style.display = 'none'
        message.style.display = 'block';
        message.textContent = `${Win} is a number,You won!`;
        message.style.color = 'green';
        guess.style.borderColor='green';
        guess.value=''
        playAgain();
    }, 1000);
}
function Lost(showLoading,message,guess) {
    let sh = showLoading;
    setTimeout(() => {
        sh.style.display='none';
        message.style.display="block"
        message.textContent = `You Lost ${Win} was that number`;
        message.style.color = 'red';
        guess.style.borderColor = 'red';
        guess.value=''
        playAgain();
        setTimeout(() => {
            message.textContent = ""
        }, 2500);
    }, 1000);
}
function Load(showLoading,message,guess) {
    let s = showLoading;
    setTimeout(() => {
        let g = guess.value;
        s.style.display='none';
        message.style.display="block"
        guess.style.borderColor='red';
        guess.value = '';
        guess.focus();
        message.textContent = `No ${g} is not that number.You have ${Left=Left-1} turns left`;
        message.style.color = 'red';
        setTimeout(() => {
            message.textContent = ""
        }, 2500);
    }, 1000);    
}
function playAgain(){
    let message =document.querySelector('.msg');
    let Mess =document.querySelector('.Message');
    let button = document.createElement('button');
    button.setAttribute('class','play-again');
    button.appendChild(document.createTextNode('Play Again'));
    button.addEventListener('click',Refresh);
    Mess.insertBefore(button,message); 
    document.getElementById('btn').style.display="none";
}

function Refresh(){
    location.reload();
}   
