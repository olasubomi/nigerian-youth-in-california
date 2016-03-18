$(document).ready(function(){

  $.getJSON("assets/jsondata/schools.json", function(data){
    var vals = [];
    vals = data.california.split(",");
    var $schoolChoice = $("#school-choice");

    $.each(vals, function(index, value) {
      $schoolChoice.append("<option>" + value + "</option>");
    });
  });

  $.getJSON("assets/jsondata/tribes.json", function(data){
    var vals = [];
    vals = data.nigeria.split(";");
    var $tribeChoice = $("#tribe-choice");

    $.each(vals, function(index, value) {
      $tribeChoice.append("<option>" + value + "</option>");
    });
  });

  $.getJSON("assets/jsondata/states.json", function(data){
    var vals = [];
    vals = data.nigeria.split(",");
    var $stateChoice = $("#state-choice");

    $.each(vals, function(index, value) {
      $stateChoice.append("<option>" + value + "</option>");
    });
  });

  $(".home-link").click(function(){
      $("#about").hide();
  });

  $(".sign-up-link").click(function(){
    $("#about").hide();
    $("#signUp").fadeIn();
  });

  $(".about-link").click(function(){
    $("#about").fadeIn();
  });

});
