/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const messages = {
  WELCOME: 'Welcome to the Sample Device Address API Skill!  You can ask for the device address by saying what is my address.  What do you want to ask?',
  WHAT_DO_YOU_WANT: 'What do you want to ask?',
  NOTIFY_MISSING_PERMISSIONS: 'Please enable Location permissions in the Amazon Alexa app.',
  NO_ADDRESS: 'It looks like you don\'t have an address set. You can set your address from the companion app.',
  ADDRESS_AVAILABLE: 'Here is your full address: ',
  ERROR: 'Uh Oh. Looks like something went wrong.',
  LOCATION_FAILURE: 'There was an error with the Device Address API. Please try again.',
  GOODBYE: 'Bye! Thanks for using the Sample Device Address API Skill!',
  UNHANDLED: 'This skill doesn\'t support that. Please ask something else.',
  SKILL_NAME = 'Device Address',
  FALLBACK_MESSAGE = `The ${SKILL_NAME} skill can\'t help you with that.  It can help skills to request and access the configured address in the customer’s device settings if you where am I located. What can I help you with?`,
  FALLBACK_REPROMPT = 'What can I help you with?',
  HELP: 'You can use this skill by asking something like: whats my address?',
  STOP: 'Bye! Thanks for using the Sample Device Address API Skill!',
};

const PERMISSIONS = ['read::alexa:device:all:address'];

const LaunchRequest = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak(messages.WELCOME)
      .reprompt(messages.WHAT_DO_YOU_WANT)
      .getResponse();
  },
};

const GetAddressIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' && request.intent.name === 'GetAddressIntent';
  },
  async handle(handlerInput) {
    const { requestEnvelope, serviceClientFactory, responseBuilder } = handlerInput;

    const consentToken = requestEnvelope.context.System.user.permissions
      && requestEnvelope.context.System.user.permissions.consentToken;
    if (!consentToken) {
      return responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard(PERMISSIONS)
        .getResponse();
    }
    try {
      const { deviceId } = requestEnvelope.context.System.device;
      const deviceAddressServiceClient = serviceClientFactory.getDeviceAddressServiceClient();
      const address = await deviceAddressServiceClient.getFullAddress(deviceId);

      console.log('Address successfully retrieved, now responding to user.');

      let response;
      if (address.addressLine1 === null && address.stateOrRegion === null) {
        response = responseBuilder.speak(messages.NO_ADDRESS).getResponse();
      } else {
        const ADDRESS_MESSAGE = `${messages.ADDRESS_AVAILABLE + address.addressLine1}, ${address.stateOrRegion}, ${address.postalCode}`;
        response = responseBuilder.speak(ADDRESS_MESSAGE).getResponse();
      }
      return response;
    } catch (error) {
      if (error.name !== 'ServiceError') {
        const response = responseBuilder.speak(messages.ERROR).getResponse();
        return response;
      }
      throw error;
    }
  },
};

const SessionEndedRequest = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const UnhandledIntent = {
  canHandle() {
    return true;
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.UNHANDLED)
      .reprompt(messages.UNHANDLED)
      .getResponse();
  },
};

const HelpIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.HELP)
      .reprompt(messages.HELP)
      .getResponse();
  },
};

const CancelIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.GOODBYE)
      .getResponse();
  },
};

const StopIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.STOP)
      .getResponse();
  },
};

const GetAddressError = {
  canHandle(handlerInput, error) {
    return error.name === 'ServiceError';
  },
  handle(handlerInput, error) {
    if (error.statusCode === 403) {
      return handlerInput.responseBuilder
        .speak(messages.NOTIFY_MISSING_PERMISSIONS)
        .withAskForPermissionsConsentCard(PERMISSIONS)
        .getResponse();
    }
    return handlerInput.responseBuilder
      .speak(messages.LOCATION_FAILURE)
      .reprompt(messages.LOCATION_FAILURE)
      .getResponse();
  },
};

const FallbackHandler = {
  // 2018-May-01: AMAZON.FallackIntent is only currently available in en-US locale.
  //              This handler will not be triggered except in that locale, so it can be
  //              safely deployed for any locale.
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.FallbackIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(messages.FALLBACK_MESSAGE)
      .reprompt(messages.FALLBACK_REPROMPT)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequest,
    GetAddressIntent,
    SessionEndedRequest,
    HelpIntent,
    CancelIntent,
    StopIntent,
    FallbackHandler,
    UnhandledIntent,
  )
  .addErrorHandlers(GetAddressError)
  .withApiClient(new Alexa.DefaultApiClient())
  .lambda();
