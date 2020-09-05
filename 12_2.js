function parseJson(str){
  return str.alt.loc.countryname;
}
function makeRequest(city) {
    return fetch('https://geocode.xyz/'+city+'?json=1&auth=302068921052686327120x127570').then((response) => {
    return response.json();
  });
}
async function process(arrayOfPromises) {
   Promise.race(arrayOfPromises).then((response) => {
    console.log(parseJson(response));
  });
    return;
}
async function handler() {
    let arrayOfPromises = [
        makeRequest("Nice"),
        makeRequest("Paris"),
    ];
    
    await process(arrayOfPromises);
    console.log(`processing is complete`);
}
handler();