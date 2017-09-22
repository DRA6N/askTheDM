'use strict';

var Alexa           = require('alexa-sdk');
var APP_ID          = "amzn1.ask.skill.30397146-5043-48df-a40f-144d37d39690";
var languageStrings = require('./languageStrings');
var alexaLib        = require('./alexaLib.js');
var langEN          = languageStrings.en.translation;

// noinspection JSUnusedLocalSymbols
exports.handler = function(event, context, callback) {
    var alexa       = Alexa.handler(event, context);
    alexa.APP_ID    = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'ConditionsIntent': function () {
        var conditionSlot = this.event.request.intent.slots.Condition;
        var conditionName = alexaLib.validateAndSetSlot(conditionSlot);
        var conditions    = langEN.CONDITIONS;
        var condition     = conditions[conditionName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on condition
        if (condition) {
            this.attributes['speechOutput'] = condition;
        }else if (conditionName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(conditionSlot.name, conditionName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'DiceIntent' : function () {
        var numberOfDiceSlot = this.event.request.intent.slots.Quantity;
        var diceSidesSlot    = this.event.request.intent.slots.Sides;
        var modifierSlot     = this.event.request.intent.slots.Modifier;
        var statusSlot       = this.event.request.intent.slots.Status;
        var numberOfDice     = alexaLib.validateAndSetSlot(numberOfDiceSlot);
        var diceSides        = alexaLib.validateAndSetSlot(diceSidesSlot);
        var status           = alexaLib.validateAndSetSlot(statusSlot);
        var modifier         = alexaLib.validateAndSetSlot(modifierSlot);
        var firstRoll;
        var secondRoll;
        var result;

        if(numberOfDice==null) numberOfDice = 1;
        if(modifier==null) modifier = 0;

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if((diceSides == null) || (numberOfDice == null) || (diceSides == "?") || (numberOfDice == "?") || (modifier == "?")){
            this.attributes['speechOutput'] = "I'm sorry I didn't quite catch that, please ask again";
            this.emit(':ask', this.attributes['speechOutput']);
        }

        diceSides = diceSides.match(/\d+/).join("");

        if (status == null) {
            // calculate the result of a normal roll
            result = alexaLib.rollDice(numberOfDice,diceSides) + Number(modifier);
            this.attributes['speechOutput'] = "The result of the roll is " + result;
        }else if(diceSides==20){
            // calculate the result of a roll with advantage/disadvantage
            firstRoll  = alexaLib.rollDice(numberOfDice,diceSides);
            secondRoll = alexaLib.rollDice(numberOfDice,diceSides);

            if (status === "advantage") {
                result = Math.max(firstRoll,secondRoll) + Number(modifier);
            }

            if (status === "disadvantage") {
                result = Math.min(firstRoll,secondRoll) + Number(modifier);
            }

            this.attributes['speechOutput'] = "You roll with "
                                            + status 
                                            + ". Your first roll is " 
                                            + firstRoll
                                            + ", and your second roll is "
                                            + secondRoll
                                            + ". The result of the roll with modifiers is "
                                            + result;
        }else{
            this.attributes['speechOutput'] = "You can only have advantage or disadvantage on d 20 rolls"
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ExhaustionLevelIntent': function () {
        var exhaustionSlot       = this.event.request.intent.slots.Level;
        var exhaustionLevelInput = alexaLib.validateAndSetSlot(exhaustionSlot);
        var exhaustionLevelList  = langEN.EXHAUSTION_LEVELS; 
        var exhaustionLevel      = exhaustionLevelList[exhaustionLevelInput];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on exhaustion levels
        if (exhaustionLevel) {
            this.attributes['speechOutput'] = exhaustionLevel;

        //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
        }else if (exhaustionLevelInput) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(exhaustionSlot.name, exhaustionLevelInput) + " exhaustion";
        
        // }else if (exhaustionLevelInput > 6){ //todo: refactor exhaustion levels, similar to how slotLevels work
        //     this.attributes['speechOutput'] = "At " + exhaustionLevel + " your character is beyond dead. Anything beyond level 6 exhaustion is really exhausting.";
        }else if (!exhaustionLevelInput) {
            this.attributes['speechOutput'] = langEN.CONDITIONS.exhaustion;
        }
        else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }
        else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'FeatsIntent': function() {
        var featSlot          = this.event.request.intent.slots.Feats;
        var featAttributeSlot = this.event.request.intent.slots.FeatsAttr;
        var featAttrName      = alexaLib.validateAndSetSlot(featAttributeSlot);
        var featName          = alexaLib.validateAndSetSlot(featSlot);
        var featsList         = langEN.FEATS; 
        var featsAttrList     = langEN.FEAT_ATTRIBUTES;
        var thisFeat          = featsList[featName];
        var thisFeatAttr      = featsAttrList[featAttrName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on feats
        if (thisFeat && thisFeatAttr) {
            this.attributes['speechOutput'] = thisFeat[thisFeatAttr]; 
        }else if(thisFeat && !thisFeatAttr){
            this.attributes['speechOutput'] = thisFeat.description;

        //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
        }else if (featName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(featSlot.name, featName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'IncompleteIntent' : function () {
        this.attributes['continue']     = true;
        this.attributes['speechOutput'] = langEN.INCOMPLETE_REQUEST;
        this.emit(':ask', this.attributes['speechOutput']);
    },
    'IndexIntent' : function(){
        var indexSlot = this.event.request.intent.slots.Index;
        var indexName = alexaLib.validateAndSetSlot(indexSlot);
        var indexList = langEN.INDEX;
        var index     = indexList[indexName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(index){
            this.attributes['speechOutput'] = alexaLib.pageFind(index, indexName);
        }else if (indexName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(indexSlot.name, indexName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'ItemsIntent': function () {
        var itemSlot            = this.event.request.intent.slots.Item;
        var itemAttributeSlot   = this.event.request.intent.slots.ItemAttribute;
        var itemName            = alexaLib.validateAndSetSlot(itemSlot);
        var itemAttributeName   = alexaLib.validateAndSetSlot(itemAttributeSlot);
        var itemList            = langEN.ITEMS;
        var itemAttributeList   = langEN.ITEM_ATTRIBUTES;
        var item                = itemList[itemName];
        var itemAttribute       = itemAttributeList[itemAttributeName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(item && itemAttribute){
            if(!item[itemAttribute]){
                this.attributes['speechOutput'] = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
            } else {
                this.attributes['speechOutput']  = item[itemAttribute];
            }
        }else if(item && !itemAttribute){
            if(item.itemType){
                this.attributes['speechOutput'] = "It is a " + item.itemType;
            } else {
                this.attributes['speechOutput'] = "It is a " + item.category;
            }
        }else if (itemName) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(itemSlot.name,itemName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellCastIntent': function () {
        var spellSlot = this.event.request.intent.slots.Spell;
        var spellName = alexaLib.validateAndSetSlot(spellSlot);
        var spells = langEN.SPELLS;
        var spell  = spells[spellName];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        //user requests information on casting spell
        if (spell) {
            if(spell.slotLevel === "cantrip") {
                this.attributes['speechOutput'] = spellName + " is a "
                    + spell.school + " cantrip. To cast, you need the following: "
                    + spell.components + ". The spell duration is "
                    + spell.duration + " and has a range of "
                    + spell.range;
            } else {
                this.attributes['speechOutput'] = spellName + " is a level "
                    + spell.slotLevel + " "
                    + spell.school + " spell. To cast, you need the following: "
                    + spell.components + ". The spell duration is "
                    + spell.duration + " and has a range of "
                    + spell.range;
            }

        //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
        }else if (!spell) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        } 

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellDamageIntent': function(){
        var requestedSpell          = alexaLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellLevel     = alexaLib.validateAndSetSlot(this.event.request.intent.slots.SlotLevel);
        var spell                   = langEN.SPELLS[requestedSpell];
        var level                   = langEN.SLOT_LEVEL[requestedSpellLevel];

        this.attributes['repromptSpeech'] = langEN.REPROMPT;
        
        if(spell && spell.damage===undefined){
            this.attributes['speechOutput'] = "That spell does not do damage."
        }else if(spell && typeof spell.damage === 'string')
        {
            this.attributes['speechOutput'] = spell.damage;
        }
        else
        {
            if(spell && spell['slotLevel'] === 'cantrip')
            { //if the requested spell is a cantrip
                var dmg = spell.damage.playerLevel[level]; //stores the the damage of the spell at requested level
                var dmgType = spell.damage.type;
                this.attributes['speechOutput'] = "At player level " + level
                                                + " the cantrip " + requestedSpell
                                                + " does " + dmg + " " + dmgType + ".";
            }else if(spell && level > 9){
                this.attributes['speechOutput'] = "Player level only effects the damage done by cantrips. "
                                                + requestedSpell + " is a spell, and is cast using spell slots.";
            }else if (spell && !level){
                this.attributes['speechOutput'] =  "For damage amount, please include the slot or player level you wish to cast it at.";
            }else if (!spell || !level) {
                this.attributes['speechOutput'] = "I didn't hear the level or the spell name, please ask again.";
            }else
            { //if the requested spell is a normal spell
                var dmg = spell.damage.levels[level]; //stores the the damage of the spell at requested level
                var dmgType = spell.damage.type;
                this.attributes['speechOutput'] = "A level " + level + ", "
                                                + requestedSpell + " does "
                                                + dmg + " " + dmgType + ".";
            }
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " "
                + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }

    },
    'SpellHealIntent': function(){
        var requestedLevelSlot      = this.event.request.intent.slots.SlotLevel;
        var spellSlot               = this.event.request.intent.slots.Spell;
        var spellName               = alexaLib.validateAndSetSlot(spellSlot);
        var spellLevel              = alexaLib.validateAndSetSlot(requestedLevelSlot);
        var levels                  = langEN.SLOT_LEVEL;
        var spells                  = langEN.SPELLS;
        var spell                   = spells[spellName];
        var level                   = levels[spellLevel];
        
        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        if(spell && typeof spell.healing === 'string')
        { //add conditional to check if the healing is a string or array using typeof()
            this.attributes['speechOutput'] = spell.healing;
        }else if (spell && !level) //if the requested spell is provided but not the level
        {
            this.attributes['speechOutput'] =  "For healing amount, please include the spell slot level you wish to cast it at.";
        }
        else if(level && !spell) //if the level is provided but not the spell
        {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, spellName);
        }
        else
        {
            if (spell.healing != null)
            { //if the requested spell is healing spell
                var heals = spell.healing.levels[level];
                
                if(spell && level > 9) //if the requested spell is cast using a slot above 9th
                {
                    this.attributes['speechOutput'] = "Healing spells can not be cast using spell slots above level 9.";
                }
                else
                {
                    this.attributes['speechOutput'] = "At level " + level
                                                    + " " + spellName
                                                    + " heals " + heals
                                                    + " plus your spellcasting ability modifier.";
                }
            }
            else
            {
                this.attributes['speechOutput'] = "That spell does not restore health.";
            }
        }

        if(this.attributes['continue']){ 
            this.emit(':ask', this.attributes['speechOutput'] + " "
                + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'SpellsIntent': function () {
        var requestedSpell          = alexaLib.validateAndSetSlot(this.event.request.intent.slots.Spell);
        var requestedSpellAttribute = alexaLib.validateAndSetSlot(this.event.request.intent.slots.Attribute);
        var spell                   = langEN.SPELLS[requestedSpell];                    //spell exists in the list of spells
        var spellAttribute          = langEN.SPELL_ATTRIBUTES[requestedSpellAttribute]; //spell attribute exists in the list of attributes

        this.attributes['repromptSpeech'] = langEN.REPROMPT;

        this.attributes['speechOutput'] = requestedSpellAttribute;

        // //if the user asks for the attribute of a spell
        if (spell && requestedSpellAttribute) {
            //if the attribute is damage and the requested spell does not have damage
            if(requestedSpellAttribute==="damage" && spell[spellAttribute]===undefined) {
                this.attributes['speechOutput'] = requestedSpell + ' does not have damage.';
            }else if(requestedSpellAttribute==="damage" && typeof spellAttribute === String) {
                this.attributes['speechOutput'] = spell[spellAttribute];
            }else if(requestedSpellAttribute==="damage"){
                var dmgType = spell.damage.type;
                this.attributes['speechOutput'] = requestedSpell + ' does ' + dmgType + ' . For damage amount, please include the slot or player level you wish to cast it at.';
            }else{
                this.attributes['speechOutput'] = spell[spellAttribute];
            }
        }else if(spell && !spellAttribute) {
            this.attributes['speechOutput'] = spell.shortDescription;
        }else if (requestedSpell) {
            this.attributes['speechOutput'] = alexaLib.notFoundMessage(spellSlot.name, requestedSpell);
        }else {
            this.attributes['speechOutput'] = langEN.UNHANDLED;
        }

        if(this.attributes['continue']){
            this.emit(':ask', this.attributes['speechOutput'] + " " + this.attributes['repromptSpeech']);
        }else{
            this.emit(':tell', this.attributes['speechOutput']);
        }
    },
    'Unhandled': function () {
        this.attributes['continue']         = true;
        this.attributes['speechOutput']     = langEN.UNHANDLED;
        this.attributes['repromptSpeech']   = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    //Required Amazon Intents 
    'LaunchRequest': function () {
        // Alexa, ask [my-skill-invocation-name] to (do something)...
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['continue']         = true;
        this.attributes['speechOutput']     = langEN.WELCOME_MESSAGE;
        this.attributes['repromptSpeech']   = langEN.WELCOME_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.HelpIntent': function () {
        this.attributes['speechOutput'] = langEN.HELP_MESSAGE;
        this.attributes['repromptSpeech'] = langEN.HELP_REPROMPT;
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech']);
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest':function () {
        this.emit(':tell', langEN.STOP_MESSAGE);
    }
};
