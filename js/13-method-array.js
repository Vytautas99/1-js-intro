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


console.clear()
console.log(text);

text.reverse()
console.log(text);
text.reverse()
console.log(text);


console.clear()

const c1 = [1,11];
const c2 = [2,22];
const c3 = [3,3];
const c4 = [4,44]; 


const c12 = c1.concat(c2)


console.log(c12);

const c34 = c3.concat(c4)
console.log(c34);


const c123 = c1.concat(c2).concat(c3)
console.log(c123);



const c1234 = c1.concat(c2,c3,c4);
console.log(c1234);

const c1111 = c1.concat(c1,c1,c1,c1,c1)
console.log(c1111);

console.clear()




const h = [11,22,33,44,55];
console.log(h);

h.splice(0,4)
console.log(h);


// MAP - 

const k = [10, 2, 8, 4, 6];
const k2 = [];

for (const n of k) {
    k2.push(n * 2);
}
console.log(k2);

function triple(n) {
    return n * 3;
}

const k3 = k.map(triple);
console.log(k3);

const quadro = n => n * 4;

const k4 = k.map(quadro);
console.log(k4);

const k5 = k.map(n => n * 5);
console.log(k5);

const k6 = k.map(n => n);
console.log(k6);

const k7 = k.map(n => n + 1);
console.log(k7);

const dict = ['pomidoras', 'agurkas', 'bulve', 'svogunas'];

const dict2 = dict.map(w => w[0]);
console.log(dict2);

const dict3 = dict.map(w => w.length);
console.log(dict3);

const people = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

const people100 = people.map(person =>
    `${person.name} liko ${100 - person.age} metai.`);
console.log(people100);

const peopleNames = people.map(person => person.name);
console.log(peopleNames);

const peopleAges = people.map(person => person.age);
console.log(peopleAges);

const peopleMarried = people.map(person => {
    person.isMarried = true;
    person.luckyNumber = 13;
    return person;
});
console.log(peopleMarried);

console.clear();

// FILTER
const p = [10, 2, 8, 4, 6];
const p5 = [];

for (const n of p) {
    if (n > 5) {
        p5.push(n);
    }
}

console.log(p5);

const p6 = p.filter(n => n > 6);
console.log(p6);

const p7 = p.filter(n => n <= 7);
console.log(p7);

const p8 = p.filter(n => n > 2 && n < 8);
console.log(p8);

const texts5 = ['labas', '', 'rytas', '', 'Lietuva'];
const texts5Updated = texts5.filter(t => t.length > 0);
console.log(texts5Updated);

const texts5Updated2 = texts5.filter(t => t);
console.log(texts5Updated2);