let countries = [
    "Turkey",
    "Finland",
    "Germany",
    "Canada",
    "Netherland",
    "Romania",
    "Australia",
    "Nepal",
    "Scotland",
    "Lithuana",
];
let one = document.getElementById("one");
let two = document.getElementById("two");
let unOrderedList="";
let orderedList = "";
for (let i=0; i < countries.length; i++) {
   unOrderedList = unOrderedList + "<li>" + countries[i] + "</li>";
   orderedList = orderedList + "<li>" + countries[i] + "</li>";
   console.log(unOrderedList); 
   console.log(orderedList);
} 
one.innerHTML = unOrderedList;
two.innerHTML = orderedList;
