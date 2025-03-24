/*
BOOLEAN - logine reiksme 
-true
-false 

LOGINiai OPERATORIAI:
&& - and ( ir ) (prioritetas, kaip daugybos)
|| = or (arba)

*/
const isEven = true 
const isOdd = false
console.log('&&--------------------------------------');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||---------------------------------');


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// jei bent vienas operatorius && yra false visi yra false, jei vienas operatorius || yra true visi yra true.

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('||---------------------------------');


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('ar mergina eis i pasimatyma?');

const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('ar vaikinas eis i pasimatyma?');

const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);

// skaiciuoja is eiles???
console.log(1,true && true || true);
console.log(2,true && true || false);
console.log(3,true && false || true);
console.log(4,true && false || false);
console.log(5,false && true || true);
console.log(6,false && true || false);
console.log(7,false && false || true);
console.log(8,false && false || false);

console.log('--------------------------------------');


// skaiciuoja is eiles???
console.log(1,true || true && true);
console.log(2,true || true && false);
console.log(3,true || false && true);
console.log(4,true || false && false);
console.log(5,false || true && true);
console.log(6,false || true && false);
console.log(7,false || false && true);
console.log(8,false || false && false);




// namu darbas 2: surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamas 4 boolean reiksmes.
// nd 2: kiek gavosi kombinaciju?

console.log(false && true && true && true );
console.log(true && false && true && true );
console.log(true && true && false && true );
console.log(true && true && true && false );
console.log(false && true && false && false );
console.log(true && false && false && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );
console.log(true && true && true && true );

console.log('-------------------------------------');

