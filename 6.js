function uncamelize(str, separator) {  
      if(typeof(separator) == "undefined") {  
        separator = " ";  
      }  
      var str = str.replace(/[A-Z]/g, function (letter)   
      {  
        return separator + letter.toLowerCase();  
      });  
        if(str[0]==separator){str.replace(str[0], "");  }
        return str;
    }  
    console.log(uncamelize('HelloWorld'));  
    console.log(uncamelize('HelloWorld','-'));  
    console.log(uncamelize('HelloWorld','_'));  