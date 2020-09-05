function pr(){
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result");
  }, 6000);
});
return promise;
}

let myProm=pr();
myProm
  .then(
    result => {
      console.log("Resolved: " + result);
    },
    error => {
      console.log("Rejected: " + error);
    }
  );