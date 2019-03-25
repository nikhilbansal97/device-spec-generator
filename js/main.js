var abiList = ["armeabi", "armeabi-v7a", "arm64-v8a", "x86", "x86_64", "mips", "mips64"];
var localeList = ["en", "fr"];
var screenDensityList = [320, 640];
var sdkList = [22, 23, 24, 25, 26, 27, 28];

var selectedAbi = ""
var selectedLocale = ""
var selectedScreenDensity = 0
var selectedSdk = 0

function addListeners() {
  $('.abi-item').click(function () {
    selectedAbi = $(this).text()
    $('#abiValue').text(selectedAbi)
    generateJSON()
  })

  $('.locale-item').click(function () {
    selectedLocale = $(this).text()
    $('#localeValue').text(selectedLocale)
    generateJSON()
  })

  $('.screen-item').click(function () {
    selectedScreenDensity = $(this).text()
    $('#screenValue').text(selectedScreenDensity)
    generateJSON()
  })

  $('.sdk-item').click(function () {
    selectedSdk = $(this).text()
    $('#sdkValue').text(selectedSdk)
    generateJSON()
  })
}


function generateJSON() {
  if (isInfoValid()) {

  }
}

function isInfoValid() {
  return selectedAbi.length > 0 &&
    selectedLocale.length > 0 &&
    selectedSdk != 0 &&
    selectedScreenDensity != 0
}

addListeners()
