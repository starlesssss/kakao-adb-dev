const config = require('./config.js');
const { exec } = require('child_process');

const dir = `${config.path}/${config.name}`;

console.log(`[i] pushing ${dir} ...`)

exec(`adb\\adb.exe shell rm -r -f ${dir} & adb\\adb.exe push dist/. ${dir}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    stdout && console.log(stdout);
    stderr && console.log(stderr);
});