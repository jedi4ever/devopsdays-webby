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


  var dclocation = new google.maps.LatLng(38.8011545,-77.0659376);
  var dcmarker = new MarkerWithLabel({
    position: dclocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Washington, DC<br>Jun 8 & 9",
    labelAnchor: new google.maps.Point(0, 28),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(dcmarker, "click", function (e) { location.href="/events/2016-washington-dc/"});

  var minneapolislocation = new google.maps.LatLng(44.9726428,-93.2752562);
  var minneapolismarker = new MarkerWithLabel({
    position: minneapolislocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Minneapolis<br>Jul 20 & 21",
    labelAnchor: new google.maps.Point(50, 75),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(minneapolismarker, "click", function (e) { location.href="/events/2016-minneapolis/"});

  var saltlakecitylocation = new google.maps.LatLng(40.7631, -111.8828);
  var saltlakecitymarker = new MarkerWithLabel({
  position: saltlakecitylocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "Salt Lake City<br>Jun 14 & 15",
  labelAnchor: new google.maps.Point(66, -5),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(saltlakecitymarker, "click", function (e) { location.href="/events/2016-saltlakecity/"});

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
    labelAnchor: new google.maps.Point(55,30),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(seattlemarker, "click", function (e) { location.href="/events/2016-seattle/"});

  var torontolocation = new google.maps.LatLng(43.7000, -79.4000);
  var torontomarker = new MarkerWithLabel({
  position: torontolocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "Toronto<br>May 26 & 27",
  labelAnchor: new google.maps.Point(-15, 92),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(torontomarker, "click", function (e) { location.href="/events/2016-toronto"});

  var amsterdamlocation = new google.maps.LatLng(52.373791, 4.920502);
  var amsterdammarker = new MarkerWithLabel({
    position: amsterdamlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Amsterdam<br>Jun 29, 30 & Jul 1",
    labelAnchor: new google.maps.Point(25, 25),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(amsterdammarker, "click", function (e) { location.href="/events/2016-amsterdam/"});

  var austinlocation = new google.maps.LatLng(30.2500, -97.7500);
  var austinmarker = new MarkerWithLabel({
  position: austinlocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "Austin<br>May 2 & 3",
  labelAnchor: new google.maps.Point(30, 0),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(austinmarker, "click", function (e) { location.href="/events/2016-austin"});

  var chicagolocation = new google.maps.LatLng(41.882219, -87.640530);
  var chicagomarker = new MarkerWithLabel({
    position: chicagolocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Chicago<br>Aug 30 & 31",
    labelAnchor: new google.maps.Point(40, 30),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });
  google.maps.event.addListener(chicagomarker, "click", function (e) { location.href="/events/2016-chicago/"});

  var detroitlocation = new google.maps.LatLng(42.331034, -83.046382);
  var detroitmarker = new MarkerWithLabel({
    position: detroitlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Detroit<br>Oct 12 & 13",
    labelAnchor: new google.maps.Point(40, 55),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });
  google.maps.event.addListener(detroitmarker, "click", function (e) { location.href="/events/2016-detroit"});

  var istanbullocation = new google.maps.LatLng(41.0136, 28.9550);
  var istanbulmarker = new MarkerWithLabel({
    position: istanbullocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Istanbul<br>Jun 3 & 4",
    labelAnchor: new google.maps.Point(25, 0),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(istanbulmarker, "click", function (e) { location.href="/events/2016-istanbul/"});

  var portlandlocation = new google.maps.LatLng(45.5200, -122.6819);
  var portlandmarker = new MarkerWithLabel({
    position: portlandlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Portland, OR<br>Aug 9 & 10",
    labelAnchor: new google.maps.Point(55, 10),
    labelClass: "labels",
    labelStyle: { opacity: 1 }
  });

  google.maps.event.addListener(portlandmarker, "click", function (e) { location.href="/events/2016-portland/"});

  var dallaslocation = new google.maps.LatLng(32.7767, -96.7970);
  var dallasmarker = new MarkerWithLabel({
  position: dallaslocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "Dallas<br>Sep 15 & 16",
  labelAnchor: new google.maps.Point(30, -30),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(dallasmarker, "click", function (e) { location.href="/events/2016-dallas"});

  var newyorklocation = new google.maps.LatLng(40.7127, -74.0059);
  var newyorkmarker = new MarkerWithLabel({
  position: newyorklocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "New York<br>Sep 23 & 24",
  labelAnchor: new google.maps.Point(-15, 76),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(newyorkmarker, "click", function (e) { location.href="/events/2016-newyork"});

  var philadelphialocation = new google.maps.LatLng(39.9500, -75.1667);
  var philadelphiamarker = new MarkerWithLabel({
  position: philadelphialocation,
  draggable: false,
  raiseOnDrag: false,
  map: map,
  labelContent: "Philadelphia<br>Oct 26 & 27",
  labelAnchor: new google.maps.Point(-10, 54),
  labelClass: "labels", // the CSS class for the label
  labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(philadelphiamarker, "click", function (e) { location.href="/events/2016-newyork"});

  var sflocation=new google.maps.LatLng(37.3894, -122.0819);
  var sfmarker = new MarkerWithLabel({
    position: sflocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Silicon Valley<br>Jun 24 & 25",
    labelAnchor: new google.maps.Point(55, -25),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(sfmarker, "click", function (e) { location.href="/events/2016-siliconvalley"});

  var oslolocation=new google.maps.LatLng(59.908174, 10.744303);
  var oslomarker = new MarkerWithLabel({
    position: oslolocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Oslo<br>Sep 5 & 6",
    labelAnchor: new google.maps.Point(55, 50),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(oslomarker, "click", function (e) { location.href="/events/2016-oslo"});

  var bostonlocation=new google.maps.LatLng(42.364506, -71.038887);
  var bostonmarker = new MarkerWithLabel({
    position: bostonlocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Boston<br>Aug 25 & 26",
    labelAnchor: new google.maps.Point(50, 80),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(bostonmarker, "click", function (e) { location.href="/events/2016-boston"});

  var boiselocation=new google.maps.LatLng(43.618881, -116.215019);
  var boisemarker = new MarkerWithLabel({
    position: boiselocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Boise<br>Oct 7 & 8",
    labelAnchor: new google.maps.Point(30, 50),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(boisemarker, "click", function (e) { location.href="/events/2016-boise"});

  var kansascitylocation=new google.maps.LatLng(39.0997, -94.5786);
  var kansascitymarker = new MarkerWithLabel({
    position: kansascitylocation,
    draggable: false,
    raiseOnDrag: false,
    map: map,
    labelContent: "Kansas City<br>Oct 20 & 21",
    labelAnchor: new google.maps.Point(50, 40),
    labelClass: "labels", // the CSS class for the label
    labelStyle: {opacity: 1}
  });

  google.maps.event.addListener(kansascitymarker, "click", function (e) { location.href="/events/2016-kansascity"});

}
