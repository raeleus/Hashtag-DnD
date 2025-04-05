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