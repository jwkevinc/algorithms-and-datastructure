function rand5(){
	var random = Math.floor((Math.random() * 5) + 1)
	return random;
}

function rand7(){
	var sum = 0;
  for (var i = 0; i < 7; i++)
  	sum += rand5() - 1;
 	return sum % 7 + 1;
}

function rand_times(n){
	var arr = [0,0,0,0,0,0,0,0]
  for (var i = 0; i < n; i++){
  	arr[rand7()] += 1;
  }
  return arr;
}
