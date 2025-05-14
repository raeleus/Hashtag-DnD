const weaponsList = ["Assault Rifle", "Pistol", "SMG", "Battle Rifle", "Energy Sword", "Heavy Machine Gun", "Shotgun", "SAM", "Grenade Launcher", "Sniper Rifle", "Taser", "Chainsaw", "Dueling Pistol", "Stun Gun", "Revolver", "Force Knuckles", "Plasma Whip", "Phase Rifle", "Minigun", "Rail Gun", "Plasma Cannon", "Chem Gun", "Charge Hammer", "Bullpup Rifle", "Auto Shotgun", "Tac Pistol", "Rocket Launcher", "Autogun", "Heavy Shotgun", "Corner Strike", "Heavy Pistol", "PDW", "Shuriken", "Power Gauntlets", "Modular Gun", "Silenced Pistol", "Shoulder Cannon", "Wrist Blade"]
const armorList = ["Kevlar Vest", "Combat Armor", "Tech Armor", "Carbon Fiber Armor", "Deflection Suit", "Charge Armor", "Riot Gear", "Nexus Armor", "Nanotube Armor", "Biotic Mail", "Energetic Armor", "Power Armor", "Riot Shield"]
const toolsList = ["Chemistry Kit", "Water Sampling Kit", "Smartphone", "Metal Working Tools", "Geographer's Tools", "Clothing Fabricator", "Food Dispenser", "Plastics Kit", "Gadget Tools", "Repair Kit", "Ship's Tools", "Camera Kit", "Drafting Tools", "Gun Kit", "Laptop", "Farming Equipment", "Ceramics Kit", "Medical Supplies", "Holographics Kit", "Game Station", "Centrifuge", "Speaker", "Satellite Linkup", "Nanite Kit", "Cryptographic Sequencer"]
const gearList = ["Acidic Vial", "Grenade", "Mag", "Antitoxin", "Flashdrive", "Hydraulic Backpack", "Trip Mine", "Crate", "Messenger Bag", "Sleeping Bag", "Tone Generator", "Blanket", "Hydraulic Winch", "Data Pad", "Vial", "Bucket", "Hacker's Pack", "Caltrops", "LED Nightlight", "Ammo Case", "GPS Kit", "PDA", "Chain", "Pod", "Climber's Kit", "Fine Clothes", "Traveler's Clothes", "Electronics Pouch", "Costume", "Crowbar", "Officer's Pack", "Tricorder", "Commando's Pack", "Breacher's Pack", "Pilot's Pack", "Flask", "Grapple Gun", "Medical Kit", "Data Core", "Purified Water", "Snare", "HUD", "Digipen", "Carton", "Ladder", "Flashlight", "Dazzler", "Spotlight", "Lock", "Scope", "Zip Ties", "GPS Data", "Webcam", "Net", "Fuel", "Byte", "Megabyte", "Pheremones", "Uranium Round", "Reacher Grabber", "Hot Plate", "Healing Syringe", "Satchel", "Analyst's Pack", "Ammo Belt", "Breaching Tool", "Rations", "Pajamas", "Rope", "Purse", "Academic's Pack", "Shovel", "Signal Whistle", "Spell Pad", "Iron Spikes", "Telescope", "String", "Shelter", "Matches", "Butane Torch", "Vial", "Water Bottle"]
const commonList = ["Anti-Microbial Armor", "Meal Capsule", "Life Straw", "Soleless Shoes", "Deep Sea Lantern", "Compact Armor", "Charlatan's Dice", "Billowing Cape", "Holographic Tuxedo", "Metronome of Averages", "Healing Fabric Clothing", "Dark Flashdrive", "Dread Trooper Helmet", "Hearing Aids", "Enduring Omnitool", "Bionic Eye", "Rodent Wand", "Chip of Robotics", "Seasoning Salt", "Subsonic Alarm", "Light Bending Instrument", "Embossing Instrument", "Magnetic Lock", "Light Gun", "Cryptographic Key", "Compass", "Digital Watch", "Ambergris", "Magic Cigar", "Aluminum Fishing Pole", "Telescoping Pole", "Climbing Serum", "Brain Fluid", "Hydroponic Grow Chamber", "Prosthetic Limb", "Brain Tick", "Magnetic Fibre Rope", "Data Card", "Riot Shield of Emote", "Silver Bullet", "Exhaust Armor", "Bling Stack", "Birdwatching Box", "Flower Gloves", "Tickle Doll", "Alcohol Filter", "Veteran's Energy Cane", "Concussive Ammunition", "Finger Tracking Conductor", "Lava Lamp", "Healing Syringe"]
const uncommonList = ["Exo Armor", "Exo Weapon", "Liquid Replicator", "Mag +1", "Radio Jammer", "Roomba", "Flat Space Bag", "Magic Drone", "Noise Cancelling Boots", "Boots of Striding and Springing", "Ice Breaker Boots", "Compensator of Accuracy", "Brooch of Shielding", "Silver Surfboard", "Rebreather", "Laser Bracelet", "Stealth Suit", "Adaptive Armor Plating", "Scuba Suit", "Super Soaker", "Holographic Deck", "Hover Globe", "Chaff Grenade", "Hydrophilic Powder", "Cinnamon Powder", "Elemental Cointainment Field", "Digitized Armor Uncommon", "Uncommon Digitized Staff", "Digitized Weapon Uncommon", "Smoke Grenade", "Synaptic Lenses", "Telegraphic Goggles", "Binoculars", "Silver Raven Puck", "Hydraulic Arms", "Ultra Bright Flashlight", "Missile Dampening Field", "Robotic Exosuit", "Thievery Implant", "Night Vision Goggles", "Cyborg Eye", "Megamorphic Suit", "Intelligence Implant", "Closed Captioning HUD", "Psychic Implant", "Gravity Anchor", "Synthesizer Harp", "Digital Guitar", "Lightning Gun", "Javelin of Lightning", "Antidotic Lotion", "Black Light Flashlight", "Navy Armor", "Mind Reading Neutron", "Ghost Crystal", "Prosthetic Lung", "Graphite Ointment", "Lithium Battery", "Health Drip", "Antibiotics", "Purple Juice", "Audio Static", "Prefume of the Drones", "Nectar of Drone Friendship", "Underbarrel Flamethrower", "Strength Mod", "Growth Mod", "Compromised Syringe", "Boxing Simulator", "Damage Countermeasure", "Water Breathing Nanomachines", "Macro Uncommon", "Extradimensional Ammo Pouch", "Jetpack", "Tin Foil Hat", "Hydro-Adaptive Nanoband", "Thermo Resonance Band", "Aqua-Stabilizer Band", "Quantum Utility Belt", "Covenant Nexus +1", "Ascender Coil", "Synchron Mobility Plugin", "Quantum Relay Communicator", "Omni Tactical Barrier", "Riot Riot Shield +1", "Gecko Shoes", "Snake Cable", "Python for Dummies", "Memory Stick of Good Luck", "Revengerance Rifle", "SMG of Fish Sequencer", "Magic Wire", "Missile Pod", "Quantum Computer", "Reflex Sight", "Sticky Grenade", "Weapon +1", "Gun of Early Warning", "Fan Attachment", "Thruster Wings", "Striker Guantlets +1", "Greater Healing Syringe"]
const rareList = ["Mag +2", "Health Bar", "Armor +1", "Harmonic Defense Suit", "Cracked Harmonic Defense Suit", "Robotic Arm Shield", "Nano Beans", "Belt of Robotkind", "Belt of Cyborg Strength", "Berserker Shotgun", "Hover Boots", "Accelerator Suit", "Laptop of Commanding Water Drones", "Auto Blockers", "PDA of Commanding Fire Drones", "Red Cape", "Smartphone of Controlling Air Droids", "Memory Card of Opening", "Cloak of Holograms", "Bat Wing", "Cube of Force", "Cube of Summoning", "Fortress Builder", "Energy Energy Dagger of Venom", "Digital Shackles", "Dragon Slayer Sniper Rifle", "Supplement of Health", "Block-Chain Armor", "Digitized Armor Rare", "Rare Digitized Staff", "Digitized Weapon Rare", "Puck", "Combustion Weapon", "RC Boat", "Lens of Seeing", "Sabot Shotgun", "Hardened Undercover Armor", "Teleporter Badge", "Compression Backpack", "Klaxon Siren", "Silver Whistle", "Brass Whistle", "Rims of Speed", "Drop Tables", "Synthesizer Array", "Headphones Rare", "Sphero", "Datastack of Disruption", "Datastack of Smiting", "Datastack of Terror", "Warding Smartwatch", "Smartwatch of Fireballs", "Prayer Ebook", "Lumen Grease", "Toxic Nullification Nexus", "Flat Space Hole", "Clairvoyance Implant", "Shrink Ray", "Steam Download", "Serum of Frost Zombie Strength", "Serum of Stone Zombie Strength", "Serum of Fire Zombie Strength", "Hero Cookies", "Cloaking Formula", "Invulnerability Injection", "Mind Reading Formula", "Macro Rare", "Ring of Drone Influence", "Ring of Uncertainy Principle", "Booster Boots", "Nanoscopic Fiber Leggings", "On-Board Diagnostics", "Cybernetic Resistence Pellets", "Spell Battery", "Ram Projector", "X-ray Goggles", "Dashboard of Vision", "Command Module", "Covenant Nexus +2", "Cable of Entanglement", "Cease and Desist Letter", "Riot Riot Shield +2", "Shield of Null Emitter", "Tech Stack of Charming", "Conduit Rod of Swarming Insects", "Vegetation Conduit", "Tech Stack of Withering", "Memory Card of Controlling Earth Holograms", "Battle Rifle of the Crying Sun", "Energy Weapon of Life Stealing", "Robot Tentacle Rod", "Explosive Weapon", "Binding SD Card", "Sonar Scanner", "SD Card of Fear", "Rocket Pod", "Lightning Rod", "Paralysis Stick", "Portable Harddrive of Wonder", "Weapon +2", "Wing Suit", "Superior Healing Syringe"]
const phenomenalList = ["Mag +3", "Mag of Slaying", "3D Scanner", "Motion Graphic Shield", "Armor +2", "Junk Shredder", "Utility Belt of Frost Zombie Strength", "Utility Belt of Stone Zombie Strength", "Utility Belt of Fire Zombie Strength", "LED of Invocation", "Hovering Pallet", "Sleep Capsule of Rebirth", "Web Shooters", "Influencer Starter Kit", "Auto Turret", "Alien Armor", "Dragon Scale Mail", "Soldier Plate", "M4A1", "Hologram Cage", "AK-47", "G36", "Digitized Armor Very Rare", "Digitized Armor Very Rare", "Desert Eagle", "Obsidian Steed Puck", "Cold Gun", "Combat Helmet of Many Spells", "Helm of Brilliance", "Bronze Whistle", "Horseshoes of a Zephyr", "Headphones Very Rare", "Thunderous MP5", "PDF of Bodily Health", "PDF of Gainful Exercise", "PDF of Golems", "PDF of Quickness of Action", "Selfie Camera of Life Trapping", "FN Five-Seven", "Pantone Paints", "Glock 18", "Oil of Accuracy", "Serum of Gravity", "Serum of Cloud Zombie Strength", "Serum of Null Zero Cloak", "Serum of Longevity", "Syringe of Speed", "Syringe of Vitality", "Quartenion Baton of the Acrobat", "USB of Regeneration", "Dazzler Attachment", "Mind Mover Implant", "Bandana of Scintillating Colors", "Bandana of Stars", "Thumb Drive of Absorption", "Thumb Drive of Alertness", "Thumb Drive of Security", "Covenant Nexus +3", "Uzi of Speed", "Riot Shield +3", "Riot Shield of the Cavalier", "Virus Protection Shield", "Digital 8 Ball", "Rocket Launcher of Firewall", "Cryonics Staff", "Power Armor Weapons Platform", "Steyr Aug", "M60 Lightning", "Critical Mass Gun", "Mossberg 500", "PDF of Clear Thought", "PDF of Leadership and Influence", "PDF of Understanding", "Watch of Nanomorph", "Weapon +3", "Supreme Healing Syringe"]
const legendaryList = ["Mecha Walker", "Armor +3", "Deathproof Ballistic Armor", "Belt of Cloud Zombie Strength", "Belt of Cloud Zombie Strength", "Enigma Generator", "Tablet of Spying", "Tablet of Telepathy", "Tablet of Thermal Imaging", "Rift Gate", "TCG of Many Things", "Super Shotgun", "Linked List Chain", "Digitized Armor Legendary", "Legendary Digitized Staff", "Digitized Weapon Legendary", "AWP of Thunderbolts", "Holy Colt 1911", "Headphones of Greater Absorption", "Headphones of Mastery", "Headphones of Regeneration", "Digital Hand Trap", "Luck Gun", "Colt Carbine", "Ceramic Armor of Etherealness", "Ceramic Armor of Etherealness", "Gamepad of Cyborg Summoning", "Gamepad of Hologram Command", "Gamepad of Cloak", "Gamepad of Counter Hack", "Gamepad of AI Wishes", "Robotic Shield Motivator", "Megamorphic Gun", "USB Stick of Resurrection", "Communicator Badge of Protection", "PDA of Titan Summoning", "JB Bond", "Black Hole", "USB Stick of the Sys Admin", "Die Katana", "Fidget of Pure Good", "Fidget of the Sphere", "Fidget of Ultimate Evil", "PDF of the Stilled Tongue", "Goo Be Gone", "Well of the Metaverse"]
const artifactList = ["Accelerator Rifle", "Killer P90", "PDF of Exalted Deeds", "PDF of Vile Darkness", "Close Encounters PDF", "Efreeti Chain", "Eye of Echelon Zero", "Hand of Echelon Zero", "Dragon Battery", "Beretta 92FS", "Antenna of Hex Machina", "Glock 20C Marine", "AA-12 Shotgun"]

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function getRandomBoolean(chance) {
  if (chance == null) chance = .5
  return Math.random() <= chance
}

