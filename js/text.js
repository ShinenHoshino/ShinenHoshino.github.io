var a = document.getElementById('all');
var b = document.getElementsByTagName("a");
function changecolor(color){
	// document.bgColor=color;
	switch(color){
 		case 0 : 
 			a.style.background ="url(../images/background.png)";a.style.color="#C0C4C3";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#C0C4C3";
 			}break;
 		case 1 : 
 			a.style.background ="#B2BBBE";a.style.color="#132C33";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#132C33";
 			}break;
 		case 2 : 
 			a.style.background ="#C0C4C3";a.style.color="#000";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#000";
 			}break;
 		case 3 : 
 			a.style.background ="#B4A992";a.style.color="#503E2A";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#503E2A";
 			}break;
 		case 4 : 
 			a.style.background ="#BDAEAD";a.style.color="#4B2E2B";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#4B2E2B";
 			}break;	
 		case 5 : 
 			a.style.background ="#617172";a.style.color="#EEF7F2";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#EEF7F2";
 			}break;	
 		default: 
 			a.style.background ="url(images/background.png)";a.style.color="#C0C4C3";
 			for (var i = b.length - 1; i >= 0; i--) {
 				b[i].style.color="#C0C4C3";
 			}break;
 	};
};
setTimeout(() => onClick(0), 0);