

const mokinys1 = ['Božena',9,6,5,8,5,];
const mokinys2 = ['Rapolas',9,9,9,3,4,];
const mokinys3 = ['Egle',5,5,9,4,7,];
const mokinys4 = ['Viktoras',5,2,9,8,9,];
const mokinys5 = ['Laura',3,3,4,3,4,];

function MokinioVidurkis (mokinys) {

    console.log('Mokinio vardas: ' + mokinys[0]);
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4]
    + mokinys[5])/5; 
    if (vidurkis>=3.5) {
        console.log(mokinys[0] + ' Islaike. jo vidurkis: ' + vidurkis);
    
    } else
    {let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neislaike. jo dabartinis vidurkis: ' + vidurkis);
        if (vidurkisNaujas>=3.5)
        { 
            console.log(mokinys[0] + ' islaikytu kursa, jei gautu viena desimtuka');
            
        }
    
    }
    
    }
    (MokinioVidurkis(mokinys1));
    (MokinioVidurkis(mokinys2));
    (MokinioVidurkis(mokinys3));
    (MokinioVidurkis(mokinys4));
    (MokinioVidurkis(mokinys5));
   
    

    console.log('----------------------------------');
    




/*
    Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
    Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
    Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.
    
    */
   
   //console.log("nieko ypatingo : " + movie[0])
   
   //nction filmai(movie) 
   
      //f (pageidautinasIvertinimas <= movie[3]); 
      //
      //   console.log("geras filmas: " + movie[0]);
   
       
       
           
   
      //movie[1] === megtamasZanras
    
   const movie = [' Sunshine ', ' Sci-fi', 9 ]
   const movie1 = [' John Wick ', 'Action', 6]
   const movie2 = [' Incendies ', 'Drama', 9]
   const movie3 = [' Gladiator ', 'Adventure', 7]
   const movie4 = [' Event Horizon ', 'Horror', 8]

const megtamasZanras = 'Horror'
const megtamasZanras1 = 'Adventure'
const pageidautinasIvertinimas = 7;


    
function filmai1(filmas) {

    if (filmas[2] >= pageidautinasIvertinimas && filmas[1] === megtamasZanras ) {
        console.log('Rekomendacija: ' + filmas[0]);

    } else {
        console.log('Neatitinka pageidautino zanro ar balo: ' + filmas[0]);
        
    }
    
}
                         
    



filmai1(movie) 
filmai1(movie1) 
filmai1(movie2) 
filmai1(movie3) 
filmai1(movie4) 






console.log('-------------------------------------------');




const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);
























    //const kk = movie.length
    
//console.log(kk);

    




//console.log('Geri filmai: ' + movie[0] + movie4[0] + movie3[0]);

let p = [4, 8, 7, 13, 12,50,800]
let sum10 = 0;

for (let i = 0; i < p.length; i++) {
    sum10 += p[i];
}

console.log(sum10)

console.log('----------------------------------');


const filmas11 = ['greitis', 'veiksmo', 7.5]
const filmas12 = ['pjūklas', 'siaubo', 6]
const filmas13 = ['klyksmas', 'siaubo', 8]
const filmas14 = ['narnija', 'fantazijos', 6]
const filmas15 = ['baltija', 'istorinis', 6]

const ManoBalas = 7;
const ManoZanras = 'siaubo';
const DraugoBalas = 9;

function filmoPasiulymas (filmasA, filmasB, filmasC, balas, zanras)
{
    let ArYraFilmas = false;

    if (filmasA[2]>=balas && filmasA[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasA[0]);
        ArYraFilmas = true;
    }
    if (filmasB[2]>=balas && filmasB[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasB[0]);
        ArYraFilmas = true;
    }
    if (filmasC[2]>=balas && filmasC[1] == zanras)
    {
        console.log ("Jums tiktų: " + filmasC[0]);
        ArYraFilmas = true;
    }

    if(ArYraFilmas == false)
    {
        console.log('Jums tinkamų filmų nėra')
    }
}


