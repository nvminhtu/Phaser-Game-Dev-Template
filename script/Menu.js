var menuState = function(game){
    
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
              
              // testing OOP      
            this.myplatform = new platform(game);
            this.myplatform.create();
        }
        
    }