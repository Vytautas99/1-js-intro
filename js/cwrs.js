

console.log('--------------------');

//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

const array = ["a", 0,9,54,8,6]
const text = "000000"


const arr = text.split("")

const spliter = text.split('')
console.log(spliter);




const a = ['1']

const b = ['1', '2', '3']
a
const newA = spliter.map(Number);
const newB = b.map(Number);

console.log(newB);
console.log(newA);



//const arr6 = '0'.repeat(7)
//console.log(arr6);




 const  array1 = [false,0,0,1,2,0,1,3,"a"]
 const  array2 = [false,0,0,1,0,0,0,0,0,0,2,0,1,3,"a"]
 const  array3 = [false,0,0,0,0,0,0,0,0,1,2,0,1,3,"a"]

function zeroPush (arr) {
    let i = 0;
    let count = 0
    
    while (i < arr.length) {
        if (arr[i] === 0) {
            count++
            arr.splice(i,1)
        } else {

          i++
        }

    }  const arr6 = '0'.repeat(count).split('')

        const newA = arr6.map(Number);
        //console.log(newA)
        //console.log(count);
        
        return arr.concat(newA);

    
      
       
    
 }



 

 
 
 console.log('---------');
 console.log('---------');
console.log(zeroPush(array1));
console.log('---------');
console.log('---------');
console.log(zeroPush(array2));
console.log('---------');
console.log(zeroPush(array3));

console.log('---------');


    console.log('---------------------');
    console.clear()

    
//"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


const text1 = "The greatest victory is that which requires no battle" 


const reverse = text1.split('  ').reverse().join(' ')    //.replaceAll(',',' ')     

console.log(reverse);



console.log('---------');




for (let i = 1 ; i < 4; i++) {
    console.log(i);
    
    
}



function tripleTrouble(one, two, three){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
 }




 function whatday(num) { 

    const week = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',   
    }; 

       if (week[num] === undefined) {
       return "Wrong, please enter a number between 1 and 7";
    }

       return week[num];
    }   

    console.log(whatday(8));
    



/*
    function fancyMath(n1, sign, n2) {
        const func = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '**': (a, b) => a ** b,
            '%': (a, b) => a % b,
        };
    
        const funcToUse = func[sign];
        if (funcToUse === undefined) {
            return ':(';
        }  return funcToUse(n1, n2);
    
   */





    


        const worda = "the_stealth_warrior"


            const splinger = worda.slice(4)
            console.log(splinger);
            


        console.log(worda.replaceAll('_','T'+1));


        


        var str="this is an example.";
var words=str.split(" ");
for (var i=0;i<words.length;i++){
  words[i]=words[i][0].toUpperCase()+words[i].slice(1);
}
console.log(words.join(" "));





console.clear();




      /*
      
    const newS = str.toLowerCase()
    console.log(newS);
    
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
    */

console.clear();
   /*
   Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
   Examples
   
   "the-stealth-warrior" gets converted to "theStealthWarrior"
   
   "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
   
   "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
   */
   
   function toCamelCase(str){
        ran = false
       const newS = str.toLowerCase()
       //console.log(newS);
       const replace = str.replaceAll('-','*').replaceAll('_','*').split('*');
       //console.log(replace);
        //const newW = replace.split('*')
        //console.log(newW);
        let firstW = [];
        let restW = [];
        //console.log(firstWord5);
        firstW.push(replace[0])
        if (str === '') {
            return '';
        }
       
        
       if (str.charAt(0) !== newS.charAt(0) ) {
           //console.log(true);
        for (let i = 0; i < replace.length; i++) {
            
            //newArr.push(replace[0])
            replace[i]=replace[i][0].toUpperCase()+replace[i].slice(1);
            
            
            //console.log(replace);


            //restW = restW.push(replace[1],replace[2])
          
            //const name = replace[i][0];
            //const firstLetter = name.toUpperCase() 
            //console.log(firstLetter);
            //const restLetters = replace
            //console.log(restLetters);
           
            
        } return replace.join('')
          
   
           
       } else {
          for (let i = 0; i < replace.length; i++) {

            replace[i]=replace[i][0].toUpperCase()+replace[i].slice(1);
            restW = (replace.slice(1,replace.length));
            
          }
        return firstW[0].toLowerCase()  + restW.join('')
       } 
       
   
       
    
       
       
   } 
   
   
        console.log(toCamelCase("a_cat-Was-Savage"));
         
   
        //return firstWord5 + restWords.slice(4,7).join('')  
        //return replace




var str="this is an example.";
var words1=str.split(" ");
for (var i=0;i<words1.length;i++){
  words1[i]=words1[i][0].toUpperCase()+words1[i].slice(1);
}
//console.log(words.join(" "));





function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}


console.log(createArray(5));





function checkForFactor (base, factor) {
  
    const forb = base % factor === 0 ? 'true' : 'false'
    return forb;
}


console.log(checkForFactor(8,3));


const number = 7 <= 4 ? 7:5
console.log(number);




function paperwork(n, m) {

    return check = n < 0 || m < 0 ? 0: n * m;
        
    }
    
    console.log(paperwork(5,5));
    

    
  function paperwork(n, m) {
    return  n < 0 || m < 0 ? 0: n * m;
        
    }
    
    console.log(paperwork(5,5));


    //const check = n < 0 || m < 0 ? 0: n * m;function paperwork(n, m) {



   

  



    function peopleWithAgeDrink(old) {
  
       return  old < 14 ? "drink toddy" ? old > 14 && old < 18 : "drink coke": 'adwawd'
        
  
      };

      console.log(peopleWithAgeDrink(13));
      


      function chromosomeCheck(sperm) {
        if  (sperm.includes('Y'))
            return 'yes'
      }

      console.log(chromosomeCheck('XX'));
      





      function findNeedle(haystack) {
        return haystack.includes('needle') ? `found the needle at position ${haystack.indexOf('needle')}`: false;
      }



      function validateHello(greetings) {
       const gucci =  greetings.includes('ciao') ? 'yes' : 'no'
       return gucci
      }

      console.log(validateHello('ciao'));
      




      //function validateCode (code) {
       
       // return code.charAt(0) === 1 || code.charAt(1)(1) === 2 || code.charAt(2).search(2) === 3 ? true : false
        
        
        //}
