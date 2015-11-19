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


  var denverlocation = new google.maps.LatLng(39.739236, -104.990251);
  var denvermaker = new MarkerWithLabel({
    position: denverlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Denver<br>April 21 & 22",
    labelAnchor: new google.maps.Point(20, 30),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

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

  google.maps.event.addListener(warsawmarker, "click", function (e) { location.href="/events/2016-washington-dc/"});

  var dclocation = new google.maps.LatLng(38.8011545,-77.0659376);
  var dcmarker = new MarkerWithLabel({
    position: dclocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Washington, DC<br>Jun 8 & 9",
    labelAnchor: new google.maps.Point(0, 0),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(dcmarker, "click", function (e) { location.href="/events/2016-minneapolis/"});

  var minneapolislocation = new google.maps.LatLng(44.9726428,-93.2752562);
  var minneapolismarker = new MarkerWithLabel({
    position: minneapolislocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Minneapolis<br>Jul 20 & 21",
    labelAnchor: new google.maps.Point(25, 0),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(minneapolismarker, "click", function (e) { location.href="/events/2016-washington-dc/"});

  var kiellocation = new google.maps.LatLng(54.34208,10.121949);
  var kielmarker = new MarkerWithLabel({
    position: kiellocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Kiel<br>May 12 & 13",
    labelAnchor: new google.maps.Point(20,-5),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(kielmarker, "click", function (e) { location.href="/events/2016-kiel/"});

  var seattlelocation = new google.maps.LatLng(47.609895, -122.330259);
  var seattlemarker = new MarkerWithLabel({
    position: seattlelocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Seattle<br>May 12 & 13",
    labelAnchor: new google.maps.Point(50,0),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(seattlemarker, "click", function (e) { location.href="/events/2016-seattle/"});
}
