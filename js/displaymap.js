function initMap() {


  var root = firebase.database().ref();

  var jsonArr = [];

  root.on("child_added", snap => {
    var long = snap.child("Longitued").val();
    var lat = snap.child("Latitude").val();

    root.once('value', function(snap){
        jsondata = JSON.stringify(snap.val());
        json = JSON.parse(jsondata);

        for (i in json) {
          var data = json[i],
            latLng = new google.maps.LatLng(data.Latitude, data.Longitued);

            // Creating a marker and putting it on the map
             var marker = new google.maps.Marker({
               position: latLng,
               map: map,
               title: "Marker"
             });
        }
    });

  });




  var map = new google.maps.Map(document.getElementById("mapDiv"), {
    center: new google.maps.LatLng(44.5384483, 18.6566819),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });




}//end initmap
