var firstPerson = "Prasid";
var firstLocation = "Basirhat, India";

var secondPerson = "Samriddhi";
var secondLocation = "Meizhou, China";

var oneLoc = new Location(firstPerson, firstLocation, "one");

var twoLoc = new Location(secondPerson, secondLocation, "two");

var timeLeaveStamp = new Date(2024, 3, 25);

var timeMeetStamp = new Date(2024, 3, 6);

var earliestCall = 8;
var latestCall = 2;

oneLoc.loadData();
twoLoc.loadData();

var today = new Date();

var totalTime = dateDiff("d", timeLeaveStamp, timeMeetStamp);
var timeApart = dateDiff("d", timeLeaveStamp, today);
var timeTillMeet = dateDiff("d", today, timeMeetStamp) + 1;
if (timeTillMeet <= 0) timeTillMeet = 0;
if (totalTime < timeApart) timeApart = totalTime;
var heartRate = 1.084;
var heartbeats;

var pageTitle = document.getElementById("page-title");
pageTitle.innerHTML = oneLoc.name + " + " + twoLoc.name;

var separate = document.getElementById("time-separate");
separate.innerHTML = "Time apart: " + timeApart + " days.";

var together = document.getElementById("time-till-meet");
together.innerHTML = "Time until meet: " + timeTillMeet + " days.";

var bar = document.getElementById("heartbeats");
bar.style.width = (timeApart / totalTime) * 100 + "%";

function dateDiff(datetype, fromdate, todate) {
  datetype = datetype.toLowerCase();
  var diff = todate - fromdate;
  var divideBy = { w: 604800000, d: 86400000, h: 3600000, m: 60000, s: 1000 };
  return Math.floor(diff / divideBy[datetype]);
}

var beats = document.getElementById("heartbeats-left");

setInterval(function () {
  today = new Date();
  heartbeats = Math.floor(dateDiff("s", today, timeMeetStamp) * heartRate);
  if (heartbeats < 1) heartbeats = 0;
  beats.innerHTML = heartbeats + "<br> heartbeats <br> away";
}, 500);
