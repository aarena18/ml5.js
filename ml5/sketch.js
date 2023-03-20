//COMPUTER
function play() {
  // Generate a random move for the computer
  let choice = ["zero", "ONE", "TWO"];
  computerChoice = choice[Math.floor(Math.random() * choice.length)];

  document.getElementById("computer").innerHTML = computerChoice;

  // Compare the computer's move to the your move
  let result = "";

  if (label === "ONE" && computerMove === "ONE") {
    result = "You win!";
  } else if (label === "TWO" && computerMove === "TWO") {
    result = "You win!";
  } else if (label === "zero" && computerMove === "zero") {
    result = "You win!";
  } else {
    result = "you lose!";
  }

  // Display the result
  document.getElementById("result").innerHTML = result;
}

// PLAYER
// Start video
let video;
let classifier;
let label = "inazuma...";
let computerChoice;

// Get my model
function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/BZvPAcnTY/"
  );
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  background(0);
  image(video, 0, 0);

  classifier.classify(video, gotResults);

  textSize(24);
  fill(255);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 16);

  if (computerChoice) {
    textSize(24);
    fill(255);
    textAlign(CENTER, CENTER);
    text(computerChoice, width / 2, 50);
  }
}

// Get results
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // console.log(results);
  label = results[0].label;
}
