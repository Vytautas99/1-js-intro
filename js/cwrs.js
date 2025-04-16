

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
 
  function abbrevName(name){

    //return name.replace(' ','.').charAt(indexOf('.'))
}
//.toUpperCase().slice(name.indexOf())
console.log(abbrevName("Sam Harris"));




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



  