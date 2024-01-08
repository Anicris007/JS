var name = "Anirudh";
var age = 27;
var hasHobbies = true;

function summariseUser(uName,uAge,uHobbies)
{
    return 'User name is = ' +uName+' is '+uAge+' old & has hobbies = '+hasHobbies+'.';
}

console.log(summariseUser(name,age,hasHobbies));

function fibonacci(n) {
    if (n <= 1) {
        return n;  
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const resultMemo = fibonacci(10);
console.log(result); // Output: 55

function fibonacciMemo(n, memo = {}) {
    if (n <= 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }
 
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Example usage:
const result = fibonacciMemo(10);
console.log(result); // Output: 55