filmoPasiulymas(filmas11, filmas12, filmas13, DraugoBalas, ManoZanras)




const skaiciai1 = [1, 2, 3];

function addNum (sk)
{
    return (sk[0]+sk[1]+sk[2]);
}


function tellNum (sk)
{
    console.log(sk[0]);
}

console.log(addNum(skaiciai1));



console.clear()

console.log('---------------------');
/*

Užduotys su IF ir sąrašais(array)

1. Patikrinkite, ar sąraše yra tam tikras skaičius.
a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.
2. Patikrinkite, ar masyvas tuščias.
a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.
3. Nustatyti, ar sąraše yra teigiamas skaičius.
a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių.
4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.
a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai.
5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.
a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas.
6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.
a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už
paskutinį.
7. Patikrinkite, ar sąrašo ilgis didesnis už 5.
a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5.
8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji
a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai.
9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.
a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis
nei 10.
10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai.
a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2

*/

// 1. Patikrinkite, ar sąraše yra tam tikras skaičius

const array1 = [1, 2, 3, 4];


if (array1.includes(3)) {
    console.log('Šiame saraše yra skaičius 3.');

} else {
    console.log('Šiame saraše nėra skaičiaus 3.');
    
}

console.log('---------------------');

// 2. Patikrinkite, ar masyvas tuščias.

 const array2 = []

if (array2.length === 0 ) {


    console.log('Tusčias');
     
} else {
    console.log('Užimtas');
    
}

console.log('---------------------');

// 3. Nustatyti, ar sąraše yra teigiamas skaičius.

const array3 = [1, -2, 3, -4];

for (let i = 0; i < array3.length; i++) {

    if (array3[i] >= 0) {
        console.log(`sarase yra teigiamas skaicius : ${array3[i]}`);
        
    }
}
console.log('---------------------');

// 4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.

const array4 = [2, 4, 6];

if (array4[0] % 2 === 0) {
    console.log("Lyginis skaicius");
} if (array4[1] % 2 === 0) {
    console.log("Lyginis skaicius");
} if (array4[2] % 2 === 0) {
    console.log("Lyginis skaicius");
} else  {
    console.log('Nelyginis ');
    
}
console.log('---------------------');

// 5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas.

const array5 = [3, 5, -2];

if ( array5[0] < 0) {
    console.log('Yra neigiamas skaicius ' + array5[0]);
    
}  if (array5[1] < 0) {
    console.log('Yra neigiamas skaicius: ' + array5[1]);
}  if (array5[2] < 0) {
    console.log('Yra neigiamas skaicius: ' + array5[2]);
}  
console.log('---------------------');

// 6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį.

const array6 = [1, 3, 5]
    if (array6[0] > array6[2] ) {
        console.log('Pirmasis skaicius sarase yra didesnis uz paskutini');
        
    } else {
        console.log('Pirmasis skaicius sarase nera didesnis uz paskutini');
    }


    console.log('---------------------');

// 7. Patikrinkite, ar sąrašo ilgis didesnis už 5.

const array7 = [1, 2, 3, 4, 5, 6];

if (array7.lenght <= 5) {
    console.log(true);
    
} else {
    console.log(false);
    
}
console.log('---------------------');

// 8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji

 const  array8 = ['obuolys', 'bananas', 'vyšnia', ];

if (typeof array8[0] === 'string')   {
    console.log('String');
      
} if (typeof array8[1] === "string") {
    console.log('String');
    
} if (typeof array8[2] === "string") {
    console.log('String');

} else {
    console.log('Ne string');
}

console.log('---------------------');

// 9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10.

var warned = false;

const Array9 = [2, 5, 2, 4,2]


 for (let i = 0; i < Array9.length; i++) {
    if (Array9[i] > 10) {
        
        console.log('yra skaicius didesnis uz 10: ' + Array9[i]);
         warned = false;
 } else { console.log('nera');
 
    warned = false;
 }
 
    
 warned = true;
    
 }
    
 
 console.log('---------------------');

