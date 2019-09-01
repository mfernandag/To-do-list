let input
let newTask
let allTasks = [{
    task: '',
    isInitial: true,
}]

const createElement = (tag,addClass,content) => {
    let newElement = document.createElement(tag);
    newElement.classList.add(addClass);
    newElement.innerHTML = content;
    return newElement;
}

const setChilds = (father, childList) => {
    childList.forEach( (child) => {father.appendChild(child)})
};

var handleKeyPress = (event) => {
    if( event.code === 'Enter'){ 
      getTasks()
    }
}

const getTasks = () => {
    input = document.getElementById('input')
    newTask = input.value 
    if(newTask !== '' && newTask.length > 4 ){
        input.value = '';
        allTasks.unshift({task:newTask, isInitial:true})
    }
    printTasks()
}

const printTasks = () => {
    let pendingTasks = document.getElementById('pendingTask')
    pendingTasks.innerHTML = '';
    allTasks.forEach(tasks => {
        let pendingLi = createElement('li', 'pendingLi', tasks.task)
        setChilds(pendingTasks,[pendingLi])
        console.log(tasks)
    })     
}

