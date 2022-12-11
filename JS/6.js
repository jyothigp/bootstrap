function fibonacci(x)
{
	let f0=0, f1=1, fib
	for(let i=0; i<=x; i++)
	{
		fib=f0+f1;
		console.log(fib)
		f0=f1
		f1=fib
	}
}
fibonacci(10)