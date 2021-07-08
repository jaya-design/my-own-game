
    class Player {
         constructor(){ 
             this.index = null;
              this.kill = 0;
              this.distance = 0;
               this.name = null;
                this.rank = null;
             }
              getCount(){
                var playerCountRef = database.ref('playerCount');
                playerCountRef.on("value",(data)=>{
                         playerCount = data.val(); })
                         }
                          updateCount(count){
                               database.ref('/').update({ playerCount: count });
                             }
                              update(){
                                   var playerIndex = "players/player" + this.index;
                                    database.ref(playerIndex).set({ 
                                        name:this.name, distance:this.distance,kill:this.kill 
                                    });
                                 }
                                  static getPlayerInfo(){
                                       var playerInfoRef = database.ref('players');
                                        playerInfoRef.on("value",(data)=>{ allPlayers = data.val(); 
                                        })
                                     }
                                      getMaxKill()
                                       {
                                            database.ref('players/player').on("value",(data)=>{
                                                 this.kill = data.val(); 
                                                }) 
                                            } static updateMaxKill(killCount) {
                                                 database.ref('/').update({
                                                      playerWin:killCount
                                                    }
                                                    )
                                                 }
                                                 }
