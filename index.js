const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const url_line_notification = "https://notify-api.line.me/api/notify";

request({
    method: 'POST',
    uri: url_line_notification,
    header: {
        'Content-Type': 'multipart/form-data',
    },
    auth: {
        bearer: process.env.LINE_TOKEN,
    },
    form: {
        message: `Hey everyone, the event "Test Bot #2" will start in 53 minutes at vocie-1.`
    },
}, (err, httpResponse, body) => {
    if (err) {
        console.log(err)
    } else {
        console.log(body)
    }
});