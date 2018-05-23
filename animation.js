var bunny = document.getElementById("bunny");
var xpos = 5;
var ypos = 175;
var id = setInterval(frame, 5);

function frame() {
    if (xpos == 580) {
        clearInterval(id);
        bunny.style.transform = scaleX(1);
    } else {
        xpos++;
        bunny.style.left = xpos + 'px';
    }
}
