let arr= [10,20,30,50];
console.log(arr);
arr.push(40); // adding the value to the array
console.log(arr);
arr.pop();    // to remove the last element of array
console.log(arr);
arr.shift();  // to remove first element of array
console.log(arr); 
let index =2;
arr.splice(index,1); // to remove particular index value
console.log(arr);
let index2=arr.indexOf(30);// finding the index value .in this way also we can remove particulr value.
console.log(index2);
arr.splice(index2,1);
console.log(arr);
arr.push(3.97);
console.log(arr);
arr.push(false);
console.log(arr);