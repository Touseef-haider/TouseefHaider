    let Milliseconds=0;
    let Seconds=0;
    let Minutes=0;
    let Hours=0;
    let Days=0;  
    document.getElementById('Start').onclick=function(){    
    let myInterval = setInterval(() => {
    document.getElementById('Milliseconds').innerText = Milliseconds++
    if (Milliseconds==100) {
        Milliseconds=0;
        document.getElementById('Seconds').innerText = Seconds+=1;
        if (Seconds==59) {
        Seconds=0;
        document.getElementById('Minutes').innerText = Minutes+=1;
        if (Minutes==59) {
        Minutes=0;
        document.getElementById('Hours').innerText = Hours+=1;
        if (Hours==24) {
        Hours=0;
        document.getElementById('Days').innerText = Days+=1;   
                    }
                }
            }
        }        
        }, 10);
        
        document.getElementById('Stop').onclick=()=>{
            let start = document.querySelector('#Start');
            start.textContent="Restart"
            clearInterval(myInterval);
        }      
    }

    document.getElementById('Reset').onclick=function(){
        let start = document.querySelector('#Start');
        start.textContent = "Start"
        Seconds=0;
        Minutes=0;
        Hours=0;
        Days=0;
        document.getElementById('Milliseconds').innerText = 00;
        document.getElementById('Seconds').innerText = 00;
        document.getElementById('Minutes').innerText = 00;
        document.getElementById('Hours').innerText = 00;
        document.getElementById('Days').innerText = 00;
    }
