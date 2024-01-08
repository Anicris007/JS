const person = {
    name : 'Anirudh',
    age : 27,
    greet(){
        console.log('Hello this is ' + this.name);
    }
}

person.greet();

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

const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
