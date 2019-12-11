/*JavaScript Digital Clock*/
function digitalClock() {
  let currDateTime = new Date();

  let hour = currDateTime.getHours() % 12;
  hour = hour ? hour : 12;
  let hourString = ("0" + hour).slice(-2);

  let meridiem = currDateTime.getHours() >= 12 ? "PM" : "AM";

  let minute = currDateTime.getMinutes();
  let minuteString = ("0" + minute).slice(-2);

  let second = currDateTime.getSeconds();
  let secondString = ("0" + second).slice(-2);

  let month = currDateTime.getMonth();
  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      break;
  }
  let monthString = month + ", ";

  let date = currDateTime.getDate();
  let dateString = ("0" + date).slice(-2);

  let year = currDateTime.getFullYear();
  let yearString = year + ", ";

  let day = currDateTime.getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }
  let dayString = day;

  document.getElementById("dHour").innerText = hourString;
  document.getElementById("dMinute").innerText = minuteString;
  document.getElementById("dSecond").innerText = secondString;
  document.getElementById("ampm").innerText = meridiem;

  document.getElementById("dMonth").innerText = monthString;
  document.getElementById("dDate").innerText = dateString;
  document.getElementById("dYear").innerText = yearString;
  document.getElementById("dDay").innerText = dayString;
}
setInterval(digitalClock, 1100);

/* JQuery Todo, thanks to http://jsfiddle.net/daviddavidson/3P6KE/ */
$(document).ready(function($) {
  /* forgot this for a good long while, it really helps */
  $("form").submit(function() {
    if ($(".input").val() !== "") {
      var newTask = $(".input").val();
      var newLi = $("<li>" + newTask + "</li>");
      newLi.on("click", function() {
        $(this).remove();
      });
      $("ul").append(newLi);
      $(".input").val("");
      return false;
    }
  });
});

/* Geolocation stuff */
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function(location) {
    $("#country").html(location.country_name);
    $("#state").html(location.state);
    $("#city").html(location.city);
    $("#latitude").html(location.latitude);
    $("#longitude").html(location.longitude);
    $("#ip").html(location.IPv4);
  }
});
