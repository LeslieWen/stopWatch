
var timeContainer=document.getElementById("time-display");
timeContainer.classList.add("hide-me");

var btnStart=document.getElementById("btn-start");
var btnStop=document.getElementById("btn-stop");
var btnReset=document.getElementById("btn-reset");

var today=new Date();
var date=today.getFullYear()+"-"+(today.getMonth()+1)+'-'+today.getDate();


btnStart.addEventListener("click",function(){
	renderHTML(Date.now());
});

btnStop.addEventListener("click",function(){
	console.log("stop");	
});

btnReset.addEventListener("click",function(){
	resetHTML();
});

function renderHTML(data){
	timeContainer.classList.remove("hide-me");
	var htmlString="<p>"+data+"</p>";
	timeContainer.innerHTML = data;

	//timeContainer.insertAdjacentHTML('beforeend',htmlString);
}

function resetHTML(){
	timeContainer.innerHTML="00:00:00"
}


