/* global L */
var final = L.map('final').setView([23.6850, 90.3563], 6)
var bangladeshLayerObject = L.layerGroup().addTo(final)
var grayBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(final)
var povertydata = 'https://kalimartin.github.io/final/zila-poverty.geojson'
var basemapsObject = {
  'Gray canvas': grayBasemapObject
}
jQuery.getJSON(povertydata, function (data) {
  var population = function (feature) {
    var povertynumber = feature.properties.povertyRatio
  }
  var popstyle = {
    style: population,
    onEachFeature: popfeature
  }
  L.geoJSON(data, popstyle).addTo(final)
})
var popfeature = function (feature, layer) {
  var name = feature.properties.zila
  var population = feature.properties.povertyRatio
  layer.bindPopup(name + ' impoverished population (%)' + ': ' + population + '<br>National average of those living in poverty (%): 32.3')
  bangladeshLayerObject.addLayer(layer)
}
var layersObject = {
  'Poverty': bandladeshLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(final)
