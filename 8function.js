/*
make a funtion named
canVote
pass one input
if the input is >=18 return "can vote"
else return "cannot vote"
*/

let canVote=(i1)=>{
    if(i1>=18){
        return "can vote";
    }
    else{
        return "cannot vote";
    }       
}
let _canVote=canVote(20);
console.log(_canVote);




   