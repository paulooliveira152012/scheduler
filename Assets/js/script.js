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


  // (GETTING VALUES FROM LOCAL STORAGE)
function myTasks () {
  for (var i = 0; i < localStorage.length; i++) {
    var localStorageKey = localStorage.key(i)
    console.log(localStorageKey)
    $('#' + localStorageKey + " .appointment").val(localStorage.getItem(localStorageKey))
  } 
}

myTasks()

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^end of getting values from lcal storage

//function to change row colors based on past, present and future time

//get all elemtns .time-block // each => loop
$('.appointment').each(function() {
  // $(this).removeClass( "past present future" )
  //check time based on the id
  var currentTimeBlock = $(this).parent().attr("id").split("-")[1];
  console.log(currentTimeBlock)
  //get current time
  var currentHour = moment().hour();

  if (currentHour === parseInt(currentTimeBlock)) {
    $(this).addClass("present")
    } else if (parseInt(currentTimeBlock) < currentHour) {
    $(this).addClass("past")
    } else {
    $(this).addClass("future")
    };
});
});