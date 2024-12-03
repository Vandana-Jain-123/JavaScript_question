

// Given the array:
// const numbers = [10, 20, 30, 40, 50];
// Write a code snippet to:

// Extract the sub - array[20, 30, 40] using an inbuilt array method.
//     Reverse the order of this sub - array using another array method.
//         Combine it back with the rest of the original array elements in reversed order using array concatenation.
//             Expected Output:
//                 The final array should look like this: [50, 40, 30, 20, 10].

const numbers = [10, 20, 30, 40, 50];
 const sub_array=numbers.slice(1,4).reverse()
let Combine_num = [numbers[numbers.length - 1], ...sub_array, numbers[0]]
console.log(Combine_num)




