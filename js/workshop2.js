//                          04-01 for ir funkcijos


// 1. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų
// atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).

const cities = ['Kaunas', 102,'Klaipeda',312,'Palanga',326,'Kretinga',314,'Utena',95,'Zarasai',143,'Skuodas',360,'Plunge',287,'Nida',361,'Jonava', 106]

console.clear()
console.log('------------------');

// a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x
// km/h greičiu per y valandų


95,102,106,143,287,312,314,326,360,361


function citiesDistance(speed,hours) {

    let multiplyResult = speed*hours;
     
   for (let i = 0; i < cities.length; i+=2) {
          
          const city = cities[i];
          const distance = cities[i+1];
          const bigNum = 362;
       if (multiplyResult < bigNum || multiplyResult < distance ) {
            
           return `Per ${hours} valanda/s vaziuodami ${speed} km/h greiciu toliausiai nuvaziuosite iki "${city }" miesto.`
           
       }
       
        
       } 
   } 
   

   console.log(citiesDistance(70,3));


 //return `Per ${hours} valandas vaziuodami ${speed} km/h greiciu toliausiai nuvaziuosite iki "${city}//" miesto.`

   
console.log('-------');

/*
   function citiesDistance1(speed,hours) {
    
    let multiplyResult = speed*hours;
    let biggestNum = cities[1]
    let result = 0;
    let max = Math.max(cities)

   for (let i = 1; i < cities.length; i+=2) {
          
    //if (Math.round(multiplyResult) ) {
        
    //}
        
       } return `Per ${hours} valandas vaziuodami ${speed} km/h greiciu toliausiai nuvaziuosite iki "${result}" miesto.`
   } 





   console.log(citiesDistance1(60,3));

*/


function stringToNumber(str){
    let num = ''
    if (str === 'number') {
      num = num + str;
    }
    return str * 1  
  }
  
  console.log(stringToNumber("2"))


  
/*
  function invert(array) {
    let result = [];
     for (i = 0; i < array.length; i++) {
       result.push(-array[i])
       
     } return result;
  }
  
  
  console.log(invert([1, 2, 3, 4, 5]));
  console.log(invert([1, -2, 3, -4, 5]));
  console.log(invert([]));

*/


function reverse(numbers) {
    let result = []
     for (i = numbers.length -1; i >= 1; i--) {
      result = numbers[i] + result
       
       
     } return result
  }
  
  (reverse(123));
  
  

  function reverseSeq (n) {
    let result = ''
    const arr = []
    const str = String(n);
    for (i = 1 ; i <= n; i++) {
        arr.push(Number(str[i]));
      
      
     
    } return [arr]
  };
  
  console.log(reverseSeq(5));









  function solution(str, ending){

    if (str.endsWith(ending)) {

        return true;
        
    } else {
        return false;
        
    }
  }
  
  console.log(solution('abc','bc'))
  console.log(solution('abc','d'))







  //for (let a = 10 - 1; a >= 1; a--) {   - atvirkstinis ciklo formule
    //console.log(a);
    
          
   //}











   //list[i] > biggest) {
    //biggest = list[i]

//console.log(cities[3]);





// b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x
// valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h)






// c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume
// nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų.
// Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia.
// Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų








// d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui:
// geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame
// paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o
// taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri
// pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki
// kiekvieno miesto.



function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n -2);
    countArray.push(n );
    return countArray;
  }
}
console.log(countup(5));

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

console.log(countdown(5));



const reverseSeq1 = n => {
  return Array.from({ length: n }, (_, i) => n - i)
};

console.log(reverseSeq1(5));


function reverseSeq3 (n) {
  let array = [];
    for (let i=n; i>0; i--) {
      array.push(i);
      } return array;
  };

  console.log(reverseSeq3(5));
  

  function getSum(a,b){
    if (a === b){
      return a;
    }else if (a > b){
      return a + getSum(a-1,b)
    } else {
      return a + getSum(a+1,b)
    }
  }
  
  
  console.log(getSum(-1,2));
  

console.clear()
  // 2. Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų
// skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą [1, 1, 2, 3, 3, 3, 4] rezultatas
// būtų gaunamas toks: 1: ** ; 2: * ; 3: ***; 4: * 


const nums = [1, 1, 2, 3, 3, 3, 4];

function integerNum () {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      console.log(i);
      
    }
    
  }


}

const result = nums.filter(() => nums.length > 6);

let newtest = "The-stealth-warrior";

 const firstWord = newtest.replace(0,'adwd')
console.log(firstWord);
