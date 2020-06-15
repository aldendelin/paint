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
    line = createSprite(mouseX,mouseY,10,10);
    writePosition(mouseX,mouseY);
}

function mouseReleased(){

}

function readPosition(data){
    position = data.val();
    line.x = position.x;
    line.y = position.y;
}

function writePosition(x,y){
    database.ref('line/position').set({
        'x' : position.x,
        'y' : position.y
    })
   
}

function showError(){
        console.log("error in the code");
    }
