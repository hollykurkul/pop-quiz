var score = 0;

alert("Welcome to my Cat Quiz!");

var q1 = prompt("Which is better? A) Cats or B) Dogs");

if (q1 == "A") {
  alert("Correct!");
  score = score + 1;
} else {
  alert("Wrong answer.");
}

var q2 = prompt("Do cats purr? A) Yes or B) No");

if (q2 == "A") {
  alert("Correct!");
  score = score + 1;
} else {
  alert("Actually, they do.");
}

var q3 = prompt("Where do cats like to sit? A) In a box or B) In a tree");

if (q3 == "A") {
  alert("Correct!");
  score = score + 1;
} else {
  alert("Boxes are better than trees.");
}

if (score == 3) {
  alert("Perfect score! You love cats.");
}

if (score == 1 || score == 2) {
  alert("You got some right. Not bad!");
}

if (score == 0) {
  alert("0 correct. You must be a dog person.");
}
