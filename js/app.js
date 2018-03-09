mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYXMiLCJhIjoiUFdJckNoOCJ9.LGJOlhJCLddj5fk5da6ZjQ'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ramas/cijqw7bi20068bpm3h601g5op',
  center: [35.96, 11.70],
  zoom: 2.5,
  hash: true,
  attributionControl: false
})

let Mumbai = [72.853903, 18.970074]
let NY = [-73.969, 40.736]
let London = [-0.125698, 51.534093]
let Japan = [139.756776, 35.678041]
let Belgium = [4.379942, 50.878286]

// set specific zoom for each city
let MumbaiZoom = 13.33
let NYZoom = 13.06
let LondonZoom = 14.5
let JapanZoom = 14.56
let BelgiumZoom = 11

const fly = (city, cityZoom) => {
  map.flyTo({
    center: city,
    zoom: cityZoom,
    speed: 0.3,
    curve: 2,
    pitch: 50,
    bearing: 0
  })
}

const showhide = () => {
  let div = document.getElementById('sidebar')
  if (div.style.display !== 'none') {
    div.style.display = 'none'
  } else {
    div.style.display = 'block'
  }
}

map.on('click', function (e) {
  let features = map.queryRenderedFeatures(e.point, { layers: ['railwaystation copy'] })
  if (features.length > 0) {
    let popupHTML = '<h4>This is </h4><h5>' + '<a href="http://www.openstreetmap.org/node/' + features[0].properties._osm_node_id + '">' + features[0].properties.name + '</a>' + '</h5>'
    let popup = new mapboxgl.Popup()
      .setLngLat(features[0].geometry.coordinates)
      .setHTML(popupHTML)
      .addTo(map)
  }
})
