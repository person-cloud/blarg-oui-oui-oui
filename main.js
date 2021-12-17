nosex=0;
nosey=0;

function preload() {
    rouown_nose=loadImage('https://i.postimg.cc/859nmfcx/oui-oui-oui.png')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x -20;
        nosey=results[0].pose.nose.y +3;
        console.log("nose x = "+nosex);
        console.log("nose y = "+nosey);
    }
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function draw() {
    image(video,0,0,300,300);
    image(rouown_nose,nosex,nosey,40,40);
}

function takeSnapshot() {
    save('u_a_clown.png');
}