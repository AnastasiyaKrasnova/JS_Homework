function count(main_str, sub_str) 
    {

    if (sub_str.length <= 0) 
    {
        return 0;
    }
       return (main_str.match(new RegExp(sub_str, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox brjumps over the br lazy dog", 'br'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));