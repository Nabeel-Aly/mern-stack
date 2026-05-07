//map loop
//map is used to modify the array


let ar1=[10,20,30]; //always map in array
//.      0  1   2.  
//i=>index of the array


let ar = ar1.map((item,i)=>{
    return item*i;
    
});

console.log(ar);
//[10,20,30]=>[0,20,60]

/*
()=>{} //arrow function
*/


//[10,20,30]=>[20,40,60]
let a2=[10,20,30];
let a3=a2.map((item,i)=>{
    return item*2;
});
console.log(a3);