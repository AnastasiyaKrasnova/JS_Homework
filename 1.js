var n0=610;
var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    if (s[s.length-1]+s[s.length - 2]==n0){
        return s;
    }
    else{
        
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
    }
  }
};

 console.log(fibonacci_series(n0));