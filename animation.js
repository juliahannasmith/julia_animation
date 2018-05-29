var bunny = document.getElementById("bunny");
var xpos1 = 5;
var lamb = document.getElementById("lamb");
var xpos2 = 580;
var id = setInterval(frame, 5);

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

window.addEventListener("keydown", changeThingColor);

function changeThingColor(event) {
    if (event.key === "arrowLeft"){
        bunny.style.background = "blue";
    } else {
        thing.style.background = "green";
    }
}
