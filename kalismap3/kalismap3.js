/* global L */
var kalismap3 = L.map('kalismap3').setView([32.67, -99.47], 4)
var statesLayerObject = L.layerGroup().addTo(kalismap3)
var grayBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(kalismap3)
var popdata = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
var basemapsObject = {
  'Gray canvas': grayBasemapObject
}
jQuery.getJSON(popdata, function (data) {
  var population = function (feature) {
    var popnumber = feature.properties.POP2010
    var color = 'red'
    if (popnumber < 6162876.3) { color = 'pink' }
    return {
      color: color,
      weight: 1,
      fillOpacity: 0.5
    }
  }
  var popstyle = {
    style: population,
    onEachFeature: popfeature
  }
  L.geoJSON(data, popstyle).addTo(kalismap3)
})
var popfeature = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var population = feature.properties.POP2010
  layer.bindPopup('2010 State population of ' + name + ': ' + population + '<br>Population average: 6162876.3')
  statesLayerObject.addLayer(layer)
}
var layersObject = {
  '2010 Population': statesLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(kalismap3)
