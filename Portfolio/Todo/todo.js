document.getElementById('del').onclick = function(){
    document.getElementById('List').remove();
    location.reload();
    return;
}
window.onload = function(){
    document.getElementById('input').focus();
}
document.getElementById('btn').onclick = function(){
    let value = document.getElementById('input').value;
    if (value==="") {
        alert("Please Enter the value");
        document.getElementById('input').focus();
        return;
    }
    let div = document.createElement('div');
    let span = document.createElement('span');
    let Contents = document.getElementById('List')
    let EditBtn = document.createElement('button');
    let RemoveBtn = document.createElement('button');
    EditBtn.innerText = 'Edit';
    RemoveBtn.innerText = "Remove"; 
    div.setAttribute('id',value)
    div.setAttribute('class','Division');
    EditBtn.setAttribute('id','button');
    RemoveBtn.setAttribute('id','button');
    span.innerText=value;
    document.getElementById('input').value='';
    document.getElementById('input').focus();
    let ListDiv = document.createElement('div');
    ListDiv.setAttribute('id','List');
    div.append(ListDiv);
    div.append(span);
    div.append(EditBtn);
    div.append(RemoveBtn);
    Contents.append(div);
    RemoveBtn.addEventListener('click',function(){
        let removedItem = document.getElementById(value);
        removedItem.remove();
    });
    EditBtn.addEventListener('click',function(){
        let textToEdit = span.innerText;
        let a = prompt('Edit',textToEdit);
        span.innerText = a;
    })            
}