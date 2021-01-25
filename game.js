class Game {
    constructor () {

    }

    getState() {
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data) {
            gameState = data.val();
        })
    }

    updateState(s) {
        database.ref("/").update({
            gameState : s
        })
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}