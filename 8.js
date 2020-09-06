function flatten(arr) {
  let flat=arr.reduce((flat, toFlatten)=>{
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
  flat.sort((a, b) => a - b);
  return flat;
}

console.log(flatten([[1, 2], 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]]));