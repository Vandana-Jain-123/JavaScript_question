// You are given an array of objects representing products. Each product has a name and a 
// price. Write a function processProducts that uses map() to create a new array of product names,
//  and then uses forEach() to log each product name along with a message indicating whether
//  the price is above or below $50.

// Steps:

// Use map() to extract the product names.
// Use forEach() to iterate over the products and log messages based on the price of each product.
// Example:

// Input: [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

// Output (Logged):

// Laptop is above $50

// Mouse is below $50
function processProducts(product) {  
let dollor=50;
let pro_name=product.map((e,i)=>{
  return e.name
})
console.log(pro_name)
product.forEach((e,i)=>{
  if(e.price>dollor){
    console.log(`${e.name} is above $50`)
  }else{
    console.log(`${e.name} is below  $50`)
  }
}) 
return  processProducts; 
}
processProducts(product)

// SEcond wirthh temporary operator
function processProducts(product) {
    // 1.Use map() to extract the product names. 
    const prod_name = product.map((e, i) => {
        return e.name
    })
    console.log(prod_name)

    product.forEach((ele) => {
        const message = ele.price > 50 ? `Laptop is above $50` : `mobile is below $50 `
        console.log(message)
    });

    // /const message = product.forEach((ele)=>  can not write like this 
    // forEach() method does not return anything. 
    // It performs an operation for each element in the array but always returns undefined. That's why when you assign the result 
    // of forEach() to message and then log it, message is undefined.

    return processProducts;
}

let product = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(product)




