// 1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

let sum = 0;

        for (let i = 5; i <= 15; i++) {
            
            sum += i
           
        }

    console.log(sum)


console.log('----------');

// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

const word = 'Vakaras';

        for (let i = 0; i < word.length; i++) {
            
            console.log(word[i]);
                
        }

        console.log('----------');

// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

for (let i = 1; i <= 6; i++) {
    console.log(i + ' * 6 = ' + i  * 6);
     
}

console.log('----------');

// 4. Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
// ekraną išvestų žodį ‘BOOM’

const boom = 'boom'

for (let i = 5; i >= 0; i--) {
     
    { if (i === 0) {

        console.log('boom');
        
    } else {
        
        console.log(i);
        
    }
    
           
    }
    
    
}


console.log('----------');

// 5. Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18
let sum1 = 0;
for (let i = 3; i < 18; i++) {
    if(i%2===0) {
        sum1+=i;
        
    }
    
    
}

console.log(sum1);

console.log('----------');

// 6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.
const array = [0,5,6,7,'adwd',true]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
    
}

console.log('----------');

// 7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
// vardas - ’ console log eilutės pradžioje

const vardai = ['Dolce&Gabbana','Armani','Gucci'];

for (const vardas of vardai) {
    console.log(`Mano vardas ${vardas}`);
    
    
}

console.log('----------');



// 8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.

const array2 = [0,5,8,9,5,'gucci','armani',true,false,undefined,9,11];
let sum2 = 0;
for (const array of array2) {
    if (typeof array === 'number') {
        sum2+=array
    };
    
}
console.log(sum2);

console.log('----------');



// 9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
// pirmo

for (let i = array2.length-1; i >= 0; i--) {
    
    console.log(array2[i]); 
}


console.log('----------');

// 10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
// (1, 2, 5, 10, 20, 50, 100, 200, 500)

const array3 = [1, 2, 5, 10, 20, 50, 100, 200, 500];

for (i=0;i<2000; i++) {
    if (array3.includes(i)) {
        console.log(i);
        
    }
    
}


console.log('----------');

// 11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
// Žodis, kurio reikšmė yra ‘Labas’

const array4 = [ 'L','a','b','a','s'];

let text = '';
for (const zodis of array4) {
    text+= zodis;
    
}

console.log(text);


console.log('----------');

// 12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
// raidę.
const text2 = 'Programavimas'

for (const text of text2) {
    console.log(text);
    
    
}


console.log('----------');

// 13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
// consolę reikšmę

let sum3 = 0;
for (let i = 2; i < 10; i++) {
    sum3+=i*i;
    
}

console.log(sum3);

console.log('----------');


// 14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą

let sum4 = 0; 
for (let i = 1; i < 30; i++) {
    if (i%2!==0) {
        sum4+=i;
    }
    
}

console.log(sum4);

console.log('----------');

// 15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10

for (let i = 20; i >= 10; i--) {
    console.log(i);
    
    
}

console.log('----------');

// 16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
// elementus vienas po kito nuo galo iki pradžios
const array5= [ 's', 'a', 'b', 'a', 'L'];

for (let i = array5.length; i >= 0; i--) {
    console.log(array5[i]);
    
}

console.log('----------');

// 17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
// ‘samivamargorP’ atskiras raides vieną po kitos

const text3 = 'samivamargorP';
for (let i = 0; i < text3.length; i++) {
    console.log(text3[i]);
    
    
}

console.log('----------');

// 18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
// iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’

for (let i = 1; i < 100; i++) {
    console.log(i%7===0?'Lucky':i);  
    
}


console.log('----------');

// 19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
// Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)

const array6 = [2, 3, 6, 8];

for (const array of array6 ) {
    console.log(array*2);
    

}
console.log('----------');


// 20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
// visus skaičius, kurie yra mažesni už 100

const array7 = [2, 14, 10, 1000, 503, 8, 0];

for (const array of array7) {
  
    if (array<100) console.log(array);

}

console.log('----------');


// 21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra

const text5 = "abrakadabra";

let count = 0;

for (let i = 0; i < text5.length; i++) {
    if (text5[i]==='a') {
        count++;
    }

}
console.log(count);

console.log('----------');

// 22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
// elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.

const array8 = [2, 8, 88, 14];

for (const array of array8) {
    console.log(array+2);
    
}


console.log('----------');

// 23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome
// yra raidžių e

const text6 = 'Nebeprisikiškiakopūstėliaudavome';

let count1 = 0;

for (const text of text6) {
    if (text==='e'|| text==='ė') count1++;
}

console.log(count1);

console.log('----------');

// 24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio
// Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra:
// PVZ: Žodžiui Keletą būtų išvedama:
// e raidė yra 2 vietoje
// e raidė yra 4 vietoje


