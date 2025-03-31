function biggerNumber(list) {
    let biggest = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > biggest) {
            biggest = list[i];
        }
        
    } return biggest;
}

console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([1,8,3,4,7]),'---->',1);
console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([1]),'---->',1);
console.log(biggerNumber([-8,-9,-8]),'---->',1);
