// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const nbaPlayer = function(athlete) {
  // const athlete = "James Harden";
  console.log(`${athlete} is a member of the Houston Rockets`)
  // debugger;

  const mvp = function() {
    const award = "MVP"
    console.log(`${athlete} is the reigning MVP`)
    // debugger;

    const points = function() {
      console.log(`${athlete} can score a lot of points and has a good chance to win the ${award} again`)
      // debugger;
    }
    points();
  }
  mvp();  
}

nbaPlayer("James Harden");

// ==== Challenge 2: Create a counter function ====
 // Return a function that when invoked increments and returns a counter variable.
 
const counter = function() {
  let count = 0;
  return () => ++count;
}

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2







/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
