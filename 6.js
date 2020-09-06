function uncamelize(str, separator) {  
      if(typeof(separator) === "undefined") {  
        separator = " ";  
      }  
      str = str.replace(/[A-Z]/g, letter=>  
        separator + letter.toLowerCase()); 
      let re=new RegExp("/^"+separator+"/gi"); 
      str=str.replace(re, "");  
        return str;
    }  
    console.log(uncamelize('HelloWorld'));  
    console.log(uncamelize('HelloWorld','-'));  
    console.log(uncamelize('HelloWorld','_'));  
