const emails = 'john@example.com, jane.doe@company.com, user123@gmail.com';
const email_split = emails.split(" ")
console.log(email_split);
// output
['john@example.com, jane.doe@company.com, user123@gmail.com']

let username = email_split.slice()
console.log(username)