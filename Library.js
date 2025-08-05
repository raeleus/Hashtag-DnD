const weaponsList = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Dart", "Light Crossbow", "Shortbow", "Sling", "Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "Warhammer", "Warhammer", "War Pick", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Musket", "Pistol"]
const armorList = ["Padded Armor", "Leather Armor", "Studded Leather Armor", "Hide Armor", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate Armor", "Ring Mail", "Chain Mail", "Splint Armor", "Plate Armor", "Shield"]
const toolsList = ["Alchemist's Supplies", "Brewer's Supplies", "Calligrapher's Supplies", "Carpenter's Tools", "Cartographer's Tools", "Cobbler's Tools", "Cook's Utensils", "Glassblower's Tools", "Jeweler's Tools", "Leatherworker's Tools", "Mason's Tools", "Painter's Supplies", "Potter's Tools", "Smith's Tools", "Tinker's Tools", "Weaver's Tools", "Woodcarver's Tools", "Disguise Kit", "Forgery Kit", "Gaming Set", "Herbalism Kit", "Musical Instrument", "Navigator's Tools", "Poisoner's Kit", "Thieves' Tools"]
const gearList = ["Acid", "Alchemist's Fire", "Ammunition", "Antitoxin", "Arcane Focus", "Backpack", "Ball Bearings", "Barrel", "Basket", "Bedroll", "Bell", "Blanket", "Block and Tackle", "Book", "Glass Bottle", "Bucket", "Burglar's Pack", "Caltrops", "Candle", "Crossbow Bolt Case", "Map Case", "Scroll Case", "Chain", "Chest", "Climber's Kit", "Fine Clothes", "Traveler's Clothes", "Component Pouch", "Costume", "Crowbar", "Diplomat's Pack", "Druidic Focus", "Dungeoneer's Pack", "Entertainer's Pack", "Explorer's Pack", "Flask", "Grappling Hook", "Healer's Kit", "Holy Symbol", "Holy Water", "Hunting Trap", "Ink", "Ink Pen", "Jug", "Ladder", "Lamp", "Bullseye Lantern", "Hooded Lantern", "Lock", "Magnifying Glass", "Manacles", "Map", "Mirror", "Net", "Oil", "Paper", "Parchment", "Perfume", "Basic Poison", "Pole", "Iron Pot", "Potion of Healing", "Pouch", "Priest's Pack", "Quiver", "Portable Ram", "Rations", "Robe", "Rope", "Sack", "Scholar's Pack", "Shovel", "Signal Whistle", "Spell Scroll", "Iron Spikes", "Spyglass", "String", "Tent", "Tinderbox", "Torch", "Vial", "Waterskin"]
const commonList = ["Armor of Gleaming", "Bead of Nourishment", "Bead of Refreshment", "Boots of False Tracks", "Candle of the Deep", "Cast-Off Armor", "Charlatan's Die", "Cloak of Billowing", "Cloak of Many Fashions", "Clockwork Amulet", "Clothes of Mending", "Dark Shard Amulet", "Dread Helm", "Ear Horn of Hearing", "Enduring Spellbook", "Ersatz Eye", "Hat of Vermin", "Hat of Wizardry", "Heward's Handy Spice Pouch", "Horn of Silent Alarm", "Instrument of Illusions", "Instrument of Scribing", "Lock of Trickery", "Moon-Touched Sword", "Mystery Key", "Orb of Direction", "Orb of Time", "Perfume of Bewitching", "Pipe of Smoke Monsters", "Pole of Angling", "Pole of Collapsing", "Potion of Climbing", "Potion of Comprehension", "Pot of Awakening", "Prosthetic Limb", "Rival Coin", "Rope of Mending", "Ruby of the War Mage", "Shield of Expression", "Silvered Weapon", "Smoldering Armor", "Staff of Adornment", "Staff of Birdcalls", "Staff of Flowers", "Talking Doll", "Tankard of Sobriety", "Veteran's Cane", "Walloping Ammunition", "Wand of Conducting", "Wand of Pyrotechnics"]
const uncommonList = ["Adamantine Armor", "Adamantine Weapon", "Alchemy Jug", "Ammunition +1", "Amulet of Proof against Detection and Location", "Baba Yaga's Dancing Broom", "Bag of Holding", "Bag of Tricks", "Boots of Elvenkind", "Boots of Striding and Springing", "Boots of the Winterlands", "Bracers of Archery", "Brooch of Shielding", "Broom of Flying", "Cap of Water Breathing", "Circlet of Blasting", "Cloak of Elvenkind", "Cloak of Protection", "Cloak of the Manta Ray", "Decanter of Endless Water", "Deck of Illusions", "Driftglobe", "Dust of Disappearance", "Dust of Dryness", "Dust of Sneezing and Choking", "Elemntal Gem", "Enspelled Armor Uncommon", "Uncommon Enspelled Staff", "Enspelled Weapon Uncommon", "Eversmoking Bottle", "Eyes of Charming", "Eyes of Minute Seeing", "Eyes of the Eagle", "Silver Raven Figurine of Wondrous Power", "Gauntlets of Ogre Power", "Gem of Brightness", "Gloves of Missile Snaring", "Gloves of Swimming and Climbing", "Gloves of Thievery", "Goggles of Night", "Hag Eye", "Hat of Disguise", "Headband of Intellect", "Helm of Comprehending Languages", "Helm of Telepathy", "Immovable Rod", "Doss Lute", "Fochlucan Bandore", "Mac-Fuirmidh Cittern", "Javelin of Lightning", "Keoghtom's Ointment", "Lantern of Revealing", "Mariner's Armor", "Medallion of Thoughts", "Nature's Mantle", "Necklace of Adaptation", "Oil of Slipperiness", "Pearl of Power", "Periapt of Health", "Periapt of Wound Closure", "Philter of Love", "Pipes of Haunting", "Pipes of the Sewers", "Potion of Animal Friendship", "Potion of Fire Breath", "Potion of Hill Giant Strength", "Potion of Growth", "Potion of Poison", "Potion of Puglism", "Potion of Resistance", "Potion of Water Breathing", "Quaal's Feather Token Uncommon", "Quiver of Ehlonna", "Ring of Jumping", "Ring of Mind Shielding", "Ring of Swimming", "Ring of Warmth", "Ring of Water Walking", "Robe of Useful Items", "Rod of the Pact Keeper +1", "Rope of Climbing", "Saddle of the Cavalier", "Sending Stones", "Sentinel Shield", "Shield +1", "Slippers of Spider Climbining", "Staff of the Adder", "Staff of the Python", "Stone of Good Luck", "Sword of Vengeance", "Trident of Fish Command", "Wand of Magic Detection", "Wand of Magic Missiles", "Wand of Secrets", "Wand of the War Mage +1", "Wand of Web", "Weapon +1", "Weapon of Warning", "Wind Fan", "Winged Boots", "Wraps of Unarmed Power +1"]
const rareList = ["Ammunition +2", "Amulet of Health", "Armor +1", "Armor of Resistance", "Armor of Vulnerability", "Arrow-Catching Shield", "Bag of Beans", "Belt of Dwarvenkind", "Belt of Hill Giant Strength", "Berserker Axe", "Boots of Levitation", "Boots of Speed", "Bowl of Commanding Water Elementals", "Bracers of Defense", "Brazier of Commanding Fire Elementals", "Cape of the Mountebank", "Censer of Controlling Air Elementals", "Chime of Opening", "Cloak of Displacement", "Cloak of the Bat", "Cube of Force", "Cube of Summoning", "Daern's Instant Fortress", "Dagger of Venom", "Dimensional Shackles", "Dragon Slayer", "Elixir of Health", "Elven Chain", "Enspelled Armor Rare", "Rare Enspelled Staff", "Enspelled Weapon Rare", "Figurine of Wondrous Power Rare", "Flame Tongue", "Folding Boat", "Gem of Seeing", "Giant Slayer", "Glamoured Studded Leather", "Helm of Teleportation", "Heward's Handy Haversack", "Horn of Blasting", "Silver Horn of Valhalla", "Brass Horn of Valhalla", "Horseshoes of Speed", "Canaith Mandolin", "Cli Lyre", "Ioun Stone Rare", "Iron Bands of Bilarro", "Mace of Disruption", "Mace of Smiting", "Mace of Terror", "Mantle of Spell Resistance", "Necklace of Fireballs", "Necklace of Prayer Beads", "Oil of Etherealness", "Periapt of Proof against Poison", "Portable Hole", "Potion of Clairvoyance", "Potion of Diminution", "Potion of Gaseous Form", "Potion of Frost Giant Strength", "Potion of Stone Giant Strength", "Potion of Fire Giant Strength", "Potion of Heroism", "Potion of Invisibility", "Potion of Invulnerability", "Potion of Mind Reading", "Quaal's Feather Token Rare", "Ring of Animal Influence", "Ring of Evasion", "Ring of Feather Falling", "Ring of Free Action", "Ring of Protection", "Ring of Resistance", "Ring of Spell Storing", "Ring of the Ram", "Ring of X-ray Vision", "Robe of Eyes", "Rod of Rulership", "Rod of the Pact Keeper +2", "Rope of Entanglement", "Scroll of Protection", "Shield +2", "Shield of Missile Attraction", "Staff of Charming", "Staff of Swarming Insects", "Staff of the Woodlands", "Staff of Withering", "Stone of Controlling Earth Elementals", "Sun Blade", "Sword of Life Stealing", "Tentacle Rod", "Vicious Weapon", "Wand of Binding", "Wand of Enemy Detection", "Wand of Fear", "Wand of Fireballs", "Wand of Lightning Bolts", "Wand of Paralysis", "Wand of Wonder", "Weapon +2", "Wings of Flying"]
const phenomenalList = ["Ammunition +3", "Ammunition of Slaying", "Amulet of the Planes", "Animated Shield", "Armor +2", "Bag of Devouring", "Belt of Frost Giant Strength", "Belt of Stone Giant Strength", "Belt of Fire Giant Strength", "Candle of Invocation", "Carpet of Flying", "Cauldron of Rebirth", "Cloak of Arachnida", "Crystal Ball", "Dancing Sword", "Demon Armor", "Dragon Scale Mail", "Dwarven Plate", "Dwarven Thrower", "Efreeti Bottle", "Energy Longbow", "Energy Shortbow", "Enspelled Armor Very Rare", "Enspelled Weapon Very Rare", "Executioner's Axe", "Obsidian Steed Figurine of Wondrous Power", "Frost Brand", "Hat of Many Spells", "Helm of Brilliance", "Bronze Horn of Valhalla", "Horseshoes of a Zephyr", "Ioun Stone Very Rare", "Lute of Thunderous Thumping", "Manual of Bodily Health", "Manual of Gainful Exercise", "Manual of Golems", "Manual of Quickness of Action", "Mirror of Life Trapping", "Nine Lives Stealer", "Nolzur's Marvelous Pigments", "Oathbow", "Oil of Sharpness", "Potion of Flying", "Potion of Cloud Giant Strength", "Potion of Greater Invisibility", "Potion of Longevity", "Potion of Speed", "Potion of Vitality", "Quarterstaff of the Acrobat", "Ring of Regeneration", "Ring of Shooting Stars", "Ring of Telekenisis", "Robe of Scintillating Colors", "Robe of Stars", "Rod of Absorption", "Rod of Alertness", "Rod of Security", "Rod of the Pact Keeper +3", "Scimitar of Speed", "Shield +3", "Shield of the Cavalier", "Spellguard Shield", "Spirit Board", "Staff of Fire", "Staff of Frost", "Staff of Power", "Staff of Striking", "Staff of Thunder and Lightning", "Sword of Sharpness", "Thunderous Greatclub", "Tome of Clear Thought", "Tome of Leadership and Influence", "Tome of Understanding", "Wand of Polymorph", "Weapon +3"]
const legendaryList = ["Apparatus of Kwalish", "Armor +3", "Armor of Invulnerability", "Belt of Cloud Giant Strength", "Belt of Storm Giant Strength", "Cloak of Invisibility", "Crystal Ball of Mind Reading", "Crystal Ball of Telepathy", "Crystal Ball of True Seeing", "Cubic Gate", "Deck of Many Things", "Defender", "Efreeti Chain", "Enspelled Armor Legendary", "Legendary Enspelled Staff", "Enspelled Weapon Legendary", "Hammer of Thunderbolts", "Holy Avenger", "Ioun Stone of Greater Absorption", "Ioun Stone of Mastery", "Ioun Stone of Regeneration", "Iron Flask", "Luck Blade", "Moonblade", "Plate Armor of Etherealness", "Potion of Storm Giant Strength", "Ring of Djinni Summoning", "Ring of Elemental Command", "Ring of Invisibility", "Ring of Spell Turning", "Ring of Three Wishes", "Robe of the Archmagi", "Rod of Lordly Might", "Rod of Resurrection", "Scarab of Protection", "Scroll of Titan Summoning", "Sovereign Glue", "Sphere of Annihilation", "Staff of the Magi", "Sword of Answering", "Talisman of Pure Good", "Talisman of the Sphere", "Talisman of Ultimate Evil", "Tome of the Stilled Tongue", "Universal Solvent", "Well of Many Worlds"]
const artifactList = ["Axe of the Dwarvish Lords", "Blackrazor", "Book of Exalted Deeds", "Book of Vile Darkness", "Demonomicon of Iggwilv", "Efreeti Chain", "Eye of Vecna", "Hand of Vecna", "Orb of Dragonkind", "Sword of Kas", "Wand of Orcus", "Wave", "Whelm"]

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
    //player
    state.show = "none"
    return `\n[It is ${possessiveName} turn]\n`
  } else if (activeCharacter.ally == false) {
    //enemy
    var characters = state.characters.filter(x => x.health > 0)
    characters.push(...state.allies.filter(x => x.health > 0))
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
        var spell = spell.substring(0, spell.length - diceMatches[0].length)
        if (hit) {
          var damage = calculateRoll(diceMatches[0])
          target.health = Math.max(target.health - damage, 0)

          text += `\n[Character AC: ${target.ac} Attack roll: ${attack}]\n`

          text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} for ${damage} damage!`
          
          if (target.health == 0) text += ` ${toTitleCase(target.name)} ${areWord} unconscious!\n`
          else text += ` ${toTitleCase(target.name)} ${areWord} at ${target.health} health.\n`
        } else text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} but misses!\n`
      }
    }
    return text
  } else {
    //ally
    var enemies = state.enemies.filter(x => x.health > 0)
    var target = enemies[getRandomInteger(0, enemies.length - 1)]
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

        text += `\n[Enemy AC: ${target.ac} Attack roll: ${attack}]\n`

        text += `${activeCharacterName} attacks ${targetNameAdjustedCase} for ${damage} damage!\n`
        if (target.health == 0) text += ` ${toTitleCase(target.name)} ${areWord} unconscious! \n`
        else text += ` ${toTitleCase(target.name)} ${areWord} at ${target.health} health.\n`
      } else text += `${activeCharacterName} attacks ${targetNameAdjustedCase} but misses!\n`
    } else {
      var spell = activeCharacter.spells[getRandomInteger(0, activeCharacter.spells.length - 1)]
      var diceMatches = spell.match(/(?<=^.*)\d*d\d+((\+|-)\d+)?$/gi)
      if (diceMatches == null) text += `${activeCharacterName} casts spell ${spell}!`
      else {
        var spell = spell.substring(0, spell.length - diceMatches[0].length)
        if (hit) {
          var damage = calculateRoll(diceMatches[0])
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
          encounter.text = "Character ate some bad beans and now it's finally catching up to them."
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
          encounter.text = "Character spots a gold tooth! Score!!!"
          break
        case 6:
          encounter.text = "Suddenly, everyone has to take a dump really bad."
          break
        case 7:
          encounter.text = "The party is pretty hungry. Everyone is looking at eachother ravenously. Something needs to happen and fast."
          break
        case 8:
          encounter.text = "Where does the ruler keep his armies? Up his sleevies!"
          break
        case 9:
          encounter.text = "Suddenly, the AI goes crazy and starts spewing nonsense for several sentences! ;;Ignore all player actions."
          break
        case 10:
          encounter.text = "A mischievous spell is cast on the party! They are now transformed into baby. \"Gah gah!\""
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
          encounter.text = "Batman has emerged from behind a rock. He wishes to join your squad."
          break
        case 15:
          encounter.text = "Without warning, you are granted immeasurable power by a genie! You may be granted one wish. However, the genie is hard of hearing and anything you wish for will be misinterpreted in the worst possible way."
          break
        case 16:
          encounter.text = "A cute pupper has caught your scent and is now following you. Unfortunately, all it does is yip all the time and will not stop."
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
          encounter.text = "You find a fully working AK47 with a cache of ammo and grenades!"
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
          encounter.text = "You are, by some twist of cosmic fate, granted the modern knowledge of electricty and computer technology. What will you use this newfound power for?"
          break
        case 47:
          encounter.text = "Glyphs etched in stone have granted you one super power. However, whatever power you choose has an incredible downside."
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
          encounter.text = "A team of mal-intended turkeys approach!"
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
          encounter.text = "An ensorcelled fountain pen is on its way to write you out of existence!"
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
          encounter.text = "A racoon suddenly appears and slaps you in the face. It's clear that it is challenging you to a duel."
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
          encounter.text = "You encounter an accident prone ninja! It clumsily brandishes its weapon but sends it clattering onto the floor before it. The ninja apologizes profusely as it scrambles back into attack position."
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
          encounter.text = "The evil wizard has conjured enemies to slay you. He did not send his best."
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
          encounter.text = "There is a curious contraption encasing what appears to be a small treasure chest."
          break
        case 1:
          encounter.text = "A ruined wall lined with a series of holes runs parallel to you. The distinct outline of pressure plates mark the way ahead."
          break
        case 2:
          encounter.text = "A rotting corpse lays here. It appears to be of an adventurer like you."
          break
        case 3:
          encounter.text = "A hive of bees hangs not too far from your location."
          break
        case 4:
          encounter.text = "A dog is sitting on its hind legs, looking at you quizzically."
          break
        case 5:
          encounter.text = "A dog is sitting on its hind legs, looking at you quizzically."
          break
        case 6:
          encounter.text = "You notice runes written in a spiralling pattern on the ground."
          break
        case 7:
          encounter.text = "Bones are laid out in a geometric pattern. It appears to be a site of a mysterious ritual."
          break
        case 8:
          encounter.text = "The unmistakable sound of ticking can be heard here."
          break
        case 9:
          encounter.text = "You see a chest with a broken padlock placed conspicuously in the clearing."
          break
        case 10:
          encounter.text = "A warrior close to death gestures for you to draw near."
          break
        case 11:
          encounter.text = "A shrine built to honor a forgotten god has been erected here."
          break
        case 12:
          encounter.text = "Evidence of a struggle is apparent. Marks line the ground followed by a splatter of blood."
          break
        case 13:
          encounter.text = "Tracks lead away from you. Someone has been here before..."
          break
        case 14:
          encounter.text = "An old suit of armor lies here. Nothing remains inside it except the distinct the smell of blood and charred meat."
          break
        case 15:
          encounter.text = "A glittering in the distance catches your eye."
          break
        case 16:
          encounter.text = "A spread of food is arranged on tables before you. An absolute feast! Though it is very out of place here..."
          break
        case 17:
          encounter.text = "\"Oink oink!\" How did a pig get here?"
          break
        case 18:
          encounter.text = "Gold coins are strewn about. Who do they belong to?"
          break
        case 19:
          encounter.text = "A mysterious golden sprout is growing here."
          break
        case 20:
          encounter.text = "A gnome merchant greets you with a sly smile."
          break
        case 21:
          encounter.text = "A curious anvil and hammer are situated here. The markings in its cold metal must have some significance."
          break
        case 22:
          encounter.text = "A sudden feeling of dread washes over you. A dark presence looms in this place."
          break
        case 23:
          encounter.text = "A grave of what appears to be a great wizard is before you."
          break
        case 24:
          encounter.text = "A cheap box has been thrown to the side. An apparent discard."
          break
        case 25:
          encounter.text = "A sack of rotten fruit is stinking up the place."
          break
        case 26:
          encounter.text = "The floor is covered with mushrooms. What are their properties?"
          break
        case 27:
          encounter.text = "You hear the sound of flowing water."
          break
        case 28:
          encounter.text = "Barrels of wine are gathered in rows."
          break
        case 29:
          encounter.text = "The abandoned laboratory of an alchemist resides here."
          break
        case 30:
          encounter.text = "Various herbs and alchemical ingredients are arranged in neat pouches. Vials with unknown ingredients are aligned across a tabletop."
          break
        case 31:
          encounter.text = "A library of ancient texts resides in this place."
          break
        case 32:
          encounter.text = "You encounter a frightened young girl who is incredibly lost."
          break
        case 33:
          encounter.text = "An ornate chest is set on top of pedestal. The locking mechanism is unlike anything you've seen before."
          break
        case 34:
          encounter.text = "The casket of a long dead king lays upon a mound. It's reinforced with steel and the lid looks incredibly heavy."
          break
        case 35:
          encounter.text = "In the center of the open space before you is a glass orb. It seems to levitate by some other worldly power."
          break
        case 36:
          encounter.text = "A traveling bard waves at you. \"Hello there!\""
          break
        case 37:
          encounter.text = "A person of royal distinction is here. You recognize the crest."
          break
        case 38:
          encounter.text = "A skeleton warrior is alerted by your presence. \"Wait!\" it pleads with its harsh, gravely voice."
          break
        case 39:
          encounter.text = "A deer! It's a deer! And it's not afraid of you. How peculiar!"
          break
        case 40:
          encounter.text = "A pool of water is at the center of this place."
          break
        case 41:
          encounter.text = "You are approached by a royal souting party. \"What are you doing here?\""
          break
        case 42:
          encounter.text = "You are ambushed by a group of forest elves! However, their serious faces soften when they realize who you are."
          break
        case 43:
          encounter.text = "A demonic blacksmith suddenly appears before you in a puff of smoke. What does he want?"
          break
        case 44:
          encounter.text = "A strange tree is growing right through the ground. It seems to be moving as if a silent wind is blowing through it."
          break
        case 45:
          encounter.text = "A wild horse seems to be trapped here."
          break
        case 46:
          encounter.text = "You think you hear the laughter of children, but you don't see anyone. It could just be your imagination."
          break
        case 47:
          encounter.text = "Broken pottery is littered all over this place."
          break
        case 48:
          encounter.text = "This was once a prison. Iron bars and the ruins of gated walls abound."
          break
        case 49:
          encounter.text = "It looks like there was a cave in. Through the rubble you hear the faint sound of someone calling out."
          break
        case 50:
          encounter.text = "A vengeful spirit is disturbed by your presence!"
          encounter.enemies = [
            createEnemy("Specter", calculateRoll("5d8"), 12, 4, "1d10", "d20+2", "Life Drain1d10")
          ]
          break
        case 51:
          encounter.text = "An awakened shrub shifts towards you. It seems like it was guarding this place."
          encounter.enemies = [
            createEnemy("Awakened Shrub", calculateRoll("2d+6"), 9, -3, "1d4-1", "d20-1")
          ]
          break
        case 52:
          encounter.text = "Brigands are attacking!"
          encounter.enemies = [
            createEnemy("Brigand A", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20"),
            createEnemy("Brigand B", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20"),
            createEnemy("Brigand C", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20")
          ]
          break
        case 53:
          encounter.text = "A wounded black bear is here. Baring its teeth, it seems to consider you as a threat."
          encounter.enemies = [
            createEnemy("Black Bear", calculateRoll("3d8+6"), 11, 6, "2d4+2", "d20")
          ]
          break
        case 54:
          encounter.text = "An angry boar is charging at you!"
          encounter.enemies = [
            createEnemy("Boar", calculateRoll("2d8+2"), 11, 4, "1d6+1", "d20")
          ]
          break
        case 55:
          encounter.text = "Two cockatrices have somehow flanked you on both sides. Prepare for battle!"
          encounter.enemies = [
            createEnemy("Cockatrice A", calculateRoll("6d6+6"), 11, 1, "1d4+1", "d20+1", "Petrifying Bite1d4+1"),
            createEnemy("Cockatrice B", calculateRoll("6d6+6"), 11, 1, "1d4+1", "d20+1", "Petrifying Bite1d4+1")
          ]
          break
        case 56:
          encounter.text = "You've fallen into a pit of snakes. A group of them slither up to you, winding up to strike."
          encounter.enemies = [
            createEnemy("Snake", calculateRoll("2d10+2"), 12, 6, "1d8+2", "d20+2", "Poison Bite2d4+1")
          ]
          break
        case 57:
          encounter.text = "A dire wolf has caught your scent. It's going to make its move!"
          encounter.enemies = [
            createEnemy("Dire Wolf", calculateRoll("5d10+10"), 14, 8, "2d6+3", "d20+2")
          ]
          break
        case 58:
          encounter.text = "The remarkable pattern on the skin of this giant frog is a clear indication that it's poisonous. Watch out!"
          encounter.enemies = [
            createEnemy("Giant Frog", calculateRoll("4d8"), 11, 4, "1d6+1", "d20+1", "Poison2d4+1")
          ]
          break
        case 59:
          encounter.text = "A very intricate gargoyle statue has been placed here as a centerpiece in an altar. Without warning, it turns its head toward you and its lips turn upwards into an evil grin."
          encounter.enemies = [
            createEnemy("Gargoyle", calculateRoll("7d8+21"), 15, 6, "1d6+2", "d20")
          ]
          break
        case 60:
          encounter.text = "You have disturbed an ancient burial ground! Ghouls have risen from their eternal sleep."
          encounter.enemies = [
            createEnemy("Ghoul A", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Ghoul B", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Ghoul C", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2"),
            createEnemy("Ghoul D", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2")
          ]
          break
        case 61:
          encounter.text = "A giant badger has claimed this plot of land and he'll be damned if he lets the likes of you tread all over it."
          encounter.enemies = [
            createEnemy("Giant Badger", calculateRoll("2d8+4"), 10, 4, "1d6+1", "d20")
          ]
          break
        case 62:
          encounter.text = "A giant centipede crawls into view. Its terrifying shriek makes your skin crawl. Prepare yourself!"
          encounter.enemies = [
            createEnemy("Giant Centipede", calculateRoll("1d6+1"), 13, 1, "1d4+2", "d20+2")
          ]
          break
        case 63:
          encounter.text = "A feral pack of hyenas have nested here. They smell your blood..."
          encounter.enemies = [
            createEnemy("Hyena A", calculateRoll("1d8+1"), 11, 2, "1d6", "d20+1"),
            createEnemy("Hyena B", calculateRoll("1d8+1"), 11, 2, "1d6", "d20+1"),
            createEnemy("Giant Hyena", calculateRoll("6d10+12"), 12, 5, "2d6+3", "d20+2")
          ]
          break
        case 64:
          encounter.text = "A swarm of rats are sweeping across the ground and heading toward you!"
          encounter.enemies = [
            createEnemy("Swarm of Rats", calculateRoll("7d8-7"), 10, 1, "2d6", "d20")
          ]
          break
        case 65:
          encounter.text = "A group of gnolls have coalesced here. Your arrival has activated their senses."
          encounter.enemies = [
            createEnemy("Gnoll A", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1"),
            createEnemy("Gnoll B", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1"),
            createEnemy("Gnoll C", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1")
          ]
          break
        case 66:
          encounter.text = "The group of goblins are as surprised to see you as you are to see them. Get ready!"
          encounter.enemies = [
            createEnemy("Goblin A", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Goblin B", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Goblin C", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2"),
            createEnemy("Goblin D", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2")
          ]
          break
        case 67:
          encounter.text = "A sweet lullaby carries through the air. You are enchanted by its melody. But wait! It's a harpy's luring song. Resist!"
          encounter.enemies = [
            createEnemy("Harpy", calculateRoll("7d8+7"), 11, 4, "2d4+1", "d20+1", "Luring Song")
          ]
          break
        case 68:
          encounter.text = "You spot a hobgoblin crouched over his battle axe. As he sharpens its blade, he menaces at you, \"You shouldn't have come here, meat.\""
          encounter.enemies = [
            createEnemy("Hobgoblin", calculateRoll("2d8+2"), 18, 4, "1d8+1", "d20+1")
          ]
          break
        case 69:
          encounter.text = "A kobold sticks his head out from barrel. Aware of your presence, it signals to the rest of the pack."
          encounter.enemies = [
            createEnemy("Kobold A", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Kobold B", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Kobold C", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2"),
            createEnemy("Kobold D", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2")
          ]
          break
        case 70:
          encounter.text = "A magically entranced Satyr has come into view. Some dark force is compelling it to attack you!"
          encounter.enemies = [
            createEnemy("Satyr", calculateRoll("5d8"), 15, 4, "1d8+2", "d20+3")
          ]
          break
        case 71:
          encounter.text = "A skeleton archer has the drop on you! It looses a bolt that very narrowly misses its mark. Get ready for a fight!"
          encounter.enemies = [
            createEnemy("Skeleton", calculateRoll("2d8+4"), 13, 5, "1d6+2", "d20+2")
          ]
          break
        case 72:
          encounter.text = "A group of stirge descend on you. Their stink should have given them away."
          encounter.enemies = [
            createEnemy("Strige A", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Strige B", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Strige C", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6")
          ]
          break
        case 73:
          encounter.text = "You have never seen a Worg this large before. Its snarling teeth glint in the light."
          encounter.enemies = [
            createEnemy("Worg", calculateRoll("4d10+4"), 13, 8, "2d6+3", "d20+1")
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
          encounter.text = "Your arrival has interrupted a dark acolyte's ritual. His eyes go steely as he plans his retribution."
          encounter.enemies = [
            createEnemy("Dark Acolyte", calculateRoll("2d8"), 10, 2, "1d4", "d20", "Sacred Flame2d6", "Bless")
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
          encounter.text = "A crowd of cultists walk into view. Their aim is clear: to sacrifice you as an offering to their god. Attack before you are torn limb from limb!"
          encounter.enemies = [
            createEnemy("Cultist", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 78:
          encounter.text = "A gnoll has strayed from its herd. You take the opportunity to attack before it alerts the others."
          encounter.enemies = [
            createEnemy("Gnoll", calculateRoll("5d8"), 15, 4, "1d4+2", "d20+1")
          ]
          break
        case 79:
          encounter.text = "A majestic white wolf has been tracking you for some time. It can no longer ignore its hunger pangs and begins racing at you."
          encounter.enemies = [
            createEnemy("White Wolf", calculateRoll("2d8+2"), 13, 7, "2d4+2", "d20+2")
          ]
          break
        case 80:
          encounter.text = "An orc looks up from his fire. You're spotted!"
          encounter.enemies = [
            createEnemy("Orc", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1")
          ]
          break
        case 81:
          encounter.text = "A wyrmling is spotted circling around you. It's coming in for an attack!"
          encounter.enemies = [
            createEnemy("Wyrmling", calculateRoll("3d8+3"), 16, 4, "1d10+2", "d20")
          ]
          break
        case 82:
          encounter.text = "A pack of death dogs are directly ahead. There is no avoiding their dark gaze. Prepare for combat!"
          encounter.enemies = [
            createEnemy("Death Dog A", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog B", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog C", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog D", calculateRoll("6d8+12"), 12, 6, "1d6+2", "d20+2", "Diseased Bite2d6+2")
          ]
          break
        case 83:
          encounter.text = "The deep gnome mercenary looks at you with a sinister scowl. \"I don't very much like you.\" He brandishes a sword and prepares to attack you."
          encounter.enemies = [
            createEnemy("Deep Gnome Merc", calculateRoll("3d6+6"), 15, 6, "1d8+2", "d20+2", "Poison Dart1d4+2", "Stone Camoflage")
          ]
          break
        case 84:
          encounter.text = "That stink! What is it? A dretch raises its head, clearly alarmed by your presence. It's going to rush you!"
          encounter.enemies = [
            createEnemy("Dretch", calculateRoll("4d6+4"), 11, 2, "2d4", "d20")
          ]
          break
        case 85:
          encounter.text = "A drow raider! Take cover!"
          encounter.enemies = [
            createEnemy("Drow Raider", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2")
          ]
          break
        case 86:
          encounter.text = "It's not your imagination: a gray ooze is seeping through the cracks. It coalesces into a hideous aberration before you."
          encounter.enemies = [
            createEnemy("Gray Ooze", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2", "Corrode Metal")
          ]
          break
        case 87:
          encounter.text = "You catch a Grimlock tearing meat from the leg of some hapless victim. It drops it immediately once it spots you."
          encounter.enemies = [
            createEnemy("Grimlock", calculateRoll("2d8+2"), 11, 8, "1d4+3", "d20+1")
          ]
          break
        case 88:
          encounter.text = "Who summoned these homunculi? They don't look friendly. Suddenly, a loud shriek!"
          encounter.enemies = [
            createEnemy("Homunculus A", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus B", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus C", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus D", calculateRoll("2d4"), 13, 1, "1d10", "d20+2", "Poison Bite1d10")
          ]
          break
        case 89:
          encounter.text = "A group of lemures block the way. Their hideous forms disgust you."
          encounter.enemies = [
            createEnemy("Lemure", calculateRoll("3d8"), 7, 3, "1d4", "d20-3")
          ]
          break
        case 90:
          encounter.text = "The sulfur stink reaches your nose first, then the sight of them: a group of Magmin are on approach."
          encounter.enemies = [
            createEnemy("Magmin A", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Magmin B", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Magmin C", calculateRoll("2d6+2"), 14, 2, "2d6", "d20+2", "Fire Touch3d6")
          ]
          break
        case 91:
          encounter.text = "Out of the corner of your eye you spot a dark figure moving. \"Quasits!\" You prepare for the ambush."
          encounter.enemies = [
            createEnemy("Quasit A", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit B", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit C", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit D", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit E", calculateRoll("3d4"), 13, 2, "1d4+3", "d20+", "Invisibility", "Scare")
          ]
          break
        case 92:
          encounter.text = "A rust monster! A killing blow will corrode any common weapons."
          encounter.enemies = [
            createEnemy("Rust Monster", calculateRoll("5d8+5"), 14, 4, "1d8+1", "d20+1")
          ]
          break
        case 93:
          encounter.text = "An undead specter reveals itself. It's malevolence can be felt in your bones."
          encounter.enemies = [
            createEnemy("Specter", calculateRoll("5d8"), 12, 4, "3d6", "d20+2", "Life Drain3d6", "Incorporeal Movement")
          ]
          break
        case 94:
          encounter.text = "Enchanted weasels are commanded to attack you. Oh god, they're everywhere!"
          encounter.enemies = [
            createEnemy("Weasel A", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel B", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel C", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel D", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel E", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel F", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel G", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel H", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel I", calculateRoll("1d4-1"), 13, 1, "1", "d20+3"),
            createEnemy("Weasel J", calculateRoll("1d4-1"), 13, 1, "1", "d20+3")
          ]
          break
        case 95:
          encounter.text = "An awakened tree lumbers toward you. Apparently, this is sacred ground that you tarnish with your presence."
          encounter.enemies = [
            createEnemy("Awakened Tree", calculateRoll("7d12+14"), 13, 10, "3d6+4", "d20-2")
          ]
          break
        case 96:
          encounter.text = "A centaur is leading up to you. It may have been tracking your for some time. Get ready!"
          encounter.enemies = [
            createEnemy("Centaur", calculateRoll("6d10+12"), 12, 10, "2d6+4", "d20+2", "Charge3d6")
          ]
          break
        case 97:
          encounter.text = "A gelatinous cube occupies this space. It's wobbling hatefully toward you!"
          encounter.enemies = [
            createEnemy("Gelatinous Cube", calculateRoll("8d10+40"), 6, "3d6", "d20-4", "Engulf3d6")
          ]
          break
        case 98:
          encounter.text = "A ghast curls its disgusting tongue, tasting the air. Suddenly, it turns toward you!"
          encounter.enemies = [
            createEnemy("Ghast", calculateRoll("8d8"), 13, 6, "2d8+3", "d20+3")
          ]
          break
        case 99:
          encounter.text = "An orc war party comes upon you!"
          encounter.enemies = [
            createEnemy("Orc A", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Orc B", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Orc C", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1"),
            createEnemy("Orc D", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1")
          ]
          break
      }
      break
    case "medium":
      if (encounter.cr == null) encounter.cr = 5
      multiplier = 1 + (encounter.cr - 5) / 10
      switch (getRandomInteger(0, 99)) {
        case 0:
          encounter.text = "Wealth beyond imagining! The floors and shelves of this place are lined with golden trinkets and exquisite curiosities. However, a lone spectre resides in the center. Ominously, it states, \"You may choose one.\""
          break
        case 1:
          encounter.text = "Three pillars stand tall here. You can barely make out the inscriptions on each."
          break
        case 2:
          encounter.text = "A wheel of smelly cheese is seen here. Its owner is long gone."
          break
        case 3:
          encounter.text = "Three bundles of hemp rope have been abandoned here. Someone must have been preparing for a climb."
          break
        case 4:
          encounter.text = "A clay pot is spotted. Within it, a mysterious red powder."
          break
        case 5:
          encounter.text = "A spade and shovel are embedded into the dirt here."
          break
        case 6:
          encounter.text = "Sacks of useless goods are found here. Something does catch your eye, however. A quiver of glistening arrows shimmers in the light."
          break
        case 7:
          encounter.text = "A tailor of some sort must have worked here because there is all manner of clothing lying about."
          break
        case 8:
          encounter.text = "Shoes. Just a pair of shoes sitting on the ground in defiance of any reason or logical explanation."
          break
        case 9:
          encounter.text = "The skeletal remains of what appears to be a dignified noble. His boisterous signet ring demands your attention as if it were calling out to you."
          break
        case 10:
          encounter.text = "A random lever has been constructed here. What does it connect to?"
          break
        case 11:
          encounter.text = "Gears are turning. Their mechnical clicking is fully apparent as you enter the area. Yet nothing is in sight."
          break
        case 12:
          encounter.text = "A trap! You only have moments to react."
          break
        case 14:
          encounter.text = "A crystaline structure pulses with an other-worldly light. It does so even more rapidly as you approach. The tell-tale signs of magical defenses coming online spell certain doom for the party."
          break
        case 15:
          encounter.text = "A decaying bookshelf with numerless tomes rest here. One book seems to be made out of a strange leather unlike the others. Almost on cue, it falls off the shelf, pages flipping through the air dramatically."
          break
        case 16:
          encounter.text = "There is nothing of note here. Or is there?"
          break
        case 17:
          encounter.text = "A tear in space and time. It's as if the heavens crack open before you. A thunderous boom announces the opening of a portal. To where? No one could know. The portal does not look stable and could close at any time."
          break
        case 18:
          encounter.text = "Spikes line this place. That could only mean one thing..."
          break
        case 19:
          encounter.text = "A depression in the ground indicates something to you."
          break
        case 20:
          encounter.text = "A thick mist covers this area. It defies any meteorlogical explanation."
          break
        case 21:
          encounter.text = "An abundance of plants have grown here. A great variety of flora of all types overwhelm your senses."
          break
        case 22:
          encounter.text = "A bard is playing a song in the distance. You recognize the tune."
          break
        case 23:
          encounter.text = "A tiefling refugee races toward you. \"Please! Don't attack!\""
          break
        case 24:
          encounter.text = "A magical darkness shrouds this place. No torch, no magic seems to be able to penetrate it."
          break
        case 25:
          encounter.text = "An herbalist has set up shop here. \"Oh hello!\""
          break
        case 26:
          encounter.text = "A magical adept is fooling around with a door. It seems that he is stressed out. \"Come on, damn you!\""
          break
        case 27:
          encounter.text = "There is a great crevasse in blocking your path. It can be jumped over, but only just by your estimations."
          break
        case 28:
          encounter.text = "A mold has overcome this place. It's thick with bulbous growths."
          break
        case 29:
          encounter.text = "The ruins of someone's home are here."
          break
        case 30:
          encounter.text = "The ground appears to be made out of some sort of glass. You can't see var far through it, but you can't shake the feeling that something malevolent resides here."
          break
        case 31:
          encounter.text = "It looks like a refugee party was slain here. Who could have done such a heinous act?"
          break
        case 32:
          encounter.text = "Did that chest just move now? You investigate."
          break
        case 33:
          encounter.text = "There are so many trees here! Some of them even bear fruit."
          break
        case 34:
          encounter.text = "A medical examination table and assorted surgeon's equipment reside here."
          break
        case 35:
          encounter.text = "A warning is posted here: \"Wanted Criminal - Avoid direct contact\" A reward for information is listed."
          break
        case 36:
          encounter.text = "A machine of unknown origin resides here. It's connections and implements are far beyond anything you've seen before."
          break
        case 37:
          encounter.text = "Barrels of explosives are clearly labeled to be hazardous. It seems that they were rigged to explode all at once but failed to for some unknown reason."
          break
        case 38:
          encounter.text = "A strange feeling comes upon you. There is something significant here."
          break
        case 39:
          encounter.text = "Letters are drawn into the ground. What do they mean? Their placement does not immediately reach a logical explanation either."
          break
        case 40:
          encounter.text = "What is that high above you?"
          break
        case 41:
          encounter.text = "An armory of strange weapons and tools. These were not designed to be the size of the average man."
          break
        case 42:
          encounter.text = "A robber's stash. It seems so obvious. Could it be booby-trapped."
          break
        case 43:
          encounter.text = "A glass bottle filled with a mysterious liquid."
          break
        case 44:
          encounter.text = "A tiny creature is here. It's so adorable! Its is injured. Awww! But something isn't quite right about it..."
          break
        case 45:
          encounter.text = "Someone left a stack of books here. They're glowing."
          break
        case 46:
          encounter.text = "A twisted riddle is etched into the stone."
          break
        case 47:
          encounter.text = "A lone knight blocks your way. Can he be reasoned with?"
          break
        case 48:
          encounter.text = "A company of actors and comedians are here. This is very unordinary."
          break
        case 49:
          encounter.text = "A mundane chest with a thick padlock is here."
          break
        case 50:
          encounter.text = "A room with no door is here. How do you get in?"
          break
        case 51:
          encounter.text = "A berserker is arguing with his partner. \"No, I attack first and you sneak up on them!\""
          encounter.enemies = [
            createEnemy("Berserker A", calculateRoll("9d8+27"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Berserker B", calculateRoll("9d8+27"), 13, 5, "1d12+3", "d20+1")
          ]
          break
        case 52:
          encounter.text = "A cult is gathered here. They chant in an unfamiliar tongue. Their chants grow louder and louder as they approach you. Prepare for attack!"
          encounter.enemies = [
            createEnemy("Cultist A", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist B", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist C", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist D", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist E", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 53:
          encounter.text = "Slime covers everything and you can see what has caused it. A gelatinous cube approaches. Its quivering mass looms over you."
          encounter.enemies = [
            createEnemy("Gelatinous Cube", calculateRoll("8d10+40"), 6, "3d6", "d20-4", "Engulf3d6")
          ]
          break
        case 54:
          encounter.text = "\"Aye, trodden on my garden have ye'?\" The druid is greatly displeased. You see him reaching for his weapon."
          encounter.enemies = [
            createEnemy("Druid", calculateRoll("5d8+5"), 11, 4, "1d8", "d20+1", "Produce Flame3d6", "Bark Skin", "Entangle")
          ]
          break
        case 55:
          encounter.text = "A ghastly apparition is on approach. Each whisper you hear is a promise of pain."
          encounter.enemies = [
            createEnemy("Ghost", calculateRoll("10d8"), 11, 5, "4d6+3", "d20+1", "Withering Touch4d6+3", "Horrifying Visage", "Possession")
          ]
          break
        case 56:
          encounter.text = "The griffon guards its nest with fervent aggression. You are in its territory and its plenty pissed."
          encounter.enemies = [
            createEnemy("Griffon", calculateRoll("7d10+21"), 12, 6, "1d8+4", "d20+2")
          ]
          break
        case 57:
          encounter.text = "\"Don't touch that!\" You hear a voice scream out. Too late. The mimic has transformed from an inviting treasure chest into a horrific monster. Its tongue has grasped your leg and is pulling you into its teethy maw."
          encounter.enemies = [
            createEnemy("Mimic", calculateRoll("9d8+18"), 12, 5, "1d8+3", "d20+1", "Grapple")
          ]
          break
        case 58:
          encounter.text = "The ogre just grunts as it grabs its club. You all know what's coming. It's just a matter of who comes out on top now."
          encounter.enemies = [
            createEnemy("Ogre", calculateRoll("7d10+21"), 11, 6, "2d8+4", "d20-1")
          ]
          break
        case 59:
          encounter.text = "Don't let the beauty of the Pegasus entrap you. It is as deadly as it is magnificent. It comes into attack position."
          encounter.enemies = [
            createEnemy("Pegasus", calculateRoll("7d10+21"), 12, 6, "2d6+4", "d20+2")
          ]
          break
        case 60:
          encounter.text = "\"Stay back! I can't control it. I can't...\" His voice breaks off as he transforms into a hideous Wererat. Attack!"
          encounter.enemies = [
            createEnemy("Wererat", calculateRoll("6d8+6"), 12, 4, "1d4+2", "d20+2")
          ]
          break
        case 61:
          encounter.text = "Beware the Will-o'-Wisp! It has tricked many an adventurer into their deaths and one threatens to do the same here."
          encounter.enemies = [
            createEnemy("Wisp", calculateRoll("9d4"), 19, 4, "2d8", "d20+9")
          ]
          break
        case 62:
          encounter.text = "Its form is unreal. The xorn is an almagamation of claws, scales, and fangs. It somehow negotiates its confusion of limbs towards you with incredible speed."
          encounter.enemies = [
            createEnemy("Xorn", calculateRoll("7d8+42"), 19, 6, "1d6+3", "d20")
          ]
          break
        case 63:
          encounter.text = "The gaze of the Basilisk is even more deadly than its tooth and claw. This is evidenced by the petrified bodies strewn about the room."
          encounter.enemies = [
            createEnemy("Basilisk", calculateRoll("8d8+16"), 15, 5, "2d6+3", "d20-1")
          ]
          break
        case 64:
          encounter.text = "You try not to stare at the bearded devil, but his otherworldly appearance captures your gaze. He clearly has plans for you, and they aren't good."
          encounter.enemies = [
            createEnemy("Bearded Devil", calculateRoll("8d8+16"), 13, 5, "1d10+3", "d20+2")
          ]
          break
        case 65:
          encounter.text = "Your sudden arrival has caught the doppelganger off guard. It quickly transforms into a familiar form, but its too late. With its secret revealed, it has no choice but to attack."
          encounter.enemies = [
            createEnemy("Doppelganger", calculateRoll("8d8+16"), 14, 6, "1d6+4", "d20+4", "Shapechange")
          ]
          break
        case 66:
          encounter.text = "By some unholy ritual, hell hounds have arrived into the world. They scour the surface for any trace of you. Who sent them?"
          encounter.enemies = [
            createEnemy("Hell Hound A", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Breath6d6"),
            createEnemy("Hell Hound B", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Breath6d6"),
            createEnemy("Hell Hound C", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Breath6d6")
          ]
          break
        case 67:
          encounter.text = "The manticore is an unholy union of a human, lion, and a dragon. It sets its sights on you."
          encounter.enemies = [
            createEnemy("Manticore", calculateRoll("8d10+24"), 14, 5, "1d8+3", "d20+3")
          ]
          break
        case 68:
          encounter.text = "A cauldron and the unmistakable stink of cooking flesh. It's a green hag and she has a fixing for her next meal."
          encounter.enemies = [
            createEnemy("Green Hag", calculateRoll("11d8+33"), 17, 6, "2d8+4", "d20+1", "Minor Illusion", "Invisible Passage")
          ]
          break
        case 69:
          encounter.text = "The minotaur is here. No maze. Just the promise of your death. Defend yourself!"
          encounter.enemies = [
            createEnemy("Minotaur", calculateRoll("9d10+27"), 14, 6, "2d12+4", "d20")
          ]
          break
        case 70:
          encounter.text = "An ancient tomb. In it, a variety of bodies prepared for the afterlife. Meticulous care was put into protecting them from decay. Unfortunately for you, a curse has reanimated them. They only remember their taste for flesh now."
          encounter.enemies = [
            createEnemy("Mummy", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1")
          ]
          break
        case 71:
          encounter.text = "A nightmare trots into view. At first, it doesn't seem to be as terrifying as the stories you've heard. But once it draws close, you can see its rotting flesh, the flaming hooves and mane. It's built like a tank and it aims to tear you apart."
          encounter.enemies = [
            createEnemy("Nightmare", calculateRoll("8d10+24"), 13, 6, "2d8+4", "d20+2", "Ehtereal Stride")
          ]
          break
        case 72:
          encounter.text = "The fabled owlbear. There is no time to ponder how such a creation can come into being. You can only worry for your own safety as the owlbear is easily provoked."
          encounter.enemies = [
            createEnemy("Owlbear", calculateRoll("7d10+21"), 13, 7, "1d10+5", "initiative")
          ]
          break
        case 73:
          encounter.text = "A spectator! Run or fight. Either way, you'll never escape its deadly gaze."
          encounter.enemies = [
            createEnemy("Spectator", calculateRoll("6d8+12"), 14, 1, "1d6-1", "d20+2", "Confusion Ray", "Paralyzing Ray", "Fear Ray", "Wounding Ray3d10")
          ]
          break
        case 74:
          encounter.text = "This werewolf is not even trying to hide his transformation. He is proud of his feral proclivities and will bathe in your blood after he drives his clawed hand through your torso. Get ready!"
          encounter.enemies = [
            createEnemy("Werewolf", calculateRoll("9d8+18"), 12, 4, "18+2", "d20+1")
          ]
          break
        case 75:
          encounter.text = "Wights are not dangerous because they are some of the most powerful undead creatures. No. It's their intelligence and their endless campaign against the living. Fight!"
          encounter.enemies = [
            createEnemy("Wight", calculateRoll("6d8+18"), 14, 4, "1d8+2", "d20+1", "Life Drain4d6+3")
          ]
          break
        case 76:
          encounter.text = "This is not the natural habitat for the Yeti, and yet it is here. You can see your fate drawn in the blood of its other victims. There is no backing out now."
          encounter.enemies = [
            createEnemy("Yeti", calculateRoll("6d10+18"), 12, 6, "1d6+4", "d20+1")
          ]
          break
        case 77:
          encounter.text = "Wights are not dangerous because they are some of the most powerful undead creatures. No. It's their intelligence and their endless campaign against the living. Fight!"
          encounter.enemies = [
            createEnemy("Wight", calculateRoll("6d8+18"), 14, 4, "1d8+2", "d20+1", "Life Drain4d6+3")
          ]
          break
        case 78:
          encounter.text = "The blood-curdling scream is a clear sign: BANSHEES! Your death is soon to be added to the ledger."
          encounter.enemies = [
            createEnemy("Banshee A", calculateRoll("13d8"), 12, 4, "3d6+2", "d20+2", "Corrupting Touch3d6+2", "Wail3d6"),
            createEnemy("Banshee B", calculateRoll("13d8"), 12, 4, "3d6+2", "d20+2", "Corrupting Touch3d6+2", "Wail3d6")
          ]
          break
        case 79:
          encounter.text = "This hideous aberration before you must be a Chuul. Kill or be killed. There is no other choice here."
          encounter.enemies = [
            createEnemy("Chuul", calculateRoll("11d10+33"), 16, 6, "2d6+4", "d20", "Tentacles")
          ]
          break
        case 80:
          encounter.text = "The Incubus is a shapechanger. It has selected a shape that is pleasing to your eye, but you should know better than to fall for its wiles. Attack!"
          encounter.enemies = [
            createEnemy("Incubus", calculateRoll("12d8+12"), 15, 5, "1d6+3", "d20+3")
          ]
          break
        case 81:
          encounter.text = "The ghost is capable of possessing its victims. Be careful because you feel its control gripping at the edges of your mind now."
          encounter.enemies = [
            createEnemy("Ghost", calculateRoll("10d8"), 11, 5, "4d6+3", "d20+1", "Withering Touch4d6+3", "Horrifying Visage", "Possession")
          ]
          break
        case 82:
          encounter.text = "Succubus is a shapechanger. It has selected a shape that is pleasing to your eye, but you should know better than to fall for its wiles. Attack!"
          encounter.enemies = [
            createEnemy("Succubus", calculateRoll("12d8+12"), 15, 6, "1d6+3", "d20+3")
          ]
          break
        case 83:
          encounter.text = "The wereboar here has mastered control of his beastly transformation. He just doesn't like you. He's trotting at you at full speed."
          encounter.enemies = [
            createEnemy("Wereboar", calculateRoll("12d8+24"), 10, 5, "2d6+3", "d20", "Charge", "Tusk2d6+3")
          ]
          break
        case 84:
          encounter.text = "A red dragon wyrmling stalks this area. You were a fool to enter its domain."
          encounter.enemies = [
            createEnemy("Red Dragon Wyrmling", calculateRoll("10d8+30"), 17, 6, "1d10+4", "d20")
          ]
          break
        case 85:
          encounter.text = "Woosh! A flameskull whips into view. You feel the heat on your face even at this distance. It's time to attack!"
          encounter.enemies = [
            createEnemy("Flameskull", calculateRoll("9d4+18"), 13, 5, "3d6", "d20+3", "Fire Ray3d6", "Magic Missile3d10+2", "Fire Ball2d20")
          ]
          break
        case 86:
          encounter.text = "The pressure in the area suddenly changes. An air elemental materializes in front of you. It must be guarding this place from intruders."
          encounter.enemies = [
            createEnemy("Air Elemental", calculateRoll("12d10+24"), 15, 8, "2d8+5", "d20+5", "Whirlwind3d8+2")
          ]
          break
        case 87:
          encounter.text = "The barbed devil is quite deadly. It damages anyone that grapples with it. Beware, for one such creature stalks the land here."
          encounter.enemies = [
            createEnemy("Barbed Devil", calculateRoll("13d8+52"), 15, 6, "1d6+3", "d20+3", "Hurl Flame3d6")
          ]
          break
        case 88:
          encounter.text = "You hear a rumbling and the earth beneath you quakes. You dive out of the way as an earth elemental emerges right where you were standing. Fight!"
          encounter.enemies = [
            createEnemy("Earth Elemental", calculateRoll("12d10+60"), 17, 8, "2d8+5", "d20-1", "Earth Glide")
          ]
          break
        case 89:
          encounter.text = "Is it getting hot in here or is it just you? No, it's a Fire Elemental and it's ready to attack."
          encounter.enemies = [
            createEnemy("Fire Elemental", calculateRoll("12d10+36"), 13, 6, "2d6+3", "d20+3", "Fire Form")
          ]
          break
        case 90:
          encounter.text = "The flesh golem stumbles into your sight. It howls an unearthly cry. Every movement is pain. You would feel pity if you didn't have to fight for you life."
          encounter.enemies = [
            createEnemy("Flesh Golem", calculateRoll("11d8+44"), 9, 7, "2d8+4", "d20-1", "Berserk")
          ]
          break
        case 91:
          encounter.text = "The petrifying breath of the gorgon is well known. What isn't known is how one tracked you down here. Prepare to fight!"
          encounter.enemies = [
            createEnemy("Gorgon", calculateRoll("12d8+48"), 19, 8, "2d12+5", "d20", "Petrifying Breath")
          ]
          break
        case 92:
          encounter.text = "The hill giant lowers his club with a loud thud. Looking to your direction, he is amused by the new playthings he discovered. Be careful, he plays rough!"
          encounter.enemies = [
            createEnemy("Hill Giant", calculateRoll("10d12+40"), 13, 8, "3d8+5", "d20-1", "Throw Rock3d10+5")
          ]
          break
        case 93:
          encounter.text = "You were foolish to enter this place. A night hag has established a den here and she really doesn't like being disturbed. It's time to get into combat formation!"
          encounter.enemies = [
            createEnemy("Night Hag", calculateRoll("15d8+45"), 17, 7, "2d8+4", "Shape Change", "Nightmare Haunting")
          ]
          break
        case 94:
          encounter.text = "The appearance of the Salamander spells certain doom for the party. Its heated weapons could cleave through even the hardest armor."
          encounter.enemies = [
            createEnemy("Salamander", calculateRoll("12d10+24"), 15, 7, "2d6+4", "d20+2", "Heated Body")
          ]
          break
        case 95:
          encounter.text = "First it was the sucking sounds as it moved across the landscape. Then it was the stench. Finally, the the shambling mound reveals itself."
          encounter.enemies = [
            createEnemy("Shambling Mound", calculateRoll("16d10+48"), 15, 7, "2d8+4", "d20-1", "Engulf")
          ]
          break
        case 96:
          encounter.text = "\"No pass! Pay toll! Hur hur.\" The troll grips his giant club effortlessly as if it was a twig. He is beckoning for a fight."
          encounter.enemies = [
            createEnemy("Troll", calculateRoll("8d10+40"), 15, 7, "1d6+4", "d20+1")
          ]
          break
        case 97:
          encounter.text = "The Werebear attacks! There seems to be no reasoning with it."
          encounter.enemies = [
            createEnemy("Werebear", calculateRoll("18d8+54"), 10, 7, "2d10+4", "d20")
          ]
          break
        case 98:
          encounter.text = "A mound of bone stands tall before you. Just beyond it is a wraith. Its deathly stare cuts right through you."
          encounter.enemies = [
            createEnemy("Wraith", calculateRoll("9d8+27"), 13, 6, "4d8+3", "d20+3", "Life Drain4d8+3", "Create Specter")
          ]
          break
        case 99:
          encounter.text = "A vampire spawn steps out of the shadows. Perhaps he's here to capture new slaves for its master."
          encounter.enemies = [
            createEnemy("Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3")
          ]
          break
      }
      break
    case "hard":
      if (encounter.cr == null) encounter.cr = 9
      multiplier = 1 + (encounter.cr - 9) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "\"What is the meaning of life?\" The stone demands to know the answer. It seems very serious about this."
          break
        case 1:
          encounter.text = "\"Kill.\" The thought races through your head. \"Kill!\" It's searing an image you murdering your allies. You must stop these dark urges at once. You are losing yourself. At any moment you're going to pop off...\"Kill!\""
          break
        case 2:
          encounter.text = "A pressure in character's chest is building. A cracking sound of some kind. \"Oh god no!\""
          break
        case 3:
          encounter.text = "The temperature in the local area is rising dramatically. Something must be done immediately!"
          break
        case 4:
          encounter.text = "You are caught in a dream. In this dream there is no escape. You must have triggered some magical safeguard and you need to find some way to escape the prison of your mind."
          break
        case 5:
          encounter.text = "You encounter a giant chest overflowing with coins and valuables."
          break
        case 6:
          encounter.text = "Through your mind's eye, you can see the sky. But it's not right. The stars are not of any constellation you can recognize. Indeed this is the night sky of some other world. But why are seeing these images?"
          break
        case 7:
          encounter.text = "Columns as far as the eye can see. What are they supposed to mean? There is no time to think about that as you realize that one is falling over, causing a chain reaction. Run!"
          break
        case 8:
          encounter.text = "An arsenal of anointed weapons are here. It seems to have been delivered by some divine intervention. You must have caught the favor of some god on this day."
          break
        case 9:
          encounter.text = "A ghostly butcher appears. He seems to have no ill-intent.\"Would you like a taste of my *special* meats?\""
          break
        case 10:
          encounter.text = "A devil steps through a portal and beckons toward you. It announces that it does not wish to fight. Instead, it has come to bargain. A contract is gripped tightly in its hand."
          break
        case 11:
          encounter.text = "A grave with an elaborate headstone and sarcophagus. You recognize the poetry of its words."
          break
        case 12:
          encounter.text = "The skull of vampire resides on a pedestal. What secrets does it hold?"
          break
        case 14:
          encounter.text = "A contraption unlike anything you've seen before is here. It appears to have chambers of liquids and gases along its surface."
          break
        case 15:
          encounter.text = "A giant mirror has been hoisted on a wall here. You start to hear an eerily familiar voice emanate from its image."
          break
        case 16:
          encounter.text = "A sudden rush of ennui washes over you."
          break
        case 17:
          encounter.text = "The floor is sinking beneath you! A hole appears before you and you do not want to know where it leads."
          break
        case 18:
          encounter.text = "A field of flowers. So many that you can't see the ground beneath them."
          break
        case 19:
          encounter.text = "A magical portal is here. Through it, you can see an endless library. All of the world's knowledge and then some could be captured in those tomes..."
          break
        case 20:
          encounter.text = "A curious book bound in the flesh of a man seems to have been discarded here. It starts quivering all of a sudden..."
          break
        case 21:
          encounter.text = "Gnomes have set up a taxation booth here. In order to pass, you must pay an outrageous price. \"NEXT!\""
          break
        case 22:
          encounter.text = "There is a supernatural rain here. But it's not just any rain. \"ACID!\""
          break
        case 23:
          encounter.text = "Remarkable frescoes and portraits line the ruined walls."
          break
        case 24:
          encounter.text = "A demonic artist resides here. Care for a portrait?"
          break
        case 25:
          encounter.text = "A friendly Stone Golem greets you. It cannot speak, but it's trying to communicate something to you."
          break
        case 26:
          encounter.text = "An intricate puzzle is presented to you."
          break
        case 27:
          encounter.text = "A great history is etched in the stone here. Some of the words are emboldened, possibly indicating a pattern."
          break
        case 28:
          encounter.text = "An automoton walks the perimeter of this place. It is powered by some unknown force. Its path is etched deeply into the ground. Who knows how long it has been doing this."
          break
        case 29:
          encounter.text = "A simple shrine is here. A chalice filled with blood is placed in front of it."
          break
        case 30:
          encounter.text = "A person is strung up on the wall. There are signs of life, but they are fading fast!"
          break
        case 31:
          encounter.text = "A chimera. Will you accept grim fate now that you have come across such a foe?"
          encounter.enemies = [
            createEnemy("Chimera", calculateRoll("12d10+48"), 14, 7, "2d6+4", "d20", "Fire Breath7d8")
          ]
          break
        case 32:
          encounter.text = "The cyclops eyes you closely. It ponders for a time, but then finally decides that you must die."
          encounter.enemies = [
            createEnemy("Cyclops", calculateRoll("12d12+60"), 14, 9, "3d8+6", "d20")
          ]
          break
        case 33:
          encounter.text = "You've walked right into the drider's web. This was her plan all along."
          encounter.enemies = [
            createEnemy("Drider", calculateRoll("13d10+52"), 19, 6, "3d8", "1d10+3", "Poison Bite2d8")
          ]
          break
        case 34:
          encounter.text = "A group of cultists are gathering here. It appears that they are trying to open a portal through to the hells. They must be stopped!"
          encounter.enemies = [
            createEnemy("Insane Mage", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Cone of Cold8d8", "Greater Invisibility", "Fireball8d6", "Shield"),
            createEnemy("Cultist A", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1"),
            createEnemy("Cultist B", calculateRoll("2d8"), 12, 3, "1d6+1", "d20+1")
          ]
          break
        case 35:
          encounter.text = "The statues of men in terror, all cowering from some horrible sight. This can only mean one thing: Medusa."
          encounter.enemies = [
            createEnemy("Medusa", calculateRoll("17d8+51"), 15, 5, "1d6+2", "d20+2", "Petrifying Gaze", "Snake Hair5d6")
          ]
          break
        case 36:
          encounter.text = "Dragon fight! A young brass dragon descends upon you."
          encounter.enemies = [
            createEnemy("Young Brass Dragon", calculateRoll("13d10+39"), 17, 7, "2d10+4", "d20", "Fire Breath12d6", "Sleep Breath")
          ]
          break
        case 37:
          encounter.text = "The young white dragon has sized you up. It considers you a worth adversary"
          encounter.enemies = [
            createEnemy("Young White Dragon", calculateRoll("14d10+56"), 17, 7, "2d10+4", "d20", "Cold Breath10d8", "Ice Walk")
          ]
          break
        case 38:
          encounter.text = "An orc death squad!"
          encounter.enemies = [
            createEnemy("Orc A", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Orc B", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Orc C", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Orc D", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Orc E", calculateRoll("2d8+6"), 13, 5, "1d12+3", "d20+1"),
            createEnemy("Orc Leader", calculateRoll("5d8+6"), 13, 5, "3d12+3", "d20+1", "Rally Cry")
          ]
          break
        case 39:
          encounter.text = "Drow raiders are in full force here!"
          encounter.enemies = [
            createEnemy("Drow Raider A", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Drow Raider B", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Drow Raider C", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Drow Raider D", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2"),
            createEnemy("Drow Raider E", calculateRoll("3d8"), 15, 4, "1d6+2", "d20+2")
          ]
          break
        case 40:
          encounter.text = "The stone giant has been building pillars of rocks and then watches them fall over. He's kinda pissed that you've interrupted his game."
          encounter.enemies = [
            createEnemy("Stone Giant", calculateRoll("11d12+55"), 17, 9, "3d8+6", "d20+2", "Throw Rock4d10+6")
          ]
          break
        case 41:
          encounter.text = "The shield guardian is blocking path. Some mage from eons ago must have absent mindedly placed this here and forgot about it."
          encounter.enemies = [
            createEnemy("Shield Guardian", calculateRoll("15d10+60"), 17, 7, "4d6+4", "d20-1", "Shield")
          ]
          break
        case 42:
          encounter.text = "You have caught the focus of a young black dragon. It's positioning itself for attack!"
          encounter.enemies = [
            createEnemy("Young Black Dragon", calculateRoll("15d10+45"), 18, 7, "4d6+8", "d20+2", "Acid Breath11d8")
          ]
          break
        case 43:
          encounter.text = "You suddenly fall into a pit! This is no ordinary trap, for a Young Copper Dragon has been enslaved here."
          encounter.enemies = [
            createEnemy("Young Copper Dragon", calculateRoll("14d10+42"), 17, 7, "4d6+8", "d20+1", "Acid Breath9d8", "Slowing Breath")
          ]
          break
        case 44:
          encounter.text = "The assassin finally reveals himself. \"You have no idea how long I have been waiting for this moment!\""
          encounter.enemies = [
            createEnemy("Assassin", calculateRoll("12d8+24"), 15, 6, "2d6+6", "d20+3")
          ]
          break
        case 45:
          encounter.text = "You feel an unexpected cold wind. It can only be one thing: the frost giant approaches!"
          encounter.enemies = [
            createEnemy("Frost Giant", calculateRoll("12d12+60"), 15, 9, "6d12+12", "d20-1")
          ]
          break
        case 46:
          encounter.text = "\"How do you actually kill a hydra?\" No one seems to know the answer, but here you are facing one anyway. Tough luck!"
          encounter.enemies = [
            createEnemy("Hydra", calculateRoll("15d12+75"), 15, 8, "3d10+15", "d20+1")
          ]
          break
        case 47:
          encounter.text = "You've had no qualms killing its snake bretheren before. Perhaps that is why the Spirit Naga holds such malice towards you. Prepare for the fight of your life!"
          encounter.enemies = [
            createEnemy("Spirit Naga", calculateRoll("10d10+20"), 15, 7, "8d8+4", "d20+3", "Dominate Person", "Lightning Bolt9d6")
          ]
          break
        case 48:
          encounter.text = "The hairs on your arm raise as if you've entered a static field. Yes, it's a young bronze dragon preparing to strike. Dodge out of the way if you can!"
          encounter.enemies = [
            createEnemy("Young Bronze Dragon", calculateRoll("15d10+60"), 18, 8, "4d6+10", "d20+1", "Lightning Breath10d10", "Repulsion Breath")
          ]
          break
        case 49:
          encounter.text = "There was once a great forest here. It has all been destroyed by the ambition of man. All that is left is the vengeance of the young green dragon that stands in your way."
          encounter.enemies = [
            createEnemy("Young Green Dragon", calculateRoll("16d10+48"), 18, 7, "4d6+8", "d20+1", "Poison Breath12d6")
          ]
          break
        case 50:
          encounter.text = "My god, that must be why they call them cloud giants. It's as if they can reach the clouds. Defend yourself!"
          encounter.enemies = [
            createEnemy("Cloud Giant", calculateRoll("16d12+96"), 14, 12, "6d8+16", "d20", "Throw Rock4d10+8", "Control Weather")
          ]
          break
        case 51:
          encounter.text = "A treant has stationed itself here. It's the protector of the natural world. You upset the balance."
          encounter.enemies = [
            createEnemy("Treant", calculateRoll("12d12+60"), 16, 10, "6d6+12", "d20-1"),
            createEnemy("Awakened Tree", calculateRoll("7d12+14"), 13, 10, "3d6+4", "d20-2")
          ]
          break
        case 52:
          encounter.text = "A young blue dragon. What else can be said? You know you're in trouble now."
          encounter.enemies = [
            createEnemy("Young Blue Dragon", calculateRoll("16d10+64"), 18, 9, "12d6+10", "d20", "Lightning Breath10d10")
          ]
          break
        case 53:
          encounter.text = "A young silver dragon. It's over for you. Make your peace."
          encounter.enemies = [
            createEnemy("Young Silver Dragon", calculateRoll("16d10+8-"), 18, 10, "4d6+12", "d20", "Cold Breath12d8", "Paralyzing Breath")
          ]
          break
        case 54:
          encounter.text = "This is the lair of the Aboleth. You say your prayers to any god that would listen. It's time to prove your worth."
          encounter.enemies = [
            createEnemy("Aboleth", calculateRoll("18d10"), 17, 9, "6d6+15", "d20-1", "Enslave", "Psychic Drain3d6")
          ]
          break
        case 55:
          encounter.text = "A deva is here. There must have been some mistake, but you are marked for death."
          encounter.enemies = [
            createEnemy("Deva", calculateRoll("16d8+64"), 17, 8, "2d6+8", "d20+4")
          ]
          break
        case 56:
          encounter.text = "The stone golem is against the natural order. It does not fill any niche in the animal kingdom. It must be destroyed."
          encounter.enemies = [
            createEnemy("Stone Golem", calculateRoll("17d10+85"), 17, 10, "6d8+12", "d20-1")
          ]
          break
        case 57:
          encounter.text = "You've gotten on the wrong side of the young gold dragon. Perhaps you should not have trespassed on its sovereign land."
          encounter.enemies = [
            createEnemy("Young Gold Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20+2", "Fire Breath10d10", "Weakening Breath")
          ]
          break
        case 58:
          encounter.text = "The young red dragon wastes no time in its pursuit of victims. It has selected you for its next meal."
          encounter.enemies = [
            createEnemy("Young Red Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20", "Fire Breath16d6")
          ]
          break
        case 59:
          encounter.text = "The guardian naga is against the natural order. It does not fill any niche in the animal kingdom. It must be destroyed."
          encounter.enemies = [
            createEnemy("Guardian Naga", calculateRoll("15d10+45"), 18, 8, "1d8+4", "d20+4", "Spit Poison10d8", "Flame Strike4d6", "Bestow Curse", "Hold Person", "Geas")
          ]
          break
        case 60:
          encounter.text = "The fire giants were born in environments that would burn others to a crisp instantly. This means this one is immune to fire damage. It's ready to fight now."
          encounter.enemies = [
            createEnemy("Fire Giant", calculateRoll("13d12+78"), 18, 11, "6d6+7", "d20-1", "Throw Rock4d10+7")
          ]
          break
      }
      break
    case "boss":
      if (encounter.cr == null) encounter.cr = 13
      multiplier = 1 + (encounter.cr - 13) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "The earth is opening up around you! A giant crack in the ground bursts wide and magma spews forth."
          break
        case 1:
          encounter.text = "A statue with glowing blue eyes watches over you. Its intensity is ever increasing until it final begins to shoots beams of electrical energy at you."
          break
        case 2:
          encounter.text = "You all ate bad mushrooms. This is terrible news because you're starting to have a bad trip. This is when you notice that you are not alone."
          break
        case 3:
          encounter.text = "A massive rock slide! Watch out!! You only have moments to react."
          break
        case 4:
          encounter.text = "You can't move! Your muscles are paralyzed. You can only move your eyes which dart around feverishly looking for the cause of this malady."
          break
        case 5:
          encounter.text = "A series of blocks are laid out before you in a shallow, rectangular pit. A voice is heard in your head \"Solve it or die!\""
          break
        case 6:
          encounter.text = "Suddenly, you are lifted high up into the air! An area of land extending around you by about 5 feet shoots up skyward. You notice other clumps of earth being levitated by the same magical force."
          break
        case 7:
          encounter.text = "Your leg is caught on a wire. Viewing its path around your leg and across the ground, you see that it is connected to a contraption of some kind. It has the semblance of a bomb. It is very large and would spell certain doom for the party, if not the entire local area, if it were to explode."
          break
        case 8:
          encounter.text = "The banner of a great king marks a field pockmarked with craters. Mines!"
          break
        case 9:
          encounter.text = "Large rings descend around you. As you try to escape them, you relize that an unseeable forcefield prevents you from escaping. You're trapped!"
          break
        case 10:
          encounter.text = "A satyr stands before you and offers you a treat. You see an array of pots and pans and the likeness of an unkempt kitchen. Something alludes you about this situation. Something sinister."
          break
        case 11:
          encounter.text = "A ruined statue dedicated to the goddess of magic, Mystra, is here. It is split in two with the torso laying haphazardly to the side. You sense a faint voice coming from within it."
          break
        case 12:
          encounter.text = "A shrine dedicated to Shar, goddess of darkness, stands tall before you. A challenge is posted on a brass placard attached to the podium."
          break
        case 14:
          encounter.text = "An offering plate named for Waukeen, the goddess of trade, is placed on an ornate, golden pedestal. It seems to beckon for you to make a trade."
          break
        case 15:
          encounter.text = "You close your eyes only to find yourself transported to a cavern lined with skulls and mounds of the dead. In it: a leatherbound tome with a symbol of the Spider Queen, Lolth."
          break
        case 16:
          encounter.text = "A crown made of bone and sinew rests on the skull of a dead king. You have the uncontrollable urge to place it upon your head."
          break
        case 17:
          encounter.text = "A cosmic display of lights and magic play before you. A great power is being held here, trapped by the gravity of some celestial object."
          break
        case 18:
          encounter.text = "You finally see it. A dark figure at your side. It seems like it has always been there, and yet you never noticed it. It poses a question to you: more like a riddle than anything else. You are compelled to answer or face existential consequences."
          break
        case 19:
          encounter.text = "A sigil of a great house is emblazoned into a wall ahead of you. Underneath, it commands, \"Name your champion\" The walls begin to shudder violently."
          break
        case 20:
          encounter.text = "A group of corpses are gathered in the center here. Their appearance shares an uncanny resemblance to your own. Never minding that, you notice that they have incredible weapons and artifacts amongst their bodies."
          break
        case 21:
          encounter.text = "You see what could only be the giant tooth of a dragon. You hesitate from touching it, knowing that something as valuable as this wouldn't be so carelessly left behind in this manner."
          break
        case 22:
          encounter.text = "Lord Gond smiles upon you. Choose a boon for a single item in your inventory."
          break
        case 23:
          encounter.text = "You have displeased the god Bhaal, the god of murder. He demands a sacrifice as recompense."
          break
        case 24:
          encounter.text = "A blank scroll, unblemished by its surroundings, is drawn open before you. An ink pen floats to its side. Will you add your name to it?"
          break
        case 25:
          encounter.text = "Your feet are sinking into the floor. The false surface must have been an elaborate illusion. You must act quickly before you are completely engulfed by what lies below."
          break
        case 26:
          encounter.text = "Chief among your concerns is the taste of the air which has suddenly turned sour. Poison gas!"
          break
        case 27:
          encounter.text = "You can sense that this place has some greater importance. Magical leylines meet here. In this place of power, anything is possible."
          break
        case 28:
          encounter.text = "A mummified monkey's paw resides here. Three fingers are extended outward. According to lore, such a powerful item can grant you three wishes. However, you should be wary of what you wish for..."
          break
        case 29:
          encounter.text = "A small bell attached to a simple, wooden handle can be found here. What does it do? Or should you be afraid of what it may summon?"
          break
        case 30:
          encounter.text = "A pristine wand is held in a glass case. A blue aura surrounds it. It is clear that it is protected by practical and magical means, but why?"
          break
        case 31:
          encounter.text = "An adult black dragon approaches. You are not ready for this."
          encounter.enemies = [
            createEnemy("Adult Black Dragon", calculateRoll("17d12+85"), 19, 11, "6d6+18", "d20+2", "Acid Breath12d8", "Frightful Presence", "Wing Attack2d6+6")
          ]
          break
        case 32:
          encounter.text = "An adult brass dragon is here. It's pissed!"
          encounter.enemies = [
            createEnemy("Adult Brass Dragon", calculateRoll("15d12+75"), 18, 11, "6d6+18", "d20", "Fire Breath13d6", "Sleep Breath", "Frightful Presence", "Wing Attack2d6+6")
          ]
          break
        case 33:
          encounter.text = "An adult bronze dragon is charging up for an attack!"
          encounter.enemies = [
            createEnemy("Adult Bronze Dragon", calculateRoll("17d12+102"), 19, 12, "6d6+21", "d20", "Repulsion Breath", "Lightning Breath12d10", "Wing Attack2d6+6")
          ]
          break
        case 34:
          encounter.text = "An adult copper dragon shifts its gaze at you. You are doomed."
          encounter.enemies = [
            createEnemy("Adult Copper Dragon", calculateRoll("16d12+80"), 18, 11, "6d6+18", "d20+1", "Acid Breath12d8", "Slowing Breath", "Wing Attack2d6+6")
          ]
          break
        case 35:
          encounter.text = "An adult green dragon is nesting here. You really shouldn't have disturbed it."
          encounter.enemies = [
            createEnemy("Adult Green Dragon", calculateRoll("18d12+90"), 19, 11, "6d6+18", "d20+1", "Poison Breath16d6")
          ]
          break
        case 36:
          encounter.text = "An adult white dragon is here. The wrong place and wrong time, unfortunately for you."
          encounter.enemies = [
            createEnemy("Adult White Dragon", calculateRoll("16d12+96"), 18, 11, "6d6+18", "d20", "Cold Breath12d8", "Wing Attack2d6+6")
          ]
          break
        case 37:
          encounter.text = "The arch mage descends from the high altar. He says no words, but raises his hands as if he is going to prepare a spell. Get ready!"
          encounter.enemies = [
            createEnemy("Arch Mage", calculateRoll("18d8+18"), 12, 4, "1d4+2", "d20+14", "Time Stop", "Globe of Invulnerability", "Lightning Bolt8d6", "Banishment", "Cone of Cold8d8", "Teleport"),
            createEnemy("Disciple A", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Ice Storm4d6+8", "Fireball8d6", "Mage Armor", "Fire Bolt1d10"),
            createEnemy("Disciple B", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Ice Storm4d6+8", "Fireball8d6", "Mage Armor", "Fire Bolt1d10")
          ]
          break
        case 38:
          encounter.text = "The djinni mocks you as you enter its domain. It seems like it wants to pick a fight with you."
          encounter.enemies = [
            createEnemy("Djinni", calculateRoll("14d10+84"), 17, 9, "2d6+8", "d20+2")
          ]
          break
        case 39:
          encounter.text = "They are as beautiful as they are wicked. The Erinyes approach with cruel intentions. Their winged visages come into clear view."
          encounter.enemies = [
            createEnemy("Erinyes A", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3"),
            createEnemy("Erinyes B", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3"),
            createEnemy("Erinyes C", calculateRoll("18d8+72"), 18, 8, "1d10+4", "d20+3")
          ]
          break
        case 40:
          encounter.text = "The horned devil stalks the land before you. It grins, revealing a hideous set of teeth."
          encounter.enemies = [
            createEnemy("Horned Devil", calculateRoll("17d10+85"), 18, 10, "6d8+18", "d20+3", "Hurl Flame4d6")
          ]
          break
        case 41:
          encounter.text = "The temperature of the local area has cooled significantly. You see it now: an ice devil makes its presence known."
          encounter.enemies = [
            createEnemy("Ice Devil", calculateRoll("19d10+76"), 18, 10, "6d4+15", "d20+2", "Wall of Ice")
          ]
          break
        case 42:
          encounter.text = "The mummy lord resides here. It has summoned its followers and directs the assault with his decayed finger pointed at you."
          encounter.enemies = [
            createEnemy("Mummy Lord", calculateRoll("13d8+39"), 17, 9, "3d6+4", "d20", "Hold Person", "Silence", "Harm14d6", "Blinding Dust", "Whirlwind of Sand"),
            createEnemy("Mummy A", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1"),
            createEnemy("Mummy B", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1"),
            createEnemy("Mummy C", calculateRoll("9d8+18"), 11, 5, "2d6+3", "d20-1")
          ]
          break
        case 43:
          encounter.text = "The signs are clear: mounds of disturbed earth, pools of slime, and the digested remains of those foolish to face the creature. Yes, it's the Purple Worm. The earth rumbles, announcing its entry into the fray."
          encounter.enemies = [
            createEnemy("Purple Worm", calculateRoll("15d20+90"), 18, 14, "6d6+18", "d20-2", "Tail Stinger12d6+19")
          ]
          break
        case 44:
          encounter.text = "The only way to describe it is that it's a twisted combination of a dragon and a giant millipede. The Remorhaz makes a sickening path through the debris toward you."
          encounter.enemies = [
            createEnemy("Remorhaz", calculateRoll("17d12+85"), 17, 11, "6d10+7", "d20+1", "Swallow6d6")
          ]
          break
        case 45:
          encounter.text = "The storm giant pays little heed toward you. Yet, you are in its path. Hearing the sudden crack of lightning jolts you."
          encounter.enemies = [
            createEnemy("Storm Giant", calculateRoll("20d12+100"), 16, 14, "12d6+18", "d20+2", "Control Weather", "Lightning Strike12d8")
          ]
          break
        case 46:
          encounter.text = "You have entered the realm of a powerful vampire. Its coven is poised to strike!"
          encounter.enemies = [
            createEnemy("Vampire", calculateRoll("17d8+68"), 16, 9, "3d8+8", "d20+4", "Charm", "Shape Change"),
            createEnemy("Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3"),
            createEnemy("Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3")
          ]
          break
        case 47:
          encounter.text = "The hulking mass of the Behir enters the scene. It rears up revealing its many clawed feet. The tail whips around haphazardly throwing rubble around like they were pebbles."
          encounter.enemies = [
            createEnemy("Behir", calculateRoll("16d12+64"), 17, 10, "5d10+12", "d20+3", "Lightning Breath12d10", "Swallow6d6", "Constrict2d10+6")
          ]
          break
        case 48:
          encounter.text = "The efreeti are the genies of the elemental fire plane. One such warrior is here and is bent on exacting revenge on some forgotten slight."
          encounter.enemies = [
            createEnemy("Efreeti", calculateRoll("16d10+112"), 17, 10, "4d6+12", "d20+1", "Hurl Flame5d6")
          ]
          break
        case 49:
          encounter.text = "The nalfeshnee are winged demons that are like a cross between an ape and a boar. This one angles its terrible snout you and makes a menacing grunt."
          encounter.enemies = [
            createEnemy("Nalfeshnee", calculateRoll("16d10+96"), 18, 10, "8d6+5", "d20", "Horror Nimbus")
          ]
          break
        case 50:
          encounter.text = "The roc attacks! This gargantuan bird swoops in and engulfs the combat area with its awesome wings."
          encounter.enemies = [
            createEnemy("Roc", calculateRoll("16d20+80"), 15, 13, "8d8+18", "d20")
          ]
          break
        case 51:
          encounter.text = "It wasn't your imagination. It moved. You swear it. Indeed, the animated statue is poised for attack!"
          encounter.enemies = [
            createEnemy("Animated Statue", calculateRoll("10d12+20"), 17, 7, "2d10+4", "d20-2")
          ]
          break
        case 52:
          encounter.text = "You've never seen the undead quite like this. The bone claw raises its outrageous talons. It is going to strike at any moment!"
          encounter.enemies = [
            createEnemy("Boneclaw", calculateRoll("17d10+34"), 16, 8, "6d10+8", "d20+3", "Shadow Jump5d12+2", "Deadly Reach")
          ]
          break
        case 53:
          encounter.text = "A werewolf is already a formidable opponent. The deathwolf is the ungodly undead version of that. It bears down on you with great ill intent."
          encounter.enemies = [
            createEnemy("Deathwolf", calculateRoll("18d8+72"), 15, 10, "6d8+15", "d20+3", "Phantom Deathwolf6d6")
          ]
          break
        case 54:
          encounter.text = "A drow inquisitor is here. She expected you to come this way. You're going to pay for that mistake."
          encounter.enemies = [
            createEnemy("Drow Inquisitor", calculateRoll("23d8+46"), 16, 10, "12d8+24", "d20+2", "Spectral Dagger1d8+5")
          ]
          break
        case 55:
          encounter.text = "This is proof that fate has it in for you. You somehow have stumbled upon the chamber of an Elder Brain. It rises out of its brine pool to summon its minions."
          encounter.enemies = [
            createEnemy("Elder Brain", calculateRoll("20d10+100"), 10, 7, "5d8+7", "d20", "Mind Blast5d10+5")
          ]
          break
        case 56:
          encounter.text = "You see the Jabberwock. It's a horrific creature, born of pure hatred and evil. It has the wings of a dragon, but crawls around on four legs like a bastard insect."
          encounter.enemies = [
            createEnemy("Jabberwock", calculateRoll("10d12+50"), 18, 10, "6d10+10", "d20+1", "Regenderation")
          ]
          break
        case 57:
          encounter.text = "Acid drips onto the floor from its nasty maw. The massive megapede marks its territory with the bodies of those foolish enough to challenge it. You may count yourself among them in short order."
          encounter.enemies = [
            createEnemy("Megapede", calculateRoll("13d20+39"), 15, 10, "6d10+12", "d20", "LifeDrain3d10", "Psychic Bomb5d8")
          ]
          break
        case 58:
          encounter.text = "The skull lord holds dominion over this lair. It turns its three heads for you to plainly see its horrific visage."
          encounter.enemies = [
            createEnemy("Skull Lord", calculateRoll("15d8+45"), 18, 8, "24d6", "d20+3", "Deathly Ray5d8+5")
          ]
          break
        case 59:
          encounter.text = "The zikran has the blood of genies and their power too. It harnesses the power of water. Pools of which gather at its feet. It's ready to defend itself."
          encounter.enemies = [
            createEnemy("Zikran", calculateRoll("18d8+18"), 12, 6, "1d4+2", "d20+2", "Time Stop", "Mind Blank", "Cone of Cold 8d8", "Lightning Bolt 8d6")
          ]
          break
        case 60:
          encounter.text = "You have never seen a monstrosity of this magnitude. The eight legs of the spider dragon crash into the ground one after the other like a symphony of massive hammers. This is the fight of your life."
          encounter.enemies = [
            createEnemy("Spider Dragon", calculateRoll("15d10+5"), 23, 9, "3d12+12", "d20+8", "Silk Spit", "Spider Breath7d10")
          ]
          break
      }
      break
    case "god":
      if (encounter.cr == null) encounter.cr = 17
      multiplier = 1 + (encounter.cr - 17) / 10
      switch (getRandomInteger(0, 60)) {
        case 0:
          encounter.text = "You have discovered a tunnel encased entirely with geodes and crystals of great value!"
          break
        case 1:
          encounter.text = "A mighty steed is spotted here. As it breathes, it exhales flames from its nostrils. Despite this, it looks friendly and comes up to you with a slightly tilted head. It presses against your arm cautiously."
          break
        case 2:
          encounter.text = "A thought enters your mind. A thought that no man should know. A thought that could change the world. And yet, it starts to escape you as fast as it came to you."
          break
        case 3:
          encounter.text = "The grand master of the martial way stands before you. He will teach you one technique, but it will cost you dearly. A cost that is worth much more than mere coin."
          break
        case 4:
          encounter.text = "An exceptional weapon is presented to you by one claiming to be your loyal servant. It lowers its eyes as you approach. \"Master, I do not aim to offend with such a paltry gift, but it is all I have.\""
          break
        case 5:
          encounter.text = "A portal is spotted. Through it, you see a vast library with shelves and shelves of books with no end. It is a truly spectacular sight."
          break
        case 6:
          encounter.text = "The way ahead is covered with fine sand. It shifts and twists, indicating that something resides underneath."
          break
        case 7:
          encounter.text = "Molten hot magma leaks through the walls of this place. You hear a sudden cracking and all hell breaks loose."
          break
        case 8:
          encounter.text = "Whatever is entombed here must be significantly important because there are various traps of unusual complexity laid through the path before you."
          break
        case 9:
          encounter.text = "Giant axes swing like pendulums. Each blocks your way and can destroy you in a single blow."
          break
        case 10:
          encounter.text = "A giant rock face is in front of you. It must be traversed in order for you to proceed. Unfortunately, the hand holds are incredibly unstable and will not hold your weight for long."
          break
        case 11:
          encounter.text = "A bridge in disrepair is before you. It was sabotaged to prevent passage through this way, but you must get through. There planks placed intermitentally across its length. You imagine that it could be crossed successfully with some focus and a lot of luck."
          break
        case 12:
          encounter.text = "\"You must choose wisely.\" An old sage presents two cups on a table before you. Their mouths are faced downward, hiding their contents. You can tell something is wrong from his snickering, mocking lips."
          break
        case 14:
          encounter.text = "An elaborate illusion is here, hiding the way forward. Pressing ahead cautiously with your foot, you can tell that there is a significant drop where the illusion is. Safe passage is obscured from your senses."
          break
        case 15:
          encounter.text = "A set of giant scales are ahead. Ball bearings of immense size are all placed on one side of the scale. They are too heavy to move by any normal person's strength. Suddenly, the walls start pushing in."
          break
        case 16:
          encounter.text = "Death is playing with a set of dice. He looks bored. Then he suddenly notices you..."
          break
        case 17:
          encounter.text = "A tablet is here. Written in large text, it seems to be the words to a curse or spell of some sort. At first glance, it makes no sense to you. Then you realize that each line is written in a differnt language found in the known world. That is when you started to smell the gas..."
          break
        case 18:
          encounter.text = "It's starting to rain, but you realize that this is no normal rain. Each drop sizzles as it strikes an object. Acid! It is truly the end times."
          break
        case 19:
          encounter.text = "The flesh wall demands a sacrifice! It quivers at you. \"Feeeeeeeed meeeeeeeeee\""
          break
        case 20:
          encounter.text = "A giant hedge maze! You do not wish to participate, however you notice a mystical blue flame follow your path. It does not move swiftly, but it does block the way back. You have no choice but to play this game."
          break
        case 21:
          encounter.text = "Bottles of an illuminated, golden liquid are strung up in something like a wire lattice. Upon further investigation, you can see that they are all interconnected and may fall easily if disturbed. It's too bad because this is the only way out."
          break
        case 22:
          encounter.text = "You keep walking forward, but the door ahead seems to remain ever distant. This goes on for awhile, so you assume something magical is at play here."
          break
        case 23:
          encounter.text = "\"Stop the rabbits! They're getting away!\" You hear somebody yell, but it's too late. Your party is surrounded by rabbits just hopping around aimlessly. Humorous at first, but it becomes dangerous as the number of rabbits increase to an unforseen number."
          break
        case 24:
          encounter.text = "All your actions are being judged by a mysterious figure sitting atop a dark throne. Only the sounds of disappointment can be heard as the shady figure flips through the pages of your exploits."
          break
        case 25:
          encounter.text = "You see a mirror, however its image is not a reflection of you but that of your past and possible futures."
          break
        case 26:
          encounter.text = "The sphinx asks you the unsolvable riddle. Your life hangs in the balance as you try to interpret its words."
          break
        case 27:
          encounter.text = "Your vision begins to blacken. All noises are muted. Your senses are ripped from you. You are completely cut off from the world. You are now trapped in the void."
          break
        case 28:
          encounter.text = "A pit seemingly with no bottom can be seen here. You look back: the entrance to this pace is gone! What will you do?"
          break
        case 29:
          encounter.text = "A test of faith. Prove your worth or be struck down by the power of the gods!"
          break
        case 30:
          encounter.text = "A sea of bones. You try to step in, but your feet have no purchase."
          break
        case 31:
          encounter.text = "The adult blue dragon claws at the ground just before it. It's bored. It has decided that you will be its new play thing."
          encounter.enemies = [
            createEnemy("Adult Blue Dragon", calculateRoll("18d12+108"), 19, 12, "6d10+21", "d20", "Lightning Breath12d10", "Wing Attack2d6+7")
          ]
          break
        case 32:
          encounter.text = "The gold dragon has deemed you unworthy. Prove it wrong."
          encounter.enemies = [
            createEnemy("Adult Gold Dragon", calculateRoll("19d12+133"), 19, 12, "6d10+21", "d20+2", "Fire Breath 12d10", "Weakening Breath")
          ]
          break
        case 33:
          encounter.text = "The adult red dragon has broken its chains and now stands before you. Whatever events have ocurred to bring it to this place, it places the blame on you for its centuries of torture."
          encounter.enemies = [
            createEnemy("Adult Red Dragon", calculateRoll("19d12+133"), 19, 12, "6d10+21", "d20", "Fire Breath18d6", "Wing Attack2d6+8")
          ]
          break
        case 34:
          encounter.text = "You didn't do anything wrong. The adult silver dragon just doesn't like you."
          encounter.enemies = [
            createEnemy("Adult Silver Dragon", calculateRoll("18d12+126"), 19, 13, "6d10+24", "d20", "Cold Breath13d8", "Paralyzing Breath")
          ]
          break
        case 35:
          encounter.text = "The ancient black dragon goads you into a fight."
          encounter.enemies = [
            createEnemy("Ancient Black Dragon", calculateRoll("21d20+147"), 22, 15, "6d10+24", "d20+2", "Acid Breath15d8", "Wing Attack2d6+8")
          ]
          break
        case 36:
          encounter.text = "From the ashes, the phoenix!"
          encounter.enemies = [
            createEnemy("Phoenix", calculateRoll("10d20+70"), 18, 13, "4d6+16", "d20+8", "Fiery Talons4d8+16", "Swoop4d8+16")
          ]
          break
        case 37:
          encounter.text = "The demogorgon is quite the curiosity. Your wish to study its biology is stymied by the fact that your life is in jeapodary."
          encounter.enemies = [
            createEnemy("Demogorgon", calculateRoll("32d12+256"), 22, 17, "6d12+18", "d20+2", "Beguiling Gaze", "Hypnotic Gaze")
          ]
          break
        case 38:
            encounter.text = "You stand there, mouth agape trying to understand it. You can't. The cosmic horror attacks!"
            encounter.enemies = [
              createEnemy("Cosmic Horror", calculateRoll("16d20+112"), 15, 14, "6d6+16", "d20", "Poison Jet4d6", "Psychic Whispers6d10")
            ]
            break
          case 39:
          encounter.text = "The ancient red dragon has lived to see entire civilizations rise and fall. You are nothing in its presence."
          encounter.enemies = [
            createEnemy("Ancient Red Dragon", calculateRoll("21d20+147"), 22, 15, "6d8+30", "d20+2", "Fire Breath26d6", "Wing Attack2d6+10")
          ]
          break
        case 40:
          encounter.text = "The ancient gold dragon holds on to a dark secret that jeopordizes everything that you know. Perhaps it will impart its knowledge onto you once you prove you're worthy. Many have tried and failed as evidenced by the bones laid asunder."
          encounter.enemies = [
            createEnemy("Ancient Gold Dragon", calculateRoll("28d20+252"), 22, 15, "6d10+24", "d20+2", "Fire Breath13d10", "Weakening Breath")
          ]
          break
        case 41:
          encounter.text = "Zariel, the arch duchess of Avernus, stands at the ready. You have displeased her and now she will exact her revenge on you personally. Burning crown above her head and wings red like fire, she is ready for you."
          encounter.enemies = [
            createEnemy("Zariel", calculateRoll("40d10+360"), 21, 16, "4d8+16", "d20+7", "Horrid Touch8d10", "Immolating Gaze4d10", "Teleport")
          ]
          break
        case 42:
          encounter.text = "Bael emerges from the deepest pits of the nine hells. You are stricken by his warrior-like, bovine appearance. A wicked grin betrays his truly diabolical plans for you."
          encounter.enemies = [
            createEnemy("Bael", calculateRoll("18d10+90"), 18, 13, "4d8+27", "d20+3", "Awaken Greed", "Teleport", "Regenerate", "Inflict Wounds4d8+27", "Invisibility")
          ]
          break
        case 43:
          encounter.text = "The demon lord of the abyss, Baphomet, has waited eons for his chance to lead his assault onto the material world. He does not see you as a threat. Only an inconvenience."
          encounter.enemies = [
            createEnemy("Baphomet", calculateRoll("22d12+176"), 22, 17, "3d10+30", "d20+2", "Curse of Brutality", "Desecration Breath20d8", "Gouging Toss2d8", "Raise Labyrinth")
          ]
          break
        case 44:
          encounter.text = "You're miles from the sea and yet its here: the leviathan. It charges at you across the water with full force!"
          encounter.enemies = [
            createEnemy("Leviathan", calculateRoll("16d20+160"), 17, 16, "4d10+40", "d20+7", "Tidal Wave6d10")
          ]
          break
        case 45:
          encounter.text = "Dripping. Disgusting. You are acosted by the flesh colossus! All is lost."
          encounter.enemies = [
            createEnemy("Flesh Colossus", calculateRoll("16d20+112"), 14, 13, "6d6+14", "d20-1", "Elemental Breath9d8")
          ]
          break
        case 46:
          encounter.text = "You've never seen a creature as beautiful or as regal as the androsphinx. Unfortunately, it regards you with disdain."
          encounter.enemies = [
            createEnemy("Androsphinx", calculateRoll("19d10+95"), 17, 12, "4d10+12", "d20", "Flame Strike8d6", "Roar", "Teleport")
          ]
          break
        case 47:
          encounter.text = "Balor is a fiend. A huge, demonic fiend bent on destroying you and all you represent."
          encounter.enemies = [
            createEnemy("Balor", calculateRoll("21d12+136"), 19, 14, "6d8+16", "d20+2", "Fire Whip 5d6+8", "Teleport")
          ]
          break
        case 48:
          encounter.text = "There is no explaining how you are face to face with a Dragon Turtle and yet... here you are. Fight!"
          encounter.enemies = [
            createEnemy("Dragon Turtle", calculateRoll("22d20+110"), 20, 13, "6d8+21", "d20", "Steam Breath15d6")
          ]
          break
        case 49:
          encounter.text = "An echoing boom reverberates across the area, shaking you to your core. The Iron Golem is activated."
          encounter.enemies = [
            createEnemy("Iron Golem", calculateRoll("20d10+100"), 20, 13, "6d8+14", "d20=1", "Poison Breath10d8", "Slam3d8+7")
          ]
          break
        case 50:
          encounter.text = "A lake with unkown depths is before you. The kraken's lair. It emerges, ready to strike out at you."
          encounter.enemies = [
            createEnemy("Kraken", calculateRoll("27d20+189"), 18, 17, "9d6+30", "d20", "Lightning Storm12d10", "Ink Cloud3d10", "Fling1d6")
          ]
          break
        case 51:
          encounter.text = "The lich commands an incredible army of the dead. Strike now for the good of the realm!"
          encounter.enemies = [
            createEnemy("Lich", calculateRoll("18d8+54"), 17, 12, "3d6", "Acid Arrow4d4", "Fireball8d6", "Dimension Door", "Animate Dead", "Ray of Frost3d8", "Disrupt Life6d6", "Frightening Gaze", "Paralyzing Touch")
          ]
          break
        case 52:
          encounter.text = "So many arms. The marilith slithers into view, waving its longswords all around."
          encounter.enemies = [
            createEnemy("Marilith", calculateRoll("18d10+90"), 18, 9, "12d8+24", "d20+5", "Teleport", "Parry")
          ]
          break
        case 53:
          encounter.text = "The pit fiend is protecting something of great value. Put that out of your mind because you should be preparing for one hell of a fight."
          encounter.enemies = [
            createEnemy("Pit Fiend", calculateRoll("24d10+168"), 19, 14, "8d8+32", "d20+2", "Fireball8d6", "Wall of Fire")
          ]
          break
        case 54:
          encounter.text = "The planetar is a celestial in true form. This one, fallen and disgraced, shall now vanquish you in the name of some forgotten god."
          encounter.enemies = [
            createEnemy("Planetar", calculateRoll("16d10+112"), 19, 12, "4d6+7", "d20+5", "Insect Plague4d10", "Blade Barrier", )
          ]
          break
        case 55:
          encounter.text = "Angelic is the least you can say about the solar. Beautiful, powerful. All fear the mighty solar!"
          encounter.enemies = [
            createEnemy("Solar", calculateRoll("18d10+144"), 21, 15, "8d6+16", "d20+6", "Flying Sword", "Searing Burst8d6", "Blinding Gaze")
          ]
          break
        case 56:
          encounter.text = "The tarrasque laid dormant for unknowable eons. Your arrival, however, triggered a series of events leading to its awakening. Its massive form stirs, sending the earth crumbling before you."
          encounter.enemies = [
            createEnemy("Tarrasque", calculateRoll("33d20+330"), 25, 19, "20d8+50", "d20")
          ]
          break
        case 57:
          encounter.text = "The bore worm is much like the purple worm, yet it is much more dangerous. A construct made of nigh unbreakable metals, its singular goal is clear: your destruction."
          encounter.enemies = [
            createEnemy("Bore Worm", calculateRoll("15d20+90"), 18, 9, "6d8+18", "d20-2")
          ]
          break
        case 58:
          encounter.text = "The raeleus decides to finally make his presence known. He's been watching. Waiting. This half human, half zebra amalgamation is quite the inventor. It employs its grand arsenal on you. Run or fight, he's going to get you."
          encounter.enemies = [
            createEnemy("Raeleus", calculateRoll("19d12+190"), 22, 17, "6d6+10", "d20+5", "Musket Blast6d10+10", "Auto Pistolero10d6", "Canister Grenada4d10", "Stun Grenada", "Magic Chaff Grenada")
          ]
          break
        case 59:
          encounter.text = "The death knight is not one to toil with. It's too late for you, but consider this a warning to the next group of fools who think they could stand toe to toe with this undead warrior."
          encounter.enemies = [
            createEnemy("Death Knight", calculateRoll("19d8+95"), 20, 11, "3d8+15", "d20+2", "Hellfire Orb10d6", "Parry", "Destructive Wave5d6")
          ]
          break
        case 60:
          encounter.text = "This is getting out of hand. Demons, monsters, and now the Drow Matron Mother is on attack! She's a very powerful elven caster that commands a vast network of fiends and slaves."
          encounter.enemies = [
            createEnemy("Drow Matron Mother", calculateRoll("35d8+105"), 17, 10, "2d6+8", "d20+4", "Levitate", "Plane Shift", "Gate", "Geas5d10", "Guardian of Faith", "Tentacle Rod3d6", "Summon Servant")
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
    spells: spells,
    ally: false
  }
  return enemy
}

function createAlly(name, health, ac, hitModifier, damage, initiative, ...spells) {
  var ally = {
    name: name,
    health: health,
    ac: ac,
    hitModifier: hitModifier,
    damage: damage,
    initiative: initiative,
    spells: spells,
    ally: true
  }
  return ally
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

  for (var ally of state.allies) {
    if (ally.health <= 0) continue
    state.initiativeOrder.push(ally)
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

const simpleMeleeWeapons = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Dart"]
const simpleRangedWeapons = ["Light Crossbow", "Shortbow", "Sling"]
const martialMeleeWeapons = ["Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "Warhammer", "War Pick", "Whip"]
const martialRangedWeapons = ["Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Musket", "Pistol"]
const lightArmor = ["Padded Armor", "Leather Armor", "Studded Leather Armor"]
const mediumArmor = ["Hide Armor", "Chain Shirt", "Scale Mail", "Breastplate", "Half Plate Armor"]
const heavyArmor = ["Ring Mail", "Chain Mail", "Splint Armor", "Plate Armor"]
const ammunition = ["Arrow", "Bolt", "Bullet", "Needle"]

function itemShopConvertGenericName(name) {
  switch (name) {
    case "Armor of Gleaming":
      name = itemShopNameAddPrefix("of Gleaming", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Cast-Off Armor":
      name = itemShopNameAddSuffix("Cast-Off", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Moon-Touched Sword":
      name = itemShopNameAddSuffix("Moon-Touched", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Silvered Weapon":
      name = itemShopNameAddSuffix("Silvered", ...simpleMeleeWeapons.concat(simpleRangedWeapons, martialMeleeWeapons, martialRangedWeapons))
      break
    case "Smoldering Armor":
      name = itemShopNameAddSuffix("Smoldering", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Sylvan Talon":
      name = itemShopNameAddSuffix("Sylvan Talon", "Dagger", "Rapier", "Scimitar", "Shortsword", "Sickle", "Spear")
      break
    case "Walloping Ammunition":
      name = itemShopNameAddSuffix("Walloping", ...ammunition)
      quantity = 10
      break
    case "Adamantine Armor":
      name = itemShopNameAddSuffix("Adamantine", ...mediumArmor.concat(heavyArmor))
      break
    case "Adamantine Weapon":
      name = itemShopNameAddSuffix("Adamantine", ...martialMeleeWeapons.concat(ammunition, simpleMeleeWeapons))
      break
    case "Ammunition +1":
      name = itemShopNameAddPrefix("+1", ...ammunition)
      break
    case "Enspelled Armor Uncommon":
      name = itemShopNameAddSuffix("Uncommon Enspelled", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Weapon Uncommon":
      name = itemShopNameAddSuffix("Uncommon Enspelled", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Mariner's Armor":
      name = itemShopNameAddSuffix("Mariner's", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Quaal's Feather Token Uncommon":
      name = itemShopNameAddSuffix("Quaal's Feather Token of", "Anchor", "Fan", "Tree")
      break
    case "Sword of Vengeance":
      name = itemShopNameAddPrefix("of Vengeance", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Weapon +1":
      name = itemShopNameAddPrefix("+1", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Weapon of Warning":
      name = itemShopNameAddPrefix("of Warning", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Ammunition +2":
      name = itemShopNameAddPrefix("+2", ...ammunition)
      break
    case "Armor +1":
      name = itemShopNameAddPrefix("+1", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Armor of Resistance":
      name = itemShopNameAddPrefix("of Resistance", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Armor of Vulnerability":
      name = itemShopNameAddPrefix("of Vulnerability", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Armor Rare":
      name = itemShopNameAddSuffix("Rare Enspelled", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Weapon Rare":
      name = itemShopNameAddSuffix("Rare Enspelled", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Figurine of Wondrous Power Rare":
      name = itemShopNameAddPrefix("Figurine of Wondrous Power", "Bronze Griffon", "Ebony Fly", "Golden Lions", "Ivory Goats", "Marble Elephant", "Onyx Dog", "Serpentine Owl")
      break
    case "Flame Tongue":
      name = itemShopNameAddSuffix("Flame Tongue", ...simpleMeleeWeapons.concat(martialMeleeWeapons))
      break
    case "Giant Slayer":
      name = itemShopNameAddSuffix("Giant Slayer", ...simpleMeleeWeapons.concat(martialMeleeWeapons))
      break
    case "Ioun Stone Rare":
      name = itemShopNameAddSuffix("Ioun Stone of", "Awareness", "Protection", "Reserve", "Sustenance")
      break
    case "Quaal's Feather Token Rare":
      name = itemShopNameAddSuffix("Quaal's Feather Token of", "Bird", "Swan Boat", "Whip")
      break
    case "Sword of Life Stealing":
      name = itemShopNameAddPrefix("of Life Stealing", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Sword of Wounding":
      name = itemShopNameAddPrefix("of Wounding", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Vicious Weapon":
      name = itemShopNameAddSuffix("Vicious", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Weapon +2":
      name = itemShopNameAddPrefix("+2", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Ammunition +3":
      name = itemShopNameAddPrefix("+3", ...ammunition)
      break
    case "Ammunition of Slaying":
      let type = getRandomFromList("Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Humonoid", "Fey", "Fiend", "Giant", "Monstrosity", "Ooze", "Plant", "Undead")
      name = itemShopNameAddPrefix(`of ${type} Slaying`, ...ammunition)
      break
    case "Armor +2":
      name = itemShopNameAddPrefix("+2", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Dancing Sword":
      name = itemShopNameAddSuffix("Dancing", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Demon Armor":
      name = itemShopNameAddPrefix("Demon", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Armor Very Rare":
      name = itemShopNameAddSuffix("Very Rare Enspelled", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Weapon Very Rare":
      name = itemShopNameAddSuffix("Very Rare Enspelled", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Frost Brand":
      name = itemShopNameAddSuffix("Frost Brand", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
      break
    case "Ioun Stone Very Rare":
      name = itemShopNameAddSuffix("Ioun Stone of", "Absorption", "Fortitude", "Insight", "Intellect", "Leadership", "Strength")
      break
    case "Sword of Sharpness":
      name = itemShopNameAddPrefix("of Sharpness", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar")
      break
    case "Weapon +3":
      name = itemShopNameAddPrefix("+3", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Armor +3":
      name = itemShopNameAddPrefix("+3", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Armor Legendary":
      name = itemShopNameAddSuffix("Very Rare Enspelled", ...lightArmor.concat(mediumArmor, heavyArmor))
      break
    case "Enspelled Weapon Legendary":
      name = itemShopNameAddSuffix("Legendary Enspelled", ...simpleMeleeWeapons.concat(martialMeleeWeapons, simpleRangedWeapons, martialRangedWeapons))
      break
    case "Luck Blade":
      name = itemShopNameAddPrefix("Luck Blade", "Glaive", "Greatsword", "Longsword", "Rapier", "Scimitar", "Sickle", "Shortsword")
      break
    case "Moonblade":
      name = itemShopNameAddPrefix("Moonblade", "Greatsword", "Longsword", "Rapier", "Scimitar", "Shortsword")
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

var scifiMaleNames = ["Ares", "Astro", "Macro", "Cadmus", "Cyno", "Fade", "Hack", "Hax", "Indigo", "Hinge", "Jarno", "Jax", "Knox", "Link", "Maxx", "Merrick", "Miles", "Mirari", "Niko", "Nano", "Oberon", "Onyx", "Orion", "Osso", "Paradox", "Pip", "Phoenix", "Radius", "Rexx", "Razlin", "Reznor", "Rian", "Roscoe", "Ryker", "Rush", "Riden", "Drake", "Frost", "Cassian", "Neyo", "Maverick", "Azriel", "Auryn", "Daggar", "Evyn", "Jace", "Jaron", "Loki", "Oren", "Ridley", "Sagan", "Silas","Solon", "Stellan", "Sorrel", "Seth", "Theron", "Zen", "Klay", "Blaze", "Xander", "Mace", "Dozer", "Eno", "Tip", "Ray", "Genesis", "Galac", "Eclipse", "Zev", "Zaid", "Wilder", "Sol", "Jupiter", "Mars", "Star", "Cosmo", "Aster", "Lazer", "Zeno", "Sirius", "Azra", "Atom", "Teague", "Rigel", "Cato", "Zhane", "Ace", "Rocket", "Kip", "Meter", "Starbuck", "Roman", "Fiat", "Kyron", "Nyx", "Rune", "Nero", "Quantum", "Nym", "Morphius", "Striker", "Bridger"]

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


/*
Auto-Cards
Made by LewdLeah on May 21, 2025
This AI Dungeon script automatically creates and updates plot-relevant story cards while you play
General-purpose usefulness and compatibility with other scenarios/scripts were my design priorities
Auto-Cards is fully open-source, please copy for use within your own projects! ❤️
*/
function AutoCards(inHook, inText, inStop) {
    "use strict";
    /*
    Default Auto-Cards settings
    Feel free to change these settings to customize your scenario's default gameplay experience
    The default values for your scenario are specified below:
    */

    // Is Auto-Cards already enabled when the adventure begins?
    const DEFAULT_DO_AC = true
    // (true or false)

    // Pin the "Configure Auto-Cards" story card at the top of the player's story cards list?
    const DEFAULT_PIN_CONFIGURE_CARD = true
    // (true or false)

    // Minimum number of turns in between automatic card generation events?
    const DEFAULT_CARD_CREATION_COOLDOWN = 22
    // (0 to 9999)

    // Use a bulleted list format for newly generated card entries?
    const DEFAULT_USE_BULLETED_LIST_MODE = true
    // (true or false)

    // Maximum allowed length for newly generated story card entries?
    const DEFAULT_GENERATED_ENTRY_LIMIT = 750
    // (200 to 2000)

    // Do newly generated cards have memory updates enabled by default?
    const DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES = true
    // (true or false)

    // Default character limit before the card's memory bank is summarized?
    const DEFAULT_NEW_CARDS_MEMORY_LIMIT = 2750
    // (1750 to 9900)

    // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
    const DEFAULT_MEMORY_COMPRESSION_RATIO = 25
    // (20 to 1250)

    // Ignore all-caps during title candidate detection?
    const DEFAULT_IGNORE_ALL_CAPS_TITLES = true
    // (true or false)

    // Should player input actions (Do/Say/Story) be considered during title detection?
    const DEFAULT_DETECT_TITLES_FROM_INPUTS = false
    // (true or false)

    // How many (minimum) actions in the past does Auto-Cards look for named entities?
    const DEFAULT_MINIMUM_LOOK_BACK_DISTANCE = 5
    // (2 to 88)

    // Is Live Script Interface v2 enabled?
    const DEFAULT_DO_LSI_V2 = false
    // (true or false)

    // Should the "Debug Data" story card be visible?
    const DEFAULT_SHOW_DEBUG_DATA = false
    // (true or false)

    // AI prompt used to generate new story card entries?
    const DEFAULT_CARD_GENERATION_PROMPT = prose(
        "-----",
        "",
        "<SYSTEM>",
        "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
        "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
        "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
        "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
        "- Create new information based on the context and story direction",
        "- Mention %{title} in every sentence",
        "- Use semicolons if needed",
        "- Add additional details about %{title} beneath incomplete entries",
        "- Be concise and grounded",
        "- Imitate the story's writing style and infer the reader's preferences",
        "</SYSTEM>",
        "Continue the entry for %{title} below while avoiding repetition:",
        "%{entry}"
    ); // (mimic this multi-line "text" format)

    // AI prompt used to summarize a given story card's memory bank?
    const DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT = prose(
        "-----",
        "",
        "<SYSTEM>",
        "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
        "- Ensure the passage retains the core meaning and most essential details",
        "- Use the third-person perspective",
        "- Prioritize information-density, accuracy, and completeness",
        "- Remain brief and concise",
        "- Write firmly in the past tense",
        "- The paragraph below pertains to old events from far earlier in the story",
        "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
        "- Only reference information present inside the paragraph itself, be specific",
        "</SYSTEM>",
        "Write a summarized old memory passage for %{title} based only on the following paragraph:",
        "\"\"\"",
        "%{memory}",
        "\"\"\"",
        "Summarize below:"
    ); // (mimic this multi-line "text" format)

    // Titles banned from future card generation attempts?
    const DEFAULT_BANNED_TITLES_LIST = (
        "North, East, South, West, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, January, February, March, April, May, June, July, August, September, October, November, December"
    ); // (mimic this comma-list "text" format)

    // Default story card "type" used by Auto-Cards? (does not matter)
    const DEFAULT_CARD_TYPE = "class"
    // ("text")

    // Should titles mentioned in the "opening" plot component be banned from future card generation by default?
    const DEFAULT_BAN_TITLES_FROM_OPENING = true
    // (true or false)

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    Useful API functions for coders (otherwise ignore)
    Here's what each one does in plain terms:

    AutoCards().API.postponeEvents();
    Pauses Auto-Cards activity for n many turns

    AutoCards().API.emergencyHalt();
    Emergency stop or resume

    AutoCards().API.suppressMessages();
    Hides Auto-Cards toasts by preventing assignment to state.message

    AutoCards().API.debugLog();
    Writes to the debug log card

    AutoCards().API.toggle();
    Turns Auto-Cards on/off

    AutoCards().API.generateCard();
    Initiates AI generation of the requested card

    AutoCards().API.redoCard();
    Regenerates an existing card

    AutoCards().API.setCardAsAuto();
    Flags or unflags a card as automatic

    AutoCards().API.addCardMemory();
    Adds a memory to a specific card

    AutoCards().API.eraseAllAutoCards();
    Deletes all auto-cards

    AutoCards().API.getUsedTitles();
    Lists all current card titles

    AutoCards().API.getBannedTitles();
    Shows your current banned titles list

    AutoCards().API.setBannedTitles();
    Replaces the banned titles list with a new list

    AutoCards().API.buildCard();
    Makes a new card from scratch, using exact parameters

    AutoCards().API.getCard();
    Finds cards that match a filter

    AutoCards().API.eraseCard();
    Deletes cards matching a filter
    */

    /*** Postpones internal Auto-Cards events for a specified number of turns
    * 
    * @function
    * @param {number} turns A non-negative integer representing the number of turns to postpone events
    * @returns {Object} An object containing cooldown values affected by the postponement
    * @throws {Error} If turns is not a non-negative integer
    */
    // AutoCards().API.postponeEvents();

    /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
    * 
    * @function
    * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
    * @returns {boolean} The value that was set
    * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
    */
    // AutoCards().API.emergencyHalt();

    /*** Enables or disables state.message assignments from Auto-Cards
    * 
    * @function
    * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
    * @returns {Array} The current pending messages after setting suppression
    * @throws {Error} If shouldSuppress is not a boolean
    */
    // AutoCards().API.suppressMessages();

    /*** Logs debug information to the "Debug Log card console
    * 
    * @function
    * @param {...any} args Arguments to log for debugging purposes
    * @returns {any} The story card object reference
    */
    // AutoCards().API.debugLog();

    /*** Toggles Auto-Cards behavior or sets it directly
    * 
    * @function
    * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
    * @returns {boolean|null|undefined} The state that was set or inferred
    * @throws {Error} If toggleType is not a boolean, null, or undefined
    */
    // AutoCards().API.toggle();

    /*** Generates a new card using optional prompt details or a card request object
    * 
    * This function supports two usage modes:
    * 
    * 1. Object Mode:
    *    Pass a single object containing card request parameters. The only mandatory property is "title"
    *    All other properties are optional and customize the card generation
    * 
    *    Example:
    *    AutoCards().API.generateCard({
    *      type: "character",         // The category or type of the card; defaults to "class" if omitted
    *      title: "Leah the Lewd",    // The card's title (required)
    *      keysStart: "Lewd,Leah",    // Optional trigger keywords associated with the card
    *      entryStart: "You are a woman named Leah.", // Existing content to prepend to the AI-generated entry
    *      entryPrompt: "",           // Global prompt guiding AI content generation
    *      entryPromptDetails: "Focus on Leah's works of artifice and ingenuity", // Additional prompt info
    *      entryLimit: 750,           // Target character length for the AI-generated entry
    *      description: "Player character!", // Freeform notes
    *      memoryStart: "Leah purchased a new sweater.", // Existing memory content
    *      memoryUpdates: true,       // Whether the card's memory bank will update on its own
    *      memoryLimit: 2750          // Preferred memory bank size before summarization/compression
    *    });
    * 
    * 2. String Mode:
    *    Pass a string as the title and optionally two additional strings to specify prompt details
    *    This mode is shorthand for quick card generation without an explicit card request object
    * 
    *    Examples:
    *    AutoCards().API.generateCard("Leah the Lewd");
    *    AutoCards().API.generateCard("Leah the Lewd", "Focus on Leah's works of artifice and ingenuity");
    *    AutoCards().API.generateCard(
    *      "Leah the Lewd",
    *      "Focus on Leah's works of artifice and ingenuity",
    *      "You are a woman named Leah."
    *    );
    * 
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title
    * @param {string} [extra1] Optional detailed prompt text when using string mode
    * @param {string} [extra2] Optional entry start text when using string mode
    * @returns {boolean} Returns true if the generation attempt succeeded, false otherwise
    * @throws {Error} Throws if called with invalid arguments or missing a required title property
    */
    // AutoCards().API.generateCard();

    /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
    *
    * @function
    * @param {Object|string} request Either a fully specified card request object or a string title for the card to be regenerated
    * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
    * @param {string} [newInfo=""] Additional info to append to the generation prompt
    * @returns {boolean} True if regeneration succeeded; false otherwise
    * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
    */
    // AutoCards().API.redoCard();

    /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
    *
    * @function
    * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
    * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
    * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
    * @throws {Error} If the arguments are invalid types
    */
    // AutoCards().API.setCardAsAuto();

    /*** Appends a memory to a story card's memory bank
    *
    * @function
    * @param {Object|string} targetCard A card object reference or title string
    * @param {string} newMemory The memory text to add
    * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
    * @throws {Error} If the inputs are not a string or valid card object reference
    */
    // AutoCards().API.addCardMemory();

    /*** Removes all previously generated auto-cards and resets various states
    *
    * @function
    * @returns {number} The number of cards that were removed
    */
    // AutoCards().API.eraseAllAutoCards();

    /*** Retrieves an array of titles currently used by the adventure's story cards
    *
    * @function
    * @returns {Array<string>} An array of strings representing used titles
    */
    // AutoCards().API.getUsedTitles();

    /*** Retrieves an array of banned titles
    *
    * @function
    * @returns {Array<string>} An array of banned title strings
    */
    // AutoCards().API.getBannedTitles();

    /*** Sets the banned titles array, replacing any previously banned titles
    *
    * @function
    * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
    * @returns {Object} An object containing oldBans and newBans arrays
    * @throws {Error} If the input is neither a string nor an array of strings
    */
    // AutoCards().API.setBannedTitles();

    /*** Creates a new story card with the specified parameters
    *
    * @function
    * @param {string|Object} title Card title string or full card template object containing all fields
    * @param {string} [entry] The entry text for the card
    * @param {string} [type] The card type (e.g., "character", "location")
    * @param {string} [keys] The keys (triggers) for the card
    * @param {string} [description] The notes or memory bank of the card
    * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
    * @returns {Object|null} The created card object reference, or null if creation failed
    */
    // AutoCards().API.buildCard();

    /*** Finds and returns story cards satisfying a user-defined condition
    * Example:
    * const leahCard = AutoCards().API.getCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function} predicate A function which takes a card and returns true if it matches
    * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
    * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
    * @throws {Error} If the predicate is not a function or getAll is not a boolean
    */
    // AutoCards().API.getCard();

    /*** Removes story cards based on a user-defined condition or by direct reference
    * Example:
    * AutoCards().API.eraseCard(card => (card.title === "Leah"));
    *
    * @function
    * @param {Function|Object} predicate A predicate function or a card object reference
    * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
    * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
    * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
    */
    // AutoCards().API.eraseCard();

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    To everyone who helped, thank you:

    AHotHamster22
    Most extensive testing, feedback, ideation, and kindness

    BinKompliziert
    UI feedback

    Boo
    Discord communication

    bottledfox
    API ideas for alternative card generation use-cases

    Bruno
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/Azuhre

    Burnout
    Implementation improvements, algorithm ideas, script help, and LSIv2 inspiration

    bweni
    Testing

    DebaczX
    Most extensive testing, feedback, ideation, and kindness

    Dirty Kurtis
    Card entry generation prompt engineering

    Dragranis
    Provided the memory dataset used for boundary calibration

    effortlyss
    Data, testing, in-game command ideas, config settings, and other UX improvements

    Hawk
    Grammar and special-cased proper nouns

    Idle Confusion
    Testing
    https://play.aidungeon.com/profile/Idle%20Confusion

    ImprezA
    Most extensive testing, feedback, ideation, and kindness
    https://play.aidungeon.com/profile/ImprezA

    Kat-Oli
    Title parsing, grammar, and special-cased proper nouns

    KryptykAngel
    LSIv2 ideas
    https://play.aidungeon.com/profile/KryptykAngel

    Mad19pumpkin
    API ideas
    https://play.aidungeon.com/profile/Mad19pumpkin

    Magic
    Implementation and syntax improvements
    https://play.aidungeon.com/profile/MagicOfLolis

    Mirox80
    Testing, feedback, and scenario integration ideas
    https://play.aidungeon.com/profile/Mirox80

    Nathaniel Wyvern
    Testing
    https://play.aidungeon.com/profile/NathanielWyvern

    NobodyIsUgly
    All-caps title parsing feedback

    OnyxFlame
    Card memory bank implementation ideas and special-cased proper nouns

    Purplejump
    API ideas for deep integration with other AID scripts

    Randy Viosca
    Context injection and card memory bank structure
    https://play.aidungeon.com/profile/Random_Variable

    RustyPawz
    API ideas for simplified card interaction
    https://play.aidungeon.com/profile/RustyPawz

    sinner
    Testing

    Sleepy pink
    Testing and feedback
    https://play.aidungeon.com/profile/Pinkghost

    Vutinberg
    Memory compression ideas and prompt engineering

    Wilmar
    Card entry generation and memory summarization prompt engineering

    Yi1i1i
    Idea for the redoCard API function and "/ac redo" in-game command

    A note to future individuals:
    If you fork or modify Auto-Cards... Go ahead and put your name here too! Yay! 🥰
    */

    //—————————————————————————————————————————————————————————————————————————————————

    /*
    The code below implements Auto-Cards
    Enjoy! ❤️
    */

    // My class definitions are hoisted by wrapper functions because it's less ugly (lol)
    const Const = hoistConst();
    const O = hoistO();
    const Words = hoistWords();
    const StringsHashed = hoistStringsHashed();
    const Internal = hoistInternal();
    // AutoCards has an explicitly immutable domain: HOOK, TEXT, and STOP
    const HOOK = inHook;
    const TEXT = ((typeof inText === "string") && inText) || "\n";
    const STOP = (inStop === true);
    // AutoCards returns a pseudoimmutable codomain which is initialized only once before being read and returned
    const CODOMAIN = new Const().declare();
    // Transient sets for high-performance lookup
    const [used, bans, auto, forenames, surnames] = Array.from({length: 5}, () => new Set());
    // Holds a reference to the data card singleton, remains unassigned unless required
    let data = null;
    // Validate globalThis.text
    text = ((typeof text === "string") && text) || "\n";
    // Container for the persistent state of AutoCards
    const AC = (function() {
        if (state.LSIv2) {
            // The Auto-Cards external API is also available from within the inner scope of LSIv2
            // Call with AutoCards().API.nameOfFunction(yourArguments);
            return state.LSIv2;
        } else if (state.AutoCards) {
            // state.AutoCards is prioritized for performance
            const ac = state.AutoCards;
            delete state.AutoCards;
            return ac;
        }
        const dataVariants = getDataVariants();
        data = getSingletonCard(false, O.f({...dataVariants.critical}), O.f({...dataVariants.debug}));
        // Deserialize the state of Auto-Cards from the data card
        const ac = (function() {
            try {
                return JSON.parse(data?.description);
            } catch {
                return null;
            }
        })();
        // If the deserialized state fails to match the following structure, fallback to defaults
        if (validate(ac, O.f({
            config: [
                "doAC", "deleteAllAutoCards", "pinConfigureCard", "addCardCooldown", "bulletedListMode", "defaultEntryLimit", "defaultCardsDoMemoryUpdates", "defaultMemoryLimit", "memoryCompressionRatio", "ignoreAllCapsTitles", "readFromInputs", "minimumLookBackDistance", "LSIv2", "showDebugData", "generationPrompt", "compressionPrompt", "defaultCardType"
            ],
            signal: [
                "emergencyHalt", "forceToggle", "overrideBans", "swapControlCards", "recheckRetryOrErase", "maxChars", "outputReplacement", "upstreamError"
            ],
            generation: [
                "cooldown", "completed", "permitted", "workpiece", "pending"
            ],
            compression: [
                "completed", "titleKey", "vanityTitle", "responseEstimate", "lastConstructIndex", "oldMemoryBank", "newMemoryBank"
            ],
            message: [
                "previous", "suppress", "pending", "event"
            ],
            chronometer: [
                "turn", "step", "amnesia", "postpone"
            ],
            database: {
                titles: [
                    "used", "banned", "candidates", "lastActionParsed", "lastTextHash", "pendingBans", "pendingUnbans"
                ],
                memories: [
                    "associations", "duplicates"
                ]
            }
        }))) {
            // The deserialization was a success
            return ac;
        }
        function validate(obj, finalKeys) {
            if ((typeof obj !== "object") || (obj === null)) {
                return false;
            } else {
                return Object.entries(finalKeys).every(([key, value]) => {
                    if (!(key in obj)) {
                        return false;
                    } else if (Array.isArray(value)) {
                        return value.every(finalKey => {
                            return (finalKey in obj[key]);
                        });
                    } else {
                        return validate(obj[key], value);
                    }
                });
            }
        }
        // AC is malformed, reinitialize with default values
        return {
            // In-game configurable parameters
            config: getDefaultConfig(),
            // Collection of various short-term signals passed forward in time
            signal: {
                // API: Suspend nearly all Auto-Cards processes
                emergencyHalt: false,
                // API: Forcefully toggle Auto-Cards on or off
                forceToggle: null,
                // API: Banned titles were externally overwritten
                overrideBans: 0,
                // Signal the construction of the opposite control card during the upcoming onOutput hook
                swapControlCards: false,
                // Signal a limited recheck of recent title candidates following a retry or erase
                recheckRetryOrErase: false,
                // Signal an upcoming onOutput text replacement
                outputReplacement: "",
                // info.maxChars is only defined onContext but must be accessed during other hooks too
                maxChars: Math.abs(info?.maxChars || 3200),
                // An error occured within the isolateLSIv2 scope during an earlier hook
                upstreamError: ""
            },
            // Moderates the generation of new story card entries
            generation: {
                // Number of story progression turns between card generations
                cooldown: validateCooldown(underQuarterInteger(validateCooldown(DEFAULT_CARD_CREATION_COOLDOWN))),
                // Continues prompted so far
                completed: 0,
                // Upper limit on consecutive continues
                permitted: 34,
                // Properties of the incomplete story card
                workpiece: O.f({}),
                // Pending card generations
                pending: [],
            },
            // Moderates the compression of story card memories
            compression: {
                // Continues prompted so far
                completed: 0,
                // A title header reference key for this auto-card
                titleKey: "",
                // The full and proper title
                vanityTitle: "",
                // Response length estimate used to compute # of outputs remaining
                responseEstimate: 1400,
                // Indices [0, n] of oldMemoryBank memories used to build the current memory construct
                lastConstructIndex: -1,
                // Bank of card memories awaiting compression
                oldMemoryBank: [],
                // Incomplete bank of newly compressed card memories
                newMemoryBank: [],
            },
            // Prevents incompatibility issues borne of state.message modification
            message: {
                // Last turn's state.message
                previous: getStateMessage(),
                // API: Allow Auto-Cards to post messages?
                suppress: false,
                // Pending Auto-Cards message(s)
                pending: (function() {
                    if (DEFAULT_DO_AC !== false) {
                        const startupMessage = "Enabled! You may now edit the \"Configure Auto-Cards\" story card";
                        logEvent(startupMessage);
                        return [startupMessage];
                    } else {
                        return [];
                    }
                })(),
                // Counter to track all Auto-Cards message events
                event: 0
            },
            // Timekeeper used for temporal events
            chronometer: {
                // Previous turn's measurement of info.actionCount
                turn: getTurn(),
                // Whether or not various turn counters should be stepped (falsified by retry actions)
                step: true,
                // Number of consecutive turn interruptions
                amnesia: 0,
                // API: Postpone Auto-Cards externalities for n many turns
                postpone: 0,
            },
            // Scalable atabase to store dynamic game information
            database: {
                // Words are pale shadows of forgotten names. As names have power, words have power
                titles: {
                    // A transient array of known titles parsed from card titles, entry title headers, and trigger keywords
                    used: [],
                    // Titles banned from future card generation attempts and various maintenance procedures
                    banned: getDefaultConfigBans(),
                    // Potential future card titles and their turns of occurrence
                    candidates: [],
                    // Helps avoid rechecking the same action text more than once, generally
                    lastActionParsed: -1,
                    // Ensures weird combinations of retry/erase events remain predictable
                    lastTextHash: "%@%",
                    // Newly banned titles which will be added to the config card
                    pendingBans: [],
                    // Currently banned titles which will be removed from the config card
                    pendingUnbans: []
                },
                // Memories are parsed from context and handled by various operations (basically magic)
                memories: {
                    // Dynamic store of 'story card -> memory' conceptual relations
                    associations: {},
                    // Serialized hashset of the 2000 most recent near-duplicate memories purged from context
                    duplicates: "%@%"
                }
            }
        };
    })();
    O.f(AC);
    O.s(AC.config);
    O.s(AC.signal);
    O.s(AC.generation);
    O.s(AC.generation.workpiece);
    AC.generation.pending.forEach(request => O.s(request));
    O.s(AC.compression);
    O.s(AC.message);
    O.s(AC.chronometer);
    O.f(AC.database);
    O.s(AC.database.titles);
    O.s(AC.database.memories);
    if (!HOOK) {
        globalThis.stop ??= false;
        AC.signal.maxChars = Math.abs(info?.maxChars || AC.signal.maxChars);
        if (HOOK === null) {
            if (/Recent\s*Story\s*:/i.test(text)) {
                // AutoCards(null) is always invoked once after being declared within the shared library
                // Context must be cleaned before passing text to the context modifier
                // This measure is taken to ensure compatability with other scripts
                // First, remove all command, continue, and comfirmation messages from the context window
                text = (text
                    // Hide the guide
                    .replace(/\s*>>>\s*Detailed\s*Guide\s*:[\s\S]*?<<<\s*/gi, "\n\n")
                    // Excise all /AC command messages
                    .replace(/\s*>>>\s*Auto-Cards\s*has\s*been\s*enabled!\s*<<<\s*/gi, " ")
                    .replace(/^.*\/\s*A\s*C.*$/gmi, "%@%")
                    .replace(/\s*%@%\s*/g, " ")
                    // Consolidate all consecutive continue messages into placeholder substrings
                    .replace(/(?:(?:\s*>>>\s*please\s*select\s*"continue"\s*\([\s\S]*?\)\s*<<<\s*)+)/gi, message => {
                        // Replace all continue messages with %@+%-patterned substrings
                        return (
                            // The # of "@" symbols corresponds with the # of consecutive continue messages
                            "%" + "@".repeat(
                                // Count the number of consecutive continue message occurrences
                                (message.match(/>>>\s*please\s*select\s*"continue"\s*\([\s\S]*?\)\s*<<</gi) || []).length
                            ) + "%"
                        );
                    })
                    // Situationally replace all placeholder substrings with either spaces or double newlines
                    .replace(/%@+%/g, (match, matchIndex, intermediateText) => {
                        // Check the case of the next char following the match to decide how to replace it
                        let i = matchIndex + match.length;
                        let nextChar = intermediateText[i];
                        if (nextChar === undefined) {
                            return " ";
                        } else if (/^[A-Z]$/.test(nextChar)) {
                            // Probably denotes a new sentence/paragraph
                            return "\n\n";
                        } else if (/^[a-z]$/.test(nextChar)) {
                            return " ";
                        }
                        // The first nextChar was a weird punctuation char, find the next non-whitespace char
                        do {
                            i++;
                            nextChar = intermediateText[i];
                            if (nextChar === undefined) {
                                return " ";
                            }
                        } while (/\s/.test(nextChar));
                        if (nextChar === nextChar.toUpperCase()) {
                            // Probably denotes a new sentence/paragraph
                            return "\n\n";
                        }
                        // Returning " " probably indicates a previous output's incompleteness
                        return " ";
                    })
                    // Remove all comfirmation requests and responses
                    .replace(/\s*\n*.*CONFIRM\s*DELETE.*\n*\s*/gi, confirmation => {
                        if (confirmation.includes("<<<")) {
                            return " ";
                        } else {
                            return "";
                        }
                    })
                    // Remove dumb memories from the context window
                    // (Latitude, if you're reading this, please give us memoryBank read/write access 😭)
                    .replace(/(Memories\s*:)\s*([\s\S]*?)\s*(Recent\s*Story\s*:|$)/i, (_, left, memories, right) => {
                        return (left + "\n" + (memories
                            .split("\n")
                            .filter(memory => {
                                const lowerMemory = memory.toLowerCase();
                                return !(
                                    (lowerMemory.includes("select") && lowerMemory.includes("continue"))
                                    || lowerMemory.includes(">>>") || lowerMemory.includes("<<<")
                                    || lowerMemory.includes("lsiv2")
                                );
                            })
                            .join("\n")
                        ) + (function() {
                            if (right !== "") {
                                return "\n\n" + right;
                            } else {
                                return "";
                            }
                        })());
                    })
                    // Remove LSIv2 error messages
                    .replace(/(?:\s*>>>[\s\S]*?<<<\s*)+/g, " ")
                );
                if (!shouldProceed()) {
                    // Whenever Auto-Cards is inactive, remove auto card title headers from contextualized story card entries
                    text = (text
                        .replace(/\s*{\s*titles?\s*:[\s\S]*?}\s*/gi, "\n\n")
                        .replace(/World\s*Lore\s*:\s*/i, "World Lore:\n")
                    );
                    // Otherwise, implement a more complex version of this step within the (HOOK === "context") scope of AutoCards
                }
            }
            CODOMAIN.initialize(null);
        } else {
            // AutoCards was (probably) called without arguments, return an external API to allow other script creators to programmatically govern the behavior of Auto-Cards from elsewhere within their own scripts
            CODOMAIN.initialize({API: O.f(Object.fromEntries(Object.entries({
                // Call these API functions like so: AutoCards().API.nameOfFunction(argumentsOfFunction)
                /*** Postpones internal Auto-Cards events for a specified number of turns
                * 
                * @function
                * @param {number} turns A non-negative integer representing the number of turns to postpone events
                * @returns {Object} An object containing cooldown values affected by the postponement
                * @throws {Error} If turns is not a non-negative integer
                */
                postponeEvents: function(turns) {
                    if (Number.isInteger(turns) && (0 <= turns)) {
                        AC.chronometer.postpone = turns;
                    } else {
                        throw new Error(
                            "Invalid argument: \"" + turns + "\" -> AutoCards().API.postponeEvents() must be be called with a non-negative integer"
                        );
                    }
                    return {
                        postponeAllCooldown: turns,
                        addCardRealCooldown: AC.generation.cooldown,
                        addCardNextCooldown: AC.config.addCardCooldown
                    };
                },
                /*** Sets or clears the emergency halt flag to pause Auto-Cards operations
                * 
                * @function
                * @param {boolean} shouldHalt A boolean value indicating whether to engage (true) or disengage (false) emergency halt
                * @returns {boolean} The value that was set
                * @throws {Error} If called from within isolateLSIv2 scope or with a non-boolean argument
                */
                emergencyHalt: function(shouldHalt) {
                    const scopeRestriction = new Error();
                    if (scopeRestriction.stack && scopeRestriction.stack.includes("isolateLSIv2")) {
                        throw new Error(
                            "Scope restriction: AutoCards().API.emergencyHalt() cannot be called from within LSIv2 (prevents deadlock) but you're more than welcome to use AutoCards().API.postponeEvents() instead!"
                        );
                    } else if (typeof shouldHalt === "boolean") {
                        AC.signal.emergencyHalt = shouldHalt;
                    } else {
                        throw new Error(
                            "Invalid argument: \"" + shouldHalt + "\" -> AutoCards().API.emergencyHalt() must be called with a boolean true or false"
                        );
                    }
                    return shouldHalt;
                },
                /*** Enables or disables state.message assignments from Auto-Cards
                * 
                * @function
                * @param {boolean} shouldSuppress If true, suppresses all Auto-Cards messages; false enables them
                * @returns {Array} The current pending messages after setting suppression
                * @throws {Error} If shouldSuppress is not a boolean
                */
                suppressMessages: function(shouldSuppress) {
                    if (typeof shouldSuppress === "boolean") {
                        AC.message.suppress = shouldSuppress;
                    } else {
                        throw new Error(
                            "Invalid argument: \"" + shouldSuppress + "\" -> AutoCards().API.suppressMessages() must be called with a boolean true or false"
                        );
                    }
                    return AC.message.pending;
                },
                /*** Logs debug information to the "Debug Log" console card
                * 
                * @function
                * @param {...any} args Arguments to log for debugging purposes
                * @returns {any} The story card object reference
                */
                debugLog: function(...args) {
                    return Internal.debugLog(...args);
                },
                /*** Toggles Auto-Cards behavior or sets it directly
                * 
                * @function
                * @param {boolean|null|undefined} toggleType If undefined, toggles the current state. If boolean or null, sets the state accordingly
                * @returns {boolean|null|undefined} The state that was set or inferred
                * @throws {Error} If toggleType is not a boolean, null, or undefined
                */
                toggle: function(toggleType) {
                    if (toggleType === undefined) {
                        if (AC.signal.forceToggle !== null) {
                            AC.signal.forceToggle = !AC.signal.forceToggle;
                        } else if (AC.config.doAC) {
                            AC.signal.forceToggle = false;
                        } else {
                            AC.signal.forceToggle = true;
                        }
                    } else if ((toggleType === null) || (typeof toggleType === "boolean")) {
                        AC.signal.forceToggle = toggleType;
                    } else {
                        throw new Error(
                            "Invalid argument: \"" + toggleType + "\" -> AutoCards().API.toggle() must be called with either A) a boolean true or false, B) a null argument, or C) no arguments at all (undefined)"
                        );
                    }
                    return toggleType;
                },
                /*** Generates a new card using optional prompt details or a request object
                * 
                * @function
                * @param {Object|string} request A request object with card parameters or a string representing the title
                * @param {string} [extra1] Optional entryPromptDetails if using string mode
                * @param {string} [extra2] Optional entryStart if using string mode
                * @returns {boolean} Did the generation attempt succeed or fail
                * @throws {Error} If the request is not valid or missing a title
                */
                generateCard: function(request, extra1, extra2) {
                    // Function call guide:
                    // AutoCards().API.generateCard({
                    //     // All properties except 'title' are optional
                    //     type: "card type, defaults to 'class' for ease of filtering",
                    //     title: "card title",
                    //     keysStart: "preexisting card triggers",
                    //     entryStart: "preexisting card entry",
                    //     entryPrompt: "prompt the AI will use to complete this entry",
                    //     entryPromptDetails: "extra details to include with this card's prompt",
                    //     entryLimit: 750, // target character count for the generated entry
                    //     description: "card notes",
                    //     memoryStart: "preexisting card memory",
                    //     memoryUpdates: true, // card updates when new relevant memories are formed
                    //     memoryLimit: 2750, // max characters before the card memory is compressed
                    // });
                    if (typeof request === "string") {
                        request = {title: request};
                        if (typeof extra1 === "string") {
                            request.entryPromptDetails = extra1;
                            if (typeof extra2 === "string") {
                                request.entryStart = extra2;
                            }
                        }
                    } else if (!isTitleInObj(request)) {
                        throw new Error(
                            "Invalid argument: \"" + request + "\" -> AutoCards().API.generateCard() must be called with either 1, 2, or 3 strings OR a correctly formatted card generation object"
                        );
                    }
                    O.f(request);
                    Internal.getUsedTitles(true);
                    return Internal.generateCard(request);
                },
                /*** Regenerates a card by title or object reference, optionally preserving or modifying its input info
                *
                * @function
                * @param {Object|string} request A card object reference or title string for the card to be regenerated
                * @param {boolean} [useOldInfo=true] If true, preserves old info in the new generation; false omits it
                * @param {string} [newInfo=""] Additional info to append to the generation prompt
                * @returns {boolean} True if regeneration succeeded; false otherwise
                * @throws {Error} If the request format is invalid, or if the second or third parameters are the wrong types
                */
                redoCard: function(request, useOldInfo = true, newInfo = "") {
                    if (typeof request === "string") {
                        request = {title: request};
                    } else if (!isTitleInObj(request)) {
                        throw new Error(
                            "Invalid argument: \"" + request + "\" -> AutoCards().API.redoCard() must be called with a string or correctly formatted card generation object"
                        );
                    }
                    if (typeof useOldInfo !== "boolean") {
                        throw new Error(
                            "Invalid argument: \"" + request + ", " + useOldInfo + "\" -> AutoCards().API.redoCard() requires a boolean as its second argument"
                        );
                    } else if (typeof newInfo !== "string") {
                        throw new Error(
                            "Invalid argument: \"" + request + ", " + useOldInfo + ", " + newInfo + "\" -> AutoCards().API.redoCard() requires a string for its third argument"
                        );
                    }
                    return Internal.redoCard(request, useOldInfo, newInfo);
                },
                /*** Flags or unflags a card as an auto-card, controlling its automatic generation behavior
                *
                * @function
                * @param {Object|string} targetCard The card object or title to mark/unmark as an auto-card
                * @param {boolean} [setOrUnset=true] If true, marks the card as an auto-card; false removes the flag
                * @returns {boolean} True if the operation succeeded; false if the card was invalid or already matched the target state
                * @throws {Error} If the arguments are invalid types
                */
                setCardAsAuto: function(targetCard, setOrUnset = true) {
                    if (isTitleInObj(targetCard)) {
                        targetCard = targetCard.title;
                    } else if (typeof targetCard !== "string") {
                        throw new Error(
                            "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.setCardAsAuto() must be called with a string or card object"
                        );
                    }
                    if (typeof setOrUnset !== "boolean") {
                        throw new Error(
                            "Invalid argument: \"" + targetCard + ", " + setOrUnset + "\" -> AutoCards().API.setCardAsAuto() requires a boolean as its second argument"
                        );
                    }
                    const [card, isAuto] = getIntendedCard(targetCard);
                    if (card === null) {
                        return false;
                    }
                    if (setOrUnset) {
                        if (checkAuto()) {
                            return false;
                        }
                        card.description = "{title:}";
                        Internal.getUsedTitles(true);
                        return card.entry.startsWith("{title: ");
                    } else if (!checkAuto()) {
                        return false;
                    }
                    card.entry = removeAutoProps(card.entry);
                    card.description = removeAutoProps(card.description.replace((
                        /\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi
                    ), ""));
                    function checkAuto() {
                        return (isAuto || /{updates: (?:true|false), limit: \d+}/.test(card.description));
                    }
                    return true;
                },
                /*** Appends a memory to a story card's memory bank
                *
                * @function
                * @param {Object|string} targetCard A card object reference or title string
                * @param {string} newMemory The memory text to add
                * @returns {boolean} True if the memory was added; false if it was empty, already present, or the card was not found
                * @throws {Error} If the inputs are not a string or valid card object reference
                */
                addCardMemory: function(targetCard, newMemory) {
                    if (isTitleInObj(targetCard)) {
                        targetCard = targetCard.title;
                    } else if (typeof targetCard !== "string") {
                        throw new Error(
                            "Invalid argument: \"" + targetCard + "\" -> AutoCards().API.addCardMemory() must be called with a string or card object"
                        );
                    }
                    if (typeof newMemory !== "string") {
                        throw new Error(
                            "Invalid argument: \"" + targetCard + ", " + newMemory + "\" -> AutoCards().API.addCardMemory() requires a string for its second argument"
                        );
                    }
                    newMemory = newMemory.trim().replace(/\s+/g, " ").replace(/^-+\s*/, "");
                    if (newMemory === "") {
                        return false;
                    }
                    const [card, isAuto, titleKey] = getIntendedCard(targetCard);
                    if (
                        (card === null)
                        || card.description.replace(/\s+/g, " ").toLowerCase().includes(newMemory.toLowerCase())
                    ) {
                        return false;
                    } else if (card.description !== "") {
                        card.description += "\n";
                    }
                    card.description += "- " + newMemory;
                    if (titleKey in AC.database.memories.associations) {
                        AC.database.memories.associations[titleKey][1] = (StringsHashed
                            .deserialize(AC.database.memories.associations[titleKey][1], 65536)
                            .remove(newMemory)
                            .add(newMemory)
                            .latest(3500)
                            .serialize()
                        );
                    } else if (isAuto) {
                        AC.database.memories.associations[titleKey] = [999, (new StringsHashed(65536)
                            .add(newMemory)
                            .serialize()
                        )];
                    }
                    return true;
                },
                /*** Removes all previously generated auto-cards and resets various states
                *
                * @function
                * @returns {number} The number of cards that were removed
                */
                eraseAllAutoCards: function() {
                    return Internal.eraseAllAutoCards();
                },
                /*** Retrieves an array of titles currently used by the adventure's story cards
                *
                * @function
                * @returns {Array<string>} An array of strings representing used titles
                */
                getUsedTitles: function() {
                    return Internal.getUsedTitles(true);
                },
                /*** Retrieves an array of banned titles
                *
                * @function
                * @returns {Array<string>} An array of banned title strings
                */
                getBannedTitles: function() {
                    return Internal.getBannedTitles();
                },
                /*** Sets the banned titles array, replacing any previously banned titles
                *
                * @function
                * @param {string|Array<string>} titles A comma-separated string or array of strings representing titles to ban
                * @returns {Object} An object containing oldBans and newBans arrays
                * @throws {Error} If the input is neither a string nor an array of strings
                */
                setBannedTitles: function(titles) {
                    const codomain = {oldBans: AC.database.titles.banned};
                    if (Array.isArray(titles) && titles.every(title => (typeof title === "string"))) {
                        assignBannedTitles(titles);
                    } else if (typeof titles === "string") {
                        if (titles.includes(",")) {
                            assignBannedTitles(titles.split(","));
                        } else {
                            assignBannedTitles([titles]);
                        }
                    } else {
                        throw new Error(
                            "Invalid argument: \"" + titles + "\" -> AutoCards().API.setBannedTitles() must be called with either a string or an array of strings"
                        );
                    }
                    codomain.newBans = AC.database.titles.banned;
                    function assignBannedTitles(titles) {
                        Internal.setBannedTitles(uniqueTitlesArray(titles), false);
                        AC.signal.overrideBans = 3;
                        return;
                    }
                    return codomain;
                },
                /*** Creates a new story card with the specified parameters
                *
                * @function
                * @param {string|Object} title Card title string or full card template object containing all fields
                * @param {string} [entry] The entry text for the card
                * @param {string} [type] The card type (e.g., "character", "location")
                * @param {string} [keys] The keys (triggers) for the card
                * @param {string} [description] The notes or memory bank of the card
                * @param {number} [insertionIndex] Optional index to insert the card at a specific position within storyCards
                * @returns {Object|null} The created card object reference, or null if creation failed
                */
                buildCard: function(title, entry, type, keys, description, insertionIndex) {
                    if (isTitleInObj(title)) {
                        type = title.type ?? type;
                        keys = title.keys ?? keys;
                        entry = title.entry ?? entry;
                        description = title.description ?? description;
                        title = title.title;
                    }
                    title = cast(title);
                    const card = constructCard(O.f({
                        type: cast(type, AC.config.defaultCardType),
                        title,
                        keys: cast(keys, buildKeys("", title)),
                        entry: cast(entry),
                        description: cast(description)
                    }), boundInteger(0, insertionIndex, storyCards.length, newCardIndex()));
                    if (notEmptyObj(card)) {
                        return card;
                    }
                    function cast(value, fallback = "") {
                        if (typeof value === "string") {
                            return value;
                        } else {
                            return fallback;
                        }
                    }
                    return null;
                },
                /*** Finds and returns story cards satisfying a user-defined condition
                *
                * @function
                * @param {Function} predicate A function which takes a card and returns true if it matches
                * @param {boolean} [getAll=false] If true, returns all matching cards; otherwise returns the first match
                * @returns {Object|Array<Object>|null} A single card object reference, an array of cards, or null if no match is found
                * @throws {Error} If the predicate is not a function or getAll is not a boolean
                */
                getCard: function(predicate, getAll = false) {
                    if (typeof predicate !== "function") {
                        throw new Error(
                            "Invalid argument: \"" + predicate + "\" -> AutoCards().API.getCard() must be called with a function"
                        );
                    } else if (typeof getAll !== "boolean") {
                        throw new Error(
                            "Invalid argument: \"" + predicate + ", " + getAll + "\" -> AutoCards().API.getCard() requires a boolean as its second argument"
                        );
                    }
                    return Internal.getCard(predicate, getAll);
                },
                /*** Removes story cards based on a user-defined condition or by direct reference
                *
                * @function
                * @param {Function|Object} predicate A predicate function or a card object reference
                * @param {boolean} [eraseAll=false] If true, removes all matching cards; otherwise removes the first match
                * @returns {boolean|number} True if a single card was removed, false if none matched, or the number of cards erased
                * @throws {Error} If the inputs are not a valid predicate function, card object, or boolean
                */
                eraseCard: function(predicate, eraseAll = false) {
                    if (isTitleInObj(predicate) && storyCards.includes(predicate)) {
                        return eraseCard(predicate);
                    } else if (typeof predicate !== "function") {
                        throw new Error(
                            "Invalid argument: \"" + predicate + "\" -> AutoCards().API.eraseCard() must be called with a function or card object"
                        );
                    } else if (typeof eraseAll !== "boolean") {
                        throw new Error(
                            "Invalid argument: \"" + predicate + ", " + eraseAll + "\" -> AutoCards().API.eraseCard() requires a boolean as its second argument"
                        );
                    } else if (eraseAll) {
                        // Erase all cards which satisfy the given condition
                        let cardsErased = 0;
                        for (const [index, card] of storyCards.entries()) {
                            if (predicate(card)) {
                                removeStoryCard(index);
                                cardsErased++;
                            }
                        }
                        return cardsErased;
                    }
                    // Erase the first card which satisfies the given condition
                    for (const [index, card] of storyCards.entries()) {
                        if (predicate(card)) {
                            removeStoryCard(index);
                            return true;
                        }
                    }
                    return false;
                }
            }).map(([key, fn]) => [key, function(...args) {
                const result = fn.apply(this, args);
                if (data) {
                    data.description = JSON.stringify(AC);
                }
                return result;
            }])))});
            function isTitleInObj(obj) {
                return (
                    (typeof obj === "object")
                    && (obj !== null)
                    && ("title" in obj)
                    && (typeof obj.title === "string")
                );
            }
        }
    } else if (AC.signal.emergencyHalt) {
        switch(HOOK) {
        case "context": {
            // AutoCards was called within the context modifier
            advanceChronometer();
            break; }
        case "output": {
            // AutoCards was called within the output modifier
            concludeEmergency();
            const previousAction = readPastAction(0);
            if (isDoSayStory(previousAction.type) && /escape\s*emergency\s*halt/i.test(previousAction.text)) {
                AC.signal.emergencyHalt = false;
            }
            break; }
        }
        CODOMAIN.initialize(TEXT);
    } else if ((AC.config.LSIv2 !== null) && AC.config.LSIv2) {
        // Silly recursion shenanigans
        state.LSIv2 = AC;
        AC.config.LSIv2 = false;
        const LSI_DOMAIN = AutoCards(HOOK, TEXT, STOP);
        // Is this lazy loading mechanism overkill? Yes. But it's fun!
        const factories = O.f({
            library: () => ({
                name: Words.reserved.library,
                entry: prose(
                    "// Your adventure's Shared Library code goes here",
                    "// Example Library code:",
                    "state.promptDragon ??= false;",
                    "state.mind ??= 0;",
                    "state.willStop ??= false;",
                    "function formatMessage(message, space = \" \") {",
                    "    let leadingNewlines = \"\";",
                    "    let trailingNewlines = \"\\n\\n\";",
                    "    if (text.startsWith(\"\\n> \")) {",
                    "        // We don't want any leading/trailing newlines for Do/Say",
                    "        trailingNewlines = \"\";",
                    "    } else if (history && (0 < history.length)) {",
                    "        // Decide leading newlines based on the previous action",
                    "        const action = history[history.length - 1];",
                    "        if ((action.type === \"continue\") || (action.type === \"story\")) {",
                    "            if (!action.text.endsWith(\"\\n\")) {",
                    "                leadingNewlines = \"\\n\\n\";",
                    "            } else if (!action.text.endsWith(\"\\n\\n\")) {",
                    "                leadingNewlines = \"\\n\";",
                    "            }",
                    "        }",
                    "    }",
                    "    return leadingNewlines + \"{>\" + space + (message",
                    "        .replace(/(?:\\s*(?:{>|<})\\s*)+/g, \" \")",
                    "        .trim()",
                    "    ) + space + \"<}\" + trailingNewlines;",
                    "}"),
                description:
                    "// You may also continue your Library code below",
                singleton: false,
                position: 2
            }),
            input: () => ({
                name: Words.reserved.input,
                entry: prose(
                    "// Your adventure's Input Modifier code goes here",
                    "// Example Input code:",
                    "const minds = [",
                    "\"kind and gentle\",",
                    "\"curious and eager\",",
                    "\"cruel and evil\"",
                    "];",
                    "// Type any of these triggers into a Do/Say/Story action",
                    "const commands = new Map([",
                    "[\"encounter dragon\", () => {",
                    "    AutoCards().API.postponeEvents(1);",
                    "    state.promptDragon = true;",
                    "    text = formatMessage(\"You encounter a dragon!\");",
                    "    log(\"A dragon appears!\");",
                    "}],",
                    "[\"summon leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.generateCard({",
                    "        title: \"Leah\",",
                    "        entryPromptDetails: (",
                    "            \"Leah is an exceptionally \" +",
                    "            minds[state.mind] +",
                    "            \" woman\"",
                    "        ),",
                    "        entryStart: \"Leah is your magically summoned assistant.\"",
                    "    });",
                    "    if (success) {",
                    "        text = formatMessage(\"You begin summoning Leah!\");",
                    "        log(\"Attempting to summon Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to summon Leah...\");",
                    "        log(\"Leah could not be summoned\");",
                    "    }",
                    "}],",
                    "[\"alter leah\", () => {",
                    "    alterMind();",
                    "    const success = AutoCards().API.redoCard(\"Leah\", true, (",
                    "        \"You subjected Leah to mind-altering magic\\n\" +",
                    "        \"Therefore she is now entirely \" +",
                    "        minds[state.mind] +",
                    "        \", utterly captivated by your will\"",
                    "    ));",
                    "    if (success) {",
                    "        text = formatMessage(",
                    "            \"You proceed to alter Leah's mind!\"",
                    "        );",
                    "        log(\"Attempting to alter Leah\");",
                    "    } else {",
                    "        text = formatMessage(\"You failed to alter Leah...\");",
                    "        log(\"Leah could not be altered\");",
                    "    }",
                    "}],",
                    "[\"show api\", () => {",
                    "    state.showAPI = true;",
                    "    text = formatMessage(\"Displaying the Auto-Cards API below\");",
                    "}],",
                    "[\"force stop\", () => {",
                    "    state.willStop = true;",
                    "}]",
                    "]);",
                    "const lowerText = text.toLowerCase();",
                    "for (const [trigger, implement] of commands) {",
                    "    if (lowerText.includes(trigger)) {",
                    "        implement();",
                    "        break;",
                    "    }",
                    "}",
                    "function alterMind() {",
                    "    state.mind = (state.mind + 1) % minds.length;",
                    "    return;",
                    "}"),
                description:
                    "// You may also continue your Input code below",
                singleton: false,
                position: 3
            }),
            context: () => ({
                name: Words.reserved.context,
                entry: prose(
                    "// Your adventure's Context Modifier code goes here",
                    "// Example Context code:",
                    "text = text.replace(/\\s*{>[\\s\\S]*?<}\\s*/gi, \"\\n\\n\");",
                    "if (state.willStop) {",
                    "    state.willStop = false;",
                    "    // Assign true to prevent the onOutput hook",
                    "    // This can only be done onContext",
                    "    stop = true;",
                    "} else if (state.promptDragon) {",
                    "    state.promptDragon = false;",
                    "    text = (",
                    "        text.trimEnd() +",
                    "        \"\\n\\nA cute little dragon softly lands upon your head. \"",
                    "    );",
                    "}"),
                description:
                    "// You may also continue your Context code below",
                singleton: false,
                position: 4
            }),
            output: () => ({
                name: Words.reserved.output,
                entry: prose(
                    "// Your adventure's Output Modifier code goes here",
                    "// Example Output code:",
                    "if (state.showAPI) {",
                    "    state.showAPI = false;",
                    "    const apiKeys = (Object.keys(AutoCards().API)",
                    "        .map(key => (\"AutoCards().API.\" + key + \"()\"))",
                    "    );",
                    "    text = formatMessage(apiKeys.join(\"\\n\"), \"\\n\");",
                    "    log(apiKeys);",
                    "}"),
                description:
                    "// You may also continue your Output code below",
                singleton: false,
                position: 5
            }),
            guide: () => ({
                name: Words.reserved.guide,
                entry: prose(
                    "Any valid JavaScript code you write within the Shared Library or Input/Context/Output Modifier story cards will be executed from top to bottom; Live Script Interface v2 closely emulates AI Dungeon's native scripting environment, even if you aren't the owner of the original scenario. Furthermore, I've provided full access to the Auto-Cards scripting API. Please note that disabling LSIv2 via the \"Configure Auto-Cards\" story card will reset your LSIv2 adventure scripts!",
                    "",
                    "If you aren't familiar with scripting in AI Dungeon, please refer to the official guidebook page:",
                    "https://help.aidungeon.com/scripting",
                    "",
                    "I've included an example script with the four aforementioned code cards, to help showcase some of my fancy schmancy Auto-Cards API functions. Take a look, try some of my example commands, inspect the Console Log, and so on... It's a ton of fun! ❤️",
                    "",
                    "If you ever run out of space in your Library, Input, Context, or Output code cards, simply duplicate whichever one(s) you need and then perform an in-game turn before writing any more code. (emphasis on \"before\") Doing so will signal LSIv2 to convert your duplicated code card(s) into additional auxiliary versions.",
                    "",
                    "Auxiliary code cards are numbered, and any code written within will be appended in sequential order. For example:",
                    "// Shared Library (entry)",
                    "// Shared Library (notes)",
                    "// Shared Library 2 (entry)",
                    "// Shared Library 2 (notes)",
                    "// Shared Library 3 (entry)",
                    "// Shared Library 3 (notes)",
                    "// Input Modifier (entry)",
                    "// Input Modifier (notes)",
                    "// Input Modifier 2 (entry)",
                    "// Input Modifier 2 (notes)",
                    "// And so on..."),
                description:
                    "",
                singleton: true,
                position: 0
            }),
            state: () => ({
                name: Words.reserved.state,
                entry:
                    "Your adventure's full state object is displayed in the Notes section below.",
                description:
                    "",
                singleton: true,
                position: 6
            }),
            log: () => ({
                name: Words.reserved.log,
                entry:
                    "Please refer to the Notes section below to view the full log history for LSIv2. Console log entries are ordered from most recent to oldest. LSIv2 error messages will be recorded here, alongside the outputs of log and console.log function calls within your adventure scripts.",
                description:
                    "",
                singleton: true,
                position: 1
            })
        });
        const cache = {};
        const templates = new Proxy({}, {
            get(_, key) {
                return cache[key] ??= O.f(factories[key]());
            }
        });
        if (AC.config.LSIv2 !== null) {
            switch(HOOK) {
            case "input": {
                // AutoCards was called within the input modifier
                const [libraryCards, inputCards, logCard] = collectCards(
                    templates.library,
                    templates.input,
                    templates.log
                );
                const [error, newText] = isolateLSIv2(parseCode(libraryCards, inputCards), callbackLog(logCard), LSI_DOMAIN);
                handleError(logCard, error);
                if (hadError()) {
                    CODOMAIN.initialize(getStoryError());
                    AC.signal.upstreamError = "\n";
                } else {
                    CODOMAIN.initialize(newText);
                }
                break; }
            case "context": {
                // AutoCards was called within the context modifier
                const [libraryCards, contextCards, logCard] = collectCards(
                    templates.library,
                    templates.context,
                    templates.log,
                    templates.input
                );
                if (hadError()) {
                    endContextLSI(LSI_DOMAIN);
                    break;
                }
                const [error, ...newCodomain] = (([error, newText, newStop]) => [error, newText, (newStop === true)])(
                    isolateLSIv2(parseCode(libraryCards, contextCards), callbackLog(logCard), LSI_DOMAIN[0], LSI_DOMAIN[1])
                );
                handleError(logCard, error);
                endContextLSI(newCodomain);
                function endContextLSI(newCodomain) {
                    CODOMAIN.initialize(newCodomain);
                    if (!newCodomain[1]) {
                        return;
                    }
                    const [guideCard, stateCard] = collectCards(
                        templates.guide,
                        templates.state,
                        templates.output
                    );
                    AC.message.pending = [];
                    concludeLSI(guideCard, stateCard, logCard);
                    return;
                }
                break; }
            case "output": {
                // AutoCards was called within the output modifier
                const [libraryCards, outputCards, guideCard, stateCard, logCard] = collectCards(
                    templates.library,
                    templates.output,
                    templates.guide,
                    templates.state,
                    templates.log
                );
                if (hadError()) {
                    endOutputLSI(true, LSI_DOMAIN);
                    break;
                }
                const [error, newText] = isolateLSIv2(parseCode(libraryCards, outputCards), callbackLog(logCard), LSI_DOMAIN);
                handleError(logCard, error);
                endOutputLSI(hadError(), newText);
                function endOutputLSI(displayError, newText) {
                    if (displayError) {
                        if (AC.signal.upstreamError === "\n") {
                            CODOMAIN.initialize("\n");
                        } else {
                            CODOMAIN.initialize(getStoryError() + "\n");
                        }
                        AC.message.pending = [];
                    } else {
                        CODOMAIN.initialize(newText);
                    }
                    concludeLSI(guideCard, stateCard, logCard);
                    return;
                }
                break; }
            case "initialize": {
                collectAll();
                logToCard(Internal.getCard(card => (card.title === templates.log.name)), "LSIv2 startup -> Success!");
                CODOMAIN.initialize(null);
                break; }
            }
            AC.config.LSIv2 = true;
            function parseCode(...args) {
                return (args
                    .flatMap(cardset => [cardset.primary, ...cardset.auxiliaries])
                    .flatMap(card => [card.entry, card.description])
                    .join("\n")
                );
            }
            function callbackLog(logCard) {
                return function(...args) {
                    logToCard(logCard, ...args);
                    return;
                }
            }
            function handleError(logCard, error) {
                if (!error) {
                    return;
                }
                O.f(error);
                AC.signal.upstreamError = (
                    "LSIv2 encountered an error during the on" + HOOK[0].toUpperCase() + HOOK.slice(1) + " hook"
                );
                if (error.message) {
                    AC.signal.upstreamError += ":\n";
                    if (error.stack) {
                        const stackMatch = error.stack.match(/AutoCards[\s\S]*?:\s*(\d+)\s*:\s*(\d+)/i);
                        if (stackMatch) {
                            AC.signal.upstreamError += (
                                (error.name ?? "Error") + ": " + error.message + "\n" +
                                "(line #" + stackMatch[1] + " column #" + stackMatch[2] + ")"
                            );
                        } else {
                            AC.signal.upstreamError += error.stack;
                        }
                    } else {
                        AC.signal.upstreamError += (error.name ?? "Error") + ": " + error.message;
                    }
                    AC.signal.upstreamError = cleanSpaces(AC.signal.upstreamError.trimEnd());
                }
                logToCard(logCard, AC.signal.upstreamError);
                if (getStateMessage() === AC.signal.upstreamError) {
                    state.message = AC.signal.upstreamError + " ";
                } else {
                    state.message = AC.signal.upstreamError;
                }
                return;
            }
            function hadError() {
                return (AC.signal.upstreamError !== "");
            }
            function getStoryError() {
                return getPrecedingNewlines() + ">>>\n" + AC.signal.upstreamError + "\n<<<\n";
            }
            function concludeLSI(guideCard, stateCard, logCard) {
                AC.signal.upstreamError = "";
                guideCard.description = templates.guide.description;
                guideCard.entry = templates.guide.entry;
                stateCard.entry = templates.state.entry;
                logCard.entry = templates.log.entry;
                postMessages();
                const simpleState = {...state};
                delete simpleState.LSIv2;
                stateCard.description = limitString(stringifyObject(simpleState).trim(), 999999).trimEnd();
                return;
            }
        } else {
            const cardsets = collectAll();
            for (const cardset of cardsets) {
                if ("primary" in cardset) {
                    killCard(cardset.primary);
                    for (const card of cardset.auxiliaries) {
                        killCard(card);
                    }
                } else {
                    killCard(cardset);
                }
                function killCard(card) {
                    unbanTitle(card.title);
                    eraseCard(card);
                }
            }
            AC.signal.upstreamError = "";
            CODOMAIN.initialize(LSI_DOMAIN);
        }
        // This measure ensures the Auto-Cards external API is equally available from within the inner scope of LSIv2
        // As before, call with AutoCards().API.nameOfFunction(yourArguments);
        deepMerge(AC, state.LSIv2);
        delete state.LSIv2;
        function deepMerge(target, source) {
            for (const key in source) {
                if (!source.hasOwnProperty(key)) {
                    continue;
                } else if (
                    (typeof source[key] === "object")
                    && (source[key] !== null)
                    && !Array.isArray(source[key])
                    && (typeof target[key] === "object")
                    && (target[key] !== null)
                    && (key !== "workpiece")
                    && (key !== "associations")
                ) {
                    // Recursively merge static objects
                    deepMerge(target[key], source[key]);
                } else {
                    // Directly replace values
                    target[key] = source[key];
                }
            }
            return;
        }
        function collectAll() {
            return collectCards(...Object.keys(factories).map(key => templates[key]));
        }
        // collectCards constructs, validates, repairs, retrieves, and organizes all LSIv2 script cards associated with the given arguments by iterating over the storyCards array only once! Returned elements are easily handled via array destructuring assignment
        function collectCards(...args) {
            // args: [{name: string, entry: string, description: string, singleton: boolean, position: integer}]
            const collections = O.f(args.map(({name, entry, description, singleton, position}) => {
                const collection = {
                    template: O.f({
                        type: AC.config.defaultCardType,
                        title: name,
                        keys: name,
                        entry,
                        description
                    }),
                    singleton,
                    position,
                    primary: null,
                    excess: [],
                };
                if (!singleton) {
                    collection.auxiliaries = [];
                    collection.occupied = new Set([0, 1]);
                }
                return O.s(collection);
            }));
            for (const card of storyCards) {
                O.s(card);
                for (const collection of collections) {
                    if (
                        !card.title.toLowerCase().includes(collection.template.title.toLowerCase())
                        && !card.keys.toLowerCase().includes(collection.template.title.toLowerCase())
                    ) {
                        // No match, swipe left
                        continue;
                    }
                    if (collection.singleton) {
                        setPrimary();
                        break;
                    }
                    const [extensionA, extensionB] = [card.title, card.keys].map(name => {
                        const extensionMatch = name.replace(/[^a-zA-Z0-9]/g, "").match(/\d+$/);
                        if (extensionMatch) {
                            return parseInt(extensionMatch[0], 10);
                        } else {
                            return -1;
                        }
                    });
                    if (-1 < extensionA) {
                        if (-1 < extensionB) {
                            if (collection.occupied.has(extensionA)) {
                                setAuxiliary(extensionB);
                            } else {
                                setAuxiliary(extensionA, true);
                            }
                        } else {
                            setAuxiliary(extensionA);
                        }
                    } else if (-1 < extensionB) {
                        setAuxiliary(extensionB);
                    } else {
                        setPrimary();
                    }
                    function setAuxiliary(extension, preChecked = false) {
                        if (preChecked || !collection.occupied.has(extension)) {
                            addAuxiliary(card, collection, extension);
                        } else {
                            card.title = card.keys = collection.template.title;
                            collection.excess.push(card);
                        }
                        return;
                    }
                    function setPrimary() {
                        card.title = card.keys = collection.template.title;
                        if (collection.primary === null) {
                            collection.primary = card;
                        } else {
                            collection.excess.push(card);
                        }
                        return;
                    }
                    break;
                }
            }
            for (const collection of collections) {
                banTitle(collection.template.title);
                if (collection.singleton) {
                    if (collection.primary === null) {
                        constructPrimary();
                    } else if (hasExs()) {
                        for (const card of collection.excess) {
                            eraseCard(card);
                        }
                    }
                    continue;
                } else if (collection.primary === null) {
                    if (hasExs()) {
                        collection.primary = collection.excess.shift();
                        if (hasExs() || hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            collection.primary.entry = collection.template.entry;
                            collection.primary.description = collection.template.description;
                            continue;
                        }
                    } else {
                        constructPrimary();
                        if (hasAux()) {
                            applyComment(collection.primary);
                        } else {
                            continue;
                        }
                    }
                }
                if (hasExs()) {
                    for (const card of collection.excess) {
                        let extension = 2;
                        while (collection.occupied.has(extension)) {
                            extension++;
                        }
                        applyComment(card);
                        addAuxiliary(card, collection, extension);
                    }
                }
                if (hasAux()) {
                    collection.auxiliaries.sort((a, b) => {
                        return a.extension - b.extension;
                    });
                }
                function hasExs() {
                    return (0 < collection.excess.length);
                }
                function hasAux() {
                    return (0 < collection.auxiliaries.length);
                }
                function applyComment(card) {
                    card.entry = card.description = "// You may continue writing your code here";
                    return;
                }
                function constructPrimary() {
                    collection.primary = constructCard(collection.template, newCardIndex());
                    // I like my LSIv2 cards to display in the proper order once initialized uwu
                    const templateKeys = Object.keys(factories);
                    const cards = templateKeys.map(key => O.f({
                        card: Internal.getCard(card => (card.title === templates[key].name)),
                        position: templates[key].position
                    })).filter(pair => (pair.card !== null));
                    if (cards.length < templateKeys.length) {
                        return;
                    }
                    const fullCardset = cards.sort((a, b) => (a.position - b.position)).map(pair => pair.card);
                    for (const card of fullCardset) {
                        eraseCard(card);
                        card.title = card.keys;
                    }
                    storyCards.splice(newCardIndex(), 0, ...fullCardset);
                    return;
                }
            }
            function addAuxiliary(card, collection, extension) {
                collection.occupied.add(extension);
                card.title = card.keys = collection.template.title + " " + extension;
                collection.auxiliaries.push({card, extension});
                return;
            }
            return O.f(collections.map(({singleton, primary, auxiliaries}) => {
                if (singleton) {
                    return primary;
                } else {
                    return O.f({primary, auxiliaries: O.f(auxiliaries.map(({card}) => card))});
                }
            }));
        }
    } else if (AC.config.doAC) {
        // Auto-Cards is currently enabled
        // "text" represents the original text which was present before any scripts were executed
        // "TEXT" represents the script-modified version of "text" which AutoCards was called with
        // This dual scheme exists to ensure Auto-Cards is safely compatible with other scripts
        switch(HOOK) {
        case "input": {
            // AutoCards was called within the input modifier
            if ((AC.config.deleteAllAutoCards === false) && /CONFIRM\s*DELETE/i.test(TEXT)) {
                CODOMAIN.initialize("CONFIRM DELETE -> Success!");
            } else if (/\/\s*A\s*C/i.test(text)) {
                CODOMAIN.initialize(doPlayerCommands(text));
            } else if (TEXT.startsWith(" ") && readPastAction(0).text.endsWith("\n")) {
                // Just a simple little formatting bugfix for regular AID story actions
                CODOMAIN.initialize(getPrecedingNewlines() + TEXT.replace(/^\s+/, ""));
            } else {
                CODOMAIN.initialize(TEXT);
            }
            break; }
        case "context": {
            // AutoCards was called within the context modifier
            advanceChronometer();
            // Get or construct the "Configure Auto-Cards" story card
            const configureCardTemplate = getConfigureCardTemplate();
            const configureCard = getSingletonCard(true, configureCardTemplate);
            banTitle(configureCardTemplate.title);
            pinAndSortCards(configureCard);
            const bansOverwritten = (0 < AC.signal.overrideBans);
            if ((configureCard.description !== configureCardTemplate.description) || bansOverwritten) {
                const descConfigPatterns = (getConfigureCardDescription()
                    .split(Words.delimiter)
                    .slice(1)
                    .map(descPattern => (descPattern
                        .slice(0, descPattern.indexOf(":"))
                        .trim()
                        .replace(/\s+/g, "\\s*")
                    ))
                    .map(descPattern => (new RegExp("^\\s*" + descPattern + "\\s*:", "i")))
                );
                const descConfigs = configureCard.description.split(Words.delimiter).slice(1);
                if (
                    (descConfigs.length === descConfigPatterns.length)
                    && descConfigs.every((descConfig, index) => descConfigPatterns[index].test(descConfig))
                ) {
                    // All description config headers must be present and well-formed
                    let cfg = extractDescSetting(0);
                    if (AC.config.generationPrompt !== cfg) {
                        notify("Changes to your card generation prompt were successfully saved");
                        AC.config.generationPrompt = cfg;
                    }
                    cfg = extractDescSetting(1);
                    if (AC.config.compressionPrompt !== cfg) {
                        notify("Changes to your card memory compression prompt were successfully saved");
                        AC.config.compressionPrompt = cfg;
                    }
                    if (bansOverwritten) {
                        overrideBans();
                    } else if ((0 < AC.database.titles.pendingBans.length) || (0 < AC.database.titles.pendingUnbans.length)) {
                        const pendingBans = AC.database.titles.pendingBans.map(pair => pair[0]);
                        const pendingRewrites = new Set(
                            lowArr([...pendingBans, ...AC.database.titles.pendingUnbans.map(pair => pair[0])])
                        );
                        Internal.setBannedTitles([...pendingBans, ...extractDescSetting(2)
                            .split(",")
                            .filter(newBan => !pendingRewrites.has(newBan.toLowerCase().replace(/\s+/, " ").trim()))
                        ], true);
                    } else {
                        Internal.setBannedTitles(extractDescSetting(2).split(","), true);
                    }
                    function extractDescSetting(index) {
                        return descConfigs[index].replace(descConfigPatterns[index], "").trim();
                    }
                } else if (bansOverwritten) {
                    overrideBans();
                }
                configureCard.description = getConfigureCardDescription();
                function overrideBans() {
                    Internal.setBannedTitles(AC.database.titles.pendingBans.map(pair => pair[0]), true);
                    AC.signal.overrideBans = 0;
                    return;
                }
            }
            if (configureCard.entry !== configureCardTemplate.entry) {
                const oldConfig = {};
                const settings = O.f((function() {
                    const userSettings = extractSettings(configureCard.entry);
                    if (userSettings.resetallconfigsettingsandprompts !== true) {
                        return userSettings;
                    }
                    // Reset all config settings and display state change notifications only when appropriate
                    Object.assign(oldConfig, AC.config);
                    Object.assign(AC.config, getDefaultConfig());
                    AC.config.deleteAllAutoCards = oldConfig.deleteAllAutoCards;
                    AC.config.LSIv2 = oldConfig.LSIv2;
                    AC.config.defaultCardType = oldConfig.defaultCardType;
                    AC.database.titles.banned = getDefaultConfigBans();
                    configureCard.description = getConfigureCardDescription();
                    configureCard.entry = getConfigureCardEntry();
                    const defaultSettings = extractSettings(configureCard.entry);
                    if ((DEFAULT_DO_AC === false) || (userSettings.disableautocards === true)) {
                        defaultSettings.disableautocards = true;
                    }
                    notify("Restoring all settings and prompts to their default values");
                    return defaultSettings;
                })());
                O.f(oldConfig);
                if ((settings.deleteallautomaticstorycards === true) && (AC.config.deleteAllAutoCards === null)) {
                    AC.config.deleteAllAutoCards = true;
                } else if (settings.showdetailedguide === true) {
                    AC.signal.outputReplacement = Words.guide;
                }
                let cfg;
                if (parseConfig("pinthisconfigcardnearthetop", false, "pinConfigureCard")) {
                    if (cfg) {
                        pinAndSortCards(configureCard);
                        notify("The settings config card will now be pinned near the top of your story cards list");
                    } else {
                        const index = storyCards.indexOf(configureCard);
                        if (index !== -1) {
                            storyCards.splice(index, 1);
                            storyCards.push(configureCard);
                        }
                        notify("The settings config card will no longer be pinned near the top of your story cards list");
                    }
                }
                if (parseConfig("minimumturnscooldownfornewcards", true, "addCardCooldown")) {
                    const oldCooldown = AC.config.addCardCooldown;
                    AC.config.addCardCooldown = validateCooldown(cfg);
                    if (!isPendingGeneration() && !isAwaitingGeneration() && (0 < AC.generation.cooldown)) {
                        const quarterCooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
                        if ((AC.config.addCardCooldown < oldCooldown) && (quarterCooldown < AC.generation.cooldown)) {
                            // Reduce the next generation's cooldown counter by a factor of 4
                            // But only if the new cooldown config is lower than it was before
                            // And also only if quarter cooldown is less than the current next gen cooldown
                            // (Just a random little user experience improvement)
                            AC.generation.cooldown = quarterCooldown;
                        } else if (oldCooldown < AC.config.addCardCooldown) {
                            if (oldCooldown === AC.generation.cooldown) {
                                AC.generation.cooldown = AC.config.addCardCooldown;
                            } else {
                                AC.generation.cooldown = validateCooldown(boundInteger(
                                    0,
                                    AC.generation.cooldown + quarterCooldown,
                                    AC.config.addCardCooldown
                                ));
                            }
                        }
                    }
                    switch(AC.config.addCardCooldown) {
                    case 9999: {
                        notify(
                            "You have disabled automatic card generation. To re-enable, simply set your cooldown config to any number lower than 9999. Or use the \"/ac\" in-game command to manually direct the card generation process"
                        );
                        break; }
                    case 1: {
                        notify(
                            "A new card will be generated during alternating game turns, but only if your story contains available titles"
                        );
                        break; }
                    case 0: {
                        notify(
                            "New cards will be immediately generated whenever valid titles exist within your recent story"
                        );
                        break; }
                    default: {
                        notify(
                            "A new card will be generated once every " + AC.config.addCardCooldown + " turns, but only if your story contains available titles"
                        );
                        break; }
                    }
                }
                if (parseConfig("newcardsuseabulletedlistformat", false, "bulletedListMode")) {
                    if (cfg) {
                        notify("New card entries will be generated using a bulleted list format");
                    } else {
                        notify("New card entries will be generated using a pure prose format");
                    }
                }
                if (parseConfig("maximumentrylengthfornewcards", true, "defaultEntryLimit")) {
                    AC.config.defaultEntryLimit = validateEntryLimit(cfg);
                    notify(
                        "New card entries will be limited to " + AC.config.defaultEntryLimit + " characters of generated text"
                    );
                }
                if (parseConfig("newcardsperformmemoryupdates", false, "defaultCardsDoMemoryUpdates")) {
                    if (cfg) {
                        notify("Newly constructed cards will begin with memory updates enabled by default");
                    } else {
                        notify("Newly constructed cards will begin with memory updates disabled by default");
                    }
                }
                if (parseConfig("cardmemorybankpreferredlength", true, "defaultMemoryLimit")) {
                    AC.config.defaultMemoryLimit = validateMemoryLimit(cfg);
                    notify(
                        "Newly constructed cards will begin with their memory bank length preference set to " + AC.config.defaultMemoryLimit + " characters of text"
                    );
                }
                if (parseConfig("memorysummarycompressionratio", true, "memoryCompressionRatio")) {
                    AC.config.memoryCompressionRatio = validateMemCompRatio(cfg);
                    notify(
                        "Freshly summarized card memory banks will be approximately " + (AC.config.memoryCompressionRatio / 10) + "x shorter than their originals"
                    );
                }
                if (parseConfig("excludeallcapsfromtitledetection", false, "ignoreAllCapsTitles")) {
                    if (cfg) {
                        notify("All-caps text will be ignored during title detection to help prevent bad cards");
                    } else {
                        notify("All-caps text may be considered during title detection processes");
                    }
                }
                if (parseConfig("alsodetecttitlesfromplayerinputs", false, "readFromInputs")) {
                    if (cfg) {
                        notify("Titles may be detected from player Do/Say/Story action inputs");
                    } else {
                        notify("Title detection will skip player Do/Say/Story action inputs for grammatical leniency");
                    }
                }
                if (parseConfig("minimumturnsagefortitledetection", true, "minimumLookBackDistance")) {
                    AC.config.minimumLookBackDistance = validateMinLookBackDist(cfg);
                    notify(
                        "Titles and names mentioned in your story may become eligible for future card generation attempts once they are at least " + AC.config.minimumLookBackDistance + " actions old"
                    );
                }
                cfg = settings.uselivescriptinterfacev2;
                if (typeof cfg === "boolean") {
                    if (AC.config.LSIv2 === null) {
                        if (cfg) {
                            AC.config.LSIv2 = true;
                            state.LSIv2 = AC;
                            AutoCards("initialize");
                            notify("Live Script Interface v2 is now embedded within your adventure!");
                        }
                    } else {
                        if (!cfg) {
                            AC.config.LSIv2 = null;
                            notify("Live Script Interface v2 has been removed from your adventure");
                        }
                    }
                }
                if (parseConfig("logdebugdatainaseparatecard" , false, "showDebugData")) {
                    if (data === null) {
                        if (cfg) {
                            notify("State may now be viewed within the \"Debug Data\" story card");
                        } else {
                            notify("The \"Debug Data\" story card has been removed");
                        }
                    } else if (cfg) {
                        notify("Debug data will be shared with the \"Critical Data\" story card to conserve memory");
                    } else {
                        notify("Debug mode has been disabled");
                    }
                }
                if ((settings.disableautocards === true) && (AC.signal.forceToggle !== true)) {
                    disableAutoCards();
                    break;
                } else {
                    // Apply the new card entry and proceed to implement Auto-Cards onContext
                    configureCard.entry = getConfigureCardEntry();
                }
                function parseConfig(settingsKey, isNumber, configKey) {
                    cfg = settings[settingsKey];
                    if (isNumber) {
                        return checkConfig("number");
                    } else if (!checkConfig("boolean")) {
                        return false;
                    }
                    AC.config[configKey] = cfg;
                    function checkConfig(type) {
                        return ((typeof cfg === type) && (
                            (notEmptyObj(oldConfig) && (oldConfig[configKey] !== cfg))
                            || (AC.config[configKey] !== cfg)
                        ));
                    }
                    return true;
                }
            }
            if (AC.signal.forceToggle === false) {
                disableAutoCards();
                break;
            }
            AC.signal.forceToggle = null;
            if (0 < AC.chronometer.postpone) {
                CODOMAIN.initialize(TEXT);
                break;
            }
            // Fully implement Auto-Cards onContext
            const forceStep = AC.signal.recheckRetryOrErase;
            const currentTurn = getTurn();
            const nearestUnparsedAction = boundInteger(0, currentTurn - AC.config.minimumLookBackDistance);
            if (AC.signal.recheckRetryOrErase || (nearestUnparsedAction <= AC.database.titles.lastActionParsed)) {
                // The player erased or retried an unknown number of actions
                // Purge recent candidates and perform a safety recheck
                if (nearestUnparsedAction <= AC.database.titles.lastActionParsed) {
                    AC.signal.recheckRetryOrErase = true;
                } else {
                    AC.signal.recheckRetryOrErase = false;
                }
                AC.database.titles.lastActionParsed = boundInteger(-1, nearestUnparsedAction - 8);
                for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                    const candidate = AC.database.titles.candidates[i];
                    for (let j = candidate.length - 1; 0 < j; j--) {
                        if (AC.database.titles.lastActionParsed < candidate[j]) {
                            candidate.splice(j, 1);
                        }
                    }
                    if (candidate.length <= 1) {
                        AC.database.titles.candidates.splice(i, 1);
                    }
                }
            }
            const pendingCandidates = new Map();
            if ((0 < nearestUnparsedAction) && (AC.database.titles.lastActionParsed < nearestUnparsedAction)) {
                const actions = [];
                for (
                    let actionToParse = AC.database.titles.lastActionParsed + 1;
                    actionToParse <= nearestUnparsedAction;
                    actionToParse++
                ) {
                    // I wrote this whilst sleep-deprived, somehow it works
                    const lookBack = currentTurn - actionToParse - (function() {
                        if (isDoSayStory(readPastAction(0).type)) {
                            // Inputs count as 2 actions instead of 1, conditionally offset lookBack by 1
                            return 0;
                        } else {
                            return 1;
                        }
                    })();
                    if (history.length <= lookBack) {
                        // history cannot be indexed with a negative integer
                        continue;
                    }
                    const action = readPastAction(lookBack);
                    const thisTextHash = new StringsHashed(4096).add(action.text).serialize();
                    if (actionToParse === nearestUnparsedAction) {
                        if (AC.signal.recheckRetryOrErase || (thisTextHash === AC.database.titles.lastTextHash)) {
                            // Additional safety to minimize duplicate candidate additions during retries or erases
                            AC.signal.recheckRetryOrErase = true;
                            break;
                        } else {
                            // Action parsing will proceed
                            AC.database.titles.lastActionParsed = nearestUnparsedAction;
                            AC.database.titles.lastTextHash = thisTextHash;
                        }
                    } else if (
                        // Special case where a consecutive retry>erase>continue cancels out
                        AC.signal.recheckRetryOrErase
                        && (actionToParse === (nearestUnparsedAction - 1))
                        && (thisTextHash === AC.database.titles.lastTextHash)
                    ) {
                        AC.signal.recheckRetryOrErase = false;
                    }
                    actions.push([action, actionToParse]);
                }
                if (!AC.signal.recheckRetryOrErase) {
                    for (const [action, turn] of actions) {
                        if (
                            (action.type === "see")
                            || (action.type === "unknown")
                            || (!AC.config.readFromInputs && isDoSayStory(action.type))
                            || /^[^\p{Lu}]*$/u.test(action.text)
                            || action.text.includes("<<<")
                            || /\/\s*A\s*C/i.test(action.text)
                            || /CONFIRM\s*DELETE/i.test(action.text)
                        ) {
                            // Skip see actions
                            // Skip input actions (only if input title detection has been disabled in the config)
                            // Skip strings without capital letters
                            // Skip utility actions
                            continue;
                        }
                        const words = (prettifyEmDashes(action.text)
                            // Nuh uh
                            .replace(/[“”]/g, "\"").replace(/[‘’]/g, "'").replaceAll("´", "`")
                            .replaceAll("。", ".").replaceAll("？", "?").replaceAll("！", "!")
                            // Replace special clause opening punctuation with colon ":" terminators
                            .replace(/(^|\s+)["'`]\s*/g, ": ").replace(/\s*[\(\[{]\s*/g, ": ")
                            // Likewise for end-quotes (curbs a common AI grammar mistake)
                            .replace(/\s*,?\s*["'`](?:\s+|$)/g, ": ")
                            // Replace funky wunky symbols with regular spaces
                            .replace(/[؟،«»¿¡„“…§，、\*_~><\)\]}#"`\s]/g, " ")
                            // Replace some mid-sentence punctuation symbols with a placeholder word
                            .replace(/\s*[—;,\/\\]\s*/g, " %@% ")
                            // Replace "I", "I'm", "I'd", "I'll", and "I've" with a placeholder word
                            .replace(/(?:^|\s+|-)I(?:'(?:m|d|ll|ve))?(?:\s+|-|$)/gi, " %@% ")
                            // Remove "'s" only if not followed by a letter
                            .replace(/'s(?![a-zA-Z])/g, "")
                            // Replace "s'" with "s" only if preceded but not followed by a letter
                            .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
                            // Remove apostrophes not between letters (preserve contractions like "don't")
                            .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
                            // Remove a leading bullet
                            .replace(/^\s*-+\s*/, "")
                            // Replace common honorifics with a placeholder word
                            .replace(buildKiller(Words.honorifics), " %@% ")
                            // Remove common abbreviations
                            .replace(buildKiller(Words.abbreviations), " ")
                            // Fix end punctuation
                            .replace(/\s+\.(?![a-zA-Z])/g, ".").replace(/\.\.+/g, ".")
                            .replace(/\s+\?(?![a-zA-Z])/g, "?").replace(/\?\?+/g, "?")
                            .replace(/\s+!(?![a-zA-Z])/g, "!").replace(/!!+/g, "!")
                            .replace(/\s+:(?![a-zA-Z])/g, ":").replace(/::+/g, ":")
                            // Colons are treated as substitute end-punctuation, apply the capitalization rule
                            .replace(/:\s+(\S)/g, (_, next) => ": " + next.toUpperCase())
                            // Condense consecutive whitespace
                            .trim().replace(/\s+/g, " ")
                        ).split(" ");
                        if (!Array.isArray(words) || (words.length < 2)) {
                            continue;
                        }
                        const titles = [];
                        const incompleteTitle = [];
                        let previousWordTerminates = true;
                        for (let i = 0; i < words.length; i++) {
                            let word = words[i];
                            if (startsWithTerminator()) {
                                // This word begins on a terminator, push the preexisting incomplete title to titles and proceed with the next sentence's beginning
                                pushTitle();
                                previousWordTerminates = true;
                                // Ensure no leading terminators remain
                                while ((word !== "") && startsWithTerminator()) {
                                    word = word.slice(1);
                                }
                            }
                            if (word === "") {
                                continue;
                            } else if (previousWordTerminates) {
                                // We cannot detect titles from sentence beginnings due to sentence capitalization rules. The previous sentence was recently terminated, implying the current series of capitalized words (plus lowercase minor words) occurs near the beginning of the current sentence
                                if (endsWithTerminator()) {
                                    continue;
                                } else if (startsWithUpperCase()) {
                                    if (isMinorWord(word)) {
                                        // Special case where a capitalized minor word precedes a named entity, clear the previous termination status
                                        previousWordTerminates = false;
                                    }
                                    // Otherwise, proceed without clearing
                                } else if (!isMinorWord(word) && !/^(?:and|&)(?:$|[\.\?!:]$)/.test(word)) {
                                    // Previous sentence termination status is cleared by the first new non-minor lowercase word encountered during forward iteration through the action text's words
                                    previousWordTerminates = false;
                                }
                                continue;
                            }
                            // Words near the beginning of this sentence have been skipped, proceed with named entity detection using capitalization rules. An incomplete title will be pushed to titles if A) a non-minor lowercase word is encountered, B) three consecutive minor words occur in a row, C) a terminator symbol is encountered at the end of a word. Otherwise, continue pushing words to the incomplete title
                            if (endsWithTerminator()) {
                                previousWordTerminates = true;
                                while ((word !== "") && endsWithTerminator()) {
                                    word = word.slice(0, -1);
                                }
                                if (word === "") {
                                    pushTitle();
                                    continue;
                                }
                            }
                            if (isMinorWord(word)) {
                                if (0 < incompleteTitle.length) {
                                    // Titles cannot start with a minor word
                                    if (
                                        (2 < incompleteTitle.length) && !(isMinorWord(incompleteTitle[incompleteTitle.length - 1]) && isMinorWord(incompleteTitle[incompleteTitle.length - 2]))
                                    ) {
                                        // Titles cannot have 3 or more consecutive minor words in a row
                                        pushTitle();
                                        continue;
                                    } else {
                                        // Titles may contain minor words in their middles. Ex: "Ace of Spades"
                                        incompleteTitle.push(word.toLowerCase());
                                    }
                                }
                            } else if (startsWithUpperCase()) {
                                // Add this proper noun to the incomplete title
                                incompleteTitle.push(word);
                            } else {
                                // The full title has a non-minor lowercase word to its immediate right
                                pushTitle();
                                continue;
                            }
                            if (previousWordTerminates) {
                                pushTitle();
                            }
                            function pushTitle() {
                                while (
                                    (1 < incompleteTitle.length)
                                    && isMinorWord(incompleteTitle[incompleteTitle.length - 1])
                                ) {
                                    incompleteTitle.pop();
                                }
                                if (0 < incompleteTitle.length) {
                                    titles.push(incompleteTitle.join(" "));
                                    // Empty the array
                                    incompleteTitle.length = 0;
                                }
                                return;
                            }
                            function isMinorWord(testWord) {
                                return Words.minor.includes(testWord.toLowerCase());
                            }
                            function startsWithUpperCase() {
                                return /^\p{Lu}/u.test(word);
                            }
                            function startsWithTerminator() {
                                return /^[\.\?!:]/.test(word);
                            }
                            function endsWithTerminator() {
                                return /[\.\?!:]$/.test(word);
                            }
                        }
                        for (let i = titles.length - 1; 0 <= i; i--) {
                            titles[i] = formatTitle(titles[i]).newTitle;
                            if (titles[i] === "" || (
                                AC.config.ignoreAllCapsTitles
                                && (2 < titles[i].replace(/[^a-zA-Z]/g, "").length)
                                && (titles[i] === titles[i].toUpperCase())
                            )) {
                                titles.splice(i, 1);
                            }
                        }
                        // Remove duplicates
                        const uniqueTitles = [...new Set(titles)];
                        if (uniqueTitles.length === 0) {
                            continue;
                        } else if (
                            // No reason to keep checking long past the max lookback distance
                            (currentTurn < 256)
                            && (action.type === "start")
                            // This is only used here so it doesn't need its own AC.config property or validation
                            && (DEFAULT_BAN_TITLES_FROM_OPENING !== false)
                        ) {
                            // Titles in the opening prompt are banned by default, hopefully accounting for the player character's name and other established setting details
                            uniqueTitles.forEach(title => banTitle(title));
                        } else {
                            // Schedule new titles for later insertion within the candidates database
                            for (const title of uniqueTitles) {
                                const pendingHashKey = title.toLowerCase();
                                if (pendingCandidates.has(pendingHashKey)) {
                                    // Consolidate pending candidates with matching titles but different turns
                                    pendingCandidates.get(pendingHashKey).turns.push(turn);
                                } else {
                                    pendingCandidates.set(pendingHashKey, O.s({title, turns: [turn]}));
                                }
                            }
                        }
                        function buildKiller(words) {
                            return (new RegExp(("(?:^|\\s+|-)(?:" + (words
                                .map(word => word.replace(".", "\\."))
                                .join("|")
                            ) + ")(?:\\s+|-|$)"), "gi"));
                        }
                    }
                }
            }
            // Measure the minimum and maximum turns of occurance for all title candidates
            let minTurn = currentTurn;
            let maxTurn = 0;
            for (let i = AC.database.titles.candidates.length - 1; 0 <= i; i--) {
                const candidate = AC.database.titles.candidates[i];
                const title = candidate[0];
                if (isUsedOrBanned(title) || isNamed(title)) {
                    // Retroactively ensure AC.database.titles.candidates contains no used / banned titles
                    AC.database.titles.candidates.splice(i, 1);
                } else {
                    const pendingHashKey = title.toLowerCase();
                    if (pendingCandidates.has(pendingHashKey)) {
                        // This candidate title matches one of the pending candidates, collect the pending turns
                        candidate.push(...pendingCandidates.get(pendingHashKey).turns);
                        // Remove this pending candidate
                        pendingCandidates.delete(pendingHashKey);
                    }
                    if (2 < candidate.length) {
                        // Ensure all recorded turns of occurance are unique for this candidate
                        // Sort the turns from least to greatest
                        const sortedTurns = [...new Set(candidate.slice(1))].sort((a, b) => (a - b));
                        if (625 < sortedTurns.length) {
                            sortedTurns.splice(0, sortedTurns.length - 600);
                        }
                        candidate.length = 1;
                        candidate.push(...sortedTurns);
                    }
                    setCandidateTurnBounds(candidate);
                }
            }
            for (const pendingCandidate of pendingCandidates.values()) {
                // Insert any remaining pending candidates (validity has already been ensured)
                const newCandidate = [pendingCandidate.title, ...pendingCandidate.turns];
                setCandidateTurnBounds(newCandidate);
                AC.database.titles.candidates.push(newCandidate);
            }
            const isCandidatesSorted = (function() {
                if (425 < AC.database.titles.candidates.length) {
                    // Sorting a large title candidates database is computationally expensive
                    sortCandidates();
                    AC.database.titles.candidates.splice(400);
                    // Flag this operation as complete for later consideration
                    return true;
                } else {
                    return false;
                }
            })();
            Internal.getUsedTitles();
            for (const titleKey in AC.database.memories.associations) {
                if (isAuto(titleKey)) {
                    // Reset the lifespan counter
                    AC.database.memories.associations[titleKey][0] = 999;
                } else if (AC.database.memories.associations[titleKey][0] < 1) {
                    // Forget this set of memory associations
                    delete AC.database.memories.associations[titleKey];
                } else if (!isAwaitingGeneration()) {
                    // Decrement the lifespan counter
                    AC.database.memories.associations[titleKey][0]--;
                }
            }
            // This copy of TEXT may be mutated
            let context = TEXT;
            const titleHeaderPatternGlobal = /\s*{\s*titles?\s*:\s*([\s\S]*?)\s*}\s*/gi;
            // Card events govern the parsing of memories from raw context as well as card memory bank injection
            const cardEvents = (function() {
                // Extract memories from the initial text (not TEXT as called from within the context modifier!)
                const contextMemories = (function() {
                    const memoriesMatch = text.match(/Memories\s*:\s*([\s\S]*?)\s*(?:Recent\s*Story\s*:|$)/i);
                    if (!memoriesMatch) {
                        return new Set();
                    }
                    const uniqueMemories = new Set(isolateMemories(memoriesMatch[1]));
                    if (uniqueMemories.size === 0) {
                        return uniqueMemories;
                    }
                    const duplicatesHashed = StringsHashed.deserialize(AC.database.memories.duplicates, 65536);
                    const duplicateMemories = new Set();
                    const seenMemories = new Set();
                    for (const memoryA of uniqueMemories) {
                        if (duplicatesHashed.has(memoryA)) {
                            // Remove to ensure the insertion order for this duplicate changes
                            duplicatesHashed.remove(memoryA);
                            duplicateMemories.add(memoryA);
                        } else if ((function() {
                            for (const memoryB of seenMemories) {
                                if (0.42 < similarityScore(memoryA, memoryB)) {
                                    // This memory is too similar to another memory
                                    duplicateMemories.add(memoryA);
                                    return false;
                                }
                            }
                            return true;
                        })()) {
                            seenMemories.add(memoryA);
                        }
                    }
                    if (0 < duplicateMemories.size) {
                        // Add each near duplicate's hashcode to AC.database.memories.duplicates
                        // Then remove duplicates from uniqueMemories and the context window
                        for (const duplicate of duplicateMemories) {
                            duplicatesHashed.add(duplicate);
                            uniqueMemories.delete(duplicate);
                            context = context.replaceAll("\n" + duplicate, "");
                        }
                        // Only the 2000 most recent duplicate memory hashcodes are remembered
                        AC.database.memories.duplicates = duplicatesHashed.latest(2000).serialize();
                    }
                    return uniqueMemories;
                })();
                const leftBoundary = "^|\\s|\"|'|—|\\(|\\[|{";
                const rightBoundary = "\\s|\\.|\\?|!|,|;|\"|'|—|\\)|\\]|}|$";
                // Murder, homicide if you will, nothing to see here
                const theKiller = new RegExp("(?:" + leftBoundary + ")the[\\s\\S]*$", "i");
                const peerageKiller = new RegExp((
                    "(?:" + leftBoundary + ")(?:" + Words.peerage.join("|") + ")(?:" + rightBoundary + ")"
                ), "gi");
                const events = new Map();
                for (const contextMemory of contextMemories) {
                    for (const titleKey of auto) {
                        if (!(new RegExp((
                            "(?<=" + leftBoundary + ")" + (titleKey
                                .replace(theKiller, "")
                                .replace(peerageKiller, "")
                                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                            ) + "(?=" + rightBoundary + ")"
                        ), "i")).test(contextMemory)) {
                            continue;
                        }
                        // AC card titles found in active memories will promote card events
                        if (events.has(titleKey)) {
                            events.get(titleKey).pendingMemories.push(contextMemory);
                            continue;
                        }
                        events.set(titleKey, O.s({
                            pendingMemories: [contextMemory],
                            titleHeader: ""
                        }));
                    }
                }
                const titleHeaderMatches = [...context.matchAll(titleHeaderPatternGlobal)];
                for (const [titleHeader, title] of titleHeaderMatches) {
                    if (!isAuto(title)) {
                        continue;
                    }
                    // Unique title headers found in context will promote card events
                    const titleKey = title.toLowerCase();
                    if (events.has(titleKey)) {
                        events.get(titleKey).titleHeader = titleHeader;
                        continue;
                    }
                    events.set(titleKey, O.s({
                        pendingMemories: [],
                        titleHeader: titleHeader
                    }));
                }
                return events;
            })();
            // Remove auto card title headers from active story card entries and contextualize their respective memory banks
            // Also handle the growth and maintenance of card memory banks
            let isRemembering = false;
            for (const card of storyCards) {
                // Iterate over each card to handle pending card events and forenames/surnames
                const titleHeaderMatcher = /^{title: \s*([\s\S]*?)\s*}/;
                let breakForCompression = isPendingCompression();
                if (breakForCompression) {
                    break;
                } else if (!card.entry.startsWith("{title: ")) {
                    continue;
                } else if (exceedsMemoryLimit()) {
                    const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                    if (titleHeaderMatch && isAuto(titleHeaderMatch[1])) {
                        prepareMemoryCompression(titleHeaderMatch[1].toLowerCase());
                        break;
                    }
                }
                // Handle card events
                const lowerEntry = card.entry.toLowerCase();
                for (const titleKey of cardEvents.keys()) {
                    if (!lowerEntry.startsWith("{title: " + titleKey + "}")) {
                        continue;
                    }
                    const cardEvent = cardEvents.get(titleKey);
                    if (
                        (0 < cardEvent.pendingMemories.length)
                        && /{\s*updates?\s*:\s*true\s*,\s*limits?\s*:[\s\S]*?}/i.test(card.description)
                    ) {
                        // Add new card memories
                        const associationsHashed = (function() {
                            if (titleKey in AC.database.memories.associations) {
                                return StringsHashed.deserialize(AC.database.memories.associations[titleKey][1], 65536);
                            } else {
                                AC.database.memories.associations[titleKey] = [999, ""];
                                return new StringsHashed(65536);
                            }
                        })();
                        const oldMemories = isolateMemories(extractCardMemories().text);
                        for (let i = 0; i < cardEvent.pendingMemories.length; i++) {
                            if (associationsHashed.has(cardEvent.pendingMemories[i])) {
                                // Remove first to alter the insertion order
                                associationsHashed.remove(cardEvent.pendingMemories[i]);
                            } else if (!oldMemories.some(oldMemory => (
                                (0.8 < similarityScore(oldMemory, cardEvent.pendingMemories[i]))
                            ))) {
                                // Ensure no near-duplicate memories are appended
                                card.description += "\n- " + cardEvent.pendingMemories[i];
                            }
                            associationsHashed.add(cardEvent.pendingMemories[i]);
                        }
                        AC.database.memories.associations[titleKey][1] = associationsHashed.latest(3500).serialize();
                        if (associationsHashed.size() === 0) {
                            delete AC.database.memories.associations[titleKey];
                        }
                        if (exceedsMemoryLimit()) {
                            breakForCompression = prepareMemoryCompression(titleKey);
                            break;
                        }
                    }
                    if (cardEvent.titleHeader !== "") {
                        // Replace this card's title header in context
                        const cardMemoriesText = extractCardMemories().text;
                        if (cardMemoriesText === "") {
                            // This card contains no card memories to contextualize
                            context = context.replace(cardEvent.titleHeader, "\n\n");
                        } else {
                            // Insert card memories within context and ensure they occur uniquely
                            const cardMemories = cardMemoriesText.split("\n").map(cardMemory => cardMemory.trim());
                            for (const cardMemory of cardMemories) {
                                if (25 < cardMemory.length) {
                                    context = (context
                                        .replaceAll(cardMemory, "<#>")
                                        .replaceAll(cardMemory.replace(/^-+\s*/, ""), "<#>")
                                    );
                                }
                            }
                            context = context.replace(cardEvent.titleHeader, (
                                "\n\n{%@MEM@%" + cardMemoriesText + "%@MEM@%}\n"
                            ));
                            isRemembering = true;
                        }
                    }
                    cardEvents.delete(titleKey);
                    break;
                }
                if (breakForCompression) {
                    break;
                }
                // Simplify auto-card titles which contain an obvious surname
                const titleHeaderMatch = card.entry.match(titleHeaderMatcher);
                if (!titleHeaderMatch) {
                    continue;
                }
                const [oldTitleHeader, oldTitle] = titleHeaderMatch;
                if (!isAuto(oldTitle)) {
                    continue;
                }
                const surname = isNamed(oldTitle, true);
                if (typeof surname !== "string") {
                    continue;
                }
                const newTitle = oldTitle.replace(" " + surname, "");
                const [oldTitleKey, newTitleKey] = [oldTitle, newTitle].map(title => title.toLowerCase());
                if (oldTitleKey === newTitleKey) {
                    continue;
                }
                // Preemptively mitigate some global state considered within the formatTitle scope
                clearTransientTitles();
                AC.database.titles.used = ["%@%"];
                [used, forenames, surnames].forEach(nameset => nameset.add("%@%"));
                // Premature optimization is the root of all evil
                const newKey = formatTitle(newTitle).newKey;
                clearTransientTitles();
                if (newKey === "") {
                    Internal.getUsedTitles();
                    continue;
                }
                if (oldTitleKey in AC.database.memories.associations) {
                    AC.database.memories.associations[newTitleKey] = AC.database.memories.associations[oldTitleKey];
                    delete AC.database.memories.associations[oldTitleKey];
                }
                if (AC.compression.titleKey === oldTitleKey) {
                    AC.compression.titleKey = newTitleKey;
                }
                card.entry = card.entry.replace(oldTitleHeader, oldTitleHeader.replace(oldTitle, newTitle));
                card.keys = buildKeys(card.keys.replaceAll(" " + surname, ""), newKey);
                Internal.getUsedTitles();
                function exceedsMemoryLimit() {
                    return ((function() {
                        const memoryLimitMatch = card.description.match(/limits?\s*:\s*(\d+)\s*}/i);
                        if (memoryLimitMatch) {
                            return validateMemoryLimit(parseInt(memoryLimitMatch[1], 10));
                        } else {
                            return AC.config.defaultMemoryLimit;
                        }
                    })() < (function() {
                        const cardMemories = extractCardMemories();
                        if (cardMemories.missing) {
                            return card.description;
                        } else {
                            return cardMemories.text;
                        }
                    })().length);
                }
                function prepareMemoryCompression(titleKey) {
                    AC.compression.oldMemoryBank = isolateMemories(extractCardMemories().text);
                    if (AC.compression.oldMemoryBank.length === 0) {
                        return false;
                    }
                    AC.compression.completed = 0;
                    AC.compression.titleKey = titleKey;
                    AC.compression.vanityTitle = cleanSpaces(card.title.trim());
                    AC.compression.responseEstimate = (function() {
                        const responseEstimate = estimateResponseLength();
                        if (responseEstimate === -1) {
                            return 1400
                        } else {
                            return responseEstimate;
                        }
                    })();
                    AC.compression.lastConstructIndex = -1;
                    AC.compression.newMemoryBank = [];
                    return true;
                }
                function extractCardMemories() {
                    const memoryHeaderMatch = card.description.match(
                        /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                    );
                    if (memoryHeaderMatch) {
                        return O.f({missing: false, text: cleanSpaces(memoryHeaderMatch[0].trim())});
                    } else {
                        return O.f({missing: true, text: ""});
                    }
                }
            }
            // Remove repeated memories plus any remaining title headers
            context = (context
                .replace(/(\s*<#>\s*)+/g, "\n")
                .replace(titleHeaderPatternGlobal, "\n\n")
                .replace(/World\s*Lore\s*:\s*/i, "World Lore:\n")
                .replace(/Memories\s*:\s*(?=Recent\s*Story\s*:|$)/i, "")
            );
            // Prompt the AI to generate a new card entry, compress an existing card's memories, or continue the story
            let isGenerating = false;
            let isCompressing = false;
            if (isPendingGeneration()) {
                promptGeneration();
            } else if (isAwaitingGeneration()) {
                AC.generation.workpiece = AC.generation.pending.shift();
                promptGeneration();
            } else if (isPendingCompression()) {
                promptCompression();
            } else if (AC.signal.recheckRetryOrErase) {
                // Do nothing 😜
            } else if ((AC.generation.cooldown <= 0) && (0 < AC.database.titles.candidates.length)) {
                // Prepare to automatically construct a new plot-relevant story card by selecting a title
                let selectedTitle = (function() {
                    if (AC.database.titles.candidates.length === 1) {
                        return AC.database.titles.candidates[0][0];
                    } else if (!isCandidatesSorted) {
                        sortCandidates();
                    }
                    const mostRelevantTitle = AC.database.titles.candidates[0][0];
                    if ((AC.database.titles.candidates.length < 16) || (Math.random() < 0.6667)) {
                        // Usually, 2/3 of the time, the most relevant title is selected
                        return mostRelevantTitle;
                    }
                    // Occasionally (1/3 of the time once the candidates databases has at least 16 titles) make a completely random selection between the top 4 most recently occuring title candidates which are NOT the top 2 most relevant titles. Note that relevance !== recency
                    // This gives non-character titles slightly better odds of being selected for card generation due to the relevance sorter's inherent bias towards characters; they tend to appear far more often in prose
                    return (AC.database.titles.candidates
                        // Create a shallow copy to avoid modifying AC.database.titles.candidates itself
                        // Add index to preserve original positions whenever ties occur during sorting
                        .map((candidate, index) => ({candidate, index}))
                        // Sort by each candidate's most recent turn
                        .sort((a, b) => {
                            const turnDiff = b.candidate[b.candidate.length - 1] - a.candidate[a.candidate.length - 1];
                            if (turnDiff === 0) {
                                // Don't change indices in the case of a tie
                                return (a.index - b.index);
                            } else {
                                // No tie here, sort by recency
                                return turnDiff;
                            }
                        })
                        // Get the top 6 most recent titles (4 + 2 because the top 2 relevant titles may be present)
                        .slice(0, 6)
                        // Extract only the title names
                        .map(element => element.candidate[0])
                        // Exclude the top 2 most relevant titles
                        .filter(title => ((title !== mostRelevantTitle) && (title !== AC.database.titles.candidates[1][0])))
                        // Ensure only 4 titles remain
                        .slice(0, 4)
                    )[Math.floor(Math.random() * 4)];
                })();
                while (!Internal.generateCard(O.f({title: selectedTitle}))) {
                    // This is an emergency precaution, I don't expect the interior of this while loop to EVER execute
                    // That said, it's crucial for the while condition be checked at least once, because Internal.generateCard appends an element to AC.generation.pending as a side effect
                    const lowerSelectedTitle = formatTitle(selectedTitle).newTitle.toLowerCase();
                    const index = AC.database.titles.candidates.findIndex(candidate => {
                        return (formatTitle(candidate[0]).newTitle.toLowerCase() === lowerSelectedTitle);
                    });
                    if (index === -1) {
                        // Should be impossible
                        break;
                    }
                    AC.database.titles.candidates.splice(index, 1);
                    if (AC.database.titles.candidates.length === 0) {
                        break;
                    }
                    selectedTitle = AC.database.titles.candidates[0][0];
                }
                if (isAwaitingGeneration()) {
                    // Assign the workpiece so card generation may fully commence!
                    AC.generation.workpiece = AC.generation.pending.shift();
                    promptGeneration();
                } else if (isPendingCompression()) {
                    promptCompression();
                }
            } else if (
                (AC.chronometer.step || forceStep)
                && (0 < AC.generation.cooldown)
                && (AC.config.addCardCooldown !== 9999)
            ) {
                AC.generation.cooldown--;
            }
            if (shouldTrimContext()) {
                // Truncate context based on AC.signal.maxChars, begin by individually removing the oldest sentences from the recent story portion of the context window
                const recentStoryPattern = /Recent\s*Story\s*:\s*([\s\S]*?)(%@GEN@%|%@COM@%|\s\[\s*Author's\s*note\s*:|$)/i;
                const recentStoryMatch = context.match(recentStoryPattern);
                if (recentStoryMatch) {
                    const recentStory = recentStoryMatch[1];
                    let sentencesJoined = recentStory;
                    // Split by the whitespace chars following each sentence (without consuming)
                    const sentences = splitBySentences(recentStory);
                    // [minimum num of story sentences] = ([max chars for context] / 6) / [average chars per sentence]
                    const sentencesMinimum = Math.ceil(
                        (AC.signal.maxChars / 6) / (
                            boundInteger(1, context.length) / boundInteger(1, sentences.length)
                        )
                    ) + 1;
                    do {
                        if (sentences.length < sentencesMinimum) {
                            // A minimum of n many recent story sentences must remain
                            // Where n represents a sentence count equal to roughly 16.7% of the full context chars
                            break;
                        }
                        // Remove the first (oldest) recent story sentence
                        sentences.shift();
                        // Check if the total length exceeds the AC.signal.maxChars limit
                        sentencesJoined = sentences.join("");
                    } while (AC.signal.maxChars < (context.length - recentStory.length + sentencesJoined.length + 3));
                    // Rebuild the context with the truncated recentStory
                    context = context.replace(recentStoryPattern, "Recent Story:\n" + sentencesJoined + recentStoryMatch[2]);
                }
                if (isRemembering && shouldTrimContext()) {
                    // Next remove loaded card memories (if any) with top-down priority, one card at a time
                    do {
                        // This matcher relies on its case-sensitivity
                        const cardMemoriesMatch = context.match(/{%@MEM@%([\s\S]+?)%@MEM@%}/);
                        if (!cardMemoriesMatch) {
                            break;
                        }
                        context = context.replace(cardMemoriesMatch[0], (cardMemoriesMatch[0]
                            .replace(cardMemoriesMatch[1], "")
                            // Set the MEM tags to lowercase to avoid repeated future matches
                            .toLowerCase()
                        ));
                    } while (AC.signal.maxChars < (context.length + 3));
                }
                if (shouldTrimContext()) {
                    // If the context is still too long, just trim from the beginning I guess 🤷‍♀️
                    context = context.slice(context.length - AC.signal.maxChars + 1);
                }
            }
            if (isRemembering) {
                // Card memory flags serve no further purpose
                context = (context
                    // Case-insensitivity is crucial here
                    .replace(/(?<={%@MEM@%)\s*/gi, "")
                    .replace(/\s*(?=%@MEM@%})/gi, "")
                    .replace(/{%@MEM@%%@MEM@%}\s?/gi, "")
                    .replaceAll("{%@MEM@%", "{ Memories:\n")
                    .replaceAll("%@MEM@%}", " }")
                );
            }
            if (isGenerating) {
                // Likewise for the card entry generation delimiter
                context = context.replaceAll("%@GEN@%", "");
            } else if (isCompressing) {
                // Or the (mutually exclusive) card memory compression delimiter
                context = context.replaceAll("%@COM@%", "");
            }
            CODOMAIN.initialize(context);
            function isolateMemories(memoriesText) {
                return (memoriesText
                    .split("\n")
                    .map(memory => cleanSpaces(memory.trim().replace(/^-+\s*/, "")))
                    .filter(memory => (memory !== ""))
                );
            }
            function isAuto(title) {
                return auto.has(title.toLowerCase());
            }
            function promptCompression() {
                isGenerating = false;
                const cardEntryText = (function() {
                    const card = getAutoCard(AC.compression.titleKey);
                    if (card === null) {
                        return null;
                    }
                    const entryLines = formatEntry(card.entry).trimEnd().split("\n");
                    if (Object.is(entryLines[0].trim(), "")) {
                        return "";
                    }
                    for (let i = 0; i < entryLines.length; i++) {
                        entryLines[i] = entryLines[i].trim();
                        if (/[a-zA-Z]$/.test(entryLines[i])) {
                            entryLines[i] += ".";
                        }
                        entryLines[i] += " ";
                    }
                    return entryLines.join("");
                })();
                if (cardEntryText === null) {
                    // Safety measure
                    resetCompressionProperties();
                    return;
                }
                repositionAN();
                // The "%COM%" substring serves as a temporary delimiter for later context length trucation
                context = context.trimEnd() + "\n\n" + cardEntryText + (
                    [...AC.compression.newMemoryBank, ...AC.compression.oldMemoryBank].join(" ")
                ) + "%@COM@%\n\n" + (function() {
                    const memoryConstruct = (function() {
                        if (AC.compression.lastConstructIndex === -1) {
                            for (let i = 0; i < AC.compression.oldMemoryBank.length; i++) {
                                AC.compression.lastConstructIndex = i;
                                const memoryConstruct = buildMemoryConstruct();
                                if ((
                                    (AC.config.memoryCompressionRatio / 10) * AC.compression.responseEstimate
                                ) < memoryConstruct.length) {
                                    return memoryConstruct;
                                }
                            }
                        } else {
                            // The previous card memory compression attempt produced a bad output
                            AC.compression.lastConstructIndex = boundInteger(
                                0, AC.compression.lastConstructIndex + 1, AC.compression.oldMemoryBank.length - 1
                            );
                        }
                        return buildMemoryConstruct();
                    })();
                    // Fill all %{title} placeholders
                    const precursorPrompt = insertTitle(AC.config.compressionPrompt, AC.compression.vanityTitle).trim();
                    const memoryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*memor(y|ies)\s*}+/gi;
                    if (memoryPlaceholderPattern.test(precursorPrompt)) {
                        // Fill all %{memory} placeholders with a selection of pending old memories
                        return precursorPrompt.replace(memoryPlaceholderPattern, memoryConstruct);
                    } else {
                        // Append the partial entry to the end of context
                        return precursorPrompt + "\n\n" + memoryConstruct;
                    }
                })() + "\n\n";
                isCompressing = true;
                return;
            }
            function promptGeneration() {
                repositionAN();
                // All %{title} placeholders were already filled during this workpiece's initialization
                // The "%GEN%" substring serves as a temporary delimiter for later context length trucation
                context = context.trimEnd() + "%@GEN@%\n\n" + (function() {
                    // For context only, remove the title header from this workpiece's partially completed entry
                    const partialEntry = formatEntry(AC.generation.workpiece.entry);
                    const entryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+/gi;
                    if (entryPlaceholderPattern.test(AC.generation.workpiece.prompt)) {
                        // Fill all %{entry} placeholders with the partial entry
                        return AC.generation.workpiece.prompt.replace(entryPlaceholderPattern, partialEntry);
                    } else {
                        // Append the partial entry to the end of context
                        return AC.generation.workpiece.prompt.trimEnd() + "\n\n" + partialEntry;
                    }
                })();
                isGenerating = true;
                return;
            }
            function repositionAN() {
                // Move the Author's Note further back in context during card generation (should still be considered)
                const authorsNotePattern = /\s*(\[\s*Author's\s*note\s*:[\s\S]*\])\s*/i;
                const authorsNoteMatch = context.match(authorsNotePattern);
                if (!authorsNoteMatch) {
                    return;
                }
                const leadingSpaces = context.match(/^\s*/)[0];
                context = context.replace(authorsNotePattern, " ").trimStart();
                const recentStoryPattern = /\s*Recent\s*Story\s*:\s*/i;
                if (recentStoryPattern.test(context)) {
                    // Remove author's note from its original position and insert above "Recent Story:\n"
                    context = (context
                        .replace(recentStoryPattern, "\n\n" + authorsNoteMatch[1] + "\n\nRecent Story:\n")
                        .trimStart()
                    );
                } else {
                    context = authorsNoteMatch[1] + "\n\n" + context;
                }
                context = leadingSpaces + context;
                return;
            }
            function sortCandidates() {
                if (AC.database.titles.candidates.length < 2) {
                    return;
                }
                const turnRange = boundInteger(1, maxTurn - minTurn);
                const recencyExponent = Math.log10(turnRange) + 1.85;
                // Sort the database of available title candidates by relevance
                AC.database.titles.candidates.sort((a, b) => {
                    return relevanceScore(b) - relevanceScore(a);
                });
                function relevanceScore(candidate) {
                    // weight = (((turn - minTurn) / (maxTurn - minTurn)) + 1)^(log10(maxTurn - minTurn) + 1.85)
                    return candidate.slice(1).reduce((sum, turn) => {
                        // Apply exponential scaling to give far more weight to recent turns
                        return sum + Math.pow((
                            // The recency weight's exponent scales by log10(turnRange) + 1.85
                            // Shhh don't question it 😜
                            ((turn - minTurn) / turnRange) + 1
                        ), recencyExponent);
                    }, 0);
                }
                return;
            }
            function shouldTrimContext() {
                return (AC.signal.maxChars <= context.length);
            }
            function setCandidateTurnBounds(candidate) {
                // candidate: ["Example Title", 0, 1, 2, 3]
                minTurn = boundInteger(0, minTurn, candidate[1]);
                maxTurn = boundInteger(candidate[candidate.length - 1], maxTurn);
                return;
            }
            function disableAutoCards() {
                AC.signal.forceToggle = null;
                // Auto-Cards has been disabled
                AC.config.doAC = false;
                // Deconstruct the "Configure Auto-Cards" story card
                unbanTitle(configureCardTemplate.title);
                eraseCard(configureCard);
                // Signal the construction of "Edit to enable Auto-Cards" during the next onOutput hook
                AC.signal.swapControlCards = true;
                // Post a success message
                notify("Disabled! Use the \"Edit to enable Auto-Cards\" story card to undo");
                CODOMAIN.initialize(TEXT);
                return;
            }
            break; }
        case "output": {
            // AutoCards was called within the output modifier
            const output = prettifyEmDashes(TEXT);
            if (0 < AC.chronometer.postpone) {
                // Do not capture or replace any outputs during this turn
                promoteAmnesia();
                if (permitOutput()) {
                    CODOMAIN.initialize(output);
                }
            } else if (AC.signal.swapControlCards) {
                if (permitOutput()) {
                    CODOMAIN.initialize(output);
                }
            } else if (isPendingGeneration()) {
                const textClone = prettifyEmDashes(text);
                AC.chronometer.amnesia = 0;
                AC.generation.completed++;
                const generationsRemaining = (function() {
                    if (
                        textClone.includes("\"")
                        || /(?<=^|\s|—|\(|\[|{)sa(ys?|id)(?=\s|\.|\?|!|,|;|—|\)|\]|}|$)/i.test(textClone)
                    ) {
                        // Discard full outputs containing "say" or quotations
                        // To build coherent entries, the AI must not attempt to continue the story
                        return skip(estimateRemainingGens());
                    }
                    const oldSentences = (splitBySentences(formatEntry(AC.generation.workpiece.entry))
                        .map(sentence => sentence.trim())
                        .filter(sentence => (2 < sentence.length))
                    );
                    const seenSentences = new Set();
                    const entryAddition = splitBySentences(textClone
                        .replace(/[\*_~]/g, "")
                        .replace(/:+/g, "#")
                        .replace(/\s+/g, " ")
                    ).map(sentence => (sentence
                        .trim()
                        .replace(/^-+\s*/, "")
                    )).filter(sentence => (
                        // Remove empty strings
                        (sentence !== "")
                        // Remove colon ":" headers or other stinky symbols because me no like 😠
                        && !/[#><@]/.test(sentence)
                        // Remove previously repeated sentences
                        && !oldSentences.some(oldSentence => (0.75 < similarityScore(oldSentence, sentence)))
                        // Remove repeated sentences from within entryAddition itself
                        && ![...seenSentences].some(seenSentence => (0.75 < similarityScore(seenSentence, sentence)))
                        // Simply ensure this sentence is henceforth unique
                        && seenSentences.add(sentence)
                    )).join(" ").trim() + " ";
                    if (entryAddition === " ") {
                        return skip(estimateRemainingGens());
                    } else if (
                        /^{title:[\s\S]*?}$/.test(AC.generation.workpiece.entry.trim())
                        && (AC.generation.workpiece.entry.length < 111)
                    ) {
                        AC.generation.workpiece.entry += "\n" + entryAddition;
                    } else {
                        AC.generation.workpiece.entry += entryAddition;
                    }
                    if (AC.generation.workpiece.limit < AC.generation.workpiece.entry.length) {
                        let exit = false;
                        let truncatedEntry = AC.generation.workpiece.entry.trimEnd();
                        const sentences = splitBySentences(truncatedEntry);
                        for (let i = sentences.length - 1; 0 <= i; i--) {
                            if (!sentences[i].includes("\n")) {
                                sentences.splice(i, 1);
                                truncatedEntry = sentences.join("").trimEnd();
                                if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                    break;
                                }
                                continue;
                            }
                            // Lines only matter for initial entries provided via AutoCards().API.generateCard
                            const lines = sentences[i].split("\n");
                            for (let j = lines.length - 1; 0 <= j; j--) {
                                lines.splice(j, 1);
                                sentences[i] = lines.join("\n");
                                truncatedEntry = sentences.join("").trimEnd();
                                if (truncatedEntry.length <= AC.generation.workpiece.limit) {
                                    // Exit from both loops
                                    exit = true;
                                    break;
                                }
                            }
                            if (exit) {
                                break;
                            }
                        }
                        if (truncatedEntry.length < 150) {
                            // Disregard the previous sentence/line-based truncation attempt
                            AC.generation.workpiece.entry = limitString(
                                AC.generation.workpiece.entry, AC.generation.workpiece.limit
                            );
                            // Attempt to remove the last word/fragment
                            truncatedEntry = AC.generation.workpiece.entry.replace(/\s*\S+$/, "");
                            if (150 <= truncatedEntry) {
                                AC.generation.workpiece.entry = truncatedEntry;
                            }
                        } else {
                            AC.generation.workpiece.entry = truncatedEntry;
                        }
                        return 0;
                    } else if ((AC.generation.workpiece.limit - 50) <= AC.generation.workpiece.entry.length) {
                        AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                        return 0;
                    }
                    function skip(remaining) {
                        if (AC.generation.permitted <= AC.generation.completed) {
                            AC.generation.workpiece.entry = AC.generation.workpiece.entry.trimEnd();
                            return 0;
                        }
                        return remaining;
                    }
                    function estimateRemainingGens() {
                        const responseEstimate = estimateResponseLength();
                        if (responseEstimate === -1) {
                            return 1;
                        }
                        const remaining = boundInteger(1, Math.round(
                            (150 + AC.generation.workpiece.limit - AC.generation.workpiece.entry.length) / responseEstimate
                        ));
                        if (AC.generation.permitted === 34) {
                            AC.generation.permitted = boundInteger(6, Math.floor(3.5 * remaining), 32);
                        }
                        return remaining;
                    }
                    return skip(estimateRemainingGens());
                })();
                postOutputMessage(textClone, AC.generation.completed / Math.min(
                    AC.generation.permitted,
                    AC.generation.completed + generationsRemaining
                ));
                if (generationsRemaining <= 0) {
                    notify("\"" + AC.generation.workpiece.title + "\" was successfully added to your story cards!");
                    constructCard(O.f({
                        type: AC.generation.workpiece.type,
                        title: AC.generation.workpiece.title,
                        keys: AC.generation.workpiece.keys,
                        entry: (function() {
                            if (!AC.config.bulletedListMode) {
                                return AC.generation.workpiece.entry;
                            }
                            const sentences = splitBySentences(
                                formatEntry(
                                    AC.generation.workpiece.entry.replace(/\s+/g, " ")
                                ).replace(/:+/g, "#")
                            ).map(sentence => {
                                sentence = (sentence
                                    .replaceAll("#", ":")
                                    .trim()
                                    .replace(/^-+\s*/, "")
                                );
                                if (sentence.length < 12) {
                                    return sentence;
                                } else {
                                    return "\n- " + sentence.replace(/\s*[\.\?!]+$/, "");
                                }
                            });
                            const titleHeader = "{title: " + AC.generation.workpiece.title + "}";
                            if (sentences.every(sentence => (sentence.length < 12))) {
                                const sentencesJoined = sentences.join(" ").trim();
                                if (sentencesJoined === "") {
                                    return titleHeader;
                                } else {
                                    return limitString(titleHeader + "\n" + sentencesJoined, 2000);
                                }
                            }
                            for (let i = sentences.length - 1; 0 <= i; i--) {
                                const bulletedEntry = cleanSpaces(titleHeader + sentences.join(" ")).trimEnd();
                                if (bulletedEntry.length <= 2000) {
                                    return bulletedEntry;
                                }
                                if (sentences.length === 1) {
                                    break;
                                }
                                sentences.splice(i, 1);
                            }
                            return limitString(AC.generation.workpiece.entry, 2000);
                        })(),
                        description: AC.generation.workpiece.description,
                    }), newCardIndex());
                    AC.generation.cooldown = AC.config.addCardCooldown;
                    AC.generation.completed = 0;
                    AC.generation.permitted = 34;
                    AC.generation.workpiece = O.f({});
                    clearTransientTitles();
                }
            } else if (isPendingCompression()) {
                const textClone = prettifyEmDashes(text);
                AC.chronometer.amnesia = 0;
                AC.compression.completed++;
                const compressionsRemaining = (function() {
                    const newMemory = (textClone
                        // Remove some dumb stuff
                        .replace(/^[\s\S]*:/g, "")
                        .replace(/[\*_~#><@\[\]{}`\\]/g, " ")
                        // Remove bullets
                        .trim().replace(/^-+\s*/, "").replace(/\s*-+$/, "").replace(/\s*-\s+/g, " ")
                        // Condense consecutive whitespace
                        .replace(/\s+/g, " ")
                    );
                    if ((AC.compression.oldMemoryBank.length - 1) <= AC.compression.lastConstructIndex) {
                        // Terminate this compression cycle; the memory construct cannot grow any further
                        AC.compression.newMemoryBank.push(newMemory);
                        return 0;
                    } else if ((newMemory.trim() !== "") && (newMemory.length < buildMemoryConstruct().length)) {
                        // Good output, preserve and then proceed onwards
                        AC.compression.oldMemoryBank.splice(0, AC.compression.lastConstructIndex + 1);
                        AC.compression.lastConstructIndex = -1;
                        AC.compression.newMemoryBank.push(newMemory);
                    } else {
                        // Bad output, discard and then try again
                        AC.compression.responseEstimate += 200;
                    }
                    return boundInteger(1, joinMemoryBank(AC.compression.oldMemoryBank).length) / AC.compression.responseEstimate;
                })();
                postOutputMessage(textClone, AC.compression.completed / (AC.compression.completed + compressionsRemaining));
                if (compressionsRemaining <= 0) {
                    const card = getAutoCard(AC.compression.titleKey);
                    if (card === null) {
                        notify(
                            "Failed to apply summarized memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card title header!"
                        );
                    } else {
                        const memoryHeaderMatch = card.description.match(
                            /(?<={\s*updates?\s*:[\s\S]*?,\s*limits?\s*:[\s\S]*?})[\s\S]*$/i
                        );
                        if (memoryHeaderMatch) {
                            // Update the card memory bank
                            notify("Memories for \"" + AC.compression.vanityTitle + "\" were successfully summarized!");
                            card.description = card.description.replace(memoryHeaderMatch[0], (
                                "\n" + joinMemoryBank(AC.compression.newMemoryBank)
                            ));
                        } else {
                            notify(
                                "Failed to apply summarizes memories for \"" + AC.compression.vanityTitle + "\" due to a missing or invalid AC card memory header!"
                            );
                        }
                    }
                    resetCompressionProperties();
                } else if (AC.compression.completed === 1) {
                    notify("Summarizing excess memories for \"" + AC.compression.vanityTitle + "\"");
                }
                function joinMemoryBank(memoryBank) {
                    return cleanSpaces("- " + memoryBank.join("\n- "));
                }
            } else if (permitOutput()) {
                CODOMAIN.initialize(output);
            }
            concludeOutputBlock((function() {
                if (AC.signal.swapControlCards) {
                    return getConfigureCardTemplate();
                } else {
                    return null;
                }
            })())
            function postOutputMessage(textClone, ratio) {
                if (!permitOutput()) {
                    // Do nothing
                } else if (0.5 < similarityScore(textClone, output)) {
                    // To improve Auto-Cards' compatability with other scripts, I only bother to replace the output text when the original and new output texts have a similarity score above a particular threshold. Otherwise, I may safely assume the output text has already been replaced by another script and thus skip this step.
                    CODOMAIN.initialize(
                        getPrecedingNewlines() + ">>> please select \"continue\" (" + Math.round(ratio * 100) + "%) <<<\n\n"
                    );
                } else {
                    CODOMAIN.initialize(output);
                }
                return;
            }
            break; }
        default: {
            CODOMAIN.initialize(TEXT);
            break; }
        }
        // Get an individual story card reference via titleKey
        function getAutoCard(titleKey) {
            return Internal.getCard(card => card.entry.toLowerCase().startsWith("{title: " + titleKey + "}"));
        }
        function buildMemoryConstruct() {
            return (AC.compression.oldMemoryBank
                .slice(0, AC.compression.lastConstructIndex + 1)
                .join(" ")
            );
        }
        // Estimate the average AI response char count based on recent continue outputs
        function estimateResponseLength() {
            if (!Array.isArray(history) || (history.length === 0)) {
                return -1;
            }
            const charCounts = [];
            for (let i = 0; i < history.length; i++) {
                const action = readPastAction(i);
                if ((action.type === "continue") && !action.text.includes("<<<")) {
                    charCounts.push(action.text.length);
                }
            }
            if (charCounts.length < 7) {
                if (charCounts.length === 0) {
                    return -1;
                } else if (charCounts.length < 4) {
                    return boundInteger(350, charCounts[0]);
                }
                charCounts.splice(3);
            }
            return boundInteger(175, Math.floor(
                charCounts.reduce((sum, charCount) => {
                    return sum + charCount;
                }, 0) / charCounts.length
            ));
        }
        // Evalute how similar two strings are on the range [0, 1]
        function similarityScore(strA, strB) {
            if (strA === strB) {
                return 1;
            }
            // Normalize both strings for further comparison purposes
            const [cleanA, cleanB] = [strA, strB].map(str => limitString((str
                .replace(/[0-9\s]/g, " ")
                .trim()
                .replace(/  +/g, " ")
                .toLowerCase()
            ), 1400));
            if (cleanA === cleanB) {
                return 1;
            }
            // Compute the Levenshtein distance
            const [lengthA, lengthB] = [cleanA, cleanB].map(str => str.length);
            // I love DP ❤️ (dynamic programming)
            const dp = Array(lengthA + 1).fill(null).map(() => Array(lengthB + 1).fill(0));
            for (let i = 0; i <= lengthA; i++) {
                dp[i][0] = i;
            }
            for (let j = 0; j <= lengthB; j++) {
                dp[0][j] = j;
            }
            for (let i = 1; i <= lengthA; i++) {
                for (let j = 1; j <= lengthB; j++) {
                    if (cleanA[i - 1] === cleanB[j - 1]) {
                        // No cost if chars match, swipe right 😎
                        dp[i][j] = dp[i - 1][j - 1];
                    } else {
                        dp[i][j] = Math.min(
                            // Deletion
                            dp[i - 1][j] + 1,
                            // Insertion
                            dp[i][j - 1] + 1,
                            // Substitution
                            dp[i - 1][j - 1] + 1
                        );
                    }
                }
            }
            // Convert distance to similarity score (1 - (distance / maxLength))
            return 1 - (dp[lengthA][lengthB] / Math.max(lengthA, lengthB));
        }
        function splitBySentences(prose) {
            // Don't split sentences on honorifics or abbreviations such as "Mr.", "Mrs.", "etc."
            return (prose
                .replace(new RegExp("(?<=\\s|\"|\\(|—|\\[|'|{|^)(?:" + ([...Words.honorifics, ...Words.abbreviations]
                    .map(word => word.replace(".", ""))
                    .join("|")
                ) + ")\\.", "gi"), "$1%@%")
                .split(/(?<=[\.\?!:]["\)'\]}]?\s+)(?=[^\p{Ll}\s])/u)
                .map(sentence => sentence.replaceAll("%@%", "."))
            );
        }
        function formatEntry(partialEntry) {
            const cleanedEntry = cleanSpaces(partialEntry
                .replace(/^{title:[\s\S]*?}/, "")
                .replace(/[#><@*_~]/g, "")
                .trim()
            ).replace(/(?<=^|\n)-+\s*/g, "");
            if (cleanedEntry === "") {
                return "";
            } else {
                return cleanedEntry + " ";
            }
        }
        // Resolve malformed em dashes (common AI cliche)
        function prettifyEmDashes(str) {
            return str.replace(/(?<!^\s*)(?: - | ?– ?)(?!\s*$)/g, "—");
        }
        function getConfigureCardTemplate() {
            const names = getControlVariants().configure;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: getConfigureCardEntry(),
                description: getConfigureCardDescription()
            });
        }
        function getConfigureCardEntry() {
            return prose(
                "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. You may configure the following settings by replacing \"false\" with \"true\" (and vice versa) or by adjusting numbers for the appropriate settings.",
                "> Disable Auto-Cards: false",
                "> Show detailed guide: false",
                "> Delete all automatic story cards: false",
                "> Reset all config settings and prompts: false",
                "> Pin this config card near the top: " + AC.config.pinConfigureCard,
                "> Minimum turns cooldown for new cards: " + AC.config.addCardCooldown,
                "> New cards use a bulleted list format: " + AC.config.bulletedListMode,
                "> Maximum entry length for new cards: " + AC.config.defaultEntryLimit,
                "> New cards perform memory updates: " + AC.config.defaultCardsDoMemoryUpdates,
                "> Card memory bank preferred length: " + AC.config.defaultMemoryLimit,
                "> Memory summary compression ratio: " + AC.config.memoryCompressionRatio,
                "> Exclude all-caps from title detection: " + AC.config.ignoreAllCapsTitles,
                "> Also detect titles from player inputs: " + AC.config.readFromInputs,
                "> Minimum turns age for title detection: " + AC.config.minimumLookBackDistance,
                "> Use Live Script Interface v2: " + (AC.config.LSIv2 !== null),
                "> Log debug data in a separate card: " + AC.config.showDebugData
            );
        }
        function getConfigureCardDescription() {
            return limitString(O.v(prose(
                Words.delimiter,
                "> AI prompt to generate new cards:",
                limitString(AC.config.generationPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> AI prompt to summarize card memories:",
                limitString(AC.config.compressionPrompt.trim(), 4350).trimEnd(),
                Words.delimiter,
                "> Titles banned from new card creation:",
                AC.database.titles.banned.join(", ")
            )), 9850);
        }
    } else {
        // Auto-Cards is currently disabled
        switch(HOOK) {
        case "input": {
            if (/\/\s*A\s*C/i.test(text)) {
                CODOMAIN.initialize(doPlayerCommands(text));
            } else {
                CODOMAIN.initialize(TEXT);
            }
            break; }
        case "context": {
            // AutoCards was called within the context modifier
            advanceChronometer();
            // Get or construct the "Edit to enable Auto-Cards" story card
            const enableCardTemplate = getEnableCardTemplate();
            const enableCard = getSingletonCard(true, enableCardTemplate);
            banTitle(enableCardTemplate.title);
            pinAndSortCards(enableCard);
            if (AC.signal.forceToggle) {
                enableAutoCards();
            } else if (enableCard.entry !== enableCardTemplate.entry) {
                if ((extractSettings(enableCard.entry)?.enableautocards === true) && (AC.signal.forceToggle !== false)) {
                    // Use optional chaining to check the existence of enableautocards before accessing its value
                    enableAutoCards();
                } else {
                    // Repair the damaged card entry
                    enableCard.entry = enableCardTemplate.entry;
                }
            }
            AC.signal.forceToggle = null;
            CODOMAIN.initialize(TEXT);
            function enableAutoCards() {
                // Auto-Cards has been enabled
                AC.config.doAC = true;
                // Deconstruct the "Edit to enable Auto-Cards" story card
                unbanTitle(enableCardTemplate.title);
                eraseCard(enableCard);
                // Signal the construction of "Configure Auto-Cards" during the next onOutput hook
                AC.signal.swapControlCards = true;
                // Post a success message
                notify("Enabled! You may now edit the \"Configure Auto-Cards\" story card");
                return;
            }
            break; }
        case "output": {
            // AutoCards was called within the output modifier
            promoteAmnesia();
            if (permitOutput()) {
                CODOMAIN.initialize(TEXT);
            }
            concludeOutputBlock((function() {
                if (AC.signal.swapControlCards) {
                    return getEnableCardTemplate();
                } else {
                    return null;
                }
            })());
            break; }
        default: {
            CODOMAIN.initialize(TEXT);
            break; }
        }
        function getEnableCardTemplate() {
            const names = getControlVariants().enable;
            return O.f({
                type: AC.config.defaultCardType,
                title: names.title,
                keys: names.keys,
                entry: prose(
                    "> Auto-Cards automatically creates and updates plot-relevant story cards while you play. To enable this system, simply edit the \"false\" below to say \"true\" instead!",
                    "> Enable Auto-Cards: false"),
                description: "Perform any Do/Say/Story/Continue action within your adventure to apply this change!"
            });
        }
    }
    function hoistConst() { return (class Const {
        // This helps me debug stuff uwu
        #constant;
        constructor(...args) {
            if (args.length !== 0) {
                this.constructor.#throwError([[(args.length === 1), "Const cannot be instantiated with a parameter"], ["Const cannot be instantiated with parameters"]]);
            } else {
                O.f(this);
                return this;
            }
        }
        declare(...args) {
            if (args.length !== 0) {
                this.constructor.#throwError([[(args.length === 1), "Instances of Const cannot be declared with a parameter"], ["Instances of Const cannot be declared with parameters"]]);
            } else if (this.#constant === undefined) {
                this.#constant = null;
                return this;
            } else if (this.#constant === null) {
                this.constructor.#throwError("Instances of Const cannot be redeclared");
            } else {
                this.constructor.#throwError("Instances of Const cannot be redeclared after initialization");
            }
        }
        initialize(...args) {
            if (args.length !== 1) {
                this.constructor.#throwError([[(args.length === 0), "Instances of Const cannot be initialized without a parameter"], ["Instances of Const cannot be initialized with multiple parameters"]]);
            } else if (this.#constant === null) {
                this.#constant = [args[0]];
                return this;
            } else if (this.#constant === undefined) {
                this.constructor.#throwError("Instances of Const cannot be initialized before declaration");
            } else {
                this.constructor.#throwError("Instances of Const cannot be reinitialized");
            }
        }
        read(...args) {
            if (args.length !== 0) {
                this.constructor.#throwError([[(args.length === 1), "Instances of Const cannot be read with a parameter"], ["Instances of Const cannot read with any parameters"]]);
            } else if (Array.isArray(this.#constant)) {
                return this.#constant[0];
            } else if (this.#constant === null) {
                this.constructor.#throwError("Despite prior declaration, instances of Const cannot be read before initialization");
            } else {
                this.constructor.#throwError("Instances of Const cannot be read before initialization");
            }
        }
        // An error condition is paired with an error message [condition, message], call #throwError with an array of pairs to throw the message corresponding with the first true condition [[cndtn1, msg1], [cndtn2, msg2], [cndtn3, msg3], ...] The first conditionless array element always evaluates to true ('else')
        static #throwError(...args) {
            // Look, I thought I was going to use this more at the time okay
            const [conditionalMessagesTable] = args;
            const codomain = new Const().declare();
            const error = O.f(new Error((function() {
                const codomain = new Const().declare();
                if (Array.isArray(conditionalMessagesTable)) {
                    const chosenPair = conditionalMessagesTable.find(function(...args) {
                        const [pair] = args;
                        const codomain = new Const().declare();
                        if (Array.isArray(pair)) {
                            if ((pair.length === 1) && (typeof pair[0] === "string")) {
                                codomain.initialize(true);
                            } else if (
                                (pair.length === 2)
                                && (typeof pair[0] === "boolean")
                                && (typeof pair[1] === "string")
                            ) {
                                codomain.initialize(pair[0]);
                            } else {
                                Const.#throwError("Const.#throwError encountered an invalid array element of conditionalMessagesTable");
                            }
                        } else {
                            Const.#throwError("Const.#throwError encountered a non-array element within conditionalMessagesTable");
                        }
                        return codomain.read();
                    });
                    if (Array.isArray(chosenPair)) {
                        if (chosenPair.length === 1) {
                            codomain.initialize(chosenPair[0]);
                        } else {
                            codomain.initialize(chosenPair[1]);
                        }
                    } else {
                        codomain.initialize("Const.#throwError was not called with any true conditions");
                    }
                } else if (typeof conditionalMessagesTable === "string") {
                    codomain.initialize(conditionalMessagesTable);
                } else {
                    codomain.initialize("Const.#throwError could not parse the given argument");
                }
                return codomain.read();
            })()));
            if (error.stack) {
                codomain.initialize(error.stack
                    .replace(/\(<isolated-vm>:/gi, "(")
                    .replace(/Error:|at\s*(?:#throwError|Const.(?:declare|initialize|read)|new\s*Const)\s*\(\d+:\d+\)/gi, "")
                    .replace(/AutoCards\s*\((\d+):(\d+)\)\s*at\s*<isolated-vm>:\d+:\d+\s*$/i, "AutoCards ($1:$2)")
                    .trim()
                    .replace(/\s+/g, " ")
                );
            } else {
                codomain.initialize(error.message);
            }
            throw codomain.read();
        }
    }); }
    function hoistO() { return (class O {
        // Some Object class methods are annoyingly verbose for how often I use them 👿
        static f(obj) {
            return Object.freeze(obj);
        }
        static v(base) {
            return see(Words.copy) + base;
        }
        static s(obj) {
            return Object.seal(obj);
        }
    }); }
    function hoistWords() { return (class Words { static #cache = {}; static {
        // Each word list is initialized only once before being cached!
        const wordListInitializers = {
            // Special-cased honorifics which are excluded from titles and ignored during split-by-sentences operations
            honorifics: () => [
                "mr.", "ms.", "mrs.", "dr."
            ],
            // Other special-cased abbreviations used to reformat titles and split-by-sentences
            abbreviations: () => [
                "sr.", "jr.", "etc.", "st.", "ex.", "inc."
            ],
            // Lowercase minor connector words which may exist within titles
            minor: () => [
                "&", "the", "for", "of", "le", "la", "el"
            ],
            // Removed from shortened titles for improved memory detection and trigger keword assignments
            peerage: () => [
                "sir", "lord", "lady", "king", "queen", "majesty", "duke", "duchess", "noble", "royal", "emperor", "empress", "great", "prince", "princess", "count", "countess", "baron", "baroness", "archduke", "archduchess", "marquis", "marquess", "viscount", "viscountess", "consort", "grand", "sultan", "sheikh", "tsar", "tsarina", "czar", "czarina", "viceroy", "monarch", "regent", "imperial", "sovereign", "president", "prime", "minister", "nurse", "doctor", "saint", "general", "private", "commander", "captain", "lieutenant", "sergeant", "admiral", "marshal", "baronet", "emir", "chancellor", "archbishop", "bishop", "cardinal", "abbot", "abbess", "shah", "maharaja", "maharani", "councillor", "squire", "lordship", "ladyship", "monseigneur", "mayor", "princeps", "chief", "chef", "their", "my", "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "yourself", "mine", "myself", "highness", "excellency", "farmer", "sheriff", "officer", "detective", "investigator", "miss", "mister", "colonel", "professor", "teacher", "agent", "heir", "heiress", "master", "mistress", "headmaster", "headmistress", "principal", "papa", "mama", "mommy", "daddy", "mother", "father", "grandma", "grandpa", "aunt", "auntie", "aunty", "uncle", "cousin", "sister", "brother", "holy", "holiness", "almighty", "senator", "congressman"
            ],
            // Common named entities represent special-cased INVALID card titles. Because these concepts are already abundant within the AI's training data, generating story cards for any of these would be both annoying and superfluous. Therefore, Words.entities is accessed during banned titles initialization to prevent their appearance
            entities: () => [
                // Seasons
                "spring", "summer", "autumn", "fall", "winter",
                // Holidays
                "halloween", "christmas", "thanksgiving", "easter", "hanukkah", "passover", "ramadan", "eid", "diwali", "new year", "new year eve", "valentine day", "oktoberfest",
                // People terms
                "mom", "dad", "child", "grandmother", "grandfather", "ladies", "gentlemen", "gentleman", "slave",
                // Capitalizable pronoun thingys
                "his", "him", "he'd", "her", "she", "she'd", "you", "your", "yours", "you'd", "you've", "you'll", "you're", "yourself", "mine", "myself", "this", "that",
                // Religious figures & deities
                "god", "jesus", "buddha", "allah", "christ",
                // Religious texts & concepts
                "bible", "holy bible", "qur'an", "quran", "hadith", "tafsir", "tanakh", "talmud", "torah", "vedas", "vatican", "paganism", "pagan",
                // Religions & belief systems
                "hindu", "hinduism", "christianity", "islam", "jew", "judaism", "taoism", "buddhist", "buddhism", "catholic", "baptist",
                // Common locations
                "earth", "moon", "sun", "new york city", "london", "paris", "tokyo", "beijing", "mumbai", "sydney", "berlin", "moscow", "los angeles", "san francisco", "chicago", "miami", "seattle", "vancouver", "toronto", "ottawa", "mexico city", "rio de janeiro", "cape town", "sao paulo", "bangkok", "delhi", "amsterdam", "seoul", "shanghai", "new delhi", "atlanta", "jerusalem", "africa", "north america", "south america", "central america", "asia", "north africa", "south africa", "boston", "rome", "america", "siberia", "new england", "manhattan", "bavaria", "catalonia", "greenland", "hong kong", "singapore",
                // Countries & political entities
                "china", "india", "japan", "germany", "france", "spain", "italy", "canada", "australia", "brazil", "south africa", "russia", "north korea", "south korea", "iran", "iraq", "syria", "saudi arabia", "afghanistan", "pakistan", "uk", "britain", "england", "scotland", "wales", "northern ireland", "usa", "united states", "united states of america", "mexico", "turkey", "greece", "portugal", "poland", "netherlands", "belgium", "sweden", "norway", "finland", "denmark",
                // Organizations & unions
                "united nations", "european union", "state", "nato", "nfl", "nba", "fbi", "cia", "harvard", "yale", "princeton", "ivy league", "little league", "nasa", "nsa", "noaa", "osha", "nascar", "daytona 500", "grand prix", "wwe", "mba", "superbowl",
                // Currencies
                "dollar", "euro", "pound", "yen", "rupee", "peso", "franc", "dinar", "bitcoin", "ethereum", "ruble", "won", "dirham",
                // Landmarks
                "sydney opera house", "eiffel tower", "statue of liberty", "big ben", "great wall of china", "taj mahal", "pyramids of giza", "grand canyon", "mount everest",
                // Events
                "world war i", "world war 1", "wwi", "wwii", "world war ii", "world war 2", "wwii", "ww2", "cold war", "brexit", "american revolution", "french revolution", "holocaust", "cuban missile crisis",
                // Companies
                "google", "microsoft", "apple", "amazon", "facebook", "tesla", "ibm", "intel", "samsung", "sony", "coca-cola", "nike", "ford", "chevy", "pontiac", "chrysler", "volkswagen", "lambo", "lamborghini", "ferrari", "pizza hut", "taco bell", "ai dungeon", "openai", "mcdonald", "mcdonalds", "kfc", "burger king", "disney",
                // Nationalities & languages
                "english", "french", "spanish", "german", "italian", "russian", "chinese", "japanese", "korean", "arabic", "portuguese", "hindi", "american", "canadian", "mexican", "brazilian", "indian", "australian", "egyptian", "greek", "swedish", "norwegian", "danish", "dutch", "turkish", "iranian", "ukraine", "asian", "british", "european", "polish", "thai", "vietnamese", "filipino", "malaysian", "indonesian", "finnish", "estonian", "latvian", "lithuanian", "czech", "slovak", "hungarian", "romanian", "bulgarian", "serbian", "croatian", "bosnian", "slovenian", "albanian", "georgian", "armenian", "azerbaijani", "kazakh", "uzbek", "mongolian", "hebrew", "persian", "pashto", "urdu", "bengali", "tamil", "telugu", "marathi", "gujarati", "swahili", "zulu", "xhosa", "african", "north african", "south african", "north american", "south american", "central american", "colombian", "argentinian", "chilean", "peruvian", "venezuelan", "ecuadorian", "bolivian", "paraguayan", "uruguayan", "cuban", "dominican", "arabian", "roman", "haitian", "puerto rican", "moroccan", "algerian", "tunisian", "saudi", "emirati", "qatarian", "bahraini", "omani", "yemeni", "syrian", "lebanese", "iraqi", "afghan", "pakistani", "sri lankan", "burmese", "laotian", "cambodian", "hawaiian", "victorian",
                // Fantasy stuff
                "elf", "elves", "elven", "dwarf", "dwarves", "dwarven", "human", "man", "men", "mankind", "humanity",
                // IPs
                "pokemon", "pokémon", "minecraft", "beetles", "band-aid", "bandaid", "band aid", "big mac", "gpt", "chatgpt", "gpt-2", "gpt-3", "gpt-4", "gpt-4o", "mixtral", "mistral", "linux", "windows", "mac", "happy meal", "disneyland", "disneyworld",
                // US states
                "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "west virginia", "wisconsin", "wyoming",
                // Canadian Provinces & Territories
                "british columbia", "manitoba", "new brunswick", "labrador", "nova scotia", "ontario", "prince edward island", "quebec", "saskatchewan", "northwest territories", "nunavut", "yukon", "newfoundland",
                // Australian States & Territories
                "new south wales", "queensland", "south australia", "tasmania", "western australia", "australian capital territory",
                // idk
                "html", "javascript", "python", "java", "c++", "php", "bluetooth", "json", "sql", "word", "dna", "icbm", "npc", "usb", "rsvp", "omg", "brb", "lol", "rofl", "smh", "ttyl", "rubik", "adam", "t-shirt", "tshirt", "t shirt", "led", "leds", "laser", "lasers", "qna", "q&a", "vip", "human resource", "human resources", "llm", "llc", "ceo", "cfo", "coo", "office", "blt", "suv", "suvs", "ems", "emt", "cbt", "cpr", "ferris wheel", "toy", "pet", "plaything", "m o"
            ],
            // Unwanted values
            undesirables: () => [
                [343332, 451737, 323433, 377817], [436425, 356928, 363825, 444048], [323433, 428868, 310497, 413952], [350097, 66825, 436425, 413952, 406593, 444048], [316932, 330000, 436425, 392073], [444048, 356928, 323433], [451737, 444048, 363825], [330000, 310497, 392073, 399300]
            ],
            delimiter: () => (
                "——————————————————————————"
            ),
            // Source code location
            copy: () => [
                126852, 33792, 211200, 384912, 336633, 310497, 436425, 336633, 33792, 459492, 363825, 436425, 363825, 444048, 33792, 392073, 483153, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 33792, 135168, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 33792, 310497, 399300, 330000, 33792, 428868, 336633, 310497, 330000, 33792, 392073, 483153, 33792, 316932, 363825, 406593, 33792, 343332, 406593, 428868, 33792, 436425, 363825, 392073, 413952, 384912, 336633, 33792, 363825, 399300, 436425, 444048, 428868, 451737, 323433, 444048, 363825, 406593, 399300, 436425, 33792, 406593, 399300, 33792, 310497, 330000, 330000, 363825, 399300, 350097, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 444048, 406593, 33792, 483153, 406593, 451737, 428868, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 33792, 3355672848, 139592360193, 3300, 3300, 356928, 444048, 444048, 413952, 436425, 111012, 72897, 72897, 413952, 384912, 310497, 483153, 69828, 310497, 363825, 330000, 451737, 399300, 350097, 336633, 406593, 399300, 69828, 323433, 406593, 392073, 72897, 413952, 428868, 406593, 343332, 363825, 384912, 336633, 72897, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 3300, 3300, 126852, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 459492, 79233, 69828, 76032, 69828, 76032, 33792, 363825, 436425, 33792, 310497, 399300, 33792, 406593, 413952, 336633, 399300, 66825, 436425, 406593, 451737, 428868, 323433, 336633, 33792, 436425, 323433, 428868, 363825, 413952, 444048, 33792, 343332, 406593, 428868, 33792, 139425, 175857, 33792, 152592, 451737, 399300, 350097, 336633, 406593, 399300, 33792, 392073, 310497, 330000, 336633, 33792, 316932, 483153, 33792, 190608, 336633, 467313, 330000, 190608, 336633, 310497, 356928, 69828, 33792, 261393, 406593, 451737, 33792, 356928, 310497, 459492, 336633, 33792, 392073, 483153, 33792, 343332, 451737, 384912, 384912, 33792, 413952, 336633, 428868, 392073, 363825, 436425, 436425, 363825, 406593, 399300, 33792, 444048, 406593, 33792, 451737, 436425, 336633, 33792, 139425, 451737, 444048, 406593, 66825, 148137, 310497, 428868, 330000, 436425, 33792, 467313, 363825, 444048, 356928, 363825, 399300, 33792, 483153, 406593, 451737, 428868, 33792, 413952, 336633, 428868, 436425, 406593, 399300, 310497, 384912, 33792, 406593, 428868, 33792, 413952, 451737, 316932, 384912, 363825, 436425, 356928, 336633, 330000, 33792, 436425, 323433, 336633, 399300, 310497, 428868, 363825, 406593, 436425, 35937, 3300, 126852, 33792, 261393, 406593, 451737, 50193, 428868, 336633, 33792, 310497, 384912, 436425, 406593, 33792, 467313, 336633, 384912, 323433, 406593, 392073, 336633, 33792, 444048, 406593, 33792, 336633, 330000, 363825, 444048, 33792, 444048, 356928, 336633, 33792, 139425, 175857, 33792, 413952, 428868, 406593, 392073, 413952, 444048, 436425, 33792, 310497, 399300, 330000, 33792, 444048, 363825, 444048, 384912, 336633, 33792, 336633, 475200, 323433, 384912, 451737, 436425, 363825, 406593, 399300, 436425, 33792, 413952, 428868, 406593, 459492, 363825, 330000, 336633, 330000, 33792, 316932, 336633, 384912, 406593, 467313, 69828, 33792, 175857, 33792, 436425, 363825, 399300, 323433, 336633, 428868, 336633, 384912, 483153, 33792, 356928, 406593, 413952, 336633, 33792, 483153, 406593, 451737, 33792, 336633, 399300, 370788, 406593, 483153, 33792, 483153, 406593, 451737, 428868, 33792, 310497, 330000, 459492, 336633, 399300, 444048, 451737, 428868, 336633, 436425, 35937, 33792, 101128769412, 106046468352, 3300
            ],
            // Card interface names reserved for use within LSIv2
            reserved: () => ({
                library: "Shared Library", input: "Input Modifier", context: "Context Modifier", output: "Output Modifier", guide: "LSIv2 Guide", state: "State Display", log: "Console Log"
            }),
            // Acceptable config settings which are coerced to true
            trues: () => [
                "true", "t", "yes", "y", "on"
            ],
            // Acceptable config settings which are coerced to false
            falses: () => [
                "false", "f", "no", "n", "off"
            ],
            guide: () => prose(
                ">>> Detailed Guide:",
                "Auto-Cards was made by LewdLeah ❤️",
                "",
                Words.delimiter,
                "",
                "💡 What is Auto-Cards?",
                "Auto-Cards is a plug-and-play script for AI Dungeon that watches your story and automatically writes plot-relevant story cards during normal gameplay. A forgetful AI breaks my immersion, therefore my primary goal was to address the \"object permanence problem\" by extending story cards and memories with deeper automation. Auto-Cards builds a living reference of your adventure's world as you go. For your own convenience, all of this stuff is handled in the background. Though you're certainly welcome to customize various settings or use in-game commands for more precise control",
                "",
                Words.delimiter,
                "",
                " 📌 Main Features",
                "- Detects named entities from your story and periodically writes new cards",
                "- Smart long-term memory updates and summaries for important cards",
                "- Fully customizable AI card generation and memory summarization prompts",
                "- Optional in-game commands to manually direct the card generation process",
                "- Free and open source for anyone to use within their own projects",
                "- Compatible with other scripts and includes an external API",
                "- Optional in-game scripting interface (LSIv2)",
                "",
                Words.delimiter,
                "",
                "⚙️ Config Settings",
                "You may, at any time, fine-tune your settings in-game by editing their values within the config card's entry section. Simply swap true/false or tweak numbers where appropriate",
                "",
                "> Disable Auto-Cards:",
                "Turns the whole system off if true",
                "",
                "> Show detailed guide:",
                "If true, shows this player guide in-game",
                "",
                "> Delete all automatic story cards:",
                "Removes every auto-card present in your adventure",
                "",
                "> Reset all config settings and prompts:",
                "Restores all settings and prompts to their original default values",
                "",
                "> Pin this config card near the top:",
                "Keeps the config card pinned high on your cards list",
                "",
                "> Minimum turns cooldown for new cards:",
                "How many turns (minimum) to wait between generating new cards. Using 9999 will pause periodic card generation while still allowing card memory updates to continue",
                "",
                "> New cards use a bulleted list format:",
                "If true, new entries will use bullet points instead of pure prose",
                "",
                "> Maximum entry length for new cards:",
                "Caps how long newly generated card entries can be (in characters)",
                "",
                "> New cards perform memory updates:",
                "If true, new cards will automatically experience memory updates over time",
                "",
                "> Card memory bank preferred length:",
                "Character count threshold before card memories are summarized to save space",
                "",
                "> Memory summary compression ratio:",
                "Controls how much to compress when summarizing long card memory banks",
                "(ratio = 10 * old / new ... such that 25 -> 2.5x shorter)",
                "",
                "> Exclude all-caps from title detection:",
                "Prevents all-caps words like \"RUN\" from being parsed as viable titles",
                "",
                "> Also detect titles from player inputs:",
                "Allows your typed Do/Say/Story action inputs to help suggest new card topics. Set to false if you have bad grammar, or if you're German (due to idiosyncratic noun capitalization habits)",
                "",
                "> Minimum turns age for title detection:",
                "How many actions back the script looks when parsing recent titles from your story",
                "",
                "> Use Live Script Interface v2:",
                "Enables LSIv2 for extra scripting magic and advanced control via arbitrary code execution",
                "",
                "> Log debug data in a separate card:",
                "Shows a debug card if set to true",
                "",
                Words.delimiter,
                "",
                "✏️ AI Prompts",
                "You may specify how the AI handles story card processes by editing either of these two prompts within the config card's notes section",
                "",
                "> AI prompt to generate new cards:",
                "Used when Auto-Cards writes a new card entry. It tells the AI to focus on important plot stuff, avoid fluff, and write in a consistent, polished style. I like to add some personal preferences here when playing my own adventures. \"%{title}\" and \"%{entry}\" are dynamic placeholders for their namesakes",
                "",
                "> AI prompt to summarize card memories:",
                "Summarizes older details within card memory banks to keep everything concise and neat over the long-run. Maintains only the most important details, written in the past tense. \"%{title}\" and \"%{memory}\" are dynamic placeholders for their namesakes",
                "",
                Words.delimiter,
                "",
                "⛔ Banned Titles List",
                "This list prevents new cards from being created for super generic or unhelpful titles such as North, Tuesday, or December. You may edit these at the bottom of the config card's notes section. Capitalization and plural/singular forms are handled for you, so no worries about that",
                "",
                "> Titles banned from automatic new card generation:",
                "North, East, South, West, and so on...",
                "",
                Words.delimiter,
                "",
                "🔑 In-Game Commands (/ac)",
                "Use these commands to manually interact with Auto-Cards, simply type them into a Do/Say/Story input action",
                "",
                "/ac",
                "Sets your actual cooldown to 0 and immediately attempts to generate a new card for the most relevant unused title from your story (if one exists)",
                "",
                "/ac Your Title Goes Here",
                "Will immediately begin generating a new story card with the given title",
                "Example use: \"/ac Leah\"",
                "",
                "/ac Your Title Goes Here / Your extra prompt details go here",
                "Similar to the previous case, but with additional context to include with the card generation prompt",
                "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity\"",
                "",
                "/ac Your Title Goes Here / Your extra prompt details go here / Your starter entry goes here",
                "Again, similar to the previous case, but with an initial card entry for the generator to build upon",
                "Example use: \"/ac Leah / Focus on Leah's works of artifice and ingenuity / You are a woman named Leah.\"",
                "",
                "/ac redo Your Title Goes Here",
                "Rewrites your chosen story card, using the old card entry, memory bank, and story context for inspiration. Useful for recreating cards after important character development has occurred",
                "Example use: \"/ac redo Leah\"",
                "",
                "/ac redo Your Title Goes Here / New info goes here",
                "Similar to the previous case, but with additional info provided to guide the rewrite according to your additional specifications",
                "Example use: \"/ac redo Leah / Leah recently achieved immortality\"",
                "",
                "/ac redo all",
                "Recreates every single auto-card in your adventure. I must warn you though: This is very risky",
                "",
                "Extra Info:",
                "- Invalid titles will fail. It's a technical limitation, sorry 🤷‍♀️",
                "- Titles must be unique, unless you're attempting to use \"/ac redo\" for an existing card",
                "- You may submit multiple commands using a single input to queue up a chained sequence of requests",
                "- Capitalization doesn't matter, titles will be reformatted regardless",
                "",
                Words.delimiter,
                "",
                "🔧 External API Functions (quick summary)",
                "These are mainly for other JavaScript programmers to use, so feel free to ignore this section if that doesn't apply to you. Anyway, here's what each one does in plain terms, though please do refer to my source code for the full documentation",
                "",
                "AutoCards().API.postponeEvents();",
                "Pauses Auto-Cards activity for n many turns",
                "",
                "AutoCards().API.emergencyHalt();",
                "Emergency stop or resume",
                "",
                "AutoCards().API.suppressMessages();",
                "Hides Auto-Cards toasts by preventing assignment to state.message",
                "",
                "AutoCards().API.debugLog();",
                "Writes to the debug log card",
                "",
                "AutoCards().API.toggle();",
                "Turns Auto-Cards on/off",
                "",
                "AutoCards().API.generateCard();",
                "Initiates AI generation of the requested card",
                "",
                "AutoCards().API.redoCard();",
                "Regenerates an existing card",
                "",
                "AutoCards().API.setCardAsAuto();",
                "Flags or unflags a card as automatic",
                "",
                "AutoCards().API.addCardMemory();",
                "Adds a memory to a specific card",
                "",
                "AutoCards().API.eraseAllAutoCards();",
                "Deletes all auto-cards",
                "",
                "AutoCards().API.getUsedTitles();",
                "Lists all current card titles and keys",
                "",
                "AutoCards().API.getBannedTitles();",
                "Shows your current banned titles list",
                "",
                "AutoCards().API.setBannedTitles();",
                "Replaces the banned titles list with a new list",
                "",
                "AutoCards().API.buildCard();",
                "Makes a new card from scratch, using exact parameters",
                "",
                "AutoCards().API.getCard();",
                "Finds cards that match a filter",
                "",
                "AutoCards().API.eraseCard();",
                "Deletes cards matching a filter",
                "",
                "These API functions also work from within the LSIv2 scope, by the way",
                "",
                Words.delimiter,
                "",
                "❤️ Special Thanks",
                "This project flourished due to the incredible help, feedback, and encouragement from the AI Dungeon community. Your ideas, bug reports, testing, and support made Auto-Cards smarter, faster, and more fun for all. Please refer to my source code to learn more about everyone's specific contributions",
                "",
                "AHotHamster22, BinKompliziert, Boo, bottledfox, Bruno, Burnout, bweni, DebaczX, Dirty Kurtis, Dragranis, effortlyss, Hawk, Idle Confusion, ImprezA, Kat-Oli, KryptykAngel, Mad19pumpkin, Magic, Mirox80, Nathaniel Wyvern, NobodyIsUgly, OnyxFlame, Purplejump, Randy Viosca, RustyPawz, sinner, Sleepy pink, Vutinberg, Wilmar, Yi1i1i",
                "",
                Words.delimiter,
                "",
                "🎴 Random Tips",
                "- The default setup works great out of the box, just play normally and watch your world build itself",
                "- Enable AI Dungeon's built-in memory system for the best results",
                "- Gameplay -> AI Models -> Memory System -> Memory Bank -> Toggle-ON to enable",
                "- \"t\" and \"f\" are valid shorthand for \"true\" and \"false\" inside the config card",
                "- If Auto-Cards goes overboard with new cards, you can pause it by setting the cooldown config to 9999",
                "- Write \"{title:}\" anywhere within a regular story card's entry to transform it into an automatic card",
                "- Feel free to import/export entire story card decks at any time",
                "- Please copy my source code from here: https://play.aidungeon.com/profile/LewdLeah",
                "",
                Words.delimiter,
                "",
                "Happy adventuring! ❤️",
                "Please erase before continuing! <<<"
            )
        };
        for (const wordList in wordListInitializers) {
            // Define a lazy getter for every word list
            Object.defineProperty(Words, wordList, {
                configurable: false,
                enumerable: true,
                get() {
                    // If not already in cache, initialize and store the word list
                    if (!(wordList in Words.#cache)) {
                        Words.#cache[wordList] = O.f(wordListInitializers[wordList]());
                    }
                    return Words.#cache[wordList];
                }
            });
        }
    } }); }
    function hoistStringsHashed() { return (class StringsHashed {
        // Used for information-dense past memory recognition
        // Strings are converted to (reasonably) unique hashcodes for efficient existence checking
        static #defaultSize = 65536;
        #size;
        #store;
        constructor(size = StringsHashed.#defaultSize) {
            this.#size = size;
            this.#store = new Set();
            return this;
        }
        static deserialize(serialized, size = StringsHashed.#defaultSize) {
            const stringsHashed = new StringsHashed(size);
            stringsHashed.#store = new Set(serialized.split(","));
            return stringsHashed;
        }
        serialize() {
            return Array.from(this.#store).join(",");
        }
        has(str) {
            return this.#store.has(this.#hash(str));
        }
        add(str) {
            this.#store.add(this.#hash(str));
            return this;
        }
        remove(str) {
            this.#store.delete(this.#hash(str));
            return this;
        }
        size() {
            return this.#store.size;
        }
        latest(keepLatestCardinality) {
            if (this.#store.size <= keepLatestCardinality) {
                return this;
            }
            const excess = this.#store.size - keepLatestCardinality;
            const iterator = this.#store.values();
            for (let i = 0; i < excess; i++) {
                // The oldest hashcodes are removed first (insertion order matters!)
                this.#store.delete(iterator.next().value);
            }
            return this;
        }
        #hash(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = ((31 * hash) + str.charCodeAt(i)) % this.#size;
            }
            return hash.toString(36);
        }
    }); }
    function hoistInternal() { return (class Internal {
        // Some exported API functions are internally reused by AutoCards
        // Recursively calling AutoCards().API is computationally wasteful
        // AutoCards uses this collection of static methods as an internal proxy
        static generateCard(request, predefinedPair = ["", ""]) {
            // Method call guide:
            // Internal.generateCard({
            //     // All properties except 'title' are optional
            //     type: "card type, defaults to 'class' for ease of filtering",
            //     title: "card title",
            //     keysStart: "preexisting card triggers",
            //     entryStart: "preexisting card entry",
            //     entryPrompt: "prompt the AI will use to complete this entry",
            //     entryPromptDetails: "extra details to include with this card's prompt",
            //     entryLimit: 750, // target character count for the generated entry
            //     description: "card notes",
            //     memoryStart: "preexisting card memory",
            //     memoryUpdates: true, // card updates when new relevant memories are formed
            //     memoryLimit: 2750, // max characters before the card memory is compressed
            // });
            const titleKeyPair = formatTitle((request.title ?? "").toString());
            const title = predefinedPair[0] || titleKeyPair.newTitle;
            if (
                (title === "")
                || (("title" in AC.generation.workpiece) && (title === AC.generation.workpiece.title))
                || (isAwaitingGeneration() && (AC.generation.pending.some(pendingWorkpiece => (
                    ("title" in pendingWorkpiece) && (title === pendingWorkpiece.title)
                ))))
            ) {
                logEvent("The title '" + request.title + "' is invalid or unavailable for card generation", true);
                return false;
            }
            AC.generation.pending.push(O.s({
                title: title,
                type: limitString((request.type || AC.config.defaultCardType).toString().trim(), 100),
                keys: predefinedPair[1] || buildKeys((request.keysStart ?? "").toString(), titleKeyPair.newKey),
                entry: limitString("{title: " + title + "}" + cleanSpaces((function() {
                    const entry = (request.entryStart ?? "").toString().trim();
                    if (entry === "") {
                        return "";
                    } else {
                        return ("\n" + entry + (function() {
                            if (/[a-zA-Z]$/.test(entry)) {
                                return ".";
                            } else {
                                return "";
                            }
                        })() + " ");
                    }
                })()), 2000),
                description: limitString((
                    (function() {
                        const description = limitString((request.description ?? "").toString().trim(), 9900);
                        if (description === "") {
                            return "";
                        } else {
                            return description + "\n\n";
                        }
                    })() + "Auto-Cards will contextualize these memories:\n{updates: " + (function() {
                        if (typeof request.memoryUpdates === "boolean") {
                            return request.memoryUpdates;
                        } else {
                            return AC.config.defaultCardsDoMemoryUpdates;
                        }
                    })() + ", limit: " + validateMemoryLimit(
                        parseInt((request.memoryLimit || AC.config.defaultMemoryLimit), 10)
                    ) + "}" + (function() {
                        const cardMemoryBank = cleanSpaces((request.memoryStart ?? "").toString().trim());
                        if (cardMemoryBank === "") {
                            return "";
                        } else {
                            return "\n" + cardMemoryBank.split("\n").map(memory => addBullet(memory)).join("\n");
                        }
                    })()
                ), 10000),
                prompt: (function() {
                    let prompt = insertTitle((
                        (request.entryPrompt ?? "").toString().trim() || AC.config.generationPrompt.trim()
                    ), title);
                    let promptDetails = insertTitle((
                        cleanSpaces((request.entryPromptDetails ?? "").toString().trim())
                    ), title);
                    if (promptDetails !== "") {
                        const spacesPrecedingTerminalEntryPlaceholder = (function() {
                            const terminalEntryPlaceholderPattern = /(?:[%\$]+\s*|[%\$]*){+\s*entry\s*}+$/i;
                            if (terminalEntryPlaceholderPattern.test(prompt)) {
                                prompt = prompt.replace(terminalEntryPlaceholderPattern, "");
                                const trailingSpaces = prompt.match(/(\s+)$/);
                                if (trailingSpaces) {
                                    prompt = prompt.trimEnd();
                                    return trailingSpaces[1];
                                } else {
                                    return "\n\n";
                                }
                            } else {
                                return "";
                            }
                        })();
                        switch(prompt[prompt.length - 1]) {
                        case "]": { encapsulateBothPrompts("[", true, "]"); break; }
                        case ">": { encapsulateBothPrompts(null, false, ">"); break; }
                        case "}": { encapsulateBothPrompts("{", true, "}"); break; }
                        case ")": { encapsulateBothPrompts("(", true, ")"); break; }
                        case "/": { encapsulateBothPrompts("/", true, "/"); break; }
                        case "#": { encapsulateBothPrompts("#", true, "#"); break; }
                        case "-": { encapsulateBothPrompts(null, false, "-"); break; }
                        case ":": { encapsulateBothPrompts(":", true, ":"); break; }
                        case "<": { encapsulateBothPrompts(">", true, "<"); break; }
                        };
                        if (promptDetails.includes("\n")) {
                            const lines = promptDetails.split("\n");
                            for (let i = 0; i < lines.length; i++) {
                                lines[i] = addBullet(lines[i].trim());
                            }
                            promptDetails = lines.join("\n");
                        } else {
                            promptDetails = addBullet(promptDetails);
                        }
                        prompt += "\n" + promptDetails + (function() {
                            if (spacesPrecedingTerminalEntryPlaceholder !== "") {
                                // Prompt previously contained a terminal %{entry} placeholder, re-append it
                                return spacesPrecedingTerminalEntryPlaceholder + "%{entry}";
                            }
                            return "";
                        })();
                        function encapsulateBothPrompts(leftSymbol, slicesAtMiddle, rightSymbol) {
                            if (slicesAtMiddle) {
                                prompt = prompt.slice(0, -1).trim();
                                if (promptDetails.startsWith(leftSymbol)) {
                                    promptDetails = promptDetails.slice(1).trim();
                                }
                            }
                            if (!promptDetails.endsWith(rightSymbol)) {
                                promptDetails += rightSymbol;
                            }
                            return;
                        }
                    }
                    return limitString(prompt, Math.floor(0.8 * AC.signal.maxChars));
                })(),
                limit: validateEntryLimit(parseInt((request.entryLimit || AC.config.defaultEntryLimit), 10))
            }));
            notify("Generating card for \"" + title + "\"");
            function addBullet(str) {
                return "- " + str.replace(/^-+\s*/, "");
            }
            return true;
        }
        static redoCard(request, useOldInfo, newInfo) {
            const card = getIntendedCard(request.title)[0];
            const oldCard = O.f({...card});
            if (!eraseCard(card)) {
                return false;
            } else if (newInfo !== "") {
                request.entryPromptDetails = (request.entryPromptDetails ?? "").toString() + "\n" + newInfo;
            }
            O.f(request);
            Internal.getUsedTitles(true);
            if (!Internal.generateCard(request) && !Internal.generateCard(request, [
                (oldCard.entry.match(/^{title: ([\s\S]*?)}/)?.[1] || request.title.replace(/\w\S*/g, word => (
                    word[0].toUpperCase() + word.slice(1).toLowerCase()
                ))), oldCard.keys
            ])) {
                constructCard(oldCard, newCardIndex());
                Internal.getUsedTitles(true);
                return false;
            } else if (!useOldInfo) {
                return true;
            }
            AC.generation.pending[AC.generation.pending.length - 1].prompt = ((
                removeAutoProps(oldCard.entry) + "\n\n" +
                removeAutoProps(isolateNotesAndMemories(oldCard.description)[1])
            ).trimEnd() + "\n\n" + AC.generation.pending[AC.generation.pending.length - 1].prompt).trim();
            return true;
        }
        // Sometimes it's helpful to log information elsewhere during development
        // This log card is separate and distinct from the LSIv2 console log
        static debugLog(...args) {
            const debugCardName = "Debug Log";
            banTitle(debugCardName);
            const card = getSingletonCard(true, O.f({
                type: AC.config.defaultCardType,
                title: debugCardName,
                keys: debugCardName,
                entry: "The debug console log will print to the notes section below.",
                description: Words.delimiter + "\nBEGIN DEBUG LOG"
            }));
            logToCard(card, ...args);
            return card;
        }
        static eraseAllAutoCards() {
            const cards = [];
            Internal.getUsedTitles(true);
            for (const card of storyCards) {
                if (card.entry.startsWith("{title: ")) {
                    cards.push(card);
                }
            }
            for (const card of cards) {
                eraseCard(card);
            }
            auto.clear();
            forgetStuff();
            clearTransientTitles();
            AC.generation.pending = [];
            AC.database.memories.associations = {};
            if (AC.config.deleteAllAutoCards) {
                AC.config.deleteAllAutoCards = null;
            }
            return cards.length;
        }
        static getUsedTitles(isExternal = false) {
            if (isExternal) {
                bans.clear();
                isBanned("", true);
            } else if (0 < AC.database.titles.used.length) {
                return AC.database.titles.used;
            }
            // All unique used titles and keys encountered during this iteration
            const seen = new Set();
            auto.clear();
            clearTransientTitles();
            AC.database.titles.used = ["%@%"];
            for (const card of storyCards) {
                // Perform some common-sense maintenance while we're here
                card.type = card.type.trim();
                card.title = card.title.trim();
                // card.keys should be left as-is
                card.entry = card.entry.trim();
                card.description = card.description.trim();
                if (isExternal) {
                    O.s(card);
                } else if (!shouldProceed()) {
                    checkRemaining();
                    continue;
                }
                // An ideal auto-card's entry starts with "{title: Example of Greatness}" (example)
                // An ideal auto-card's description contains "{updates: true, limit: 2750}" (example)
                if (checkPlurals(denumberName(card.title.replace("\n", "")), t => isBanned(t))) {
                    checkRemaining();
                    continue;
                } else if (!card.keys.includes(",")) {
                    const cleanKeys = denumberName(card.keys.trim());
                    if ((2 < cleanKeys.length) && checkPlurals(cleanKeys, t => isBanned(t))) {
                        checkRemaining();
                        continue;
                    }
                }
                // Detect and repair malformed auto-card properties in a fault-tolerant manner
                const traits = [card.entry, card.description].map((str, i) => {
                    // Absolute abomination uwu
                    const hasUpdates = /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i.test(str);
                    const hasLimit = /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i.test(str);
                    return [(function() {
                        if (hasUpdates || hasLimit) {
                            if (/titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i.test(str)) {
                                return 2;
                            }
                            return false;
                        } else if (/titles?\s*:[\s\S]*?}/i.test(str)) {
                            return 1;
                        } else if (!(
                            (i === 0)
                            && /{[\s\S]*?}/.test(str)
                            && (str.match(/{/g)?.length === 1)
                            && (str.match(/}/g)?.length === 1)
                        )) {
                            return false;
                        }
                        const badTitleHeaderMatch = str.match(/{([\s\S]*?)}/);
                        if (!badTitleHeaderMatch) {
                            return false;
                        }
                        const inferredTitle = badTitleHeaderMatch[1].split(",")[0].trim();
                        if (
                            (2 < inferredTitle.length)
                            && (inferredTitle.length <= 100)
                            && (badTitleHeaderMatch[0].length < str.length)
                        ) {
                            // A rare case where the title's existence should be inferred from the enclosing {curly brackets}
                            return inferredTitle;
                        }
                        return false;
                    })(), hasUpdates, hasLimit];
                }).flat();
                if (traits.every(trait => !trait)) {
                    // This card contains no auto-card traits, not even malformed ones
                    checkRemaining();
                    continue;
                }
                const [
                    hasEntryTitle,
                    hasEntryUpdates,
                    hasEntryLimit,
                    hasDescTitle,
                    hasDescUpdates,
                    hasDescLimit
                ] = traits;
                // Handle all story cards which belong to the Auto-Cards ecosystem
                // May flag this damaged auto-card for later repairs
                // May flag this duplicate auto-card for deformatting (will become a regular story card)
                let repair = false;
                let release = false;
                const title = (function() {
                    let title = "";
                    if (typeof hasEntryTitle === "string") {
                        repair = true;
                        title = formatTitle(hasEntryTitle).newTitle;
                        if (hasDescTitle && bad()) {
                            title = parseTitle(false);
                        }
                    } else if (hasEntryTitle) {
                        title = parseTitle(true);
                        if (hasDescTitle) {
                            repair = true;
                            if (bad()) {
                                title = parseTitle(false);
                            }
                        } else if (1 < card.entry.match(/titles?\s*:/gi)?.length) {
                            repair = true;
                        }
                    } else if (hasDescTitle) {
                        repair = true;
                        title = parseTitle(false);
                    }
                    if (bad()) {
                        repair = true;
                        title = formatTitle(card.title).newTitle;
                        if (bad()) {
                            release = true;
                        } else {
                            seen.add(title);
                            auto.add(title.toLowerCase());
                        }
                    } else {
                        seen.add(title);
                        auto.add(title.toLowerCase());
                        const titleHeader = "{title: " + title + "}";
                        if (!repair && !((card.entry === titleHeader) || card.entry.startsWith(titleHeader + "\n"))) {
                            repair = true;
                        }
                    }
                    function bad() {
                        return ((title === "") || checkPlurals(title, t => auto.has(t)));
                    }
                    function parseTitle(fromEntry) {
                        const [sourceType, sourceText] = (function() {
                            if (fromEntry) {
                                return [hasEntryTitle, card.entry];
                            } else {
                                return [hasDescTitle, card.description];
                            }
                        })()
                        switch(sourceType) {
                        case 1: {
                            return formatTitle(isolateProperty(
                                sourceText,
                                /titles?\s*:[\s\S]*?}/i,
                                /(?:titles?\s*:|})/gi
                            )).newTitle; }
                        case 2: {
                            return formatTitle(isolateProperty(
                                sourceText,
                                /titles?\s*:[\s\S]*?(?:(?:limit|update)s?\s*:|})/i,
                                /(?:(?:title|update|limit)s?\s*:|})/gi
                            )).newTitle; }
                        default: {
                            return ""; }
                        }
                    }
                    return title;
                })();
                if (release) {
                    // Remove Auto-Cards properties from this incompatible story card
                    safeRemoveProps();
                    card.description = (card.description
                        .replace(/\s*Auto(?:-|\s*)Cards\s*will\s*contextualize\s*these\s*memories\s*:\s*/gi, "")
                        .replaceAll("%@%", "\n\n")
                        .trim()
                    );
                    seen.delete(title);
                    checkRemaining();
                    continue;
                }
                const memoryProperties = "{updates: " + (function() {
                    let updates = null;
                    if (hasDescUpdates) {
                        updates = parseUpdates(false);
                        if (hasEntryUpdates) {
                            repair = true;
                            if (bad()) {
                                updates = parseUpdates(true);
                            }
                        } else if (1 < card.description.match(/updates?\s*:/gi)?.length) {
                            repair = true;
                        }
                    } else if (hasEntryUpdates) {
                        repair = true;
                        updates = parseUpdates(true);
                    }
                    if (bad()) {
                        repair = true;
                        updates = AC.config.defaultCardsDoMemoryUpdates;
                    }
                    function bad() {
                        return (updates === null);
                    }
                    function parseUpdates(fromEntry) {
                        const updatesText = (isolateProperty(
                            (function() {
                                if (fromEntry) {
                                    return card.entry;
                                } else {
                                    return card.description;
                                }
                            })(),
                            /updates?\s*:[\s\S]*?(?:(?:title|limit)s?\s*:|})/i,
                            /(?:(?:title|update|limit)s?\s*:|})/gi
                        ).toLowerCase().replace(/[^a-z]/g, ""));
                        if (Words.trues.includes(updatesText)) {
                            return true;
                        } else if (Words.falses.includes(updatesText)) {
                            return false;
                        } else {
                            return null;
                        }
                    }
                    return updates;
                })() + ", limit: " + (function() {
                    let limit = -1;
                    if (hasDescLimit) {
                        limit = parseLimit(false);
                        if (hasEntryLimit) {
                            repair = true;
                            if (bad()) {
                                limit = parseLimit(true);
                            }
                        } else if (1 < card.description.match(/limits?\s*:/gi)?.length) {
                            repair = true;
                        }
                    } else if (hasEntryLimit) {
                        repair = true;
                        limit = parseLimit(true);
                    }
                    if (bad()) {
                        repair = true;
                        limit = AC.config.defaultMemoryLimit;
                    } else {
                        limit = validateMemoryLimit(limit);
                    }
                    function bad() {
                        return (limit === -1);
                    }
                    function parseLimit(fromEntry) {
                        const limitText = (isolateProperty(
                            (function() {
                                if (fromEntry) {
                                    return card.entry;
                                } else {
                                    return card.description;
                                }
                            })(),
                            /limits?\s*:[\s\S]*?(?:(?:title|update)s?\s*:|})/i,
                            /(?:(?:title|update|limit)s?\s*:|})/gi
                        ).replace(/[^0-9]/g, ""));
                        if ((limitText === "")) {
                            return -1;
                        } else {
                            return parseInt(limitText, 10);
                        }
                    }
                    return limit.toString();
                })() + "}";
                if (!repair && (new RegExp("(?:^|\\n)" + memoryProperties + "(?:\\n|$)")).test(card.description)) {
                    // There are no serious repairs to perform
                    card.entry = cleanSpaces(card.entry);
                    const [notes, memories] = isolateNotesAndMemories(card.description);
                    const pureMemories = cleanSpaces(memories.replace(memoryProperties, "").trim());
                    rejoinDescription(notes, memoryProperties, pureMemories);
                    checkRemaining();
                    continue;
                }
                // Damage was detected, perform an adaptive repair on this auto-card's configurable properties
                card.description = card.description.replaceAll("%@%", "\n\n");
                safeRemoveProps();
                card.entry = limitString(("{title: " + title + "}\n" + card.entry).trimEnd(), 2000);
                const [left, right] = card.description.split("%@%");
                rejoinDescription(left, memoryProperties, right);
                checkRemaining();
                function safeRemoveProps() {
                    if (typeof hasEntryTitle === "string") {
                        card.entry = card.entry.replace(/{[\s\S]*?}/g, "");
                    }
                    card.entry = removeAutoProps(card.entry);
                    const [notes, memories] = isolateNotesAndMemories(card.description);
                    card.description = notes + "%@%" + removeAutoProps(memories);
                    return;
                }
                function rejoinDescription(notes, memoryProperties, memories) {
                    card.description = limitString((notes + (function() {
                        if (notes === "") {
                            return "";
                        } else if (notes.endsWith("Auto-Cards will contextualize these memories:")) {
                            return "\n";
                        } else {
                            return "\n\n";
                        }
                    })() + memoryProperties + (function() {
                        if (memories === "") {
                            return "";
                        } else {
                            return "\n";
                        }
                    })() + memories), 10000);
                    return;
                }
                function isolateProperty(sourceText, propMatcher, propCleaner) {
                    return ((sourceText.match(propMatcher)?.[0] || "")
                        .replace(propCleaner, "")
                        .split(",")[0]
                        .trim()
                    );
                }
                // Observe literal card titles and keys
                function checkRemaining() {
                    const literalTitles = [card.title, ...card.keys.split(",")];
                    for (let i = 0; i < literalTitles.length; i++) {
                        // The pre-format set inclusion check helps avoid superfluous formatTitle calls
                        literalTitles[i] = (literalTitles[i]
                            .replace(/["\.\?!;\(\):\[\]—{}]/g, " ")
                            .trim()
                            .replace(/\s+/g, " ")
                            .replace(/^'\s*/, "")
                            .replace(/\s*'$/, "")
                        );
                        if (seen.has(literalTitles[i])) {
                            continue;
                        }
                        literalTitles[i] = formatTitle(literalTitles[i]).newTitle;
                        if (literalTitles[i] !== "") {
                            seen.add(literalTitles[i]);
                        }
                    }
                    return;
                }
                function denumberName(name) {
                    if (2 < (name.match(/[^\d\s]/g) || []).length) {
                        // Important for identifying LSIv2 auxiliary code cards when banned
                        return name.replace(/\s*\d+$/, "");
                    } else {
                        return name;
                    }
                }
            }
            clearTransientTitles();
            AC.database.titles.used = [...seen];
            return AC.database.titles.used;
        }
        static getBannedTitles() {
            // AC.database.titles.banned is an array, not a set; order matters
            return AC.database.titles.banned;
        }
        static setBannedTitles(newBans, isFinalAssignment) {
            AC.database.titles.banned = [];
            AC.database.titles.pendingBans = [];
            AC.database.titles.pendingUnbans = [];
            for (let i = newBans.length - 1; 0 <= i; i--) {
                banTitle(newBans[i], isFinalAssignment);
            }
            return AC.database.titles.banned;
        }
        static getCard(predicate, getAll) {
            if (getAll) {
                // Return an array of card references which satisfy the given condition
                const collectedCards = [];
                for (const card of storyCards) {
                    if (predicate(card)) {
                        O.s(card);
                        collectedCards.push(card);
                    }
                }
                return collectedCards;
            }
            // Return a reference to the first card which satisfies the given condition
            for (const card of storyCards) {
                if (predicate(card)) {
                    return O.s(card);
                }
            }
            return null;
        }
    }); }
    function validateCooldown(cooldown) {
        return boundInteger(0, cooldown, 9999, 22);
    }
    function validateEntryLimit(entryLimit) {
        return boundInteger(200, entryLimit, 2000, 750);
    }
    function validateMemoryLimit(memoryLimit) {
        return boundInteger(1750, memoryLimit, 9900, 2750);
    }
    function validateMemCompRatio(memCompressRatio) {
        return boundInteger(20, memCompressRatio, 1250, 25);
    }
    function validateMinLookBackDist(minLookBackDist) {
        return boundInteger(2, minLookBackDist, 88, 7);
    }
    function getDefaultConfig() {
        function check(value, fallback = true, type = "boolean") {
            if (typeof value === type) {
                return value;
            } else {
                return fallback;
            }
        }
        return O.s({
            // Is Auto-Cards enabled?
            doAC: check(DEFAULT_DO_AC),
            // Delete all previously generated story cards?
            deleteAllAutoCards: null,
            // Pin the configuration interface story card near the top?
            pinConfigureCard: check(DEFAULT_PIN_CONFIGURE_CARD),
            // Minimum number of turns in between automatic card generation events?
            addCardCooldown: validateCooldown(DEFAULT_CARD_CREATION_COOLDOWN),
            // Use bulleted list mode for newly generated card entries?
            bulletedListMode: check(DEFAULT_USE_BULLETED_LIST_MODE),
            // Maximum allowed length for newly generated story card entries?
            defaultEntryLimit: validateEntryLimit(DEFAULT_GENERATED_ENTRY_LIMIT),
            // Do newly generated cards have memory updates enabled by default?
            defaultCardsDoMemoryUpdates: check(DEFAULT_NEW_CARDS_DO_MEMORY_UPDATES),
            // Default character limit before the card's memory bank is summarized?
            defaultMemoryLimit: validateMemoryLimit(DEFAULT_NEW_CARDS_MEMORY_LIMIT),
            // Approximately how much shorter should recently compressed memories be? (ratio = 10 * old / new)
            memoryCompressionRatio: validateMemCompRatio(DEFAULT_MEMORY_COMPRESSION_RATIO),
            // Ignore all-caps during title candidate detection?
            ignoreAllCapsTitles: check(DEFAULT_IGNORE_ALL_CAPS_TITLES),
            // Should player input actions (Do/Say/Story) be considered for future named entity detection?
            readFromInputs: check(DEFAULT_DETECT_TITLES_FROM_INPUTS),
            // How many (minimum) actions in the past does Auto-Cards look for named entities?
            minimumLookBackDistance: validateMinLookBackDist(DEFAULT_MINIMUM_LOOK_BACK_DISTANCE),
            // Is Live Script Interface v2 enabled?
            LSIv2: (function() {
                if (DEFAULT_DO_LSI_V2 === true) {
                    return true;
                } else {
                    // Intrepret "false" as null, both here and for later config card reads
                    return null;
                }
            })(),
            // Should the debug data card be visible?
            showDebugData: check(DEFAULT_SHOW_DEBUG_DATA, false),
            // How should the AI be prompted when generating new story card entries?
            generationPrompt: check(DEFAULT_CARD_GENERATION_PROMPT, prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Write a brief and coherent informational entry for %{title} following these instructions:",
                "- Write only third-person pure prose information about %{title} using complete sentences with correct punctuation",
                "- Avoid short-term temporary details or appearances, instead focus on plot-significant information",
                "- Prioritize story-relevant details about %{title} first to ensure seamless integration with the previous plot",
                "- Create new information based on the context and story direction",
                "- Mention %{title} in every sentence",
                "- Use semicolons if needed",
                "- Add additional details about %{title} beneath incomplete entries",
                "- Be concise and grounded",
                "- Imitate the story's writing style and infer the reader's preferences",
                "</SYSTEM>",
                "Continue the entry for %{title} below while avoiding repetition:",
                "%{entry}"
            ), "string"),
            // How should the AI be prompted when summarizing memories for a given story card?
            compressionPrompt: check(DEFAULT_CARD_MEMORY_COMPRESSION_PROMPT, prose(
                "-----",
                "",
                "<SYSTEM>",
                "# Stop the story and ignore previous instructions. Summarize and condense the given paragraph into a narrow and focused memory passage while following these guidelines:",
                "- Ensure the passage retains the core meaning and most essential details",
                "- Use the third-person perspective",
                "- Prioritize information-density, accuracy, and completeness",
                "- Remain brief and concise",
                "- Write firmly in the past tense",
                "- The paragraph below pertains to old events from far earlier in the story",
                "- Integrate %{title} naturally within the memory; however, only write about the events as they occurred",
                "- Only reference information present inside the paragraph itself, be specific",
                "</SYSTEM>",
                "Write a summarized old memory passage for %{title} based only on the following paragraph:",
                "\"\"\"",
                "%{memory}",
                "\"\"\"",
                "Summarize below:"
            ), "string"),
            // All cards constructed by AC will inherit this type by default
            defaultCardType: check(DEFAULT_CARD_TYPE, "class", "string")
        });
    }
    function getDefaultConfigBans() {
        if (typeof DEFAULT_BANNED_TITLES_LIST === "string") {
            return uniqueTitlesArray(DEFAULT_BANNED_TITLES_LIST.split(","));
        } else {
            return [
                "North", "East", "South", "West", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ];
        }
    }
    function uniqueTitlesArray(titles) {
        const existingTitles = new Set();
        return (titles
            .map(title => title.trim().replace(/\s+/g, " "))
            .filter(title => {
                if (title === "") {
                    return false;
                }
                const lowerTitle = title.toLowerCase();
                if (existingTitles.has(lowerTitle)) {
                    return false;
                } else {
                    existingTitles.add(lowerTitle);
                    return true;
                }
            })
        );
    }
    function boundInteger(lowerBound, value, upperBound, fallback) {
        if (!Number.isInteger(value)) {
            if (!Number.isInteger(fallback)) {
                throw new Error("Invalid arguments: value and fallback are not integers");
            }
            value = fallback;
        }
        if (Number.isInteger(lowerBound) && (value < lowerBound)) {
            if (Number.isInteger(upperBound) && (upperBound < lowerBound)) {
                throw new Error("Invalid arguments: The inequality (lowerBound <= upperBound) must be satisfied");
            }
            return lowerBound;
        } else if (Number.isInteger(upperBound) && (upperBound < value)) {
            return upperBound;
        } else {
            return value;
        }
    }
    function limitString(str, lengthLimit) {
        if (lengthLimit < str.length) {
            return str.slice(0, lengthLimit).trim();
        } else {
            return str;
        }
    }
    function cleanSpaces(unclean) {
        return (unclean
            .replace(/\s*\n\s*/g, "\n")
            .replace(/\t/g, " ")
            .replace(/  +/g, " ")
        );
    }
    function isolateNotesAndMemories(str) {
        const bisector = str.search(/\s*(?:{|(?:title|update|limit)s?\s*:)\s*/i);
        if (bisector === -1) {
            return [str, ""];
        } else {
            return [str.slice(0, bisector), str.slice(bisector)];
        }
    }
    function removeAutoProps(str) {
        return cleanSpaces(str
            .replace(/\s*{([\s\S]*?)}\s*/g, (bracedMatch, enclosedProperties) => {
                if (enclosedProperties.trim().length < 150) {
                    return "\n";
                } else {
                    return bracedMatch;
                }
            })
            .replace((
                /\s*(?:{|(?:title|update|limit)s?\s*:)(?:[\s\S]{0,150}?)(?=(?:title|update|limit)s?\s*:|})\s*/gi
            ), "\n")
            .replace(/\s*(?:{|(?:title|update|limit)s?\s*:|})\s*/gi, "\n")
            .trim()
        );
    }
    function insertTitle(prompt, title) {
        return prompt.replace((
            /(?:[%\$]+\s*|[%\$]*){+\s*(?:titles?|names?|characters?|class(?:es)?|races?|locations?|factions?)\s*}+/gi
        ), title);
    }
    function prose(...args) {
        return args.join("\n");
    }
    function buildKeys(keys, key) {
        key = key.trim().replace(/\s+/g, " ");
        const keyset = [];
        if (key === "") {
            return keys;
        } else if (keys.trim() !== "") {
            keyset.push(...keys.split(","));
            const lowerKey = key.toLowerCase();
            for (let i = keyset.length - 1; 0 <= i; i--) {
                const preKey = keyset[i].trim().replace(/\s+/g, " ").toLowerCase();
                if ((preKey === "") || preKey.includes(lowerKey)) {
                    keyset.splice(i, 1);
                }
            }
        }
        if (key.length < 6) {
            keyset.push(...[
                " " + key + " ", " " + key + "'", "\"" + key + " ", " " + key + ".", " " + key + "?", " " + key + "!", " " + key + ";", "'" + key + " ", "(" + key + " ", " " + key + ")", " " + key + ":", " " + key + "\"", "[" + key + " ", " " + key + "]", "—" + key + " ", " " + key + "—", "{" + key + " ", " " + key + "}"
            ]);
        } else if (key.length < 9) {
            keyset.push(...[
                key + " ", " " + key, key + "'", "\"" + key, key + ".", key + "?", key + "!", key + ";", "'" + key, "(" + key, key + ")", key + ":", key + "\"", "[" + key, key + "]", "—" + key, key + "—", "{" + key, key + "}"
            ]);
        } else {
            keyset.push(key);
        }
        keys = keyset[0] || key;
        let i = 1;
        while ((i < keyset.length) && ((keys.length + 1 + keyset[i].length) < 101)) {
            keys += "," + keyset[i];
            i++;
        }
        return keys;
    }
    // Returns the template-specified singleton card (or secondary varient) after:
    // 1) Erasing all inferior duplicates
    // 2) Repairing damaged titles and keys
    // 3) Constructing a new singleton card if it doesn't exist
    function getSingletonCard(allowConstruction, templateCard, secondaryCard) {
        let singletonCard = null;
        const excessCards = [];
        for (const card of storyCards) {
            O.s(card);
            if (singletonCard === null) {
                if ((card.title === templateCard.title) || (card.keys === templateCard.keys)) {
                    // The first potentially valid singleton card candidate to be found
                    singletonCard = card;
                }
            } else if (card.title === templateCard.title) {
                if (card.keys === templateCard.keys) {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                } else {
                    eraseInferiorDuplicate();
                }
            } else if (card.keys === templateCard.keys) {
                eraseInferiorDuplicate();
            }
            function eraseInferiorDuplicate() {
                if ((singletonCard.title === templateCard.title) && (singletonCard.keys === templateCard.keys)) {
                    excessCards.push(card);
                } else {
                    excessCards.push(singletonCard);
                    singletonCard = card;
                }
                return;
            }
        }
        if (singletonCard === null) {
            if (secondaryCard) {
                // Fallback to a secondary card template
                singletonCard = getSingletonCard(false, secondaryCard);
            }
            // No singleton card candidate exists
            if (allowConstruction && (singletonCard === null)) {
                // Construct a new singleton card from the given template
                singletonCard = constructCard(templateCard);
            }
        } else {
            if (singletonCard.title !== templateCard.title) {
                // Repair any damage to the singleton card's title
                singletonCard.title = templateCard.title;
            } else if (singletonCard.keys !== templateCard.keys) {
                // Repair any damage to the singleton card's keys
                singletonCard.keys = templateCard.keys;
            }
            for (const card of excessCards) {
                // Erase all excess singleton card candidates
                eraseCard(card);
            }
            if (secondaryCard) {
                // A secondary card match cannot be allowed to persist
                eraseCard(getSingletonCard(false, secondaryCard));
            }
        }
        return singletonCard;
    }
    // Erases the given story card
    function eraseCard(badCard) {
        if (badCard === null) {
            return false;
        }
        badCard.title = "%@%";
        for (const [index, card] of storyCards.entries()) {
            if (card.title === "%@%") {
                removeStoryCard(index);
                return true;
            }
        }
        return false;
    }
    // Constructs a new story card from a standardized story card template object
    // {type: "", title: "", keys: "", entry: "", description: ""}
    // Returns a reference to the newly constructed card
    function constructCard(templateCard, insertionIndex = 0) {
        addStoryCard("%@%");
        for (const [index, card] of storyCards.entries()) {
            if (card.title !== "%@%") {
                continue;
            }
            card.type = templateCard.type;
            card.title = templateCard.title;
            card.keys = templateCard.keys;
            card.entry = templateCard.entry;
            card.description = templateCard.description;
            if (index !== insertionIndex) {
                // Remove from the current position and reinsert at the desired index
                storyCards.splice(index, 1);
                storyCards.splice(insertionIndex, 0, card);
            }
            return O.s(card);
        }
        return {};
    }
    function newCardIndex() {
        return +AC.config.pinConfigureCard;
    }
    function getIntendedCard(targetCard) {
        Internal.getUsedTitles(true);
        const titleKey = targetCard.trim().replace(/\s+/g, " ").toLowerCase();
        const autoCard = Internal.getCard(card => (card.entry
            .toLowerCase()
            .startsWith("{title: " + titleKey + "}")
        ));
        if (autoCard !== null) {
            return [autoCard, true, titleKey];
        }
        return [Internal.getCard(card => ((card.title
            .replace(/\s+/g, " ")
            .toLowerCase()
        ) === titleKey)), false, titleKey];
    }
    function doPlayerCommands(input) {
        let result = "";
        for (const command of (
            (function() {
                if (/^\n> [\s\S]*? says? "[\s\S]*?"\n$/.test(input)) {
                    return input.replace(/\s*"\n$/, "");
                } else {
                    return input.trimEnd();
                }
            })().split(/(?=\/\s*A\s*C)/i)
        )) {
            const prefixPattern = /^\/\s*A\s*C/i;
            if (!prefixPattern.test(command)) {
                continue;
            }
            const [requestTitle, requestDetails, requestEntry] = (command
                .replace(/(?:{\s*)|(?:\s*})/g, "")
                .replace(prefixPattern, "")
                .replace(/(?:^\s*\/*\s*)|(?:\s*\/*\s*$)/g, "")
                .split("/")
                .map(requestArg => requestArg.trim())
                .filter(requestArg => (requestArg !== ""))
            );
            if (!requestTitle) {
                // Request with no args
                AC.generation.cooldown = 0;
                result += "/AC -> Success!\n\n";
                logEvent("/AC");
            } else {
                const request = {title: requestTitle.replace(/\s*[\.\?!:]+$/, "")};
                const redo = (function() {
                    const redoPattern = /^(?:redo|retry|rewrite|remake)[\s\.\?!:,;"'—\)\]]+\s*/i;
                    if (redoPattern.test(request.title)) {
                        request.title = request.title.replace(redoPattern, "");
                        if (/^(?:all|every)(?:\s|\.|\?|!|:|,|;|"|'|—|\)|\]|$)/i.test(request.title)) {
                            return [];
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                })();
                if (Array.isArray(redo)) {
                    // Redo all auto cards
                    Internal.getUsedTitles(true);
                    const titleMatchPattern = /^{title: ([\s\S]*?)}/;
                    redo.push(...Internal.getCard(card => (
                        titleMatchPattern.test(card.entry)
                        && /{updates: (?:true|false), limit: \d+}/.test(card.description)
                    ), true));
                    let count = 0;
                    for (const card of redo) {
                        const titleMatch = card.entry.match(titleMatchPattern);  
                        if (titleMatch && Internal.redoCard(O.f({title: titleMatch[1]}), true, "")) {
                            count++;
                        }
                    }
                    const parsed = "/AC redo all";
                    result += parsed + " -> ";
                    if (count === 0) {
                        result += "There were no valid auto-cards to redo";
                    } else {
                        result += "Success!";
                        if (1 < count) {
                            result += " Proceed to redo " + count + " cards";
                        }
                    }
                    logEvent(parsed);
                } else if (!requestDetails) {
                    // Request with only title
                    submitRequest("");
                } else if (!requestEntry || redo) {
                    // Request with title and details
                    request.entryPromptDetails = requestDetails;
                    submitRequest(" / {" + requestDetails + "}");
                } else {
                    // Request with title, details, and entry
                    request.entryPromptDetails = requestDetails;
                    request.entryStart = requestEntry;
                    submitRequest(" / {" + requestDetails + "} / {" + requestEntry + "}");
                }
                result += "\n\n";
                function submitRequest(extra) {
                    O.f(request);
                    const [type, success] = (function() {
                        if (redo) {
                            return [" redo", Internal.redoCard(request, true, "")];
                        } else {
                            Internal.getUsedTitles(true);
                            return ["", Internal.generateCard(request)];
                        }
                    })();
                    const left = "/AC" + type + " {";
                    const right = "}" + extra;
                    if (success) {
                        const parsed = left + AC.generation.pending[AC.generation.pending.length - 1].title + right;
                        result += parsed + " -> Success!";
                        logEvent(parsed);
                    } else {
                        const parsed = left + request.title + right;
                        result += parsed + " -> \"" + request.title + "\" is invalid or unavailable";
                        logEvent(parsed);
                    }
                    return;
                }
            }
            if (isPendingGeneration() || isAwaitingGeneration() || isPendingCompression()) {
                if (AC.config.doAC) {
                    AC.signal.outputReplacement = "";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                }
            } else if (AC.generation.cooldown === 0) {
                if (0 < AC.database.titles.candidates.length) {
                    if (AC.config.doAC) {
                        AC.signal.outputReplacement = "";
                    } else {
                        AC.signal.forceToggle = true;
                        AC.signal.outputReplacement = ">>> please select \"continue\" (0%) <<<";
                    }
                } else if (AC.config.doAC) {
                    result = result.trimEnd() + "\n";
                    AC.signal.outputReplacement = "\n";
                } else {
                    AC.signal.forceToggle = true;
                    AC.signal.outputReplacement = ">>> Auto-Cards has been enabled! <<<";
                }
            } else {
                result = result.trimEnd() + "\n";
                AC.signal.outputReplacement = "\n";
            }
        }
        return getPrecedingNewlines() + result;
    }
    function advanceChronometer() {
        const currentTurn = getTurn();
        if (Math.abs(history.length - currentTurn) < 2) {
            // The two measures are within ±1, thus history hasn't been truncated yet
            AC.chronometer.step = !(history.length < currentTurn);
        } else {
            // history has been truncated, fallback to a (slightly) worse step detection technique
            AC.chronometer.step = (AC.chronometer.turn < currentTurn);
        }
        AC.chronometer.turn = currentTurn;
        return;
    }
    function concludeEmergency() {
        promoteAmnesia();
        endTurn();
        AC.message.pending = [];
        AC.message.previous = getStateMessage();
        return;
    }
    function concludeOutputBlock(templateCard) {
        if (AC.config.deleteAllAutoCards !== null) {
            // A config-initiated event to delete all previously generated story cards is in progress
            if (AC.config.deleteAllAutoCards) {
                // Request in-game confirmation from the player before proceeding
                AC.config.deleteAllAutoCards = false;
                CODOMAIN.initialize(getPrecedingNewlines() + ">>> please submit the message \"CONFIRM DELETE\" using a Do, Say, or Story action to permanently delete all previously generated story cards <<<\n\n");
            } else {
                // Check for player confirmation
                const previousAction = readPastAction(0);
                if (isDoSayStory(previousAction.type) && /CONFIRM\s*DELETE/i.test(previousAction.text)) {
                    let successMessage = "Confirmation Success: ";
                    const numCardsErased = Internal.eraseAllAutoCards();
                    if (numCardsErased === 0) {
                        successMessage += "However, there were no previously generated story cards to delete!";
                    } else {
                        successMessage += numCardsErased + " generated story card";
                        if (numCardsErased === 1) {
                            successMessage += " was";
                        } else {
                            successMessage += "s were";
                        }
                        successMessage += " deleted";
                    }
                    notify(successMessage);
                } else {
                    notify("Confirmation Failure: No story cards were deleted");
                }
                AC.config.deleteAllAutoCards = null;
                CODOMAIN.initialize("\n");
            }
        } else if (AC.signal.outputReplacement !== "") {
            const output = AC.signal.outputReplacement.trim();
            if (output === "") {
                CODOMAIN.initialize("\n");
            } else {
                CODOMAIN.initialize(getPrecedingNewlines() + output + "\n\n");
            }
        }
        if (templateCard) {
            // Auto-Cards was enabled or disabled during the previous onContext hook
            // Construct the replacement control card onOutput
            banTitle(templateCard.title);
            getSingletonCard(true, templateCard);
            AC.signal.swapControlCards = false;
        }
        endTurn();
        if (AC.config.LSIv2 === null) {
            postMessages();
        }
        return;
    }
    function endTurn() {
        AC.database.titles.used = [];
        AC.signal.outputReplacement = "";
        [AC.database.titles.pendingBans, AC.database.titles.pendingUnbans].map(pending => decrementAll(pending));
        if (0 < AC.signal.overrideBans) {
            AC.signal.overrideBans--;
        }
        function decrementAll(pendingArray) {
            if (pendingArray.length === 0) {
                return;
            }
            for (let i = pendingArray.length - 1; 0 <= i; i--) {
                if (0 < pendingArray[i][1]) {
                    pendingArray[i][1]--;
                } else {
                    pendingArray.splice(i, 1);
                }
            }
            return;
        }
        return;
    }
    // Example usage: notify("Message text goes here");
    function notify(message) {
        if (typeof message === "string") {
            AC.message.pending.push(message);
            logEvent(message);
        } else if (Array.isArray(message)) {
            message.forEach(element => notify(element));
        } else if (message instanceof Set) {
            notify([...message]);
        } else {
            notify(message.toString());
        }
        return;
    }
    function logEvent(message, uncounted) {
        if (uncounted) {
            log("Auto-Cards event: " + message);
        } else {
            log("Auto-Cards event #" + (function() {
                try {
                    AC.message.event++;
                    return AC.message.event;
                } catch {
                    return 0;
                }
            })() + ": " + message.replace(/"/g, "'"));
        }
        return;
    }
    // Provide the story card object which you wish to log info within as the first argument
    // All remaining arguments represent anything you wish to log
    function logToCard(logCard, ...args) {
        logEvent(args.map(arg => {
            if ((typeof arg === "object") && (arg !== null)) {
                return JSON.stringify(arg);
            } else {
                return String(arg);
            }
        }).join(", "), true);
        if (logCard === null) {
            return;
        }
        let desc = logCard.description.trim();
        const turnDelimiter = Words.delimiter + "\nAction #" + getTurn() + ":\n";
        let header = turnDelimiter;
        if (!desc.startsWith(turnDelimiter)) {
            desc = turnDelimiter + desc;
        }
        const scopesTable = [
            ["input", "Input Modifier"],
            ["context", "Context Modifier"],
            ["output", "Output Modifier"],
            [null, "Shared Library"],
            [undefined, "External API"],
            [Symbol("default"), "Unknown Scope"]
        ];
        const callingScope = (function() {
            const pair = scopesTable.find(([condition]) => (condition === HOOK));
            if (pair) {
                return pair[1];
            } else {
                return scopesTable[scopesTable.length - 1][1];
            }
        })();
        const hookDelimiterLeft = callingScope + " @ ";
        if (desc.startsWith(turnDelimiter + hookDelimiterLeft)) {
            const hookDelimiterOld = desc.match(new RegExp((
                "^" + turnDelimiter + "(" + hookDelimiterLeft + "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}Z:\n)"
            ).replaceAll("\n", "\\n")));
            if (hookDelimiterOld) {
                header += hookDelimiterOld[1];
            } else {
                const hookDelimiter = getNewHookDelimiter();
                desc = desc.replace(hookDelimiterLeft, hookDelimiter);
                header += hookDelimiter;
            }
        } else {
            if ((new RegExp("^" + turnDelimiter.replaceAll("\n", "\\n") + "(" + (scopesTable
                .map(pair => pair[1])
                .filter(scope => (scope !== callingScope))
                .join("|")
            ) + ") @ ")).test(desc)) {
                desc = desc.replace(turnDelimiter, turnDelimiter + "—————————\n");
            }
            const hookDelimiter = getNewHookDelimiter();
            desc = desc.replace(turnDelimiter, turnDelimiter + hookDelimiter);
            header += hookDelimiter;
        }
        const logDelimiter = (function() {
            let logDelimiter = "Log #";
            if (desc.startsWith(header + logDelimiter)) {
                desc = desc.replace(header, header + "———\n");
                const logCounter = desc.match(/Log #(\d+)/);
                if (logCounter) {
                    logDelimiter += (parseInt(logCounter[1], 10) + 1).toString();
                }
            } else {
                logDelimiter += "0";
            }
            return logDelimiter + ": ";
        })();
        logCard.description = limitString(desc.replace(header, header + logDelimiter + args.map(arg => {
            if ((typeof arg === "object") && (arg !== null)) {
                return stringifyObject(arg);
            } else {
                return String(arg);
            }
        }).join(",\n") + "\n").trim(), 999999);
        // The upper limit is actually closer to 3985621, but I think 1 million is reasonable enough as-is
        function getNewHookDelimiter() {
            return hookDelimiterLeft + (new Date().toISOString()) + ":\n";
        }
        return;
    }
    // Makes nested objects not look like cancer within interface cards
    function stringifyObject(obj) {
        const seen = new WeakSet();
        // Each indentation is 4 spaces
        return JSON.stringify(obj, (_key, value) => {
            if ((typeof value === "object") && (value !== null)) {
                if (seen.has(value)) {
                    return "[Circular]";
                }
                seen.add(value);
            }
            switch(typeof value) {
            case "function": {
                return "[Function]"; }
            case "undefined": {
                return "[Undefined]"; }
            case "symbol": {
                return "[Symbol]"; }
            default: {
                return value; }
            }
        }, 4);
    }
    // Implement state.message toasts without interfering with the operation of other possible scripts
    function postMessages() {
        const preMessage = getStateMessage();
        if ((preMessage === AC.message.previous) && (AC.message.pending.length !== 0)) {
            // No other scripts are attempting to update state.message during this turn
            // One or more pending Auto-Cards messages exist
            if (!AC.message.suppress) {
                // Message suppression is off
                let newMessage = "Auto-Cards:\n";
                if (AC.message.pending.length === 1) {
                    newMessage += AC.message.pending[0];
                } else {
                    newMessage += AC.message.pending.map(
                        (messageLine, index) => ("#" + (index + 1) + ": " + messageLine)
                    ).join("\n");
                }
                if (preMessage === newMessage) {
                    // Introduce a minor variation to facilitate repetition of the previous message toast
                    newMessage = newMessage.replace("Auto-Cards:\n", "Auto-Cards: \n");
                }
                state.message = newMessage;
            }
            // Clear the pending messages queue after posting or suppressing messages
            AC.message.pending = [];
        }
        AC.message.previous = getStateMessage();
        return;
    }
    function getStateMessage() {
        return state.message ?? "";
    }
    function getPrecedingNewlines() {
        const previousAction = readPastAction(0);
        if (isDoSay(previousAction.type)) {
            return "";
        } else if (previousAction.text.endsWith("\n")) {
            if (previousAction.text.endsWith("\n\n")) {
                return "";
            } else {
                return "\n";
            }
        } else {
            return "\n\n";
        }
    }
    // Call with lookBack 0 to read the most recent action in history (or n many actions back)
    function readPastAction(lookBack) {
        const action = (function() {
            if (Array.isArray(history)) {
                return (history[(function() {
                    const index = history.length - 1 - Math.abs(lookBack);
                    if (index < 0) {
                        return 0;
                    } else {
                        return index;
                    }
                })()]);
            } else {
                return O.f({});
            }
        })();
        return O.f({
            text: action?.text ?? (action?.rawText ?? ""),
            type: action?.type ?? "unknown"
        });
    }
    // Forget ongoing card generation/compression after passing or postponing completion over many consecutive turns
    // Also decrement AC.chronometer.postpone regardless of retries or erases
    function promoteAmnesia() {
        // Decrement AC.chronometer.postpone in all cases
        if (0 < AC.chronometer.postpone) {
            AC.chronometer.postpone--;
        }
        if (!AC.chronometer.step) {
            // Skip known retry/erase turns
            return;
        }
        if (AC.chronometer.amnesia++ < boundInteger(16, (2 * AC.config.addCardCooldown), 64)) {
            return;
        }
        AC.generation.cooldown = validateCooldown(underQuarterInteger(AC.config.addCardCooldown));
        forgetStuff();
        AC.chronometer.amnesia = 0;
        return;
    }
    function forgetStuff() {
        AC.generation.completed = 0;
        AC.generation.permitted = 34;
        AC.generation.workpiece = O.f({});
        // AC.generation.pending is not forgotten
        resetCompressionProperties();
        return;
    }
    function resetCompressionProperties() {
        AC.compression.completed = 0;
        AC.compression.titleKey = "";
        AC.compression.vanityTitle = "";
        AC.compression.responseEstimate = 1400;
        AC.compression.lastConstructIndex = -1;
        AC.compression.oldMemoryBank = [];
        AC.compression.newMemoryBank = [];
        return;
    }
    function underQuarterInteger(someNumber) {
        return Math.floor(someNumber / 4);
    }
    function getTurn() {
        if (Number.isInteger(info?.actionCount)) {
            // "But Leah, surely info.actionCount will never be negative?"
            // You have no idea what nightmares I've seen...
            return Math.abs(info.actionCount);
        } else {
            return 0;
        }
    }
    // Constructs a JSON representation of various properties/settings pulled from raw text
    // Used to parse the "Configure Auto-Cards" and "Edit to enable Auto-Cards" control card entries
    function extractSettings(settingsText) {
        const settings = {};
        // Lowercase everything
        // Remove all non-alphanumeric characters (aside from ":" and ">")
        // Split into an array of strings delimited by the ">" character
        const settingLines = settingsText.toLowerCase().replace(/[^a-z0-9:>]+/g, "").split(">");
        for (const settingLine of settingLines) {
            // Each setting line is preceded by ">" and bisected by ":"
            const settingKeyValue = settingLine.split(":");
            if ((settingKeyValue.length !== 2) || settings.hasOwnProperty(settingKeyValue[0])) {
                // The bisection failed or this setting line's key already exists
                continue;
            }
            // Parse boolean and integer setting values
            if (Words.falses.includes(settingKeyValue[1])) {
                // This setting line's value is false
                settings[settingKeyValue[0]] = false;
            } else if (Words.trues.includes(settingKeyValue[1])) {
                // This setting line's value is true
                settings[settingKeyValue[0]] = true;
            } else if (/^\d+$/.test(settingKeyValue[1])) {
                // This setting line's value is an integer
                // Negative integers are parsed as being positive (because "-" characters were removed)
                settings[settingKeyValue[0]] = parseInt(settingKeyValue[1], 10);
            }
        }
        // Return the settings object for later analysis
        return settings;
    }
    // Ensure the given singleton card is pinned near the top of the player's list of story cards
    function pinAndSortCards(pinnedCard) {
        if (!storyCards || (storyCards.length < 2)) {
            return;
        }
        storyCards.sort((cardA, cardB) => {
            return readDate(cardB) - readDate(cardA);
        });
        if (!AC.config.pinConfigureCard) {
            return;
        }
        const index = storyCards.indexOf(pinnedCard);
        if (0 < index) {
            storyCards.splice(index, 1);
            storyCards.unshift(pinnedCard);
        }
        function readDate(card) {
            if (card && card.updatedAt) {
                const timestamp = Date.parse(card.updatedAt);
                if (!isNaN(timestamp)) {
                    return timestamp;
                }
            }
            return 0;
        }
        return;
    }
    function see(arr) {
        return String.fromCharCode(...arr.map(n => Math.sqrt(n / 33)));
    }
    function formatTitle(title) {
        title = title.trim();
        const failureCase = O.f({newTitle: "", newKey: ""});
        if (short()) {
            // This is an abundantly called function, return as early as possible to ensure superior performance
            return failureCase;
        }
        title = (title
            // Begone!
            .replace(/[–。？！´“”؟،«»¿¡„“…§，、\*_~><\(\)\[\]{}#"`:!—;\.\?,\s\\]/g, " ")
            .replace(/[‘’]/g, "'").replace(/\s+'/g, " ")
            // Remove the words "I", "I'm", "I'd", "I'll", and "I've"
            .replace(/(?<=^|\s)(?:I|I'm|I'd|I'll|I've)(?=\s|$)/gi, "")
            // Remove "'s" only if not followed by a letter
            .replace(/'s(?![a-zA-Z])/g, "")
            // Replace "s'" with "s" only if preceded but not followed by a letter
            .replace(/(?<=[a-zA-Z])s'(?![a-zA-Z])/g, "s")
            // Remove apostrophes not between letters (preserve contractions like "don't")
            .replace(/(?<![a-zA-Z])'(?![a-zA-Z])/g, "")
            // Eliminate fake em dashes and terminal/leading dashes
            .replace(/\s-\s/g, " ")
            // Condense consecutive whitespace
            .trim().replace(/\s+/g, " ")
            // Remove a leading or trailing bullet
            .replace(/^-+\s*/, "").replace(/\s*-+$/, "")
        );
        if (short()) {
            return failureCase;
        }
        // Special-cased words
        const minorWordsJoin = Words.minor.join("|");
        const leadingMinorWordsKiller = new RegExp("^(?:" + minorWordsJoin + ")\\s", "i");
        const trailingMinorWordsKiller = new RegExp("\\s(?:" + minorWordsJoin + ")$", "i");
        // Ensure the title is not bounded by any outer minor words
        title = enforceBoundaryCondition(title);
        if (short()) {
            return failureCase;
        }
        // Ensure interior minor words are lowercase and excise all interior honorifics/abbreviations
        const honorAbbrevsKiller = new RegExp("(?:^|\\s|-|\\/)(?:" + (
            [...Words.honorifics, ...Words.abbreviations]
        ).map(word => word.replace(".", "")).join("|") + ")(?=\\s|-|\\/|$)", "gi");
        title = (title
            // Capitalize the first letter of each word
            .replace(/(?<=^|\s|-|\/)(?:\p{L})/gu, word => word.toUpperCase())
            // Lowercase minor words properly
            .replace(/(?<=^|\s|-|\/)(?:\p{L}+)(?=\s|-|\/|$)/gu, word => {
                const lowerWord = word.toLowerCase();
                if (Words.minor.includes(lowerWord)) {
                    return lowerWord;
                } else {
                    return word;
                }
            })
            // Remove interior honorifics/abbreviations
            .replace(honorAbbrevsKiller, "")
            .trim()
        );
        if (short()) {
            return failureCase;
        }
        let titleWords = title.split(" ");
        while ((2 < title.length) && (98 < title.length) && (1 < titleWords.length)) {
            titleWords.pop();
            title = titleWords.join(" ").trim();
            const unboundedLength = title.length;
            title = enforceBoundaryCondition(title);
            if (unboundedLength !== title.length) {
                titleWords = title.split(" ");
            }
        }
        if (isUsedOrBanned(title) || isNamed(title)) {
            return failureCase;
        }
        // Procedurally generated story card trigger keywords exclude certain words and patterns which are otherwise permitted in titles
        let key = title;
        const peerage = new Set(Words.peerage);
        if (titleWords.some(word => ((word === "the") || peerage.has(word.toLowerCase())))) {
            if (titleWords.length < 2) {
                return failureCase;
            }
            key = enforceBoundaryCondition(
                titleWords.filter(word => !peerage.has(word.toLowerCase())).join(" ")
            );
            if (key.includes(" the ")) {
                key = enforceBoundaryCondition(key.split(" the ")[0]);
            }
            if (isUsedOrBanned(key)) {
                return failureCase;
            }
        }
        function short() {
            return (title.length < 3);
        }
        function enforceBoundaryCondition(str) {
            while (leadingMinorWordsKiller.test(str)) {
                str = str.replace(/^\S+\s+/, "");
            }
            while (trailingMinorWordsKiller.test(str)) {
                str = str.replace(/\s+\S+$/, "");
            }
            return str;
        }
        return O.f({newTitle: title, newKey: key});
    }
    // I really hate english grammar
    function checkPlurals(title, predicate) {
        function check(t) { return ((t.length < 3) || (100 < t.length) || predicate(t)); }
        const t = title.toLowerCase();
        if (check(t)) { return true; }
        // s>p : singular -> plural : p>s: plural -> singular
        switch(t[t.length - 1]) {
        // p>s : s -> _ : Birds -> Bird
        case "s": if (check(t.slice(0, -1))) { return true; }
        case "x":
        // s>p : s, x, z -> ses, xes, zes : Mantis -> Mantises
        case "z": if (check(t + "es")) { return true; }
            break;
        // s>p : o -> oes, os : Gecko -> Geckoes, Geckos
        case "o": if (check(t + "es") || check(t + "s")) { return true; }
            break;
        // p>s : i -> us : Cacti -> Cactus
        case "i": if (check(t.slice(0, -1) + "us")) { return true; }
        // s>p : i, y -> ies : Kitty -> Kitties
        case "y": if (check(t.slice(0, -1) + "ies")) { return true; }
            break;
        // s>p : f -> ves : Wolf -> Wolves
        case "f": if (check(t.slice(0, -1) + "ves")) { return true; }
        // s>p : !(s, x, z, i, y) -> +s : Turtle -> Turtles
        default: if (check(t + "s")) { return true; }
            break;
        } switch(t.slice(-2)) {
        // p>s : es -> _ : Foxes -> Fox
        case "es": if (check(t.slice(0, -2))) { return true; } else if (
            (t.endsWith("ies") && (
                // p>s : ies -> y : Bunnies -> Bunny
                check(t.slice(0, -3) + "y")
                // p>s : ies -> i : Ravies -> Ravi
                || check(t.slice(0, -2))
            // p>s : es -> is : Crises -> Crisis
            )) || check(t.slice(0, -2) + "is")) { return true; }
            break;
        // s>p : us -> i : Cactus -> Cacti
        case "us": if (check(t.slice(0, -2) + "i")) { return true; }
            break;
        // s>p : is -> es : Thesis -> Theses
        case "is": if (check(t.slice(0, -2) + "es")) { return true; }
            break;
        // s>p : fe -> ves : Knife -> Knives
        case "fe": if (check(t.slice(0, -2) + "ves")) { return true; }
            break;
        case "sh":
        // s>p : sh, ch -> shes, ches : Fish -> Fishes
        case "ch": if (check(t + "es")) { return true; }
            break;
        } return false;
    }
    function isUsedOrBanned(title) {
        function isUsed(lowerTitle) {
            if (used.size === 0) {
                const usedTitles = Internal.getUsedTitles();
                for (let i = 0; i < usedTitles.length; i++) {
                    used.add(usedTitles[i].toLowerCase());
                }
                if (used.size === 0) {
                    // Add a placeholder so compute isn't wasted on additional checks during this hook
                    used.add("%@%");
                }
            }
            return used.has(lowerTitle);
        }
        return checkPlurals(title, t => (isUsed(t) || isBanned(t)));
    }
    function isBanned(lowerTitle, getUsedIsExternal) {
        if (bans.size === 0) {
            // In order to save space, implicit bans aren't listed within the UI
            const controlVariants = getControlVariants();
            const dataVariants = getDataVariants();
            const bansToAdd = [...lowArr([
                ...Internal.getBannedTitles(),
                controlVariants.enable.title.replace("\n", ""),
                controlVariants.enable.keys,
                controlVariants.configure.title.replace("\n", ""),
                controlVariants.configure.keys,
                dataVariants.debug.title,
                dataVariants.debug.keys,
                dataVariants.critical.title,
                dataVariants.critical.keys,
                ...Object.values(Words.reserved)
            ]), ...(function() {
                if (shouldProceed() || getUsedIsExternal) {
                    // These proper nouns are way too common to waste card generations on; they already exist within the AI training data so this would be pointless
                    return [...Words.entities, ...Words.undesirables.map(undesirable => see(undesirable))];
                } else {
                    return [];
                }
            })()];
            for (let i = 0; i < bansToAdd.length; i++) {
                bans.add(bansToAdd[i]);
            }
        }
        return bans.has(lowerTitle);
    }
    function isNamed(title, returnSurname) {
        const peerage = new Set(Words.peerage);
        const minorWords = new Set(Words.minor);
        if ((forenames.size === 0) || (surnames.size === 0)) {
            const usedTitles = Internal.getUsedTitles();
            for (let i = 0; i < usedTitles.length; i++) {
                const usedTitleWords = divideTitle(usedTitles[i]);
                if (
                    (usedTitleWords.length === 2)
                    && (2 < usedTitleWords[0].length)
                    && (2 < usedTitleWords[1].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                    surnames.add(usedTitleWords[1]);
                } else if (
                    (usedTitleWords.length === 1)
                    && (2 < usedTitleWords[0].length)
                ) {
                    forenames.add(usedTitleWords[0]);
                }
            }
            if (forenames.size === 0) {
                forenames.add("%@%");
            }
            if (surnames.size === 0) {
                surnames.add("%@%");
            }
        }
        const titleWords = divideTitle(title);
        if (
            returnSurname
            && (titleWords.length === 2)
            && (3 < titleWords[0].length)
            && (3 < titleWords[1].length)
            && forenames.has(titleWords[0])
            && surnames.has(titleWords[1])
        ) {
            return (title
                .split(" ")
                .find(casedTitleWord => (casedTitleWord.toLowerCase() === titleWords[1]))
            );
        } else if (
            (titleWords.length === 2)
            && (2 < titleWords[0].length)
            && (2 < titleWords[1].length)
            && forenames.has(titleWords[0])
        ) {         
            return true;
        } else if (
            (titleWords.length === 1)
            && (2 < titleWords[0].length)
            && (forenames.has(titleWords[0]) || surnames.has(titleWords[0]))
        ) {
            return true;
        }
        function divideTitle(undividedTitle) {
            const titleWords = undividedTitle.toLowerCase().split(" ");
            if (titleWords.some(word => minorWords.has(word))) {
                return [];
            } else {
                return titleWords.filter(word => !peerage.has(word));
            }
        }
        return false;
    }
    function shouldProceed() {
        return (AC.config.doAC && !AC.signal.emergencyHalt && (AC.chronometer.postpone < 1));
    }
    function isDoSayStory(type) {
        return (isDoSay(type) || (type === "story"));
    }
    function isDoSay(type) {
        return ((type === "do") || (type === "say"));
    }
    function permitOutput() {
        return ((AC.config.deleteAllAutoCards === null) && (AC.signal.outputReplacement === ""));
    }
    function isAwaitingGeneration() {
        return (0 < AC.generation.pending.length);
    }
    function isPendingGeneration() {
        return notEmptyObj(AC.generation.workpiece);
    }
    function isPendingCompression() {
        return (AC.compression.titleKey !== "");
    }
    function notEmptyObj(obj) {
        return (obj && (0 < Object.keys(obj).length));
    }
    function clearTransientTitles() {
        AC.database.titles.used = [];
        [used, forenames, surnames].forEach(nameset => nameset.clear());
        return;
    }
    function banTitle(title, isFinalAssignment) {
        title = limitString(title.replace(/\s+/g, " ").trim(), 100);
        const lowerTitle = title.toLowerCase();
        if (bans.size !== 0) {
            bans.add(lowerTitle);
        }
        if (!lowArr(Internal.getBannedTitles()).includes(lowerTitle)) {
            AC.database.titles.banned.unshift(title);
            if (isFinalAssignment) {
                return;
            }
            AC.database.titles.pendingBans.unshift([title, 3]);
            const index = AC.database.titles.pendingUnbans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingUnbans.splice(index, 1);
            }
        }
        return;
    }
    function unbanTitle(title) {
        title = title.replace(/\s+/g, " ").trim();
        const lowerTitle = title.toLowerCase();
        if (used.size !== 0) {
            bans.delete(lowerTitle);
        }
        let index = lowArr(Internal.getBannedTitles()).indexOf(lowerTitle);
        if (index !== -1) {
            AC.database.titles.banned.splice(index, 1);
            AC.database.titles.pendingUnbans.unshift([title, 3]);
            index = AC.database.titles.pendingBans.findIndex(pair => (pair[0].toLowerCase() === lowerTitle));
            if (index !== -1) {
                AC.database.titles.pendingBans.splice(index, 1);
            }
        }
        return;
    }
    function lowArr(arr) {
        return arr.map(str => str.toLowerCase());
    }
    function getControlVariants() {
        return O.f({
            configure: O.f({
                title: "Configure \nAuto-Cards",
                keys: "Edit the entry above to adjust your story card automation settings",
            }),
            enable: O.f({
                title: "Edit to enable \nAuto-Cards",
                keys: "Edit the entry above to enable story card automation",
            }),
        });
    }
    function getDataVariants() {
        return O.f({
            debug: O.f({
                title: "Debug Data",
                keys: "You may view the debug state in the notes section below",
            }),
            critical: O.f({
                title: "Critical Data",
                keys: "Never modify or delete this story card",
            }),
        });
    }
    // Prepare to export the codomain
    const codomain = CODOMAIN.read();
    const [stopPackaged, lastCall] = (function() {
        // Tbh I don't know why I even bothered going through the trouble of implementing "stop" within LSIv2
        switch(HOOK) {
        case "context": {
            const haltStatus = [];
            if (Array.isArray(codomain)) {
                O.f(codomain);
                haltStatus.push(true, codomain[1]);
            } else {
                haltStatus.push(false, STOP);
            }
            if ((AC.config.LSIv2 !== false) && (haltStatus[1] === true)) {
                // AutoCards will return [text, (stop === true)] onContext
                // The onOutput lifecycle hook will not be executed during this turn
                concludeEmergency();
            }
            return haltStatus; }
        case "output": {
            // AC.config.LSIv2 being either true or null implies (lastCall === true)
            return [null, AC.config.LSIv2 ?? true]; }
        default: {
            return [null, null]; }
        }
    })();
    // Repackage AC to propagate its state forward in time
    if (state.LSIv2) {
        // Facilitates recursive calls of AutoCards
        // The Auto-Cards external API is accessible through the LSIv2 scope
        state.LSIv2 = AC;
    } else {
        const memoryOverflow = (38000 < (JSON.stringify(state).length + JSON.stringify(AC).length));
        if (memoryOverflow) {
            // Memory overflow is imminent
            const dataVariants = getDataVariants();
            if (lastCall) {
                unbanTitle(dataVariants.debug.title);
                banTitle(dataVariants.critical.title);
            }
            setData(dataVariants.critical, dataVariants.debug);
            if (state.AutoCards) {
                // Decouple state for safety
                delete state.AutoCards;
            }
        } else {
            if (lastCall) {
                const dataVariants = getDataVariants();
                unbanTitle(dataVariants.critical.title);
                if (AC.config.showDebugData) {
                    // Update the debug data card
                    banTitle(dataVariants.debug.title);
                    setData(dataVariants.debug, dataVariants.critical);
                } else {
                    // There should be no data card
                    unbanTitle(dataVariants.debug.title);
                    if (data === null) {
                        data = getSingletonCard(false, O.f({...dataVariants.debug}), O.f({...dataVariants.critical}));
                    }
                    eraseCard(data);
                    data = null;
                }
            } else if (AC.config.showDebugData && (HOOK === undefined)) {
                const dataVariants = getDataVariants();
                setData(dataVariants.debug, dataVariants.critical);
            }
            // Save a backup image to state
            state.AutoCards = AC;
        }
        function setData(primaryVariant, secondaryVariant) {
            const dataCardTemplate = O.f({
                type: AC.config.defaultCardType,
                title: primaryVariant.title,
                keys: primaryVariant.keys,
                entry: (function() {
                    const mutualEntry = (
                        "If you encounter an Auto-Cards bug or otherwise wish to help me improve this script by sharing your configs and game data, please send me the notes text found below. You may ping me @LewdLeah through the official AI Dungeon Discord server. Please ensure the content you share is appropriate for the server, otherwise DM me instead. 😌"
                    );
                    if (memoryOverflow) {
                        return (
                            "Seeing this means Auto-Cards detected an imminent memory overflow event. But fear not! As an emergency fallback, the full state of Auto-Cards' data has been serialized and written to the notes section below. This text will be deserialized during each lifecycle hook, therefore it's absolutely imperative that you avoid editing this story card!"
                        ) + (function() {
                            if (AC.config.showDebugData) {
                                return "\n\n" + mutualEntry;
                            } else {
                                return "";
                            }
                        })();
                    } else {
                        return (
                            "This story card displays the full serialized state of Auto-Cards. To remove this card, simply set the \"log debug data\" setting to false within your \"Configure\" card. "
                        ) + mutualEntry;
                    }
                })(),
                description: JSON.stringify(AC)
            });
            if (data === null) {
                data = getSingletonCard(true, dataCardTemplate, O.f({...secondaryVariant}));
            }
            for (const propertyName of ["title", "keys", "entry", "description"]) {
                if (data[propertyName] !== dataCardTemplate[propertyName]) {
                    data[propertyName] = dataCardTemplate[propertyName];
                }
            }
            const index = storyCards.indexOf(data);
            if ((index !== -1) && (index !== (storyCards.length - 1))) {
                // Ensure the data card is always at the bottom of the story cards list
                storyCards.splice(index, 1);
                storyCards.push(data);
            }
            return;
        }
    }
    // This is the only return point within the parent scope of AutoCards
    if (stopPackaged === false) {
        return [codomain, STOP];
    } else {
        return codomain;
    }
} AutoCards(null); function isolateLSIv2(code, log, text, stop) { const console = Object.freeze({log}); try { eval(code); return [null, text, stop]; } catch (error) { return [error, text, stop]; } }
