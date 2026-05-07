let ar1=[9,10,11,12];
let ar2=[12,14];

//... is spread operator also known as wrapeer opener
let ar3=[8,...ar1];
console.log(ar3) //[8,9,10,11,12]

let ar4=[...ar1,...ar2];
console.log(ar4) //[9,10,11,12,12,14]

let ar5=[...ar1,...ar2,...ar3];
console.log(ar5) //[9,10,11,12,12,14,8,9,10,11,12]


//object spread operator
let info1 = {name: "nabil", age: 22};
let info2 = {address: "ktm"};

let info = {...info1, ...info2};
console.log(info);
