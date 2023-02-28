// Challenge 1:
// Given an array of numbers, return an array of each number, squared

// ```js
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]

// // Your code here
// ```

const nums = [1, 2, 3, 4, 5];
let returnNums = [];
function chalenge1(numsInput) {
  for (let i = 0; i < numsInput.length; i++) {
    returnNums.push(numsInput[i] * numsInput[i]);
  }
  return returnNums;
}
console.log(chalenge1(nums));

// Challenge 2:
// Given an array of strings, return an array where the first letter of each string is capitalized

// ```js
// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
const names = ["alice", "bob", "charlie", "danielle"];
let returnNames = [];
function chalenge2(namesInput) {
  for (let i = 0; i < namesInput.length; i++) {
    if (typeof namesInput[i] !== "string" || !namesInput[i])
      return "You have to input name.";
    returnNames.push(
      namesInput[i].charAt(0).toUpperCase() +
        namesInput[i].slice(1).toLowerCase()
    );
  }
  return returnNames;
}

console.log(chalenge2(names));
// ```

// Challenge 3:
// Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like `<p></p>` tag.

// ```js
// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
let returnArray = [];
function chalenge3(arrayInput) {
  for (let i = 0; i < arrayInput.length; i++) {
    if (typeof arrayInput[i] !== "string" || !arrayInput[i])
      return "You have to input array.";
    let newWord = `<p>${arrayInput[i]}</p>`;
    returnArray.push(newWord);
  }
  return returnArray;
}

console.log(chalenge2(pokemon));
// ```

// Challenge 4:

// 1. What does the `.map()` array method do?

// ```md
// // Your answer here
// A. Functions that take elements out of an array one by one
// ```

// 2. What do we usually use `.map()` for in React?

// ```md
// // Your answer here
// A. `.map()` is usually used to set the props to the Component.
// ```

// 3. Why is using `.map()` better than just creating the components
//    manually by typing them out?

// ```md
// // Your answer here
// A. If you use the `.map()`, you don't need to care about the changing array value. For example, When you get the response by api.
// ```
