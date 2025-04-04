// sukeisti a ir b reiksmes

let a1 = 5 , b1 = 3

console.log(a1, b1);

let k = 0

k = b1;

b1 = a1;

a1 = k;

console.log(a1, b1)

//padarykite, kad ekrane matytusi 555 a, b ir c turi islikti penketais.

let a = 5
let b = 5
let c = 5

console.log(a,b,c)

console.log('------------------------------------------------');



let sum2 = 10;
console.log(sum2);

sum2 += 1;
console.log(sum2);

const n1 = 7 ** 5;
console.log(n1);

let sum7 = 10;
console.log(sum7);

sum7 /= 2;
console.log(sum7);

console.log(Infinity + 1);
console.log(1)

const studentName = 'Maryte';
// maryte yra viena is keturiu legendine studente.
const amount = 4;

const student = studentName + ' yra viena is ' + amount + ' legendiniu studentu. ';

console.log(student);


const student2 =    `${studentName} yra viena is ${amount} legendiniu studentu.`;

console.log(student);







const backSlash2 = "\\\\";

console.log(backSlash2);

const pi = '3.14';
console.log(pi.length);

const text = ' audine ';
const firstSymbol = text[0];
console.log(firstSymbol);

console.log(text[6]);
console.log(text[5]);
console.log(text[4]);
console.log(text[3]);
console.log(text[2]);
console.log(text[1]);
console.log(text[0]);


const game = 'audine';
const gamesentence = `Zodyje "${game}" pirmoji raide yra "${game[6]}".`;

console.log(gamesentence);


const html = '<header>\n\r\
\t<img>\n\r\
\t<nav>\n\r\
\t\t<a></a>\n\r\
\t\t<a></a>\n\r\
\t\t<a></a>\n\r\
\t</nav>\n\r\
</header>';

console.log(html);

const html2 = '<header>\r\
\t<img>\r\
\t<nav>\r\
\t\t<a></a>\r\
\t\t<a></a>\r\
\t\t<a></a>\r\
\t</nav>\r\
</header>';

console.log(html2);

console.log('--------------------------');

// Javascript mini uzduotys:

// kintamuju iniciavimas

const ad1 = (5);
console.log(ad1);

const ad2 = (9);
console.log(ad2);

const ad3 = (10);
console.log(ad3); 



const af1 = ['sis tekstas']
console.log(af1);

const af2 = [' buvo sujungtas']
console.log(af2);

const af3 = [' su tarpeliais ']
console.log(af3);


const skaiciai1 = [1, 2, 3, 4, 5];
console.log(skaiciai1);

const skaiciai2 = [9, 5, 2, 9, 4];
console.log(skaiciai2);

const skaiciai3 = [4, 8, 5, 7, 3];
console.log(skaiciai3);

console.log('-------------------------------------');











console.log('-----------------------------------------');




// namu darbai - perdaryti analogiskai su -, * ir / operacijomis:

console.log('------------------------------------------');

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`
}


console.log(sum(2, 2 ));
console.log(sum(7, 5 ));
console.log(sum(-7, 15 ));

console.log('------------------------------------------');

function sum1(a, b) {
    const result = a - b;
    return `${a} - ${b} = ${result}`
}


console.log(sum1(2, 2 ));
console.log(sum1(7, 5 ));
console.log(sum1(-7, 15 ));



console.log('------------------------------------------');

function sum3(a, b) {
    const result = a * b;
    return `${a} * ${b} = ${result}`
}


console.log(sum3(2, 2 ));
console.log(sum3(7, 5 ));
console.log(sum3(-7, 15 ));

console.log('------------------------------------------');

function sum4(a, b) {
    const result = a / b;
    return `${a} / ${b} = ${result}`
}


console.log(sum4(2, 2 ));
console.log(sum4(7, 5 ));
console.log(sum4(-7, 15 ));


console.log('------------------------------------------');

// Kintamuju palyginimas:

if (9 < 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (9 > 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (9 === 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (9 !== 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (9 >= 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (9 <= 11 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}
console.log('------------------------------------');

const text2 = 'tekstas';
const b3 = text2.length;

console.log(b3);

const text3 = 'ilgesnistekstas';
const b2 = text3.length;

console.log(b2);


if (b3 < b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (b3 > b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (b3 === b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (b3 !== b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (b3 <= b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

if (b3 >= b2 ) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.log('----------------------------------------')

const l1 = [2,5,9,5,7,4,6,2,9,9,8,9,9,9,9,8,9,8,9];

const l2 = [2,9,6,7,4,2,8,9,9,5,4,8,8];

const length1 = l1.length;
const length2 = l2.length;

console.log(length1);
console.log(length2);




if (length1 < length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (length1 > length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (length1 === length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (length1 !== length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (length1 <= length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}


if (length1 >= length2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta.');
}

console.log('-------------------------------------');


// Veiksmai su kintamaisiais:

//const g = sum5(ad1 + ad2 +ad3)
//console.log(g);

//let sum5 = (ad1 + ad2 + ad3);
//console.log("" + ad1 + ad2 + ad3);

//let combine = [af1 +  af2 + af3]
//console.log(combine);

console.log('------------------------------');





























//5+9+10+1+2+3+4+5+9+5+2+9+4+4+8+5+7+3

//const ad1 = (5);
//console.log(ad1);

//const ad2 = (9);
//console.log(ad2);

//const ad3 = (10);
//console.log(ad3); 


//const af1 = ('teksto reiksme')
//console.log(af1);

//const af2 = ('teksto reiksme numeris du')
//console.log(af2);

//const af3 = ('teksto reiksme numeris trys')
//console.log(af3);


//const skaiciai1 = [1, 2, 3, 4, 5];
//console.log(skaiciai1);

//const skaiciai2 = [9, 5, 2, 9, 4];
//console.log(skaiciai2);

//const skaiciai3 = [4, 8, 5, 7, 3];
//console.log(skaiciai3);

console.log('------------------------------------');




let p = [4, 8, 7, 13, 12]
let sum10 = 0;

for (let i = 0; i < p.length; i++) {
    sum10 += p[i];
}
console.log(sum10) 

console.log('------------------------------------');




const person = {
    name: 'Vytautas',
    Age: 30
};

console.log(person);

person.name = 'Liutauras';
console.log(person.name)

console.log(person);



function daugyba(number) {
    return number * number;
}

console.log(daugyba(9));

