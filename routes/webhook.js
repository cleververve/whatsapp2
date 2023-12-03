const express = require("express");
const router = express.Router();
const whatsapp = require("../utils/whatsapp");

router.get('/tst',(req,res,next)=> {
    res.send('webhook!');
});

router.post('/wa', (req,res,next)=>{
    let body = req.body;

    // Check the Incoming webhook message
    console.log(JSON.stringify(body, null, 2));

    // info on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
    if (req.body.object) {

        if (
            req.body.entry &&
            req.body.entry[0].changes &&
            req.body.entry[0].changes[0] &&
            req.body.entry[0].changes[0].value.messages &&
            req.body.entry[0].changes[0].value.messages[0]
        ) {
            const entry = req.body.entry[0].changes[0].value;

            let phone_number_id = entry.metadata.phone_number_id;
            let from = entry.messages[0].from; // extract the phone number from the webhook payload
            let msg_body = entry.messages[0].text.body; // extract the message text from the webhook payload
            whatsapp.sendText({messageBody:msg_body,phoneNumber:phone_number_id,chatBotNum:from});
        }
        res.sendStatus(200);
    } else { // Return a '404 Not Found' if event is not from a WhatsApp API
        res.sendStatus(404);
    }
})

module.exports = router;
