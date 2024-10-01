import axios from "axios";
const api_endpoint = "https://api.adviceslip.com/advice";
function demonstrateAsyncronousBehavior() {
    axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => console.log(`Request data: ${JSON.stringify(response.data)}`));
    console.log("This line is after the request is made");
}
function getNewTask() {
}
// Create a function that returns a Promise to retrieve a task by its ID after 2 seconds
function retrieveTaskById(taskId) {
    // Your code here
}
// Convert this function to use async/await to fetch a task by its ID
async function fetchTaskById(taskId) {
    // Your code here
}
// Update a task's completed status and implement error handling
async function updateTaskStatus(taskId, completed) {
    // Your code here
}
// Fetch multiple tasks by their IDs concurrently
async function fetchMultipleTasksByIds(taskIds) {
    // Your code here
}
// Set a reminder for a task using a timer that resolves after a delay
function setTaskReminder(taskId, delay) {
    // Your code here
}
demonstrateAsyncronousBehavior();
