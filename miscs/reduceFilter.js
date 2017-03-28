function uniteUnique2(arr){

  var args = Array.prototype.slice.call(arguments);

  var ans = args.reduce(function(prev, current){
    
     // before we concat, run the current value through a filter to remove duplicates from the previous array
     return prev.concat(current.filter(function(i){
          return (prev.indexOf(i) == -1);
     }));
    
  });
  
  return ans;
  
}


uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1, 3]); // [1, 3, 2, 5, 4]
