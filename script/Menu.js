var menuState = function(game){
    
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
              
              // testing OOP - remove this      
            this.myplatform = new platform(game);
            this.myplatform.create();
        }
        
    }
