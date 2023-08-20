const input=document.querySelector('#input')
const btn=document.querySelector('#btn')
const result=document.querySelector('#result')
const btn_delete=document.querySelector('#btn_delete')
const noTasks = document.getElementById('no-tasks')
//const li=document.querySelector('.li')

const tasks = [];
if(localStorage.getItem('tasks')){
    result.innerHTML = localStorage.getItem('tasks');
}

btn.addEventListener('click', ()=>{
    if(input.value.trim() === '') return
    createDeleteElements(input.value);
    tasks.push(input.value); 
    input.value=' ';
    console.log(tasks);
})

function createDeleteElements(value){
    const btn=document.createElement('button')
    const li=document.createElement('li')
    li.className='li'
    li.textContent=value

    btn.className='btn'
    btn.textContent='delete'
    li.appendChild(btn)

    btn.addEventListener('click', ()=>{
    result.removeChild(li)
    })

    li.addEventListener('click', ()=>{
        li.classList.toggle('li-active')
        })

    result.appendChild(li)
    localStorage.setItem('tasks', li.textContent);
    }

btn_delete.addEventListener('click', ()=>{
    result.innerHTML = "";
    localStorage.removeItem('tasks');
    noTasks.innerHTML='Список задач отсутствует';
})