//

      //  console.log(validateCode(123));
        





      function grader(score) {
        if (score >= 0.6 && score < 0.7) {
                   return "D"
               } else if (score >= 0.7 && score < 0.8) {
                   return "C"
               } else if (score >= 0.8 && score < 0.9) {
                   return "B"
               } else if (score >= 0.9 && score <= 1) {
                   return "A"
               } else {
                   return "F"
               }
       }

      console.log(grader(0.6));
      



      function nameShuffler(str){
        return str.split(' ').reverse().join(' ' )
        
      }



      console.log(nameShuffler('john McClane'));
      



      function validateHello(greetings) {
        if (greetings.toLowerCase().includes ('hello') ||
            greetings.toLowerCase().includes('ciao')   ||
            greetings.toLowerCase().includes('salut')  ||
            greetings.toLowerCase().includes('hallo')  ||
            greetings.toLowerCase().includes('ahoj')   ||
            greetings.toLowerCase().includes('hola')   ||
            greetings.toLowerCase().includes('czesc')  )
        {
                return true;
        } else {

            return false;
        }
      }


console.log('---------------');


      function differenceInAges(ages){

        return [Math.min(...ages),Math.max(...ages),Math.max(...ages) - Math.min(...ages)];
           
       }
       //min = infinity   
       //max = -Infinity
        //ages.sort((a, b) => a - b);
       
  //const ddd = [1, 2, 3,5,9,8];
        //console.log(Math.min(...ddd));
        //console.log(Math.min(1, 2, 3));
        //console.log(Math.max(...ddd));
        

       
         console.log(differenceInAges([82, 15, 6, 38, 35]));
       
       
      console.log('---------------');


         function tripleTrouble(one, two, three){
            let comb = ''
              for (i =0; i < one.length; i++) {
                comb += one[i] + two[i] + three[i]
                
        
              } return comb
            
           }
        
        
        
        
        console.log(tripleTrouble("Sea","urn","pms"));
        
   
        
        
   
     
        
      
        
        
        console.log('---------------');
        
        
        function doubleChar(str) {
            let comb = '';
            for (const r of str) {
              comb += r + r
            } return comb
          }
          
          console.log(doubleChar("String" ))
        
          //const doubleChar = (str) => str.split("").map(c => c + c).join("");


          console.log('---------------');




 function century(year) {   
   if (year % 100 === 0 ) {
    return year/100
   } else {
    Math.ceil(year/100)
   }
 }




 console.log('---------------');



 function magNumber(info){

    if (info[0] === "PT92" ) {
        return info[1] * 3 < 17 ? Math.ceil((info[1] * 3) / 17) : Math.ceil(info[1] * 3 / 17) ;
    } if (info[0] === "M4A1" ) {
        return info[1] * 3 < 30 ? Math.ceil((info[1] * 3) / 30) : Math.ceil(info[1] * 3 / 30) ;
    } if (info[0] === "M16A2") {
        return info[1] * 3 < 30 ? Math.ceil((info[1] * 3) / 30) : Math.ceil(info[1] * 3 / 30) ;
    } if (info[0] === "PSG1") {
        return info[1] * 3 < 5 ? Math.ceil((info[1] * 3) / 5) : Math.ceil(info[1] * 3 / 5) ;
    }
      

  }



console.log(magNumber(["PT92",6 ]));
console.log(magNumber(["M4A1",8 ]));
console.log(magNumber(["M16A2",19 ]));
console.log(magNumber(["PSG1",31 ]));
console.log(magNumber(["PT92",19 ]));





console.log('---------------');



function addLength(str) {

return  str.split(' ').map(word => word + ' ' + word.length);

}




console.log(addLength("apple ban"));
console.log(addLength("you will win"));


//const addLength = str => str.split(' ').reduce((acc, item) => [...acc, `${item} ${item.length}`] , [])  


console.log('---------------');


function findDifference(a, b) {

    return Math.abs(a.reduce((total, n) => total * n, 1) - b.reduce((total, n) => total * n, 1)) 
    
  }


console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
console.log(findDifference([7,21,2], [20,12,7]));

console.log('---------------');

function bmi(weight, height) {

    if (weight / height**2 <= 18.5 ) {
        return "Underweight";
    } if (weight / height**2 <= 25.0) {
        return "Normal"
    } if (weight / height**2 <= 30.0) {
        return "Overweight"
    } if (weight / height**2 > 30) {
        return "Obese"
    }
  }


  console.log(bmi(50, 1.80));
  console.log(bmi(80, 1.80));
  console.log(bmi(90, 1.80));
  console.log(bmi(100, 1.80));
  
  console.log('---------------');

  function switchItUp(number){

   switch (true) {

    case number === 0:
        return  'Zero'
    case number === 1:
        return  'One'
    case number === 2:
        return  'Two'
    case number === 3:
        return  'Three'
    case number === 4:
        return  'Four'
    case number === 5:
        return  'Five'
    case number === 6:
        return  'Six'
    case number === 7:
        return  'Seven'
    case number === 8:
        return  'Eight'
    case number === 9:
        return  'Nine'
       


   }
    }





    console.log(switchItUp(1));
    console.log(switchItUp(2));
    console.log(switchItUp(3));
    console.log(switchItUp(4));
    console.log(switchItUp(5));
    


    console.log('---------------');



    function xor(a, b) {
    return  a === true && b === true ? false : a === false && b === false ? false : true;
    // return a !== b;

    }


    console.log(xor(true, false));
    

