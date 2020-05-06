/* global L */
var final = L.map('final').setView([32.67, -99.47], 4)
var bangladeshLayerObject = L.layerGroup().addTo(final)
var grayBasemapObject = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(final)
var povertydata = ''
var basemapsObject = {
  'Gray canvas': grayBasemapObject
}
jQuery.getJSON(povertydata, function (data) {
  var population = function (feature) {
    var povertynumber = feature.properties.POP2010
    var color = 'red'
    if (povertynumber < 6162876.3) { color = 'pink' }
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
  L.geoJSON(data, popstyle).addTo(final)
})
var popfeature = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var population = feature.properties.POP2010
  layer.bindPopup('2010 State population of ' + name + ': ' + population + '<br>Population average: 6162876.3')
  bangladeshLayerObject.addLayer(layer)
}
var layersObject = {
  '2010 Population': statesLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(final)
