# Kakao ADB development

Kakaotalk chatbot development in Windows ADB environment

- Auto compile with babel
- Auto push with ADB


### Prerequisites

Download ADB:
https://developer.android.com/studio/releases/platform-tools

place ADB folder as 'adb' in root project directory (replace the empty adb file)


```
yarn install
```

Connect your phone to pc over ADB.


### Config

config.js

```js
module.exports = {
    name: 'test', //bot name
    path: '/sdcard/katalkbot/Bots' //file path
}
```


### Scripts

```
yarn build
```
build + ADB push

```
yarn watch
```
watch /src (build + ADB push) 