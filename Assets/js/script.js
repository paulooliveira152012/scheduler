//first thing is to wrapp document in a ready method
$(document).ready(function () {
  // Displaying current date and time

  //creating new variable for current day
  //   var rightNow = document.querySelector("#currentDay");
  //special moment object that represents current time nd date
  //   var currentTime = moment();
  //seting the text content for current date and time
  //   rightNow.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a");

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


  //   var hour = document.getElementById();
  //wait for button click to save values to local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".appointment").val();
    var time = $(this).parent().attr("id");

    //loacl storage takes two parameters => key and value
    localStorage.setItem(time, value);
  });
});

// bring data in from local storage to display on page

$('#hour-8, .appointment').val(localStorage.getItem('hour-8'));


// localStorage.getItem(key, value)
