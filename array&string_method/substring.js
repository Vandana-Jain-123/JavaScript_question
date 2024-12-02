// substring:The substring() method of String values returns the part of this string from the start index up to and excluding the end index,
//  or to the end of the string if no end index is supplied.

 let str="abcdefghijklmnop"
 let str1=str.substring(0,4)
 console.log(str1)

//  output :abcd  e nhi h qkki yah last end exclude kr deta h 
 let str2=str.substring(6,str.length)

//  str.length-1 krne pr last element exclude ho jayega isliye str.length  likhenge
console.log(str2)