var bunny = document.getElementById("bunny");
var xpos1 = 5;
var lamb = document.getElementById("lamb");
var xpos2 = 580;
var id = setInterval(frame, 10);

var meatball = document.getElementById("meatball");
var container = document.getElementById("container");

var olaf = document.getElementById("olaf");

function frame() {
    if (xpos1 == 580) {
        clearInterval(id);
    } else {
        xpos1++;
        bunny.style.left = xpos1 + 'px';
    }

    if (xpos2 == 0) {
        clearInterval(id);
    } else {
        xpos2--;
        lamb.style.left = xpos2 + 'px';
    }
}

container.addEventListener("click", moveThing);

function moveThing(event) {
    var xPosition = event.clientX -25;
	var yPosition = event.clientY -25;
	meatball.style.left = xPosition + "px";
	meatball.style.top = yPosition + "px";
}
