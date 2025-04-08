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
    
    
    
    
    function findDuplicateCharacterCount(str,letter) {
        
        let count = 0;
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] === letter) {
                count+=1 // = count +=1
        }
    }

    return count;
}


console.log(findDuplicateCharacterCount('hello','l'));


console.clear()

console.log('---------------');

function getDrinkByProfession(param){
    
    const word = param.toLowerCase();
    if (word === "jabroni") {
        return "Patron Tequila";
    } if (word === "School Counselor") {
        return "Anything with Alcohol";
    } if (word === "Programmer") {
        return "Hipster Craft Beer";
    } if (word === "Bike Gang Member") {
        return "Moonshine";
    } if (word === "Politician") {
        return "Your tax dollars";
    } if (word === "Rapper") {
        return "Cristal";
    } else {
        return "Beer";
    }
    
    
    
    
    
}

console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");



//function validName(name) {
    //const firstLetter = name[0].toUpperCase();
    //const restLetters = name.slice(1).toLowerCase();
    
   // return firstLetter + restLetters;
   
   
   
   
   
   
   //For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
   
   //Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
   
   
   function disemvowel(str) {
       const newStr = str.replaceAll('a','' );
  const newStr1 = newStr.replaceAll('e','' );
  const newStr2 = newStr1.replaceAll('i','' );
  const newStr3 = newStr2.replaceAll('o','' );
  const newStr4 = newStr3.replaceAll('u','' );
  const newStr5 = newStr4.replaceAll('A','' );
  const newStr6 = newStr5.replaceAll('E','' );
  const newStr7 = newStr6.replaceAll('I','' );
  const newStr8 = newStr7.replaceAll('O','' );
  const newStr9 = newStr8.replaceAll('U','' );
  return newStr9;
}

console.log(disemvowel("This website is for losers LOL!" ));


//a, e, i, o, u

/*
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

*/
function reverseWords(str){
    let text = '';
    
    for (let a = 5 - 1; a >= str.length; a--) {  
        text += str[i]
        
        
    } return text;
} 


console.log(reverseWords("hello world!"))

console.log('---------------------------------');
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/



function sumCubes(n){
    
    sum = 0;
    for (let a = 1 ; a  <= n; a++) {  
       
        sum += a**3  
        
  } return sum
  
}
console.log(sumCubes(123));
console.clear()
console.log('---------------------------------');



/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    
    const newS = str.toLowerCase()
    
    const firstLetter = newS.charAt(0)
    
    const firstLetterUppercase = firstLetter.toUpperCase()
    
    let newtest = "The-stealth-warrior";
    
    const firstWord = newtest.replace(0,'adwd')
    console.log(firstWord);
    
    
    
    //dashUnderscore = str.split('_')
    
    //const cameCase = 0;
    
    const replace = str.replaceAll('-','*').replaceAll('_','*');
    const upCase = replace.indexOf('*')+1;
    const lastIndex = replace.lastIndexOf('*')+1;

    const gucci = replace.charAt(lastIndex).toUpperCase() 
    
    
    console.log(gucci);
    
    
    
    //console.log(lastIndex.toUpperCase())
    
    //console.log(cameCase);
    
    
    console.log(lastIndex);
    console.log(upCase);
    
    
    if (firstLetter === firstLetterUppercase) {
        return true 
        
    } else {
        return false
    }
    
    
    
    
    
}


/*
 function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


console.log(toCamelCase("the-stealth_warrior"));



//const newtest = "the-stealth-warrior";

//const firstWord = newtest.replace(0,gucci)
//console.log(firstWord);




console.log('----------')


// charAt(0)

// toUpperCase()


const hi = 'Labas_rytas-Lietuva!';
const h2 = 'Labas_rytas-Lietuva!';

const hiNormalSize = hi.slice(1).toLowerCase().replaceAll('-','').replaceAll('_','')

const test = h2.indexOf('_')+1

const test2 = "the-stealth-warrior"

const test3 = test2.charAt(4).toUpperCase()
console.log('----------');

gucci = test2.indexOf('-')+1

const test4 = test2.lastIndexOf('-')+1
console.log(test4);

console.log(gucci);


console.log('----------');
console.log(test);
console.log(test3);

console.log(hiNormalSize);


console.log('duona'.split('o'));
console.log('duona'.split('u'));
console.log('duona'.split('d'));
console.log('duona'.split('n'));
console.log('duona'.split('a'));

*/


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

    
    if (operation === '*') {
       return num1 * num2;
       
    } if (operation === '+') {
        return num1 + num2;

    } if (operation === '-') {
        return num1 - num2;

    } if (operation === '/' && num1 !== 0 && num2 !== 0) {
          return num1 / num2
    } else {
        return null
    }

    } 
        
    
       
    
    
    console.log(calculate(2,"+",4));
    console.log(calculate(6,"-",1.5));
    console.log(calculate(-4,"*",8));
    console.log(calculate(49,"/",-7));
    console.log(calculate(8,"m",2));
    console.log(calculate(4,"/",0));



