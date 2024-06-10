"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Punit Kumar    
   Date: 2004-06-03

*/

//Display the current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Year's End
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hr";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";


function runClock(){

   //New variables for date-time
   var currentDay = new Date();
   var dateString = currentDay.toLocaleDateString();
   var timeString = currentDay.toLocaleTimeString();


   /*
   This is a  
   multi
   line
   comment
   */

   //We are dynamically setting Current Time
   document.getElementById("dateNow").innerHTML = 
   dateString + "<br />" + timeString;


   //Calculate the days until January 1st
   var newYear = new Date("January 1, 2018");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay) / (1000*60*60*24);

   var days = document.getElementById("days");

   //Display the time left until New Year's Eve

   //days
   days.innerHTML = daysLeft;
   days.textContent = Math.floor(daysLeft);

   //hours
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);

   //minutes
   var minsLeft = (hrsLeft  - Math.floor(hrsLeft))*60;
   document.getElementById("mins").textContent = Math.floor(minsLeft);

   //seconds
   var secsLeft = (minsLeft  - Math.floor(minsLeft))*60;
   document.getElementById("secs").textContent = Math.floor(secsLeft);

}


var watch = setInterval(() =>{
   runClock();
}, 1000);

runClock();

var stopButton = document.getElementById("stop");

stopButton.addEventListener("click", () =>{
      clearInterval(watch);
});





