function empty() {
    // logika
}








 const a = empty();
 const b = empty();
 console.log(a);
 console.log(b);





 

function penki () {
    return 5;
}

const c = penki();
console.log(c);




console.log('-------------------------------------');




function hi () {
    return 'labas!';
}


const d = hi();
console.log(d);


console.log('---------------------------------');


function pavadinimas() {
    // logika
}
function pavadinimas() {
    // logika
}

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name)  {
      return `Labas, ${name}!`;
}
   

console.log(hiPerson('Jonas'));


// 2+2 = 4 
// 7+5 = 12

function sum (num1, num2,)
 {
    return num1 + num2;
 }

 const e = sum(2, 2);
 console.log(e);

 const f = sum(7, 5);
 console.log(f);
 
 const g = sum(-7, 15);
 console.log(g);
 
 console.log('---------------------------------');

 // 100 -> 121 Eur
 // 200 -> 242 Eur
 // 73 -> 88.33 Eur

 function priceWithVAT (price) {
    const udpatedPrice = price * 1.21;
    
    return udpatedPrice  + ' Eur';
 }

 
 const p1 = priceWithVAT(100);
 console.log(p1);

 const p2 = priceWithVAT(200);
 console.log(p2);

 const p3 = priceWithVAT(73);
 console.log(p3);
 
 console.log('----------------------------------');
 
 // Jonas -> Zodis "Jonas" yra sudarytas is 5 raidziu.
 // Maryte -> Zodis "Maryte" yra sudarytas is 6 raidziu.
 // Petras -> Zodis "Petras" yra sudarytas is 6 raidziu.
 // Ona -> Zodis "Ona" yra sudarytas is 3 raidziu.

 function nameLength(name) {
    const size = name.length;
    return `Zodis "${name}" yra sudarytas is ${size} raidziu`;

 }

const nl1 = nameLength('Jonas');
const nl2 = nameLength('Maryte');
const nl3 = nameLength('Petras');
const nl4 = nameLength('Ona');


console.log(nl1);   
console.log(nl2);
console.log(nl3);
console.log(nl4);

console.log('----------------------------');
// -5 -> Gautas skaicius 5
// -13 -> Gautas skaicius -13.
// 777 -> Gautas skaicius 777.

function gotNumber (n) {
    //return 'gautas skaicius: ' + n + '.';
    return `Gautas skaicius ${n}.`;
}     

const gn1 = gotNumber(5)
const gn2 = gotNumber(-13)
const gn3 = gotNumber(777)

console.log(gn1);
console.log(gn2);
console.log(gn3);

console.log('-----------------------------------------');

// 2, 2 -> 2 + 2  = 4 
// 7. 5 -> 7+ 5  = 12
// -7, 15 -> -7 +15 = 8 

function sum(a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`
}
 

console.log(sum(2, 2 ));
console.log(sum(7, 5 ));
console.log(sum(-7, 15 ));

// namu darbai - perdaryti analogiskai su -, * ir / operacijomis

