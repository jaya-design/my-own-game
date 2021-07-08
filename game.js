// class Game{
//     constructor(){

// }
// getState() {
//     var gameStateRef = database.ref('gameState');
//     gameStateRef.on("value", function (data) {
//         gameState = data.val();
//     })

// }

// update(state) {
//     database.ref('/').update({
//         gameState: state
//     });
// }
// }
class Game {
     constructor(){ } 
     getState(){
          var gameStateRef = database.ref('gameState');
           gameStateRef.on("value",function(data){
                gameState = data.val(); 
            }) } 
            update(state){
                 database.ref('/').update({
                      gameState: state 
                    }); } 
                    async start(){
                         if(gameState === 0){
                              player = new Player();
                               var playerCountRef = await database.ref('playerCount').once("value");
                                if(playerCountRef.exists()){
                                     playerCount = playerCountRef.val();
                                      player.getCount();
                                     }
                                      form = new Form()
                                       form.display(); 
                                    } 
                                    player1 = createSprite(200, height-200, 50, 50);
                                    player1.addImage(player1Img);
                                    player2 = createSprite(250, 200, 50, 50);
                                    player2.addImage(player2Img);
                                    player3 = createSprite(300, 200, 50, 50);
                                    player3.addImage(player3Img);
                                    playerGroup = [player1,player2,player3];
                                        }
                                          play(){
                                               form.hide();
                                                Player.getPlayerInfo();
                                                 player.getMaxKill();
                                                  if(allPlayers !== undefined){
                                                    background(bg);
                                                      //var display_position = 100;
                                                       //index of the array var index = 0; 
                                                       //x and y position of the cars 
                                                       var x = 175 ;
                                                        var y;
                                                         for(var plr in allPlayers){
                                                             //add 1 to the index for every loop 
                                                             index = index + 1 ; 
                                                             //position the cars a little away from each other in x direction 
                                                             //x = x + 200;
                                                              //use data form the database to display the cars in y direction 
                                                              y = displayHeight - 50;
                                                               playerGroup[index-1].x = x;
                                                                playerGroup[index-1].y = y; 
                                                               // console.log(index, player.index) 
                                                               if (index === player.index){
                                                                    stroke(10);
                                                                     fill("red");
                                                                      ellipse(x,y,60,60);
                                                                       playerGroup[index - 1].shapeColor = "red";
                                                                        camera.position.x = displayWidth/2;
                                                                         camera.position.y = playerGroup[index-1].y; 
                                                                    } 
                                                                }
                                                                    //textSize(15);
                                                                     //text(allPlaye
                                                                     if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                                                                        player.distance += 10
                                                                        player.update();
                                                                      }
                                                                      if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                                                                        player.distance -= 10
                                                                        player.update();
                                                                      }
                                                                      if(game.time > "1000"){
                                                                          gameState = 2;

                                                                      }
                                                                      
// spawn enemy 1

 spawn(){
    if(frameCount%500 === 0){
       
       enemy1 = createSprite(width+100,200,50,50);
       enemy1.addImage(enemy1Img);
       enemy1.velocityX = -1;
   
     }
   
   }
   
   // spawn enemy 2
   
    spawn2(){
     if(frameCount%700 === 0){
   
       enemy2 = createSprite(width+200,300,50,50);
       enemy2.addImage(enemy2Img);
       enemy2.velocityX = -3;
   
     }
   
   }
   
   // spawn enemy 3
   
   spawn3(){
     if(frameCount%1000 === 0){
   
       enemy3 = createSprite(width+100,300,50,50);
       enemy3.addImage(enemy3Img);
       enemy3.velocityX = -3;
   
     }
   
   }

                                                             
                                                         
                                                  
                                                                    
                                                  }
                                                }
                                            }