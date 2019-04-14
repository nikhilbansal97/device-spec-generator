let deviceMap = new Map([
    ["One Plus 6T", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 420,
        "sdkVersion": 28
    }],
    ["One Plus 6", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 420,
        "sdkVersion": 28
    }],
    ["One Plus 5T", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 420,
        "sdkVersion": 27
    }],
    ["One Plus 5", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 420,
        "sdkVersion": 27
    }],
    ["One Plus 3", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 420,
        "sdkVersion": 27
    }],
    ["One Plus 2", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a"
        ],
        "supportedLocales": [
            "en",
            "fr"
        ],
        "screenDensity": 320,
        "sdkVersion": 27
    }],
    ["Asus Zenphone 2", {
        "supportedAbis": [
            "x86",
            "x86_64"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 420,
        "sdkVersion": 28
    }],
    ["Samsung S10", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S9", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S8+", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S8", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S7 Edge", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S7", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S6", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Samsung S5", {
        "supportedAbis": [
            "x86_64",
            "x86"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 480,
        "sdkVersion": 28
    }],
    ["Nexus 6P", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Nexus 6", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a",
            "armeabi"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 640,
        "sdkVersion": 28
    }],
    ["Nexus 5X", {
        "supportedAbis": [
            "arm64-v8a",
            "armeabi-v7a"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 480,
        "sdkVersion": 28
    }],
    ["Nexus 5", {
        "supportedAbis": [
            "x86_64",
            "x86"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 480,
        "sdkVersion": 28
    }],
    ["Nexus 4", {
        "supportedAbis": [
            "x86_64",
            "x86"
        ],
        "supportedLocales": [
            "en"
        ],
        "screenDensity": 320,
        "sdkVersion": 28
    }]
])

function getDeviceData(deviceName) {
    return deviceMap.get(deviceName)
}

function getDevicesList() {
    return Array.from(deviceMap.keys())
}