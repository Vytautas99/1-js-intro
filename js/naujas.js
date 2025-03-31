console.log('Kintamųjų inicijavimas'
);

//Kintamųjų inicijavimas

const skaicius = 9;
const skaicius1 = 85;
const skaicius2 = 95;

console.log(skaicius);
console.log(skaicius1);
console.log(skaicius2);

console.log(skaicius + skaicius1 + skaicius2);

//const sum = skaicius + skaicius1 + skaicius2;
//console.log(sum);


const text = 'spinatai ';
const text1 = 'hiacintas ';
const text2 = 'zeberklas';

console.log(text);
console.log(text1);
console.log(text2);

console.log(text + text1 + text2);


const spalvos = ['geltona', 'melyna', 'zalia', 'juoda', 'oranzine'];
const vardai = ['Karolis', 'Ieva', 'Darius', 'Domantas', 'Greta'];
const darzoves = ['rabarbaras', 'burokelis', 'bulve', 'brokolis', 'baklazanas'];

console.log(spalvos);
console.log(vardai);
console.log(darzoves);

console.log('-----------------------------');

console.log('Veiksmai su kintamaisiais');

console.log('---------------------------------');

                    //Veiksmai su kintamaisiais                  


const tekstoSujungimas = (spalvos[4] + ', ' + spalvos[3] + ', ' + spalvos[2] + ', ' + spalvos[1] + ', ' + spalvos[0]);

console.log(tekstoSujungimas); 

const tekstoSujungimas1 = (vardai[4] + ', ' + vardai[3] + ', ' + vardai[2] + ', ' + vardai[1] + ', ' + vardai[0])

console.log(tekstoSujungimas1);


const tekstoSujungimas2 = (darzoves[4] + ', ' + darzoves[3] + ', ' + darzoves[2] + ', ' + darzoves[1] + ', ' + darzoves[0])


console.log(tekstoSujungimas2);

console.log('---------------------------------')

const numbers = [19, 20, 35, 89, 199];
const scores = [305, 905, 505, 697, 989];
const sleepschedule = [8, 8, 8, 8, 8];

console.log(numbers);
console.log(scores);
console.log(sleepschedule);

const kintamujuSuma = (numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4]);

console.log(kintamujuSuma);

const kintamujuSuma2 = (scores[0] - scores[1] + scores[2] - scores[3] + scores[4]);

console.log(kintamujuSuma2);

const kintamujuSuma3 = (sleepschedule[0] - sleepschedule[1] + sleepschedule[2] - sleepschedule[3] + sleepschedule[4]);

console.log(kintamujuSuma3);



//kintamujuSuma = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4])

//console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] );


console.log('---------------------------------');
console.log('Kintamųjų palyginimas');
console.log('---------------------------------');

                    //Kintamųjų palyginimas


const suma = 9;
const suma1 = 11;
                    
if (suma < suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (suma > suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (suma === suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (suma !== suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (suma >= suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}

if (suma <= suma1 ) {
    
    console.log('Pomidoras');
    
} else {
    console.log('Bandykite kita karta.');
    
}
console.log('----------------------------------');

const text4 = 'tekstas';
const b3 = text4.length;

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

console.log('----------------------------------')

const l1 = [2,5,9,5,7,4,6,2,9,9,8,9,9,9,9,8,9,8,9];

const l2 = [2,9,6,7,4,2,8,9,9,5,4,8,8,];

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

console.log('----------------------------------');


const mokinys = ['Egidijus',5,8,9,8,4,6]
const mokinys1 = ['Božena',9,6,5,8,5,9]
const mokinys2 = ['Rapolas',9,9,9,3,4,1]
const mokinys3 = ['Egle',5,5,9,4,7,6]
const mokinys4 = ['Viktoras',5,2,9,8,9,6]
const mokinys5 = ['Laura',5,3,9,8,7,5]

function MokinioVidurkis (mokinys) {
console.log('Mokinio vardas: ' + mokinys[0]);
let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4]
+ mokinys[5])/5; if (vidurkis>=3.5) {
    console.log(mokinys[0] + 'Islaike. jo vidurkis:' + vidurkis);

} else
{let vidurkisNaujas = ((vidurkis*5)+10)/6
    console.log(mokinys[0] + 'neislaike. jo dabartinis vidurkis:' + vidurkis);
    if (vidurkisNaujas>=3.5)
    { 
        console.log(mokinys[0] + 'islaikytu kursa jei gautu viena desimtuka');
        
    }

}

}
console.log(MokinioVidurkis(mokinys3));


console.log('----------------------');


console.clear()