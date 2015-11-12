function initialize() {
  <!-- http://stackoverflow.com/questions/3472040/rgb-value-to-hsl-converter -->
  <!-- 197° - 78% 38% -->
  var darkStyle = [{
    featureType: 'water',
     elementType: 'all',
     stylers: [
       {visibility: 'simplified'} ,
     ]
  }];

  var homeLatLng=new google.maps.LatLng(40.4419, -72.1419)
  var map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 1,
    mapTypeControlOptions: {
      mapTypeIds: ['darkwater']
    },
    center: homeLatLng,
    mapTypeId: 'darkwater',
    disableDefaultUI: true,
  });

  map.mapTypes.set('darkwater', new google.maps.StyledMapType(darkStyle, { name: 'Dark' }));

  // Get Latitude and Longitude of a Point: http://itouchmap.com/latlong.html
  // Events


  var detroitlocation = new google.maps.LatLng(42.3595788,-83.0706835);
  var detroitmarker = new MarkerWithLabel({
    position: detroitlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Detroit<br>Nov 11 & 12",
    labelAnchor: new google.maps.Point(40, 70),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(detroitmarker, "click", function (e) { location.href="/events/2015-detroit/"});


  var ohiolocation = new google.maps.LatLng(39.9833, -82.9833);
  var ohiomarker = new MarkerWithLabel({
    position: ohiolocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Ohio<br>Nov 18 & 19",
    labelAnchor: new google.maps.Point(20, 30),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(ohiomarker, "click", function (e) { location.href="/events/2015-ohio/"});

  var warsawlocation = new google.maps.LatLng(52.1800879, 20.9788363);
  var warsawmarker = new MarkerWithLabel({
    position: warsawlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Warsaw<br>Nov 24 & 25",
    labelAnchor: new google.maps.Point(10, 25),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(warsawmarker, "click", function (e) { location.href="/events/2015-warsaw/"});

  var seattlelocation = new google.maps.LatLng(47.609895, -122.330259);
  var seattlemarker = new MarkerWithLabel({
    position: seattlelocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Seattle<br>May 12 & 13",
    labelAnchor: new google.maps.Point(0,0),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(seattlemarker, "click", function (e) { location.href="/events/2016-seattle/"});
}
