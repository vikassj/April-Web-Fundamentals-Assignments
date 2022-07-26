let form=document.getElementById('form');
let textinput=document.getElementById('textinput');
let dateinput=document.getElementById('dateinput');
let textarea=document.getElementById('textarea');
let msg=document.getElementById('msg');
let add=document.getElementById('add');
let tasks=document.getElementById('tasks')

let data=[]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let accept=()=>{
    data.push({
        text:textinput.value,
        date:dateinput.value,
        description:textarea.value
    })
    localStorage.setItem('tasks',JSON.stringify(data));
    showtasks();
    console.log(data);
}

let  formValidation =()=> {
    if(textinput.value === ''){
         msg.innerHTML='task cant be empty';
    }
    else{
        msg.innerHTML='';
        accept();
        add.setAttribute('data-bs-dismiss','modal')
        add.click();
        (()=>{
            add.setAttribute('data-bs-dismiss','')
        })();
    }
}

let showtasks=()=>{
    let task=JSON.parse(localStorage.getItem('tasks'))
    tasks.innerHTML='';
    task.map((item, index)=>{
        return (tasks.innerHTML +=`
        <div id="${index}">
                <span class="fw-bold"> ${item.text}</span>
                <span class="small text-secondary">${item.date}</span>
                <p>${item.description}</p>
                <span class="options">
                    <i class="bi bi-pencil-square" onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" ></i>
                    <i class="bi bi-calendar-x-fill" onclick="deleted(this)"></i>
                </span>
            </div>
            `)
    })
    resetform();
}

let resetform=()=>{
    textinput.value=''
    textarea.value=''
    dateinput.value=''
}

let deleted = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem('tasks',JSON.stringify(data));
};

let editTask=(e)=>{
    let selected=e.parentElement.parentElement;
    textinput.value=selected.children[0].innerHTML;
    textarea.value=selected.children[2].innerHTML;
    dateinput.value=selected.children[1].innerHTML;
    deleted(e);
}

(()=>{
    data.JSON.parse(localStorage.getItem('tasks'))  || [];
    showtasks();
})();