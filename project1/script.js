const input = document.getElementById('input');
const  listoftasks = document.getElementById('listoftasks');

function addtask()
{
    if(input.value === '')
    {
        alert('enter a task to add')
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=input.value;
        listoftasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    savedata();
}
listoftasks.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata()
{
    localStorage.setItem("data",listoftasks.innerHTML);
}
function showdata()
{
    listoftasks.innerHTML=localStorage.getItem("data")
}
showdata();