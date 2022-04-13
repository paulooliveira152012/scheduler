//first thing is to wrapp document in a ready method
$(document).ready(function () {
  // Displaying current date and time

//creating new variable for current day
var rightNow = document.querySelector("#currentDay");
//special moment object that represents current time nd date
var currentTime = moment();
//seting the text content for current date and time
rightNow.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a");

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^end of getting to show time

// (SETTING VALUES TO LOCAL STORAGE)

//   var hour = document.getElementById();
//wait for button click to save values to local storage
$(".saveBtn").on("click", function () {
var value = $(this).siblings(".appointment").val();
var time = $(this).parent().attr("id");
//loacl storage takes two parameters => key and value
localStorage.setItem(time, value);
});
});

  // (GETTING VALUES FROM LOCAL STORAGE)
$('#hour-8 .appointment').val(localStorage.getItem('hour-8')); 
$('#hour-9 .appointment').val(localStorage.getItem('hour-9')); 
$('#hour-10 .appointment').val(localStorage.getItem('hour-10')); 
$('#hour-11 .appointment').val(localStorage.getItem('hour-11')); 
$('#hour-12 .appointment').val(localStorage.getItem('hour-12')); 
$('#hour-13 .appointment').val(localStorage.getItem('hour-13')); 
$('#hour-14 .appointment').val(localStorage.getItem('hour-14')); 
$('#hour-15 .appointment').val(localStorage.getItem('hour-15')); 
$('#hour-16 .appointment').val(localStorage.getItem('hour-16')); 

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^end of getting values from lcal storage