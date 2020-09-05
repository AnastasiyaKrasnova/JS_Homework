function clean(arr,callback) {
  arr=arr_delete(arr);
  setTimeout(function no(){}, 5000);
  if (arr.length>0){
      callback(arr);
  }
  else callback(new Error(`FFF`));
}
function arr_delete(arr){
    arr = arr.filter(function(x) {
    return x !== undefined && x !== null; 
    });
    return arr;
}

clean([null,undefined,null],function(err,arr){
    if (err){
        console.log(err);
    }
    else console.log(arr)});