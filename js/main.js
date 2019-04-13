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
        <input type=\"radio\" class=\"item-density\" id=\"${density}\" name=\"density\" aria-label=\"Checkbox for following text input\">\
      </div>\
    </div>\
    <label class=\"form-control\">${density}</label>\
  </div>`)
  })

  sdkList.forEach((sdk) => {
    $(".sdk-container").append(`<div class=\"input-group mb-3\">\
    <div class=\"input-group-prepend\">\
      <div class=\"input-group-text\">\
        <input type=\"radio\" class=\"item-sdk\" id=\"${sdk}\" name=\"sdk\" aria-label=\"Checkbox for following text input\">\
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
  $('#generateButton').click(function () {
    generateJSON()
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
    input.checked = device.screenDensity == input.id
  })

  $(".item-sdk").each(function () {
    let input = $(this)[0]
    input.checked = device.sdkVersion == input.id
  })
}

function generateJSON() {
  if (isInfoValid()) {
    let deviceInfo = new DeviceInfo()

    let abiList = []
    $('.item-abi').each(function () {
      if ($(this)[0].checked) {
        abiList.push($(this)[0].name)
      }
    })
    deviceInfo.supportedAbis = abiList

    let localeList = []
    $('.item-locale').each(function () {
      if ($(this)[0].checked) {
        localeList.push($(this)[0].name)
      }
    })
    deviceInfo.supportedLocales = localeList

    $('.item-sdk').each(function () {
      if ($(this)[0].checked) {
        deviceInfo.sdkVersion = parseInt($(this)[0].id)
      }
    })

    $('.item-density').each(function () {
      if ($(this)[0].checked) {
        deviceInfo.screenDensity = parseInt($(this)[0].id)
      }
    })

    $('#generated-json').html(JSON.stringify(deviceInfo, null, "\t"))
  } else {
    $('.alert').show()
    setTimeout(() => {
      $('.alert').hide()
    }, 5000)
  }
}

function isInfoValid() {
  let abiSelected = false
  $('.item-abi').each(function () {
    if ($(this)[0].checked) {
      abiSelected = true
    }
  })
  let localeSelected = false
  $('.item-locale').each(function () {
    if ($(this)[0].checked) {
      localeSelected = true
    }
  })
  let sdkSelected = false
  $('.item-sdk').each(function () {
    if ($(this)[0].checked) {
      sdkSelected = true
    }
  })
  let densitySelected = false
  $('.item-density').each(function () {
    if ($(this)[0].checked) {
      densitySelected = true
    }
  })
  return abiSelected && localeSelected && sdkSelected && densitySelected
}

initDropDown()
addListeners()

class DeviceInfo {
  DeviceInfo(abiList, localeList, density, sdk) {
    this.supportedAbis = abiList
    this.supportedLocales = localeList
    this.screenDensity = density
    this.sdkVersion = sdk
  }
}