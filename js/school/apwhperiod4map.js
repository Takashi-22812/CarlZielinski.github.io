var currentMap = "../../img/school/apwhperiod4map/baseMap.png";

function setMap()
{
	document.getElementById("mapDiv").innerHTML = "<img src=" + "'" + currentMap + "'" + "'" + "height='2250'" + "width='1117'" + "title='Period 4 Map'" + "alt='Period 4 Map'" + ">";
}

function baseMap()
{
	currentMap = "../../img/school/apwhperiod4map/baseMap.png";
	setMap();
}

function socialMap()
{
	currentMap = "../../img/school/apwhperiod4map/socialMap.png";
	setMap();
} 

function politicalMap()
{
	currentMap = "../../img/school/apwhperiod4map/politicalMap.png";
	setMap();
}

function environmentalMap()
{
	currentMap = "../../img/school/apwhperiod4map/environmentalMap.png";
	setMap();
}

function culturalMap()
{
	currentMap = "../../img/school/apwhperiod4map/culturalMap.png";
	setMap();
}

function economicMap()
{
	currentMap = "../../img/school/apwhperiod4map/economicMap.png";
	setMap();
}

function textMap()
{
	document.getElementById("mapDiv").innerHTML = "<p class='paraHead'>The maps are pretty simple in what they describe. The first map covers the Protestant Revolution, the creation of Sikhism, the success and failure of Christian missionaries, and the creation of Wahhabi Islam. The second map shows the Fall of Constantinople, European colonization of the Americas, the Safavid Empire, the Mughal Empire, and the Qing Dynasty. The third map shows the fur trade in the Americas and Russia, and sugar plantations in the Caribbean. The fourth map shows the Enlightenment, the creation of the heliocentric theory, and the isolation of Japan. The fifth and final map shows Spain's silver in its colonies, and the fact that it made its way to China. The map also shows the two competing East Indian Companies, and the triangular slave trade.<br></br>Side note for fellow programmers: y’all will probably say something like this:</p> <img src='../../img/school/apwhperiod4map/shortenNewGame.png' height='360' width='640'><p class='paraHead'>The code isn’t the best, but it’s pretty good for someone rusty and working on a tight timeline</p>";
}

setMap();