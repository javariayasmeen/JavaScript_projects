//Array1
let array1=["Ali","Amna",true,false,804,39]
console.log("Original Array:",array1);
// Boolean insertion at the end 
array1.push(true);
array1.push(false);
// Strings Insertion at the begining
array1.unshift("Wahaj");
array1.unshift("Saba");
console.log("Array After String&Boolean Insertion:",array1);
//Array2
let array2=["Wahaj","Mustaqeem","Sania","Rabail",true,false,10,20,30,40,50]
console.log("Original Array:",array2);
//Removal of elements from the end
array2.pop();
array2.pop();
//Removal of elements from the Start
array2.shift();
array2.shift();
console.log("Array After Elements' Removal:",array2);
//Elements at specific index
console.log("Element at Index 2:", array2[2]);
console.log("Elements at Index 4:", array2[4]);









