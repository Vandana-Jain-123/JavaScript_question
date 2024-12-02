// indexOf :used  for "find the index " of this element inside of arrayy
// Note :in which if Element is not avalable return -1

// ex
let arr=[1,2,3,4,5,6,7,8]

arr=arr.indexOf(5)
console.log(arr)

// ex2  hard code 
let name=["ashu","shiv","priya","pooja"];
let status=name.indexOf("shivbb")

// name.indexOf krne se mtlb h shiv kis index pr h ager shiv avalable h to koi na koi index to hoga agr nhi h to 
// by default  -1 hoga status=-1
if(status == -1){
    console.log("Signup")
}else{
    console.log("register alrady")
}

// with function  for check  every name 
function check(str){
    let status = name.indexOf(str)
       console.log(status)
    if (status == -1) {
        console.log("Signup")
    } else {
        console.log("register alrady")
    }
}
check("pooja")