console.log('---------------');


function multipleOfIndex(array) {
    newArr = [];
    for (i = 0; i < array.length; i++) {

        if (array[i] % i === 0 || array[i] === 0) {
           newArr.push(array[i]);
                
        }
      
    } return newArr
    
 
}

// return array.filter((el, idx) => el % idx === 0 | el === 0);

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));
console.log(multipleOfIndex([11, -11], [-11]));

console.log('---------------');


function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

// const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

  console.log(capitalizeWord('word'))


  console.log('---------------');


  function contamination(text,char){

   return text.split('').fill(char).join('')
    
  }

//  return char.repeat(text.length)
//   return text.replace(/./g, char);

  console.log(contamination("abc","z"));


  console.log('---------------');

  
  function position(letter){
  
    switch(letter) {
       case 'a': return "Position of alphabet: 1"
       case 'b': return "Position of alphabet: 2"
       case 'c': return "Position of alphabet: 3"
       case 'd': return "Position of alphabet: 4"
       case 'e': return "Position of alphabet: 5"
       case 'f': return "Position of alphabet: 6"
       case 'g': return "Position of alphabet: 7"
       case 'h': return "Position of alphabet: 8"
       case 'i': return "Position of alphabet: 9"
       case 'j': return "Position of alphabet: 10"
       case 'k': return "Position of alphabet: 11"
       case 'l': return "Position of alphabet: 12"
       case 'm': return "Position of alphabet: 13"
       case 'n': return "Position of alphabet: 14"
       case 'o': return "Position of alphabet: 15"
       case 'p': return "Position of alphabet: 16"
       case 'q': return "Position of alphabet: 17"
       case 'r': return "Position of alphabet: 18"
       case 's': return "Position of alphabet: 19"
       case 't': return "Position of alphabet: 20"
       case 'u': return "Position of alphabet: 21"
       case 'v': return "Position of alphabet: 22"
       case 'w': return "Position of alphabet: 23"
       case 'x': return "Position of alphabet: 24"
       case 'y': return "Position of alphabet: 25"
       case 'z': return "Position of alphabet: 26"
       
    }
  }

//  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);

  //position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

console.log(position("a"));


console.log('---------------');


function validPhoneNumber(phoneNumber){


    if (phoneNumber.length !== 14 
        || typeof phoneNumber !== 'string' 
        || phoneNumber.charAt(0) !== '(' 
        || phoneNumber.charAt(4) !== ')' 
        || phoneNumber.charAt(5) !== ' ' 
        || phoneNumber.charAt(9) !== '-' ) {
        return false;
   } else {
        return true;
   }

}

/*
function validPhoneNumber(phoneNumber){
  const num1 = phoneNumber.slice(1,4);
  const num2 = phoneNumber.slice(6,9);
  const num3 = phoneNumber.slice(10,14);
  
  return `(${num1}) ${num2}-${num3}` === phoneNumber

*/
  console.log(validPhoneNumber("(123) 456-7890"));
  console.log(validPhoneNumber("(1111)555 2345"));
  console.log(validPhoneNumber("(098) 123 4567"));
  

 

  console.log('---------------');


  let isValidMXPhoneNumber = function(str) {
  const gucci2  = str.replaceAll(')','').replaceAll('(','').split(' ')
    
    if (gucci2[0] === '56' || gucci2[0] === '55'   ) {
        return true;
    } else {
       return false;
    }


     //console.log(gucci2.length);



  };

    ///replace(/\D/g,'') 


  console.log(isValidMXPhoneNumber('(55) 84 65 52'));
  console.log(isValidMXPhoneNumber('56 84 65 52'));
  

  console.log('------------');
  

  function solution(n){
    return Math.round(n*2)/2;
  }

// Math.round(n*2)/2

  console.log(solution(4.2));
  console.log(solution(4.4));
  console.log(solution(4.6));
  console.log(solution(4.8));
  console.log(solution(4.4));
  


  console.log('--------------');
  


  function greet(language) {
	switch (language) {
        case "english": return "Welcome";
        case "czech": return "Vitejte";
        case "danish": return "Velkomst";
        case "dutch": return "Welkom";
        case "estonian": return "Tere tulemast";
        case "finnish": return "Tervetuloa";
        case "flemish": return "Welgekomen";
        case "french": return "Bienvenue";
        case "german": return  "Willkommen";
        case "irish": return "Failte";
        case "italian": return "Benvenuto";
        case "latvian": return "Gaidits";
        case "lithuanian": return "Sveiki atvykę";
        case "polish": return "Witamy";
        case "spanish": return "Bienvenido";
        case "swedish": return "Valkommen";
        case "welsh": return "Croeso"   ; 
        default: return "Welcome";
            
    }

    
  }


  console.log(greet("lithuanian"));
  

  console.log('-------------');



  
 function sumStrings(a,b) { 

 return (Number(a) + Number(b)).toString()


}


console.log(sumStrings('123','456'));


console.log('------------------');



function setAlarm(employed, vacation){
return employed === true && vacation === false ? true : false;



}

// return employed > vacation
// return employed && !vacation;



console.log('------------------');


function peopleWithAgeDrink(old) {
  return old < 14 ? "drink toddy" : old >= 14 && old < 18 ? "drink coke" : old >= 18 && old < 21 ? "drink beer" : "drink whisky";
};

// age < 14 ? "drink toddy" :
  //age < 18 ? "drink coke" :
  //age < 21 ? "drink beer" : "drink whisky"








console.log('------------------');


function updateLight(current) {
  
return current === 'green' ? 'yellow': current === 'yellow' ? 'red' : 'green';

}

console.log(updateLight('green'));
console.log(updateLight('yellow'));
console.log(updateLight('red'));



console.log('------------------');


