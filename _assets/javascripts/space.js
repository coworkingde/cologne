//= require vendor/leaflet-providers
//= require vendor/bouncemarker

function isMobile() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
var map = L.map('map', {zoomControl: false, scrollWheelZoom: false}).setView([50.9222007, 6.9628545359], 14);

var icon = L.icon({
      iconUrl: "/img/marker/badge_pink.png",
      shadowUrl: '/img/marker/shadow.png',
      iconSize:     [47, 27],
      shadowSize:   [77,37],
      iconAnchor:   [23, 13],
      shadowAnchor: [23, 12],
      popupAnchor:  [0, -3]
  })

L.tileLayer.provider('MapBox.slogmen.map-64a4ugze').addTo(map);
L.control.zoom({position: 'bottomleft'}).addTo(map);
L.marker([50.9222007, 6.9628545359],
  {icon: icon, bounceOnAdd: true, bounceOnAddOptions: {duration: 1200, height: 300}}
).addTo(map)
.bindPopup('<b>Coworking Cologne</b> <br> <span>An der Bottmühle 5<br />50678 Köln');

if (isMobile()) {
  map.dragging.disable();
};


