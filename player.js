class Player{
    constructor(){
this.playername=null;
this.playerindex=null;
this.playerdistance=0;



    }

    
 getcount(){
        var dbplayercount=database.ref('playercount')
        dbplayercount.on("value",(data)=>{

            playercount=data.val()
        })
        
    }

    updatecount(count){
        database.ref('/').update({
      playercount:count
        })
    }

    updateplayerinfo(){
        var dbplayerindex= "players/player"+this.playerindex;
        database.ref(dbplayerindex).set({
            name:this.playername
       ,     distance:this.playerdistance

        
        })
        
      
    
}
static getallplayerinfo(){
    var dbplayers=database.ref('players')
    dbplayers.on("value",(data)=>{
        allplayers=data.val();
    })

}










}
