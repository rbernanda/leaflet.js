var map = L.map('mapId').setView([-6.175110, 106.865036], 3);

const tileURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL)

// Marker
const marker = L.marker([-6.175110, 106.865036]); // Jakarta, Indonesia
marker.bindPopup('You clicked Marker 1');
map.addLayer(marker);

// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('You are here!');
  map.addLayer(newMarker);
});

map.addLayer(tile);