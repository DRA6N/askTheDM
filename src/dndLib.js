let languageStrings = require("./languageStrings");
let langEN = languageStrings.en.translation;

// not found message handler
exports.notFoundMessage = function (slotName, userInput) {
	let speechOutput = langEN.NOT_FOUND_MESSAGE;
	if (userInput) {
		speechOutput += "the " + slotName + " info for " + userInput + ".";
	} else {
		speechOutput += langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
	}
	return speechOutput;
};
// returns the page(s) where a subject can be found
// in the 5e player's handbook
exports.pageFind = function (index, indexName) {
	let pageString = "";
	if (typeof index.pages === 'string') {
		pageString = index.pages
	} else {
		if (index.pages.length > 1) {
			pageString += "pages ";
			for (let i = 0; i <= index.pages.length - 2; i++) {
				pageString += index.pages[i] + ", "
			}
			pageString += "and " + index.pages[index.pages.length - 1]
		} else {
			pageString = "page " + index.pages
		}
	}
	return indexName + " can be found on " + pageString + ". ";
};
// roll dice function
exports.rollDice = function (quantity, sides) {
	let facevalue;
	let output = 0;
	for (let i = 0; i < quantity; i++) {
		facevalue = Math.floor(Math.random() * sides) + 1;
		output += facevalue;
	}
	return output;
};
// validates the slot, matches the value, and sets it
exports.validateAndSetSlot = function (slot) {
	if (slot && slot.value) {
		return slot.value.toLowerCase();
	} else {
		return null;
	}
};
//returns the conditions that can affect a player
exports.getConditions = function (requestedConditionName) {
	let condition = langEN.CONDITIONS[requestedConditionName];
	let output = "";
	if (condition) { //user requests information on condition
		output = condition;
	} else if (requestedConditionName) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Condition.name, requestedConditionName);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the rolled dice after user provided information
