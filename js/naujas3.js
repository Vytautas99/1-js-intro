





/*
1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.
2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.
3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.
4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.
5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).
6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).
7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).
8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).
9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).
10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.
11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.
12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".

*/

// 1. Spausdinkite skaičius nuo 1 iki 10 naudodami for ciklą.

for (let i = 1; i <= 10; i++) {
 console.log(i);
 
       
}

// 2. Spausdinkite skaičius nuo 10 iki 1 atvirkštine tvarka naudodami for ciklą.

for (let a = 10 - 1; a >= 1; a--) {
    console.log(a);
    
          
   }

//    3. Spausdinkite kiekvieną lyginį skaičių nuo 0 iki 20 naudodami for ciklą.


for (let b = 0; b <= 20; b += 2) {
    console.log(b);
          
   }

console.log('----------------------');

 //  4. Spausdinkite kiekvieną nelyginį skaičių nuo 0 iki 20 naudodami for ciklą.

 for (let c = 0; c <= 20; c += 3) {
    if (c % 2 !== 0)
    console.log(c);
    
          
   } 

// 5. Išspausdinkite pirmuosius 10 skaičių kvadratų (1^2, 2^2, 3^2 ir t. t.).

console.log('------------');

for (let d = 1 ; d <= 10; d++) {

    console.log(d * d);
    
          
   } 

console.log('------------');

// 6. Išspausdinkite pirmuosius 10 skaičių kubų (1^3, 2^3, 3^3 ir t. t.).

for (let e = 1 ; e <= 10; e++) {

    console.log(e * e * e);
    
          
   } 

console.log('------------');


// 7. Atspausdinkite 7 daugybos lentelę (7 × 1, 7 × 2 ir t. t.).


for (let f = 1 ; f <= 7; f++) {

    console.log(` ${f} * 7 = ${f * 7 } `);
  
    
          
   } 

console.log('-------------');

   // 8. Atspausdinkite nuo 1 iki 5 žvaigždučių (*) seriją (pvz., *, **, *** ir t. t.).

   let text = ['','*'];
   for (let i = 0; i < 5; i++) {
       text += text[i]
      console.log(text.replace(',',''));
       
   }
   
console.log('-------------');

 //   9. Atspausdinkite atvirkštinę eigą su žvaigždutėmis 5 eilutėse (pvz., *****, ****, *** ir t. t.).
  
 let g = ['*','*','*','*','*','*']
 
    for (let i = 0  ; i < 5; i++) {
    
    g.pop()
    console.log(g.join(''));
    
}


   console.log('------------------------');
   

   // 10. Spausdinti skaičius nuo 1 iki 50, kurie dalijasi iš 3.


   for (let dalyba = 1 ; dalyba < 50; dalyba++) {
        if (dalyba % 3 === 0) {
            console.log(dalyba);
            
        }
       
      
   } 

   console.log('-----------------');
   
   // 11. Spausdinti skaičius nuo 1 iki 50 imtinai, kurie dalijasi iš 5.

   for (let dalyba1 = 1 ; dalyba1 <= 50; dalyba1++) {

   

    if (dalyba1 % 5 === 0) {
        console.log(dalyba1);
        
    }

}
console.log('-----------------');


   // 12. Spausdinti skaičius nuo 1 iki 100, kurie dalijasi ir iš 3, ir iš 5.
    

   
   for (let dalyba2 = 1 ; dalyba2 <= 100; dalyba2++) {
 
    
 
     if (dalyba2 % 3 === 0 && dalyba2 % 5 === 0) {
         console.log(dalyba2);
         
     }
 
 }
 console.log('-----------------');

  //  13. Sukurkite for ciklą, kuris penkis kartus išspausdintų "Hello, World!".

    for (let greeting = 0; greeting < 5; greeting++) {
        console.log("Hello, World!");
       

    }

    console.log('--------------------');

/*
 2.1 Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“.
2.2 Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz",
skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz".
2.3 Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.
2.4 Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite
"Even", o prie kiekvieno nelyginio - "Odd".
2.5 Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.
2.6 Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2
arba 3.
2.7 Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
pranešimą.
2.8 Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.
2.9 Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą.

*/

