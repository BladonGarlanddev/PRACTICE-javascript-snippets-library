import axios from "axios";

interface advice {
  id: number,
  advice: string,
  good: boolean | undefined
}

let currentId:number = 0
let adviceList:advice[] = []

const api_endpoint:string = "https://api.adviceslip.com/advice"; 

function demonstrateAsyncronousBehavior() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => console.log(`Request data: ${JSON.stringify(response.data)}`));
    console.log("This line is after the request is made")
}

function addNewAdvice() {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => adviceList.push({id: currentId++, advice: response.data.slip.advcice, good: undefined}));
}

async function waitForAdvice() {
  try {
      let result = await axios.get("https://api.adviceslip.com/advice")
      return result.data.slip.advice
  } catch (error) {
    console.error("Error fetching advice:", error)
  }
}

// Convert this function to use async/await to fetch a task by its ID
function getABunchOfAdvice() {
  const results = await Promise.allSettled([
    axios.get("https://api.adviceslip.com/advice"),
    axios.get("https://api.adviceslip.com/advice"),
    axios.get("https://api.adviceslip.com/advice"),
  ]);

  results.forEach(result => {
    if(result.status === 'fulfilled') {
      console.log('Fulfilled: ', result.value.data)
    } else {
      console.error('Rejected: ', result.reason)
    }
  })
}



demonstrateAsyncronousBehavior()