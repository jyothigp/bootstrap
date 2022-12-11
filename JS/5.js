function armstrong(x)
{
	let sum=0
	let temp=x
	while(temp>0)
	{
		let remainder=temp%10
		sum+=remainder*remainder*remainder
		temp=parseInt(temp/10)
	}
	if(sum==x)
	{
		console.log('Given number is a armstrong number')
	}
	else
	{
		console.log('Given number is not a armstrong number')
	}
}

armstrong(371)