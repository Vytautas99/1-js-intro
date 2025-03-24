/*
IF - palyginimo savyga

Palyginimo operatoriai:
- visi: >, <, >=, <=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if ()
if () {} else if () else {}
if () {} ... else if () ...
if () {} ... else if () ... else {}

*/

    if (4 < 2 ) {


    console.log('-----taip');

} else {
    console.log('------ne');
    
}



console.log('------------------------------');

const temp = -2;

if (temp >= 18) {
    console.log('silta');
    } else { console.log('salta');
    }



// jei zemiau 0 = salta
// jei zemiau 10 = meh 
// jei zemiau 22 = silta
// jei daugiau = karsta

const temp2 = 9; 

if (temp2 < 3 ) {
    console.log('salta')
} else if (temp2 < 10) {
    console.log('meh');
  }  else if (temp2 < 22) {
        console.log('silta');
     }  else {
         console.log('karsta');
            
     }

console.log('------------------------------------------');

const clientValue = 4;
if (4 !== clientValue ) {
    console.log('tenkina');
    
} else {
    console.log('NE-tenkina');
    
}

