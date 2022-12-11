function palindrome(x)
{
	let arr=x.split("")
	console.log(arr)
	let y=arr.reverse()
	console.log(y)
	let z=y.join("")
	console.log(z)
	if(x==z)
	{
		console.log('Entered string is a palindrome')
	}
	else
	{
		console.log('Entered string is not a palindrome')
	}
	
}

palindrome("gadag")