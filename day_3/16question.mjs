//[20,30,10,5] => [40,60,0,0]
let a1=[20,30,10,5];

let a2=a1.map((item,i)=>{
    if(item>18){
        return item*2;
    }
    else{
        return 0;
    }
});

console.log(a2);
