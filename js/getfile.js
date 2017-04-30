function initMap() {

  var root = firebase.database().ref();

  var jsonArr = [];

  root.on("child_added", snap => {
    var long = snap.child("Longitued").val();
    var lat = snap.child("Latitude").val();

            var lat = lat;
            var lng = long;
            var latlng = new google.maps.LatLng(lat, lng);
            var geocoder = geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                      var adresa = results[1].formatted_address;
                      //console.log("Location: " + results[1].formatted_address);
                      $("#report > p").prepend('<span> ' + adresa + '</span>');
                    }
                }
            });

  });

  root.once('value', function(snap){
      var jsondata = JSON.stringify(snap.val());
  });


}
