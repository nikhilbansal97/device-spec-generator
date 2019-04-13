let deviceMap = new Map([
    ["One Plus Six", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 640,
        "sdkVersion": 27
    }],
    ["Samsung S10", {
        "supportedAbis": [
            "x86"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 420,
        "sdkVersion": 28
    }]
])

function getDeviceData(deviceName) {
    return deviceMap.get(deviceName)
}
