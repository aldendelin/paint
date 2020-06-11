var database,position,line;

function setup(){
    createCanvas(500,500);
   database = firebase.database();
   var spriteposition = database.ref('line/position');
   spriteposition.on('value',readPosition,showError);
}

function draw(){
    background("white");
    
    drawSprites();
}

function mouseDragged(){
    line = createSprite(110,110,10,10);
    writePosition();
}

function mouseReleased(){

}

function writePosition(){
    database.ref('ball/position');
}

function readPosition(data){
    position = data.val();
    line.x = position.x;
    line.y = position.y;
}

function showError(){
        console.log("error in the code");
    }
