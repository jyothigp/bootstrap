let number=[1,2,3]
let[x,y,z]=number
console.log(x,y,z)

let Fullstack=[
	['HTML','CSS','JS'],
	['NODE','DB','REACT']
]
let[frontend,backend]=Fullstack
console.log(frontend)
console.log(backend)
console.log(frontend+' '+backend)
console.log("Joined using spread operator",...frontend,...backend)

let x1=[1,2,3,4,5,6,7,8,9]
let[a,b,c,...d]=x1
console.log(d)

