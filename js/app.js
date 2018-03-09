mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYXMiLCJhIjoiUFdJckNoOCJ9.LGJOlhJCLddj5fk5da6ZjQ';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/ramas/cijqw7bi20068bpm3h601g5op',
		center: [35.96, 11.70],
		zoom: 2.5,
		hash: true,
		attributionControl:false
	});

	var Mumbai = [72.853903,18.970074];
	var NY = [-73.969,40.736];
	var London = [-0.125698,51.534093];
	var Japan = [139.756776,35.678041]; 
	var Belgium = [4.379942,50.878286];


	//set specific zoom for each city
	var MumbaiZoom = 13.33;
	var NYZoom = 13.06;
	var LondonZoom = 14.5;
	var JapanZoom = 14.56;
    var BelgiumZoom = 11;



	function fly(city,cityZoom) {
    
    	map.flyTo({
        	center: city,
			zoom: cityZoom,
			speed:0.3,
			curve:2,
			pitch:50,
			bearing:0
	});
}



function showhide()
 {
      var div = document.getElementById("sidebar");
	  if (div.style.display !== "none") {
		  div.style.display = "none";
		}
	  else {
		    div.style.display = "block";
		}
 }


map.on('click', function (e) {
	console.log(map.getZoom());
	map.featuresAt(e.point, {
		radius: 10,
		layer: ['railwaystation copy'],
		includeGeometry: true
			}, function (err, features) {
				if (err) throw err;

				if (features.length > 0) {

					var popupHTML = '<h5>' + '<a href="http://www.openstreetmap.org/edit?editor=id&node=' + features[0].properties._osm_node_id +'">'+ features[0].properties.name+"</a>"+'</h5>'+ 
					                "Last edited by: "+ '<a href="http://www.openstreetmap.org/user/' + features[0].properties._user +'">' +features[0].properties._user+"</a>";

					var popup = new mapboxgl.Popup()
								.setLngLat(features[0].geometry.coordinates)
								.setHTML(popupHTML)
								.addTo(map);
							}
						});

});


