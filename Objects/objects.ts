interface Task {
    id: number,
    description: string,
    completed?: boolean
}

interface TaskExtended extends Task {
    dueDate: Date
}


function addNewProperty(task:Task, dueDate: Date) {
  // Add a new property called 'dueDate' to the task object.
    let newTask:TaskExtended = {...task, dueDate: dueDate}
}

function deleteTaskProperty(task:Task) {
    let newTask = task
    delete newTask.completed
    return newTask
}

function checkPropertyExistence(task:Task) {
  // Check if 'dueDate' exists in the task object.
    if ('dueDate' in task) {
        return true
    } else {
        return false
    }
}

function loopThroughTaskProperties(task:Task) {
  // Loop through all properties of the task object and print their keys and values.
    for(let property in task) {
        console.log("Property: " + property)
    }
}

function destructureTask(task:Task) {
    let {id, description, completed} = task
}

function cloneTask(task:Task) {
  // Create a deep copy of the task object.
    let deepCopy = JSON.parse(JSON.stringify(task))
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

function addMethodToTask(task:Task) {
  // Add a method to the task object that toggles the 'completed' status using 'this'.
    task.toggleCompleted = function() {
        this.completed = !this.completed
    }
}