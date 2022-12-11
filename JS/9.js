let x=[90,80,76,56,98,87,69,78,89,101]
x.forEach(i=>console.log(i))

let z=[2,3,4,5,6]
let y=z.map(i=>i*i)
console.log(y)

let a=z.reduce((total,i)=>total+i)
console.log(a)

let b=x.filter(i=>i<=80)
console.log(x)
console.log(b)

let c=x.every(i=>i<70)
console.log(c)

let d=x.some(i=>i>75)
console.log(d)
