/*
Assignment provided by FreeCodeCamp.org

Completed: February 4th, 2026
Program Description: Generates password from a list of characters and symbols based off a user input password length.
Concepts Learned: Where variables are declared matter. I was declaring password inside of the function, which would have not worked because that variable would live inside the function. That wouldn't be a great password!

User Stories:
1. You should create a function called generatePassword that takes a parameter, indicating the length of generated password. You can name the parameter whatever you like.
2. Your function should return a string which represents a randomly generated password. You should use the following string and different Math methods to help you return a new string with random characters in it: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().
3. You should define a variable called password and assign it the result of calling the generatePassword function with a numeric argument that represents the desired password length.
4. You should have a console.log that logs a single string made by concatenating the message Generated password: and the password variable separated by a space.
*/

function generatePassword(passLength) {
  const characters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()");
  const splitChars = characters.split("");
  let passArr = [];

  //Gets a random index that is 0 to the length of characters, then pushes that character into an array
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * splitChars.length);
    passArr.push(splitChars[randomIndex]);
  }
  return passArr.join("");
}

//This was very important. The password should not live in the function!
const password = generatePassword(5);
console.log(`Generated password: ${password}`);
