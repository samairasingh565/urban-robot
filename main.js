
noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
Difference = 0;


function preload(){

}
function setup(){
   canvas = createCanvas(550,550);
   canvas.position(750,150)

   video = createCapture(VIDEO);
   video.size(550,550);

   poseNet = ml5.poseNet(video,modelLoaded);


   poseNet.on("pose",gotPoses);

}


function draw(){
   background("#5196e3");
   document.getElementById("label").innerHTML = "Font Size Of The Text Will Be = "+Difference+"px";
   textSize(Difference);
   fill("#00ff0a");
   text('Samaira',50,400);
}


function modelLoaded(){
  console.log("model is successfully loaded !");
}
function gotPoses(results){
   if (results.length>0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX:" + noseX + "noseY:"+noseY);
LeftWristX = results[0].pose.leftWrist.x;
RightWristX = results[0].pose.rightWrist.x;
console.log("leftWristx" + LeftWristX +"rightWristx" + RightWristX);
Difference =  floor(LeftWristX - RightWristX);
console.log(Difference);


   }
}