function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`;
}



console.log(integrate(3,2));
console.log(integrate(12,5));
console.log(integrate(20,1));


console.log('------------------');



function grow(x){
  return x.reduce((total, n) => total * n, 1);

}

// let res = 1;
  //for (let i = 0; i < x.length; i++) {
 //  res *= x[i];
  //}

console.log(grow([2, 2, 2, 2, 2, 2]));


console.log('------------------');

function derive(coefficient,exponent) {

  return `${coefficient*exponent}x^${exponent-1}`;
  
}

console.log(derive(7,8));
console.log(derive(5,9));

console.log('------------------');


function checkForFactor (base, factor) {
  return base%factor === 0 ? true : false;
  
}


console.log(checkForFactor(10,2));
console.log(checkForFactor(9,2));


console.log('------------------');



function guessBlue(blueStart, redStart, bluePulled, redPulled) {
 return (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled);
}


console.log(guessBlue(5, 5, 2, 3));
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6));

console.log('------------------');





function reverse23(n){
  let dawd = []
for (let i = 0; i < n.length; i++) {
  
  dawd.push(n[i])
}
  
 return dawd

}

console.log(reverse23(123))
//console.log(reverse23())
//console.log(reverse23(123))

//(n.toString().split('').reverse().join(''))


console.log('------------------');

// Iterate backward over array elements
const numeralArray = [10, 20, 30, 40, 50];

for (let pos = numeralArray.length - 1; pos >= 0; pos--) {
  console.log(numeralArray[pos]);
}

console.log('------------------');



function reverse23232(n){
    
  if (n === undefined) {
     
     return false

 } else {

     return Number(n.toString().split('').reverse().join(''))
 }



}

//   /[a-z]/gi

console.log('------------------');


function sixToast(num) {
  return num === 6 ? 0 : num < 6 ? 6 - num : num - 6;
}

// return Math.abs(6 - num);

console.log('------------------');

function copyList(l){
   return [...t];
}
// return l.slice();
// return [].concat(l)

t = [1, 2, 3, 4]
console.log('------------------');


// Make them bark!
//Dog.prototype.bark = function() { 
  //return  "Woof!";
//}


console.log('------------------');
 
function isPythagoreanTriple(integers) {
 return integers[0]**2 + integers[1]**2 === integers[2]**2
  || integers[2]**2 + integers[1]**2 === integers[0]**2 
  || integers[2]**2 + integers[0]**2 === integers[1]**2 ? true: false;
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 5, 9]));
console.log(isPythagoreanTriple([100, 3, 999]));

console.log('------------------');

const alphabet = ['a',1,'b',2,'c',3,'d',4,'e',5,'f',6,'g',7,'h',8,'i',9,'j',10,'k',11,'l',12,'m',13,'n',14,'o',15,'p',16,'q',17,'r',18,'s',19,'t',20,'u',21,'v',22,'w',23,'x',24,'y',25,'z',26]


/*
function bingo(a) {
  let naujas = [];
  for (num of a ) {
      if (num === 2 || num === 9 ||  num === 14  ||  num === 7 ||  num === 15) {
          naujas.push(num)
      }
    } return naujas.filter((item, index) => naujas.indexOf(item) === index).length === 5 ? 'WIN':'LOSE'; 
}
*/

function bingo(a) {
  return a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15) ? 'WIN':'LOSE'; 
}



// [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
// const bingo = a =>[...`bingo`].every(val => a.includes(val.charCodeAt() - 96)) ? `WIN` : `LOSE`;

console.log(bingo([1,2,3,4,5,6,7,8,9,10]));
console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

console.log('------------------');


function countSheep (num){
  sheep = '';
 for (i = 1; i <= num; i++) {
    sheep += i + ' sheep...'
 } return sheep;
}

console.log(countSheep(3));

console.log('------------------');


// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.609344;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed * travelHours;
  const travelKms   = travelMiles % KM_PER_MILE;
  
  return travelKms 
}


console.log(travelDistance(600, 60));
console.log(travelDistance(800, 60));






console.log('------------------');

function boolToWord( bool ){
  return bool? 'Yes':'No';
}


console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')


console.log('------------------');


function squareSum(numbers){
  result = 0;
 for (const sqr of numbrs) {
    result += sqr**2;
 } return result;
}


/*

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

*/


//return numbers.reduce((sum,num) => sum + (num * num), 0);


console.log('------------------');

function removeChar(str){
  return str.slice(1,-1);
 
}
 console.log(removeChar('country'));
 

 /*

  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');

  */


  console.log('------------------');
  


 
  function findSmallestInt(arr) {

    return Math.min(...arr);
  }

  console.log(findSmallestInt([78,56,232,12,8]));

  console.log('------------------');


  function noSpace(x){
    return x.replaceAll(' ','')
  }
  // return x.replace(/\s/g, '');
  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B', '8j8mBliB8gimjB8B8jlB'));


  console.log('------------------');
 

function getSum(a, b)
{ sum = 0;
   sum2 = 0;
    for (let i = 0 ; i  < a; i++) {  
       
        sum = sum + i + i 

  } for (let i = 0 ; i  < b; i++) {  
       
    sum2 = sum2 + i + i

} return sum + sum2;
}


console.log((getSum(0,-1), -1));
console.log((getSum(0, 1),  1));
console.log((getSum(2, 2),  2));


console.log('-----------');

const textadw = "is2 Thi1s T4est 3a"
const newArr2 = textadw.split(' ')
let empty1 = [];
let empty2 = [];
let empty3 = [];
let empty4 = [];
let empty5 = [];
let empty6 = [];
let empty7= [];
let empty8 = [];
let empty9 = [];


//console.log(newArr2.find((element) => element >=9));

function order(words){
  //words.split(' ').sort((a,b)) 
}



console.log(order("is2 Thi1s T4est 3a"));


console.log('-----------');


function maps(x){
  return x.map(n => n * 2);
}

/*

function maps(x){
//return x.map(el => el * 2);
let arr = [];
for(let i = 0; i < x.length; i++){
arr.push(x[i] * 2);
}
return arr;
}

*/

console.log('-----------');

function isDivisible(n, x, y) {
  return  (n%x) + (n%y) === 0;
 }

 console.log('-----------');


 

 
 function sum5 (numbers) {
  return numbers.reduce((a, n) => a + n, 0)
}

console.log(sum5([1, 5.2, 4, 0, -1]))


console.log('-----------');



function betterThanAverage(classPoints, yourPoints) {
  return classPoints.concat(yourPoints).reduce((a, b) => a + b,0) / classPoints.length+1 < yourPoints
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));


console.log('-----------');


function countPositivesSumNegatives(input) {
   let pos = 0;
   let neg = 0;
   if (input === 0 || input.length === 0) {
    return [];
   }
  for (const counter of input) {
      if (counter > 0) {
        pos++
      } else if (counter < 0) {
        neg += counter
      }
  } return [pos,neg]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];


console.log('-----------');


function fakeBin(x){
  return x.split('').toSpliced(x<5)
}

console.log((fakeBin('45385593107843568')));

console.log('-----------');

//function removeExclamationMarks(s) {
   // return s.replace(/!/gi, '');
  //}


  console.log('-----------');


function sumMix(x){
  return x.map(Number).reduce((a,b) => a + b,0);
}
// return eval( x.join("+") )
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

console.log('-----------');

function monkeyCount(n) {
  count = [];
  for (i =1; i<=n; i++ ) {
    count.push(i)
  }
    
  return count
}

console.log((monkeyCount(5)));

console.log('-----------');


function getAge(inputString){
  return Number(inputString.slice(0,1));
}
// return Number(inputString.split(' ').at(0));
//  return parseInt(inputString);

console.log((getAge("4 years old")));
console.log((getAge("9 years old")));


console.log('-----------');


function getChar(c){
  return String.fromCharCode(c);
}

console.log('-----------');



function binToDec(bin) {
  return  bin = parseInt(bin, 2);


 }
 console.log(binToDec(['1001001', 73],));


 console.log('-----------');

// https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

function remove (str) {
  
 if (str.charAt(str.length - 1) === '!') {
  return str.split('').reverse().join('').replace('!','').split('').reverse().join('');
 } else {
  return str
 }

}
// return s.replace( /!$/, '') 
// return str.charAt(str.length - 1) === '!' ? str.split('').reverse().join('').replace('!','').split('').reverse().join('') : str;
//  return s.endsWith('!') ? s.slice(0, -1) : s;
//  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;

		console.log(remove("Hi!!!"));
		console.log(remove("!Hi"));
		console.log(remove("!Hi!"));
		console.log(remove("Hi! Hi!"));
		console.log(remove("Hi"));

   

  console.log('----------------');
  
    
  function solution(string) {
    const str = string.toString().split('')
    let sum = 0;
   for (i=0; i<str.length; i++) {
          if (str[i] === str[i].toUpperCase()) {
            sum = i
          }
   }
        return sum;

  }


  console.log(solution("camelCasing"))       //, "camel Casing");
  console.log(solution("camelCasingTest"))  //, "camel Casing Test",);


  console.log('----------------');


// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
  function abbrevName(name){
    return name.toUpperCase().split(' ').reduce((a,b) => a[0]+ '.' + b[0]);
    }
// return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// return name.match(/\b\w/g).join('.').toUpperCase()

    console.log(abbrevName("Sam Harris"), "S.H");


    console.log('----------------');


    function digitize(n) {
      return String(n).split('').reverse().map(Number);
    }

    console.log(digitize(35231),[1,3,2,5,3]);

    console.log('----------------');
    // https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
    function fakeBin(x){
      let result = '';
      for (const q of x) {
        if (q < 5) {
          result+= 0;
        }

        if (q >= 5) {
          result+= 1;
        }
      } return result;

    }       

    //  return x.split('').map(n => n < 5 ? 0 : 1).join('');
    //  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
    //  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
    // (i < 5)? result += '0' : result +='1';


    console.log(fakeBin('45385593107843568'), '01011110001100111');
    
    console.log('----------------');

    // https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

    function cockroachSpeed(s) {
       return Math.floor(s / 0.036);
    }


     console.log('----------------');

    // https://www.codewars.com/kata/5266876b8f4bf2da9b000362
      
     function likes(arr) {
      if(arr.length === 0) {
          return 'no one likes this';
      }
      if(arr.length === 1) {
          return `${arr[0]} likes this`;
      }
      if(arr.length === 2) {
          return `${arr[0]} and ${arr[1]} like this`;
      }
      if(arr.length === 3) {
          return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
      }
      if(arr.length >= 4) {
          return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
      }
  }
     
     console.log(likes([]));  
     console.log(likes(["Peter"]));
     console.log(likes(["Jacob", "Alex"]));
     console.log(likes(["Max", "John", "Mark"]));
     console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
/* 

function likes(names) {
      
      switch(names.length){
        case 0: return 'no one likes this';
        case 1: return `${arr[0]} likes this`;
        case 2: return `${arr[0]} and ${arr[1]} like this`; 
        case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`; 
        default: return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
      }
    }
