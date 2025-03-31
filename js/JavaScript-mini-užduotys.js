
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


console.log('-----------------');

// Ciklo for panaudojimas


// 1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30

function sum(start,end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        
    } return sum;
} 
    




console.log(sum(0,0));
console.log(sum(0,4));
console.log(sum(0,100));
console.log(sum(574,815));
console.log(sum(-70,30));







console.log('-----------------');

// 2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a. pvz.: “abcdef” -> “fedcba”

function textReverse (text) {
    let sum2 = '';
    for (let i = 0; i < text.length; i++) {
      sum2 = text[i] + sum2;
        
    } return sum2;
}



console.log(textReverse('tekstas '));


console.log('-----------------');

// 3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// a. 0 - 11
// b. 8 - 31
// c. -18 - 18
// d. rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

function division(start,end,daliklis) {
    let sum = 0;
    for (let i = start; i <= end; i++) 
        if (i % daliklis === 0) {
          sum++
          
            
       
       
} return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${daliklis} yra ${sum} vienetai`

}


console.log(division(0,11,3));
console.log(division(0,11,5));
console.log(division(0,11,7));


console.log(division(8,31,3));
console.log(division(8,31,5));
console.log(division(8,31,7));

console.log(division(-18,-18,3));
console.log(division(-18,-18,5));
console.log(division(-18,-18,7));





console.log('-----------------');


// Funkcijos

// 1. Funkcija pavadinimu “tusciaFunkcija”:

function tusciaFunkcija () {
    return false
}

console.log(tusciaFunkcija());

console.log('-----------------');

// 2. Funkcija pavadinimu “daugyba”:


function daugyba (skaicius1,skaicius2) {
    if (typeof skaicius1 !== 'number' || typeof skaicius2 !== 'number' ) {
        return 'Pirmas ir antras daugybos paramentras turi buti skaicius ';

    } if (isNaN(skaicius1) || isNaN(skaicius2) ) {
        return 'Pirmas ir antras daugybos paramentras turi buti skaicius ';

    } if (!isFinite(skaicius1) || !isFinite(skaicius2)) {
        return 'Skaicius privalo buti tinkamas';

    } return skaicius1 * skaicius2;
    
} 


console.log(daugyba(-Infinity,9));
console.log('-----------------');


// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:

function IndexCount(num) {
    if ( typeof num !== 'number' || isNaN(num) || !isFinite(num)) {
        return 'Pateikta netinkamo tipo reiksme'

    } return num.toString().length;
       
    } 




console.log(IndexCount(185857857858));
console.log(IndexCount(1786757857578));
console.log(IndexCount(Infinity));
console.log('-----------------');


// 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:



function biggestNumber (number) {

    if (!Array.isArray(number)) {
        return 'Turi buti saraso tipas';
    }
      if (number.length === 0) {
        return 'pateiktas sarasas negali buti tuscias';;

    } let element = -Infinity;
    // let element = number[0];
     for (let i = 0; i < number.length; i++) {
        if (typeof number[i] !== 'number' || !isFinite(number[i])) {
            continue;
        }
        if (number[i] > element) {
            element = number[i];
        }
        
    } return element;
}

console.log(biggestNumber([1]));
console.log(biggestNumber([1,2,3]));
console.log(biggestNumber([-5,78,14,0,18]));
console.log(biggestNumber([69,69,69,69,66]));
console.log(biggestNumber('tekstas'));
console.log(biggestNumber([]));
console.log('-----------------');

// 5. Funkcija pavadinimu “isrinktiRaides”:


function pickLetters(a,b) {
    if (typeof a !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo'
        
    } if (a.length === 0 || a.length > 100) {
        return 'pirmojo kintamojo reiksme yra netinkamo dydzio'

    } if (typeof b !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo'

    } if (b < 1) {
        return 'Antrasis kintamasis turi būti didesnis už nulį'

    } if (b > a.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį'

    }   let text = '';
        
    for (let i = b -1; i < a.length; i+=b) {
        
            text += a[i];
           
      
    } return text
                      

    


}





console.log(pickLetters("abcdefg",2));
console.log(pickLetters("abcdefghijkl",3));
console.log(pickLetters("abc",0));
console.log(pickLetters("abc",4));
console.log(pickLetters(1561,2));

console.log('--------------------');

// 6. Funkcija pavadinimu “dalyba”:

function division(num1,num2) {
    let sum  = num1/num2;

    if (typeof num1 !== 'number' || typeof num2 !== 'number' ) {
        return 'Turi buti skaiciai.';

    } if (!isFinite(num1) || !isFinite(num2)) {
        return 'Turi buti normalus skaiciai.';

    } if (isNaN(num1) || isNaN(num2)) {
        return 'Turi buti normalus skaiciai.';

    } if (Array.isArray(num1) || Array.isArray(num2)) {
        return 'Negali buti sarasas';

    } if (num1 % 1 !== 0 || num2 % 1 !== 0) {
        return 'Turi buti sveikieji skaiciai';

    } return sum;
    
        
    
    
}   


console.log(division(10090,3));






console.log('--------------------');