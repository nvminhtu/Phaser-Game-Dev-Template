var loadState = function(game){

};

  loadState.prototype = {

      preload: function(){
          console.log(game.state.getCurrentState());

          this.load.image('platform','assets/platform.png');
      },

      create: function(){
            // testing
          this.state.start('Menu');
      }

  }
