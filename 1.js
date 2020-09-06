const n0=610;
const fibonacci_series = function (n) 
{
  let arr=[0,1];
  let i=0;
  while(arr[i]+arr[i+1]<n0){
    arr.push(arr[i]+arr[i+1]);
    i++;
  }
  return arr;
};
 console.log(fibonacci_series(n0));