// PLAYER
//start video
let video;
let classifier;
let label = "waiting...";

//get my model
function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/BZvPAcnTY/"
  );
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

//classify video
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  image(video, 0, 0);
  textSize(24);
  fill(255);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height - 16);
}

//get results
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  //console.log(results);
  label = results[0].label;
  classifyVideo();
}

// MACHINE PLAYER
//


