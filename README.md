[![Build Status](https://travis-ci.org/ig-perez/skill-sample-node-device-address-api.svg?branch=ContinuousIntegration)](https://travis-ci.org/ig-perez/skill-sample-node-device-address-api)
[![codecov](https://codecov.io/gh/ig-perez/skill-sample-node-device-address-api/branch/ContinuousIntegration/graph/badge.svg)](https://codecov.io/gh/ig-perez/skill-sample-node-device-address-api)

# Device Address API Integration Sample Project
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-off._TTH_.png)](./instructions/1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](./instructions/2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](./instructions/3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](./instructions/4-testing.md)

## What You Will Learn
*  [AWS Lambda](http://aws.amazon.com/lambda)
*  [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit)
*  Device Address API

## What You Will Need
*  [Amazon Developer Portal Account](http://developer.amazon.com)
*  [Amazon Web Services Account](http://aws.amazon.com/)
*  The sample code on [GitHub](https://github.com/alexa/skill-sample-node-device-address-api).

## What Your Skill Will Do
The new Device Address API enables skills to request and access the configured address in the customer’s device settings. This means you can build skills with the context to understand the customers who use the skill, then use the data to customize the voice experience. Your skill, for example, can deliver food and groceries to a customer’s home or provide directions to a nearby gym. You can also see where your most active users are. Check out our documentation to learn more.

When a user enables a skill with the Alexa app that wants to use location data, the user will be prompted to provide consent for location data to be made available. There are two levels of location data you can request:


Full address, which includes street address, city, state, zip, and country
Country and postal code only
When a user enables a skill that wants to use this location data, the user will be prompted in the Alexa app to consent to the location data being shared with the skill. It is important to note that when a user enables a skill via voice, the user will not be prompted for this information and the default choice will be "none." In this case, you can use cards to prompt the user to provide consent using the Alexa app.


<a href="./instructions/1-voice-user-interface.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_get_started._TTH_.png" /></a>

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
