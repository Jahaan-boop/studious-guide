var nose_X = 0;
var nose_Y = 0;
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO)
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotPoses)
}

function preload(){
rednose=loadImage("https://i.postimg.cc/VLWHV5L8/clown-nose-png-12.png")
}

function draw(){
    image(video,0,0,300,300);
image(rednose,nose_X,nose_Y,30,30)
    }

function snapshot(){
save("myRednose.png")
}

function modelloaded(){
console.log("PoseNet has been successfully initialized.")
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nose_X = results[0].pose.nose.x-10;
nose_Y = results[0].pose.nose.y-10;
console.log("nose_X:"+nose_X);
console.log("nose_Y:"+nose_Y);
}
}
