var platform = function(game){
    this.platform = null;
};

        platform.prototype = {

            create: function(){
                this.platform = game.add.sprite(game.world.centerX,game.world.centerY,'platform');
                this.platform.anchor.setTo(0.5,0.5);
            }
        }
