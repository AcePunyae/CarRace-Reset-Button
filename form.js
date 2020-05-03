class Form{
    constructor(){
     
this.button= createButton("play")
this.input=  createInput("name")
this.greeting= createElement('h4')
this.button1=createButton("Reset")

    }
    display(){
       var title=createElement('h3')
        title.html("CAR RACING GAME")
        title.position(displayWidth-400,5)
    
       
        this.input.position(displayWidth-200,displayHeight-300)
       this.button.position(displayWidth-200,displayHeight-250)
       
       this.button1.position(displayWidth-150,displayHeight-250)
       
   
       this.button.mousePressed(()=>{
         
            this.input.hide();

          this.button.hide();


        player.playername=this.input.value();
       //console.log(player.playername);
        playercount=playercount+1
        player.playerindex=playercount

        player.updateplayerinfo()
        player.updatecount(playercount)
         this.greeting.html("Hello "+player.playername)
         this.greeting.position(displayWidth-200,displayHeight-200);
        
        })

        this.button1.mousePressed(()=>{
          game.update(0)
          player.updatecount(0);
        
            
          
        })




      }
        hideform(){
     this.input.hide();
     this.button.hide();
     //this.greeting.hide();
     
   }
    
}




    

