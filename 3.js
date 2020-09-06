function caseInsensitiveSearch(str, search_str)
  {
    const result= str.search(new RegExp(search_str, "i"));
    if (result>0)
    return 'Matched';
    else
    return 'Not Matched';  
   }
console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercisess'));
