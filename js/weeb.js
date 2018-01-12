//insert video depending on time of day

//Morning: https://www.youtube.com/watch?v=ATcKBMYYSJs
//<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ATcKBMYYSJs?rel=0" frameborder="0" allowfullscreen></iframe>
//Afternoon: https://www.youtube.com/watch?v=-lkH-uMZVY4
//<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-lkH-uMZVY4?rel=0" frameborder="0" allowfullscreen></iframe>
//Night: https://www.youtube.com/watch?v=BnC-cpUCdns
//<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BnC-cpUCdns?rel=0" frameborder="0" allowfullscreen></iframe>

//Interesting Fonts:
//http://www.dafont.com/earwig-factory.font
//http://www.dafont.com/ransom-note.font

/*

To be reimplemented...

var amvHeaders = [
"It's morning...Wake up, get up, get out there!",
"Hack the day away...",
"Pretty late to be up..."
];

var amvSelection = [
"<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/ATcKBMYYSJs?rel=0' frameborder='0' allowfullscreen></iframe>",
"<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/-lkH-uMZVY4?rel=0' frameborder='0' allowfullscreen></iframe>",
"<iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/BnC-cpUCdns?rel=0' frameborder='0' allowfullscreen></iframe>"
];

var dateInit = new Date();
var currentHour = dateInit.getHours();

if (currentHour >= 4 && currentHour < 12)
{
  document.getElementById("youtubeHeader").innerHTML = amvHeaders[0];
  document.getElementById("youtubeAMV").innerHTML = amvSelection[0];
}
else if (currentHour >= 12 && currentHour < 20)
{
  document.getElementById("youtubeHeader").innerHTML = amvHeaders[1];
  document.getElementById("youtubeAMV").innerHTML = amvSelection[1];
}
else
{
  document.getElementById("youtubeHeader").innerHTML = amvHeaders[2];
  document.getElementById("youtubeAMV").innerHTML = amvSelection[2];
};


Oh, and the site's content...

<!DOCTYPE html>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="../css/weeb.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style id="parallaxStyling" type="text/css">

	body, html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.parallax7, .parallax8 {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 }

 .parallax7 {
 	background-image: url("../img/parallaxBG7.gif");
  	min-height: 100%;
 	}
 .parallax8 {
 	background-image: url("../img/parallaxBG8.gif");
 	min-height: 100%;
 }
 /* Turn off parallax scrolling for tablets and phones */

/*

@media only screen and (max-device-width: 1024px) {
    .parallax7, .parallax8 {
        background-attachment: scroll;
    }
}
</style>
<head>
	<title>CJZ - Anime</title>
</head>
<body>
    <div id="weebSiteNavi" class="center">
    <p class="paraHead">Site Navigation
    <a href="../index.html" class="buttonBlack">Home</a>
    <a href="../gaming/gaming.html" class="buttonBlack">Gaming/PC Discussion</a>
    <a href="../music/music.html" class="buttonBlack">Music</a>
    <a href="../weeb/weeb.html" class="buttonBlack">Anime</a>
    </p>
  </div>
  <div id="parallax7" class="parallax7">
    <br></br>
    <div id="animeHeader" class="center"><p>Anime</p></div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<div id="youtubeHeader"></div>
<br></br>
<div id="youtubeAMV" class="center"></div>
  </div>
  <div id="aniTable">
  <table style="max-width: 100%;" class="aniTable">
    <tr>
    <th><div><p>My Top Ten</p></div></th>
    <th><div><p>Currently Watching</p></div></th>
  </tr>
    <td>
      <div>
        <ol>
          <li>Steins;Gate</li>
          <li>Neon Genesis Evangelion</li>
          <li>Cowboy Bebop</li>
          <li>Puella Magi Madoka Magica</li>
          <li>Serial Experiements Lain</li>
          <li>JoJo's Bizarre Adventure</li>
          <li>Gosick</li>
          <li>Your Lie in April</li>
          <li>Angel Beats</li>
          <li>K-On</li>
          <li>Higurashi</li>
        </ol>
      </div>
    </td>
    <td>
      <ol>
        <li>JoJo's Bizarre Adventure</li>
        <li>New Game!</li>
      </ol>
    </td>
  </table>
</div>
<div id="parallax8" class="parallax8">
  <table id="sourceTable">
    <tr>
      <th>
        <div><p class="paraHead">Gif Sources: Steins;Gate (Top), Puella Magi Madoka Magica (Bottom)</p></div>
      </th>
    </tr>
  </table>
</div>
</body>
<script type="text/javascript" src="../js/weeb.js"></script>
</html>

*/