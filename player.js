class Player {
    constructor() {

    }

    getCount() {
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value", function(data) {
            playerCount = data.val();
        })
    }

    updateCount(a) {
        database.ref("/").update({
            playerCount: a

        })
    }

    updateName(n) {
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name : n
        })
    }

}