for (i=0; i<text6.length; i++) {
    if (text6[i] === 'e' || text==='ė')
    console.log(`${text6[i]} raidė yra ${i} vietoje`);
    
}



console.log('----------');

// 25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei
// mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.

let lobis = 150;

for (let i = 20; i > 15; i--) {

    console.log(lobis-=i);
    
    
}


console.log('----------');



                                        //Funckijos

//1. Parašykite funkciją, kuri grąžina dviejų skaičių sumą.

const func = (a, b) => a + b;


console.log(func(9,90));

console.log('----------');

//2. Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą.

const func2 = (a, b) => b-a;


console.log(func2(9,90));

console.log('----------');

//3. Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą.

const func3 = (a, b) => b*a;

console.log(func3(9,90));

console.log('----------');

//4. Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.

const func4 = (a, b) => b/a;


console.log(func4(9,90));

console.log('----------');

//5. Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.

const func5 = (a, b) => (a+b)/2;

console.log(func5(9,90));

console.log('----------');

//6. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.

const func6 = a => a>0;

console.log(func6(9));

console.log('----------');

//7. Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis.

const isEven = a => a%2===0? 'even':'odd';

console.log(isEven(9));

console.log('----------');

//8. Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis.


const isOdd = a => a%2!==0?'odd':'even';

console.log(isOdd(9));

console.log('----------');

//9. Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.


const func7 = a => a%5===0;

console.log(func7(5));

console.log('----------');


//10. Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.


const func8 = a => a===100;

console.log(func8(5));

console.log('----------');

//11. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10.


const func9 = a => a>10;

console.log(func9(5));

console.log('----------');

//12. Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių.

const func10 = (a,b) => a>b?a:b;

console.log(func10(5,90));

console.log('----------');

//13. Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių.

const func11 = (a,b) => a<b?a:b;

console.log(func11(2,3));

console.log('----------');

//14. Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi.

const func12 = (a,b,c) => a===b&&a===c;

console.log(func12(9,5,9));

console.log('----------');

//15. Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.

const func13 = (a,b) => a===b;

console.log(func13(9,9));

console.log('----------');

//16. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.

const func14 = a => a>1&&a<10;

console.log(func14(11));

console.log('----------');

//17. Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100.

const func15 = a => a>50&&a<100;

console.log(func15(99));

console.log('----------');

//18. Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas.

const func16 = a => a<0;

console.log(func16(99));

console.log('----------');


//19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo
//skaičiaus, kurį nusiunčiate funkcijai.

const func17 = a => a>0?'Teigiamas':'Neigiamas';

console.log(func17(99));

console.log('----------');


//20. Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas,
//ar žmogus pilnametis).

const func18 = a => a>18?'Pilnametis':'Nepilnametis';

console.log(func18(240));

console.log('----------');


//21. Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.

const func19 = a => a==='Labas';

console.log(func19("Gucci"));

console.log('----------');


//22. Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.

const func20 = a => a.length>5;

console.log(func20("Gucci"));

console.log('----------');


//23. Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.

const func21 = a => a[0];

console.log(func21("Gucci"));

console.log('----------');


//24. Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.

const func22 = a => a.at(-1);

console.log(func22("Gucci"));

console.log('----------');


//25. Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.

const func23 = a => a.at() === 'A';

console.log(func23("Gucci"));

console.log('----------');

//26. Parašykite funkciją, kuri grąžina žodžio ilgį.

const func24 = a => a.length;

console.log(func24("Gucci"));

console.log('----------');


//27. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio
//ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba
//trumpesnis

const func25 = a => a.length>7?'Ilgas':'Trumpas';

console.log(func25("Gucci"));

console.log('----------');


//28. Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.

const func26 = (a,b) => a===b;

console.log(func26("Gucci",'Prada'));

console.log('----------');


//29. Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos
//valandos (0–23).

const func27 = a => {
    const night = [22,23,0,1,2,3,4,5,6]
    return night.includes(a)? 'Naktis':'Diena';
}
console.log(func27(0));

console.log('----------');


//30. Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
//a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’
//b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
//c. Skaičius yra nulis, išveda į console ‘esu nulis’
//d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
//e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas


const func28 = a => {
    if (a===0) return 'skaičius yra nulis';
    if (a>0 &&a<100) return 'skaičius yra teigiamas';
    if (a<0) return 'skaičius yra neigiamas';
    if (a>100)  return 'didžiulis skaičius';
    if (a===100) return 'mažas skaičius';
}
console.log(func28(101));

console.log('----------');


let sum20 = 1;
for (let i = 2; i < 5; i++) {
    sum20+=i*i;
    
}

console.log(sum20);

console.log('----------');
