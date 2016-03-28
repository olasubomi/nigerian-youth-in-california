$(document).ready(function() {

  /*var date = new Date();
  var dateStr = (date.getMonth() + 1) + "/" + (date.getDate()) + "/" + date.getFullYear();
  document.getElementById("date-of-birth").max = dateStr;
  console.log(dateStr);
  console.log(document.getElementById("date-of-birth").max);*/

  $(function() {
    $("#datepicker").datepicker({ maxDate: new Date, minDate: new Date(2007, 6, 12) });
  });

  $.getJSON("../assets/jsondata/schools.json", function(data){
    var vals = [];
    vals = data.california.split(",");
    var $schoolChoice = $("#school-choice");

    $.each(vals, function(index, value) {
      $schoolChoice.append("<option>" + value + "</option>");
    });
  });

  $.getJSON("../assets/jsondata/tribes.json", function(data){
    var vals = [];
    vals = data.nigeria.split(";");
    var $tribeChoice = $("#tribe-choice");

    $.each(vals, function(index, value) {
      $tribeChoice.append("<option>" + value + "</option>");
    });
  });

  $.getJSON("../assets/jsondata/states.json", function(data){
    var vals = [];
    vals = data.nigeria.split(",");
    var $stateChoice = $("#state-residence-choice");

    $.each(vals, function(index, value) {
      $stateChoice.append("<option>" + value + "</option>");
    });

    $stateChoice2 = $("#state-origin-choice");

    $.each(vals, function(index, value) {
      $stateChoice2.append("<option>" + value + "</option>");
    });

  });

  $.getJSON("../assets/jsondata/majors.json", function(data){
    var vals = [];
    vals = data.majors.split(",");
    var $majorChoice = $("#major-choice");

    $.each(vals, function(index, value) {
      $majorChoice.append("<option>" + value + "</option>");
    });
  });

});
