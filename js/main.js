
var timeContainer=document.getElementById("time-display");


var btnStart=document.getElementById("btn-start");
var btnStop=document.getElementById("btn-stop");
var btnReset=document.getElementById("btn-reset");


btnStart.addEventListener("click",function(){
	timeContainer.classList.remove("hide-me");
	//renderHTML(now);
	var start=new Date().getTime();	
	var update = setInterval(function(){
	 	var now = new Date().getTime();
		var distance=now-start;
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  		renderHTML(hours,minutes,seconds);
	},1000); 
});

//This doesn't work
btnStop.addEventListener("click",function(){
	timeContainer.classList.add("hide-me");
	console.log("stop");	
});

//This doesn't work
btnReset.addEventListener("click",function(){
	resetHTML();
});

function renderHTML(h,m,s){
  	timeContainer.innerHTML = h + "h "+ m + "m " + s + "s ";
}

//This doesn't work
function resetHTML(){
	timeContainer.classList.remove("hide-me");
	timeContainer.innerHTML="0h 0m 0s"
}


