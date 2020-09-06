function invert_key(obj) {
    let result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[value]=key;
    }
    return result;
  }
console.log(invert_key({ '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' } ));
