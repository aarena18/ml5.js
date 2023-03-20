//start video
let video;
let classifier;

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
}

//get results
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
}
