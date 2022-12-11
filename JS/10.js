let student={First_name:"Sachin",
Last_name:"Tendulkar",
Age:40,
Gender:"Male"}
console.log("Type of data type",typeof(student))
console.log(student)
console.log(student.First_name+' '+student.Last_name)

let student1={
	First_name:"Jyothi",
	Last_name:"G P",
	Full_name:function(){
		return this.First_name+' '+this.Last_name
	},
	parents:{
		Father:"Pampanagouda",
		Mother:"Doddabasamma"
	}
}
console.log(student1.Full_name())
console.log(student1.parents.Father)

for(x in student1['parents'])
{
	console.log(student1.parents[x])
}
