module.exports = { //TODO:add fighter, monk, and rogue classes
	"CLASSES" : {
		"barbarian": {
			"class_description": {
				"shortDesc": "The relentless combatant, fueled by fury or it's totem bonds with animals. In tune with the natural order.",
				"longDesc": "The barbarian is a primal warrior who prefers to charge in to engage foes in melee. They can follow either the Path of the Berserker, focusing on dealing as much damage as possible in melee combat, or the Path of the Totem Warrior, accepting an animal as a spiritual guide for a more druid-like experience."
			},
			"class_hit_point": {
				"hit_dice": "1d12",
				"1st_level": "12 plus your Constitution modifier.",
				"higher_levels": "Based on average rolls, 7 plus your Constitution modifier, per barbarian level past 1st."
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "Recommended to choose Strength, followed by Constitution as your highest ability scores.",
				"background": "It is advised to take the outlander background for your character.",
				"starting_spells": "Barbarians do not have the ability to cast spells."
			},
			"class_proficiencies": {
				"armor_prof": [
					"Light armor",
					"medium armor",
					"shields"
				],
				"weapon_prof": [
					"Simple weapons",
					"Martial weapons"
				],
				"tools": ["None"],
				"saving_throw_prof": [
					"Strength",
					"Constitution"
				],
				"skills": ["Choose two from either Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival."]
			},
			"equipment": { //FIXME: will be reworked, possibly into an equipment_pack.js file
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "An explorer's pack and four javelins.",
				"weapons_1": "A greataxe.",
				"weapons_2": "Any martial melee weapon.",
				"weapons_3": "Two handaxes.",
				"weapons_4": "Any simple weapon.",
				"equipment_pack_1": " Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."
			},
			"class_spells": {},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"rage": { //FIXME: how much info on rage should we give?
					"description": "You fight with primal ferocity. On your turn, you can enter a rage as a bonus action. Your rage lasts for 1 minute.",
					"more_info": "If you are able to cast spells, you can't cast or concentrate on them while raging. Your rage ends early if you are knocked unconscious or if your turn ends and you havent attacked a hostile creature since your last turn or havent taken damage since then.", //FIXME: this info might change or be removed, if deemed too much
					"benefits": "You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases based on your barbarian level. You have resistance to bludgeoning, piercing, and slashing damage.",
					"rages": { //TODO: format == minPlayerLvl : "number of rages",
						1: "2",
						3: "3",
						6: "4",
						12: "5",
						17: "6",
						20: "unlimited"
					},
					"rage_damage": { //TODO: format == minPlayerLvl : "rage damage",
						1: "+2",
						9: "+3",
						16: "+4"
					},
					"replenish": "Once you have used all your rage, which is based on your player level. You must finish a long rest before you can rage again."
				},
				"unarmored defense": "While you are not wearing any armor, your armor class equals 10 plus your Dexterity modifier plus your Constitution modifier. You can still use a shield and have this benefit.",
				"reckless attack": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
				"danger sense":"At 2nd level, you gain an uncanny sense of when things nearby arent as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
				},
			"subclass": {
				"primal path": {
					"description": "At 3rd level, you choose a path that shapes the nature of your rage.",
					"path of the berserker": {
						"description": "For some barbarians, rage is a means to an end, that end being violence. The path of the berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
						"frenzy": "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
						"mindless rage": "Beginning at 6th level, you cant be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
						"intimidating presence": "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30ft of you. IF the creature can see or hear you, it must succeed on a Wisdom saving throw, the DC is equal to 8 plus your proficiency bonus plus your Charisma modifier, or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60ft away from you. If the creature succeeds on its saving throw, you cant use this feature on that creature again for 24 hours.", //FIXME: might break this out, this is a lot of info in one value
						"retaliation": "Starting at 14th level, when you take damage from a creature that is within 5ft of you, you can use your reaction to make a melee weapon attack against that creature."
					},
					"path of the totem warrior": {
						"description": "The path of the totem warrior is a spiritual journey as the barbarian accepts a spirit animal as a guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
						"spirit seeker": "At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals.",
						"totem spirit": {
							"description": "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object, an amulet or similar adornment, that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit.",
							"animal_spirits": {
								"bear": "The spirit of the bear makes you tough enough to stand up to any punishment. While raging, you have resistance to all damage except psychic damage.",
								"eagle": "The spirit of the eagle makes you into a predator who can weave through the fray with ease. While youre raging and arent wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn.",
								"wolf": "The spirit of the wolf makes you a leader of hunters. While youre raging your friends have advantage on melee attack rolls against any creature within 5ft of you that is hostile to you."
							}
						},
						"aspect of the beast": {
							"description": "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
							"animal_spirits": {
								"bear": "You gain the might of a bear. Your carrying capacity is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
								"eagle": "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100ft away from you. Additionally, dim light doesnt impose disadvantage on your Wisdom(Perception) checks.",
								"wolf": "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
							}
						},
						"spirit walker": "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spirit version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
						"totemic attunement": {
							"description": "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
							"animal_spirits": {
								"bear": "While youre raging, any creature within 5ft of you thats hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it cant see or hear you or if it cant be frightened.",
								"eagle": "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts: you fall if you end your turn in the air and nothing else is holding you aloft.",
								"wolf": "While youre raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with a melee weapon attack."
							}
						}
					}
				}
			},
			"extra attack": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
			"ability_score_improvement": { //format == player_level: options
				//"At 4th, 8th, 12th, 16th, and 19th level you can increase one ability score by 2, or increase 2 ability scores by 1. As normal, you cant increase an ability score above 20 using this feature." //FIXME: might just leave this section as a string.
				4: "Increase one ability score by 2, or increase 2 ability scores by 1.",
				8: "Increase one ability score by 2, or increase 2 ability scores by 1.",
				12: "Increase one ability score by 2, or increase 2 ability scores by 1.",
				16: "Increase one ability score by 2, or increase 2 ability scores by 1.",
				19: "Increase one ability score by 2, or increase 2 ability scores by 1."
			},
			"fast movement": "Starting at 5th level, your speed increases by 10ft while you arent wearing heavy armor.",
			"feral instinct": "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and arent incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.",
			"brutal critical": "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level, and three additional dice at 17th level.",
			"relentless rage": "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you are raging and dont die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.",
			"persistent rage": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
			"indomitable might": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
			"primal champion": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
		}, //end of barbarian class
		"bard" : {
			"class_description": {
				"shortDesc": "A story teller or musician using his wits, magic, and lore to get out of or avoid tight situations.",
				"longDesc": "The bard uses music and magic to support and inspire the rest of the party. Bards can specialize in the College of Lore, which allows for a more versatile character who can learn some spells and become proficient in the player's choice of skills, or the College of Valor, which makes the bard more martial and combat-oriented, or a number of other directions based on their focus."
			},
			"class_hit_point": {
				"hit_dice": "1d8",
				"1st_level": "8 plus your Constitution modifier",
				"higher_levels": "Based on average rolls, 5 plus your Constitution modifier, per bard level after 1st level."
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "Recommended to choose Charisma, followed by Dexterity as your highest ability scores.",
				"background": "It is advised to take the entertainer background for your character.",
				"starting_spells": "Alexa recommends you choose vicious mockery and dancing lights as your first cantrips. Regarding 1st-level spells, we recommend taking the charm person, detect magic, healing word, and thunderwave as your first spells."
			},
			"class_proficiencies": {
				"armor_prof": ["Light armor"],
				"weapon_prof": ["Simple weapon", "hand crossbows", "longswords", "rapiers", "shortswords"],
				"tools": ["Three musical instruments of your choice."],
				"saving_throw_prof": ["Dexterity", "Charisma"],
				"skills": ["You may choose any three skills of your choice to be proficient in."]
			},
			"equipment": { //FIXME: will be reworked, possibly into an equipment_pack.js file
				//TODO: this section is weird. We should talk about it before developming any further
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "Leather armor and a dagger",
				"weapons_1": "A rapier",
				"weapons_2": "A longsword",
				"weapons_3": "Any simple weapon",
				"equipment_pack_1": "A diplomat's pack which includes a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.",
				"equipment_pack_2": "An entertainer's pack which includes a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.",
				"options_1": "A lute",
				"options_2": "Any other musical instrument",
				"skills": ["You may choose any three skills of your choice to be proficient in."]
			},
			"class_spells": {
				"slot_levels" : {
					0: [1,"blade ward", "dancing lights", "friends", "light", "mage hand", "mending", "message", "minor illusion", "prestidigitation", "true strike", "vicious mockery"],
					1: [1,"animal friendship", "bane", "charm person", "comprehend languages", "cure wounds", "detect magic", "disguise self", "dissonant whispers", "faerie fire", "feather fall", "healing word", "heroism", "identify", "illusory script", "longstrider", "silent image", "sleep", "speak with animals", "tashas hideous laughter", "thunderwave", "unseen servant"],
					2: [3,"animal messenger", "blindness", "deafness", "blindness/deafness", "calm emotions", "cloud of daggers", "crown of madness", "detect thoughts", "enhance ability", "enthrall", "heat metal", "hold person", "invisibility", "knock", "lesser restoration", "locate animals", "locate plants", "locate object", "magic mouth", "phantasmal force", "see invisibility", "shatter", "silence", "suggestion", "zone of truth"],
					3: [5,"bestow curse", "clairvoyance", "dispel magic", "fear", "feign death", "glyph of warding", "hypnotic pattern", "leomunds tiny hut", "major image", "nondetection", "plant growth", "sending", "speak with dead", "speak with plants", "stinking cloud", "tongues"],
					4: [7,"compulsion", "confusion", "dimension door", "freedom of movement", "greater invisibility", "hallucinatory terrain", "locate creature", "polymorph"],
					5: [9,"animate objects", "awaken", "dominate person", "dream", "geas", "greater restoration", "hold monster", "legend lore", "mass cure wounds", "mislead", "modify memory", "planar binding", "raise dead", "scrying", "seeming", "teleportation circle"],
					6: [11,"eyebite", "find the path", "guards and wards", "mass suggestion", "ottos irresistible dance", "programmed illusion", "true seeing"],
					7: [13,"etherealness", "forcecage", "mirage arcane", "mordenkainens magnificent mansion", "mordenkainens sword", "project image", "regenerate", "resurrection", "symbol", "teleport"],
					8: [15,"dominate monster", "feeblemind", "glibness", "mind blank", "power word stun"],
					9: [17,"foresight", "power word heal", "power word kill", "true polymorph"]

				},
                "spells_known": { //TODO: format == {player_level: number}
                    1: "",
                    2: ""
                },
                "cantrips_known": { //TODO: format == {player_level: number}

                },
                "level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "8 plus your proficiency bonus plus your Charisma modifier.",
				"spell_attack_mod": "Your proficiency bonus plus your Charisma modifier.",
				"spell_focus": "Musical instrument."
			},
			"class_features": {
				"bardic inspiration": {
					"description": "You can inspire others through stirring words or music. To do so, you use a Bonus Action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
					"benefits": "Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, Attack roll, or saving throw it makes.",
					"replenish": "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a Long Rest. Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
				},
				"jack of all trades": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
				"song of rest": "Starting at 2nd level, you can revitalize wounded allies during a short rest. Any friendly creature that spent Hit Dice to regain hit points, each creature regains an extra 1d6 hit points. This extra hit points increase when you reach certain levels: 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.",
				"subclass": {
					"bard college": {
						"description": "At 3rd level, you delve into the advanced techniques of a bard college of your choice.",
						"college of lore": {
							"description": "Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound.",
							"bonus proficiencies": "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
							"cutting words": "At 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an Attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll.",
							"additional magical secrets": "At 6th level, you learn two Spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen Spells count as bard Spells for you but don’t count against the number of bard Spells you know.",
							"peerless skill": "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
						},
						"college of valor": {
							"description": "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present.",
							"bonus proficiencies": "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.",
							"combat inspiration": "At 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.",
							"extra attack": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
							"battle magic": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to a cast a bard spell, you can make one weapon attack as a bonus action."
						}
					}
				},
				"class_specific_condition": "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit.",
				"ability score improvement": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two Ability Scores of your choice by 1. You cant increase an ability score above 20 using this feature.",
				"font of inspiration": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or Long Rest.",
				"countercharm": "At 6th level, as an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being Frightened or Charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are Incapacitated or silenced or if you voluntarily end it (no action required).",
				"magical secrets": "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two Spells from any class, including this one. A spell you choose must be of a level you can cast or a cantrip. You learn two additional Spells from any class at 14th level and again at 18th level.",
				"superior inspiration": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
			}
		}, //end of above class object
		"cleric": {
			"class_description": {
				"shortDesc": "A holy man devoted to a deity. capable of bolstering the party and heal their wounds, or laying low their enemies with divine wrath.",
				"longDesc": "A priestly champion who wields divine magic in service of a higher power, d8, Wisdom & Charisma, light and medium armor, shields, simple weapons."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			}, //end of class_proficiencies
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": {
				"slot_levels" : { //format == slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
					0: [1,"guidance", "light", "mending", "resistance", "sacred flame", "spare the dying", "thaumaturgy"],
                    1: [1,"bane", "bless", "command", "create or destroy water", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "guiding bolt", "healing word", "inflict wounds", "protection from evil and good", "purify food and drink", "sanctuary", "shield of faith" ],
                    2: [3,"aid", "augury", "blindness/deafness", "blindness", "deafness", "calm emotions", "continual flame", "enhance ability", "find traps", "gentle repose", "hold person", "lesser restoration", "locate object", "prayer of healing", "protection from poison", "silence", "spiritual weapon", "warding bond", "zone of truth"],
                    3: [5,"animate dead", "beacon of hope", "bestow curse", "clairvoyance", "create food and water", "daylight", "dispel magic", "feign death", "glyph of warding", "magic circle", "mass healing word", "meld into stone", "protection from energy", "remove curse", "revivify", "sending", "speak with dead", "spirit guardians", "tongues", "water walk"],
                    4: [7,"banishment", "control water", "death ward", "divination", "freedom of movement", "guardian of faith", "locate creature", "stone shape"],
                    5: [9,"commune", "contagion", "dispel evil and good", "flame strike", "geas", "greater restoration", "hallow", "insect plague", "legend lore", "mass cure wounds", "planar binding", "raise dead", "scrying"],
                    6: [11,"blade barrier", "create undead", "find the path", "forbiddance", "harm", "heal", "heroes feast", "planar ally", "true seeing", "word of recall"],
                    7: [13,"conjure celestial", "divine word", "etherealness", "fire storm", "plane shift", "regenerate", "resurrection", "symbol"],
                    8: [15,"antimagic field", "control weather", "earthquake", "holy aura"],
                    9: [17,"astral projection", "gate", "mass heal", "true resurrection"]
				},
                "spells_known": { //TODO: format == {player_level: number}
                    1: "",
                    2: ""
                },
                "cantrips_known": { //TODO: format == {player_level: number}

                },
                "level_features":{}
			}, 
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		"druid": {
			"class_description": {
				"shortDesc": "a nomad devoted to the world and the powers of Nature. Capable of adopting the form of a beast for battle or utility. capable of bolstering the party and heal their wounds, or laying low their enemies with nature's wrath.",
				"longDesc": "A priest of the Old Faith, wielding the powers of nature— moonlight and plant growth, fire and lightning—and adopting animal forms, d8, Intelligence & Wisdom, light and medium armor(non-metal), shields(non-metal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			}, //end of class_proficiencies
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
				"class_spells": {
					"slot_levels": { //format == slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
						0: [1,"druidcraft", "guidance", "mending", "poison spray", "produce flame", "resistance", "shillelagh", "thorn whip"],
						1: [1,"animal friendship", "charm person", "create or destroy water", "cure wounds", "detect magic", "detect poison and disease", "entangle", "faerie fire", "fog cloud", "goodberry", "healing word", "jump", "longstrider", "purify food and drink", "speak with animals", "thunderwave"],
						2: [3,"animal messenger", "barkskin", "beast sense", "darkvision", "enhance ability", "find traps", "flame blade", "flaming sphere", "gust of wind", "heat metal", "hold person", "lesser restoration", "locate animals or plants", "locate object", "moonbeam", "pass without trace", "protection from poison", "spike growth"],
						3: [5,"call lightning", "conjure animals", "daylight", "dispel magic", "feign death", "meld into stone", "plant growth", "protection from energy", "sleet storm", "speak with plants", "water breathing", "water walk", "wind wall"],
						4: [7,"blight", "confusion", "conjure minor elementals", "conjure woodland beings", "control water", "dominate beast", "freedom of movement", "giant insect", "grasping vine", "hallucinatory terrain", "ice storm", "locate creature", "polymorph", "stone shape", "stone skin", "wall of fire"],
						5: [9,"antilife shell", "awaken", "commune with nature", "conjure elemental", "contagion", "geas", "greater restoration", "insect plague", "mass cure wounds", "planar binding", "reincarnate", "scrying", "tree stride", "wall of stone"],
						6: [11,"conjure fey", "find the path", "heal", "heroes feast", "move earth", "sunbeam", "transport via plants", "wall of thorns", "wind walk"],
						7: [13,"fire storm","mirage arcane", "plane shift","regenerate","reverse gravity"],
						8: [15,"animal shapes","antipathy/sympathy", "sympathy", "antipathy", "control weather","earthquake","feeblemind","sunburst","tsunami"],
						9: [17,"foresight","shapechange","storm of vengeance","true resurrection"]
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		//TODO: add fighter class prototype here

		//TODO: add monk class prototype here
		"paladin": {
			"class_description": {
				"shortDesc": "Nearly as skilled as the Fighter but bolsters his efforts with divine magic. through his devotion he gains special boons from his god.",
				"longDesc": "A holy warrior bound to a sacred oath, d10, Strength, Wisdom & Charisma, all armor, shields, simple and martial weapons."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			},
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": {
                "slot_levels": {
					0: [], // cantrips
                    1: [2,"bless", "command", "compelled duel", "cure wounds", "detect evil and good", "detect magic", "detect magic", "detect poison and disease", "divine favor", "heroism", "protection from evil and good", "purify food and drink", "searing smite", "shield of faith", "thunderous smite", "wrathful smite"], // through plevel 4
                    2: [5,"aid", "branding smite", "find steed", "lesser restoration", "locate object", "magic weapon", "protection from poison", "zone of truth"], // plevel 5-8
					3: [9,"aura of vitality", "blinding smite", "create food and water", "crusaders mantle", "daylight", "dispel magic", "elemental weapon", "magic circle", "remove curse", "revivify"], // plevel 9-12
					4: [13,"aura of life", "aura of purity", "banishment", "death ward", "locate creature", "staggering smite"], // plevel 13-16
					5: [17,"banishing smite", "circle of power", "destructive smite", "dispel evil and good", "geas", "raise dead"], // plevel 17-20
					6: [],
					7: [],
					8: [],
					9: []
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		"ranger": {
			"class_description": {
				"shortDesc": "one who uses a unique blend of wilderness knowledge and martial ability to be a deadly hunter, with a bow, a pet or melee weapons.",
				"longDesc": "A master of ranged combat, one with nature, d10, Dexterity & Strength, light and medium armor, shield, simple weapons, martial weapons."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			},
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": {
				"slot_levels": { //format == slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
					0: [],
					1: [2, "alarm","animal friendship","cure wounds","detect magic","detect poison and disease","ensnaring strike","fog cloud","goodberry","hail of thorns","hunters mark","jump","longstrider","speak with animals"],
					2: [5, "animal messenger","barkskin","beast sense","cordon of arrows","darkvision","find traps","lesser restoration","locate animals or plants","locate object","pass without trace","protection from poison","silence","spike growth"],
					3: [9, "conjure animals","conjure barrage","daylight","lightning arrow","nondetection","plant growth","protection from energy","speak with plants","water breathing","water walk","wind wall"],
					4: [13, "conjure woodland beings","freedom of movement","grasping vine","locate creature","stoneskin"],
					5: [17, "commune with nature","conjure volley","swift quiver","tree stride"],
					6: [],
					7: [],
					8: [],
					9: []
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		//TODO: add rogue class prototype here
		"sorcerer": {
			"class_description": {
				"shortDesc": "a magic user who draws his power from within, summoning his innate magical power and bending it to his will.",
				"longDesc": "A spellcaster who draws on inherent magic from a gift or bloodline, d6, Constitution & Charisma, daggers, darts, slings, quarterstaffs, light crossbows"
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			},
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": {
				"slot_levels": { //format == slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
					0: [0, "acid splash","blade ward","chill touch","dancing lights","fire bolt","friends","light","mage hand","mending","message","minor illusion","poison spray","prestidigitation","ray of frost","shocking grasp","true strike"],
					1: [1, "burning hands","charm person","chromatic orb","color spray","comprehend languages","detect magic","disguise self","expeditious retreat","false life","feather fall","fog cloud","jump","mage armor","magic missile","ray of sickness","shield","silent image","sleep","thunderwave","witch bolt"],
					2: [3, "alter self","blindness/deafness","blur","cloud of daggers","crown of madness","darkness","darkvision","detect thoughts","enhance ability","enlarge/reduce","gust of wind","hold person","invisibility","knock","levitate","mirror image","misty step","phantasmal force","scorching ray","see invisibility","shatter","spider climb","suggestion","web"],
					3: [5, "blink","clairvoyance","counterspell","daylight","dispel magic","fear","fireball","fly","gaseous form","haste","hypnotic pattern","lightning bolt","major image","protection from energy","sleet storm","slow","stinking cloud","tongues","water breathing","water walk"],
					4: [7, "banishment","blight","confusion","dimension door","dominate beast","greater invisibility","ice storm","polymorph","stoneskin","wall of fire"],
					5: [9, "animate object","cloudkill","cone of cold","creation","dominate person","hold monster","insect plague","seeming","telekinesis","teleportation circle","wall of stone"],
					6: [11, "arcane gate","chain lightning","circle of death","disintegrate","eyebite","globe of invulnerability","mass suggestion","move earth","sunbeam","true seeing"],
					7: [13, "delayed blast fireball","etherealness","finger of death","fire storm","plane shift","prismatic spray","reverse gravity","teleport"],
					8: [15, "dominate monster","earthquake","incendiary cloud","power word stun","sunburst"],
					9: [17, "gate","meteor swarm","power word kill","time stop","wish"]
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"player_level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		"warlock": {
			"class_description": {
				"shortDesc": "A caster who has formed a pact with a powerful entity, the warlock trades favors for boons and spells.",
				"longDesc": "A wielder of magic that is derived from a bargain with an extraplanar entity, d8, Wisdom & Charisma, light armor, simple weapons."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			},
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": { //TODO: fill in with spell slots per spell level and when classes gain certain spell slots based on player level. ie: paladin can cast 2nd level spells starting at player level of 5. REFERENCE PBH page 77
				"slot_levels": { //TODO: format == slot_level : [minPlayerLvl, "spell 1", "spell 2", ...],
					//REFERENCE: PHB 188
					0: [],
					1: [],
					2: [],
					3: [],
					4: [],
					5: [],
					6: [],
					7: [],
					8: [],
					9: []
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"invocations_known":{ //TODO: format == {player_level: number}

				},
				"player_level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			}, //end of class_spellcasting
			"class_features": {
				"eldritch_invocations":{ //eldritch invocation
					"invocation_name": { //ie: lifedrinker
						"spell": "",
						"description": "", //When you hit...
						"prerequisite": "", //player level 12, default of player level 2
						"pact_requirement": "" //pact of the blade
					}
				}, //end of invocations
				"pact_boon": {
					"pact of the chain":{
						"spell":"find familiar",
						"description":"",
						"prerequisite": "player level 3"
					},
					"pact of the blade":{
						"benefits":"",
						"description":"",
						"prerequisite":""
					},
					"pact of the tome":{
						"description":"",
						"benefits":""

					}
				}, //pact boon, ie:pact of the chain
				"class_feature_2": "", //
				"class_feature_3": "",
				"subclass": { //otherworldly patrons
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},//end of subclass_1
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}//end of subclass_2
					}//end of subclass_paths
				}//end of subclass
			}, //end of class_features
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		}, //end of above class object
		"wizard": {
			"class_description": {
				"shortDesc": "A keeper of arcane secrets and forgotten knowledge, the wizard manipulates magic and spells with cunning.",
				"longDesc": "A scholarly magic-user capable of manipulating the structures of reality, d6, Intelligence & Wisdom, daggers, darts, slings, quarterstaffs, light crossbows."
			},
			"class_hit_point": {
				"hit_dice": "",
				"1st_level": "",
				"higher_levels": ""
			},
			"class_primary_ability": { //'Quick Build' section from the PHB
				"ability_scores": "",
				"background": "",
				"starting_spells": ""
			},
			"class_proficiencies": {
				"armor_prof": [
					"armor_prof_1",
					"armor_prof_2",
					"armor_prof_3"
				],
				"weapon_prof": [
					"wep_prof_1",
					"wep_prof_2",
					"wep_prof_3",
					"wep_prof_4",
					"wep_prof_5"],
				"tools": [""],
				"saving_throw_prof": [
					"ST_prof_1",
					"ST_prof_2"],
				"skills": [""]
			},
			"equipment": {
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
			},
			"class_spells": {
				"slot_levels": { //format == {"spell_name": player_level}
					0: [1,"acid splash", "blade ward", "chill touch", "dancing lights", "fire bolt", "friends", "light", "mage hand", "mending", "message", "minor illusion", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "true strike"],
					1: [1,"alarm", "burning hands", "charm person", "chromatic orb", "color spray", "comprehend languages", "detect magic", "disguise self", "expeditious retreat", "false life", "feather fall", "find familiar", "fog cloud", "grease", "identify", "illusory script", "jump", "longstrider", "mage armor", "magic missile", "protection from evil and good", "ray of sickness", "shield", "silent image", "sleep", "tashas hideous laughter", "tensers floating disk", "thunderwave", "unseen servant", "witch bolt"],
					2: [3,"alter self", "arcane lock", "blindness/deafness", "blur", "cloud of daggers", "continual flame", "crown of madness", "darkness", "darkvision", "detect thoughts", "enlarge/reduce", "flaming sphere", "gentle repose", "gust of wind", "gust of wind", "hold person", "invisibility", "knock", "levitate", "locate object", "magic mouth", "magic weapon", "melfs acid arrow", "mirror image", "misty step", "nystuls magic aura", "phantasmal force", "ray of enfeeblement", "rope trick", "scorching ray", "see invisibility", "shatter", "spider climb", "suggestion", "web"],
					3: [5,"animate dead", "bestow curse", "blink", "clairvoyance", "counterspell", "dispel magic", "fear", "feign death", "fireball", "fly", "gaseous form", "glyph of warding", "haste", "hypnotic pattern", "leomunds tiny hut", "lightning bolt", "magic circle", "major image", "nondetection", "phantom steed", "protection from energy", "remove curse", "sending", "sleet storm", "slow", "stinking cloud", "tongues", "vampiric touch", "water breathing"],
					4: [7,"arcane eye", "banishment", "blight", "confusion", "conjure minor elementals", "control water", "dimension door", "evards black tentacles", "fabricate", "fire shield", "greater invisibility", "hallucinatory terrain", "ice storm", "leomunds secret chest", "locate creature","mordenkainens faithful hound", "mordenkainens private sanctum","otilukes resilient sphere", "phantasmal killer", "polymorph", "stone shape", "stoneskin", "wall of fire"],
					5: [9,"animate objects", "bigbys hand","cloudkill","cone of cold","conjure elemental","contact other plane","creation","dominate person","dream","geas","hold monster","legend lore","mislead","modify memory","passwall","planar binding","rarys telepathic bond","scrying","seeming","telekinesis","teleportation circle","wall of force","wall of stone"],
					6: [11,"arcane gate","chain lightning","circle of death","contingency","create undead","disintegrate","drawmijs instant summons","eyebite","flesh to stone","globe of invulnerability","guards and wards","magic jar","mass suggestion","move earth","otilukes freezing sphere","ottos irresistible dance","programmed illusion", "sunbeam", "true seeing", "wall of ice"],
					7: [13,"delayed blast fireball","etherealness","finger of death","forcecage","mirage arcane","mordenkainens magnificent mansion","mordenkainens sword","plane shift","prismatic spray","project image","reverse gravity","sequester","simulacrum","symbol","teleport"],
					8: [15,"antimagic field","antipathy/sympathy","clone","clone","contorl weather","demiplane","dominate monster","feeblemind","incendiary cloud","maze","mind blank","power word stun","sunburst","telepathy","trap the soul"],
					9: [17,"astral projection","foresight","gate","imprisonment","meteor swarm","power word kill","prismatic wall","shapechange","time stop","true polymorph","weird","wish"]
				},
				"spells_known": { //TODO: format == {player_level: number}
					1: "",
					2: ""
				},
				"cantrips_known": { //TODO: format == {player_level: number}

				},
				"level_features":{}
			},
			"class_spellcasting_ability": {
				"spell_save_dc": "",
				"spell_attack_mod": "",
				"spell_focus": ""
			},
			"class_features": {
				"main_class_feature": {
					"description": "",
					"benefits": "",
					"replenish": ""
				},
				"class_feature_1": "",
				"class_feature_2": "",
				"subclass": {
					"subclass_paths": {
						"subclass_description": "",
						"subclass_type_1": {
							"subclass_1_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						},
						"subclass_type_2": {
							"subclass_2_description": "",
							"subclass_benefit_1": "",
							"subclass_benefit_2": "",
							"subclass_benefit_3": "",
							"subclass_benefit_4": ""
						}
					}
				}
			},
			"class_specific_condition": "",
			"ability_score_improvement": {},
			"class_specific_ability_1": "",
			"class_specific_ability_2": "",
			"class_specific_ability_3": "",
			"class_specific_ability_4": ""
		} //end of above class object
	} //end of CLASSES object
}; //end of module

//FIXME: classes prototype template *WORK IN PROGRESS*
module.exports = {
	"class": {
		"class_description": {
			"shortDesc": "",
			"longDesc": ""
		},
		"class_hit_point": {
			"hit_dice": "", //TODO: leave as just the 1dX so we can do the calculations
			"1st_level": "",
			"higher_levels": ""
		},
		"class_primary_ability": { //'Quick Build' section from the PHB
			"ability_scores": "",
			"background": "",
			"starting_spells": "" //not applicable to Barbarians
		},
		"class_proficiencies": {
			"armor_prof": [
				"armor_prof_1",
				"armor_prof_2",
				"armor_prof_3"
			],
			"weapon_prof": [
				"wep_prof_1",
				"wep_prof_2",
				"wep_prof_3",
				"wep_prof_4",
				"wep_prof_5"],
			"tools": [""],
			"saving_throw_prof": [
				"ST_prof_1",
				"ST_prof_2"],
			"skills": [""]
		}, //end of class_proficiencies
		"equipment": { //FIXME: will be reworked, possibly into an equipment_pack.js file
				"welcome_msg": "Your character starts with the any of the following equipment, in addition to the equipment granted by your chosen background.",
				"starting_pack": "",
				"weapons_1": "",
				"weapons_2": "",
				"weapons_3": "",
				"equipment_pack_1": "",
				"equipment_pack_2": "",
				"options_1": "",
				"options_2": ""
		},
		"class_spells": {
			"slot_levels": { //TODO: format == {"spell_name": player_level}
				//REFERENCE: PHB 188
				1: ["array of available spell slots"],
				2: [], //ie: PALADIN: {"Bless": 2}
				3: [],
				4: [],
				5: [],
				6: [],
				7: [],
				8: [],
				9: []
			},
			"spells_known": { //TODO: format == {player_level: number}
				1: "",
				2: ""
			},
			"cantrips_known": { //TODO: format == {player_level: number}

			},
			"level_features":{}
		},
		"class_spellcasting_ability": {
			"spell_save_dc": "",
			"spell_attack_mod": "",
			"spell_focus": ""
		}, //end of class_spellcasting
		"class_features": {
			"main_class_feature": {
				"description": "",
				"benefits": "",
				"replenish": ""
			},
			"class_feature_1": "",
			"class_feature_2": "",
			"subclass": { //turns into subclasses, will be worked on in later build
				"subclass_paths": {
					"subclass_description": "",
					"subclass_type_1": {
						"subclass_1_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					},//end of subclass_1
					"subclass_type_2": {
						"subclass_2_description": "",
						"subclass_benefit_1": "",
						"subclass_benefit_2": "",
						"subclass_benefit_3": "",
						"subclass_benefit_4": ""
					}//end of subclass_2
				}//end of subclass_paths
			}//end of subclass
		}, //end of class_features
		"class_specific_condition": "",
		"ability_score_improvement": {},
		"class_specific_ability_1": "",
		"class_specific_ability_2": "",
		"class_specific_ability_3": "",
		"class_specific_ability_4": ""
	} //end of class prototype template
};