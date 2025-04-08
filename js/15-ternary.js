let zodis = '';

if (4 > 2) {
    zodis  = 'daugiau'
} else {
     zodis  = 'maziau'
}

console.log(zodis);


let skaicius = 0;

if (7 <= 5) {
    skaicius = 7
} else {
    skaicius = 5
}


console.log(skaicius);


// klausimas ? teigiama : neigiama
const word = 4 > 2 ? 'daugiau' : 'maziau';
console.log(word);


const number = 7 <= 5 ? 7:5
console.log(number);


const years = 22;
const isAdult = years >= 18 ? 'suauges' : 'nesuauges';
console.log(isAdult);


const value  = 7;
const type = typeof value === 'number' ? 'skaicius' : 'neskaicius';
console.log(type);

// visi skaiciai yra pozityvus isskyrus - nuli
// jei nera klausimo javascript interpretuoja skaiciu pozityvuma, visi pozityvus isskyrus 0

if (-5.5) {
    console.log('TAIP');
    
} else {
    console.log('NE');
    
}


// visi tekstai yra pozityvus isskyrus - tuscias
if ('') {
    console.log('TAIP');
    
} else {
    console.log('NE');
    
}

// visi object yra pozityvus
// visi array yra pozityvus
if ([]) {
    console.log('TAIP');
    
} else {
    console.log('NE');
    
}




// undefined yra negatyvus 
// null yra negatyvas

if (null) {
    console.log('TAIP');
    
} else {
    console.log('NE');
    
}


