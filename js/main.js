var abiList = ["armeabi", "armeabi-v7a", "arm64-v8a", "x86", "x86_64", "mips", "mips64"];
var localeList = ["en", "fr"];
var screenDensityList = [320, 640];
var sdkList = [22, 23, 24, 25, 26, 27, 28];
var devicesList = ["One Plus Six", "Samsung S10"]

function initDropDown() {
  devicesList.forEach((device) => {
    $('<a class="dropdown-item device-item"></a>').html(device).appendTo(".device-dropdown")
  })

  abiList.forEach((abi) => {
    $(".abi-container").append(`<div class=\"input-group mb-3\">\
    <div class=\"input-group-prepend\">\
      <div class=\"input-group-text\">\
        <input type=\"checkbox\" class=\"item-abi\" name=\"${abi}\" aria-label=\"Checkbox for following text input\">\
      </div>\
    </div>\
    <label class=\"form-control\">${abi}</label>\
  </div>`)
  })

  localeList.forEach((locale) => {
    $(".locale-container").append(`<div class=\"input-group mb-3\">\
    <div class=\"input-group-prepend\">\
      <div class=\"input-group-text\">\
        <input type=\"checkbox\" class=\"item-locale\" name=\"${locale}\" aria-label=\"Checkbox for following text input\">\
      </div>\
    </div>\
    <label class=\"form-control\">${locale}</label>\
  </div>`)
  })

  screenDensityList.forEach((density) => {
    $(".density-container").append(`<div class=\"input-group mb-3\">\
    <div class=\"input-group-prepend\">\
      <div class=\"input-group-text\">\
        <input type=\"checkbox\" class=\"item-density\" name=\"${density}\" aria-label=\"Checkbox for following text input\">\
      </div>\
    </div>\
    <label class=\"form-control\">${density}</label>\
  </div>`)
  })

  sdkList.forEach((sdk) => {
    $(".sdk-container").append(`<div class=\"input-group mb-3\">\
    <div class=\"input-group-prepend\">\
      <div class=\"input-group-text\">\
        <input type=\"checkbox\" class=\"item-sdk\" name=\"${sdk}\" aria-label=\"Checkbox for following text input\">\
      </div>\
    </div>\
    <label class=\"form-control\">${sdk}</label>\
  </div>`)
  })
}

function addListeners() {
  $('.device-item').click(function () {
    device = $(this).text()
    $('#deviceValue').text(device)
    loadJSON(device)
  })
}

function loadJSON(deviceName) {
  let device = getDeviceData(deviceName)

  $(".item-abi").each(function () {
    let input = $(this)[0]
    input.checked = device.supportedAbis.includes(input.name)
  }
  )

  $(".item-locale").each(function () {
    let input = $(this)[0]
    input.checked = device.supportedLocales.includes(input.name)
  })

  $(".item-density").each(function () {
    let input = $(this)[0]
    input.checked = device.screenDensity == input.name
  })

  $(".item-sdk").each(function () {
    let input = $(this)[0]
    input.checked = device.sdkVersion == input.name
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

initDropDown()
addListeners()
