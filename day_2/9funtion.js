/*

make a funtion name
prepo
it takes one input
if input male => return he
if input female => return she
else return they

*/

let prepo=(i1)=>{
    if(i1=="male"){
        return "he";
    }
    else if(i1=="female"){
        return "she";
    }
    else{
        return "they";
    }       
}
let _prepo=prepo("other");
console.log(_prepo);     