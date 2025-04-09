

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



    console.log((23.59,59 - 12.00)*600000)

  