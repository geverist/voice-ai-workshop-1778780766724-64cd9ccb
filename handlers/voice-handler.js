/**
 * Voice Handler - TwiML Response
 *
 * Handles incoming/outbound calls with TwiML instructions.
 * Customized during the Twilio Voice AI Workshop.
 */

exports.handler = function(context, event, callback) {
  const twilio = require('twilio');
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say('Hello! Thank you for calling Toast Pizzeria.', { voice: 'Polly.Joanna' });

  const gather = twiml.gather({
    numDigits: 1,
    timeout: 10
  });
  
  gather.say('Press 1 to make, change or cancel a reservation. Press 2 to add or remove from waitlist. Press 3 to place a takeout or delivery order. Press 4 to ask about operating hours. Press 0 to speak with a representative.', { voice: 'Polly.Joanna' });

  twiml.say('We did not receive your selection. Goodbye!', { voice: 'Polly.Joanna' });
  twiml.hangup();

  callback(null, twiml);
};

module.exports = { handler: exports.handler };
