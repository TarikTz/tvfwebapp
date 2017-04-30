$(document).ready(function() {

  var root = firebase.database().ref();

  var jsonArr = [];

  root.on("child_added", snap => {
    var long = snap.child("Longitued").val();
    var lat = snap.child("Latitude").val();

    $("#report").append("<p><span>" + long +"</span>; <span>"+ lat +"</span></p>");
  });

  root.once('value', function(snap){
      var jsondata = JSON.stringify(snap.val());
  });


});
