function chronometre(){
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

//Link Chrono Button

var startbtn = document.querySelector("#start");
startbtn.addEventListener("click",chronoStart);

var stopbtn = document.querySelector("#stop");
stopbtn.addEventListener("click",chronoStop);
stopbtn.addEventListener("click",getLastTime);

var resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click",chronoReset);

// Link Save Time Button 

var savebtn = document.querySelector("#savebtn");
savebtn.addEventListener("click",saveLastTime);

// Link Save & Reset & Load List Button

var saveListBtn = document.querySelector("#save_list_btn");
saveListBtn.addEventListener("click",saveTimesLocalStorage);

var resetListBtn = document.querySelector("#reset_list_btn");
resetListBtn.addEventListener("click",resetTimesList);


function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
}

var zero_one = 0;

function chronoStart(){
	if (zero_one == 0){
		start = new Date();
		chrono();
		zero_one = 1;
	}
	else {
		start = new Date()-diff;
		start = new Date(start);
		chrono()
	}
	timerID = setInterval(chrono,10)
}

function chronoStop(){
	clearTimeout(timerID);
}

function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000";
	start = new Date();
	zero_one = 0;
	chronoStop();
}

// Best time
var lastTime = document.querySelector("#last_time");
var stopTime = document.querySelector("#chronotime");

function getLastTime(){
	lastTime.innerText = stopTime.innerText;
}

// Save time 

var timeList = document.querySelector("#timelist");
var listName = document.querySelector("#listname_input");


function saveLastTime(){
	var newTime = lastTime.innerText;
	timeList.className = "timelist";
	var lign = document.createElement("li");
	lign.className = "savedtime";
	timeList.appendChild(lign);
	lign.innerText = newTime;
}

function saveTimesLocalStorage(){
	
	if (timeList.getElementsByTagName('li').length == 0){
		alert("Empty time list");
	}
	else if (listName.value == ""){
		alert("Empty input champ");
	}
	else{
		localStorage.setItem(listName.value, timeList.innerHTML);
		timeList.innerHTML = "";
		listName.value = "";
	}
}

function resetTimesList(){
	localStorage.removeItem(listName.value);
	listName.value = "";
	timeList.innerHTML = "";
}
}

export default chronometre;