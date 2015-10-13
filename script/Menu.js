var menuState = function(game){
    
};

    menuState.prototype = {
        
        create: function(){
            console.log(game.state.getCurrentState());
            
            this.state.start('Play');
        }
        
    }
