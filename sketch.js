var database;
var gameState = 0;
var playerCount = 0;
var form, game, player;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);


  game = new Game();
  game.start();

}


function draw() {
  
}