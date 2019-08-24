const pointCount = 7;
const circleRadius = 160;
const startAnimDelta = 5;
const circumference = Math.PI * circleRadius * 2;

var selectedItemIndex = -1;

var circlePath = document.getElementById('mask-circle');
var headPicture = document.getElementById('main-circle');
var renwujianjie = document.getElementById('renwujianjie');

/**
 * @description On Mouse Leave event handler for points
 */
const onMouseLeave = () => {
	let index = (selectedItemIndex !== -1) ? selectedItemIndex : 0;
	calculateOffset(index);
};

/**
 * @description On Click event handler for points
 * @param {Number} index - Index of list item
 */
const onClick = (index) => {
	//If already selected, deselect
	selectedItemIndex = (selectedItemIndex === index) ? -1 : index;
	calculateOffset(index);
	
	//Find active item, deselect
	let activeListItem = document.querySelectorAll('.navigation-circle-list-item.active');
	if (activeListItem.length > 0) activeListItem[0].classList.remove('active');
	
	//Find new item by index, select
	let listItem = document.querySelectorAll('.navigation-circle-list-item:nth-of-type(' + selectedItemIndex + ')');
	if (listItem.length > 0) listItem[0].classList.add('active');

	// Change head-picture and jieshao
	switch(index){
		case 1 : headPicture.style.background ="url(./images/h-shinen.png)";
		renwujianjie.innerHTML = "沈渊 男 19岁<br><br><br>守幽秘境之主、沈家现任家主<br><br>霍格沃茨魔法学校拉文克劳学院2017届毕业生<br><br>现为……中二病晚期_(:з」∠)_";break;
		case 2 : headPicture.style.background ="url(./images/h-seiko.png)";
		renwujianjie.innerHTML = "霜月圣冰 男 24岁<br><br><br>沈家三兄弟之长。<br><br>修伊·莫尔海森的私人助理。<br><br>在平行世界中受沈渊之邀前往守幽。";break;
		case 3 : headPicture.style.background ="url(./images/h-seiya.png)";
		renwujianjie.innerHTML = "沈夜 男 16岁<br><br><br>沈家三兄弟之幼。<br><br>伊森魂术学校水鹤学院在读生。<br><br>于平行世界中跌入星渊池误入守幽。";break;
		case 4 : headPicture.style.background ="url(./images/h-sekai.png)";
		renwujianjie.innerHTML = "沈珂 男 17岁<br><br><br>守幽黑白护兽之黑护兽。<br><br>和沈夜组成沉默寡言但实力超强组……相当可靠！<br><br>本体：黑色超长发金瞳藏獒犬。";break;
		case 5 : headPicture.style.background ="url(./images/h-siky.png)";
		renwujianjie.innerHTML = "沈琪 男 20岁<br><br><br>守幽黑白护兽之白护兽。<br><br>总认为自己英姿飒爽，实际上……好吧，其实还是很厉害的……我是说拆家方面……<br><br>本体：银发蓝瞳西伯利亚哈士奇。";break;
		case 6 : headPicture.style.background ="url(./images/h-seidraw.png)";
		renwujianjie.innerHTML = "沈卓 男 16岁<br><br><br>沈渊的画友。<br><br>生性叛逆、脑中充满不切实际的幻想、喜欢模仿他人。<br><br>代号：DTK。";break;
		case 7 : headPicture.style.background ="url(./images/h-seiri.png)";
		renwujianjie.innerHTML = "沈睿 男 27岁<br><br><br>沈渊的私人助理。<br><br>工作狂魔、最受不了沈渊仗势欺人，因此常在熟人面前损沈渊。当然在外人面前还是很给沈渊长脸的~<br><br>代号：Mr. Black Prince。";break;
		default: headPicture.style.background ="url(./images/h-default.png)";
		renwujianjie.innerHTML = "";break;
	};
};

/**
 * @description - Calculate offset for circle path by index of list item
 * @param {Number} index - Index of list item
 */
const calculateOffset = (index=0) => {
	let offset = 0;
	if (index == 1 ) {offset = 0;}
	else if (index !== 0) offset = (circumference / pointCount) * (pointCount - index + 1);
	
	circlePath.style.strokeDashoffset = `${offset}px`;
};

// INTRO


let buffer = 500;
let delay = 1000 * (1 + (pointCount / startAnimDelta) - (1 / startAnimDelta)) + buffer;

setTimeout(() => onClick(1), delay);