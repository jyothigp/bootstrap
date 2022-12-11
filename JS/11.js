let sqrt=n=>n*n
console.log(sqrt(2))

let cube=(sqrt,n)=>
{
	return sqrt(n)*n
}
console.log(cube(sqrt,3))

let top=x=>
{
	let inner_func=y=>{
		return x+y+2
	}
	return inner_func(20)
}
console.log(top(10))//can use this one too top(10)(20)