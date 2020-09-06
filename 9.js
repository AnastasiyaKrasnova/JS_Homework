function clean(arr,callback) {
  setTimeout(()=>{
    arr=arr_delete(arr);
    if (arr.length>0){
      callback(arr);
  }
  else callback(new Error(`FFF`));
  },5000);
  
}
function arr_delete(arr){
    arr = arr.filter(x=> x !== undefined && x !== null);
    return arr;
}

clean([1,null,undefined,null],(err,arr)=>{
    if (err){
        console.log(err);
    }
    else console.log(arr)});