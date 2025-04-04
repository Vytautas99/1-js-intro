// 1. Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą

let sum = 0;

        for (let i = 5; i <= 15; i++) {
            
            sum += i
           
        }

    console.log(sum)



// 2. Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną

const word = 'Vakaras';

        for (let i = 0; i < word.length; i++) {
            
            console.log(word[i]);
                
        }


// 3. Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

for (let i = 1; i <= 6; i++) {
    console.log(i + ' * 6 = ' + i  * 6);
     
}
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



// 5. Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18
// 6. Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.
// 7. Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
// vardas - ’ console log eilutės pradžioje
// 8. Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.
// 9. Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
// pirmo
// 10. Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
// (1, 2, 5, 10, 20, 50, 100, 200, 500)
// 11. Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
// Žodis, kurio reikšmė yra ‘Labas’
// 12. Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
// raidę.
// 13. Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
// consolę reikšmę
// 14. Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
// 15. Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
// 16. Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
// elementus vienas po kito nuo galo iki pradžios
// 17. Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
// ‘samivamargorP’ atskiras raides vieną po kitos
// 18. Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
// iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’
// 19. Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
// Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)
// 20. Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
// visus skaičius, kurie yra mažesni už 100
// 21. Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra
// 22. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
// elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą.
// 23. Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome
// yra raidžių e
// 24. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio
// Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra:
// PVZ: Žodžiui Keletą būtų išvedama:
// e raidė yra 2 vietoje
// e raidė yra 4 vietoje
// 25. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei
// mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.


let star = ''
const Array10 =  [2, 2, 2, 2, 2, 5, 6]
let sum5 = 0
for (let i = 0; i < Array10.length; i++) {

       
    if (Array10[i] === Array10[i]) {

        console.log(star += '*');
        
    }
    

} 
    






function positiveSum(arr) {

    let sum = 0;

    if (arr.length === 0) {
        return 0;
    } 

    for (i=0; i < arr.length; i++) {

        
        if (arr[i] > 0) {

            sum += arr[i];

        }

    } return sum;
       

    }
        
    
    
    



console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);  


const a =[4, 5, 6]
  const b = [1, 2, 3]

function arrayMadness(a, b) {
    let sum = 0;
     let resultA = 0;
     let resultB = 0;

      for (i = 0; i < a.length; i++) {
        
        resultA += a[i]**2
        

     } for (let i = 0; i < b.length; i++) {

        resultB += b[i]**3
        
     } if (resultB < resultA) {
        return true;
     }
    
    
    
    
  }
  
  console.log(arrayMadness(a,b));

 console.log('-------');
 


  function zeroFuel  (distanceToPump, mpg, fuelLeft) {

    let distance = fuelLeft*25;

    if (distance < 50) {
        return false;
    } else {
        return true;
    }
  };



 console.log(zeroFuel(50, 25, 2), true);
 console.log(zeroFuel(100, 50, 1), false);



 function zeroFuel (distanceToPump, mpg, fuelLeft)  {
    let distance = fuelLeft * mpg;
    
    if (distance < distanceToPump) {
      return false;
      
    } else if (distance >= distanceToPump) {
      return true;
    }
  };
console.log('------');


  function hero(bullets, dragons){

    let OddsToKill = dragons*2

  if (OddsToKill >= bullets  ) {
      return false;
  }    else  { 
    return true;

  } 
  }
  

 console.log(hero(200, 94), true);
 console.log(hero(7, 4), false);
 console.log(hero(4, 5), false);
 console.log(hero(100, 40), true);
 console.log(hero(1500, 751), false);
 console.log(hero(0, 1), false);


/*

 Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

    The length of string is not always the same as the number of characters

For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

*/

function solution(a,b) {
    if (a.length < b.length) {
        return a + b + a;
    } else if (a.length > b.length) {
        return b + a + b;
    } if (a.length === 0 ) {
        return a + b + a;
    } else if (b.length === 0) {
        return b +a + b
    }
}

console.log(solution('2','00'));
console.log(solution('22','1'));
console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');


const a1 = "code";
const b2 ="wa.rs";
const name = a1 + b2;

console.log(name);

/*
Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null

Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
*/

function calculate(num1,operation,num2) {

    //if (num1  === 0 ||  num2 === 0  ) {
        //return null;
  // }   
    
    if (operation === '*') {
       return num1 * num2;
       
    } if (operation === '+') {
        return num1 + num2;

    } if (operation === '-') {
        return num1 - num2;

    } if (operation === '/') {

       if (num1 === 0 || num2 === 0) {
        return null;

       } else {
        return num1 / num2;
       }
        
    } 
    } 
        
    
       
    
    


 
    
      
      
    
 

    
 


console.log(calculate(3,'/',0));



function calculate(num1, operation, num2) {
    if (operation === '*') {
          return num1 * num2;
          
       } if (operation === '+') {
           return num1 + num2;
   
       } if (operation === '-') {
           return num1 - num2;
   
       } if (operation === '/') {
           return num1 / num2;
   
       } else {
           return null;
       }
       
       
    
   
   }


    let word1 = '';

console.log('------------------------');

   function correctPolishLetters (string) {

     let modified = string.replaceAll("ą", "a");
     let modified1 = modified.replaceAll("ę", "e");
     let modified2 = modified1.replaceAll("ć", "c");
     let modified3 = modified2.replaceAll("ł", "l");
     let modified4 = modified3.replaceAll("ń", "n");
     let modified5 = modified4.replaceAll("ó", "o");
     let modified6 = modified5.replaceAll("ś", "s");
     let modified7 = modified6.replaceAll("ź", "z");
     let modified8 = modified7.replaceAll("ż", "z");
   
    return modified8;

    } 
  



console.log(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");


console.log('------------------------');

function strCount(str, letter){  

    {
        
    }
  }


console.log(strCount('hello','o'));





console.log('------------------------');

console.log(strCount('gucci',''));
console.log('------------------------');
const adad = 'awdawdaaw'
let awdad = adad.split('a');


console.log(awdad.length);



console.log('------------------------');




function findDuplicateCharacters(str) {
	let result = [];
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				result.push(str[i]);
			}
		}
    }

    return result;
}