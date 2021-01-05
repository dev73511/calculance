document.addEventListener("DOMContentLoaded", function () {
  // for time picker 24 hrs
  var elems = document.querySelectorAll(".timepicker_24hr");
  M.Timepicker.init(elems, {
    twelveHour: false,
    defaultTime: "now",
    showClearBtn: true,
  });

  var timePicker = document.querySelectorAll(".timepicker");
  M.Timepicker.init(timePicker, {
    twelveHour: true,
    defaultTime: "now",
    showClearBtn: true,
  });

  // tooltip
  var tooltipped = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(tooltipped, {
    enterDelay: 200,
    exitDelay: 0,
    position: "top",
    inDuration: 300,
    outDuration: 250,
    transitionMovement: 10,
    margin: 5,
  });

  console.log(
    "%cSTOP!",
    "background: #222; color: #d02c2c; font-size: 45px; font-weight: bold;"
  );
  console.log(
    "%cThis is a browser feature intended for developers.!",
    "background: #222; color: #ccc; font-size: 20px; font-family: Source Sans Pro;"
  );
});
