const emails = 'john@example.com, jane.doe@company.com, user123@gmail.com';

// Step 1: Split the string into an array of email addresses
const emailArray = emails.split(', ');

// Step 2: Extract the username (part before '@') for each email
const usernames = emailArray.map(email => email.split('@')[0]);

// Step 3: Join the usernames into a single string, separated by semicolons
const result = usernames.join(';');

// Output the result
console.log(result);