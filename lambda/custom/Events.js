'use strict';

/**
 * This file contains all the events that we'll be
 * interested in outside of a normal intent.
 */

/**
 * Your skill will receive a NewSession event when a
 * session has been started on your skill. An example of this would be
 * when a user says "open skill blah blah blah".
 */
const NEW_SESSION = "NewSession";

/**
 * Your service receives a LaunchRequest when the user invokes the skill with the
 * invocation name, but does not provide any command mapping to an intent.
 * Refer to the following URL for documentation:
 * https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/handling-requests-sent-by-alexa#launchrequest
 */
const LAUNCH_REQUEST = "LaunchRequest";

/**
 * Your service receives a SessionEndedRequest when a currently open session is closed.
 * https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/handling-requests-sent-by-alexa#sessionendedrequest
 */
const SESSION_ENDED = "SessionEndedRequest";

/**
 * Your skill will receive an Unhandled event when it receives an intent that
 * it has not registered for.
 */
const UNHANDLED = "Unhandled";

module.exports = {
    "NEW_SESSION": NEW_SESSION,
    "LAUNCH_REQUEST": LAUNCH_REQUEST,
    "SESSION_ENDED": SESSION_ENDED,
    "UNHANDLED": UNHANDLED
};