/* global L */
var kalismap = L.map('kalismap').setView([30.4515, -91.1871], 17)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(kalismap)
var batonrougeLevee = L.marker([30.45136, -91.190708]).addTo(kalismap)
var redstickfarmersMarket = L.polygon([
  [30.451714, -91.185725],
  [30.451714, -91.185944],
  [30.45241, -91.185944],
  [30.45241, -91.185725]

]).addTo(kalismap)
var polylinePoints = [
  [30.451646, -91.185958],
  [30.451499, -91.185956],
  [30.45136, -91.190708]
];
var polyline = L.polyline(polylinePoints).addTo(kalismap)
redstickfarmersMarket.bindPopup('Red Stick Farmers Market! Come here to get local, seasonal vegetables and fruits!')
batonrougeLevee.bindPopup('Baton Rouge Levee! Enjoy looking over the Mississippi River while snacking on goods from the farmers market :)')
