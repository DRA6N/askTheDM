
 var bst = require('bespoken-tools');
 var assert = require('assert');

var server = null;
var alexa = null;

// //creates a local lambda server and initializes the emulator
beforeEach(function (done) {
    server = new bst.LambdaServer('../src/index.js', 10000,false);
    alexa = new bst.BSTAlexa('http://localhost:10000?disableSignatureCheck=true',
        '../speechAssets/IntentSchema.json',
        '../speechAssets/SampleUtterances.txt','amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690');

    server.start(function () {
        alexa.start(function (error) {
            if (error != undefined) {
                console.error("Error: " + error);
            } else {
                done();
            }
        });
    });
});

// //tears down the local Lambda server and shuts down the emulator
afterEach(function (done) {
    alexa.stop(function () {
        server.stop(function () {
            done();
        });
    });
});

// LaunchRequest test
 it('Launches and then greets', function (done) {
     // Launch the skill via sending it a LaunchRequest
     alexa.launched(function (error, payload) {
        // Check that the welcome message is played
        assert.equal(payload.response.outputSpeech.ssml, '<speak> Welcome to Ask the DM. You can ask questions to get information about many of the mechanics in Dungeons and Dragons. For example, You can say things like, what\'s the range of fireball; or: how does blind affect me?... Please ask for help for a detailed explaination of this application. Now... what can I help you with? </speak>');
        done();
     });
 });

 // HelpIntent test
 it('User requests help interactive mode', function (done) {
     alexa.launched(function (error, response) {
        // Emulate the user saying 'help
         alexa.spoken('help', function (error,response) {
             alexa.intended('AMAZON.HelpIntent', null, function (error, response) {
                 assert.equal(response.response.outputSpeech.ssml, '<speak> Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask the DM, and follow with your question. For example say: Alexa ask the DM what is the range of fireball. As of version 2.0, you can roll multiple dice, and roll dee twenties with advantage and disadvantage. I have a working index, and can tell you what page in the players handbook you can find more information on many subjects. Also, you can get information about conditions, spells, feats, and items. For spells, you can get the following information: casting time, duration, range, components, spell type, damage and healing by level, short description and long description. For conditions and feats, simply include their name when asking for information. Items includes an exhaustive list of attributes like cost, type, or armor class.  If you are in interactive mode, say exit to quit. Now, what was your question? </speak>');
                 done();
             });
        });
     });
 });

 // what is fireball
 it('what is fireball', function (done) {
     alexa.launched(function (error, response) {
         // Emulate the user asking what fireball is
         alexa.spoken('what is {fireball}', function (error,response) {
             alexa.intended('SpellsIntent', {"Spell":"fireball"}, function (error, response) {
                 assert.equal(response.response.outputSpeech.ssml, '<speak> Each creature in a 20 foot radius sphere takes 8d6 fire damage on a failed Dexterity save, or half as much on a success. What else can I help with? </speak>');
                 done();
             });
         });
     });
 });

 // what is the range of fireball
 it('range of fireball', function (done) {
     alexa.launched(function (error, response) {
         // Emulate the user asking what the range of fireball
         alexa.spoken('what is the {range} of {fireball}', function (error,response) {
             alexa.intended('SpellsIntent', {"Attribute":"range", "Spell":"fireball"}, function (error, response) {
                 assert.equal(response.response.outputSpeech.ssml,'<speak> 150 feet What else can I help with? </speak>');
                 done();
             });
         });
     });
 });

 // what is the damage of level 3 fireball
 it('damage of level 3 fireball', function (done) {
     alexa.launched(function (error, response) {
         // Emulate the user asking what fireball is
         alexa.spoken('how much damage does {fireball} do at level {3}', function (error,response) {
             alexa.intended('SpellDamageIntent', {"SlotLevel":"3", "Spell":"fireball"}, function (error, response) {
                 assert.equal(response.response.outputSpeech.ssml,'<speak> A level 3, fireball does 8d6 fire damage. What else can I help with? </speak>');
                 done();
             });
         });
     });
 });
