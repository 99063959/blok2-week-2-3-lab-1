var count1 = 0;
var count2 = 0;
var count3 = 0;

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var container = document.getElementById("container");
var number = document.getElementById("number");

button1.onclick = onbutton1clicked;
button2.onclick = onbutton2clicked;
button3.onclick = onbutton3clicked;

container.style.backgroundImage = "url('images/bg0.jpg')";

function onbutton1clicked(){
	count1++;
	button1.innerHTML = count1;
	number.src = "images/1.jpg"
	container.style.backgroundImage = "url('images/bg1.jpg')";
}

function onbutton2clicked(){
	count2++;
	button2.innerHTML = count2;
	number.src = "images/2.jpg"
	container.style.backgroundImage = "url('images/bg2.jpg')";
}

function onbutton3clicked(){
	count3++;
	button3.innerHTML = count3;
	number.src = "images/3.jpg"
	container.style.backgroundImage = "url('images/bg3.jpg')";
}