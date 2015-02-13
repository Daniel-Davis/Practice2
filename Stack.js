// Daniel Davis, Stack, Practices for stack, push numbers 2,4,6,8,10 loop and pop those numbers for a total of their sum//
load('stack.js'); // loads up code from stack

var total = 0; // variable used for the output value
var stack = new stack(); // creates a new stack

stack.push(2); // push even numbers from 2-10 onto newly created stack
stack.push(4);
stack.push(6);
stack.push(8);
stack.push(10);

for (var i=0, i<=stack.length, ++i) { // for loop that cycles through the length of the stack
  total = stack.pop(i) + total; // total will get it's previous value plus the new value that was popped
  console.log('adding total... new total is' + total); // checks to make sure looping and adding correctly
}// end of for loop

console.log('final total value is: ' + total); // prints out final total value



