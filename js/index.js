function changeFrame(i){
	var mainFrame = document.getElementById('mainFrame');
	var btntoAboutMe = document.getElementById('toAboutMe');
	var btnToStarryWorld = document.getElementById('toStarryWorld');
	var btntToEdimension = document.getElementById('toEdimension');
	var btnToSoulyu = document.getElementById('toSoulyu');
	var btnToHello = document.getElementById('toHello');
	btntoAboutMe.style.color="#fff";
	btnToStarryWorld.style.color="#fff";
	btntToEdimension.style.color="#fff";
	btnToSoulyu.style.color="#fff";
	btnToHello.style.color="#fff";
    switch(i){
    	case 1: mainFrame.src="aboutMe.html";btntoAboutMe.style.color="#51C4D3";break;
    	case 2: mainFrame.src="soulyu.html";btnToSoulyu.style.color="#51C4D3";break;
    	case 3: mainFrame.src="edimension.html";btntToEdimension.style.color="#51C4D3";break;
    	case 4: mainFrame.src="starryword.html";btnToStarryWorld.style.color="#51C4D3";break;
    	case 5: mainFrame.src="hello.html";btnToHello.style.color="#51C4D3";break;
    };
};

function leftI(){
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var btnLeftO = document.getElementById('leftO');
	left.className = 'left';
	left.style.opacity=0;
	left.style.height=0;
	right.className ='col-md-12 col-lg-12 col-sm-12 col-xs-12 right';
	btnLeftO.style.opacity=1;
};
function leftO(){
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var btnLeftO = document.getElementById('leftO');
	left.className = 'col-md-2 col-lg-2 col-sm-12 col-xs-12 left';
	left.style.opacity=1;
	left.style.height="100vh";
	right.className ='col-md-10 col-lg-10 col-sm-12 col-xs-12 right';
	btnLeftO.style.opacity=0;
};





