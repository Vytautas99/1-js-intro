/*
Reikalinga funkcija, kuri gauna teksta, kuri grazina rezultata, priklausomai nuo teksto ilgio.

- jei tuscias: "Tuscias tekstas."
- jei maziau 10 simboliu: "Trumpas tekstas is n simboliu."
- jei maziau 20 simboliu: "Tekstas is n simboliu."
- jei ilgesnis: "Ilgas tekstas is n simboliu."

*/

function textSize(text) {
    if (text.length === 0 ) {
        return 'Tuscias tekstas .';
    } 

     if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu..`;
    } 

    if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }



return `Ilgas tekstas is ${text.length} simboliu..`;
}


console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labanakt!'));
console.log(textSize('Labanaktis'));
console.log(textSize('virs desmit'));
console.log(textSize('labas rytas, Lietuva, kaip sekasi?'));




function textSize2(text) {
    if (text.length === 0 ) {
        return 'Tuscias tekstas .';
    }

     else if (text.length < 10) {

        return `Trumpas tekstas is ${text.length} simboliu..`;
    }

     else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }



return `Ilgas tekstas is ${text.length} simboliu..`;
}




function textSize3(text) {
    if (text.length === 0 ) {
        return 'Tuscias tekstas .';
    } 

    else if (text.length < 10) {

        return `Trumpas tekstas is ${text.length} simboliu..`;
    } 

    else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }


if (text.length ==-0) {
return `Ilgas tekstas is ${text.length} simboliu..`;}
}


function textSize4(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    return 'Tuscias tekstas.';
}



function textSize5(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0 && text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10 && text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length === 0) {
        return 'Tuscias tekstas.';
    }
}



console.log('----------------------------------------');



function textSize2(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';
    } else if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    } else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    } else {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }
}

function textSize3(text) {
    if (text.length === 0) {
        return 'Tuscias tekstas.';
    } else if (text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    } else if (text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    return `Ilgas tekstas is ${text.length} simboliu.`;
}

function textSize4(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    return 'Tuscias tekstas.';
}

function textSize5(text) {
    if (text.length >= 20) {
        return `Ilgas tekstas is ${text.length} simboliu.`;
    }

    if (text.length > 0 && text.length < 10) {
        return `Trumpas tekstas is ${text.length} simboliu.`;
    }

    if (text.length >= 10 && text.length < 20) {
        return `Tekstas is ${text.length} simboliu.`;
    }

    if (text.length === 0) {
        return 'Tuscias tekstas.';
    }
}