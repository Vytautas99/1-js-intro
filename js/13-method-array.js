/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


const list = [];
console.log(list);



list.push(10);
console.log(list);

list.push(2);
console.log(list);

list.push(8);
console.log(list);

list.push(4,8,9,8,9,8,9,9,9,5,95,95,9,5,9,59,5,98);
console.log(list);


const numbers = [10,2,8,4,6];
const doubleNumbers = [];
for (i=0; i <numbers.length; i++) {
    const number = numbers[i]
    console.log(number);
    doubleNumbers.push(number *2 )
}

console.log(doubleNumbers);




const names = ['Jonas', 'Maryte','Ona','Petras'];
const nameSizes = [];
const nameFirstLetters = [];
const upperCaseNames = [];
for (i =0; i < names.length; i++) {
    const name = names[i]
    console.log(name, name.length);
    nameSizes.push(name.length)
    nameFirstLetters.push(name[0])
    upperCaseNames.push(name.toLocaleUpperCase())
}

console.log(nameSizes);
console.log(nameFirstLetters);
console.log(upperCaseNames);    




const n1 = [1,11,111];
const n2 = [2,22,222,2222];
const n12 = []; // n1 + n2

//const  n13 = n12.push(n1)

//console.log(n13);

for (let i = 0; i < n1.length; i++) {
    n12.push(n1[i]);
    
}

for (let i = 0; i < n2.length; i++) {
    n12.push(n2[i]);
    
}

console.log(n12);




console.log('-----------------');