/* 2.1 Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 100, tačiau kiekvieną skaičių, kuris
dalijasi iš 4, reikia pakeisti žodžiu „Fizz“.
*/


    for (let fizz = 1; fizz <= 100; fizz++) {

        if (fizz % 4 === 0) {
            console.log("Fizz");

        } if (fizz % 4 !== 0) {
            console.log(fizz);
            
        }
        
        
        
    }
  
console.log('--------------------');

// 2.2 Spausdinkite skaičius nuo 1 iki 100, bet skaičius, kurie dalijasi iš 3, pakeiskite "Fizz",
// skaičius, kurie dalijasi iš 5, - "Buzz", o skaičius, kurie dalijasi iš abiejų, - "FizzBuzz".


for (let fizzerBuzzer = 1; fizzerBuzzer <= 100; fizzerBuzzer++) {

    if (fizzerBuzzer % 3 === 0) {
        console.log('Fizz');

    } else if (fizzerBuzzer % 5 === 0) {
        console.log('Buzz');

    } if (fizzerBuzzer % 3 === 0 && fizzerBuzzer % 5 === 0 ) {
        console.log('FizzBuzz');
    }

    




}






console.log('--------------------');

// 2.3 Spausdinkite pirmuosius 10 skaičių Fibonačio sekoje.

fib = [0,1];
for (i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib);
    
}




console.log('--------------------');

// 2.4 Spausdinkite skaičius nuo 1 iki 20 ir prie kiekvieno lyginio skaičiaus spausdinkite
// "Even", o prie kiekvieno nelyginio - "Odd".

for (let evenNodd = 0; evenNodd <= 20 ; evenNodd++) {
    
    
 if (evenNodd % 2 === 0) {

    console.log('Even');
    
} else if (evenNodd % 2 !== 0) {

    console.log('Odd');
    
}

}





console.log('--------------------');

// 2.5 Spausdinti bet kurio pasirinkto skaičiaus daugybos lentelę.  

for (let multiply = 1; multiply <= 9; multiply++) {
    console.log(multiply + ' *' + ' 9 = ' + multiply * multiply );


    //console.log(` ${f} * 7 = ${f * 7 } `);
    
}


console.log('--------------------');

// 2.6 Sukurkite for ciklą, kuris spausdina skaičius nuo 1 iki 30, bet tik tuos, kurie dalijasi iš 2
// arba 3.

for (let ciklas = 0; ciklas <= 30; ciklas++) {

    if (ciklas % 2 === 0 && ciklas % 3 === 0 ) {

        console.log(ciklas);
    
} 
    
}

console.log('--------------------');

//2.7 Sukurkite for ciklą, kad patikrintumėte, ar skaičius yra pirminis, ir išspausdintumėte
//pranešimą.

function isPrime(value) {

    if (value <= 1) return 'Skaicius nera pirminis'; {

    }  for ( let primeNum = 2; primeNum < value; primeNum++) {

        if (value % primeNum === 0) {
            return `Skaicius "${value}" nera pirminis.`

        } else {
            return `Skaicius "${value}" yra pirminis.`
        }
        
    } 
        
    }


    console.log(isPrime(11));
    
    console.log('--------------------');



// 2.8 Spausdinkite pirmuosius 10 pirminių skaičių, naudodami for ciklą ir if sąlygas.  
     
for (let pirminis = 2; pirminis < 11; pirminis++) {
    
    if (pirminis % pirminis !== 0  || pirminis >= 2) {
        console.log(pirminis);
        
    }
    
}

console.log('-----------------------');


// 2.9 Išspausdinkite visų lyginių skaičių nuo 1 iki 100 sumą.

let sum = 0;

for (let evenN = 1; evenN <= 100; evenN++) {
    
    if (evenN % 2 === 0) {
        sum += evenN
    }
    
        
}
console.log(sum);

console.log('--------------');



const Array9 = [2, 5, 12, 4,90,3,3,3,3,3]


 for (let i = 0; i < Array9.length; i++) {
    if (Array9[i] > 3 ) {
        
        console.log('yra tas pats skaicius: ' + Array9[i]);
       
 } 
    
 }

 //fruits.includes(checkFruits[i]));
 //array.indexOf

 //const array = [2, 5, 12, 4,90,3,3,3,3,3];

//const duplicates = array.filter((item, index) => array.indexOf(item) !== index);

//console.log(duplicates); 


