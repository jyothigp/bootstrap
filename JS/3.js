let arr=[1,2,3,4,"india", "newzaland","pakistan","england"];
console.log(arr)
console.log(arr.length)
console.log(Array(9).fill("usa"))
let arr1=[1,2,3,4]
let arr2=[6,7,8,9]
let arr3=arr1.concat(arr2)
console.log(arr3)
console.log(arr3.indexOf(8))
console.log(arr3.includes(7))
console.log(Array.isArray(arr3))
let arr4=["india","is","a","beatiful","country"]
console.log(arr4)
let arr4_str=arr4.join(" ")
console.log(arr4_str)
console.log(arr.slice(1,5))
console.log(arr1.splice(1,1,"a","b","c"))
console.log(arr1)
console.log(arr2.push("india"))
console.log(arr2)
console.log(arr2.unshift("sun"))
console.log(arr2)
let arr5=["mango","apple","banana","orange"]
console.log(arr5.pop())
console.log(arr5)
console.log(arr5.shift())
console.log(arr5)
console.log(arr4.sort())
console.log(arr4.sort().reverse())
