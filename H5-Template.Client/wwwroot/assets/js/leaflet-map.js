var map = L.map('leaflet-map')
	.setView([51.508530, -0.076132], 12);
var marker = new L.marker([51.508530, -0.076132]).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.invalidateSize();
