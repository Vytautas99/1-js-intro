

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
