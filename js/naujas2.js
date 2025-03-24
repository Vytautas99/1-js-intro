

const mokinys1 = ['Božena',9,6,5,8,5,];
const mokinys2 = ['Rapolas',9,9,9,3,4,];
const mokinys3 = ['Egle',5,5,9,4,7,];
const mokinys4 = ['Viktoras',5,2,9,8,9,];
const mokinys5 = ['Laura',3,3,4,3,4,];

function MokinioVidurkis (mokinys) {

    console.log('Mokinio vardas: ' + mokinys[0]);
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4]
    + mokinys[5])/5; 
    if (vidurkis>=3.5) {
        console.log(mokinys[0] + ' Islaike. jo vidurkis: ' + vidurkis);
    
    } else
    {let vidurkisNaujas = ((vidurkis*5)+10)/6
        console.log(mokinys[0] + ' neislaike. jo dabartinis vidurkis: ' + vidurkis);
        if (vidurkisNaujas>=3.5)
        { 
            console.log(mokinys[0] + ' islaikytu kursa, jei gautu viena desimtuka');
            
        }
    
    }
    
    }
    (MokinioVidurkis(mokinys1));
    (MokinioVidurkis(mokinys2));
    (MokinioVidurkis(mokinys3));
    (MokinioVidurkis(mokinys4));
    (MokinioVidurkis(mokinys5));
   
    

    console.log('----------------------------------');
    


const movie = [' Sunshine ', ' sci-fi', 10 ]
const movie1 = [' John Wick ', 'Action', 6]
const movie2 = [' Incendies ', 'Drama', 8.5]
const movie3 = [' Gladiator ', 'Adventure', 10]
const movie4 = [' Event Horizon ', 'horror', 8]

const megtamasZanras = 'Horror';
const pageidautinasIvertinimas = 7;

function filmai (movie) {

    if (7 >= movie[3])
 
        console.log("rekomenduoju" + movie[0])
    }

   
    const kk = movie.length
    
console.log(kk);

    




//console.log('Geri filmai: ' + movie[0] + movie4[0] + movie3[0]);
