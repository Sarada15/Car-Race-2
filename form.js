class Form {
    constructor() {

    }

    display() {
        var title = createElement("h1");
        title.html("Car Race 2");
        title.position(130,20);

        var input = createInput("name");
        input.position(130,160);

        var button = createButton("PLAY");
        button.position(150,180);

        button.mousePressed(function () {
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;
            player.updateName(name);
            player.updateCount(playerCount);

            var greeting = createElement("h3");
            greeting.html("Hello " + name);
            greeting.position(130,180);
        })

    }
}