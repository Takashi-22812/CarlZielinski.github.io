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
