// getting unordered list
let ul = document.querySelector('ul');
// getting tasks from local Storage
document.addEventListener("DOMContentLoaded",()=>{
  let tasks;
  if (localStorage.getItem('tasks')===null) {
    tasks=[];
   }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
   }
   tasks.forEach((task)=>{
       // creating list item
        let li = document.createElement('li');
        // adding class to the list item
        li.className="li";
        // creating text node in list item
        li.appendChild(document.createTextNode(task));
        // creating anchor tag
        let a = document.createElement('a');
        // adding class to the anchor tag
        a.className = "anchor";
        // setting href to #
        a.href="#";
        // setting Inner text of anchor
        a.innerText='X';
        // appending anchor tag to list item 
        li.appendChild(a);
        //appending list item to unordered list
        ul.appendChild(li)  
   })
    
})
// clearing whole tasks function
document.querySelector('#btn-clear').addEventListener('click',()=>{
    // selecting unordered list
    let ul = document.querySelector('ul').innerHTML='';
    // clearing list
    localStorage.clear();
})
// Adding task function
document.querySelector('#btn').addEventListener('click',()=>{
    let tasks;
    // Getting input as a task
    let input = document.querySelector('#input');
    // value of the input i.e actual task
    let task = input.value;
    // creating list item
    let li = document.createElement('li');
    // adding class to the list item
    li.className="li";
    // creating text node in list item
    li.appendChild(document.createTextNode(input.value));
    // creating anchor tag
    let a = document.createElement('a');
    // adding class to the anchor tag
    a.className = "anchor";
    // setting href to #
    a.href="#";
    // setting Inner text of anchor
    a.innerText='X';
    // appending anchor tag to list item 
    li.appendChild(a);
    // appending list item to unordered list
    ul.appendChild(li);          
    // setting input value to nothing
    input.value = '';
    // settin focus to input
    input.focus();
    // getting local storage
    if (localStorage.getItem('tasks')===null) {
        tasks=[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    // pushing task to the local storage
    tasks.push(task)
    // setting input to local storage
    localStorage.setItem('tasks',JSON.stringify(tasks))
})
// removing single item from unordered list (function)
document.querySelector('ul').addEventListener('click',(e)=>{
    // removing single desired item
    e.target.parentElement.remove();
    let tasks;
    if (localStorage.getItem('tasks')===null) {
    tasks=[];
    }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task,index)=>{
        if (e.target.parentElement.firstChild.textContent===task) {
            tasks.splice(index,1)
        }
    })
    
    localStorage.setItem('tasks',JSON.stringify(tasks))
})
// filtering input function
document.querySelector('#filter').addEventListener('keyup',(e)=>{
    // value to be searched in the list
    let text =e.target.value;
    // getting every list item
    let ul = document.querySelectorAll('ul li');
    // fore each item in the list checking searched value
    ul.forEach(function(item){
       //first chile of the list item i.e the text node 
       let itemValue= item.firstChild.textContent;
       if (itemValue.indexOf(text)!=-1) {
           // Displaying if matched
            item.style.display='block'
       }else{
           // not displaying if not matched
            item.style.display='none'
       }
    })
})