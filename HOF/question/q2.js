// You are given an array of student objects.Each student object contains a name and marks.Write a function processStudents that performs the following steps:

// Filter the students to create a new array of students who scored above 60 marks.
// Sort the filtered array in descending order of marks.
// Map the sorted array to extract only the names of the students.
// Return the array of sorted names.
//     Example:

// Input: [{ name: "Alice", marks: 58 },

// { name: "Bob", marks: 85 },

// { name: "Charlie", marks: 92 },

// { name: "David", marks: 45 }]

// Output: ["Charlie", "Bob"]

function processStudents() {
    let studentData = [
        { name: "Alice", marks: 58 },

        { name: "Bob", marks: 85 },

        { name: "Charlie", marks: 92 },

        { name: "David", marks: 45 }
    ]
    //    1 Filter the students to create a new array of students who scored above 60 marks.

    let fillteredDatabyMarks = studentData.filter((ele) => {
        if (ele.marks > 60) {
            return ele
        }
    })

    console.log(fillteredDatabyMarks)

    // Sort the filtered array in descending order of marks.
    fillteredDatabyMarks.sort((a, b) => {
        return b.marks - a.marks
    })
    console.log(fillteredDatabyMarks)

    // Map the sorted array to extract only the names of the students.
    let mapedOnlyName = fillteredDatabyMarks.map((ele) => {
        return ele.name
        console.log(ele.name)
    })
    console.log(mapedOnlyName)


}

processStudents()