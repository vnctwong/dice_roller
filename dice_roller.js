/* Write a program that takes a single parameter from
the command line, a number, and rolls that many six-sided dice.
For example, the following is a sample output of the program
node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
To generate a random number, you'll have to use the built-in
Math.random.
Reminder: In an earlier exercise, we had you create your own
joinList function to achieve a similar goal. However, for this
xercise you are free to use Array.prototype.join. Always feel
free to use any existing helper methods that have not been
specifically prohibited.
*/


//function to roll dice
function randomDiceRoll(min, max) {
  var range = max - min;
  var offset = min;
  return Math.round((range * Math.random()) + offset);
}
//function to roll multiple times
function rollNumberOfTimes(rolls) {
  var rolledNumbers = [];
  for (var i = 0; i < rolls; i++) {
    rolledNumbers.push(randomDiceRoll(1, 6));
  }
  return rolledNumbers;
}

var CmdLineArguement = process.argv[2];
console.log ((rollNumberOfTimes(CmdLineArguement)).toString());
