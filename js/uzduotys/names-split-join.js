/*
Funkcija gauna sakini, kuris atrodo taip:
"Siuo metu klaseje yra: jonas, Maryte, PeTRas, ONA."
Funkcijos darbas grazinti teisingai perasyta sakini.
T.y reikia istaisyte vardu rasyma.
pvz: "Studentai: jonas, Maryte, PeTRas, ONA"
*/


/*
- atsiskiriame vardus is originalaus teksto
- konvertuojame teksta i mazasias raides
- issiskaidyti individualius vardus i masyva
- ciklas eina per individualius vardus ir : 
    - pasiima pirma raide
    - ja padidina
    - apjungia i galutini normalu varda
- pagaminame galutini reikiama sakini
*/

function correctSentence(text) {
    const parts = text.split(': ')
    const names = parts[1].slice(0,-1).toLowerCase().split(', ');
    console.log(parts);
    console.log(names);

    const fixedNames = [];
    
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const  firstLetter = name[0].toUpperCase()
        const restName = name.slice(1);
        const newName = firstLetter + restName
        
        console.log(name, firstLetter + restName);
        names[i] = newName
        
        
    }

    return parts[0] + ': ' + names.join(', ') + '.'
    
}


console.log(correctSentence("Siuo metu klaseje yra: jonas, Maryte, PeTRas, ONA."));
