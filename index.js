'use strict';

/**
 * This is a simple file that aliases your skill handler to a root
 * level file so that you don't have to tinker with Lambda handler paths.
 * This will make the default lambda value of "index.handler" work.
 */

const MyAlexaSkill = require('./src/index');

exports.handler = MyAlexaSkill.handler;