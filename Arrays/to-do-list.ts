interface task {
    id: number,
    description: string,
    completed: boolean
}

let todo_list:  task[] = []
let currentId = 0

const updatedToDoList = [...todo_list, {id: 1, description: "blah blah blah", completed: false}]

const addTask = (description:string, completed:boolean = false) => {
    todo_list.push({id: currentId++, description, completed})
}

function markComplete(taskDescription:string) {
    const index:number = todo_list.findIndex(task => task.description === taskDescription)

    if(index !== -1) {
        todo_list[index].completed = true
        console.log(`Task completed: ${taskDescription}`)
    } else {
        console.log("task not found")
    }
}

function retrieveTaskById(id:number): task | undefined {
    return todo_list.find((task) => task.id === id);
}

function retrieveTaskIndex(id:number): number | undefined {
    return todo_list.findIndex(task => task.id === id)
}

function removeTaskByIndex(index:number) {
    if (index !== -1) {
        todo_list.splice(index, 1)
    }
}

function removeTaskById(taskId:number) {
    todo_list = todo_list.filter(task => task.id !== taskId)
}

function retrieveTaskDescriptions() {
    return todo_list.map(task => task.description)
}

function displayTasks() {
    todo_list.forEach(task => console.log(task.description))
}

function getNumberOfCompletedTasks() {
  return todo_list.reduce((count, task) => {
    return task.completed ? count + 1 : count;
  }, 0);
}

function completelyLazyOrJustALil() {
    return todo_list.some(task => task.completed === true)
}

function sortListAlphabetically() {
  todo_list.sort((a, b) => a.description.localeCompare(b.description));
}

function sortListById() {
    todo_list.sort((a, b) => a.id - b.id)
}

function sortListByIdReverse() {
  todo_list.sort((a, b) => b.id - a.id)
}

function printTaskListLength() {
    console.log(todo_list.length)
}

function checkIfTaskExists(task:task) {
    return todo_list.includes(task)
}

function reverseTaskList() {
    todo_list.reverse()
}

function flattenList() {
    todo_list.join(", ")
}

function fillTasks() {
    let chore = { id: 1, description: "Do dishes", completed: false};

    todo_list.fill(chore, 1, 3)
}