*/
     console.log('----------------');

    // https://www.codewars.com/kata/57f222ce69e09c3630000212

     function well(x){
      q = x.filter(t => t === 'good').length;
      return q === 0 ? 'Fail!' : q > 2 ? 'I smell a series!' : 'Publish!';
  
  }
  
  /*
  function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}
*/


    console.log(well(['bad', 'bad', 'bad']))
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

console.log('----------------');

// https://www.codewars.com/kata/586c1cf4b98de0399300001d

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
} 

// return Math.max(0, health - damage);

console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, "Health cannot go below 0");

console.log('----------------');

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript
function order(words){
    const wrd = words.split(' ');
    let wrd1 = '',wrd2 = '', wrd3 = '', wrd4 = '',wrd5 = '', wrd6 = '',wrd7 = '', wrd8 = '', wrd9 = '';
    
    for (const num of wrd) {
     if (num.includes('1')) wrd1 += num;
     if (num.includes('2')) wrd2 += num; 
     if (num.includes('3')) wrd3 += num; 
     if (num.includes('4')) wrd4 += num; 
     if (num.includes('5')) wrd5 += num; 
     if (num.includes('6')) wrd6 += num; 
     if (num.includes('7')) wrd7 += num; 
     if (num.includes('8')) wrd8 += num; 
     if (num.includes('9')) wrd9 += num; 
    
     } return `${wrd1} ${wrd2} ${wrd3} ${wrd4} ${wrd5} ${wrd6} ${wrd7} ${wrd8} ${wrd9}`.trim()
}

  /*
  const order = words => words ? words.split(' ').sort((a,b) => a.match(/\d/) - b.match(/\d/)).join(' ') : '';
  */
 console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
 console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
 console.log(order(""), "", "empty input should return empty string" )





 console.log('----------------');

 function solution(s) {
  return String(s).split('').filter((q,i) => q.toUpperCase() === i)

 // String(s).split('').join(' ')
}



