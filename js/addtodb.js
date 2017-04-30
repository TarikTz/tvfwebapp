function submitClick() {

  var long = document.getElementById("long").value;
  var lat = document.getElementById("lat").value;
  var pac_input = document.getElementById("pac_input").value;
  var comment = document.getElementById("comment").value;


  var firebaseRef = firebase.database().ref();

  firebaseRef.push().set({
      Longitued: long,
      Latitude: lat,
      City: pac_input,
      Comments: comment
  });
}