// 10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai.

const Array10 =  [2, 2, 2, 2, 2, 5, 6]

for (let i = 0; i < Array10.length; i++) {
    if (Array10[i] === i) {
        console.log(i);
        
    }
   
    
}

/*

Užduotys su IF
1. Patikrinkite, ar skaičius teigiamas.
a. Pavyzdys: Patikrinkite, ar skaičius = 3 yra teigiamas.
2. Patikrinkite, ar skaičius dalijasi iš 5.
a. Pavyzdys: Pavyzdys: Patikrinkite, ar skaičius = 15 dalijasi iš 5.
3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.
a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai.
4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų).
a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų.
5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų).
a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių..
6. Patikrinkite, ar skaičius yra nelyginis.
a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis.
7. Patikrinkite, ar eilutė lygi "JavaScript".
a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript".
8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai).
a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20.
9. Patikrinkite, ar skaičius yra didesnis arba lygus 100.
a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100.

*/

//1. Patikrinkite, ar skaičius teigiamas.

console.log('----------------');

 function isNumberPositive(number) 

{   if ( typeof number !== 'number' || !isFinite(number) || isNaN(number)  ) {
        return 'Value must be number.';

    }   if (number >= 0 ) 
    {
        return `Number ${number} is postiive.`;

    }   if (number < 0)
    {
            return `Number ${number} is negative.`;
    }
 


} 

 console.log(isNumberPositive(+500));
    
 console.log('----------------');

 // 2. Patikrinkite, ar skaičius dalijasi iš 5.


const num1 = 95

if (num1 % 5 === 0 ) {

    console.log('Dalinasi is 5. Atsakymas = ' + num1/5);
  
} else {
    console.log('Skaicius nesidalina is 5.');
    
}

console.log('----------------');


// 3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai.

    Text = 'hello'

if (Text.length <= 5 && Text.length >= 0) {
    console.log('tekstas iki 5 simboliu');
    
} else {
    console.log('teksta sudaro daugiau nei 5 simboliai');
    
}




console.log('----------------');


// 4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų).
    const age = 20

    if (age >= 18) {
        console.log('Turi teise balsuoti');
        
    } else {console.log('Neturi teises balsuoti');

    }


console.log('----------------');

// 5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų).

const Number = 15

if (Number >= 13 && Number <= 19) {
    console.log('Paauglys');
    
} else {
    console.log('Pilnametis');
    
}
console.log('----------------');

// 6. Patikrinkite, ar skaičius yra nelyginis.

const Even = 10

if (Even % 2 === 0) {
    console.log('Lyginis');
    
} else {
    console.log('Nelyginis');
    
}


console.log('----------------');

// 7. Patikrinkite, ar eilutė lygi "JavaScript".

const text1 = 'JavaScript'
    if (text1 === 'JavaScript') {
        console.log(true);
        
    } else {
        console.log(false);
        
    }

console.log('----------------');

// 8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai).

const Num2 = 15

  if (Num2 < 20 && Num2 > 10) {
    console.log('yra tarp 20');
    
  } else {
    console.log('nera tarp 20');
    
  }


console.log('----------------');

//9. Patikrinkite, ar skaičius yra didesnis arba lygus 100.

  const num3 = 150  

  if (num3 >= 100) {

    console.log(`Skaicius ${num3} Didesnis arba lygus 100`);
    
  } else{
    console.log(`Skaicius ${num3} Mazesnis uz 100`);
    
  }




console.log('----------------');

console.clear()

/*
Užduotys su funkcijomis
1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas.
2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.
3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį.
4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.
5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.
6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
variantą kolkas)
7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
a. Padaryti su sąrašo (array) tipo kintamuoju
b. Padaryti su keliais skaičių tipo kintamaisiais
8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.
9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.
10. Sukurkite funkciją trijų skaičių vidurkiui rasti.
11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.
12. Sukurkite funkciją dviem eilutėms sujungti.
13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai).

*/

