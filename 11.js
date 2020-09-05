var delay = function(d) {
    return new Promise(function(r) {
        return setTimeout(r, d);
    });
};
 
let runPromisesInSeries=[
    function() {
        return delay(1000);
    },
    function() {
        return delay(2000);
    }
]; 

runPromisesInSeries.reduce(function(p, next) {
        return p.then(next);
    }, Promise.resolve());