console.log(solution(""));
console.log(solution("camelCasing"));
console.log(solution("camelCasingTest"));




console.log('----------------');

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //return birds.filter(q => geese.includes(q)? false: true);
  let noGoose = [];
  for (const bird of birds) {
      if (!geese.includes(bird))  {
        noGoose.push(bird)
      } 
      
  } return noGoose;
  
};

// (bird === "African" || bird === "Roman Tufted" || bird === "Toulouse" || bird === "Pilgrim" || bird === "Steinbacher" )

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);


console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);


console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);

console.log('----------------');

function evenn(num2323,pos) {
  let numbs = []
  for (let i = num2323.length; i >= pos-1 ; i--) {
      
       if (num2323[i] % 2 === 0) {
        numbs.push(num2323[i])
        
       }
    
  } return numbs.filter((item, index) => numbs.indexOf(item) === index)


}
console.log(evenn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenn([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenn([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
////
// num.length -pos+1



console.log('----------------');


function pillars(numPill, dist, width) {
  return numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0;
}

  console.log(pillars(1, 10, 10) , 0);
 

  console.log(pillars(2, 20, 25) , 2000);

  console.log(pillars(11, 15, 30) , 15270);


console.log('----------------');

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1)* (nRows-row);
}


console.log(seatsInTheater(16,11,5,3) , 96)

console.log(seatsInTheater(1,1,1,1) , 0)

console.log(seatsInTheater(13,6,8,3) , 18)

console.log(seatsInTheater(60,100,60,1) , 99)

console.log(seatsInTheater(1000,1000,1000,1000) , 0)




console.log('----------------');




function quadratic(x1, x2){
  return [1, -(x1+x2), x1*x2];
}



    console.log(quadratic( 0,  1), [1, -1,   0]);
    console.log(quadratic( 1,  1), [1, -2,   1]);
    console.log(quadratic(-4, -9), [1, 13,  36]);
    console.log(quadratic(-5, -4), [1,  9,  20]);
    console.log(quadratic( 4, -9), [1,  5, -36]);
    console.log(quadratic( 5, -4), [1, -1, -20]);



console.log('----------------');


function drawStairs(n) {

//return `${I}\n I\n  I`

}
     //${w.repeat(1)}\n${w.repeat(2)}\n${w.repeat(3)}\n${w.repeat(4)}\n${w.repeat(5)}`


              

 console.log(drawStairs(1),)
 console.log(drawStairs(3),)
 console.log(drawStairs(5),)


 console.log('----------------');


/*
 var t = typeof x
 var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'

 return `Who ate the last cookie? It was ${who}!`

 */

 console.log('----------------');


 function sc(floor){
  if (floor <= 1) return "";
  if (floor > 6) return 'Aa~ '.repeat(floor-1) + 'Pa!';
  return 'Aa~ '.repeat(floor-1) + 'Pa! Aa!';  
  
 }
 //return floor <=1 ? "" : floor > 6 ? 'Aa~ '.repeat(floor-1) + 'Pa!' : 'Aa~ '.repeat(floor-1) + 'Pa! Aa!';

//   return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');

    console.log(sc(2), "Aa~ Pa! Aa!");  
    console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"); 
    console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"); 
    console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"); 
    console.log(sc(1), ""); 
    console.log(sc(-1), "");   



    console.log('----------------');


    function animal(obj){
      return `This ${obj.color} ${obj["name"]} has ${obj.legs} legs.`
    }



    console.log('----------------');

   function howManydays(month){
  let n = month;
  switch (month){
  case 2: n= 28; break;
  case 4: n= 30; break; 
  case 6: n= 30; break; 
  case 9: n= 30; break; 
  case 11: n= 30; break;
  default: n=31; 

  } return n;
  
}

/* function howManydays(month){
  switch (month){
     case 2: return 28
     case 4:
     case 6:
     case 9:
     case 11: return 30
  }
  return 31
}

*/

/*
  if ([1,3,5,7,8,10,12].includes(month)) {
    return 31;
  }
  if ([4,6,9,11].includes(month)) {
    return 30;
  }
  return 28;

  */
    console.log(howManydays(1),31);
    console.log(howManydays(2),28);
    console.log(howManydays(3),31);
    console.log(howManydays(4),30);
    console.log(howManydays(12),31);


    console.log('----------------');

    function grabDoll(dolls){
      const bag=[];
    for (const doll of dolls) {
      
      if (doll=== "Hello Kitty" || doll=== "Barbie doll") {
        bag.push(doll);
      } else continue;
      
      if (bag.length === 3) {
        break;
      }
   }
        return bag;
 }

 /*
 if (!['Hello Kitty', 'Barbie doll'].includes(d)) {
      continue;
      */

   console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"]);
   console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"]);
   console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), ["Hello Kitty", "Hello Kitty", "Barbie doll"]);
   console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Barbie doll", "Hello Kitty", "Hello Kitty"]);

   console.log('----------------');

   const gucci13232 = [ [ 1, 2, 3, 4, 5 ],       
 [ 5, 6, 7, 8, 9 ],      
 [ 20, 21, 34, 56, 100 ]  
]

console.log(Math.min(...gucci13232[0]) + Math.min(...gucci13232[1]) + Math.min(...gucci13232[2]));



console.log('----------------');

function fiveLine(s){
 const w = s.trim();
 return `${w.repeat(1)}\n${w.repeat(2)}\n${w.repeat(3)}\n${w.repeat(4)}\n${w.repeat(5)}`
}

console.log(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");




//console.log(`a\naa\naaa\naaaa\naaaaa`);






 console.log('----------------');



 function isIsogram(str){
  const strNew = str.toLowerCase();

  strNew.filter()

}








function findOdd(A) {
  let count9 = [];
  return A.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);
    
  } 





console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));




