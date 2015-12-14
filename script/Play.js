MyGame.playState = function (game) {
  // body...
  this.game = game;
};

    MyGame.playState.prototype = {

        create: function(){
            console.log(game.state.getCurrentState());

            
        },

        gameOver: function(){
        //    this.state.start('Menu');
        },

        update: function(){

        }

    }
