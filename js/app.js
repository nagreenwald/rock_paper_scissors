//Your code here
$(document).ready(function() {
  //Set up our variables to use later
  var computerChoice;

  //Get a random value for the computer choice
  var computerChoiceVal = Math.random();


  //Turn the random value into a choice for the computer
  if (computerChoiceVal < 0.34) {
      computerChoice = "rock";
  } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }



  //Now we have access to the computer's choice via the computerChoice variable
$(document).on("click", "#rock", function() {
if (computerChoice === "scissors") {
  // alert("Win");
  $("#rock").addClass("success green-background");
} if (computerChoice === "rock") {
  alert("tie");

}
if (computerChoice === "paper") {
  alert("lose");
}
});

$(document).on("click", "#paper", function() {
if (computerChoice === "rock") {
  // alert("Win");
  $("#paper").addClass("success green-background");
} if (computerChoice === "paper") {
  alert("tie");

}
if (computerChoice === "scissors") {
  alert("lose");
}
});

$(document).on("click", "#scissors", function() {
if (computerChoice === "paper") {
  // alert("Win");
  $("#scissors").addClass("success green-background")
} if (computerChoice === "scissors") {
  alert("tie");

}
if (computerChoice === "rock") {
  alert("lose");
}
});





















  });
