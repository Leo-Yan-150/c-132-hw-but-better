img = "";
function preload(){
img = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}
function draw(){
    image(img, 0, 0, 380, 380);
}
function modelLoaded(){
    console.log("model has been loaded");
    }
    
    function gotResult(error, results){
        if(error){
            console.error(error);
        }
        console.log(results);
    }
function back(){
    window.location = "index.html";
}