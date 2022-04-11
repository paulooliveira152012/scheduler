//first thing is to wrapp document in a ready method
$(document).ready(function () {
  // Displaying current date and time

  //creating new variable for current day
  var rightNow = document.querySelector("#currentDay");
  //special moment object that represents current time nd date
  var currentTime = moment();
  //seting the text content for current date and time
  rightNow.textContent = currentTime.format("MMM DD, YYYY - hh:mm:ss a");

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//Add event listener to parent container
$(".container").on("click"), function() {
    window.alert("Hey")
}



//wait for button click to save values to local storage
// $(".saveBtn").on("click", function () {
//     var text = $(this);
//     console.log(text);
//   });

});



