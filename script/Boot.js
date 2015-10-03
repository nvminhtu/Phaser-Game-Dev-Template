var bootState = function(game){
   // console.log("current state : "+'bootState');


};

    bootState.prototype = {

        init: function(){

            console.log(game.state.getCurrentState());

            if (this.game.device.desktop){

                this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
              //  this.scale.setMinMax(90,250,330,550); // (minwidth,minheight,maxwidth,maxheight)
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.updateLayout(true);
                this.scale.refresh();

                }

            else{

                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
             //   this.scale.setMinMax(100,250,330,550);
            //    this.scale.forceOrientation(false,true);//(landscape,portrait)
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = true;
                this.scale.updateLayout(true);
                this.scale.refresh();

                }

        },

        preload: function(){

        },

        create: function(){
            this.state.start('Preload');
        }

    }
