let arr1=[3,7,34,90,12]
let Last=arr1.pop();
console.log({arr1});

let arr2=[true,'green','where',12,56]
let last=arr2.pop()
console.log({arr2})

//Write a JS program that will join the following array elements 
let myPet=['Cow','Birds','Snake','Dog'];
let joinString= myPet.join(',');
console.log({joinString});
//Write a JS script to sort the following array itemsvar 
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
let sortedString=arr3.sort();
console.log({sortedString})
//Write a program to remove duplicates from the following array.
let arr4=['apple','mango','apple','orange','mango','mango'];
let uniqueArr =[...newSet(arr)];
let duplicateArr=arr.filter((item,index)=  arr.indexOf(item)!==index);
console.log({uniqueArr});
console.log({duplicateArr});
//Write a JS script to search for the following word in the array
let arr5=["the","way","x",4];
let found =false;
for(let i=0;i<arr5.length;i++){
    if(arr5[i]==="way"){
        console.log("way");
        found= true
        break;

    }

}
if(! found){
    console.log("the search word was not found");
}
//Write a JS script to sort the following string:let word = "sevink"
let word="sevink";
let sortedWord= word.sort();
console.log({sortedWord})