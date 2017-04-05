# NodeJS ASK Alexa Device Address API Integration Sample Project

The Alexa Skills Kit now allows developers to build skills that can retrieve a user's address via the new Alexa Device Address API.
## How to Run the Sample

1. Clone the project and package the skill:
```bash
git clone git@github.com:alexa/skill-sample-node-device-address-api.git
cd skill-sample-node-device-address-api
npm install
```
2. Create or login to an [AWS account](https://aws.amazon.com/). In the AWS Console:

    1. Create an AWS Role in IAM with access to Lambda, CloudWatch Logs and DynamoDB.
        ![create_role_1](https://cloud.githubusercontent.com/assets/7671574/17451098/09f64f40-5b19-11e6-82ee-b82c98387052.png "AWS Create Role Screenshot 1")
        ![create_role_2](https://cloud.githubusercontent.com/assets/7671574/17451100/0c3ef928-5b19-11e6-9aca-8cd353106396.png "AWS Create Role Screenshot 2")
        ![create_role_3](https://cloud.githubusercontent.com/assets/7671574/18011103/7b05f2b2-6b68-11e6-8dc3-3aa9ead6d83e.png "AWS Create Role Screenshot 3")

    2. Create an AWS Lambda function named DeviceAddressLambdaFunction being sure to select the role created above, configuring "Alexa Skills Kit" as the "Trigger" and using the zip file created above as the source.
        ![alt text](https://s3.amazonaws.com/lantern-public-assets/audio-player-assets/aws-lambda-role.PNG "AWS Lambda Role")
        ![alt text](https://s3.amazonaws.com/lantern-public-assets/audio-player-assets/aws-lambda-ask-trigger.PNG "AWS Lambda Trigger")
    3. After creation, take note of the ARN on the upper right, which you'll configure in the Developer Console below.

3. Create or login to an [Amazon Developer account](https://developer.amazon.com).  In the Developer Console:

    1. [Create an Alexa Skill](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function) named MySkill and using the invocation name "my skill".
    2. Copy the contents of `speechAssets/intentSchema.json` and `speechAssets/Utterances.txt` into the intent schema and sample utterances fields on the Interaction Model tab.
        ![alt text](https://s3.amazonaws.com/lantern-public-assets/permissions-assets/intentSchema.png "Developer Portal Interaction Model")
        ![alt text](https://s3.amazonaws.com/lantern-public-assets/permissions-assets/utterances.png "Developer Portal Interaction Model")
    3. Specify that you'll need permissions for access to the user's address. For the scope of this sample skill, you'll want the full address.
        ![alt text](https://s3.amazonaws.com/lantern-public-assets/permissions-assets/permissions.png "Developer Portal Configuration")

4. Edit the src/index.js file. You'll want to make APP_ID equal the Application Id for your skill.

5. Compress your skill's source code into a single archive:
```
zip -r packagedSkill.zip *
```

6. Upload the packagedSkill.zip from earlier to your Lambda function via the Code tab on the AWS Lambda Console.

7. You can start using the skill on your device or in the simulator using the invocation phrase "Alexa, ask my skill what's my address".