function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
 
	return compressed;
};


var testArray = new Array("dog", "dog", "cat", "buffalo", "wolf", "cat", "tiger", "cat");
var newArray = compressArray(testArray);
 

console.log('----------------');

// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let result = 0;
 for (const game of games) {
      if (game[0]>game[2]) result+=3;
      if (game[0]===game[2]) result+=1;
      if (game[0]<game[2]) result+=0;

 } return result;

}
//   return games.map(el => +el[0] > +el[2] ? 3 : +el[0] === +el[2] ? 1 : 0).reduce((a,b)=> a+b, 0)

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);

console.log('----------------');

// https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

function DNAtoRNA(dna) {
  return dna.replaceAll('T','U');
}

console.log(DNAtoRNA("TTTT"), "UUUU")

//  return dna.replace(/T/g, 'U');
//  return dna.split("T").join("U");

console.log('----------------');

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
  const s= (s1+s2+s3)/3;
  return s>=90&&s<=100? 'A': s>=80&&s<90? 'B': s>=70&&s<80? 'C': s>=60&&s<70? 'D':'F';
}


console.log(getGrade(95,90,93), 'A')


console.log('----------------');

// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript

const alphabetEn = "abcdefghijklmnopqrstuvwxyz".split('')
//console.log(alphabetEn);

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(games) {
  const alphabetEn = "abcdefghijklmnopqrstuvwxyz";
  let result = '';
  for (i=0;i<games.length;i++) {
    if (alphabetEn.includes(games.toLowerCase()[i])) {
       result += ' ' + ((alphabetEn.indexOf(games.toLowerCase()[i]) +1 ));
       
      
    }
    
  } return result;

}
// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "**** 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "**** 20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");



 console.log('----------------');

// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

 function rentalCarCost(d) {

  return d<3? d*40: d>=3&&d<7? (d*40)-20:(d*40)-50;

  } 





