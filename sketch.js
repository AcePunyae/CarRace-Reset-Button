var canvas, player, playercount, game, form,  database, backgroundimg;
var gamestate=0
var allplayers
var car1
var car2
var carsarray
var car1img,car2img,trackimg,groundimg

function preload(){
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    trackimg=loadImage("images/track.jpg")
    groundimg=loadImage("images/ground.png")

}


function setup(){


    canvas=createCanvas(displayWidth-400,displayHeight-300);                     
    database=firebase.database();

game=new Game();
game.getstate();
game.start();




}

function draw(){
    if(playercount===2){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();



        drawSprites();
    }
     if(gamestate===2){
         game.end();
     }
     

}