let items = []
let newAr = items.push({a: "b", c: "d"})



console.log(newAr[1]);



function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{ 
    var max2 = {
    name: 'Max Headroom'
    }
  
  {
   return max2;
  }
}


console.log(getMax1());





function areYouPlayingBanjo(name) {
    if ( name.startsWith('R') || name.startsWith('r')) {
      return name + " plays banjo"; 
    } else {
  }   return name + " does not play banjo";
    
  }



  const gucci = [9, 2, 0, 7]

  function reverseList(list) {
    reverse = [];
    
    for (i = list.length -1  ; i >= 0; i--) {

        reverse.push(list[i]);
        
    }    return reverse;
  }



  console.log(reverseList(gucci));
  console.log(reverseList(gucci));
  console.log(reverseList(gucci));

 /* 
 function reverseList(list) {
return list.reverse();
}

*/



const w =  ['hello', 'world', 'this', 'is', 'great']

function smash (words) {
  let t = ''
  t+=words
  
  
    return '' + t.replaceAll(',',' ')
 };


console.log(smash(w));

 

// return words.join(" ");



// return num.toString()
// return String(num);
//return Number(num);
// '' + num





function countSheeps(sheep) {
    let sheepC = 0;
    for (i = 0; i <= sheep.length; i++ ) {
      
      if ( sheep[i] === true ) {
        sheepC++
    }
    } return sheepC;
  } 


  const sheeper = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  null,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

    console.log(countSheeps(sheeper));


    function countSheeps(arrayOfSheeps) {
        return arrayOfSheeps.filter(Boolean).length;
      }
    

     // sheep.filter(Boolean).length;
     

     function getSum(a, b)
{
   sum = 0;
   sum2 = 0;
    for (let i = b ; i  < a; i++) {  
      
        sum = sum + i + i 

  } for (let i = b ; i  < b; i++) {  
       
    sum2 = sum2 + i + i

} return sum + sum2;
}
 
console.log(getSum(-1, 0))

console.log(-1+1);


console.log(Number.isInteger(-5));
console.log('------------------------------');



//let gkfkkf = array.replaceAll('0,','')
//console.log(gkfkkf);

// const pusher = array.push(4,0,0,)
// console.log(pusher);
// console.log(array);
 


const  array1 = [false,0,0,1,2,0,1,3,"a"]

function zeroPush (array) {
    let i = 0;
    let count = 0
    let zeroCount = []
    
    
    while (i < array.length) {
        if (array[i] === 0) {
            count++
            array.splice(i,1)
        } else {

            i++
        }

    } console.log(count); 

    
      
       
    
 }



 

 
 
 
console.log(zeroPush(array1));


let numbah = 7
let zeroCount = ''
let gucci23232 = zeroCount.replaceAll('','0'.repeat(numbah))

console.log(gucci23232);
let newaraay = gucci23232.split('')
console.log(newaraay);

let join = newaraay.join(',')
let news = join.split();
console.log(news);
console.log(array1.concat(news));

console.log('---awdawdawd----');


console.log(array1.splice(array1.lastIndexOf(),0));

console.log('----awdawdawd---');



console.log('----------');


//let count = 0;
    
    for(i = 0 ; i < array1.length; i++) {
      if (array1[i] === 0) {
        array1.splice(i,1);
      } 
      
    }
    console.log(array1);
  
  // Usage




//console.log(array1.replaceAll('0,',''));

let newArr = []
let gkfkkf = array1.toString().replaceAll('0,',' ')
console.log(gkfkkf);

 let spliter = gkfkkf.split('0');
 console.log(spliter);
 
console.log(array1.join('-'))



 //let repeatedZero = 
 let anotheArr =  []
let number2323 = 7
 let  cloud = array1.join()                      //('0'.repeat(number2323))
 
console.log(cloud);

 //let arr2 = anotheArr.toString().split('');

 //let latestArr = array1.join(cloud)
 
//console.log(latestArr);


//console.log(array1.join(cloud).split(''));



//const array2 = [false, "b", "c"];
//const array3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//const array4 = array1.concat(array3);

//console.log(array4);









//let abc = array1.splice(0,4)
//console.log(abc)

//console.log(array1);




console.log('--------');


let count = 0;
    
    for(i = 0 ; i < array1.length; i++) {
      if (array1[i] === 0) {
        array1.splice(i,1);
      } 
      
    }
    console.log(array1);
  
  // Usage















 //console.log(zeroPush(array));
 

 // array.filter(Boolean)




console.log('---------')

 function removeItemAll(arr, value) {
    let i = 0;
    
    while (i < arr.length) {
      if (arr[i] === value) {
        
        arr.splice(i, 1);
      } else {
        ++i
      } 
      
    } return arr
    
    
  }
  // Usage
  //console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
  console.log(removeItemAll([false,0,0,1,2,0,1,3,"a"], 0))










  const zodis1 = [];
const zodis2 = ["d", "e", "f"];
const zodis3 = zodis1.concat(zodis2);

console.log(zodis3);


