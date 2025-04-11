//1. užd. Padarykite funkciją, kuriai perdavus vieną iš (akmuo, popierius, šulinys) reikšmių,
//kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio
//pasirinkimai turi būti atsitiktiniai.

function game  (text) {

    const vaskiči = ['akmuo','popierius','šulinys']

    return text.includes('akmuo') || text.includes('popierius') || text.includes('šulinys') ? `${text} ` + `--- `+ vaskiči[Math.floor(Math.random() * vaskiči.length)] : ' ivestas neteisingas paramentras';
        
  
}

console.log(game('popierius'));





//2 užd Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio
//krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali
//pakelti 2.4 kg

function liftPackage (weight,maxWeightPersonCanLift) {
    

          return `Kroviniui, kurio svoris yra ${weight}kg pakelti prireiks ${Math.ceil(weight/maxWeightPersonCanLift)} zmoniu.`;
    
}

console.log(liftPackage(20,3.3));






//3 užd a) Statybos. Yra planuojamas namo statymas. Parašykite funkciją, kuri, gavusi norimą
//namo aukštį, grąžintų kiek aukštų turės namas. Namo aukštis yra paduodamas tik sveiku
//skaičiumi. Vieno aukšto aukštis gali būti 2 arbe 2.5m aukščio. Vadinasi, 6 metrų namas turės 3
//aukštus (po 2 m), o 5 metrų namas turės 2 aukštus (po 2.5). Taupant vietą yra dedamas
//prioritetas didesniam aukštų skaičiui - jei namo aukštis yra 10 metrų, jis turės 5 2m aukštus. Jei
//namas yra 7 metrų aukščio, jis turės 2 aukštus 2.5 aukščio ir vieną 2 metrų aukščio aukštą.

function floors (height) {

return height % 1 !== 0 ? "namo aukstis turi buti pateiktas kaip sveikasis skaicius." : height % 2 !==0 ? Math.ceil(height/2.5) : height/2;

}

console.log(floors(7));


/*
if (height%2 !== 0) {

    return Math.ceil(height/2.5);

} else {
    return height/2;
}
*/

//console.log(Math.ceil(10/2));

//console.log(Math.trunc(5.9));


//uzd 3 b) Statome namą iš plytų. Vienos plytos plotis yra 0.2 metrai, o aukštis yra 0.1 metro.
//Parašykite funkciją, kuriai nurodžius namo išmatavimus (plotis, ilgis, aukštis), ji apskaičiuotų
//kiek plytų reikės dėti. (PVZ jei ilgis yra 1m, plotis 2m aukštis yra 2m, turime dėti 600 plytų)





//užd 3 c) Statyti namą kainuoja. Kiekvienas namas turi 1 duris, x plytų ir 6 langus kiekviename
//aukšte. Padarykite funkciją, kuriai pateikus plytų, langų ir durų kainą; bei namo plotį, ilgį ir
//aukštį - ji paskaičiuotų kiek eurų kainuotų pastatyti norimą namą.






/*
//uzd 4. Kalėdų senelis pakeitė darbą ir tapo gimtadienio dėde. Vietoj gerų ir blogų vaikų, jis
dosniai apdovanoja ypatingus gimtadienius (1, 5, 10, 15, 16, 18, 20 ir visi kiti jubiliejai) ir nelabai
gerai apdovanoja paprastus gimtadienius. Padarykite du sąrašus - vieną su nuostabiomis
dovanomis (vienaragis, pilis, mašina, ...), kitą su nefainomis dovanomis (kojinės, ananasas, jau
skaityta knyga, ...). Padarykite funkciją, kuriai pateikus jūsų metus, ji pasveikins su gimtadieniu
ir padovanos atitinkamą dovaną.
*/

//function present(age) {
    


//}




//console.log(present());












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





 function tripleTrouble(one, two, three){
    let comb = ''
      for (i =0; i < one.length; i++) {
        comb += one[i] + two[i] + three[i]
        

      } return comb
    
   }




console.log(tripleTrouble("Sea","urn","pms"));







