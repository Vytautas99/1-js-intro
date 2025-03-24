/*
STRING - tekstas, simboliu grandnele
tekstines reiksmes iniciavimas:
- ' (vienguba kabute)
- " (dviguba kabute)
- ` (backtick)

Specialieji simboliai:
- \  ( privercia sekanti simboliu buti spausdintinu terminale)
- \r (return, kursorius grizta i eilutes pradzia)
- \n (new line, kursorius nusileidzia viena eilute zemyn)
- \t (tab)
- ir kiti
*/

const a = "Labas"
console.log(a);

let b = "Rytas"
console.log(b);

b = 'diena'
console.log(b);

//const name = 'jonas';

// vienguba (') kabute.

const k1 = "vienguba (') kabute";
console.log(k1);

// dviguba  (') kabute
const k2 = 'vienguba (") kabute';
console.log(k2);



const name = "Jonas";
const surname = "Jonaitis";

const fullname = name + ' ' +  surname;
console.log(fullname);

// vienguba (') ir dviguba (") kabutes.
const k12 = "vienguba (') ir" + 'dviguba (") kabutes';
console.log(k12);


// vienguba (') kabute.

const k3 = 'vienguba (\') kabute.';
console.log(k3); 

// vienguba (") kabute.
const k4 = "dviguba (\") kabute.";
console.log(k4);

// vienguba (') ir dviguba (") kabutes.

 //const k5=  "ienguba (') ir dviguba (") kabutes.

const backslash = '\\';
const blackslash2 = "\\\\";

//console.log(backslash);
//console.log(backslash2);


/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>
*/

const html = '<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';
console.log(html);

const html2 = '<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';
console.log(html2);

const html3 = '<header>\r\n\
    <img>\r\n\
    <nav>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
        <a></a>\r\n\
    </nav>\r\n\
</header>';
console.log(html3);

// 



const studentName = 'Maryte';
// maryte yra viena is keturiu legendine studente.
const amount = 4;

const student = studentName + ' yra viena is ' + amount + 'legendiniu studentu.';

console.log(student);


// backtick (`) kabute 
const b4 = `backtick (\`) kabute`;
const b5 = 'backtick (`) kabute';
const b6 = "acktick (`) kabute`";





//console.log(b7);

//const studentName = 'Maryte';
// maryte yra viena is keturiu legendine studente.
//const amount =  4;

//const student = studentName + ' yra viena is ' + amount + 'legendiniu studentu.';

//console.log(student);

//const student2 =    `${} yra viena is ${amount} legendiniu studentu.`;


// % veikia tik su bakctick

const word = 'pomidoras';
const wordSymbolCount = word.length;

console.log(word);
console.log(wordSymbolCount);

const textSize = 'labas'.length;
console.log(textSize);

const age = 99;
const AgeDigitsCount = ('' + age).length;
console.log(AgeDigitsCount)

//const AgeDigitsCount2 = age.tostring().length;
//console.log(AgeDigitsCount2);


//const text 'kebabas';
//const firstSymbol = text{0};
//console.log(firstSymbol)
//console.log();













//const b7 = <header>
//<img>
//<nav>
 //   <a></a>
  //  <a></a>
  //  <a></a>
//</nav>
//</header>`


// zodyje sachmatai pirmoji raide yra s 



//const gameSentence = `zodyje ${game} pirmoji raide yra "s"`

//console.log(gameSentence);



console.log('------------------------');



