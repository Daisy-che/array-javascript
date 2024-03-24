let arr1=[3,7,34,90,12]
let Last=arr1.pop();
console.log({arr1});

let arr2=[true,'green','where',12,56]
let last=arr2.pop()
console.log({arr2})

 
let myPet=['Cow','Birds','Snake','Dog'];
console.log(myPet.join(","));

let arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log({arr3})

let arr4=['apple','mango','apple','orange','mango','mango'];
function removeDuplicate(arr4){
return[...new Set(arr4)];
}
console.log(removeDuplicate(arr4))


console.log({removeDuplicate});

let arr5=["the","way","x",4];
let f="way"
console.log(arr5.includes(f))


let word="sevink";
let sortedWord =word.split(',').sort().join();
console.log(sortedWord)

