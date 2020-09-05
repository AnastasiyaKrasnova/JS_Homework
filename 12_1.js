function parseJson(str){
  return str.alt.loc.city+'-'+str.alt.loc.countryname;
}
function makeRequest(city) {
    return fetch('https://geocode.xyz/'+city+'?json=1&auth=302068921052686327120x127570').then((response) => {
    return response.json();
  });
}
async function process(arrayOfPromises) {
    let responses = await Promise.all(arrayOfPromises);
    for(let r of responses) {
    console.log(parseJson(r));
  }
    return;
}
async function handler() {
    let arrayOfPromises = [
        makeRequest("Minsk"),
        makeRequest("Paris"),
    ];
    
    await process(arrayOfPromises);
    console.log(`processing is complete`);
}
handler();
