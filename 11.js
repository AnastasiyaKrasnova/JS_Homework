function f(number, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(number);
            resolve(number);
        }, x)
    });
}
const answer = [f(1, 1000), f(2, 3000), f(3, 2000)]
    .reduce((previousValue, currentValue) => previousValue.then(currentValue));