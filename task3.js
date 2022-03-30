//<!-- Task 3.1-->

var num = 1;

function mouseOver() {
    document.getElementById("mcount").innerHTML = num++;
}

//<!-- Task 3.2-->

function clickPost() {
    var postContainer = document.createElement("div");
    postContainer.className = "post-container";

    var postBox = document.getElementById("posts");
    postBox.appendChild(postContainer);

    var date = new Date();
    var time = document.createElement("p");

    time.innerHTML = date;

    time.style.color = "grey";
    time.style.fontFamily = "bold";

    time.className = "post-time";

    postContainer.appendChild(time);

    var content = document.createElement("p");
    content.innerHTML = document.getElementById("box").value;

    content.className = "post-content";
    postContainer.appendChild(content);

}
//<!-- Task 3.3-->


function clickMenu() {
    var main = document.getElementById("main");
    main.style.display = "none";

    var menu = document.getElementById("menu");
    menu.style.display = "inline";

}

function clickBack() {
    var main = document.getElementById("main");

    main.style.display = "inline";

    var menu = document.getElementById("menu");

    menu.style.display = "none";

}

//<-- Task 3.5-->

function changeColor(color) {

    document.body.style.backgroundColor = color.value;

}