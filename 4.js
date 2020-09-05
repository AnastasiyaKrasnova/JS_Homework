function invertkey(obj) {
    var result = {};
    var keys = _keys(obj);
    console.log(keys);
    for (var i = 0, length = keys.length; i < length; i++) {
        console.log(obj[keys[i]]);
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
   
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(invertkey({ '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' } ));