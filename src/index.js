'use strict';

// External imports
const Alexa = require('alexa-sdk');

// Local imports
const Handlers = require('./Handlers');

// Constants
const APP_ID = ""; // This value would be your Skill ID. You can find this on https://developer.amazon.com/

exports.handler = function (event, context, callback) {
    let alexa = Alexa.handler(event, context);

    alexa.appId = APP_ID;
    alexa.registerHandlers(Handlers);

    console.log(`Beginning execution for skill with APP_ID=${alexa.appId}`);
    alexa.execute();
    console.log(`Ending execution  for skill with APP_ID=${alexa.appId}`);
};