function getRandom(seed) {
  var x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function getRandomFromList(...choices) {
  return choices[getRandomInteger(0, choices.length - 1)]
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isAnumber(number) {
  return !isNaN(number)
}

function shuffle(array, seed) {
  if (seed == null) seed = getRandomInteger(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
  let currentIndex = array.length
  while (currentIndex != 0) {
    let randomIndex = Math.floor(getRandom(seed + currentIndex) * currentIndex)
    currentIndex--
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }
}

function pointDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
}

function pointDirection(x1, y1, x2, y2) {
  Math.atn2
  var a = Math.atan2(y2 - y1, x2 - x1);
  if (a < 0) a += 2 * Math.PI;

  if (a < 0) a += 2 * Math.PI;
  if (a < 0) a += 2 * Math.PI;
  a = Math.abs((Math.PI * 2) - a);
  a *= 180 / Math.PI;

  return a;
}

function rotate(cx, cy, x, y, angle) {
  var radians = (Math.PI / 180) * angle
  var cos = Math.cos(radians)
  var sin = Math.sin(radians)
  var nx = (cos * (x - cx)) + (sin * (y - cy)) + cx
  var ny = (cos * (y - cy)) - (sin * (x - cx)) + cy
  return [nx, ny];
}

function createLocation(x, y, name) {
  x = Math.round(x)
  y = Math.round(y)

  var existingLocationIndex = state.locations.findIndex(element => element.name.toLowerCase() == name.toLowerCase())
  var location
  if (existingLocationIndex == -1) {
    location = {
      x: x,
      y: y,
      name: name
    }
    state.locations.push(location)
  } else {
    location = state.locations[existingLocationIndex]
    location.x = x
    location.y = y
    location.name = name
  }

  addStoryCard(location.name, "", "location")

  return location
}

function sanitizeText(text) {
  if (/^\s*>.*says? ".*/.test(text)) {
    text = text.replace(/^\s*>\s/, "")
    text = text.replace(/says? "/, "")
    text = text.replace(/"\n$/, "")
    if (text.split('"').length - 1 % 2 == 1)  text += '"'
  } else if (/^\s*>\s.*/.test(text)) {
    text = text.replace(/^\s*>\s/, "")
    text = text.replace(/\.?\n$/, "")
  }
  
  return text
}

function getCharacterName(rawText) {
  var matches = rawText.match(/(?<=\s+> ).*(?=(\s+#)|( says? "))/)
  if (matches != null && matches[0].trim() != "") {
    return matches[0].trim()
  }

  matches = rawText.match(/.*(?= #)/)
  if (matches != null && matches[0].trim() != "") {
    return matches[0].trim()
  }

  return null
}

function getPossessiveName(name) {
  var possesiveName = "Your"
  if (name != "You") {
    possesiveName = name
    if (name.endsWith("s")) possesiveName += "'"
    else possesiveName += "'s"
  }
  return possesiveName
}

function getCommandName(command) {
  var args = getArguments(command)
  if (args.length == 0) return null
  return args[0]
}

const argumentPattern = /("[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimy]*(?=\s|$)|(?:\\\s|\S)+)/g

function getArguments(command) {
  var matches = command.match(new RegExp(argumentPattern))
  var returnValue = []
  matches.forEach(match => {
    match = match.replaceAll(/(^")|("$)/g, "").replaceAll(/\\"/g, '"')
    returnValue.push(match)
  })
  return returnValue
}

function getArgument(command, index) {
  var args = getArguments(command)
  index++
  if (index >= args.length) return null
  return args[index]
}

function getArgumentRemainder(command, index) {
  var counter = 0

  const pattern = new RegExp(argumentPattern)
  while ((match = pattern.exec(command)) != null) {
    if (counter++ == index + 1) {
      var result = command.substring(match.index)
      if (/^".*"$/g.test(result)) result = result.replace(/^"/, "").replace(/"$/, "")
      return result.replaceAll(/\\"/g, '"')
    }
  }
}

function searchArgument(command, pattern, limit) {
  var index = searchArgumentIndex(command, pattern)
  if (index == -1 || limit != null && index > limit) return null
  return getArgument(command, index)
}

function searchArgumentIndex(command, pattern) {
  var args = getArguments(command)
  if (args.length <= 1) return -1
  args.splice(0, 1)

  const search = (element) => pattern.test(element)
  var index = args.findIndex(search)
  if (index != -1) return index
  return -1
}

function arrayToOrPattern(array) {
  var pattern = "^"
  array.forEach(element => {
    pattern += `(${element})|`
  })
  pattern += pattern.substring(0, pattern.length - 1)
  pattern += "$"
  return new RegExp(pattern, "gi")
}

function statsToOrPattern(stats) {
  var array = []
  stats.forEach(element => {
    array.push(element.name)
  })
  return arrayToOrPattern(array)
}

function getDice(rolltext) {
  var matches = rolltext.match(/\d+(?=d)/)
  if (matches != null) {
    return parseInt(matches[0])
  }
  return 1
}

function getSides(rolltext) {
  var matches = rolltext.match(/(?<=d)\d+/)
  if (matches != null) {
    return parseInt(matches[0])
  }

  return 20
}

function getAddition(rolltext) {
  var matches = rolltext.match(/(\+|-)\s*\d+/)
  if (matches != null) {
    return parseInt(matches[0].replaceAll(/\s*/g, ""))
  }

  return 0
}

function formatRoll(text) {
  var matches = text.match(/(?<=.*)\d*d\d+(?=.*)(\s*(\+|-)\s*\d+)?/gi)
  if (matches != null) {
    return matches[0].replaceAll(/\s*\+\s*/g, "+").replaceAll(/\s*-\s*/g, "-")
  }

  matches = text.match(/\d+/)
  if (matches != null) {
    return "d" + matches[0]
  }

  return "d20"
}

function calculateRoll(rolltext) {
  rolltext = rolltext.toLowerCase()
  
  var dice = getDice(rolltext)
  var sides = getSides(rolltext)
  var addition = getAddition(rolltext)

  var score = addition;
  for (i = 0; i < dice; i++) {
    score += getRandomInteger(1, sides)
  }

  return Math.max(0, score)
}

function getCharacter(characterName) {
  if (characterName == null) characterName = state.characterName
  if (characterName == null) return null
  return state.characters.find(element => element.name.toLowerCase() == characterName.toLowerCase())
}

function hasCharacter(characterName) {
  return getCharacter(characterName) != null
}

function createCharacter(name) {
  var existingCharacter = getCharacter(name)
  if (existingCharacter != null) {
    existingCharacter.name = name
    existingCharacter.className = "adventurer"
    existingCharacter.summary = "An auto generated character. Use #create to create this character"
    existingCharacter.inventory = []
    existingCharacter.spells = []
    existingCharacter.stats = []
    existingCharacter.spellStat = null
    existingCharacter.meleeStat = null
    existingCharacter.rangedStat = null
    existingCharacter.skills = []
    existingCharacter.experience = 0
    existingCharacter.health = 10
    existingCharacter.ac = 10
    return existingCharacter
  }

  var character = {
    name: name,
    className: "adventurer",
    summary: "An auto generated character. Use #create to create this character",
    inventory: [],
    spells: [],
    stats: [],
    spellStat: null,
    meleeStat: null,
    rangedStat: null,
    skills: [],
    experience: 0,
    health: 10,
    ac: 10
  }
  state.characters.push(character)
  return character
}

function copyCharacter(fromCharacter, toCharacter) {
  if (toCharacter != null && fromCharacter != null) {
    toCharacter.className = fromCharacter.className
    toCharacter.summary = fromCharacter.summary
    toCharacter.inventory = [...new Set(fromCharacter.inventory)]
    toCharacter.spells = [...new Set(fromCharacter.spells)]
    toCharacter.stats = [...new Set(fromCharacter.stats)]
    toCharacter.spellStat = fromCharacter.spellStat
    toCharacter.meleeStat = fromCharacter.meleeStat
    toCharacter.rangedStat = fromCharacter.rangedStat
    toCharacter.skills = [...new Set(fromCharacter.skills)]
    toCharacter.experience = fromCharacter.experience
    toCharacter.health = fromCharacter.health
    toCharacter.ac = fromCharacter.ac
    return toCharacter
  }
}

function deleteCharacter(name) {
  var index = state.characters.findIndex((element) => element.name == name)
  state.characters.splice(index, 1)
}

function executeTurn(activeCharacter) {
  var activeCharacterName = toTitleCase(activeCharacter.name)
  var possessiveName = getPossessiveName(activeCharacter.name)
  if (possessiveName == "Your") possessiveName = "your"

  if (activeCharacter.className != null) {
    state.show = "none"
    return `\n[It is ${possessiveName} turn]\n`
  } else {
    var characters = state.characters.filter(x => x.health > 0)
    var target = characters[getRandomInteger(0, characters.length - 1)]
    var areWord = target.name == "You" ? "are" : "is"
    var targetNameAdjustedCase = target.name == "You" ? "you" : toTitleCase(target.name)
    var attack = calculateRoll(`1d20${activeCharacter.hitModifier > 0 ? "+" + activeCharacter.hitModifier : activeCharacter.hitModifier < 0 ? activeCharacter.hitModifier : ""}`)
    var hit = attack >= target.ac

    var text = `\n[It is ${possessiveName} turn]\n`
    if (getRandomBoolean() || activeCharacter.spells.length == 0) {
      if (hit) {
        state.blockCharacter = target
        state.blockPreviousHealth = target.health
        var damage = isNaN(activeCharacter.damage) ? calculateRoll(activeCharacter.damage) : activeCharacter.damage
        target.health = Math.max(target.health - damage, 0)

        text += `\n[Character AC: ${target.ac} Attack roll: ${attack}]\n`

        text += `${activeCharacterName} attacks ${targetNameAdjustedCase} for ${damage} damage!\n`
        if (target.health == 0) text += ` ${toTitleCase(target.name)} ${areWord} unconscious! \n`
        else text += ` ${toTitleCase(target.name)} ${areWord} at ${target.health} health.\n`
      } else text += `${activeCharacterName} attacks ${targetNameAdjustedCase} but misses!\n`
    } else {
      var spell = activeCharacter.spells[getRandomInteger(0, activeCharacter.spells.length - 1)]
      var diceMatches = spell.match(/(?<=^.*)\d*d\d+((\+|-)\d+)?$/gi)
      if (diceMatches == null) text += `${activeCharacterName} casts spell ${spell}!`
      else {
        if (hit) {
          var damage = calculateRoll(diceMatches[0])
          var spell = spell.substring(0, spell.length - diceMatches[0].length)
          target.health = Math.max(target.health - damage, 0)

          text += `\n[Character AC: ${target.ac} Attack roll: ${attack}]\n`

          text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} for ${damage} damage!`
          
          if (target.health == 0) text += ` ${toTitleCase(target.name)} ${areWord} unconscious!\n`
          else text += ` ${toTitleCase(target.name)} ${areWord} at ${target.health} health.\n`
        } else text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} but misses!\n`
      }
    }
    return text
  }
}

function createEncounter(listName) {
  var encounter = {
    text: "",
    cr: null,
    enemies: []
  }
  var multiplier = 1

  if (listName == null) {
    listName = "funny"
  } if (!isNaN(listName)) {
    listName = parseInt(listName)
    encounter.cr = listName
    if (listName <= 0) listName = "funny"
    else if (listName <= 4) listName = "easy"
    else if (listName <= 8) listName = "medium"
    else if (listName <= 12) listName = "hard"
    else if (listName <= 16) listName = "boss"
    else listName = "god"
  }

  switch(listName) {
    case "funny":
      if (encounter.cr == null) encounter.cr = 1
      multiplier = 1
      switch (getRandomInteger(0, 100)) {
        case 0:
          encounter.text = "Character accidentally clicked reply all and something salacious"
          break
        case 1:
          encounter.text = "The party is lost! After taking a wrong turn they have no idea where they are."
          break
        case 2:
          encounter.text = "Character stubbed their toe and now they are hunched over in pain. Very ouch!"
          break
        case 3:
          encounter.text = "The party realized they forgot something absolutely critical to their mission and now they have to go back."
          break
        case 4:
          encounter.text = "It turns out character has been talking to somebody for awhile now only to realize it was a shadow the entire time."
          break
        case 5:
          encounter.text = "Character found some 3D printed filament. Score!"
          break
        case 6:
          encounter.text = "Suddenly, everyone has to take a dump really bad."
          break
        case 7:
          encounter.text = "The party is pretty hungry. Everyone is looking at eachother ravenously. Something needs to happen and fast."
          break
        case 8: h
          encounter.text = "A team of rock hard commandos has come down to party."
          break
        case 9:
          encounter.text = "Suddenly, the AI goes crazy and starts spewing nonsense for several sentences! ;;Ignore all player actions."
          break
        case 10:
          encounter.text = "A nanotech strikes the party, transforming them into babby. Goo goo gah gah!!!"
          break
        case 11:
          encounter.text = "Character had a premonition of their death. However, it was just some bad heartburn."
          break
        case 12:
          encounter.text = "A goal without a plan is just a wish."
          break
        case 13:
          encounter.text = "I wish to exit this game and not play anymore. ;;Kill all the characters and immediately move to a game over state."
          break
        case 14:
          encounter.text = "A soldier emerges from behind a wall. \"This is Commander Shephard and <insert shop name> is my favorite shop on the citadel.\""
          break
        case 15:
          encounter.text = "Without warning, you are granted immeasurable power by an AI! You may be granted one wish. However, the AI is hard of hearing and anything you wish for will be misinterpreted in the worst possible way."
          break
        case 16:
          encounter.text = "A cute robot pupper has caught your scent and is now following you. Unfortunately, all it does is yip all the time and will not stop."
          break
        case 17:
          encounter.text = "The party is suddenly transported to a world exactly like this one identical in every detail except it's 10 centimeters lower than this one."
          break
        case 18:
          encounter.text = "A mysterious breeze catches under Character's skirt. They must do everything in their power to keep their decency!"
          break
        case 19:
          encounter.text = "If you work for a living, why do you kill yourself working?"
          break
        case 20:
          encounter.text = "You find a fully working bow with a pile of arrows and a stack of ninja stars!"
          break
        case 21:
          encounter.text = "Uncle Sam suddenly materializes in front of you. He has a special task he wants to present to the party."
          break
        case 22:
          encounter.text = "Character's back is itchy. Sadly, they have no means to scratch it. It's terrifying."
          break
        case 23:
          encounter.text = "Raeleus, the developer of Hashtag DnD, has been summoned before the party. He is very disappointed in what you've been using his scenario for."
          break
        case 24:
          encounter.text = "A nymph is playing a prank on the party! No one can speak and must use hand gestures to communicate."
          break
        case 25:
          encounter.text = "You encounter some sentient pebbles. They stare at you with stoney, judging eyes."
          break
        case 26:
          encounter.text = "It is of popular opinion that Character has been doing a poor job of leading the group."
          break
        case 27:
          encounter.text = "Character raises his hand. The teacher nods toward them. \"Yes?\""
          break
        case 28:
          encounter.text = "Character is surprised by something. Through an unfortunate series of events everyone stumbles upon each other and ends up on the floor, exasperated."
          break
        case 29:
          encounter.text = "What's the point of going on if you're just going to faff about like this?"
          break
        case 30:
          encounter.text = "So it's like this: someboday has got to ask why Character is wearing their clothes inside out. It's been like that all day and it's a problem."
          break
        case 31:
          encounter.text = "Character reveals that their name isn't actually \"Character\". Ya'll been mispronouncing it wrong this entire time and they have been too shy to correct you."
          break
        case 32:
          encounter.text = "There is some weird, localized weather phenomena here. It's literally raining cats and dogs!"
          break
        case 33:
          encounter.text = "It's time to sit down and take a break. This crap is getting out of hand, ain't it?"
          break
        case 34:
          encounter.text = "There are aome cultures that don't have a word for \"green\". Today you learned!"
          break
        case 35:
          encounter.text = "The party lost time and now it's 100 years in the future! Oh boy..."
          break
        case 36:
          encounter.text = "Would you fight one horse sized ant or 500 ant sized horses? Decide now because it's coming..."
          break
        case 37:
          encounter.text = "My projects usually get over-engineered to no end and this is no exception."
          break
        case 38:
          encounter.text = "It's time for a nap. A magical slumber washes over all of you."
          break
        case 39:
          encounter.text = "Gosh darn'it. Dang nabb'it!"
          break
        case 40:
          encounter.text = "Everyone breaks out into contagious dance!"
          break
        case 41:
          encounter.text = "You come across an elaborate trap consisting of poorly worded insults."
          break
        case 42:
          encounter.text = "A sudden wrestling match breaks out in front of you."
          break
        case 43:
          encounter.text = "Character trips over their shoes. Some evil person tied the laces together."
          break
        case 44:
          encounter.text = "You pockets are turned inside out through some sort of dark sorcery. The party is now cash poor."
          break
        case 45:
          encounter.text = "What's the point of anything? You must answer this question before you continue."
          break
        case 46:
          encounter.text = "You are, by some twist of cosmic fate, sent back into ancient times temporarily. How will you exploit this fact to the benefit of humanity?"
          break
        case 47:
          encounter.text = "A secret, cryptographic document of immense knowledge has granted you one super power. However, whatever power you choose has an incredible downside."
          break
        case 48:
          encounter.text = "You have come across a place of incredible significance, however you fail to notice it because of your devil-may-care attitude."
          break
        case 49:
          encounter.text = "Quickly! Untie your shoes and shift them from the left foot to the right foot. This is of utmost importance."
          break
        case 50:
          encounter.text = "A voice is heard in Character's head, \"This is the emergency spell casting broadcast system. Please standby for further instructions.\""
          break
        case 51:
          encounter.text = "A team of mal-intended turkey drones approach!"
          encounter.enemies = [
            createEnemy("Turkey Prime", calculateRoll("5d10+10"), 14, 0, "2d6+3", "d20+2"),
            createEnemy("Turkey Lackey A", calculateRoll("5d10+10"), 14, 0, "2d6+3", "d20+2"),
            createEnemy("Turkey Lackey B", calculateRoll("5d10+10"), 14, 0, "2d6+3", "d20+2"),
          ]
          break
        case 52:
          encounter.text = "A calculator is someone who calculates. One such person is here and they mean no good."
          encounter.enemies = [
            createEnemy("The Calculator", calculateRoll("5d8"), 13, 0, "2d4+2", "d20-1", "Calculate Demise1d20")
          ]
          break
        case 53:
          encounter.text = "An digitized fountain pen is on its way to write you out of existence!"
          encounter.enemies = [
            createEnemy("Fountain Pen", calculateRoll("6d10+6"), 13, 0, "1d10+2", "d20+3", "Ink Blot2d4+6")
          ]
          break
        case 54:
          encounter.text = "Oh no! Your childhood bully has come back and he's joined by a gang of bad dudes."
          encounter.enemies = [
            createEnemy("Bully", calculateRoll("5d10+10"), 12, 0, "1d8", "d20-5"),
            createEnemy("Lackey A", calculateRoll("2d8+2"), 12, 0, "1d8", "d20+1"),
            createEnemy("Lackey B", calculateRoll("2d8+2"), 12, 0, "1d8", "d20+1"),
            createEnemy("Lackey C", calculateRoll("2d8+2"), 12, 0, "1d8", "d20+1"),
          ]
          break
        case 55:
          encounter.text = "It's a giant, living pimple and it's ready to burst at you."
          encounter.enemies = [
            createEnemy("Pimple", calculateRoll("4d8+4"), 14, 0, "1d8+2", "d20+1", "Burst Fire3d6")
          ]
          break
        case 56:
          encounter.text = "An evil breath fills the room. You must defeat it before you can't breathe anymore."
          encounter.enemies = [
            createEnemy("Evil Breath", calculateRoll("4d10+4"), 14, 0, "2d6+3", "d20+1", "Stank2d10+5")
          ]
          break
        case 57:
          encounter.text = "A rocket racoon suddenly appears and slaps you in the face. It's clear that it is challenging you to a duel."
          encounter.enemies = [
            createEnemy("Racoon", calculateRoll("3d10+3"), 13, 0, "1d8+2", "d20+1", "Slap1d5+2")
          ]
          break
        case 58:
          encounter.text = "A water bottle sprouts legs. Its unnatural gait betrays it's perverse intentions."
          encounter.enemies = [
            createEnemy("Water Bottle", calculateRoll("2d10+4"), 12, 0, "1d4", "d20-1", "Drench5d3"),
          ]
          break
        case 59:
          encounter.text = "A sleeping guard is here. He is alerted once you start farting uncontrollably."
          encounter.enemies = [
            createEnemy("Guard", calculateRoll("3d10+3"), 14, 0, "1d8+2", "d20+2", "Yawn")
          ]
          break
        case 60:
          encounter.text = "Your best friend from way back has come around. Sadly you have nothing in common with each other and now you're at odds."
          encounter.enemies = [
            createEnemy("Best Friend", calculateRoll("3d10+3"), 14, 0, "2d4+4", "d20+4"),
            createEnemy("Your Replacement", calculateRoll("5d6"), 14, 0, "1d8+1", "d20+2"),
            createEnemy("The New Bestie", calculateRoll("5d6"), 14, 0, "1d8+1", "d20+2"),
          ]
          break
        case 61:
          encounter.text = "Your shadow has become jealous of all that moving around freely thing you do. It attacks!"
          encounter.enemies = [
            createEnemy("Shadow", calculateRoll("4d10"), 14, 0, "1d6+2", "d20+3")
          ]
          break
        case 62:
          encounter.text = "You encounter an accident prone ninja! It clumsily brandishes its energy weapon but sends it clattering onto the floor before it. The ninja apologizes profusely as it scrambles back into attack position."
          encounter.enemies = [
            createEnemy("Ninja", calculateRoll("6d10+12"), 14, 0, "2d6+3", "d20+2", "Shuriken3d6+3")
          ]
          break
        case 63:
          encounter.text = "The AI Dungeon has become sentient and sends its minions forth to destroy you!"
          encounter.enemies = [
            createEnemy("Mixtral", calculateRoll("3d10+3"), 12, 0, "2d6+1", "d20+2"),
            createEnemy("MythoMax", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Wizard", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Pegasus", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2")
          ]
          break
        case 64:
          encounter.text = "The evil hacker has conjured enemies to slay you. He did not send his best."
          encounter.enemies = [
            createEnemy("Enthusiastic Intern", calculateRoll("6d10+6"), 10, 0, "1d10+2", "d20+1"),
            createEnemy("Retirement Aged Fighter", calculateRoll("6d10+6"), 10, 0, "1d10+2", "d20+1"),
            createEnemy("A Common Fool", calculateRoll("6d10+6"), 10, "1d10+2", 0, "d20+1", "Contagious Laughter")
          ]
          break
        case 65:
          encounter.text = "The Grammar Nazis attck in fool force!"
          encounter.enemies = [
            createEnemy("Grammar Nazi A", calculateRoll("2d8"), 13, 0, "1d4+3", "d20+3", "Correct Grammar"),
            createEnemy("Grammar Nazi B", calculateRoll("2d8"), 13, 0, "1d4+3", "d20+3", "Correct Grammar"),
            createEnemy("Grammar Nazi C", calculateRoll("2d8"), 13, 0, "1d4+3", "d20+3", "Correct Grammar")
          ]
          break
        case 66:
          encounter.text = "The mini-people have contracted their deadliest assassin to assault you. The twelve-inch pianist is on the move!"
          encounter.enemies = [
            createEnemy("Pianist", calculateRoll("5d10+10"), 12, 0, "2d6+3", "d20+2", "Deadly Tune5d4")
          ]
          break
        case 67:
          encounter.text = "Take it easy this time. A rude tortoise is slowly coming this way and it has foul plans for the party."
          encounter.enemies = [
            createEnemy("Rude Tortoise", calculateRoll("5d10+10"), 11, 0, "2d6+3", "d20+2", "Shell Up")
          ]
          break
        case 68:
          encounter.text = "The ninja-mime attacks! Why won't he say anything?"
          encounter.enemies = [
            createEnemy("Ninja Mime", calculateRoll("2d6"), 15, 0, "1d6+2", "d20+2", "Pantomime3d6")
          ]
          break
        case 69:
          encounter.text = "A disgusting fashion faux pas presents itself in front of the party. Defend yourself."
          encounter.enemies = [
            createEnemy("Ill Fitting Clothes", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Color Clash", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Pleated Pants", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Black and White Stripes", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2")
          ]
          break
        case 70:
          encounter.text = "A miserable plate of unfinished food reveals itself. \"Waste not, want not,\" it says menacingly."
          encounter.enemies = [
            createEnemy("Food Plate", calculateRoll("2d8+2"), 12, 0, "1d6+1", "d20+1", "Glutton")
          ]
          break
        case 71:
          encounter.text = "A spork is a multifunctional utensil. It turns its malicious gaze towards you."
          encounter.enemies = [
            createEnemy("Spork", calculateRoll("2d8+2"), 16, 0, "1d8+1", "d20+1", "Transform into Fork", "Transform into Spoon")
          ]
          break
        case 72:
          encounter.text = "An angry mother-in-law nags into your general area."
          encounter.enemies = [
            createEnemy("Mother-In-Law", calculateRoll("6d10+18"), 13, 0, "2d10+4", "d20+1", "Nag", "Verbal Assault3d10")
          ]
          break
        case 73:
          encounter.text = "A squad of trick motorcyclists wheel into your area! They're doing dastardly maneuvers in front of your face."
          encounter.enemies = [
            createEnemy("Motorcyclist A", calculateRoll("6d10+12"), 12, 0, "2d6+4", "d20+2", "Trick"),
            createEnemy("Motorcyclist B", calculateRoll("6d10+12"), 12, 0, "2d6+4", "d20+2", "Trick"),
            createEnemy("Motorcyclist C", calculateRoll("6d10+12"), 12, 0, "2d6+4", "d20+2", "Trick"),
            createEnemy("Ring Leader", calculateRoll("7d8+21"), 15, 0, "1d6+2", calculateRoll("d20"), "Command")
          ]
          break
        case 74:
          encounter.text = "Some stressed out people are here and they misinterpret your casual greeting as a taunt. Emotions are on high."
          encounter.enemies = [
            createEnemy("Angry Guy", calculateRoll("8d12+8"), 12, 0, "2d8+4", "d20+2"),
            createEnemy("Stressed Pal", calculateRoll("8d12+8"), 12, 0, "2d8+4", "d20+2"),
            createEnemy("The Instigator", calculateRoll("8d12+8"), 12, 0, "2d8+4", calculateRoll("d20+10"), "Instigate"),
          ]
          break
        case 75:
          encounter.text = "An ominous stop sign is placed here at odds with your sensibility. It directs you to cease moving at once."
          encounter.enemies = [
            createEnemy("Stop Sign", calculateRoll("6d8"), 14, 0, "2d6+2", "d20+2", "Red Light", "Green Light")
          ]
          break
        case 76:
          encounter.text = "Elliot Carver, the villain from Tomorrow Never Dies, ridicules your martial ability. You will not let this stand."
          encounter.enemies = [
            createEnemy("Elliot Carver", calculateRoll("6d10+12"), 12, 0, "2d8+4", "d20+1", "Berate3d10"),
            createEnemy("Goon A", calculateRoll("3d10+3"), 11, 0, "3d10+5", "d20-1"),
            createEnemy("Goon B", calculateRoll("3d10+3"), 11, 0, "3d10+5", "d20-1"),
          ]
          break
        case 77:
          encounter.text = "So, you accidentally punched yourself while carrying a load and picking up something off the ground at the same time. Pissed off, you decide to fight yourself."
          encounter.enemies = [
            createEnemy("Yourself", calculateRoll("6d8+18"), 15, 0, "1d6+3", "d20+3")
          ]
          break
        case 78:
          encounter.text = "A suspension of bad feelings waddles toward you. You have no choice but to take to arms."
          encounter.enemies = [
            createEnemy("Sad", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
            createEnemy("Mad", calculateRoll("6d10+12"), 8, 0, "2d6+3", "d20-2"),
            createEnemy("Depressed", calculateRoll("6d10+12"), 8, 0, "2d6+3", "d20-2"),
            createEnemy("Upset", calculateRoll("6d10+12"), 8, 0, "2d6+3", "d20-2")
          ]
          break
        case 79:
          encounter.text = "A gambler is here. Feeling cheated, he directs his misfortune at you."
          encounter.enemies = [
            createEnemy("A gambler", calculateRoll("7d10+21"), 13, 0, "2d8+5", "d20+1", "Even the Odds")
          ]
          break
        case 80:
          encounter.text = "You know how they say, \"You miss 100% of the shots you don't take?\" Well here's that shot you didn't take."
          encounter.enemies = [
            createEnemy("The Shot", calculateRoll("5d10+5"), 13, 0, "1d10+2", "d20+2")
          ]
          break
        case 81:
          encounter.text = "You know how they say, \"The path to hell is paved with good intentions?\" Here are those good intentions."
          encounter.enemies = [
            createEnemy("Good Intention A", calculateRoll("6d8+12"), 14, 0, "1d6-1", "d20+2"),
            createEnemy("Good Intention B", calculateRoll("6d8+12"), 14, 0, "1d6-1", "d20+2"),
            createEnemy("Good Intention C", calculateRoll("6d8+12"), 14, 0, "1d6-1", "d20+2")
          ]
          break
        case 82:
          encounter.text = "It's the AI from AI Dungeon! Man your battle stations."
          encounter.enemies = [
            createEnemy("AI", calculateRoll("5d10+10"), 12, 0, "2d4+2", "d20+1", "Hallucinate")
          ]
          break
        case 83:
          encounter.text = "You shouldn't have kicked that puppy when you were a kid because it's all grown up and it remembers."
          encounter.enemies = [
            createEnemy("Vengeance Dog", calculateRoll("6d8+18"), 14, 0, "1d8+2", "d20+2", "Intimidating Growl")
          ]
          break
        case 84:
          encounter.text = "Hah! You're screwed now! Your worst fear is actualized in front of you. It's a thing!"
          encounter.enemies = [
            createEnemy("Thing You Fear Most", calculateRoll("10d10+20"), 13, 0, "2d6+4", "d20+1", "Morph")
          ]
          break
        case 85:
          encounter.text = "Well, if it isn't the consequences of your actions."
          encounter.enemies = [
            createEnemy("Consequence A", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Consequence B", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Consequence C", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Consequence D", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2"),
            createEnemy("Consequence E", calculateRoll("3d8+9"), 8, 0, "1d6+1", "d20-2")
          ]
          break
        case 86:
          encounter.text = "A thousand armies of the Persian empire descend upon you. They will drink the rivers dry. Their arrows will blot out the sun."
          encounter.enemies = [
            createEnemy("One Thousand", calculateRoll("8d12+16"), 15, 0, "4d6+4", calculateRoll("d20")),
            createEnemy("Two Thousand", calculateRoll("8d12+16"), 15, 0, "4d6+4", calculateRoll("d20")),
            createEnemy("Three Thousand", calculateRoll("8d12+16"), 15, 0, "4d6+4", calculateRoll("d20"))
          ]
          break
        case 87:
          encounter.text = "The embodiment of really poor decisions and a hangover approaches you in a disturbing pattern."
          encounter.enemies = [
            createEnemy("Hangover", calculateRoll("8d8+16"), 15, 0, "2d6+3", "d20-1", "Head Pain3d6"),
            createEnemy("Poor Decision A", calculateRoll("8d8+16"), 15, 0, "2d6+3", "d20-1"),
            createEnemy("Poor Decision B", calculateRoll("8d8+16"), 15, 0, "2d6+3", "d20-1")
          ]
          break
        case 88:
          encounter.text = "An annoying sales-person is using hard-sale tactics at you. Resist!"
          encounter.enemies = [
            createEnemy("Sales-Person", calculateRoll("8d8+16"), 14, 0, "1d6+4", "d20+4", "Big Sale")
          ]
          break
        case 89:
          encounter.text = "A group of Reddit mods are here. This is not a good sign."
          encounter.enemies = [
            createEnemy("Reddit Mod A", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod B", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod C", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod D", calculateRoll("2d6"), 12, 0, "1d4+2", "d20+2"),
            createEnemy("Grand Reddit Mod", calculateRoll("7d10+14"), 15, 0, "1d10+2", "d20+1")
          ]
          break
        case 90:
          encounter.text = "An expert in bulshiddo beckoms toward you. You have no other choice but to engage."
          encounter.enemies = [
            createEnemy("Bulshiddo Expert", calculateRoll("7d10+14"), 15, 0, "1d10+2", "d20+1", "Focus Chit")
          ]
          break
        case 91:
          encounter.text = "You know how they say \"Hope springs eternal?\" Well, Hope is springing her way to your direction."
          encounter.enemies = [
            createEnemy("Hope", calculateRoll("7d8+14"), 15, 0, "1d8+3", "d20+1", "Spring Eternal5d4")
          ]
          break
        case 92:
          encounter.text = "An immodest pixie points and laughs at you. She thinks you're funny looking. Battle is inevitable."
          encounter.enemies = [
            createEnemy("Pixie", calculateRoll("12d12+12"), 12, 0, "2d6+3", calculateRoll("d20"), "Shameless Magic2d10")
          ]
          break
        case 93:
          encounter.text = "A touring squad of basketball players send a stray rebound right to your head. It's on now!"
          encounter.enemies = [
            createEnemy("Scottie P", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
            createEnemy("M Jordan", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
            createEnemy("L Bird", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
            createEnemy("Magic J", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
            createEnemy("C Barkley", calculateRoll("6d10+12"), 8, 0, "2d6+2", "d20-2"),
          ]
          break
        case 94:
          encounter.text = "What happens if you fight the void? Let's see."
          encounter.enemies = [
            createEnemy("The Void", calculateRoll("5d10+5"), 13, 0, "1d10+2", "d20+2", "Darkness")
          ]
          break
        case 95:
          encounter.text = "Oh god, I've written so many encounters at this point. Just use your imagination."
          encounter.enemies = [
            createEnemy("Your Imagination", calculateRoll("6d8+12"), 14, 0, "1d6-1", "d20+2", "Detect Thoughts")
          ]
          break
        case 96:
          encounter.text = "A tachometer is revving up!"
          encounter.enemies = [
            createEnemy("Tachometer", calculateRoll("5d10+10"), 14, 0, "2d6+3", "d20+2", "Accelerate")
          ]
          break
        case 97:
          encounter.text = "Taco Tuesdays are back and with a serious vengeance."
          encounter.enemies = [
            createEnemy("Taco Tuesday A", calculateRoll("9d8+18"), 11, 0, "1d6+2", "d20+1", "Diarrhea3d10"),
            createEnemy("Taco Tuesday B", calculateRoll("9d8+18"), 11, 0, "1d6+2", "d20+1", "Diarrhea3d10")
          ]
          break
        case 98:
          encounter.text = "There's like one dude screaming here. It's not clear who he's yelling at or why. Can you please shut him up?"
          encounter.enemies = [
            createEnemy("Screaming Dude", calculateRoll("5d10+10"), 14, 0, "2d6+3", "d20+2", "Scream")
          ]
          break
        case 99:
          encounter.text = "Magneto has somehow entered your world. He blames you for this injustice."
          encounter.enemies = [
            createEnemy("Magneto", calculateRoll("6d8+18"), 14, 0, "1d8+2", "d20+2", "Manipulate Metal", "Shield"),
            createEnemy("The Juggernaut", calculateRoll("6d8+18"), 14, 0, "1d8+2", "d20+2", "Charge3d10"),
            createEnemy("Sabretooth", calculateRoll("6d8+18"), 14, 0, "1d8+2", "d20+2"),
          ]
          break
        case 100:
          encounter.text = "A banker has come to collect on your debts."
          encounter.enemies = [
            createEnemy("The Banker", calculateRoll("10d10+20"), 13, 0, "2d6+4", "d20+1", "Prisoner's Dilemma", "PMT Function3d6", "Tax Break")
          ]
          break
        case 101:
          encounter.text = "The mouse from If You Give a Mouse a Cookie... Attack!"
          encounter.enemies = [
            createEnemy("Mouse", calculateRoll("10d10+20"), 13, 0, "2d6+4", "d20+1", "Take Cookie")
          ]
      }
      break
    case "easy":
      if (encounter.cr == null) encounter.cr = 1
      multiplier = 1 + (encounter.cr - 1) / 10
      switch (getRandomInteger(0, 99)) {
        case 0:
          encounter.text = "There is a curious contraption encasing what appears to be a small crate of goods."
          break
        case 1:
          encounter.text = "A crashed escape pod is before you. You see that motion trackers are active, watching for unauthorized entry."
          break
        case 2:
          encounter.text = "You've found notes from a rogue scientist that claim they were working on a cure for the nano-necrotic virus."
          break
        case 3:
          encounter.text = "A radio transmitter of unknown origin is here. It's sending out some sort of code."
          break
        case 4:
          encounter.text = "You encounter a group of survivors that claim they can control the zombies with a chip that is surgically implanted in the brain."
          break
        case 5:
          encounter.text = "It looks like a scavenger's stash was left here."
          break
        case 6:
          encounter.text = "A harmless drone is spotted rolling around in circles."
          break
        case 7:
          encounter.text = "Canned goods and supplies for everyone! What is this doing here?"
          break
        case 8:
          encounter.text = "There is rubble from a once great building that stood here. There is a possibility that supplies or tech can be found here."
          break
        case 9:
          encounter.text = "The surface has been obliterated by what appears to have been a missile strike. However, an entrance to an underground parking structure remains."
          break
        case 10:
          encounter.text = "A group of travelling traders approach with open hands indicating that they come in peace."
          break
        case 11:
          encounter.text = "A broken soldier is pinned under the debris of a recent explosion. \"Help!\" he exclaims."
          break
        case 12:
          encounter.text = "A pile of bodies meticulously arranged into a geometric pattern almost in the shape of a pyramid. This must have been recent."
          break
        case 13:
          encounter.text = "Amongst the trash you miraculously find a fully functional PDA. When you charge it up, you see a live feed of some scientific facility. Suddenly, you notice movement."
          break
        case 14:
          encounter.text = "A drone puppy excitedly dashes towards you. You may very well be the first person its seen in decades."
          break
        case 15:
          encounter.text = "A well known electronics chain store stands before you."
          break
        case 16:
          encounter.text = "Someone left a series of explosive munitions here."
          break
        case 17:
          encounter.text = "A missile battery is stationed here. It seems to have been constructed post-apocalypse."
          break
        case 18:
          encounter.text = "A humonoid robot stands motionless in front of you. When it notices your presence, it shouts \"Greetings traveller!\""
          break
        case 19:
          encounter.text = "Abandoned cars have been arranged in a circle with bodies littered everywhere. Apparently this was someone's last stand before they were overwhelmed."
          break
        case 20:
          encounter.text = "You found a data node detailing various body modifications that have been spotted on zombies in the area. Who is responsible for this?"
          break
        case 21:
          encounter.text = "A group of heli drones are assaulting a building in the distance. It appears that whatever threat they were responding to has been gone for a long time. They don't pay any attention to you."
          break
        case 22:
          encounter.text = "A passage to an underground bunker is spotted here. It is locked by a data pad and the door is reinforced against explosives."
          break
        case 23:
          encounter.text = "A house with steel shutters over the windows and make-shift defenses can be seen in the distance. Someone spent a lot of time to make this building impenetrable."
          break
        case 24:
          encounter.text = "A twenty-foot wide pit is before you. It seems to lead straight down to some endless depth. What could create such a hole?"
          break
        case 25:
          encounter.text = "Giant excavation machines have been left here. Whoever was here was looking for something. Did they find it?"
          break
        case 26:
          encounter.text = "A military supply drop has been found. It doesn't seem like anyone has opened it because the cryptographic lock looks untouched."
          break
        case 27:
          encounter.text = "Suddenly, a flying drone approaches! You stand at guard, but for some reason all it does is deliver a package on the ground and leaves without incident."
          break
        case 28:
          encounter.text = "You receive an abrupt radio transmission. \"We are in desperate need of supplies! We're trapped here. Is anyone out there?\""
          break
        case 29:
          encounter.text = "A computer system installed here seems completely out of place. You hear an audio playback \"Satellite uplink initiated.\""
          break
        case 30:
          encounter.text = "Graffiti covers the walls of this ruined building. \"The doom sayer is coming!\""
          break
        case 31:
          encounter.text = "You have found a used food recycler."
          break
        case 32:
          encounter.text = "It seems that two groups of survivors came at odds against each other here. Before you lays the aftermath. A muffled voice can be heard."
          break
        case 33:
          encounter.text = "After rounding a corner, you discover a curiousity. A decapitated robot is repeating the words \"The sovereign! The sovereign!\" What does it mean?"
          break
        case 34:
          encounter.text = "A broken exo-suit has been situated in a pod in front of you. Can it be repaired or should it be salvaged for parts?"
          break
        case 35:
          encounter.text = "A holographic map displays points of interest in the local area. There are notes about what places should be avoided."
          break
        case 36:
          encounter.text = "Batteries of all shapes and sizes are scattered across the surface here."
          break
        case 37:
          encounter.text = "You see someone in the distance. It looks like they're picking through some rubble trying to find valuables."
          break
        case 38:
          encounter.text = "Without warning, a craft shoots across the air. Its air vortex knocks you off your feet. Where was it going and who pilots it?"
          break
        case 39:
          encounter.text = "The crops in the local area have been melted by some intense heat. Whatever it was that caused this was alien in origin."
          break
        case 40:
          encounter.text = "There is what looks to be a communicator in front of you. The buttons are labeled in a strange language you are not familiar with."
          break
        case 41:
          encounter.text = "Something catches your eye at a distance, but when you turn it darts out of visible range. You're being followed."
          break
        case 42:
          encounter.text = "You have found a shopping catalog listing cybernetic upgrades of a dubious nature. It is attached to a shipping crate."
          break
        case 43:
          encounter.text = "There is a large crate with bold text emblazened on its front \"FRAGILE DO NOT DROP\""
          break
        case 44:
          encounter.text = "You hear music. Music! And it is not a song you recognize from the Citadel's catalog."
          break
        case 45:
          encounter.text = "A group of survivors are sitting around a campfire. They haven't noticed you yet."
          break
        case 46:
          encounter.text = "Pre-war military vehicles have been seen here at a distance. By indication of the tracks, they appear to be heading away from you."
          break
        case 47:
          encounter.text = "You find yourself in a junk heap. Most of it is unusable, however you come across the unmistakable parts to a VTOL craft."
          break
        case 48:
          encounter.text = "A deactivated hovercraft is here. By cursory glance, the only thing missing is the control unit."
          break
        case 49:
          encounter.text = "You spot the typical pre-war propaganda poster: \"Join the worthy cause! The VTOL Knights need you!\" However, a corner is curled up reavealing something written on the backside."
          break
        case 50:
          encounter.text = "You stumble across a data log labeled \"Chief Engineer - Military Operations\""
          break
        case 50:
          encounter.text = "The zombie reveals itself! It's unlike the others as it is a solitary hunter. This one has been stalking you for some time."
          encounter.enemies = [
            createEnemy("Stalker Zombie", calculateRoll("5d8"), 12, 4, "1d10", "d20+2", "Life Drain1d10")
          ]
          break
        case 51:
          encounter.text = "A cleaning drone approaches. Clearly its programming has been corrupted as it now tries to attack you."
          encounter.enemies = [
            createEnemy("Cleaning Drone", calculateRoll("2d+6"), 9, -3, "1d4-1", "d20-1")
          ]
          break
        case 52:
          encounter.text = "Desperate survivors have ambushed you! They want to take your gear and supplies."
          encounter.enemies = [
            createEnemy("Survivor A", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20"),
            createEnemy("Survivor B", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20"),
            createEnemy("Survivor C", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20")
          ]
          break
        case 53:
          encounter.text = "A damaged robot is here. Despite your efforts, itt seems to consider you as a threat."
          encounter.enemies = [
            createEnemy("Damaged Robot", calculateRoll("3d8+6"), 11, 6, "2d4+2", "d20")
          ]
          break
        case 54:
          encounter.text = "An boar bot is charging at you!"
          encounter.enemies = [
            createEnemy("Boar Bot", calculateRoll("2d8+2"), 11, 4, "1d6+1", "d20")
          ]
          break
        case 55:
          encounter.text = "Two vultures circle and then descend upon you. These are rogue holograms from a nature simulation long since corrupted."
          encounter.enemies = [
            createEnemy("Vulture A", calculateRoll("6d6+6"), 11, 1, "1d4+1", "d20+1", "Infected Bite1d4+1"),
            createEnemy("Vulture B", calculateRoll("6d6+6"), 11, 1, "1d4+1", "d20+1", "Infected Bite1d4+1")
          ]
          break
        case 56:
          encounter.text = "You've fallen into a pit of snake drones. A group of them slither up to you, winding up to strike."
          encounter.enemies = [
            createEnemy("Snake Drone A", calculateRoll("2d10+2"), 12, 6, "1d8+2", "d20+2", "Poison Bite2d4+1"),
            createEnemy("Snake Drone B", calculateRoll("2d10+2"), 12, 6, "1d8+2", "d20+2", "Poison Bite2d4+1")
          ]
          break
        case 57:
          encounter.text = "A hunter killer robot has caught your scent. It's going to make its move!"
          encounter.enemies = [
            createEnemy("HK Robot", calculateRoll("5d10+10"), 14, 8, "2d6+3", "d20+2")
          ]
          break
        case 58:
          encounter.text = "The remarkable pattern on the skin of this alien frog is a clear indication that it's poisonous. Watch out!"
          encounter.enemies = [
            createEnemy("Alien Frog", calculateRoll("4d8"), 11, 4, "1d6+1", "d20+1", "Poison2d4+1")
          ]
          break
        case 59:
          encounter.text = "You've come across a graveyard of robots. Rows and rows of deactivated machines. Except for one which suddenly turns to strike!"
          encounter.enemies = [
            createEnemy("Sentinel Robot", calculateRoll("7d8+21"), 15, 6, "1d6+2", "d20")
          ]
          break
        case 60:
          encounter.text = "Many innocents were slain here. Their bodies have been thrown into a pile. Then you notice their bodies begin to move. Zombies attack!"
          encounter.enemies = [
            createEnemy("Zombie A", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Zombie B", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Zombie C", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Zombie D", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2")
          ]
          break
        case 61:
          encounter.text = "A cyborg warrior has claimed this plot of land and he'll be damned if he lets the likes of you tread all over it."
          encounter.enemies = [
            createEnemy("Cyborg Warrior", calculateRoll("2d8+4"), 10, 4, "1d6+1", "d20")
          ]
          break
        case 62:
          encounter.text = "A robotic centipede crawls into view. Its terrifying shriek makes your skin crawl. Prepare yourself!"
          encounter.enemies = [
            createEnemy("Robo Centipede", calculateRoll("1d6+1"), 13, 1, "1d4+2", "d20+2")
          ]
          break
        case 63:
          encounter.text = "A feral pack of dog drones have nested here. They smell your blood..."
          encounter.enemies = [
            createEnemy("Dog A", calculateRoll("1d8+1"), 11, 2, "1d6", "d20+1"),
            createEnemy("Dog B", calculateRoll("1d8+1"), 11, 2, "1d6", "d20+1"),
            createEnemy("Giant Dog", calculateRoll("6d10+12"), 12, 5, "2d6+3", "d20+2")
          ]
          break
        case 64:
          encounter.text = "A swarm of micro cleaning bots are sweeping across the ground and heading toward you!"
          encounter.enemies = [
            createEnemy("Swarm of cleaning bots", calculateRoll("7d8-7"), 10, 1, "2d6", "d20")
          ]
          break
        case 65:
          encounter.text = "A group of helibots have coalesced here. Your arrival has activated their proximity alert."
          encounter.enemies = [
            createEnemy("Helibot A", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1"),
            createEnemy("Helibot B", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1"),
            createEnemy("Helibot C", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1")
          ]
          break
        case 66:
          encounter.text = "The group of zombies are as surprised to see you as you are to see them. Get ready!"
          encounter.enemies = [
            createEnemy("Zombie A", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Zombie B", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Zombie C", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Zombie D", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2")
          ]
          break
        case 67:
          encounter.text = "A sweet lullaby carries through the air. You are enchanted by its melody. But wait! It's a grey's luring transmission. Resist!"
          encounter.enemies = [
            createEnemy("Grey", calculateRoll("7d8+7"), 11, 4, "2d4+1", "d20+1", "Luring Song")
          ]
          break
        case 68:
          encounter.text = "You spot a cannibal crouched over his rifle. As he loads his weapon, he menaces at you, \"You shouldn't have come here, meat.\""
          encounter.enemies = [
            createEnemy("Cannibal", calculateRoll("2d8+2"), 18, 4, "1d8+1", "d20+1")
          ]
          break
        case 69:
          encounter.text = "A group of small zombies surround and attack you!"
          encounter.enemies = [
            createEnemy("Small Zombie A", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Small Zombie B", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Small Zombie C", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Small Zombie D", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2")
          ]
          break
        case 70:
          encounter.text = "A dominated soldier has come into view. Some dark entity must have hacked his neocortex!"
          encounter.enemies = [
            createEnemy("Soldier", calculateRoll("5d8"), 15, 4, "1d8+2", "d20+3")
          ]
          break
        case 71:
          encounter.text = "A drone sniper has the drop on you! It fires a blast that very narrowly misses its mark. Get ready for a fight!"
          encounter.enemies = [
            createEnemy("Drone Sniper", calculateRoll("2d8+4"), 13, 5, "1d6+2", "d20+2")
          ]
          break
        case 72:
          encounter.text = "Alien like birds peck at the ground ahead of you. That's when they spot you."
          encounter.enemies = [
            createEnemy("Alien Bird A", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Alien Bird B", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Alien Bird C", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6")
          ]
          break
        case 73:
          encounter.text = "You have never seen a zombie this large before. Its snarling teeth glint in the light."
          encounter.enemies = [
            createEnemy("Large Zombie", calculateRoll("4d10+4"), 13, 8, "2d6+3", "d20+1")
          ]
          break
        case 74:
          encounter.text = "Everywhere you look... Zombies! You are surrounded as they shuffle towards you, drawn by the heat of your flesh."
          encounter.enemies = [
            createEnemy("Zombie A", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2"),
            createEnemy("Zombie B", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2"),
            createEnemy("Zombie C", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2"),
            createEnemy("Zombie D", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2"),
            createEnemy("Zombie E", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2")
          ]
          break
        case 75:
          encounter.text = "Your arrival has interrupted a hacker's ritual. His eyes go steely as he plans his retribution."
          encounter.enemies = [
            createEnemy("Hacker", calculateRoll("2d8"), 10, 2, "1d4", "d20", "Fire Sale2d6", "Mind Hack")
          ]
          break
        case 76:
          encounter.text = "A bandit duo eyes your gear. A combination of greed and desperation drive them to attack you."
          encounter.enemies = [
            createEnemy("Bandit A", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20"),
            createEnemy("Bandit B", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20")
          ]
          break
        case 77:
          encounter.text = "A crowd of cultists walk into view. Their aim is clear: to sacrifice you as an offering to the zombies. Attack before you are torn limb from limb!"
          encounter.enemies = [
            createEnemy("Cultist A", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist B", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist C", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 78:
          encounter.text = "A mutant cow has strayed from its herd. You take the opportunity to attack before it alerts the others."
          encounter.enemies = [
            createEnemy("Mutant Cow", calculateRoll("5d8"), 15, 4, "1d4+2", "d20+1")
          ]
          break
        case 79:
          encounter.text = "An albino zombie has been tracking you for some time. It can no longer ignore its hunger pangs and begins racing at you."
          encounter.enemies = [
            createEnemy("Albino Zombie", calculateRoll("2d8+2"), 13, 7, "2d4+2", "d20+2")
          ]
          break
        case 80:
          encounter.text = "A cyborg looks up from his fire. You're spotted!"
          encounter.enemies = [
            createEnemy("Cyborg", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1")
          ]
          break
        case 81:
          encounter.text = "An aerial drone is spotted circling around you. It's coming in for an attack!"
          encounter.enemies = [
            createEnemy("Aerial Drone", calculateRoll("3d8+3"), 16, 4, "1d10+2", "d20")
          ]
          break
        case 82:
          encounter.text = "A pack of zombie dogs are directly ahead. There is no avoiding their dark gaze. Prepare for combat!"
          encounter.enemies = [
            createEnemy("Zombie Dog A", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Zombie Dog B", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Zombie Dog C", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Zombie Dog D", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2")
          ]
          break
        case 83:
          encounter.text = "The mercenary looks at you with a sinister scowl. \"I don't very much like you.\" He brandishes a pistol and prepares to attack you."
          encounter.enemies = [
            createEnemy("Merc", calculateRoll("3d6+6"), 15, 6, "1d8+2", "d20+2", "Irradiated Round1d4+2", "Cloak")
          ]
          break
        case 84:
          encounter.text = "That stink! What is it? An amorphous, gray blob of nanomachines coalesces, clearly alarmed by your presence. It's going to rush you!"
          encounter.enemies = [
            createEnemy("Blog", calculateRoll("4d6+4"), 11, 2, "2d4", "d20")
          ]
          break
        case 85:
          encounter.text = "A wheeled drone! Take cover!"
          encounter.enemies = [
            createEnemy("Wheeled Drone", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2")
          ]
          break
        case 86:
          encounter.text = "It's not your imagination: an alien ooze is seeping through the cracks. It coalesces into a hideous aberration before you."
          encounter.enemies = [
            createEnemy("Alien Ooze", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2", "Corrode Metal")
          ]
          break
        case 87:
          encounter.text = "You catch a food processor tearing meat from the leg of some hapless victim. It drops it immediately once it spots you."
          encounter.enemies = [
            createEnemy("Food Processor", calculateRoll("2d8+2"), 11, 8, "1d4+3", "d20+1")
          ]
          break
        case 88:
          encounter.text = "This is the work of a mad scientist! Zombies composed of the parts of different people stand before you. They attack in practiced unison."
          encounter.enemies = [
            createEnemy("Creature A", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Creature B", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Creature C", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Creature D", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10")
          ]
          break
        case 89:
          encounter.text = "A living wall of limbs and body parts attacks. It's hideous composure defies all reason."
          encounter.enemies = [
            createEnemy("Wall", calculateRoll("3d8"), 7, 3, "1d4", "d20-3")
          ]
          break
        case 90:
          encounter.text = "The sulfur stink reaches your nose first, then the sight of them: a group of holograms composed of pure fire attack."
          encounter.enemies = [
            createEnemy("Hologram A", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Hologram B", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Hologram C", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6")
          ]
          break
        case 91:
          encounter.text = "Out of the corner of your eye you spot a dark figure moving. \"Cyborgs!\" You prepare for the ambush."
          encounter.enemies = [
            createEnemy("Cyborg A", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Cyborg B", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Cyborg C", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Cyborg D", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Cyborg E", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare")
          ]
          break
        case 92:
          encounter.text = "A carnivourous nano cloud! A killing blow will corrode any common weapons."
          encounter.enemies = [
            createEnemy("Nano Cloud", calculateRoll("5d8+5"), 14, 4, "1d8+1", "d20+1")
          ]
          break
        case 93:
          encounter.text = "A zombie corrupted officer stands firm. Its malevolence can be felt in your bones."
          encounter.enemies = [
            createEnemy("Officer", calculateRoll("5d8"), 12, 4, "3d6", "d20+2", "Life Drain3d6", "Counter Hack")
          ]
          break
        case 94:
          encounter.text = "Viscious rat bots are commanded to attack you. Oh god, they're everywhere!"
          encounter.enemies = [
            createEnemy("Rat Bot A", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot B", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot C", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot D", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot E", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot F", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot G", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot H", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot I", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Rat Bot J", calculateRoll("1d4-1"), 13, 1, "1", "d20+3")
          ]
          break
        case 95:
          encounter.text = "A self-driving car swerves dangerously close to you. For some reason, it has decided to target you."
          encounter.enemies = [
            createEnemy("Car", calculateRoll("7d12+14"), 13, 10, "3d6+4", "d20-2")
          ]
          break
        case 96:
          encounter.text = "A robotic centaur is leading up to you. It may have been tracking your for some time. Get ready!"
          encounter.enemies = [
            createEnemy("Centaur", calculateRoll("6d10+12"), 12, 10, "2d6+4", "d20+2", "Charge3d6")
          ]
          break
        case 97:
          encounter.text = "A gelatinous cube of zombie meat occupies this space. It's wobbling hatefully toward you!"
          encounter.enemies = [
            createEnemy("Meat Cube", calculateRoll("8d10+40"), 6, "3d6", "d20-4", "Engulf3d6")
          ]
          break
        case 98:
          encounter.text = "A nefarious hologram curls its disgusting tongue, tasting the air. Suddenly, it turns toward you!"
          encounter.enemies = [
            createEnemy("Hologram", calculateRoll("8d8"), 13, 6, "2d8+3", "d20+3")
          ]
          break
        case 99:
          encounter.text = "A cyborg war party comes upon you!"
          encounter.enemies = [
            createEnemy("Cyborg A", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Cyborg B", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Cyborg C", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Cyborg D", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1")
          ]
          break
      }
      break
    case "medium":
      if (encounter.cr == null) encounter.cr = 5
      multiplier = 1 + (encounter.cr - 5) / 10
      switch (getRandomInteger(0, 99)) {
        case 0:
          encounter.text = "There is a building here, but there appears to be no doors. How do you get in?"
          break
        case 1:
          encounter.text = "A hologram projector is here. There are various pre-programmed scenarios that can be activated by the control panel."
          break
        case 2:
          encounter.text = "A holographic projection of art catches your eye. You are mesmerized by its appearance. You cannot turn away from it and are now being drawn to it."
          break
        case 3:
          encounter.text = "The ground before you seems to be pulsing with a red glow. A sudden shaking alerts you."
          break
        case 4:
          encounter.text = "A drop pod lands gracefully before you. The doors remain shut as you approach."
          break
        case 5:
          encounter.text = "Warning signs of a mine field line the perimeter of a farm."
          break
        case 6:
          encounter.text = "A team of robust drone oxen are roaming ahead."
          break
        case 7:
          encounter.text = "You detect a gravity anamoly in the local area."
          break
        case 8:
          encounter.text = "For some reason, you hear nothing. The sounds of the environment grow to an absolute quiet. You try to speak, but no sound is heard."
          break
        case 9:
          encounter.text = "A ways away you see a lone robot defending against a group of cyborg mercenaries. It is hard to determine who has the upper hand."
          break
        case 10:
          encounter.text = "You have found a cache of rations, but most of them are spoiled. You may find something of value if you keep looking."
          break
        case 11:
          encounter.text = "A klaxon siren screams in the distance. Whatever you're approaching is attracting a lot of attention from the undead."
          break
        case 12:
          encounter.text = "You have come across a pre-war vehicle. It strangely seems to still be operational. You notice a glowing dash icon indicating that it is alarmed."
          break
        case 13:
          encounter.text = "Three pods are placed conspicuously in a circle. There is cryptic text written in the center: \"CHOOSE WISELY\""
          break
        case 14:
          encounter.text = "Ammo magazines are scattered around this place. Some have ammo, but most are empty. You spot one with a peculiar red stripe across it."
          break
        case 15:
          encounter.text = "You have suddenly come across another military group. Tensions are high as they aim their weapons at you, but it appears that they will not act unless provoked."
          break
        case 16:
          encounter.text = "A makeshift bridge has been constructed here. You notice the tell-tale signs of explosive wiring. It's rigged to blow."
          break
        case 17:
          encounter.text = "You hear explosions in the distance. Then the strike of artillery fire all around you. You're being targeted!"
          break
        case 18:
          encounter.text = "A fortified hanger is here. You see that an entryway has been carved into the side."
          break
        case 19:
          encounter.text = "An electrified fence has been set up here, preventing you from further progress."
          break
        case 20:
          encounter.text = "You have come across a weather station. It seems to be active and its instruments are functioning."
          break
        case 21:
          encounter.text = "As you enter this place, you see the wonderous vision of a pre-war city. Vehicles are flying around and people are gathering without a care in the world. It seems far too surreal to not be a holographic illusion."
          break
        case 22:
          encounter.text = "You hear a click. You have stepped on an improvised trap ready to explode as soon as you lift away from the trigger."
          break
        case 23:
          encounter.text = "A cyborg is appraoching! However, it looks to be that he is surrendering. He waves his empty hands in the air."
          break
        case 24:
          encounter.text = "You spot the tracks of a large animal drone. Whatever passed through here, it was massive."
          break
        case 25:
          encounter.text = "You have found a cache of weapons. As you reach for it, however, your hand passes through it effortlessly. It's a trap!"
          break
        case 26:
          encounter.text = "You hear the whirring of a giant fan. You see the exhaust plume of a massive underground structure ahead of you. Is this a cyborg colony?"
          break
        case 27:
          encounter.text = "Buzzing. Buzzing by your ears. These bee drones are getting aggressive. You must be near a hive."
          break
        case 28:
          encounter.text = "A zombie is flayed out across a panel, pinned by giant bolts driven through its limbs. Though it's alive, it's unclear how long it's been here."
          break
        case 29:
          encounter.text = "An pre-war atmosphere processor has been spotted on the horizon. What riches lie within?"
          break
        case 30:
          encounter.text = "Pylons have been constructed along the edges of this area. Regretfully, you've found yourself in the center of them as they begin to hum and start shooting out beams of electricty."
          break
        case 31:
          encounter.text = "A weapon is levitating above a pedestal in front of you. In your mind you hear the challenge: \"Are you worthy?\""
          break
        case 32:
          encounter.text = "Many medical camps were deployed across the world in response to the calamity. One such encampment is before you."
          break
        case 33:
          encounter.text = "Barrels of fuel have been gathered here by a survivor. Some are tipped over, leaking their explosive liquid all over the place. One stray spark can ignite the whole area."
          break
        case 34:
          encounter.text = "A trading drone happily sings to itself as it hovers from door to door in this place. It wishes to initiate a transaction with you."
          break
        case 35:
          encounter.text = "Factories like this created the great machines that enabled human prosperity. Now they lay dormant, waiting to be looted by survivors."
          break
        case 36:
          encounter.text = "A craft hovers above you at a high altitude. It seems to be floating there with no apparent source of propulsion and hasn't moved for quite some time."
          break
        case 37:
          encounter.text = "This is a site of a zombie attack. One of the survivors begs you, \"Please, kill me! I'm infected. The transformation... I feel it coming.\""
          break
        case 38:
          encounter.text = "A post-war tower has been constructed here. Zombies clearly have been trying to break in, but their limbs have been grinded to nubs from its abrassive fortifications."
          break
        case 39:
          encounter.text = "You see various bodies strewn about. These are no ordinary bodies. Someone was experimenting with these creatrures."
          break
        case 40:
          encounter.text = "A medical drone is malfunctioning. Its surgical saw is carving through walls and objects as it haphazardly makes a course through a lab."
          break
        case 41:
          encounter.text = "A terminal for an AI core is present here"
          break
        case 42:
          encounter.text = "It is clear that this robot was once responsible for directing traffic in pre-war civilization. Now it attacks anything that comes its way if they don't observe its arbitrary rules of passing through this area."
          break
        case 43:
          encounter.text = "A giant, spider-like robot is travelling across the area. It's collecting debris and processing it inside of its cavity."
          break
        case 44:
          encounter.text = "You see a prototype robot sealed in a module. A digital display beckons you to activate it."
          break
        case 45:
          encounter.text = "A cyborg implant contained in a magnetic zero point cage has been found here. It is unmovable without finding a way to disable the field."
          break
        case 46:
          encounter.text = "A force field blocks your way."
          break
        case 47:
          encounter.text = "You have stumbled across a secret cyborg commune where humans and machines seem to have found a way to co-exist with each other."
          break
        case 48:
          encounter.text = "A holographic anomoly is present here. It appears as an orb of light that dances from here to there, creating illusions and quickly deleting others."
          break
        case 49:
          encounter.text = "Laser trip mines. You can not make your way forward without braving this obstacle."
          break
        case 50:
          encounter.text = "A transport pad is spotted. It has several pre-programmed destinations available."
          break
        case 51:
          encounter.text = "A raider is arguing with his partner. \"No, I attack first and you sneak up on them!\""
          encounter.enemies = [
            createEnemy("Raider A", calculateRoll("9d8+27"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Raider B", calculateRoll("9d8+27"), 13, 5, "1d12+3", "d20+1")
          ]
          break
        case 52:
          encounter.text = "The cult of death is gathered here. They chant in an unfamiliar tongue. Their chants grow louder and louder as they approach you. Prepare for attack!"
          encounter.enemies = [
            createEnemy("Cultist A", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist B", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist C", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist D", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist E", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 53:
          encounter.text = "Slime covers everything and you can see what has caused it. A zombie harvester approaches. Its quivering mass looms over you."
          encounter.enemies = [
            createEnemy("Zombie Harvester", calculateRoll("8d10+40"), 6, "3d6", "d20-4", "Engulf3d6")
          ]
          break
        case 54:
          encounter.text = "\"Synthesizer zombies feed on their surroundings to blend in and harness their power. One such creature descends upon you."
          encounter.enemies = [
            createEnemy("Synth Zombie", calculateRoll("5d8+5"), 11, 4, "1d8", "d20+1", "Lighter3d6", "Bulletproof", "Data Wipe")
          ]
          break
        case 55:
          encounter.text = "A ghastly hologhost is on approach. Each whisper you hear is a promise of pain."
          encounter.enemies = [
            createEnemy("Hologhost", calculateRoll("10d8"), 11, 5, "4d6+3", "d20+1", "Withering Touch4d6+3", "Horrifying Visage", "Possession")
          ]
          break
        case 56:
          encounter.text = "The griffon bot guards its nest with fervent aggression. You are in its territory and it's plenty pissed."
          encounter.enemies = [
            createEnemy("Griffon Bot", calculateRoll("7d10+21"), 12, 6, "1d8+4", "d20+2")
          ]
          break
        case 57:
          encounter.text = "\"Don't touch that!\" You hear a voice scream out. Too late. The nanomorphic has transformed from an inviting supply crate into a horrific monster. Its tongue has grasped your leg and is pulling you into its teethy maw."
          encounter.enemies = [
            createEnemy("Nanomorphic", calculateRoll("9d8+18"), 12, 5, "1d8+3", "d20+1", "Grapple")
          ]
          break
        case 58:
          encounter.text = "The construction bot just grunts as it grabs its giant wrench. You all know what's coming. It's just a matter of who comes out on top now."
          encounter.enemies = [
            createEnemy("Construction Bot", calculateRoll("7d10+21"), 11, 6, "2d8+4", "d20-1")
          ]
          break
        case 59:
          encounter.text = "Don't let the beauty of the Holographic Pegasus entrap you. It is as deadly as it is magnificent. It comes into attack position."
          encounter.enemies = [
            createEnemy("Pegasus", calculateRoll("7d10+21"), 12, 6, "2d6+4", "d20+2")
          ]
          break
        case 60:
          encounter.text = "\"Stay back! I can't control it. I can't...\" His voice breaks off as the nano-necrotic virus overwhelms him, giving him beast like features. Attack!"
          encounter.enemies = [
            createEnemy("Werezombie", calculateRoll("6d8+6"), 12, 4, "1d4+2", "d20+2")
          ]
          break
        case 61:
          encounter.text = "Beware the light drone! It has tricked many a soldier into their deaths and one threatens to do the same here."
          encounter.enemies = [
            createEnemy("Light Drone", calculateRoll("9d4"), 19, 4, "2d8", "d20+9")
          ]
          break
        case 62:
          encounter.text = "Its form is unreal. The Amalgam Zombie is an almagamation of claws, scales, and fangs. It somehow negotiates its confusion of limbs towards you with incredible speed."
          encounter.enemies = [
            createEnemy("Amalgam Zombie", calculateRoll("7d8+42"), 19, 6, "1d6+3", "d20")
          ]
          break
        case 63:
          encounter.text = "The gaze of the Stone Zombie is even more deadly than its tooth and claw. This is evidenced by the petrified bodies strewn about the room."
          encounter.enemies = [
            createEnemy("Basilisk", calculateRoll("8d8+16"), 15, 5, "2d6+3", "d20-1")
          ]
          break
        case 64:
          encounter.text = "You try not to stare at the green alien, but his otherworldly appearance captures your gaze. He clearly has plans for you, and they aren't good."
          encounter.enemies = [
            createEnemy("Green Alien", calculateRoll("8d8+16"), 13, 5, "1d10+3", "d20+2")
          ]
          break
        case 65:
          encounter.text = "Your sudden arrival has caught the shapeshifting alien off guard. It quickly transforms into a familiar form, but its too late. With its secret revealed, it has no choice but to attack."
          encounter.enemies = [
            createEnemy("Shapeshifter", calculateRoll("8d8+16"), 14, 6, "1d6+4", "d20+4", "Shapechange")
          ]
          break
        case 66:
          encounter.text = "Robo dogs have been sent after you with the solitary command: kill. They scour the surface for any trace of you. Who sent them?"
          encounter.enemies = [
            createEnemy("Robo Dog A", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Rocket6d6"),
            createEnemy("Robo Dog B", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Rocket6d6"),
            createEnemy("Robo Dog C", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Rocket6d6")
          ]
          break
        case 67:
          encounter.text = "The Mass is an abomination, combining a zombie with cyborg and alien tech. It sets its sights on you."
          encounter.enemies = [
            createEnemy("The Mass", calculateRoll("8d10+24"), 14, 5, "1d8+3", "d20+3")
          ]
          break
        case 68:
          encounter.text = "The unmistakable stink of cooking flesh. It's a cannibal survivor and he has a fixing for his next meal."
          encounter.enemies = [
            createEnemy("Cannibal Survivor", calculateRoll("11d8+33"), 17, 6, "2d8+4", "d20+1", "Minor Illusion", "Invisible Passage")
          ]
          break
        case 69:
          encounter.text = "The minotaur bot is here. No maze. Just the promise of your death. Defend yourself!"
          encounter.enemies = [
            createEnemy("Minotaur Bot", calculateRoll("9d10+27"), 14, 6, "2d12+4", "d20")
          ]
          break
        case 70:
          encounter.text = "An ancient cryonic tomb. In it, a variety of bodies frozen for a cure that will never come. Meticulous care was put into protecting them from decay. Unfortunately for you, the control computer has finally broken. The master has awoken only remembers their taste for flesh now."
          encounter.enemies = [
            createEnemy("The Master", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1")
          ]
          break
        case 71:
          encounter.text = "A cyborg horse trots into view. At first, it doesn't seem to be as terrifying as the stories you've heard. But once it draws close, you can see its rotting flesh, the flaming hooves and mane. It's built like a tank and it aims to tear you apart."
          encounter.enemies = [
            createEnemy("Nightmare", calculateRoll("8d10+24"), 13, 6, "2d8+4", "d20+2", "Ehtereal Stride")
          ]
          break
        case 72:
          encounter.text = "The hulking mass of flesh and muscle before you quivers and threatens to attack at any moment. Misinterpreting an eye twitch, it attacks!"
          encounter.enemies = [
            createEnemy("Hulking Mass", calculateRoll("7d10+21"), 13, 7, "1d10+5", "d20+2")
          ]
          break
        case 73:
          encounter.text = "A spectator drone! Run or fight. Either way, you'll never escape its deadly gaze."
          encounter.enemies = [
            createEnemy("Spectator Drone", calculateRoll("6d8+12"), 14, 1, "1d6-1", "d20+2", "Confusion Ray", "Paralyzing Ray", "Fear Ray", "Wounding Ray3d10")
          ]
          break
        case 74:
          encounter.text = "The spider alien hatches from its egg. Long, finger-like limbs emerge out of the broken shell. Then it launches itself at you!"
          encounter.enemies = [
            createEnemy("Spider Alien", calculateRoll("9d8+18"), 12, 4, "18+2", "d20+1")
          ]
          break
        case 75:
          encounter.text = "White Zombies are not dangerous because they are some of the most powerful undead creatures. No. It's their intelligence and their endless campaign against the living. Fight!"
          encounter.enemies = [
            createEnemy("White Zombie", calculateRoll("6d8+18"), 14, 4, "1d8+2", "d20+1", "Life Drain4d6+3")
          ]
          break
        case 76:
          encounter.text = "This is not the natural habitat for the alien giant, and yet it is here. You can see your fate drawn in the blood of its other victims. There is no backing out now."
          encounter.enemies = [
            createEnemy("Alien Giant", calculateRoll("6d10+18"), 12, 6, "1d6+4", "d20+1")
          ]
          break
        case 77:
          encounter.text = "It's a swarm of bee drones. What else is there to say? Fight!"
          encounter.enemies = [
            createEnemy("Bee Drone Swarm", calculateRoll("6d8+18"), 14, 4, "1d8+2", "d20+1", "Life Drain4d6+3")
          ]
          break
        case 78:
          encounter.text = "The blood-curdling scream is a clear sign: BANSHEE BORGS! Your death is soon to be added to the ledger."
          encounter.enemies = [
            createEnemy("Banshee Borg A", calculateRoll("13d8"), 12, 4, "3d6+2", "d20+2", "Corrupting Touch3d6+2", "Wail3d6"),
            createEnemy("Banshee Borg B", calculateRoll("13d8"), 12, 4, "3d6+2", "d20+2", "Corrupting Touch3d6+2", "Wail3d6")
          ]
          break
        case 79:
          encounter.text = "This hideous aberration before you must be some sort of nanotech experiment gone wrong. Kill or be killed. There is no other choice here."
          encounter.enemies = [
            createEnemy("Nano Blob", calculateRoll("11d10+33"), 16, 6, "2d6+4", "d20", "Tentacles")
          ]
          break
        case 80:
          encounter.text = "The service industry robot. It has been constructed to a shape that is pleasing to your eye, but you should know better than to fall for its wiles. Attack!"
          encounter.enemies = [
            createEnemy("Service Robot", calculateRoll("12d8+12"), 15, 5, "1d6+3", "d20+3")
          ]
          break
        case 81:
          encounter.text = "The nano ghost is capable of possessing its victims. Be careful because you feel its control gripping at the edges of your mind now."
          encounter.enemies = [
            createEnemy("Nano Ghost", calculateRoll("10d8"), 11, 5, "4d6+3", "d20+1", "Withering Touch4d6+3", "Horrifying Visage", "Possession")
          ]
          break
        case 82:
          encounter.text = "Cyborg Succubus is a shapechanger. It has selected a shape that is pleasing to your eye, but you should know better than to fall for its wiles. Attack!"
          encounter.enemies = [
            createEnemy("Cyborg Succubus", calculateRoll("12d8+12"), 15, 6, "1d6+3", "d20+3")
          ]
          break
        case 83:
          encounter.text = "The mechaboar here has mastered control of his beastly transformation. He just doesn't like you. He's trotting at you at full speed."
          encounter.enemies = [
            createEnemy("Wereboar", calculateRoll("12d8+24"), 10, 5, "2d6+3", "d20", "Charge", "Tusk2d6+3")
          ]
          break
        case 84:
          encounter.text = "A red mecha dragon wyrmling stalks this area. You were a fool to enter its domain."
          encounter.enemies = [
            createEnemy("Red Mecha Wyrmling", calculateRoll("10d8+30"), 17, 6, "1d10+4", "d20")
          ]
          break
        case 85:
          encounter.text = "Woosh! A flaming, holographic skull whips into view. You feel the heat on your face even at this distance. It's time to attack!"
          encounter.enemies = [
            createEnemy("Holo Skull", calculateRoll("9d4+18"), 13, 5, "3d6", "d20+3", "Fire Ray3d6", "Magic Missile3d10+2", "Fire Ball2d20")
          ]
          break
        case 86:
          encounter.text = "The pressure in the area suddenly changes. An air hologram materializes in front of you. It must be guarding this place from intruders."
          encounter.enemies = [
            createEnemy("Air Hologram", calculateRoll("12d10+24"), 15, 8, "2d8+5", "d20+5", "Whirlwind3d8+2")
          ]
          break
        case 87:
          encounter.text = "The barbed robot is quite deadly. It damages anyone that grapples with it. Beware, for one such creature stalks the land here."
          encounter.enemies = [
            createEnemy("Barbed Robot", calculateRoll("13d8+52"), 15, 6, "1d6+3", "d20+3", "Hurl Flame3d6")
          ]
          break
        case 88:
          encounter.text = "You hear a rumbling and the earth beneath you quakes. You dive out of the way as an earth hologram emerges right where you were standing. Fight!"
          encounter.enemies = [
            createEnemy("Earth Hologram", calculateRoll("12d10+60"), 17, 8, "2d8+5", "d20-1", "Earth Glide")
          ]
          break
        case 89:
          encounter.text = "Is it getting hot in here or is it just you? No, it's a Fire Hologram and it's ready to attack."
          encounter.enemies = [
            createEnemy("Fire Hologram", calculateRoll("12d10+36"), 13, 6, "2d6+3", "d20+3", "Fire Form")
          ]
          break
        case 90:
          encounter.text = "The flesh zombie stumbles into your sight. It howls an unearthly cry. Every movement is pain. You would feel pity if you didn't have to fight for you life."
          encounter.enemies = [
            createEnemy("Flesh Zombie", calculateRoll("11d8+44"), 9, 7, "2d8+4", "d20-1", "Berserk")
          ]
          break
        case 91:
          encounter.text = "The petrifying shot of the stun drone is well known. What isn't known is how one tracked you down here. Prepare to fight!"
          encounter.enemies = [
            createEnemy("Stun Drone", calculateRoll("12d8+48"), 19, 8, "2d12+5", "d20", "Petrifying Shot")
          ]
          break
        case 92:
          encounter.text = "The Juggernaut Zombie lowers his club with a loud thud. Looking to your direction, he is amused by the new playthings he discovered. Be careful, he plays rough!"
          encounter.enemies = [
            createEnemy("Juggernaut Zombie", calculateRoll("10d12+40"), 13, 8, "3d8+5", "d20-1", "Throw Rock3d10+5")
          ]
          break
        case 93:
          encounter.text = "You were foolish to enter this place. A night drone has established a den here and she really doesn't like being disturbed. It's time to get into combat formation!"
          encounter.enemies = [
            createEnemy("Night Drone", calculateRoll("15d8+45"), 17, 7, "2d8+4", "Holographic Image", "Nightmare Haunting")
          ]
          break
        case 94:
          encounter.text = "The appearance of the Iron Forge Robot spells certain doom for the party. Its heated weapons could cleave through even the hardest armor."
          encounter.enemies = [
            createEnemy("Iron Forge Robot", calculateRoll("12d10+24"), 15, 7, "2d6+4", "d20+2", "Heated Body")
          ]
          break
        case 95:
          encounter.text = "First it was the sucking sounds as it moved across the landscape. Then it was the stench. Finally, the the shambling mass reveals itself."
          encounter.enemies = [
            createEnemy("Shambling Mass", calculateRoll("16d10+48"), 15, 7, "2d8+4", "d20-1", "Engulf")
          ]
          break
        case 96:
          encounter.text = "\"Everything. Your weapons, armor, and tech. Fast!\" The bandit soldier grips his giant soldier effortlessly as if it was a twig. He is beckoning for a fight."
          encounter.enemies = [
            createEnemy("Troll", calculateRoll("8d10+40"), 15, 7, "1d6+4", "d20+1")
          ]
          break
        case 97:
          encounter.text = "The Cyborg Bear attacks! There seems to be no reasoning with it."
          encounter.enemies = [
            createEnemy("Cyborg Bear", calculateRoll("18d8+54"), 10, 7, "2d10+4", "d20")
          ]
          break
        case 98:
          encounter.text = "A mound of corpses stands tall before you. Just beyond it is a wraith hologram. Its deathly stare cuts right through you."
          encounter.enemies = [
            createEnemy("Wraith Hologram", calculateRoll("9d8+27"), 13, 6, "4d8+3", "d20+3", "Life Drain4d8+3", "Create Specter")
          ]
          break
        case 99:
          encounter.text = "A cyborg spawn steps out of the shadows. Perhaps he's here to capture new slaves for its master."
          encounter.enemies = [
            createEnemy("Cyborg Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3")
          ]
          break
      }
      break
    case "hard":
      if (encounter.cr == null) encounter.cr = 9
      multiplier = 1 + (encounter.cr - 9) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "You're pretty sure you've seen this seem landmark 30 minutes ago. You've been walking around in circles. Something must be affecting your mind."
          break
        case 1:
          encounter.text = "A solitary command darts around in your brain. \"KILL!\" The compulsion is nearly impossible to resist, but you must try."
          break
        case 2:
          encounter.text = "As you traverse forward, a sudden crash! A thunderous sound erupts as the earth beneath you opens up."
          break
        case 3:
          encounter.text = "They say the pre-war trains were designed to operate for hundreds of years without human intervention. It's true. One such train is heading your way."
          break
        case 4:
          encounter.text = "Eggs. The drones are multiplying. There are eggs here. The ramifications of this are baffling. One of them is beginning to shake and come to life."
          break
        case 5:
          encounter.text = "Trap doors swing wide open and two sentry guns pop up looking for their target. A piece of rubble falls from a nearby wall. The guns obliterate it. They're tracking movement!"
          break
        case 6:
          encounter.text = "A robotic horse gallops to you and kneels before you. It gently bows its heard in your direction as a sign of subservience."
          break
        case 7:
          encounter.text = "High above you see a craft break through the atmosphere. You don't have time to hide as it's already launched it's payload of munitions directly at your location."
          break
        case 8:
          encounter.text = "A piercing sound suddenly fills the air and drowns out all sound. Clutching your bleeding ears, you must find a way to stop it."
          break
        case 9:
          encounter.text = "Strange weather phenomena is ocurring in your local area. As the clouds coalesce, you hear the thunder of the storm building into an orchestra of devastation."
          break
        case 10:
          encounter.text = "A flash flood! The dam must have finally broken and now you have to fight to survive."
          break
        case 11:
          encounter.text = "You approach what appears to be a stable portal leading to the digital realm."
          break
        case 12:
          encounter.text = "\"No air!\" Those are the last words you utter as you are somehow transported to the alien realm."
          break
        case 13:
          encounter.text = "This is a temple, but it cannot be of human origin. At its summit, a powerful beam erupts into the sky."
          break
        case 14:
          encounter.text = "Humanity must have built this giant wall to keep something out. Or was it to trap something inside? The wall goes on as far as you can see and is as high as a skyscraper."
          break
        case 15:
          encounter.text = "Floating platforms lead upward. They can easily be navigated by jumping from one to the other. But where do they lead?"
          break
        case 16:
          encounter.text = "These robotic hunter-killers were supposed to be humanity's last line of defense. Its giant frame creaks as it searches for trespassers."
          break
        case 17:
          encounter.text = "A net of lasers forms behjind you and is swiftly moving to eradicate anything in its path."
          break
        case 18:
          encounter.text = "What appears to be a hollographic mirror image of yourself is cast ahead of you. It matches your movements perfectly. But something isn't quite right about it."
          break
        case 19:
          encounter.text = "An abandoned VTOL is landed here. But where is the crew?"
          break
        case 20:
          encounter.text = "The blackbox of a VTOL is found amongst the wreckage of a craft. What could have been a cause of this disaster?"
          break
        case 21:
          encounter.text = "You find yourself in the ruins of an old building. Suddenly, the walls shudder and begin to close in on you. It's a trap!"
          break
        case 22:
          encounter.text = "An amorphous shape of what appears to be a network of nanomachines buzzes ahead. It forms into a shape that can be best described as a finger gesturing for you to approach."
          break
        case 23:
          encounter.text = "A sudden wave of sickness rushes over you. Is it radiation poisoning?"
          break
        case 24:
          encounter.text = "A horrific display of gore envelops your vision. This must have been a recent zombie attack and no one from this colony was able to escape."
          break
        case 25:
          encounter.text = "A humonoid creature stands before you. It is featureless with no eyes or mouth. And yet you hear a voice. It is irresistable."
          break
        case 26:
          encounter.text = "The ground is erupting! There was no warning sign of geological disruption. You must find safety and fast!"
          break
        case 27:
          encounter.text = "You suddenly feel sleepy. The last thing you remember is the ground rushing toward you quickly and you powerless to prevent yourself from falling. Are you dead?"
          break
        case 28:
          encounter.text = "A zombie in a nearly destroyed state is crawling away. Something powerful must have driven it away if it isn't paying any attention to you."
          break
        case 29:
          encounter.text = "You feel static coursing through your fingers. Someone electrified the floor."
          break
        case 30:
          encounter.text = "A zombie is on approach. Every instinct in your body is telling you to destroy it. But wait! It begins to speak."
          break
        case 31:
          encounter.text = "A dual booting robot. Will you accept grim fate now that you have come across such a foe?"
          encounter.enemies = [
            createEnemy("Dual Bot", calculateRoll("12d10+48"), 14, 7, "2d6+4", "d20", "Fire Breath7d8")
          ]
          break
        case 32:
          encounter.text = "The cyclops cyborg eyes you closely. It ponders for a time, but then finally decides that you must die."
          encounter.enemies = [
            createEnemy("Cyclops Cyborg", calculateRoll("12d12+60"), 14, 9, "3d8+6", "d20")
          ]
          break
        case 33:
          encounter.text = "You've walked right into the spider drone's web. This was its plan all along."
          encounter.enemies = [
            createEnemy("Drider", calculateRoll("13d10+52"), 19, 6, "3d8", "1d10+3", "Poison Bite2d8")
          ]
          break
        case 34:
          encounter.text = "A group of cultists are gathering here. It appears that they are trying to open a portal through to the interdimensional plane. They must be stopped!"
          encounter.enemies = [
            createEnemy("Insane Scientist", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Cone of Cold8d8", "Greater Invisibility", "Fireball8d6", "Shield"),
            createEnemy("Cultist A", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist B", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 35:
          encounter.text = "The statues of men in terror, all cowering from some horrible sight. This can only mean one thing: Medusa Alien."
          encounter.enemies = [
            createEnemy("Medusa Alien", calculateRoll("17d8+51"), 15, 5, "1d6+2", "d20+2", "Petrifying Gaze", "Snake Hair5d6")
          ]
          break
        case 36:
          encounter.text = "Mechanical dragon fight! A young brass dragon descends upon you."
          encounter.enemies = [
            createEnemy("Young Brass Mecha Dragon", calculateRoll("13d10+39"), 17, 7, "2d10+4", "d20", "Fire Breath12d6", "Sleep Breath")
          ]
          break
        case 37:
          encounter.text = "The young white mecha dragon has sized you up. It considers you a worth adversary"
          encounter.enemies = [
            createEnemy("Young White Mecha Dragon", calculateRoll("14d10+56"), 17, 7, "2d10+4", "d20", "Cold Breath10d8", "Ice Walk")
          ]
          break
        case 38:
          encounter.text = "An cyborg death squad!"
          encounter.enemies = [
            createEnemy("Cyborg A", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Cyborg B", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Cyborg C", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Cyborg D", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Cyborg E", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Cyborg Leader", calculateRoll("5d8+6"), 13, 5, "3d12+3", "d20+1", "Rally Cry")
          ]
          break
        case 39:
          encounter.text = "Raiders are in full force here!"
          encounter.enemies = [
            createEnemy("Raider A", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Raider B", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Raider C", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Raider D", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Raider E", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2")
          ]
          break
        case 40:
          encounter.text = "The stone mover has been building pillars of rocks and then watches them fall over. He's kinda pissed that you've interrupted his game."
          encounter.enemies = [
            createEnemy("Stone Mover Bot", calculateRoll("11d12+55"), 17, 9, "3d8+6", "d20+2", "Throw Rock4d10+6")
          ]
          break
        case 41:
          encounter.text = "The shield hologram is blocking path. Some hacker from eons ago must have absent mindedly placed this here and forgot about it."
          encounter.enemies = [
            createEnemy("Shield Hologram", calculateRoll("15d10+60"), 17, 7, "4d6+4", "d20-1", "Shield")
          ]
          break
        case 42:
          encounter.text = "You have caught the focus of a young black mecha dragon. It's positioning itself for attack!"
          encounter.enemies = [
            createEnemy("Young Black Mecha Dragon", calculateRoll("15d10+45"), 18, 7, "4d6+8", "d20+2", "Acid Breath11d8")
          ]
          break
        case 43:
          encounter.text = "You suddenly fall into a pit! This is no ordinary trap, for a Young Copper Mecha Dragon has been enslaved here."
          encounter.enemies = [
            createEnemy("Young Copper Mecha Dragon", calculateRoll("14d10+42"), 17, 7, "4d6+8", "d20+1", "Acid Breath9d8", "Slowing Breath")
          ]
          break
        case 44:
          encounter.text = "The ninja assassin finally reveals himself. \"You have no idea how long I have been waiting for this moment!\""
          encounter.enemies = [
            createEnemy("Assassin", calculateRoll("12d8+24"), 15, 6, "2d6+6", "d20+3")
          ]
          break
        case 45:
          encounter.text = "You feel an unexpected cold wind. It can only be one thing: the giant frost robot approaches!"
          encounter.enemies = [
            createEnemy("Frost Robot", calculateRoll("12d12+60"), 15, 9, "6d12+12", "d20-1")
          ]
          break
        case 46:
          encounter.text = "\"How do you actually kill a pool of nanomachines?\" No one seems to know the answer, but here you are facing one anyway. Tough luck!"
          encounter.enemies = [
            createEnemy("Nano Pool", calculateRoll("15d12+75"), 15, 8, "3d10+15", "d20+1")
          ]
          break
        case 47:
          encounter.text = "You've had no qualms killing its drone bretheren before. Perhaps that is why the Snake Spirit Drone holds such malice towards you. Prepare for the fight of your life!"
          encounter.enemies = [
            createEnemy("Snake Spirit Drone", calculateRoll("10d10+20"), 15, 7, "8d8+4", "d20+3", "Social Engineering", "Tesla Coil9d6")
          ]
          break
        case 48:
          encounter.text = "The hairs on your arm raise as if you've entered a static field. Yes, it's a young bronze mechanical dragon preparing to strike. Dodge out of the way if you can!"
          encounter.enemies = [
            createEnemy("Young Bronze Mecha Dragon", calculateRoll("15d10+60"), 18, 8, "4d6+10", "d20+1", "Lightning Breath10d10", "Repulsion Breath")
          ]
          break
        case 49:
          encounter.text = "There was once a great forest here. It has all been destroyed by the ambition of man. All that is left is the vengeance of the young green mecha dragon that stands in your way."
          encounter.enemies = [
            createEnemy("Young Green Mecha Dragon", calculateRoll("16d10+48"), 18, 7, "4d6+8", "d20+1", "Poison Breath12d6")
          ]
          break
        case 50:
          encounter.text = "My god, that must be why they call them cloud bots. They're so tall that it's as if they can reach the clouds. Defend yourself!"
          encounter.enemies = [
            createEnemy("Cloud Bot", calculateRoll("16d12+96"), 14, 12, "6d8+16", "d20", "Throw Rock4d10+8", "Control Weather")
          ]
          break
        case 51:
          encounter.text = "A nature drone has stationed itself here. It's the protector of the natural world. You upset the balance."
          encounter.enemies = [
            createEnemy("Nature Drone", calculateRoll("12d12+60"), 16, 10, "6d6+12", "d20-1"),
            createEnemy("Tree Hologram", calculateRoll("7d12+14"), 13, 10, "3d6+4", "d20-2")
          ]
          break
        case 52:
          encounter.text = "A young blue mecha dragon. What else can be said? You know you're in trouble now."
          encounter.enemies = [
            createEnemy("Young Blue Mecha Dragon", calculateRoll("16d10+64"), 18, 9, "12d6+10", "d20", "Lightning Breath10d10")
          ]
          break
        case 53:
          encounter.text = "A young silver mecha dragon. It's over for you. Make your peace."
          encounter.enemies = [
            createEnemy("Young Silver Mecha Dragon", calculateRoll("16d10+8-"), 18, 10, "4d6+12", "d20", "Cold Breath12d8", "Paralyzing Breath")
          ]
          break
        case 54:
          encounter.text = "This is the lair of the Zombie Abomination. You say your prayers to any god that would listen. It's time to prove your worth."
          encounter.enemies = [
            createEnemy("Zombie Abonmination", calculateRoll("18d10"), 17, 9, "6d6+15", "d20-1", "Enslave", "Psychic Drain3d6")
          ]
          break
        case 55:
          encounter.text = "A demon zombie is here. There must have been some mistake, but you are marked for death."
          encounter.enemies = [
            createEnemy("Demon Zombie", calculateRoll("16d8+64"), 17, 8, "2d6+8", "d20+4")
          ]
          break
        case 56:
          encounter.text = "The stone zombie is against the natural order. It does not fill any niche in the living world. It must be destroyed."
          encounter.enemies = [
            createEnemy("Stone Zombie", calculateRoll("17d10+85"), 17, 10, "6d8+12", "d20-1")
          ]
          break
        case 57:
          encounter.text = "You've gotten on the wrong side of the young gold mecha dragon. Perhaps you should not have trespassed on its sovereign land."
          encounter.enemies = [
            createEnemy("Young Gold Mecha Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20+2", "Fire Breath10d10", "Weakening Breath")
          ]
          break
        case 58:
          encounter.text = "The young red mecha dragon wastes no time in its pursuit of victims. It has selected you for its next meal."
          encounter.enemies = [
            createEnemy("Young Red Mecha Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20", "Fire Breath16d6")
          ]
          break
        case 59:
          encounter.text = "The rocket zombie wants a taste and it has you in its sights."
          encounter.enemies = [
            createEnemy("Rocket Zombie", calculateRoll("15d10+45"), 18, 8, "1d8+4", "d20+4", "Spit Poison10d8", "Thermite Strike4d6", "Bestow Curse", "Paralysis Mite", "Mind Control Serum")
          ]
          break
        case 60:
          encounter.text = "The fire bots were developed for environments that would burn others to a crisp instantly. This means this one is immune to fire damage. It's ready to fight now."
          encounter.enemies = [
            createEnemy("Fire Bot", calculateRoll("13d12+78"), 18, 11, "6d6+7", "d20-1", "Throw Rock4d10+7")
          ]
          break
      }
      break
    case "boss":
      if (encounter.cr == null) encounter.cr = 13
      multiplier = 1 + (encounter.cr - 13) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "An ancient war reenactment is being rendered by a hologram deck caught in a loop. And you find yourself right in the middle of it."
          break
        case 1:
          encounter.text = "A computer readout shows that a satellite in low orbit armed with titanium rods is aiming right on your location."
          break
        case 2:
          encounter.text = "A massive citadel has crashed here. In the crater that it has created, you see a community of people working together to survive."
          break
        case 3:
          encounter.text = "You have found the burrow hole of a giant drill worm. The cave leads deep into the earth."
          break
        case 4:
          encounter.text = "You notice that a VTOL heavy is tracking you. It's not attacking, but you know this aircraft is loaded with massive artillery. What do they want?"
          break
        case 5:
          encounter.text = "You see a nuclear bunker with the unmistakable markings of the military. It's bound to have some important equipment, but it will be defended heavily with automated fortifications."
          break
        case 6:
          encounter.text = "A factory is completely out of control, creating drones and sending those drones out to collect raw materials to build more drones. It must be stopped."
          break
        case 7:
          encounter.text = "A robot approaches, hauling a makeshift sled behind it. On it: several survivors and cyborgs banding together to survive the post apocalypse."
          break
        case 8:
          encounter.text = "A keypad is embedded in a ruined wall. You hear clicking and it's only a matter of time before the intruder countermeasures activate."
          break
        case 9:
          encounter.text = "A swarm of nanomachines are eating away at the face of a building. If you are careful, you can pass by without being turned into a puddle of gray mass."
          break
        case 10:
          encounter.text = "Your limbs begin to lock up. An insatiable hunger sweeps over you. Your mind lusts for carnage. But you were so careful! There was no way that you were infected by the nano-necrotic virus. Or were you?"
          break
        case 11:
          encounter.text = "Ambushed! Cyborg raiders have surrounded you. However, instead of killing you, they are here to make a bargain."
          break
        case 12:
          encounter.text = "An AI core is propped up here. Several defense mechanisms are activated. Humungous anti-tank turrets aim at your direction. All for the purpose of you answering a single question: \"Why is life?\""
          break
        case 13:
          encounter.text = "You crash into the hull of a dilapidated space vessel. A command prompt blinks at you. Self destruct imminent in t-minus 3 minutes. Apparently you've stumbled in here at the right time."
          break
        case 14:
          encounter.text = "A message is somehow beamed across the sky: \"WE HAVE ARRIVED\". As if you didn't have enough problems already."
          break
        case 15:
          encounter.text = "Entering this area has triggered a sequence of events leading up to a portal engulfing your body entirely."
          break
        case 16:
          encounter.text = "Time has stopped. You don't know what has set off this anomaly, but you are going to have to deal with it now lest you be trapped in time forever."
          break
        case 17:
          encounter.text = "A strange vessel has landed here. It's shimmering lights beckon you to board it."
          break
        case 18:
          encounter.text = "You witness a ballistic missile tear across the sky. You happen to know that type of weapon has a nuclear payload. It's time to take cover."
          break
        case 19:
          encounter.text = "Of your many faults, not noticing obvious traps may be the one that kills you. In this case you've entered a gravity net and have no way out."
          break
        case 20:
          encounter.text = "A forcefield generator activates and it surrounds you with impenetrable energy. The walls are closing in on you and you have to figure out something fast."
          break
        case 21:
          encounter.text = "By all indications, nothing is going wrong. It's just a normal day without the threat of zombies or alien invasion. Just kidding, you're about to die."
          break
        case 22:
          encounter.text = "A keyboard with no computer or output device is visible. Curiosity takes the better of you and you begin typing. Defying all logic, a prompt appears in the sky."
          break
        case 23:
          encounter.text = "A hologram appears. It is the arbiter of a great AI that has lived in the digital plane for some time. It appears to be granting you a single wish."
          break
        case 24:
          encounter.text = "A man appears on the horizon. He is running away from some unseen assailant. Suddenly, he is disintegrated into a cloud of pink spray. What power can cause this?"
          break
        case 25:
          encounter.text = "This happens to be a site for a large rocket concealed underground. The bay doors open slowly. The realization finally strikes you: the entire area will be flooded with explosive propelant in a matter of minutes."
          break
        case 26:
          encounter.text = "As you step forward, you realize that you have entered a pocket dimension. The world fades away, replaced with the purple gradient of an endless night. At some point you were scanned by some sort of digitizer. Without a portal to send you back to the real world, you may be trapped here forever."
        case 27:
          encounter.text = "A competing military group is pursuing you. Run!"
          break
        case 28:
          encounter.text = "It's clear: you are lost. It might have been a minute ago or an hour ago, but you have no idea where you are. It doesn't matter anyway because the drones pursuing you are closing in fast."
          break
        case 29:
          encounter.text = "This could have been a utopia, however the residents of this walled city have chosen to destroy themselves with constant infighting. Now all that are left are genetic freaks hungering for blood."
          break
        case 30:
          encounter.text = "A horde of zombies is seen in the distance. They are packed so tightly and in such great numbers that you can't see the ground beneath them. Run for your life."
          break
        case 31:
          encounter.text = "An adult black mecha dragon approaches. You are not ready for this."
          encounter.enemies = [
            createEnemy("Adult Black Mecha Dragon", calculateRoll("17d12+85"), 19, 11, "6d6+18", "d20+2", "Acid Breath12d8", "Frightful Presence", "Wing Attack2d6+6")
          ]
          break
        case 32:
          encounter.text = "An adult brass mecha dragon is here. It's pissed!"
          encounter.enemies = [
            createEnemy("Adult Brass Mecha Dragon", calculateRoll("15d12+75"), 18, 11, "6d6+18", "d20", "Fire Breath13d6", "Sleep Breath", "Frightful Presence", "Wing Attack2d6+6")
          ]
          break
        case 33:
          encounter.text = "An adult bronze mecha dragon is charging up for an attack!"
          encounter.enemies = [
            createEnemy("Adult Bronze Mecha Dragon", calculateRoll("17d12+102"), 19, 12, "6d6+21", "d20", "Repulsion Breath", "Lightning Breath12d10", "Wing Attack2d6+6")
          ]
          break
        case 34:
          encounter.text = "An adult copper mecha dragon shifts its gaze at you. You are doomed."
          encounter.enemies = [
            createEnemy("Adult Copper Mecha Dragon", calculateRoll("16d12+80"), 18, 11, "6d6+18", "d20+1", "Acid Breath12d8", "Slowing Breath", "Wing Attack2d6+6")
          ]
          break
        case 35:
          encounter.text = "An adult green mechadragon is nesting here. You really shouldn't have disturbed it."
          encounter.enemies = [
            createEnemy("Adult Green Mecha Dragon", calculateRoll("18d12+90"), 19, 11, "6d6+18", "d20+1", "Poison Breath16d6")
          ]
          break
        case 36:
          encounter.text = "An adult white mecha dragon is here. The wrong place and wrong time, unfortunately for you."
          encounter.enemies = [
            createEnemy("Adult White Mecha Dragon", calculateRoll("16d12+96"), 18, 11, "6d6+18", "d20", "Cold Breath12d8", "Wing Attack2d6+6")
          ]
          break
        case 37:
          encounter.text = "The lead scientist descends from their lab. He says no words, but raises his hands as if he is going to prepare a spell. Get ready!"
          encounter.enemies = [
            createEnemy("Lead Scientist", calculateRoll("18d8+18"), 12, 4, "1d4+2", "d20+14", "Chrono Trigger", "Force Field", "Tesla Coild6", "Phaseshift", "Snow Blaster8d8", "Teleporter"),
            createEnemy("Assistant A", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Cold Snap4d6+8", "Incendiary Rocket8d6", "Power Armor", "Incendiary Sabot Round1d10"),
            createEnemy("Assistant B", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Cold Snap4d6+8", "Incendiary Rocket8d6", "Power Armor", "Incendiary Sabot Round1d10")
          ]
          break
        case 38:
          encounter.text = "The hologram genie mocks you as you enter its domain. It seems like it wants to pick a fight with you."
          encounter.enemies = [
            createEnemy("Hologram Genie", calculateRoll("14d10+84"), 17, 9, "2d6+8", "d20+2")
          ]
          break
        case 39:
          encounter.text = "A horror to behold. The alien demons approach with cruel intentions. Their winged visages come into clear view."
          encounter.enemies = [
            createEnemy("Alien Demon A", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3"),
            createEnemy("Alien Demon B", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3"),
            createEnemy("Alien Demon C", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3")
          ]
          break
        case 40:
          encounter.text = "The horned alien stalks the land before you. It grins, revealing a hideous set of teeth."
          encounter.enemies = [
            createEnemy("Horned Alien", calculateRoll("17d10+85"), 18, 10, "6d8+18", "d20+3", "Hurl Flame4d6")
          ]
          break
        case 41:
          encounter.text = "The temperature of the local area has cooled significantly. You see it now: an ice zombie makes its presence known."
          encounter.enemies = [
            createEnemy("Ice Zombie", calculateRoll("19d10+76"), 18, 10, "6d4+15", "d20+2", "Wall of Ice")
          ]
          break
        case 42:
          encounter.text = "The Zombie lord resides here. It has summoned its followers and directs the assault with his decayed finger pointed at you."
          encounter.enemies = [
            createEnemy("Zombie Lord", calculateRoll("13d8+39"), 17, 9, "3d6+4", "d20", "Hold Person", "Silence", "Harm14d6", "Blinding Dust", "Whirlwind of Sand"),
            createEnemy("Zombie A", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1"),
            createEnemy("Zombie B", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1"),
            createEnemy("Zombie C", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1")
          ]
          break
        case 43:
          encounter.text = "The signs are clear: mounds of disturbed earth, pools of slime, and the digested remains of those foolish to face the creature. Yes, it's the Cyborg Worm. The earth rumbles, announcing its entry into the fray."
          encounter.enemies = [
            createEnemy("Cyborg Worm", calculateRoll("15d20+90"), 18, 14, "6d6+18", "d20-2", "Tail Stinger12d6+19")
          ]
          break
        case 44:
          encounter.text = "The only way to describe it is that it's a twisted combination of a mecha dragon and a giant millipede drone. The tank walker makes a sickening path through the debris toward you."
          encounter.enemies = [
            createEnemy("Tank Walker", calculateRoll("17d12+85"), 17, 11, "6d10+7", "d20+1", "Swallow6d6")
          ]
          break
        case 45:
          encounter.text = "The storm giant zombie pays little heed toward you. Yet, you are in its path. Hearing the sudden crack of lightning jolts you."
          encounter.enemies = [
            createEnemy("Storm Giant Zombie", calculateRoll("20d12+100"), 16, 14, "12d6+18", "d20+2", "Hydraulic Dam", "Lightning Strike12d8")
          ]
          break
        case 46:
          encounter.text = "You have entered the realm of a powerful nano-necrotic vampire. Its coven is poised to strike!"
          encounter.enemies = [
            createEnemy("Nano Vampire", calculateRoll("17d8+68"), 16, 9, "3d8+8", "d20+4", "Brain Backdoor", "Nanomorph"),
            createEnemy("Nano Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3"),
            createEnemy("Nano Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3")
          ]
          break
        case 47:
          encounter.text = "The hulking mass of the Rhino Drone enters the scene. It rears up revealing its many clawed feet. The tail whips around haphazardly throwing rubble around like they were pebbles."
          encounter.enemies = [
            createEnemy("Rhino Drone", calculateRoll("16d12+64"), 17, 10, "5d10+12", "d20+3", "Lightning Breath12d10", "Swallow6d6", "Trample2d10+6")
          ]
          break
        case 48:
          encounter.text = "The fire holograms are comprised out of pure, burning energy. One such warrior is here and is bent on exacting revenge on some forgotten slight."
          encounter.enemies = [
            createEnemy("Fire Hologram", calculateRoll("16d10+112"), 17, 10, "4d6+12", "d20+1", "Hurl Flame5d6")
          ]
          break
        case 49:
          encounter.text = "The winged cyborgs look like a cross between an ape and a boar. This one angles its terrible snout you and makes a menacing grunt."
          encounter.enemies = [
            createEnemy("Nalfeshnee", calculateRoll("16d10+96"), 18, 10, "8d6+5", "d20", "Horror Nimbus")
          ]
          break
        case 50:
          encounter.text = "The phoenix bot attacks! This gargantuan bird swoops in and engulfs the combat area with its awesome wings."
          encounter.enemies = [
            createEnemy("Phoenix Bot", calculateRoll("16d20+80"), 15, 13, "8d8+18", "d20")
          ]
          break
        case 51:
          encounter.text = "It wasn't your imagination. It moved. You swear it. Indeed, the robotic statue is poised for attack!"
          encounter.enemies = [
            createEnemy("Robotic Statue", calculateRoll("10d12+20"), 17, 7, "2d10+4", "d20-2")
          ]
          break
        case 52:
          encounter.text = "You've never seen the undead quite like this. The Zombieclaw raises its outrageous talons. It is going to strike at any moment!"
          encounter.enemies = [
            createEnemy("Zombieclaw", calculateRoll("17d10+34"), 16, 8, "6d10+8", "d20+3", "Shadow Jump5d12+2", "Deadly Reach")
          ]
          break
        case 53:
          encounter.text = "A shape changing alien is already a formidable opponent. The deathalien is the ungodly undead version of that. It bears down on you with great ill intent."
          encounter.enemies = [
            createEnemy("Death Alien", calculateRoll("18d8+72"), 15, 10, "6d8+15", "d20+3", "Phantom Deathalien6d6")
          ]
          break
        case 54:
          encounter.text = "A cultist inquisitor is here. She expected you to come this way. You're going to pay for that mistake."
          encounter.enemies = [
            createEnemy("Cultist Inquisitor", calculateRoll("23d8+46"), 16, 10, "12d8+24", "d20+2", "Holographic Dagger1d8+5")
          ]
          break
        case 55:
          encounter.text = "This is proof that fate has it in for you. You somehow have stumbled upon the chamber of an AI Brain. It rises out of its brine pool to summon its minions."
          encounter.enemies = [
            createEnemy("AI Brain", calculateRoll("20d10+100"), 10, 7, "5d8+7", "d20", "Mind Blast5d10+5")
          ]
          break
        case 56:
          encounter.text = "You see the Nanomorphic Mutant. It's a horrific creature, born of pure hatred and evil. It has the wings of a dragon, but crawls around on four legs like a bastard insect."
          encounter.enemies = [
            createEnemy("Nanomorphic Mutant", calculateRoll("10d12+50"), 18, 10, "6d10+10", "d20+1", "Regenderation")
          ]
          break
        case 57:
          encounter.text = "Acid drips onto the floor from its nasty maw. The massive megapede drone marks its territory with the bodies of those foolish enough to challenge it. You may count yourself among them in short order."
          encounter.enemies = [
            createEnemy("Megapede Drone", calculateRoll("13d20+39"), 15, 10, "6d10+12", "d20", "LifeDrain3d10", "Psychic Bomb5d8")
          ]
          break
        case 58:
          encounter.text = "The skull zombie holds dominion over this lair. It turns its three heads for you to plainly see its horrific visage."
          encounter.enemies = [
            createEnemy("Skull Zombie", calculateRoll("15d8+45"), 18, 8, "24d6", "d20+3", "Deathly Ray5d8+5")
          ]
          break
        case 59:
          encounter.text = "The abducted have the blood of aliens and their power too. It harnesses the power of water. Pools of which gather at its feet. It's ready to defend itself."
          encounter.enemies = [
            createEnemy("The Abducted", calculateRoll("18d8+18"), 12, 6, "1d4+2", "d20+2", "Chrono Trigger", "Harden Security", "Snow Blaster8d8", "Tesla Coil8d6")
          ]
          break
        case 60:
          encounter.text = "You have never seen a monstrosity of this magnitude. The eight legs of the mecha spider dragon crash into the ground one after the other like a symphony of massive hammers. This is the fight of your life."
          encounter.enemies = [
            createEnemy("Mecha Spider Dragon", calculateRoll("15d10+5"), 23, 9, "3d12+12", "d20+8", "Silk Spit", "Spider Breath7d10")
          ]
          break
      }
      break
    case "god":
      if (encounter.cr == null) encounter.cr = 17
      multiplier = 1 + (encounter.cr - 17) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "Seismic indicators are sounding off. Earthquakes are being detected all across the globe!"
          break
        case 1:
          encounter.text = "Your scientists can't believe the results that they're getting from their tests. The planet is coming out of alignment, putting the entire world at risk of freezing to death."
          break
        case 2:
          encounter.text = "An asteroid strike and it's a big one. This might rival what killed the dinosaurs. You don't have much time."
          break
        case 3:
          encounter.text = "You hear it before you see it. Two great citadels, flying fortresses armed to the teeth, are battling in the distance. The very earth quakes from the devastation."
          break
        case 4:
          encounter.text = "One of the recruits is sick with the nano-necrotic virus, but he was never bitten nor made contact with the enemy. Is the virus airborne now?"
          break
        case 5:
          encounter.text = "You find a mysterious package. Ancient but preserved by several layers of plastic wrap. It has the official logo of the science wing of the military. Under it, a label: \"The Cure\""
          break
        case 6:
          encounter.text = "Weather alert indicates a massive tsunami is heading this way!"
          break
        case 7:
          encounter.text = "Cyclones. Multiple cyclones have touched down and are wreaking havoc all across the surface. This is not natural weather phenomena."
          break
        case 8:
          encounter.text = "Without warning, it begins downpour rain. It's heavy at first, then becomes worrisome. The torrents of water never seem to stop."
          break
        case 9:
          encounter.text = "The earth is opening up before you. A giant sinkhole unlike anything recorded in history threatens to swallow up everything in sight."
          break
        case 10:
          encounter.text = "The temperature is dropping rapidly. This must be a result of a atmospheric processor finally breaking down and malfunctioning. A blizzard is brewing on the horizon."
          break
        case 11:
          encounter.text = "Temperatures are increasing. It's unclear if the planet is drifting too close to the sun or the gamble of humanity toying with the atmosphere has finally cashed out. What is known is that this heatwave that could kill all life on the surface."
          break
        case 12:
          encounter.text = "Historical documents have indicated that the planet is overdue for a magnetic field reversal. Indeed, that time is now. Radiation levels are spiking in this time of transition."
          break
        case 13:
          encounter.text = "The coastline is sinking into the sea! Humanity should have never toiled with the natural geological forces of the world."
          break
        case 14:
          encounter.text = "Fissures erupt everywhere and toxic clouds of gas emanate from deep within the earth. This has the potential to choke out all life on the planet."
          break
        case 15:
          encounter.text = "You finally seen it: the hypercane. A hurricane with such great force that entire cities will topple over. They've tried to warn you, but it's here now and you need to deal with this."
          break
        case 16:
          encounter.text = "The perfect conditions have led to a firestorm! It's a self-sustaining fire tornado of a catastrophic magnitude."
          break
        case 17:
          encounter.text = "Cosmic rays penetrate the atmosphere at an alarming rate. Solar activity is at an all time high and life as you know it surely seems doomed."
          break
        case 18:
          encounter.text = "A hailstorm rips through the sky. It is unlike any seen before, however. Giant chunks of ice the size of basketballs tear through buildings leading to great devastation."
          break
        case 19:
          encounter.text = "Hubris. Grasp exceeds grasp. Some damned fool rigged the moon to explode as a misguided science experiment. Now the planet's celestial counterpart is shattered in the sky and the downfall of explosive moon debris is a regular event."
          break
        case 20:
          encounter.text = "Reports indicate that in moments the planet will make a collision with what is known as a rogue black hole. At the very best, you can assume that the planet will be shattered and all life will be destroyed."
          break
        case 21:
          encounter.text = "You know that aliens have been observing the developments on this planet. Now they will no longer stand idly by while the world is in turmoil. They are landing all across the surface and their intentions are unknown."
          break
        case 22:
          encounter.text = "Is it something biological or is it the nano virus? No one seems to know, but what they do know is that the ocean has suddenly turned acidic. This has great ramifications for the future."
          break
        case 23:
          encounter.text = "The nuclear dead man's switch has finally been triggered. Nukes are being launched all across the continent. You can expect automated countermeasures from the other continents will result in a nuclear winter."
          break
        case 24:
          encounter.text = "What looks like a cloud has descended onto the surface. It is no ordinary cloud. It consists of millions of nanobots that eat away all material and reproduce at an astonishing rate."
          break
        case 25:
          encounter.text = "A great fog covers the surface. No one can explain its origin and it doesn't seem to disapate. That's when the reports of dimensional aliens start flooding in."
          break
        case 26:
          encounter.text = "Tandem lightning strikes all across the globe are occuring all at once. Some speculate that it is some sort of cosmological phenomenon passing through the galaxy."
          break
        case 27:
          encounter.text = "Sea level rise is an expected phenomena as the glaciers melt. However, recent events have led to unprecedented levels of increase. They say the planet can be covered with one giant ocean and you are powerless to stop it."
          break
        case 28:
          encounter.text = "The natural world has been losing an unseen war against the droids. However, some unprecedented force is striking back. Incredible blooms of natural growth have been spotted everywhere. Growth of organic life will soon overtake everything."
          break
        case 29:
          encounter.text = "A series of portals open up everywhere you can see. Alternate dimensions, alien forces, evils from untold worlds. They're all converging here and now."
          break
        case 30:
          encounter.text = "It's finally happening. The chronal nuke went off and now time is moving backward. Slowly at first, then the quickening. If you do nothing, reality is surely doomed as all existence will eventually return to a single point of energy."
          break
        case 31:
          encounter.text = "The adult blue dragon claws at the ground just before it. It's bored. It has decided that you will be its new play thing."
          encounter.enemies = [
            createEnemy("Adult Blue Dragon", calculateRoll("18d12+108"), 19, 12, "6d10+21", "d20", "Lightning Breath12d10", "Wing Attack2d6+7")
          ]
          break
        case 32:
          encounter.text = "The gold alien dragon has deemed you unworthy. Prove it wrong."
          encounter.enemies = [
            createEnemy("Gold Alien Dragon", calculateRoll("19d12+133"), 19, 12, "6d10+21", "d20+2", "Fire Breath 12d10", "Weakening Breath")
          ]
          break
        case 33:
          encounter.text = "The adult Cyborg dragon has broken its chains and now stands before you. Whatever events have ocurred to bring it to this place, it places the blame on you for its centuries of torture."
          encounter.enemies = [
            createEnemy("Adult Cyborg Dragon", calculateRoll("19d12+133"), 19, 12, "6d10+21", "d20", "Fire Breath18d6", "Wing Attack2d6+8")
          ]
          break
        case 34:
          encounter.text = "You didn't do anything wrong. The silver robot dragon just doesn't like you."
          encounter.enemies = [
            createEnemy("Silver Robot Dragon", calculateRoll("18d12+126"), 19, 13, "6d10+24", "d20", "Cold Breath13d8", "Paralyzing Breath")
          ]
          break
        case 35:
          encounter.text = "The zombie black dragon goads you into a fight."
          encounter.enemies = [
            createEnemy("Zombie Black Dragon", calculateRoll("21d20+147"), 22, 15, "6d10+24", "d20+2", "Acid Breath15d8", "Wing Attack2d6+8")
          ]
          break
        case 36:
          encounter.text = "From the ashes rises the molten robot!"
          encounter.enemies = [
            createEnemy("Molten Robot", calculateRoll("10d20+70"), 18, 13, "4d6+16", "d20+8", "Fiery Assault4d8+16", "Explosive Round4d8+16")
          ]
          break
        case 37:
          encounter.text = "The interdimensional alien is quite the curiosity. Your wish to study its biology is stymied by the fact that your life is in jeapodary."
          encounter.enemies = [
            createEnemy("Interdimensional Alien", calculateRoll("32d12+256"), 22, 17, "6d12+18", "d20+2", "Beguiling Gaze", "Hypnotic Gaze")
          ]
          break
        case 38:
            encounter.text = "You stand there, mouth agape trying to understand it. You can't. The cosmic alien god attacks!"
            encounter.enemies = [
              createEnemy("Cosmic Alien God", calculateRoll("16d20+112"), 15, 14, "6d6+16", "d20", "Poison Jet4d6", "Psychic Whispers6d10")
            ]
            break
          case 39:
          encounter.text = "The ancient mecha red dragon has lived to see entire civilizations rise and fall. You are nothing in its presence."
          encounter.enemies = [
            createEnemy("Ancient Mecha Red Dragon", calculateRoll("21d20+147"), 22, 15, "6d8+30", "d20+2", "Fire Breath26d6", "Wing Attack2d6+10")
          ]
          break
        case 40:
          encounter.text = "The ancient mecha gold dragon holds on to a dark secret that jeopordizes everything that you know. Perhaps it will impart its knowledge onto you once you prove you're worthy. Many have tried and failed as evidenced by the bones laid asunder."
          encounter.enemies = [
            createEnemy("Ancient Gold Dragon", calculateRoll("28d20+252"), 22, 15, "6d10+24", "d20+2", "Fire Breath13d10", "Weakening Breath")
          ]
          break
        case 41:
          encounter.text = "Semfor 42, the leader of the cyborgs, stands at the ready. You have displeased her and now she will exact her revenge on you personally."
          encounter.enemies = [
            createEnemy("Semfor 42", calculateRoll("40d10+360"), 21, 16, "4d8+16", "d20+7", "Horrid Touch8d10", "Immolating Gaze4d10", "Teleporter")
          ]
          break
        case 42:
          encounter.text = "The alien hive mind emerges from the deepest recesses of the cosmos. A wicked grin betrays his truly diabolical plans for you."
          encounter.enemies = [
            createEnemy("Alien Hive Mind", calculateRoll("18d10+90"), 18, 13, "4d8+27", "d20+3", "Awaken Greed", "Teleporter", "Regenerate", "Inflict Wounds4d8+27", "Invisibility")
          ]
          break
        case 43:
          encounter.text = "The holographic herald of the AI singularity has awaited eons for its chance to lead his assault onto the material world. It does not see you as a threat. Only an inconvenience."
          encounter.enemies = [
            createEnemy("AI Singularity", calculateRoll("22d12+176"), 22, 17, "3d10+30", "d20+2", "Hack Force", "Holographic Brimstone20d8", "Doomsday Calculation2d8", "Raise Holograms")
          ]
          break
        case 44:
          encounter.text = "The zombie tank is a mountain of meat designed to crush all before it. Its thick, interwoven layers of carbon fibre protect it from direct damage."
          encounter.enemies = [
            createEnemy("Zombie Tank", calculateRoll("16d20+160"), 17, 16, "4d10+40", "d20+7", "Piledriver6d10")
          ]
          break
        case 45:
          encounter.text = "The raptor drone is fast. It cuts a path towards you in the time it takes you to blink. It's all over for you."
          encounter.enemies = [
            createEnemy("Raptor Drone", calculateRoll("16d20+112"), 14, 13, "6d6+14", "d20-1", "Seeker Missile Swarm9d8")
          ]
          break
        case 46:
          encounter.text = "The silver skin zombie is so called because of the nano swarm that flows over its body like a molten metal alloy. Constantly moving, this is going to be one tough battle."
          encounter.enemies = [
            createEnemy("Silver Skin Zombie", calculateRoll("19d10+95"), 17, 12, "4d10+12", "d20", "Thermite Strike8d6", "Proximity Alert", "Teleporter")
          ]
          break
        case 47:
          encounter.text = "An alien craft descends and begins launching an assault upon you."
          encounter.enemies = [
            createEnemy("UFO", calculateRoll("21d12+136"), 19, 14, "6d8+16", "d20+2", "Laser Whip 5d6+8", "Teleporter")
          ]
          break
        case 48:
          encounter.text = "There is no explaining how you are face to face with a Mecha Turtle and yet... here you are. It towers over the skyscrapers and topples buildings with its hardened beakFight!"
          encounter.enemies = [
            createEnemy("Mecha Turtle", calculateRoll("22d20+110"), 20, 13, "6d8+21", "d20", "Steam Breath15d6")
          ]
          break
        case 49:
          encounter.text = "An echoing boom reverberates across the area, shaking you to your core. The super soldier is activated."
          encounter.enemies = [
            createEnemy("Super Soldier", calculateRoll("20d10+100"), 20, 13, "6d8+14", "d20=1", "Poison Breath10d8", "Slam3d8+7")
          ]
          break
        case 50:
          encounter.text = "A lake with unkown depths is before you. The kraken AI's lair. It emerges, ready to strike out at you."
          encounter.enemies = [
            createEnemy("Kraken AI", calculateRoll("27d20+189"), 18, 17, "9d6+30", "d20", "Lightning Storm12d10", "Ink Cloud3d10", "Fling1d6")
          ]
          break
        case 51:
          encounter.text = "The zombie commander controls an incredible army of the dead. Strike now for the good of humanity!"
          encounter.enemies = [
            createEnemy("Zombie Commander", calculateRoll("18d8+54"), 17, 12, "3d6", "Tech Shot4d4", "Missile Strike8d6", "Transporter", "Nano-necrotic Command", "Cryonic Beam3d8", "Radiation Zone6d6", "Dead Vision", "Disabling Injection")
          ]
          break
        case 52:
          encounter.text = "So many arms. The Slither Drone crawls into view, waving its gun tentacles all around."
          encounter.enemies = [
            createEnemy("Slither DDrone", calculateRoll("18d10+90"), 18, 9, "12d8+24", "d20+5", "Teleport", "Parry")
          ]
          break
        case 53:
          encounter.text = "The alien fiend is protecting something of great value. Put that out of your mind because you should be preparing for one hell of a fight."
          encounter.enemies = [
            createEnemy("Alien Fiend", calculateRoll("24d10+168"), 19, 14, "8d8+32", "d20+2", "Fireball8d6", "Wall of Fire")
          ]
          break
        case 54:
          encounter.text = "The Alien God has announced its presence. This fallen and disgraced deity shall now vanquish you in the name of a forgotten vendetta against humanity."
          encounter.enemies = [
            createEnemy("Planetar", calculateRoll("16d10+112"), 19, 12, "4d6+7", "d20+5", "Interdimensional Plague4d10", "Bullet Barrier", )
          ]
          break
        case 55:
          encounter.text = "Angelic is the least you can say about the solar sail. Beautiful, powerful. All fear the mighty solar sail!"
          encounter.enemies = [
            createEnemy("Solar Sail", calculateRoll("18d10+144"), 21, 15, "8d6+16", "d20+6", "EM Drive", "Sun Burst8d6", "Flashbang")
          ]
          break
        case 56:
          encounter.text = "The cyborg gargantuan laid dormant for unknowable eons. Your arrival, however, triggered a series of events leading to its awakening. Its massive form stirs, sending the earth crumbling before you."
          encounter.enemies = [
            createEnemy("Cyborg Gargantuan", calculateRoll("33d20+330"), 25, 19, "20d8+50", "d20")
          ]
          break
        case 57:
          encounter.text = "The mecha worm is much like the cyborg worm, yet it is much more dangerous. A robotic nightmare made of nigh unbreakable metals, its singular goal is clear: your destruction."
          encounter.enemies = [
            createEnemy("Mecha Worm", calculateRoll("15d20+90"), 18, 9, "6d8+18", "d20-2")
          ]
          break
        case 58:
          encounter.text = "The raeleus decides to finally make his presence known. He's been watching. Waiting. This half human, half zebra amalgamation is quite the inventor. It employs its grand arsenal on you. Run or fight, he's going to get you."
          encounter.enemies = [
            createEnemy("Raeleus", calculateRoll("19d12+190"), 22, 17, "6d6+10", "d20+5", "Burst Fire6d10+10", "Auto Pistol10d6", "Canister Grenade4d10", "Flash Bang", "Chaff Grenada")
          ]
          break
        case 59:
          encounter.text = "The zombie knight is not one to toil with. It's too late for you, but consider this a warning to the next group of fools who think they could stand toe to toe with this undead warrior."
          encounter.enemies = [
            createEnemy("Zombie Knight", calculateRoll("19d8+95"), 20, 11, "3d8+15", "d20+2", "Cybernetic Orb10d6", "Parry", "Digital Wave5d6")
          ]
          break
        case 60:
          encounter.text = "This is getting out of hand. Aliens, zombies, and now the Cyborg Mother is on attack! She's a very powerful cybernetic caster that commands a vast network of digital slaves."
          encounter.enemies = [
            createEnemy("Cyborg Mother", calculateRoll("35d8+105"), 17, 10, "2d6+8", "d20+4", "Levitation Jets", "Extradimensional Shift", "Interdimensional Gate", "Mind Control Serum5d10", "Sentry Turret", "Electrified Rod3d6", "Summon Hologram")
          ]
          break
      }
      break
  }

  var characterName = toTitleCase(state.characters[getRandomInteger(0, state.characters.length-1)].name)
  var characterNameAdjustedCase = characterName == "You" ? "you" : characterName
  var possessiveName = getPossessiveName(characterName)
  encounter.text = encounter.text.replaceAll("Character", characterName)
  encounter.text = encounter.text.replaceAll("character", characterNameAdjustedCase)
  encounter.text = encounter.text.replaceAll("character's", possessiveName)
  encounter.text = encounter.text.replaceAll("Character's", toTitleCase(possessiveName))

  for (var enemy of encounter.enemies) {
    enemy.health = Math.floor(enemy.health * multiplier)
    enemy.ac = Math.floor(enemy.ac * multiplier)

    damagePrefix = enemy.damage.match(/^\d*d\d*/gi)[0]
    damageSuffix = enemy.damage.match(/(?<=^\d*d\d*)(\+|-).*$/gi)
    damageSuffix = damageSuffix != null ? parseInt(damageSuffix[0]) : 0
    damageSuffix += Math.floor(3 * (multiplier - 1))
    damageSuffix = `${damageSuffix > 0 ? "+" : ""}${damageSuffix}`
    enemy.damage = `${damagePrefix}${damageSuffix == 0 ? "" : damageSuffix}`

    initiativePrefix = enemy.initiative.match(/^\d*d\d*/gi)[0]
    initiativeSuffix = enemy.initiative.match(/(?<=^\d*d\d*)(\+|-).*$/gi)
    initiativeSuffix = initiativeSuffix != null ? parseInt(initiativeSuffix[0]) : 0
    initiativeSuffix += Math.floor(3 * (multiplier - 1))
    initiativeSuffix = `${initiativeSuffix > 0 ? "+" : ""}${initiativeSuffix}`
    enemy.initiative = `${initiativePrefix}${initiativeSuffix == 0 ? "" : initiativeSuffix}`
  }

  return encounter
}

function createEnemy(name, health, ac, hitModifier, damage, initiative, ...spells) {
  var enemy = {
    name: name,
    health: health,
    ac: ac,
    hitModifier: hitModifier,
    damage: damage,
    initiative: initiative,
    spells: spells
  }
  return enemy
}

function getUniqueName(name) {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var letterIndex = 0

  var newName
  var enemyMatches
  do {
    newName = `${name} ${letters[letterIndex++]}`
    enemyMatches = state.enemies.filter(x => x.name.toLowerCase() == newName.toLowerCase())
  } while (enemyMatches.length > 0 && letterIndex < letters.length)

  return newName
}

function createInitiativeOrder() {
  state.initiativeOrder = []

  for (var character of state.characters) {
    if (character.health <= 0) continue
    state.initiativeOrder.push(character)
  }

  for (var enemy of state.enemies) {
    if (enemy.health <= 0) continue
    state.initiativeOrder.push(enemy)
  }

  state.initiativeOrder.sort(function(a, b) {
    return b.calculatedInitiative - a.calculatedInitiative;
  });
}

const levelSplits = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]

function getLevel(experience) {
  if (experience < 0) experience = 0
  
  var level
  for (level = 0; level < levelSplits.length; level++) {
    if (experience < levelSplits[level]) break
  }
  return level
}

function getNextLevelXp(experience) {
  if (experience < 0) experience = 0
  
  var level
  for (level = 0; level < levelSplits.length; level++) {
    if (experience < levelSplits[level]) return levelSplits[level]
  }
  return -1
}

function addXpToAll(experience) {
  if (experience == 0) return ""
  var leveledUp = `\n[The party has gained ${experience} experience!]`
  state.characters.forEach(x => {
    var haveWord = x.name == "You" ? "have" : "has"
    const oldLevel = getLevel(x.experience)
    x.experience += experience
    const newLevel = getLevel(x.experience)
    if (newLevel > oldLevel) leveledUp += `\n[${x.name} ${haveWord} leveled up to ${newLevel}!]`
  })
  return leveledUp
}

function getHealthMax(character) {
  if (character == null) character = getCharacter()
  
  var modifier = 0
  var stat = character.stats.find((element) => element.name.toLowerCase() == "constitution")
  if (stat != null) modifier = getModifier(stat.value)

  var level = getLevel(character.experience)
  return 10 + level * (6 + modifier)
}

function getModifier(statValue) {
  return Math.floor((statValue - 10) / 2)
}

function findSpellCardIndex(name) {
  return storyCards.findIndex((element) => element.type == "spell" && element.title == name)
}

function findSpellCard(name) {
  return storyCards[findSpellCardIndex(name)]
}

function findItemCardIndex(name, storyCardName) {
  return storyCards.findIndex((element) => (element.type == "item" || element.type == "weapon" || element.type == "armor") && (element.title == name || element.title == storyCardName))
}

function findItemCard(name, storyCardName) {
  return storyCards[findItemCardIndex(name, storyCardName)]
}

function stragedyCalculateScores() {
  state.stragedyEnemyScore = 0
  state.stragedyPlayerScore = 0
  var playerHasJoker = false
  var enemyHasJoker = false
  var playerBlessedPoints = 0
  var enemyBlessedPoints = 0
  var doubledPoints = []

  //check for kings
  for(card of state.stragedyPlayerBattlefield) {
    var points = parseInt(card.match(/(?<=.*)\d+/gi)[0])

    if (card.includes("k")) {
      doubledPoints.push(points)
    }
  }

  for(card of state.stragedyEnemyBattlefield) {
    var points = parseInt(card.match(/(?<=.*)\d+/gi)[0])

    if (card.includes("k")) {
      doubledPoints.push(points)
    }
  }

  //enemy
  for(card of state.stragedyEnemyBattlefield) {
    var points = parseInt(card.match(/(?<=.*)\d+/gi)[0])

    if (doubledPoints.includes(points)) {
      points *= 2
    }

    if (card.includes("q")) {
      state.stragedyPlayerScore += points
      points = 0
    }

    if (card.includes("?")) {
      enemyHasJoker = true
    }

    if (card.includes("p")) {
      enemyBlessedPoints += points
    }

    state.stragedyEnemyScore += points
  }

  if (enemyHasJoker && state.stragedyEnemyScore < 30) {
    state.stragedyEnemyScore = 30
  } else if (state.stragedyEnemyScore > 30) {
    state.stragedyEnemyScore = Math.max(30, state.stragedyEnemyScore - enemyBlessedPoints)
  }

  //player
  for(card of state.stragedyPlayerBattlefield) {
    var points = parseInt(card.match(/(?<=.*)\d+/gi)[0])

    if (doubledPoints.includes(points)) {
      points *= 2
    }

    if (card.includes("q")) {
      state.stragedyEnemyScore += points
      points = 0
    }

    if (card.includes("?")) {
      playerHasJoker = true
    }

    if (card.includes("p")) {
      playerBlessedPoints += points
    }

    state.stragedyPlayerScore += points
  }

  if (playerHasJoker && state.stragedyPlayerScore < 30) {
    state.stragedyPlayerScore = 30
  } else if (state.stragedyPlayerScore > 30) {
    state.stragedyPlayerScore = Math.max(30, state.stragedyPlayerScore - playerBlessedPoints)
  }
}

function stragedyEnemyTurn() {
  state.stragedyEnemySkipTurn = false
  state.stragedyEnemyTurnText = ""
  if (state.stragedyPlayerScore > 30) {
    state.stragedyEnemyTurnText = null
    stragedyCheckForWin()
    state.stragedyTurn = "gameOver"
    return
  }

  var score = state.stragedyEnemyScore
  var hand = state.stragedyEnemyHand
  var deck = state.stragedyEnemyDeck
  var discard = state.stragedyEnemyDiscard
  var battlefield = state.stragedyEnemyBattlefield
  var playerScore = state.stragedyPlayerScore
  var playerHand = state.stragedyPlayerHand
  var playerDeck = state.stragedyPlayerDeck
  var playerDiscard = state.stragedyPlayerDiscard
  var playerBattlefield = state.stragedyPlayerBattlefield
  var playerRetired = state.stragedyPlayerRetired
  var kingCards = new Set()

  var hasJokerOnBattlefield = false
  for (var card of battlefield) {
    if (card.includes("?")) {
      hasJokerOnBattlefield = true
      break
    }
  }

  var battlefieldNumbersOnly = []
  for (var card of battlefield) {
    var value = parseInt(card.replaceAll(/\D/g, ""))
    if (value != null) battlefieldNumbersOnly.push(value)
  }

  var playerBattlefieldNumbersOnly = []
  for (var card of playerBattlefield) {
    var value = parseInt(card.replaceAll(/\D/g, ""))
    if (value != null) playerBattlefieldNumbersOnly.push(value)
  }

  for(var card of state.stragedyPlayerBattlefield) {
    if (card.includes("k")) {
      kingCards.add(card.match(/(?<=.*)\d+/gi)[0])
    }
  }

  for(var card of state.stragedyEnemyBattlefield) {
    if (card.includes("k")) {
      kingCards.add(card.match(/(?<=.*)\d+/gi)[0])
    }
  }

  var hasNumberedCards = hand.filter(x => /^\d+$/gi.test(x)).length > 0

  var sortedNumberedBattlefieldCards = battlefield.filter(x => /^[kpw\?]*\d+$/gi.test(x)).sort((a, b) => parseInt(a.replaceAll(/\D/gi, "")) - parseInt(b.replaceAll(/\D/gi, "")))
  var highestNumberedBattlefieldCard = sortedNumberedBattlefieldCards.length > 0 ? sortedNumberedBattlefieldCards[sortedNumberedBattlefieldCards.length - 1] : null
  var lowestNumberedBattlefieldCard = sortedNumberedBattlefieldCards.length > 0 ? sortedNumberedBattlefieldCards[0] : null

  var hasAce = hand.filter(x => /^.*a.*$/gi.test(x)).length > 0
  var hasJack = hand.filter(x => /^.*j.*$/gi.test(x)).length > 0
  var hasQueen = hand.filter(x => /^.*q.*$/gi.test(x)).length > 0
  var hasKing = hand.filter(x => /^.*k.*$/gi.test(x)).length > 0
  var hasJoker = hand.filter(x => /^.*\?.*$/gi.test(x)).length > 0
  var hasWitch = hand.filter(x => /^.*w.*$/gi.test(x)).length > 0
  var hasPriest = hand.filter(x => /^.*p.*$/gi.test(x)).length > 0
  var hasBrigand = hand.filter(x => /^.*b.*$/gi.test(x)).length > 0

  var faceCardHandCount = hand.filter(x => /.*\D.*/gi.test(x)).length

  var highestNumberedHandCardToReach30 = null
  var highestNumberedHandCardToReach30Value = 0
  for (var card of hand) {
    if (isNaN(card)) continue
    var value = parseInt(card)
    if (kingCards.has(value.toString())) value *= 2
    if (value > highestNumberedHandCardToReach30Value && score + value <= 30) {
      highestNumberedHandCardToReach30 = card
      highestNumberedHandCardToReach30Value = value
    }
  }

  var highestNumberedHandCardToReach20 = null
  var highestNumberedHandCardToReach20Value = 0
  for (var card of hand) {
    if (isNaN(card)) continue
    var value = parseInt(card)
    if (kingCards.has(value.toString())) value *= 2
    if (value > highestNumberedHandCardToReach20Value && score + value <= 20) {
      highestNumberedHandCardToReach20 = card
      highestNumberedHandCardToReach20Value = value
    }
  }

  var kingNumberedCardsInHand = []
  for (var card of hand) {
    if (kingCards.has(card)) kingNumberedCardsInHand.push(card)
  }
  kingNumberedCardsInHand.sort((a, b) => parseInt(a) - parseInt(b))

  var bestAceCard = null
  var bestAceCardTotal = 0
  for (var card of battlefield) {
    var number = card.replaceAll(/\D/gi, "")
    var playerTotal = 0
    for (var playerCard of playerBattlefield) {
      var playerNumber = playerCard.replaceAll(/\D/gi, "")
      if (playerNumber == number) playerTotal += parseInt(playerNumber)
    }
    if (playerTotal > bestAceCardTotal) bestAceCard = card
  }

  var bestKingCardToBustPlayer = null
  var bestKingCardToBustPlayerValue = 0
  for (var card of battlefield) {
    var number = card.replaceAll(/\D/gi, "")
    var value = parseInt(number)

    if (card.includes("q")) continue
    if (kingCards.has(number)) continue

    var count = 0
    for (var testCard of battlefield) {
      if (testCard.replaceAll(/\D/gi, "") == number) count++
    }

    if (value * count > bestKingCardToBustPlayerValue && score + value * count <= 30) {
      bestKingCardToBustPlayer = card
      bestKingCardToBustPlayerValue = value
    }
  }

  var bestKingCardToReach30 = null
  var bestKingCardToReach30Value = 0
  for (var card of battlefield) {
    var number = card.replaceAll(/\D/gi, "")
    var value = parseInt(number)

    if (card.includes("q")) continue
    if (kingCards.has(number)) continue

    var count = 0
    for (var testCard of battlefield) {
      if (testCard.replaceAll(/\D/gi, "") == number) count++
    }

    if (value * count > bestKingCardToReach30Value && score + value * count <= 30) {
      bestKingCardToReach30 = card
      bestKingCardToReach30Value = value
    }
  }

  var bestJackCardToSave = null
  var bestJackCardToSaveValue = 0
  for (var card of battlefield) {
    if (card.includes("q")) continue

    var value = parseInt(card.replaceAll(/\D/gi, ""))
    if (kingCards.has(value.toString())) value *= 2
    if (value > bestJackCardToSaveValue && score - value <= 30) {
      bestJackCardToSave = card
      bestJackCardToSaveValue = value
    }
  }

  var bestQueenCardToBustPlayer = null
  var bestQueenCardToBustPlayerValue = 0
  for (var card of battlefield) {
    if (card.includes("q")) continue

    var value = parseInt(card.replaceAll(/\D/gi, ""))
    if (kingCards.has(value.toString())) value *= 2
    if (value > bestQueenCardToBustPlayerValue && playerScore + value > 30) {
      bestQueenCardToBustPlayer = card
      bestQueenCardToBustPlayerValue = value
    }
  }

  var bestQueenCardToSave = null
  var bestQueenCardToSaveValue = 0
  for (var card of battlefield) {
    if (card.includes("q")) continue

    var value = parseInt(card.replaceAll(/\D/gi, ""))
    if (kingCards.has(value.toString())) value *= 2
    if (value > bestQueenCardToSaveValue && score - value <= 30) {
      bestQueenCardToSave = card
      bestQueenCardToSaveValue = value
    }
  }

  var bestPriestCardToSave = null
  var bestPriestCardToSaveValue = 0
  for (var card of battlefield) {
    if (card.includes("p")) continue

    var value = parseInt(card.replaceAll(/\D/gi, ""))
    if (kingCards.has(value.toString())) value *= 2
    if (value > bestPriestCardToSaveValue && score - value <= 30) {
      bestPriestCardToSave = card
      bestPriestCardToSaveValue = value
    }
  }

  var bestPriestCard = null
  var bestPriestCardValue = 0
  for (var card of battlefield) {
    if (card.includes("p")) continue

    var value = parseInt(card.replaceAll(/\D/gi, ""))
    if (kingCards.has(value.toString())) value *= 2
    if (value > bestPriestCardValue) {
      bestPriestCard = card
      bestPriestCardValue = value
    }
  }

  if (hand.length == 0) {
    if (deck.length == 0) state.stragedyEnemyTurnText = stragedyEnemyRetire()
    else if (score > 30) state.stragedyEnemyTurnText = stragedyEnemyRetire()
    else state.stragedyEnemyTurnText = stragedyEnemyDrawCard()
  } else if (score > 30 && battlefield.length > 0) {
    if (hasQueen && bestQueenCardToSave != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + bestQueenCardToSave)
    else if (hasPriest && bestPriestCardToSave != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "p" + bestPriestCardToSave)
    else if (hasJack && bestJackCardToSave != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "j" + bestJackCardToSave)
    else if (hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else if (kingCards.length > 0 && kingNumberedCardsInHand.length > 0) state.stragedyEnemyTurnText = stragedyPlayCard(false, kingNumberedCardsInHand[kingNumberedCardsInHand.length - 1])
    else state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else if (playerRetired && score < playerScore) {
    if (hasJoker && playerScore < 30) state.stragedyEnemyTurnText = stragedyPlayCard(false, "?" + lowestNumberedBattlefieldCard)
    else if (hasQueen && bestQueenCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + bestQueenCardToBustPlayer)
    else if (hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else if (hasKing && bestKingCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToBustPlayer)
    else if (hasKing && bestKingCardToReach30 != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToReach30)
    else if (highestNumberedHandCardToReach30 != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, highestNumberedHandCardToReach30)
    else if (hasJoker && playerScore == 30) state.stragedyEnemyTurnText = stragedyPlayCard(false, "?" + lowestNumberedBattlefieldCard)
    else state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else if (playerRetired && score > playerScore && !hasJokerOnBattlefield) {
    state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else if (playerRetired && score == playerScore) {
    if (highestNumberedHandCardToReach30 != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, highestNumberedHandCardToReach30)
    else state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else if (score - playerScore > 20 && !hasJokerOnBattlefield) {
    state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else if (deck.length > 0 && hand.length == 1) {
    state.stragedyEnemyTurnText = stragedyEnemyDiscardCard()
  } else if (hasNumberedCards && (score < playerScore || score < 15)) {
    if (score < 20 && highestNumberedHandCardToReach20 != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, highestNumberedHandCardToReach20)
    else if (highestNumberedHandCardToReach30 != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, highestNumberedHandCardToReach30)
    else if (faceCardHandCount > 1 && hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else if (faceCardHandCount > 1 && hasKing && bestKingCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToBustPlayer)
    else if (faceCardHandCount > 1 && hasQueen && highestNumberedBattlefieldCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + highestNumberedBattlefieldCard)
    else if (deck.length > 0) state.stragedyEnemyTurnText = stragedyEnemyDiscardCard()
    else if (hasQueen && highestNumberedBattlefieldCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + highestNumberedBattlefieldCard)
    else if (hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else if (hasKing && bestKingCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToBustPlayer)
    else stragedyEnemyRandom()
  } else if (score >= playerScore && hasWitch) {
    state.stragedyEnemyTurnText = stragedyPlayCard(false, "w")
  } else if (score >= playerScore && hasBrigand) {
    state.stragedyEnemyTurnText = stragedyPlayCard(false, "b")
  } else if (highestNumberedHandCardToReach20 == null && hand.length > 0) {
    if (score >= 20 && score < playerScore && faceCardHandCount > 1 && hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else if (score >= 20 && score < playerScore && faceCardHandCount > 1 && hasKing && bestKingCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToBustPlayer)
    else if (score >= 20 && score < playerScore && faceCardHandCount > 1 && hasQueen && highestNumberedBattlefieldCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + highestNumberedBattlefieldCard)
    else if (deck.length > 0) state.stragedyEnemyTurnText = stragedyEnemyDiscardCard()
    else if (hasQueen && bestQueenCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "q" + bestQueenCardToBustPlayer)
    else if (hasKing && bestKingCardToBustPlayer != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "k" + bestKingCardToBustPlayer)
    else if (hasPriest && bestPriestCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "p" + bestPriestCard)
    else if (hasAce && bestAceCard != null) state.stragedyEnemyTurnText = stragedyPlayCard(false, "a" + bestAceCard)
    else state.stragedyEnemyTurnText = stragedyEnemyRetire()
  } else {
    state.stragedyEnemyTurnText = stragedyEnemyRandom()
  }
  
  stragedyCalculateScores()
  if (state.stragedyEnemyScore > 30) {
    stragedyCheckForWin()
    state.stragedyTurn = "gameOver"
  }
}

function stragedyEnemyDrawCard() {
  var card = state.stragedyEnemyDeck.pop()
  state.stragedyEnemyHand.push(card)
  return `\nThe opponent has drawn a card.\n`
}

function stragedyEnemyDiscardCard() {
  var hand = [...state.stragedyEnemyHand]
  var score = state.stragedyEnemyScore

  var hasAce = hand.filter(x => /^.*a.*$/gi.test(x)).length > 0
  var hasJack = hand.filter(x => /^.*j.*$/gi.test(x)).length > 0
  var hasQueen = hand.filter(x => /^.*q.*$/gi.test(x)).length > 0
  var hasKing = hand.filter(x => /^.*k.*$/gi.test(x)).length > 0
  var hasJoker = hand.filter(x => /^.*\?.*$/gi.test(x)).length > 0
  var hasWitch = hand.filter(x => /^.*w.*$/gi.test(x)).length > 0
  var hasPriest = hand.filter(x => /^.*p.*$/gi.test(x)).length > 0
  var sortedNumberedHandCardsToAddUpTo30 = hand.filter(x => /^\d+$/gi.test(x) && parseInt(x) <= 30 - score).sort((a, b) => parseInt(a) - parseInt(b))
  var highestNumberedHandCardAddUpTo30 = sortedNumberedHandCardsToAddUpTo30.length > 0 ? sortedNumberedHandCardsToAddUpTo30[sortedNumberedHandCardsToAddUpTo30.length - 1] : null

  if (hand.length > 1) {
    if (hasQueen) hand.splice(hand.indexOf("q"))
    else if (hasPriest) hand.splice(hand.indexOf("p"))
    else if (hasKing) hand.splice(hand.indexOf("k"))
    else if (hasWitch) hand.splice(hand.indexOf("w"))
    else if (hasJoker) hand.splice(hand.indexOf("?"))
    else if (hasJack) hand.splice(hand.indexOf("j"))
    else if (hasAce) hand.splice(hand.indexOf("a"))
    else if (highestNumberedHandCardAddUpTo30 != null) hand.splice(hand.indexOf(highestNumberedHandCardAddUpTo30))
  }

  var card = state.stragedyEnemyHand.splice(state.stragedyEnemyHand.indexOf(getRandomInteger(0, hand.length - 1)), 1)
  state.stragedyEnemyDiscard.push(card)
  var newCards = state.stragedyEnemyDeck.splice(state.stragedyEnemyDeck.length - 2, 2)
  state.stragedyEnemyHand.push(...newCards)
  return `\nThe opponent has discarded a card and drawn ${newCards.length} cards.\n`
}

function stragedyEnemyRetire() {
  state.stragedyEnemyRetired = true
  return `\nThe opponent has retired at ${state.stragedyEnemyScore} points.\n`
}

function stragedyEnemyRandom(punish) {
  var hand = [...state.stragedyEnemyHand]

  if (hand.length == 0) {
    if (punish) return "\nThe enemy has no cards to play.\n"
    if (state.stragedyEnemyDeck.length > 0) return stragedyEnemyDrawCard()
    return stragedyEnemyRetire()
  }

  do {
    var index = getRandomInteger(0, hand.length - 1)
    var card = hand.splice(index, 1)[0]

    if (/\d+/gi.test(card)) {
      return stragedyPlayCard(false, card)
    } else if (state.stragedyEnemyBattlefield.length > 0) {
      var battlefield = [...new Set(state.stragedyEnemyBattlefield)]
      do {
        var battlefieldIndex = getRandomInteger(0, battlefield.length - 1)
        var battlefieldCard = battlefield.splice(battlefieldIndex, 1)[0]

        if (!battlefieldCard.includes(card)) {
          return stragedyPlayCard(false, card + battlefieldCard)
        }
      } while (battlefield.length > 0)
    }
  } while (hand.length > 0)

  if (punish) {
    state.stragedyEnemyDiscard.push(...state.stragedyEnemyHand)
    state.stragedyEnemyHand = []
    return "\nThe enemy could not play any cards and therfore discarded their entire hand.\n"
  }

  if (state.stragedyEnemyDeck.length > 0) return stragedyEnemyDrawCard()
  return stragedyEnemyRetire()
}

function stragedyPlayerRandom(punish) {
  var hand = [...state.stragedyPlayerHand]

  if (hand.length == 0) {
    return "\nThe player has no cards to play.\n"
  }

  do {
    var index = getRandomInteger(0, hand.length - 1)
    var card = hand.splice(index, 1)[0]

    if (/\d+/gi.test(card)) {
      return stragedyPlayCard(true, card)
    } else if (state.stragedyPlayerBattlefield.length > 0) {
      var battlefield = [...new Set(state.stragedyPlayerBattlefield)]
      do {
        var battlefieldIndex = getRandomInteger(0, battlefield.length - 1)
        var battlefieldCard = battlefield.splice(battlefieldIndex, 1)[0]

        if (!battlefieldCard.includes(card)) {
          return stragedyPlayCard(true, card + battlefieldCard)
        }
      } while (battlefield.length > 0)
    }
  } while (hand.length > 0)

  if (punish) {
    state.stragedyPlayerDiscard.push(...state.stragedyEnemyHand)
    state.stragedyPlayerHand = []
    return "\nThe player could not play any cards and therfore discarded their entire hand.\n"
  }

  if (state.stragedyEnemyDeck.length > 0) return stragedyEnemyDrawCard()
  return stragedyEnemyRetire()
}

function stragedyPlayerTurn(text) {
  if (text.startsWith("d") && state.stragedyPlayerHand.length > 0) {
    if (state.stragedyPlayerDeck.length == 0) return "\nYou cannot discard if you have 0 cards in your deck.\n"

    var targetCard = text.substring(1).toLowerCase()
    if (targetCard.length == 0) return "\nYou must specify the card you wish to discard\n"

    var handIndex = state.stragedyPlayerHand.findIndex(x => x.toLowerCase() == targetCard)
    if (handIndex == -1) return "\nYou cannot discard a card that is not in your hand.\n"

    state.stragedyPlayerHand.splice(handIndex, 1);
    state.stragedyPlayerDiscard.push(targetCard)

    var newCards = state.stragedyPlayerDeck.splice(state.stragedyPlayerDeck.length - 2)
    state.stragedyPlayerHand.push(...newCards)

    text = `You discard the "${targetCard}" card. You draw `
    if (newCards.length == 1) text += `a "${newCards[0]}" card.`
    else text += `the "${newCards[0]}" and "${newCards[1]}" cards.`

    stragedyCalculateScores()
    if (state.stragedyEnemyRetired) {
      stragedyCheckForWin()
      state.stragedyTurn = "gameOver"
    } else stragedyEnemyTurn()
    return text
  } else if (text.startsWith("d") && state.stragedyPlayerHand.length == 0) {
    if (state.stragedyPlayerDeck.length == 0) return "\nYou cannot draw if you have 0 cards in your deck.\n"

    var drawCard = state.stragedyPlayerDeck.pop()
    state.stragedyPlayerHand.push(drawCard)

    stragedyCalculateScores()
    if (state.stragedyEnemyRetired) {
      stragedyCheckForWin()
      state.stragedyTurn = "gameOver"
    } else stragedyEnemyTurn()
    return `You draw a ${drawCard}`
  } else if (text == "r") {
    var hasJokerOnBattlefield = false
    for (var card of state.stragedyPlayerBattlefield) {
      if (card.includes("?")) {
        hasJokerOnBattlefield = true
        break
      }
    }

    if (hasJokerOnBattlefield) {
      return "\nYou cannot retire while you have a joker on the battlefield.\n"
    }

    state.stragedyPlayerRetired = true
    stragedyCalculateScores()
    var text = `You retire at ${state.stragedyPlayerScore}.`
    stragedyEnemyTurn()
    stragedyCalculateScores()
    stragedyCheckForWin()
    state.stragedyTurn = "gameOver"
    return text
  } else {
    var text = stragedyPlayCard(true, text)
    if (state.stragedyEnemyRetired) {
      stragedyCheckForWin()
      state.stragedyTurn = "gameOver"
    } else stragedyEnemyTurn()

    return text
  }
}

function stragedyPlayCard(player, text) {
  var character = getCharacter()
  if (player) {
    var battlefield = state.stragedyPlayerBattlefield
    var hand = state.stragedyPlayerHand
    var deck = state.stragedyPlayerDeck
    var discard = state.stragedyPlayerDiscard
    var characterName = toTitleCase(character.name)
    var playedWord = character.name == "You" ? "played" : "play"
    var enemyName = "The opponent"
    var enemyDeck = state.stragedyEnemyDeck
    var enemyHand = state.stragedyEnemyHand
    var enemyDiscard = state.stragedyEnemyDiscard
    var enemyBattlefield = state.stragedyEnemyBattlefield
  } else {
    var battlefield = state.stragedyEnemyBattlefield
    var hand = state.stragedyEnemyHand
    var deck = state.stragedyEnemyDeck
    var discard = state.stragedyEnemyDiscard
    var characterName = "The opponent"
    var playedWord = "played"
    var enemyName = toTitleCase(character.name)
    var enemyDeck = state.stragedyPlayerDeck
    var enemyHand = state.stragedyPlayerHand
    var enemyDiscard = state.stragedyPlayerDiscard
    var enemyBattlefield = state.stragedyPlayerBattlefield
  }
  
  var isNumberedCard = /^\d+$/.test(text)
  var handCard = isNumberedCard ? text : text.substring(0, 1).toLowerCase()
  var targetCard = isNumberedCard ? null : text.substring(1).toLowerCase()

  var handIndex = hand.findIndex(x => x.toLowerCase() == handCard)
  if (handIndex == -1) {
    if (player) state.stragedyEnemySkipTurn = true
    return "\nYou can only play cards that are in your hand\n"
  }

  var targetIndex = targetCard == "" ? -1 : battlefield.findIndex(x => x.toLowerCase() == targetCard)
  if (!isNumberedCard && targetCard != "" && targetIndex == -1) {
    if (player) state.stragedyEnemySkipTurn = true
    return "\nYou must specify a target that is placed on your side of the battlefield.\n"
  }

  switch (handCard) {
    case "a":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the Ace (ie. a2)\n"
      }

      hand.splice(handIndex, 1)

      for (var i = battlefield.length - 1; i >= 0; i--) {
        if (battlefield[i].endsWith(targetCard)) {
          discard.push(...battlefield[i])
          battlefield.splice(i, 1)
        }
      }

      for (var i = enemyBattlefield.length - 1; i >= 0; i--) {
        if (enemyBattlefield[i].endsWith(targetCard)) {
          enemyDiscard.push(...enemyBattlefield[i])
          enemyBattlefield.splice(i, 1)
        }
      }

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} an ace on ${targetCard}. All ${targetCard}s are removed.\n`
    case "j":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the Jack (ie. j2)\n"
      }
      
      battlefield.splice(targetIndex, 1)
      var discardCards = [...targetCard]

      hand.splice(handIndex, 1)
      discardCards.push(handCard)

      discard.push(...discardCards)

      shuffle(discard)
      var addCard = discard.pop()
      hand.push(addCard)

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a jack on the ${targetCard}. The ${targetCard} is removed. ${player ? `${characterName} drew a ${addCard} from the discard pile.` : ""}\n`
    case "q":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the Queen (ie. q2)\n"
      }

      hand.splice(handIndex, 1)
      battlefield.splice(targetIndex, 1)

      battlefield.push(handCard + targetCard)

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a queen on the ${targetCard}. The value is added to the opponent.\n`
    case "k":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the King (ie. k2)\n"
      }
      
      hand.splice(handIndex, 1)
      battlefield.splice(targetIndex, 1)

      battlefield.push(handCard + targetCard)

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a king on the ${targetCard}. All ${targetCard.match(/\d+/g)} values are doubled.\n`
    case "?":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the Joker (ie. ?2)\n"
      }

      hand.splice(handIndex, 1)
      battlefield.splice(targetIndex, 1)

      battlefield.push(handCard + targetCard)

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a joker on the ${targetCard}. The card's value is increased to make the total score 30.\n`
    case "w":
      hand.splice(handIndex, 1)
      discard.push(handCard)

      var enemyMove = !player ? stragedyPlayerRandom(true) : stragedyEnemyRandom(true)
      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a witch on ${enemyName}. ${enemyMove}\n`
    case "p":
      if (targetCard == "") {
        if (player) state.stragedyEnemySkipTurn = true
        return "\nYou must specify a target to use the Priest (ie. p2)\n"
      }

      hand.splice(handIndex, 1)
      battlefield.splice(targetIndex, 1)

      battlefield.push(handCard + targetCard)

      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a priest on the ${targetCard}. This card is prevented from causing ${characterName} to bust.\n`
    case "b":
      hand.splice(handIndex, 1)
      discard.push(handCard)

      var i
      for (i = 0; i < 5 && enemyDeck.length > 0; i++) {
        var card = enemyDeck.pop()
        enemyDiscard.push(...card)
      }
      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a brigand on ${enemyName}. They are forced to discard ${i} cards from their deck\n`
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "10":
      battlefield.push(handCard)
      hand.splice(handIndex, 1)
      stragedyCalculateScores()
      return `\n${characterName} ${playedWord} a ${handCard}.\n`
    default:
      if (player) state.stragedyEnemySkipTurn = true
      return "\nUnrecognized card specified. Stop playing with counterfit cards!\n"
  }
}

function stragedyCheckForWin() {
  if (state.stragedyEnemyScore > 30 && state.stragedyPlayerScore > 30) state.stragedyWinner = "tie"
  else if (state.stragedyEnemyScore > 30) state.stragedyWinner = "player"
  else if (state.stragedyPlayerScore > 30) state.stragedyWinner = "enemy"
  else if (state.stragedyPlayerScore > state.stragedyEnemyScore) state.stragedyWinner = "player"
  else if (state.stragedyEnemyScore > state.stragedyPlayerScore) state.stragedyWinner = "enemy"
  else state.stragedyWinner = "tie"
}

const simpleMeleeWeapons = ["Assault Rifle", "Pistol", "SMG", "Battle Rifle", "Energy Sword", "Heavy Machine Gun", "Shotgun", "SAM", "Grenade Launcher", "Sniper Rifle", "Taser"]
const simpleRangedWeapons = ["Chainsaw", "Dueling Pistol", "Stun Gun"]
const martialMeleeWeapons = ["Revolver", "Plasma Whip", "Force Knuckles", "Phase Rifle", "Minigun", "Rail Gun", "Plasma Cannon", "Chem Gun", "Charge Hammer", "Bullpup Rifle", "Auto Shotgun", "Tac Pistol", "Rocket Launcher", "Autogun", "Heavy Shotgun", "Warhammer", "Heavy Pistol", "PDW"]
const martialRangedWeapons = ["Shuriken", "Power Gauntlets", "Modular Gun", "Silenced Pistol", "Shoulder Cannon", "Wrist Blade"]
const lightArmor = ["Kevlar Vest", "Combat Armor", "Tech Armor"]
const mediumArmor = ["Carbon Fiber Armor", "Deflection Suit", "Charge Armor", "Riot Gear", "Nexus Armor"]
const heavyArmor = ["Nanotube Armor", "Biotic Mail", "Energetic Armor", "Power Armor"]
const ammunition = ["Mag", "Shells"]

function itemShopConvertGenericName(name) {
  switch (name) {
    case "Anti-Microbial Armor":
      name = itemShopNameAddSuffix("Anti-Microbial", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Compact Armor":
      name = itemShopNameAddSuffix("Compact", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Light Gun":
      name = itemShopNameAddSuffix("Light", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Silver Bullet":
      name = itemShopNameAddSuffix("Silver Bullet", ...simpleMeleeWeapons.concat(simpleRangedWeapons, martialMeleeWeapons, martialRangedWeapons))
      break
    case "Exhaust Armor":
      name = itemShopNameAddSuffix("Smoldering", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Sylvan Talon":
      name = itemShopNameAddSuffix("Sylvan Talon", "Wrist Blade", "Tac Pistol", "Rocket Launcher", "Autogun", "Grenade Launcher", "Sniper Rifle")
      break
    case "Concussive Ammunition":
      name = itemShopNameAddSuffix("Concussive", ...ammunition)
      quantity = 10
      break
    case "Exo Armor":
      name = itemShopNameAddSuffix("Exo", ...mediumArmor.concat(heavyArmor))
      break
    case "Exo Weapon":
      name = itemShopNameAddSuffix("Exo", ...martialMeleeWeapons.concat(ammunition, simpleMeleeWeapons))
      break
    case "Ammunition +1":
      name = itemShopNameAddPrefix("+1", ...Mag)
      break
    case "Digitized Armor Uncommon":
      name = itemShopNameAddSuffix("Uncommon Enspelled", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Weapon Uncommon":
      name = itemShopNameAddSuffix("Uncommon Enspelled", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Navy Armor":
      name = itemShopNameAddSuffix("Navy", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Macro Uncommon":
      name = itemShopNameAddSuffix("Macro of", "Anchor", "Fan", "Tree")
      break
    case "Revengerance Rifle":
      name = itemShopNameAddPrefix("of Revengerance", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Weapon +1":
      name = itemShopNameAddPrefix("+1", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Gun of Early Warning":
      name = itemShopNameAddPrefix("of Early Warning", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Mag +2":
      name = itemShopNameAddPrefix("+2", ...ammunition)
      break
    case "Armor +1":
      name = itemShopNameAddPrefix("+1", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Harmonic Defense Suit":
      name = itemShopNameAddSuffix("Harmonic Defense", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Cracked Harmonic Defense Suit":
      name = itemShopNameAddPrefix("of Vulnerability", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Armor Rare":
      name = itemShopNameAddSuffix("Rare Digitized", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Weapon Rare":
      name = itemShopNameAddSuffix("Rare Digitized", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Puck":
      name = itemShopNameAddPrefix("Puck", "Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Onyx Dog", "Serpentine Owl")
      break
    case "Combustion Weapon":
      name = itemShopNameAddSuffix("Combustion", ...simpleMeleeWeapons.concat(martialMeleeWeapons))
      break
    case "Sabot Shotgun":
      name = itemShopNameAddSuffix("Sabot", ...simpleMeleeWeapons.concat(martialMeleeWeapons))
      break
    case "Headphones Rare":
      name = itemShopNameAddSuffix("Headphones of", "Awareness", "Protection", "Reserve", "Sustenance")
      break
    case "Macro Rare":
      name = itemShopNameAddSuffix("Macro of", "Bird", "Swan Boat", "PDW")
      break
    case "Energy Weapon of Life Stealing":
      name = itemShopNameAddPrefix("of Life Stealing", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Sword of Wounding":
      name = itemShopNameAddPrefix("of Wounding", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Explosive Weapon":
      name = itemShopNameAddSuffix("Vicious", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Weapon +2":
      name = itemShopNameAddPrefix("+2", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Mag +3":
      name = itemShopNameAddPrefix("+3", ...ammunition)
      break
    case "Mag of Slaying":
      let type = getRandomFromList("Zombie", "Hologram", "Robot", "Cyborg", "Human", "Alien", "Drone")
      name = itemShopNameAddPrefix(`of ${type} Slaying`, ...ammunition)
      break
    case "Armor +2":
      name = itemShopNameAddPrefix("+2", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Auto Turret":
      name = itemShopNameAddSuffix("Auto Turret", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Alien Armor":
      name = itemShopNameAddPrefix("Alien", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Armor Very Rare":
      name = itemShopNameAddSuffix("Very Rare Digitized", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Armor Very Rare":
      name = itemShopNameAddSuffix("Very Rare Digitized", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Cold Gun":
      name = itemShopNameAddSuffix("Cold", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
    case "Headphones Very Rare":
      name = itemShopNameAddSuffix("Headphones of", "Absorption", "Fortitude", "Insight", "Intellect", "Leadership", "Strength")
      break
    case "Critical Mass Gun":
      name = itemShopNameAddSuffix("Critical Mass", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher")
      break
    case "Weapon +3":
      name = itemShopNameAddPrefix("+3", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Armor +3":
      name = itemShopNameAddPrefix("+3", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Armor Legendary":
      name = itemShopNameAddSuffix("Very Rare Digitized", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Digitized Weapon Legendary":
      name = itemShopNameAddSuffix("Legendary Digitized", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Luck Gun":
      name = itemShopNameAddPrefix("Lucky", "Force Knuckles", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Grenade Launcher", "Autogun")
      break
    case "Moonblade":
      name = itemShopNameAddPrefix("Moonblade", "Minigun", "Chem Gun", "Tac Pistol", "Rocket Launcher", "Autogun")
      break
  }
  return name
}

function itemShopNameAddPrefix(name, ...prefixes) {
  return getRandomFromList(...prefixes) + " " + name
}

function itemShopNameAddSuffix(name, ...suffixes) {
  return name + " " + getRandomFromList(...suffixes)
}

function findItemShopDeals(className, bought) {
  return state.itemShopDeals.filter(element => element.className == className && (bought == null || element.bought == bought))
}

function findSpellShopDeals(className, level, bought) {
  return state.spellShopDeals.filter(element => element.className == className && element.level == level && (bought == null || element.bought == bought))
}

String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

String.prototype.plural = function(revert) {

    var plural = {
        '(quiz)$'               : "$1zes",
        '^(ox)$'                : "$1en",
        '([m|l])ouse$'          : "$1ice",
        '(matr|vert|ind)ix|ex$' : "$1ices",
        '(x|ch|ss|sh)$'         : "$1es",
        '([^aeiouy]|qu)y$'      : "$1ies",
        '(hive)$'               : "$1s",
        '(?:([^f])fe|([lr])f)$' : "$1$2ves",
        '(shea|lea|loa|thie)f$' : "$1ves",
        'sis$'                  : "ses",
        '([ti])um$'             : "$1a",
        '(tomat|potat|ech|her|vet)o$': "$1oes",
        '(bu)s$'                : "$1ses",
        '(alias)$'              : "$1es",
        '(octop)us$'            : "$1i",
        '(ax|test)is$'          : "$1es",
        '(us)$'                 : "$1es",
        '([^s]+)$'              : "$1s"
    };

    var singular = {
        '(quiz)zes$'             : "$1",
        '(matr)ices$'            : "$1ix",
        '(vert|ind)ices$'        : "$1ex",
        '^(ox)en$'               : "$1",
        '(alias)es$'             : "$1",
        '(octop|vir)i$'          : "$1us",
        '(cris|ax|test)es$'      : "$1is",
        '(shoe)s$'               : "$1",
        '(o)es$'                 : "$1",
        '(bus)es$'               : "$1",
        '([m|l])ice$'            : "$1ouse",
        '(x|ch|ss|sh)es$'        : "$1",
        '(m)ovies$'              : "$1ovie",
        '(s)eries$'              : "$1eries",
        '([^aeiouy]|qu)ies$'     : "$1y",
        '([lr])ves$'             : "$1f",
        '(tive)s$'               : "$1",
        '(hive)s$'               : "$1",
        '(li|wi|kni)ves$'        : "$1fe",
        '(shea|loa|lea|thie)ves$': "$1f",
        '(^analy)ses$'           : "$1sis",
        '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",        
        '([ti])a$'               : "$1um",
        '(n)ews$'                : "$1ews",
        '(h|bl)ouses$'           : "$1ouse",
        '(corpse)s$'             : "$1",
        '(us)es$'                : "$1",
        's$'                     : ""
    };

    var irregular = {
        'move'   : 'moves',
        'foot'   : 'feet',
        'goose'  : 'geese',
        'sex'    : 'sexes',
        'child'  : 'children',
        'man'    : 'men',
        'tooth'  : 'teeth',
        'person' : 'people',
        'woman' : 'women',
    };

    var uncountable = [
        'sheep', 
        'fish',
        'deer',
        'moose',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
        'gold',
        'bass',
        'milk',
        'food',
        'water',
        'bread',
        'sugar',
        'tea',
        'cheese',
        'coffee',
        'currency',
        'seafood',
        'oil',
        'software'
    ];

    // save some time in the case that singular and plural are the same
    if(uncountable.indexOf(this.toLowerCase()) >= 0)
      return this;

    // check for irregular forms
    for(word in irregular){

      if(revert){
              var pattern = new RegExp(irregular[word]+'$', 'i');
              var replace = word;
      } else{ var pattern = new RegExp(word+'$', 'i');
              var replace = irregular[word];
      }
      if(pattern.test(this))
        return this.replace(pattern, replace);
    }

    if(revert) var array = singular;
         else  var array = plural;

    // check for matches using regular expressions
    for(reg in array){

      var pattern = new RegExp(reg, 'i');

      if(pattern.test(this))
        return this.replace(pattern, array[reg]);
    }

    return this;
}

function clamp(num, min, max) {
  return num <= min 
    ? min 
    : num >= max 
      ? max 
      : num
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function stripPunctuation(str) {
  return str.replaceAll(/((\.)|(!))\s*$/g, "")
}

var fantasyFemaleNames = ["Luna", "Kayla", "Serenity", "Eira", "Mirah", "Elowen", "Keira", "Calantha", "Natalia", "Eirlys", "Freya", "Ophelia", "Piper", "Alethea", "Melara", "Seraphina", "Delilah", "Lorna", "Echo", "Bree", "Daniella", "Branwen", "Matilda", "Eve", "Brynhild", "Ithilda", "Belinda", "Catarina", "Jora", "Zelda", "Thalia", "Rowan", "Aurora", "Coral", "Vivian", "Briella", "Elvina", "Lylah", "Mirastral", "Nadira", "Marcella", "Kestrel", "Avis", "Laura", "Vesper", "Lucilla", "Sabine", "Evelyn", "Kalinda", "Celeste", "Lilith", "Wren", "Jasmine", "Ondine", "Gabriella", "Astrid", "Elise", "Helena", "Nova", "Lyndal", "Zara", "Niamh", "Vynessa", "Erin", "Lyriel", "Dracaena", "Lila", "Brynna", "Zephyr", "Kira", "Ava", "Elinor", "Carmilla", "Isabella", "Ariana", "Rhianna", "Sylvie", "Kymberley", "Hazel", "Lirien", "Bridget", "Lyra", "Galatea", "Nadine", "Alethia", "Larissa", "Sariel", "Theodora", "Gwynneth", "Eleanor", "Odessa", "Meryll", "Sophia", "Kaia", "Brynhilda", "Haven", "Eluned", "Selene", "Bryony", "Ciara"]

var fantasyMaleNames = ["Alexander", "Thane", "Gabriel", "Orion", "Grayson", "Cedric", "Sebastian", "Arin", "Liam", "Byerson", "Julian", "Zaneth", "Kel", "Eramon", "Ashfur", "Tristam", "Leonidas", "Ryzlen", "Caspian", "Jarron", "Eudicles", "Tarquin", "Terrence", "Ereth", "Thayon", "Braxton", "Twilight", "Argent", "Whisper", "Daemon", "Victor", "Blackthorn", "Dawnrunner", "Gareth", "Caelum", "Zephyr", "Brennan", "Theo", "Draco", "Cian", "Valoric", "Skye", "Sunfor", "Damon", "Maverick", "Bryson", "Lumo", "Drakken", "Ewen", "Waverley", "Lachlan", "Atlas", "Arden", "Ryker", "Asterion", "Bryon", "Judson", "Griffith", "Logan", "Ethan", "Darius", "Brodeth", "Cassius", "Eamon", "Rowan", "Paxton", "Michael", "Dommon", "Aragorn", "Bastier", "Maximus", "Kenrick", "Jasper", "Lucien", "Bryce", "Ryder", "Damian", "Daxton", "Brantley", "Griffin", "Xander", "Galen", "Brody", "Erek", "Drake", "Thayer", "Kieran", "Heath", "Raeleus", "Alistair", "Bastian", "Asher", "Ronan", "Zane", "Jaxon", "Ambrose", "Malcolm", "Axel", "Ehtan", "Avery", "Kael", "Riley"]

var scifiFemaleNames = ["Jala", "Clea", "Jocosa", "Artemis", "Serafina", "Sevyn", "Tesla", "Lux", "Nine", "Kiara", "Valentina", "Morticia", "Rio", "Xyleena", "Libby", "Valkyrie", "Panika", "Lara", "Fenglina", "Makiko", "Katja", "Paige", "Elie", "Lucie", "Samanta", "Hazel", "Helena", "Leia", "Luminara", "Katan", "Vala", "Inara", "Saffron", "Zoe", "Jayne", "Kaylee", "Maeve", "Kara", "Athena", "Cally", "Anastasia", "Pegi", "Alita", "Alkhema", "Arcena", "Ko", "Bodika", "Candi", "Chi", "Rae", "Cylla", "Daria", "Chalma", "Elita", "Eryx", "Eva", "Nova", "Celeste", "Guri", "Hexen", "Indigo", "Juli", "Katana", "Talia", "Lala", "Mika", "Miranda", "Nebula", "Six", "Sasha", "Silica", "Sky", "Strika", "Terra", "Yori", "Andromeda", "Astra", "Bellatrix", "Callista", "Cosima", "Delphine", "Electra", "Phantasy", "Farrah", "Geneva", "Haven", "Jade", "Juno", "Lillix", "Lynx", "Nya", "Oria", "Parris", "Priya", "Rue", "Clarity", "Bloom", "Decca", "Domonique", "Grazi", "Helvetica", "Cadence"]

var scifiMaleNames = ["Ares", "Astro", "Macro", "Cadmus", "Cyno", "Fade", "Hack", "Hax", "Indigo", "Hinge", "Jarno", "Jax", "Knox", "Link", "Maxx", "Merrick", "Miles", "Mirari", "Niko", "Nano", "Oberon", "Onyx", "Orion", "Osso", "Paradox", "Pip", "Phoenix", "Radius", "Rexx", "Razlin", "Reznor", "Rian", "Roscoe", "Ryker", "Rush", "Riden", "Drake", "Frost", "Cassian", "Neyo", "Maverick", "Azriel", "Auryn", "Daggar", "Evyn", "Jace", "Jaron", "Loki", "Oren", "Ridley", "Sagan", "Silas","Solon", "Stellan", "Sorrel", "Seth", "Theron", "Zen", "Klay", "Blaze", "Xander", "Shotgun", "Dozer", "Eno", "Tip", "Ray", "Genesis", "Galac", "Eclipse", "Zev", "Zaid", "Wilder", "Sol", "Jupiter", "Mars", "Star", "Cosmo", "Aster", "Lazer", "Zeno", "Sirius", "Azra", "Atom", "Teague", "Rigel", "Cato", "Zhane", "Ace", "Rocket", "Kip", "Meter", "Starbuck", "Roman", "Fiat", "Kyron", "Nyx", "Rune", "Nero", "Quantum", "Nym", "Morphius", "Striker", "Bridger"]

var modernFemaleNames = ["Olivia", "Emma", "Amelia", "Ella", "Isabella", "Mia", "Valerie", "Eliana", "Charlotte", "Mila", "Aria", "Luna", "Harper", "Grace", "Zoey", "Jemma", "Priscilla", "Scarlett", "Hazel", "Ellie", "Naya", "Nila", "Tamia", "Cecilia", "Arianna", "Abigail", "Riley", "Autumn", "Maya", "Madelyn", "Maria", "Melody", "Sophia", "Ava", "Luz", "Eleanor", "Ivy", "Freya", "Alice", "Violet", "Clara", "Daphne", "Evelyn", "Nora", "Lucy", "Poppy", "Rose", "Chloe", "Phoebe", "Elsie", "Cordelia", "Willow", "Daisy", "Thea", "Adeline", "Arabella", "Maisie", "Lola", "Olive", "Sienna", "Sierra", "Elena", "Sadie", "Sophie", "Julia", "Alexandra", "Jane", "Mira", "Talia", "Zara", "Vera", "Amara", "Cynthia", "Hannah", "Aurora", "Anya", "Erin", "Felicity", "Juno", "Yelena", "Naomi", "Caroline", "Miriam", "Veronica", "Molly", "June", "Nina", "Piper", "Helena", "Amari", "Everly", "Bonnie", "Alina", "Emilia", "Harriet", "Isabel", "Sofia", "Kayla", "Lena", "Megan", "Diana"]

var modernMaleNames = ["Jackson", "Aiden", "Charles", "Adam", "Christopher", "Daniel", "Liam", "Oliver", "Mateo", "Henry", "Lucas", "William", "Theodore", "Noah", "John", "Arnold", "Norman", "Ralph", "Virgil", "Will", "Sam", "Luca", "David", "Joseph", "Mason", "Luke", "Matthew", "Dylan", "Jacob", "Isaac", "Anthony", "Carter", "Caleb", "Cooper", "Josiah", "Nolan", "Cameron", "Nathan", "Josh", "Angel", "Andrew", "Aaron", "Ian", "Eli", "Ryan", "Everett", "Enzo", "Parker", "Jeremiah", "Landon", "Jordan", "Austin", "Jameson", "Myles", "Dominic", "Nicholas", "Kayden", "Hunter", "Harrison", "Milo", "Arthur", "Ryder", "Archer", "Luis", "George", "Evan", "Carlos", "Juan", "Jason", "Leon", "Calvin", "Ivan", "Cole", "Chase", "Dean", "Jayce", "Olliver", "Alan", "Jesus", "Charlie", "Tyler", "Elliot", "Kevin", "Ayden", "Felix", "Tate", "Jesse", "Brody", "Tucker", "Peter", "Joel", "Edward", "Oscar", "Victor", "Brandon", "Bruce", "Abel", "Richard", "Riley", "Patrick", "Eric", "Elian", "Louis"]

var nordicFemaleNames = ["Freya", "Dagny", "Ingrid", "Froya", "Elin", "Solveig", "Maja", "Sol", "Linnea", "Vilde", "Var", "Aldis", "Alfrida", "Alfsol", "Alva", "Alvdis", "Alvida", "Andora", "Anveig", "Asa", "Astri", "Astrid", "Bolette", "Brynhild", "Disa", "Eir", "Eira", "Eidis", "Elevine", "Elfi", "Embla", "Erna", "Freja", "Frida", "Fredrikke", "Gerda", "Gry", "Gurina", "Gurine", "Gyda", "Haddy", "Halgerd", "Helga", "Helje", "Helle", "Herdis", "Herfrid", "Hilde", "Hulda", "Inga", "Idun", "Isfrid", "Iverna", "Iverine", "Jorgina", "Kari", "Lagertha", "Liv", "Livunn", "Malfrid", "Malmfrid", "Nanna", "Oda", "Odel", "Odine", "Olava", "Runa", "Ragnfrid", "Randi", "Ragnhild", "Saga", "Sif", "Sigrid", "Siv", "Solvei", "Soma", "Svanild", "Thora", "Tora", "Thurid", "Torveig", "Torfrid", "Trude", "Tyra", "Tyri", "Udna", "Unni", "Una", "Unnlaug", "Unnveig", "Valdine", "Vedis", "Valborg", "Vivil", "Ylva", "Yngva", "Thoril", "Thorine", "Sigfrida", "Sigun", "Sigvor", "Signe", "Reidunn"]

var nordicMaleNames = ["Erik", "Bjorn", "Lars", "Asmund", "Harald", "Arne", "Odin", "Ivar", "Leif", "Aesir", "Axel", "Aren", "Aric", "Balder", "Birger", "Bjarke", "Bjarne", "Nils", "Steig", "Erling", "Espen", "Fenrir", "Frey", "Einar", "Garald", "Anders", "Gunnar", "Hagan", "Halfthor", "Halfdan", "Kjell", "Hanne", "Ingvar", "Helge", "Herleif", "Jarl", "Joran", "Magnus", "Norrell", "Njord", "Olaf", "Osman", "Ragnar", "Sigurd", "Steffen", "Sten", "Sven", "Tor", "Torben", "Troels", "Tyr", "Tyrell", "Ulf", "Viggo", "Vali", "Vidar", "Volund", "Wayde", "Waddell", "Alviss", "Anneli", "Stig", "Eino", "Haakon", "Haldor", "Iver", "Sindri", "Trym", "Varg", "Alf", "Amund", "Arn", "Arnstein", "Arvid", "Bjarni", "Bjoern", "Bragi", "Brede", "Dag", "Dagfinn", "Egil", "Endre", "Erlend", "Even", "Finn", "Flosi", "Fredrik", "Frode", "Freyr", "Geir", "Gisli", "Grim", "Gudbrand", "Gustav", "Hakan", "Hakon", "Hans", "Helgi", "Ingolf", "Jomar", "Knut", "Orm"]

function generateName(genre, male) {
  if (genre.toLowerCase() == "fantasy") {
    if (male) {
      if (state.fantasyMaleIndex == null || state.fantasyMaleIndex >= fantasyMaleNames.length) {
        state.fantasyMaleIndex = 0
        state.fantasyMaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(fantasyMaleNames, state.fantasyMaleSeed)
      return fantasyMaleNames[state.fantasyMaleIndex++]
    } else  {
      if (state.fantasyFemaleIndex == null || state.fantasyFemaleIndex >= fantasyFemaleNames.length) {
        state.fantasyFemaleIndex = 0
        state.fantasyFemaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(fantasyFemaleNames, state.fantasyFemaleSeed)
      return fantasyFemaleNames[state.fantasyFemaleIndex++]
    }
  } else if (genre.toLowerCase() == "modern") {
    if (male)  {
      if (state.modernMaleIndex == null || state.modernMaleIndex >= modernMaleNames.length) {
        state.modernMaleIndex = 0
        state.modernMaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(modernMaleNames, state.modernMaleSeed)
      return modernMaleNames[state.modernMaleIndex++]
    } else {
      if (state.modernFemaleIndex == null || state.modernFemaleIndex >= modernFemaleNames.length) {
        state.modernFemaleIndex = 0
        state.modernFemaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(modernFemaleNames, state.modernFemaleSeed)
      return modernFemaleNames[state.modernFemaleIndex++]
    }
  } else if (genre.toLowerCase() == "scifi") {
    if (male) {
      if (state.scifiMaleIndex == null || state.scifiMaleIndex >= scifiMaleNames.length) {
        state.scifiMaleIndex = 0
        state.scifiMaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(scifiMaleNames, state.scifiMaleSeed)
      return scifiMaleNames[state.scifiMaleIndex++]
    }
    else {
      if (state.scifiFemaleIndex == null || state.scifiFemaleIndex >= scifiFemaleNames.length) {
        state.scifiFemaleIndex = 0
        state.scifiFemaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(scifiFemaleNames, state.scifiFemaleSeed)
      return scifiFemaleNames[state.scifiFemaleIndex++]
    }
  } else if (genre.toLowerCase() == "nordic") {
    if (male) {
      if (state.nordicMaleIndex == null || state.nordicMaleIndex >= nordicMaleNames.length) {
        state.nordicMaleIndex = 0
        state.nordicMaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(nordicMaleNames, state.nordicMaleSeed)
      return nordicMaleNames[state.nordicMaleIndex++]
    }
    else {
      if (state.nordicFemaleIndex == null || state.nordicFemaleIndex >= nordicFemaleNames.length) {
        state.nordicFemaleIndex = 0
        state.nordicFemaleSeed = getRandomInteger(1, 1000)
      }
      shuffle(nordicFemaleNames, state.nordicFemaleSeed)
      return nordicFemaleNames[state.nordicFemaleIndex++]
    }
  }
}
