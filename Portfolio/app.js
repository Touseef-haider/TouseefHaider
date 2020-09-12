document.getElementById('btn').addEventListener('click',()=>{
    let NavbarMenu = document.querySelector('.NavbarMenu');
    let btn = document.getElementById('btn');
    if (NavbarMenu.style.display=='block') {
        $('.NavbarMenu').slideUp('slow');
        btn.innerHTML=`&#9776`;
    }else{
        $('.NavbarMenu').slideDown('slow');
        btn.innerHTML='X'
    }
});

window.onload=function(){
    let loading = document.querySelector('#loading');
    let Container = document.querySelector('.Container');
    loading.style.backgroundColor='cyan'
    setTimeout(() => {
        loading.style.display='none';
        Container.style.display='grid'
    }, 1000);
}
const  message_send = document.querySelector('#message-send');
message_send.addEventListener('click',()=>{
    let name = document.querySelector('#name').value;
    let subject = document.querySelector('#subject').value;
    let From = document.querySelector('#From').value;
    let body = document.querySelector('#text-area').value;
    Email.send({
        Username:"hellotest355@gmail.com",
        Password:'123mohammad',
        To:"hellotest355@gmail.com",
        From:From,
        Subject:subject,
        Body:body
    }).then(message=>alert('mail sent successfully'))
})


// I have to upload this project to the github;

function StopWatch(){
    let duration=0;
    let startTime,endTime,running;
    this.Start = function(){
        if (running) {
            throw new Error("StopWatch is already runing");
        } else {
            running=true;
            startTime = new Date()
        }
    }
    this.Stop = function(){
        if (!running) {
            throw new Error("StopWatch is already stop")
        } else {
            running = false
            endTime = new Date();
            const seconds = ((endTime.getTime()) - (startTime.getTime()))/1000;
            duration+=seconds;
        }
    }
    this.Reset = function(){
        duration = 0;
        startTime=null;
        endTime=null;
        running=false;
    }
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration;
        }
    })
}

let sw = new StopWatch();

let o = new Function("a,b",`
    this.add = function(){
        return a+b;
    }
`)

let obh = new o(23,1);
console.log(obh.add(3,4));