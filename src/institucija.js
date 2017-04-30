		function initialize() {
        
        var center = new google.maps.LatLng(43.915886,17.67907600000001);

        var map = new google.maps.Map(document.getElementById('institucije'), {
          zoom: 7,
          center: center,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        

        var markers = [];
        for (var i = 0; i < test.photos.length; i++) {
          var dataPhoto = test.photos[i];
          var latLng = new google.maps.LatLng(dataPhoto.latitude,
              dataPhoto.longitude);

          var infowindow = new google.maps.InfoWindow(
          	dataPhoto.contentString
          );

          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: dataPhoto.ikona
          });

          bindInfoWindow(marker, map, infowindow, dataPhoto.contentString);
          markers.push(marker);
        }


        var markerCluster = new MarkerClusterer(map, markers);
      }

      function bindInfoWindow(marker, map, infowindow, description) {
    	marker.addListener('click', function() {
        infowindow.setContent(description);
        infowindow.open(map, this);
    });
}
      google.maps.event.addDomListener(window, "load", initialize);