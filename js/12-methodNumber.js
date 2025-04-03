/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/


// isInteger()



//isSafeInteger() - ar skaicius nevirsija javacsript limito.

console.log(Number.MAX_SAFE_INTEGER+1);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.POSITIVE_INFINITY);

console.log('-------------');

console.log(isFinite(5),Number.isFinite(5));
console.log(isFinite(-3.14),Number.isFinite(-3.14));
console.log(isFinite(Infinity),Number.isFinite(Infinity));
console.log(isFinite(NaN),Number.isFinite(NaN));
console.log(isFinite('asdawda')),Number.isFinite('dawdaawd');
console.log(isFinite(true),Number.isFinite(true));
console.log(isFinite([]),Number.isFinite([]));
console.log(isFinite({}),Number.isFinite({}));


if (Number.isFinite()) {
    
}
console.log('-------------------');

console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger([]));


console.clear()
console.log('-------------------');


console.log(Number.isNaN(5),isNaN(5));
console.log(Number.isNaN(3.14),isNaN(5));
console.log(Number.isNaN(Infinity),isNaN(5));
console.log(Number.isNaN(NaN),isNaN(5));
console.log(Number.isNaN(-NaN),isNaN(5));


console.log(Number.isNaN('awdawd'),isNaN('awdawd'));

console.log(Number.isNaN([]),isNaN([]));
console.log(Number.isNaN({}),isNaN({}));


if (typeof a === 'number') {
    
}


console.log('-------');

// parseInt - dirba su sveikaisiais skaiciais

const userInput = '22';
const date = userInput + 5;
const  userNumber = parseInt(userInput);
const date1 = userNumber + 5;
console.log(date1);



console.log(parseInt('65'));
console.log(parseInt('65.3'));
console.log(parseInt('65'));


console.log(parseInt('awdawd'));
console.log(parseInt('awdawd1111'));
console.log(parseInt('1111awdawd1111'));
console.log(parseInt('1111awdawd2222'));
console.log(parseInt('1111awd3333awd1111'));
console.log(parseInt('1111awdawd1111'));
console.log(parseInt('2.5'));
console.log(parseInt('2,5'));


console.log(parseInt(true));
console.log(parseInt(''));
console.log(parseInt(['222'],));

console.log(parseInt('1111awdawd2222'.replace('awdawd','')));



console.log(parseInt('1111labas2222'.split('labas')));




// parseFloat * dirba su desimtainiais skaciais ir sveikaisiais


console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('-44,4'));


console.log(parseFloat('56.4labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('56.4labaawdawd56456awd65156s'));
console.log(parseFloat('56.26.25'));
console.log(parseFloat('--5'));
console.log(parseFloat('+5+5'));
console.log(parseFloat('++55'));


console.clear()
console.log('------');

const b = 12.365659
console.log(b);
console.log(typeof typeof typeof b );



const c = b.toFixed(4);
console.log(b);
console.log(typeof c);


const d = parseFloat(c);
console.log(d);
console.log(typeof d);


console.log(12.3455789.toFixed(5));
console.log(12.3455789.toFixed(4));
console.log(12.3455789.toFixed(3));
console.log(12.3455789.toFixed(2));
console.log(12.3455789.toFixed(1));
console.log(12.3455789.toFixed(0));


console.log(3.14.toFixed(0));
console.log(3.14.toFixed(1));
console.log(3.14.toFixed(2));
console.log(3.14.toFixed(3));
console.log(3.14.toFixed(4));
console.log(3.14.toFixed(5));
console.log(3.14.toFixed(6));


