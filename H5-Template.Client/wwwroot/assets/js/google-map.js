function inintMap() {
	var location = {
		lat: 51.508530,
		lng: -0.076132
	};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}