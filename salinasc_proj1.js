var letsplayRounds = parseInt(prompt("How many rounds?"));

var someUser = Math.floor(Math.random() * 2);

var compUser

var userWins = 0;

var compWins = 0;

var draw = 0;

for(var i = 0 ; i <=letsplayRounds; i++) {
if (comp === r && user === s) {
alert("Computer Wins");
compWins++;
} else if (comp === s && user === p) {
alert("Computer Wins");
compWins++;
} else if (comp===p && user===r) {
alert(Computer Wins");
compWins++;
} else if (user===s && comp===p) {
alert("You Win");
userWins++;
} else if (user===p && comp===r) {
alert("You Win");
userWins++;
} else if (user===r && comp===s) {
alert("You Win");
userWins++;
} else if (user===s && comp===s) {
alert("Draw");
draw++;
} else if (user===p && comp===p) {
alert("Draw");
draw++;
} else if (user===r && comp===r) {
alert("Draw");
draw++;
}
