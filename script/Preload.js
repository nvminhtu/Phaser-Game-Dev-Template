MyGame.loadState = function (game) {
  // body...
  this.game = game;
};

  MyGame.loadState.prototype = {

      preload: function(){
          console.log(game.state.getCurrentState());

          // load assets here
      },

      create: function(){
            // testing
          this.state.start('Menu');
      }

  }
