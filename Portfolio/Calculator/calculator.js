// input
let input = document.querySelector('#input');

input.addEventListener('keydown',(e)=>{
    let char = e.target.value;
    if (isNaN(char)===true) {
        if (char==="+") {
            console.log()
            input.value = e.target.value;
        } else {
            clear();
        }
    }
})
let output = document.querySelector('#output');
let numberArray=[];
document.getElementById('clear').addEventListener('click',()=>{
    clear();
});
document.getElementById('remove').addEventListener('click',()=>{
    removeInput();
}); 
document.getElementById('divide').addEventListener('click',()=>{
    output.value=Divide(eval(input.value))
});
document.getElementById('seven').addEventListener('click',()=>{
    input.value+='7'
});
document.getElementById('eight').addEventListener('click',()=>{
    input.value+='8'
});
document.getElementById('nine').addEventListener('click',()=>{
    input.value+='9'
});
document.getElementById('multiply').addEventListener('click',()=>{
    output.value=Multiply(eval(input.value))
});
document.getElementById('four').addEventListener('click',()=>{
    input.value+="4"
});
document.getElementById('five').addEventListener('click',()=>{
    input.value+="5"
});
document.getElementById('six').addEventListener('click',()=>{
    input.value+='6'
});
document.getElementById('minus').addEventListener('click',()=>{
    output.value=Minus(eval(input.value))
});
document.getElementById('one').addEventListener('click',()=>{
    input.value+='1'
});
document.getElementById('two').addEventListener('click',()=>{
    input.value+='2'
});
document.getElementById('three').addEventListener('click',()=>{
    input.value+='3'
});
document.getElementById('plus').addEventListener('click',()=>{
    output.value=add(input.value)
});
document.getElementById('zero').addEventListener('click',()=>{
    input.value+='0'
});
document.getElementById('period').addEventListener('click',()=>{
    input.value+='.'
});
document.getElementById('equal').addEventListener('click',()=>{
    output.value = eval(input.value)
});

function Minus(inp){
    input.value=inp+='-';
    return eval(inp+0);
}

function Multiply(inp){
    input.value=inp+='*';
    return eval(inp+1);
}

function Divide(inp){
    input.value=inp+='/';
    return eval(inp+1);
}

function add(inp){
    input.value=inp+='+';
    return eval(inp+0);
}

function removeInput(){
    let number = input.value.toString();
    numberArray = number.split('');
    numberArray.pop();
    input.value="";
    numberArray.forEach(element => {
        input.value+=element
    });
}

function clear(){
    input.value = "";
    output.value = "";
}