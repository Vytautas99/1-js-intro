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


console.clear()
const numbers2 = [10,2,8,4,6]


numbers2.push(9)
console.log(numbers2);

const g1 = numbers2.pop();
const g2 = numbers2.pop();

console.log(numbers2,g1,g2);


numbers2.unshift(1)
numbers2.unshift(2)
numbers2.unshift(3)
console.log(numbers2);


numbers2.shift(3)
console.log(numbers2);




const magic = [11,22,33,44,55]
console.log(magic.includes(5));
console.log(magic.includes(55));

console.log(magic.indexOf(5));
console.log(magic.indexOf(55));

const text = ['zodis','zodis1','zodis2','zodis3']

// reikalingi produktai: a,b,c,d.
const products  = `reikalingi produktai: ${text.join(', ')}`
console.log(products);