exports.getDiceRoll = function (numberOfDice, modifier, diceSides, status) {
	let output = "";
	let firstRoll;
	let secondRoll;
	let result;
	if ((diceSides == null) || (diceSides == "?") || (numberOfDice == "?")) {
		output = "I'm sorry I didn't quite catch that, please ask again";
		this.emit(':ask', output);
	}
	diceSides = diceSides.match(/\d+/).join("");
	if (status == null) {
		// calculate the result of a normal roll
		result = exports.rollDice(numberOfDice, diceSides) + Number(modifier);
		output = "The result of the roll is " + result;
	} else if (diceSides == 20) {
		// calculate the result of a roll with advantage/disadvantage
		firstRoll = exports.rollDice(numberOfDice, diceSides);
		secondRoll = exports.rollDice(numberOfDice, diceSides);
		if (status === "advantage") {
			result = Math.max(firstRoll, secondRoll) + Number(modifier);
		}
		if (status === "disadvantage") {
			result = Math.min(firstRoll, secondRoll) + Number(modifier);
		}
		output = "You roll with " + status + ". Your first roll is " + firstRoll + ", and your second roll is " + secondRoll + ". The result of the roll with modifiers is " + result;
	} else {
		output = "You can only have advantage or disadvantage on d 20 rolls"
	}
	return output;
};
//returns the exhaustion effects at each exhaustion level
exports.getExhaustion = function (requestedExhaustionLevel) {
	let output = "";
	let exhaustionLevel = langEN.EXHAUSTION_LEVELS[requestedExhaustionLevel];
	if (exhaustionLevel) { //user requests information on exhaustion levels
		output = exhaustionLevel;
	} else if (requestedExhaustionLevel) { //otherwise, the user asks for an unknown exhaustion level, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.ExLevel.name, requestedExhaustionLevel) + " exhaustion.";
	} else if (!requestedExhaustionLevel) {
		output = langEN.CONDITIONS.exhaustion;
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the equipment packs that each player can choose
exports.getEquipmentPack = function (requestedEquipmentPack) {
	let output = "";
	let equipmentPack = langEN.EQUIPMENT_PACKS[requestedEquipmentPack];
	let packItems = equipmentPack.items;
	if (equipmentPack) {
		if (packItems) {
			output = "The contents of " + requestedEquipmentPack + " are ";
			for (let i = 0; i < packItems.length; i++) {
				let itemObj = packItems[i];
				for (let x in itemObj) {
					output += (itemObj[x] + "\n");
				}
			}
		} else {
			output = equipmentPack;
		}
	} else if (requestedEquipmentPack) {
		output = exports.notFoundMessage(this.event.request.intent.slots.EquipmentPack.name, requestedEquipmentPack);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the feats that each player can choose
exports.getFeats = function (requestedFeat, requestedFeatAttribute) {
	let output = "";
	let thisFeat = langEN.FEATS[requestedFeat];
	let thisFeatAttribute = langEN.FEAT_ATTRIBUTES[requestedFeatAttribute];
	//user requests information on feats
	if (thisFeat && thisFeatAttribute) {
		output = thisFeat[thisFeatAttribute];
	} else if (thisFeat && !thisFeatAttribute) {
		output = thisFeat.description;
	} else if (requestedFeat) { //otherwise, the user asks for an unknown feat, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.Feat.name, requestedFeat);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the index page logic after user provided information
exports.getIndex = function (requestedIndexName) {
	let output = "";
	let index = langEN.INDEX[requestedIndexName];
	if (index) {
		output = exports.pageFind(index, requestedIndexName);
	} else if (requestedIndexName) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Index.name, requestedIndexName);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the items and their respective info requested from the user
exports.getItems = function (requestedItem, requestedItemAttribute) {
	let output = "";
	let item = langEN.ITEMS[requestedItem];
	let itemAttribute = langEN.ITEM_ATTRIBUTES[requestedItemAttribute];
	if (item && itemAttribute) {
		if (!item[itemAttribute]) { //if requested item attribute doesnt exist for requested item
			output = langEN.NOT_FOUND_MESSAGE + langEN.NOT_FOUND_WITHOUT_OBJECT_NAME;
		} else {
			output = item[itemAttribute];
		}
	} else if (item && !itemAttribute) { //user provides the item but the attributes doesnt exist. ie: shield has attribute 'strength', while daggers do not
		if (item.itemType) {
			output = "It is a " + item.itemType;
		} else {
			output = "It is a " + item.category;
		}
	} else if (requestedItem) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Item.name, requestedItem);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the requested spell attributes from the user
exports.getSpellCast = function (requestedSpell) {
	let spell = langEN.SPELLS[requestedSpell];
	let output = "";
	//user requests information on casting spell
	if (spell) {
		if (spell.slotLevel === "cantrip") {
			output = requestedSpell + " is a " + spell.school + " cantrip. To cast, you need the following: " + spell.components + ". The spell duration is " + spell.duration + " and has a range of " + spell.range;
		} else {
			output = requestedSpell + " is a level " + spell.slotLevel + " " + spell.school + " spell. To cast, you need the following: " + spell.components + ". The spell duration is " + spell.duration + " and has a range of " + spell.range;
		}
	} else if (!spell) { //otherwise, the user asks for an unknown spell, or Alexa doesn't understand
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};
//returns the requested class spell information from the user
exports.getClassLevel = function (requestedSpell, requestedSpellLevel, requestedClass) {
	let spell 	= langEN.SPELLS[requestedSpell];
	let level 	= langEN.SLOT_LEVEL[requestedSpellLevel];
	let spellClasses = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];
	let output = "";

	if (spell) { //if the requested spell exists
		if (spell.spellClass.indexOf(requestedClass) === -1) { //if the requested class does not exist in the array of classes
			output = "no";
		} else {
			if (spell.slotLevel > level) {
                output = "no";
			} else {
				output = "yes";
			}
		}
	}
	return output;
};
//returns the requested spell damage from the user
exports.getSpellDamage = function (requestedSpell, requestedSpellLevel) {
	let spell = langEN.SPELLS[requestedSpell];
	let level = langEN.SLOT_LEVEL[requestedSpellLevel];
	let output = "";
	let dmg = spell.damage.levels[level]; //stores the the damage of the spell at requested level
	let dmgType = spell.damage.type;
	if (spell && spell.damage === undefined) {
		output = "That spell does not do damage."
	} else if (spell && typeof spell.damage === 'string') {
		output = spell.damage;
	} else {
		if (spell && spell['slotLevel'] === 'cantrip') { //if the requested spell is a cantrip
			//dmg     = spell.damage.playerLevel[level];
			output = "At player level " + level + " the cantrip " + requestedSpell + " does " + dmg + " " + dmgType + ".";
		} else if (spell && level > 9) {
			output = "Player level only effects the damage done by cantrips. " + requestedSpell + " is a spell, and is cast using spell slots.";
		} else if (spell && !level) {
			output = "For damage amount, please include the slot or player level you wish to cast it at.";
		} else if (!spell || !level) {
			output = "I didn't hear the level or the spell name, please ask again.";
		} else { //if the requested spell is a normal spell
			output = "A level " + level + ", " + requestedSpell + " does " + dmg + " " + dmgType + ".";
		}
	}
	return output;
};
//returns the requested spell healing information from the user
exports.getSpellHeal = function (requestedSpell, requestedSpellLevel) {
	let spell = langEN.SPELLS[requestedSpell];
	let level = langEN.SLOT_LEVEL[requestedSpellLevel];
	let output = "";
	let heals = spell.healing.levels[level];
	if (spell && spell.healing === undefined) {
		output = "That spell does not restore health.";
	} else if (spell && typeof spell.healing === "string") {
		output = spell.healing;
	} else if (spell && !level) { //if the requested spell is provided but not the level
		output = "For healing amount, please include the spell slot level you wish to cast it at.";
	} else if (level && !spell) { //if the level is provided but not the spell
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	} else {
		//heals = spell.healing.levels[level];
		if (spell && level > 9) { //if the requested spell is cast using a slot above 9th
			output = "Healing spells can not be cast using spell slots above level 9.";
		} else {
			output = "At level " + level + " " + requestedSpell + " heals " + heals + " plus your spellcasting ability modifier.";
		}
	}
	return output;
};
//returns the requested spell and spell attribute from the user
exports.getSpells = function (requestedSpell, requestedSpellAttribute) {
	let output = "";
	let spell = langEN.SPELLS[requestedSpell];                    //spell exists in the list of spells
	let spellAttribute = langEN.SPELL_ATTRIBUTES[requestedSpellAttribute]; //spell attribute exists in the list of attributes
	//if the user asks for the attribute of a spell
	if (spell && requestedSpellAttribute) {
		//if the attribute is damage and the requested spell does not have damage
		if ((requestedSpellAttribute === "damage" || requestedSpellAttribute === "healing") && spell[spellAttribute] === undefined) {
			output = requestedSpell + " does not have " + requestedSpellAttribute + ".";
		} else if ((requestedSpellAttribute === "damage" || requestedSpellAttribute === "healing") && typeof spellAttribute === typeof String) {
			output = spell[spellAttribute];
		} else if (requestedSpellAttribute === "damage") {
			let dmgType = spell.damage.type;
			output = requestedSpell + " does " + dmgType + " . For damage amount, please include the slot or player level you wish to cast it at.";
		} else if (requestedSpellAttribute === "healing") { //i think we need this, but im not 100% sure
			output = "For healing amount, please include the spell slot level you wish to cast it at.";
		} else {
			output = spell[spellAttribute];
		}
	} else if (spell && !spellAttribute) {
		output = spell.shortDescription;
	} else if (requestedSpell) {
		output = exports.notFoundMessage(this.event.request.intent.slots.Spell.name, requestedSpell);
	} else {
		output = langEN.UNHANDLED;
	}
	return output;
};