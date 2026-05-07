let users = [
    {name:"nabil",age:22},
    {name:"mritunjay",age:23},
    {name:"gautam",age:24},
    
];


//["nabil", "mritunjay", "gautam"]
let names = users.map((item,i)=>{
    return item.name;
});

console.log(names);