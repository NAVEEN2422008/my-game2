var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var man, man1, man2, man3, man4;

var  man1_img, man2_img, man3_img, man4_img;
var backgroundImage,backgroundplayImage;

function preload(){
  backgroundImage = loadImage("bg.jpg");
  backgroundplayImage =loadImage("pbg.png");
  man1_img =loadImage("man1.png");
  man2_img =loadImage("man2.png");
  man3_img =loadImage("man3.png");
  man4_img =loadImage("man4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImage);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
