// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACd47fec33b5186a1a24c522e70e967d21';
const authToken = 'e6256ee1619e013f77e67fd92efbd83b';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

exports.handler = function(event, context) {
  client.calls.create(
    {
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: '+818061400882',
      from: '+815031963578',
    },
    (err, call) => {
      console.log(call.sid);
    }
  );
};