// 1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas. 


function isNumberPositive(num) {
    if (num < 0) {
        return `Skaicius ${num} yra neigiamas`;
    }
    if (num >= 0) {
        return `Skaicius ${num} yra teigiamas`;
    }
}   

console.log(isNumberPositive(9));


console.log('----------------');

//2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.

function numSquare(num) {
    if (typeof num !== 'number' || isNaN(num) || !isFinite(num)) 

         {  return 'Incorrect value. Must be a number.'

        
        
        
    }   return num * num;
}

console.log(numSquare(Infinity));



console.log('----------------');

// 3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį.

 function biggerNumber (num1,num2) {
  
    if (num1 > num2) {
        return num1

    } else if (num2 > num1) {
        return num2
    }


 }




 console.log(biggerNumber(5001,500));
 
console.log('----------------');

// 4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.

function checkWord(word) {
        if (word.includes('JavaScript')) {
            return 'Rastas zodis "JavaScript" eiluteje: ' + word;
        }
    

}
console.log(checkWord("guccigabannaJavaScript"));


console.log('----------------');

// 5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis.

function isEven(sum) {
    if (sum % 2 === 0)  {
        return sum + ' yra lyginis skaicius' 
    } else {
        return sum + ' nera lyginis skaicius'
    }
}

console.log(isEven(32));


console.log('----------------');

// 6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas,
//išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite
//kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną
//variantą kolkas)

 let result = ''

    function reverseValue(value) {
        if (typeof value === 'number' && value >= 0)  
            {  
              return -value

            } else if (value < 0) {
                return value * -1
            } 

        if (typeof value === 'string'){

        } if (value.length !== 5) {

            return 'Zodis turi buti is 5 raidziu'

        }   if (value.length === 5) {
            for (let i = 0 ; i < value.length; i++) {
                
                result = value[i] + result
                
            } return result;
        }

       
    

    }  


    


console.log(reverseValue('zodis'));


console.log('----------------');

// 7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą.
// a. Padaryti su sąrašo (array) tipo kintamuoju
// b. Padaryti su keliais skaičių tipo kintamaisiais




console.log('----------------');

// 8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3.

    function DIVISION(value) {
        if (value % 3 === 0) {
            return `${value/3} `
        }  else {
            return 'Skaicius nesidalina is 3.'
        }
    }

console.log(DIVISION(300));


console.log('----------------');

// 9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'.

function name(params) {}
    

console.log('----------------');

// 10. Sukurkite funkciją trijų skaičių vidurkiui rasti.

    function marksAverage(a,b,c) {
       return (a + b + c) / 3 
    }

console.log(marksAverage(5,4,10))/3



console.log('----------------');

// 11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį.

function Length1(a) {

    if (typeof a !== 'string') return 'turi buti tekstas'; {
        return ` Zodzio "${a}" ilgis yra: ${a.length} raides.`
    } 

    }

console.log(Length1('tekstas'));


console.log('----------------');

// 12. Sukurkite funkciją dviem eilutėms sujungti.

const  a = 'Sujungtas';
const b = 'tekstas';
function combineText(a,b) {
 
    if (typeof a !== 'string') return 'turi buti tekstas'; {

         return a + ' ' + b;  
    }



}

console.log(combineText(a,b));



console.log('----------------');

// 13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai).




function betweenNum (numA,numB,skaicius1) {
    
    for (let i = numA; i <= numB; i++) {
    }    
       if (skaicius1 >= numA && skaicius1 <= numB)
        {  
        return `skaicius ${skaicius1} yra tarp ${numA} ir ${numB}.`;
        
       } else {
         return `skaiciaus ${skaicius1} nera tarp ${numA} ir ${numB}.`
       }
        
     
}


console.log(betweenNum(0,9,959599));

console.log('----------------');
