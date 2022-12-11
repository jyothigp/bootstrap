class student
{
	constructor(name, rollno, sec)
	{
		this.name=name;
		this.rollno=rollno;
		this.sec=sec;
	}
}
let s1=new student("Abhi",21,"B")
console.log(s1)

class car
{
	constructor(name, modelno, price)
	{
		this.n=name
		this.m=modelno
		this.p=price
	}
	show()
	{
		console.log("Car name=",this.n)
		console.log("Car model number=",this.m)
		console.log("Car price=",this.p)
	}
}
class vehicle extends car
{
	constructor(name,modelno,price,brand)
	{
		super(name,modelno,price)
		this.b=brand
	}
	show()
	{
		super.show()
		console.log("Car barnd=",this.b)
	}
}
let c1=new car("Innova", "XYZ12A",600000)
c1.show()
let v1=new vehicle("NEXA","bghre123",700000,"maruthi")
v1.show()

