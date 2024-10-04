
function messenger(message:string) {
    return message
}

// Utility: Explore currying in JavaScript/TypeScript.
// Task: Implement a function that takes multiple arguments separately rather than all at once (currying).
function curryFunction(logLevel:string) {
    // Currying allows a function to be partially applied, returning a new function until all arguments are provided.
    return function(message) {
        console.log(`${logLevel}: ${message}`)
    }
}

let infoLogger = curryFunction("info")

// Utility: Explore partial application.
// Task: Create a function that partially applies arguments to another function.
function partialApplication(a:number, b:number) {
    let result:number = a * b
    return result
}

let double = partialApplication.bind(null, 2)

function partialApplication2(a: number, b: number, c: number) {
  let result: number = a * b * c;
  return result;
}

let quadruple = partialApplication2.bind(null, 2, 2);

console.log(quadruple(3))

// Utility: Explore memoization for optimization.
// Task: Write a function that remembers previous results to avoid recalculating them (memoization).
function memoizeFunction(fn) {
    // Explore memoization by storing previously computed results in a cache for faster lookups.
    let cache = {}
    return function(...args) {
        let key = args.toString()
        let value = cache[key]
        if(value) {
            return value;
        } else {
            let result = fn(...args)
            cache[key] = result
            return result
        }
    }
}

// Utility: Explore debouncing and throttling for performance optimization.
// Task: Create a debounce function that limits how often a function can be invoked.
function debounceFunction(fn, delay: number) {
    // Explore the debouncing technique, which delays the execution of a function until after a specified delay.
    let timeoutId:number;
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            let result = fn(...args)
            return result
        }, delay)
    }

}

// Utility: Explore throttling for controlling function execution frequency.
// Task: Create a throttle function that limits the frequency of function execution.
function throttleFunction(fn, interval: number) {
    // Explore throttling by ensuring that a function is only executed once within a given period.
    let lastCall = 0
    return function(...args) {
        const currentCall = new Date().getTime()

        if(currentCall - lastCall > interval) {
            lastCall = currentCall;
            fn.apply(this, args);
        } 
    }
}