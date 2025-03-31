/*
For (LOOP) - Ciklas

*/

for (let i = 0; i < 5; i++) {
console.log('a) number: ',i);
}

console.log('----------------------------');

//console.log('number', 0);
//console.log('number', 1);
//console.log('number', 2);
//console.log('number', 3);
//console.log('number', 4);
//console.log('number', 5);
//console.log('number', 6);
//console.log('number', 7);


for (let i = 0; i <= 5; i++) {
    console.log('b) number: ',i);
    }   

console.log('-----------------');


for (let i = 5; i >= 0; i--) {
    console.log('c) number: ',i);
    }   

console.log('-----------------');


let k = 5;
k = k + 1;
k += 1;
k++;
++k;


let m = 5;
m = m - 1;
m -= 1;
m--;
--m;

// 

for (let i=0; i<11; i+=2) {
console.log('kas du:', i );

}   

console.log('-------------');


for (let k= 0; k< 11; k += 2) {
    console.log(k );
    
    }   


    for (let k= 0; k< 1; k += 0.1) {
        console.log(k );
        
        }   

        console.log('-------------');

 for (let k= 0; k< 10; k++) {
     console.log(k/10 );
            
  }   

  console.log('-------------');

  console.log(0.1 + 0.2);
  console.log((10+20)/100);
  console.log((399+20)/100);
  

  console.log('labas');
  console.log('labas');
  console.log('labas');
  console.log('labas');

  console.log('-----------');
  

  for (let i = 0; i <= 4; i++) {
    console.log('Labas');
    
  }

  console.log('-----------');

  const n = 7;
  console.log(` ${n} * 1 = ${n * 1 } `);
  console.log(` ${n} * 2 = ${n * 2 } `);
  console.log(` ${n} * 3 = ${n * 3 } `);
  console.log(` ${n} * 4 = ${n * 4 } `);
  




  console.log('-------------');
  
for (let i = 1; i<= 10; i++) {
    console.log(` ${n} * ${i} = ${n * i } `);
}


console.log('---------------------');

for (let i = 1; i<= 10; i++) {
    console.log(` ${n} * ${i} = ${n * i } `);
}

console.log('------------');


const marks  = [10,2,8,4,6]

let sum = 0

sum += marks[0]
sum += marks[1]
sum += marks[2]
sum += marks[3]
sum += marks[4]

console.log(sum);
let sum2 = 0
for (let i=0; i<5; i++) {
console.log('index', i, '--->', marks[i]);
sum2 += marks[i];
}

console.log(sum2);

/*geresnis variantas: su marks.length
console.log(sum);
let sum2 = 0
for (let i=0; i<marks.length; i++) {
console.log('index', i, '--->', marks[i]);
sum2 += marks[i];
}

*/

//stuento vardas yra "Vardas"
const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];


for (let i=0; i < names.length; i++){
    console.log(names[i]);
    const s = `Studento vardas yra ${names[i]}. `;
    console.log(s);
    
}

//vardas "Vardas" yra suarytas is N raidziu

for (let i = 0; i<names.length; i++) {
    const name = names[i];
   const s = `Vardas "${name}" yra suarytas is ${names.length} raidziu`
    console.log(s);
    
    
    
}





