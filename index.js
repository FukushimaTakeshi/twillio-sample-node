// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

exports.handler = function(event, context) {
  client.calls.create(
    {
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: process.env.TWILIO_MY_PHONE_NUMBER,
      from: process.env.TWILIO_PHONE_NUMBER,
    },
    (err, call) => {
      console.log(call.sid);
    }
  );
};
