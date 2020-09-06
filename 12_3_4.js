function parseJson(str){
  return str.alt.loc.countryname;
}
function cityPromise(){
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['London','Paris','Berlin','Praha','Rome']);
    },1000);
  });
  return promise1;
}
function makeRequest(city) {
    return fetch('https://geocode.xyz/'+city+'?json=1&auth=302068921052686327120x127570')
    .then((response) => {
    return response.json();
  },
    error=>{
      alert("Rejected: " + error); 
    }
    );
}
async function process(arrayOfPromises) {
   let responses = await Promise.all(arrayOfPromises);
   for(let i=0;i<responses.length;i++) {
    if(responses[i].longt!=0){
      console.log(parseJson(responses[i]));
    }
  }
 
    return;
}
async function handler() {
    let result = await cityPromise();
    let arrayOfPromises=reqArray(result);
    await process(arrayOfPromises);
}

function reqArray(arr){
  let req=Array();
  for(let i=0;i<arr.length;i++){
    req.push(makeRequest(arr[i]));
  }
  return req;
}
handler();