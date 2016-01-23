mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYXMiLCJhIjoiUFdJckNoOCJ9.LGJOlhJCLddj5fk5da6ZjQ';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/ramas/cijqw7bi20068bpm3h601g5op',
		center: [35.96, 11.70],
		zoom: 2.5
	});

	var Bengaluru = [77.60,12.98];
	var Paris = [2.35,48.86];
	var London = [-0.1023,51.4974];
	var NewYork = [286.01,40.73]; 

	function fly(city) {
    
    	map.flyTo({
        	center: city,
			zoom: 13.1,
			speed:0.3,
			curve:2,
			pitch:50,
			bearing:0
	});
}

map.addControl(new mapboxgl.Geocoder());

map.on('click', function (e) {
	
	map.featuresAt(e.point, {
		radius: 10,
		layer: ['railwaystation copy'],
		includeGeometry: true
			}, function (err, features) {
				if (err) throw err;

				if (features.length > 0) {

					var popupHTML = '<h5>' + features[0].properties.name + '</h5><p>'+ '</p>'+  "OSM contributor: "+ '<a href="http://www.openstreetmap.org/user/' + features[0].properties._user +'">' +features[0].properties._user+"</a>" ;

					var popup = new mapboxgl.Popup()
								.setLngLat(features[0].geometry.coordinates)
								.setHTML(popupHTML)
								.addTo(map);
							}
						});

});
