/*
funkcija , kuri gavusi zodi, is jo padaro korektiska varda. Vardo taisymo funkcija.
*/


function validName(name) {
    const firstLetter = name[0].toUpperCase();
    const restLetters = name.slice(1).toLowerCase();
    
    return firstLetter + restLetters;
}

console.log(validName('jonas'), '----->', 'Jonas');
console.log(validName('marYTE'), '----->', 'Maryte');
console.log(validName('PeTrAs'), '----->', 'Petras');
console.log(validName('ONA'), '----->', 'Ona');
