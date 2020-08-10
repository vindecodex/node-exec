const { exec } = require('child_process');

const url = 'google.com'; // url
// const data = '--data "game_id=32&platform=ios"' // for post request
const headers = '-H "Content-Type: application/json"' // option for headers
const data = "";
exec(`curl ${url} ${data} ${headers}`, (err, stdout,stderr) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`stdout: ${stdout}`);
  }
})
