let str="These Sass loops aren’t limited to color maps, either. You can also generate responsive variations of your components."
let str1="Good"
let str2="mornING"
console.log("The statment is: ",str)
console.log("The length of the string is:",str.length)
console.log("Part of the statement:", str.slice(7,15))
console.log("Substring of the statement is:", str.substring(2,6))
console.log("Substr of the statement:", str.substr(2,6))
console.log("String concatination", str1.concat(" ",str2))
console.log("Uppercase:", str1.toUpperCase())
console.log("Lowercase:", str2.toLowerCase())
let arr=str2.split("")//doubt
console.log("Split function:", arr)
console.log("Trim :", str.trim("color"))  //doubt
console.log("Includes :", str.includes("color"))
console.log("Replace :", str.replace("color", "colorful"))
console.log("CharacterAt :", str2.charAt(3))
console.log("Indexof :", str.indexOf("responsive"))
console.log("startswith :", str.startsWith("These"))
console.log("ends with :", str1.endsWith("od"))
console.log("search function:", str.search("maps"))
console.log("match function:", str.match("imited")) //doubt
console.log("Repeat function :", str1.repeat(3))