function DivisionStringified(num1,num2) { 

  var total = Math.round(num1/num2)
  var arr = total.toString().split("");
  
  
  var number = arr.length%3;
  
   
  for (var i = 3; i > number; i--){
  arr.unshift("X");
     
     }
  
   newArray = [];
  
   for (var j = 0, count = 1; j < arr.length; j++, count++){
     
      newArray.push(arr[j]);
