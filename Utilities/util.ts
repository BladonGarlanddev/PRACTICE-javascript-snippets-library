function createFunctionWrapper(fn) {
    return function() {
        let result = fn()
        return result
    }
}

// Utility: Explore currying in JavaScript/TypeScript.
// Task: Implement a function that takes multiple arguments separately rather than all at once (currying).
function curryFunction(logLevel:string) {
    return function(message) {
        console.log(`${logLevel}: ${message}`)
    }
}

const infoLogger = curryFunction('info')
infoLogger("I want to be pilot")

// Utility: Explore partial application.
// Task: Create a function that partially applies arguments to another function.
function partialApplication(a, b) {
    // This will explore how to create new functions with pre-set arguments using partial application.
    let result = a * b
    return result
}

const double = partialApplication.bind(null, 2)
console.log(double(5));

// Utility: Explore memoization for optimization.
// Task: Write a function that remembers previous results to avoid recalculating them (memoization).
function memoizeFunction(fn) {
    // Explore memoization by storing previously computed results in a cache for faster lookups.
    let cache = {}
    return function(...args) {
        let key = args.toString()
        if(cache[key]) {
            return cache[key]
        } else {
            let result = fn(...args)
            cache[key] = result;
            return result
        }
    }
}

const fib = memoizeFunction(function(n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2);
})

console.log(fib(1000))

// Utility: Explore debouncing and throttling for performance optimization.
// Task: Create a debounce function that limits how often a function can be invoked.
function debounceFunction(fn, delay) {
    // Explore the debouncing technique, which delays the execution of a function until after a specified delay.
    let timeoutId:number
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

// Utility: Explore throttling for controlling function execution frequency.
// Task: Create a throttle function that limits the frequency of function execution.
function throttleFunction(fn, interval) {
    // Explore throttling by ensuring that a function is only executed once within a given period.
    let lastCall = 0

    return function(...args) {
        const now = new Date().getTime();

        if(now - lastCall >= interval) {
            lastCall = now
            fn.apply(this, args)
        }
    }
}