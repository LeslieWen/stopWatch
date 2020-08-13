
var timeContainer=document.getElementById("time-display");

var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");

btnStart.addEventListener("click",function(){
	renderHTML("start")
});

btnStop.addEventListener("click",function(){
	console.log("stop");	
});

btnReset.addEventListener("click",function(){
	console.log("reset");	
});

function renderHTML(data){
	var htmlString="<p>"+data+"</p>";
	timeContainer.insertAdjacentHTML('beforeend',htmlString);
}
