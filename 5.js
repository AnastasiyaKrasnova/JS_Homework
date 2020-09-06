function key_value(obj) 
   {
    let pairs=[];
    for (const [key, value] of Object.entries(obj)) {
    pairs.push([key,value]);
    }
    return pairs;
  }
console.log(key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));