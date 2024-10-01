interface task {
    id: number,
    description: string,
    completed: boolean
}

interface taskExtended extends task {
    dueDate: Date
}

let todoList:task[] = []
let currentId:number = 0

function createTaskObject(id:number, description:string, completed:boolean) {
    todoList.push({id: currentId++, description: description, completed: completed})
}

function accessTaskProperties(task:task) {
    console.log(`Descripton: ${task.description}`)
    console.log(`Completed: ${task.completed}`);
}

function addNewProperty(task:task, dueDate:Date) {
    let taskWithNewProperty:taskExtended = {...task, dueDate: dueDate}
    return taskWithNewProperty
}

function deleteTaskProperty(task:task, property: keyof task) {
    delete task[property]
    return task
}

function checkPropertyExistence(task:task, property: keyof task):boolean {
    return property in task
}

function loopThroughTaskProperties(task) {
    for (let property in task) { 
        console.log(`Property: ${property}`)
    }
}

function destructureTask(task:task) {
  let { id, description, completed} = task
}

function cloneTask(task:task) {
  // Create a deep copy of the task object.
  let deepCopy:task = JSON.parse(JSON.stringify(task))
  return deepCopy
}

function mergeTaskObjects(task1, task2) {
  // Merge task1 and task2 into a single object.
}

function convertTaskToJson(task) {
  // Convert the task object to a JSON string and then parse it back to an object.
}

function getObjectKeysValuesEntries(task) {
  // Use Object.keys(), Object.values(), and Object.entries() on the task object.
}

function addMethodToTask(task:task) {
  // Add a method to the task object that toggles the 'completed' status using 'this'.
    let newTask = cloneTask(task) as any
    newTask.toggleCompleted = function() {
        this.completed = !this.completed
    }
}