console.log('----------------');

  console.log(rentalCarCost(1), 40);
  console.log(rentalCarCost(2), 80);
  console.log(rentalCarCost(3), 100);
  console.log(rentalCarCost(4), 140);
  console.log(rentalCarCost(7), 230);
  console.log(rentalCarCost(8), 270);


  console.log('----------------');


  //return dna.replace(/T/g, 'U');

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

  function dnaStrand(dna){
    let res= '';
    for (let i = 0; i < dna.length; i++) {

        if (dna[i]==='A') res+='T';
        
        if (dna[i]==='T') res+='A';
        
        if (dna[i]==='C') res+='G';
        
        if (dna[i]==='G') res+='C';
        
      
    } return res;
      
  }

  console.log(dnaStrand("AAAA"),"TTTT","String AAAA is")
  console.log(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
  console.log(dnaStrand("GTAT"),"CATA","String GTAT is")

  console.log('----------------');

  // https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

  function sumArray(ar) {
    return ar != null && ar.length >2 ? ar.sort((a,b)=>a-b).slice(1, -1).reduce((a,b)=>a+b): 0;
  } 


  console.log(sumArray(null)                     , 0 );
  console.log(sumArray([ ])                      , 0 );
  console.log(sumArray([ 3 ])                    , 0 );
  console.log(sumArray([ 3, 5 ])                 , 0 );
  console.log(sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  console.log(sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  console.log(sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  console.log(sumArray([ -6, 20, -1, 10, -12 ])  , 3 );

  console.log('----------------');

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
function reverseWords(str) {
  
  return str.split('').reverse().join('').split(' ').reverse().join(' ')
    
}

/*
function reverseWords(str) {
  let reversedWord = '';
  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + ' ';
      reversedWord = '';
    }
  }
  return reversedStr + reversedWord;
}
*/
    console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
    console.log(reverseWords('apple'));
    console.log(reverseWords('a b c d') );
    console.log(reverseWords('  double  spaced  words  '));


    console.log('----------------');

  // https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

    function filter_list(l) {
      return l.filter(t => typeof t === 'number');
    }
    



    console.log(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
    console.log(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
    console.log(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]')

    console.log('----------------');

    // https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript

    function alphabetized(s) {
      return s.toLowerCase().localeCompare(s.toLowerCase()) //;split('').sort()


    }





    console.log(alphabetized('The Holy Bible'), 'BbeehHilloTy')

    console.log('----------------');
    
    // https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

    function replaceAll(seq, find, replace) {
      //return typeof seq==='string'? seq.split('').map(a => a===find? a=replace:a).join(''): seq.map(a => a===find? a= replace :a);
      return typeof seq==='string'? seq.replaceAll(find,replace).join(''): seq.toString().replaceAll(find,replace).split(',').map(Number);

    }
    


    console.log(replaceAll([], 1, 2), []);
    console.log(replaceAll([1,2,2], 1, 2), [2,2,2]);
  
    console.log('----------------');

    // https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

    function feast(beast, dish) {
        return beast[0]===dish[0]&&beast.at(-1)===dish.at(-1);
        //   return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
        //   return beast.at(0) == dish.at(0) && beast.at(-1) == dish.at(-1)
    }
console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)


console.log('----------------');

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN (pin) {
 
      if (pin.length===4||pin.length===6) {
        return /^[0-9]+$/.test(pin);
      }   else return false;
    }  


   

  // return /^\d+$/.test(pin)
  //  return /^(\d{4}|\d{6})$/.test(pin)

  /*
  function validatePIN (pin) {
  //return true or false
	var n = pin.length;
  if( n != 4 && n != 6)
  		return false;
  for (var i in pin)
  		if (pin[i] > '9' || pin[i] < '0')
      		return false;
  return true;
}
  */

/*

function validatePIN (pin) {
  let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let count = 0;
  let pinArr = pin.split('');
  for (let i of pinArr) {
    if (num.includes(i)) {
      count += 1;
    } else {
      return false;
    }
  }
  return count == 4 || count == 6;
}
  */

/*

function validatePIN(pin) {
  const regex = /[^0-9]/; 
  
  if ((pin.length === 4 || pin.length === 6) && !regex.test(pin)) {
    return true;
  } else {
    return false;
  }
}

*/

/*

  return pin.split('').some(element => isNaN(parseInt(element))) ? false : pin.length === 4 || pin.length === 6
  */

 /*
 function validatePIN (pin) {
  //return true or false
  
    // Check if the length of pin is either 4 or 6
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  
  let result = Array.from(pin).every( p => p >= '0' && p<='9')
  return result
  
}
*/
console.log(validatePIN("1234567"),false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"),false, "Wrong output for '-1234'")
console.log(validatePIN("123456"),true, "Wrong output for '123456'");
console.log(validatePIN("098765"),true, "Wrong output for '098765'");
console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'")

console.log('----------------');

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){
  return arr.filter((t,i)=> i % 2===0);
  /*const arr2 = [];
  for (let i = 0; i < arr.length; i++ // i = 0; i < arr.length; i+=2) {
     if (i%2===0) 
      arr2.push(arr[i])
   */ 
  } 



    console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
    console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

console.log('----------------');

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
    

}   return result;
}

console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);

console.log('----------------');

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/javascript

String.prototype.isUpperCase = function(text) {
  return this.toUpperCase() === this.toString();
}


    console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

console.log('----------------');

// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n){
  const result = [];

  for (let i = 0; i <=n; i++) {
    result.push(2**i)
    
  } return result;
   
}
// var powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i));
// const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i )


   console.log(powersOfTwo(0), [1])
   console.log(powersOfTwo(1), [1, 2])
   console.log(powersOfTwo(4), [1, 2, 4, 8, 16])


console.log('----------------');

//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

function toJadenCase() {
  //return this.split(' ').map(a=>a[0].toUpperCase() + a.slice(1)).join(' ');

}




  //  function toJadenCase(text) {
  //   const q = text.split(' ')
  //   let res = [];
    
    
  //    for (let i = 0; i < q.length; i++) {
      
  //      res.push(q[i][0].toUpperCase() + q[i].slice(1).toLowerCase());
      
      
  //    } return res.join(' ');
  //  }




console.log(toJadenCase("most trees are blue", "Most Trees Are Blue"));
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));


console.log('----------------');

// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
  const arr3= arr1.concat(arr2);
return arr3.filter((a,i)=> arr3.indexOf(a) === i).sort((a,b)=> a-b);

}
//  return Array.from(new Set([...arr1,...arr2])).sort((a,b)=>a-b);
//   return [...new Set([...arr1, ...arr2])].sort((a,b)=>a-b)


/*
function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return [];
  }
  for(let i = 0; i < arr2.length; i++) {
    if(!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1.sort((a, b) => a - b);
}


*/

/*

unction mergeArrays(arr1, arr2) {
   for (var i = 0; i < arr1.length ; i++) {
     for (var j = 0; j < arr2.length; j++) {
       if (arr1[i] === arr2[j]) {
         arr2.splice(j, 1);
       }
     }
   }
  var result = arr1.concat(arr2);
  return  result.sort(function(a, b){return a - b})
}
*/

console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]);
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]);
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]);

console.log('----------------');


function correct(string){

  return string.replaceAll('0','O').replaceAll('1','I').replaceAll('5','S');
   
  
} 

//s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
/*
const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};

const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);
*/

    console.log(correct("L0ND0N"),"LONDON");
    console.log(correct("DUBL1N"),"DUBLIN");
    console.log(correct("51NGAP0RE"),"SINGAPORE");
    console.log(correct("BUDAPE5T"),"BUDAPEST");
    console.log(correct("PAR15"),"PARIS");

    console.log('----------------');



    function sumStr(a,b) {
  
      return Number(a) + Number(b) + '';

    }

    //  return String(Number(a)+Number(b));
    //   return (+a+ +b)+''  
    console.log(sumStr("4","5"), "9");
    console.log(sumStr("34","5"), "39");
    console.log(sumStr("","11"), "11");
    console.log(sumStr("",""), "0");


    console.log('----------------');


    // function oddCount(n){
    //   const arr = [];
    //   for (let i = 1; i < n; i++) {
    //       if (i%2===0) {
    //         arr.push(i);
    //       }
        
    //   } return arr.length;

    // }

    
    function oddCount(n){
      
      return Math.floor(n/2);

    }

    //   return (n%2==0) ? n/2 : (n-1)/2;
   


    console.log(oddCount(15), 7, "Oops! Wrong.");
    console.log(oddCount(15023), 7511, "Oops! Wrong.");

    console.log('----------------');
