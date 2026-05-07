//order matters in array destructor but not in object destructor
let [a,b,c]=[10,11,12]
console.log(a)
console.log(b)
console.log(c) //sir


let [d,e,f]=[10,11]
console.log(d)
console.log(e)
console.log(f) //undefined


let [g,h,...i]=[10,11,12,13,14]
console.log(g)
console.log(h)
console.log(i) //array of remaining values


let [j,...k]=[10]
console.log(j)
console.log(k) //empty array

//object destructor
//in object order does not matter
let {name,weight,isMarried}={name:"nabil",weight:60,isMarried:false}

 console.log(name)
 console.log(weight)
 console.log(isMarried)
