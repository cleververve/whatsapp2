const axios = require("axios").default;
const token = process.env.WHATSAPP_TOKEN;

function getRequestUrl({phoneNumber}) {
    return "https://graph.facebook.com/v12.0/" + phoneNumber + "/messages?access_token=" + token;
}

function getHeaders() {
    return {"Content-Type": "application/json"};
}

exports.sendText = ({messageBody, phoneNumber, chatBotNum}) => {
    axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: getRequestUrl({phoneNumber}),
        data: {
            messaging_product: "whatsapp",
            to: chatBotNum,
            text: {body: messageBody},
        },
        headers: getHeaders(),
    }).then(r => {
        console.log('sendText.result', r);
    });
}
