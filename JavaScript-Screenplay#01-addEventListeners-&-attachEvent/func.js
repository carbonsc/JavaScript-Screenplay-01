function evlisteners(){
if (window.addEventListener) {
	document.getElementById('button1').addEventListener('click',button_clicked,false);
	}
else if(window.attachEvent){
	document.getElementById('button1').attachEvent('onclick',button_clicked);
	}
}

function button_clicked (){

	alert('Button was clicked');
}

window.onload = function(){
	evlisteners();
}