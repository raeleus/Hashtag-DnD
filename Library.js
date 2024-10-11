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

function shuffle(array, seed) {
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
            createEnemy("Turkey Prime", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2"),
            createEnemy("Turkey Lackey A", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2"),
            createEnemy("Turkey Lackey B", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2"),
          ]
          break
        case 52:
          encounter.text = "A calculator is someone who calculates. One such person is here and they mean no good."
          encounter.enemies = [
            createEnemy("The Calculator", calculateRoll("5d8"), 13, "2d4+2", "d20-1", "Calculate Demise1d20")
          ]
          break
        case 53:
          encounter.text = "An ensorcelled fountain pen is on its way to write you out of existence!"
          encounter.enemies = [
            createEnemy("Fountain Pen", calculateRoll("6d10+6"), 13, "1d10+2", "d20+3", "Ink Blot2d4+6")
          ]
          break
        case 54:
          encounter.text = "Oh no! Your childhood bully has come back and he's joined by a gang of bad dudes."
          encounter.enemies = [
            createEnemy("Bully", calculateRoll("5d10+10"), 12, "1d8", "d20-5"),
            createEnemy("Lackey A", calculateRoll("2d8+2"), 12, "1d8", "d20+1"),
            createEnemy("Lackey B", calculateRoll("2d8+2"), 12, "1d8", "d20+1"),
            createEnemy("Lackey C", calculateRoll("2d8+2"), 12, "1d8", "d20+1"),
          ]
          break
        case 55:
          encounter.text = "It's a giant, living pimple and it's ready to burst at you."
          encounter.enemies = [
            createEnemy("Pimple", calculateRoll("4d8+4"), 14, "1d8+2", "d20+1", "Burst Fire3d6")
          ]
          break
        case 56:
          encounter.text = "An evil breath fills the room. You must defeat it before you can't breathe anymore."
          encounter.enemies = [
            createEnemy("Evil Breath", calculateRoll("4d10+4"), 14, "2d6+3", "d20+1", "Stank2d10+5")
          ]
          break
        case 57:
          encounter.text = "A racoon suddenly appears and slaps you in the face. It's clear that it is challenging you to a duel."
          encounter.enemies = [
            createEnemy("Racoon", calculateRoll("3d10+3"), 13, "1d8+2", "d20+1", "Slap1d5+2")
          ]
          break
        case 58:
          encounter.text = "A water bottle sprouts legs. Its unnatural gait betrays it's perverse intentions."
          encounter.enemies = [
            createEnemy("Water Bottle", calculateRoll("2d10+4"), 12, "1d4", "d20-1", "Drench5d3"),
          ]
          break
        case 59:
          encounter.text = "A sleeping guard is here. He is alerted once you start farting uncontrollably."
          encounter.enemies = [
            createEnemy("Guard", calculateRoll("3d10+3"), 14, "1d8+2", "d20+2", "Yawn")
          ]
          break
        case 60:
          encounter.text = "Your best friend from way back has come around. Sadly you have nothing in common with each other and now you're at odds."
          encounter.enemies = [
            createEnemy("Best Friend", calculateRoll("3d10+3"), 14, "2d4+4", "d20+4"),
            createEnemy("Your Replacement", calculateRoll("5d6"), 14, "1d8+1", "d20+2"),
            createEnemy("The New Bestie", calculateRoll("5d6"), 14, "1d8+1", "d20+2"),
          ]
          break
        case 61:
          encounter.text = "Your shadow has become jealous of all that moving around freely thing you do. It attacks!"
          encounter.enemies = [
            createEnemy("Shadow", calculateRoll("4d10"), 14, "1d6+2", "d20+3")
          ]
          break
        case 62:
          encounter.text = "You encounter an accident prone ninja! It clumsily brandishes its weapon but sends it clattering onto the floor before it. The ninja apologizes profusely as it scrambles back into attack position."
          encounter.enemies = [
            createEnemy("Ninja", calculateRoll("6d10+12"), 14, "2d6+3", "d20+2", "Shuriken3d6+3")
          ]
          break
        case 63:
          encounter.text = "The AI Dungeon has become sentient and sends its minions forth to destroy you!"
          encounter.enemies = [
            createEnemy("Mixtral", calculateRoll("3d10+3"), 12, "2d6+1", "d20+2"),
            createEnemy("MythoMax", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Wizard", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Pegasus", calculateRoll("2d6"), 12, "1d4+2", "d20+2")
          ]
          break
        case 64:
          encounter.text = "The evil wizard has conjured enemies to slay you. He did not send his best."
          encounter.enemies = [
            createEnemy("Enthusiastic Intern", calculateRoll("6d10+6"), 10, "1d10+2", "d20+1"),
            createEnemy("Retirement Aged Fighter", calculateRoll("6d10+6"), 10, "1d10+2", "d20+1"),
            createEnemy("A Common Fool", calculateRoll("6d10+6"), 10, "1d10+2", "d20+1", "Contagious Laughter")
          ]
          break
        case 65:
          encounter.text = "The Grammar Nazis attck in fool force!"
          encounter.enemies = [
            createEnemy("Grammar Nazi A", calculateRoll("2d8"), 13, "1d4+3", "d20+3", "Correct Grammar"),
            createEnemy("Grammar Nazi B", calculateRoll("2d8"), 13, "1d4+3", "d20+3", "Correct Grammar"),
            createEnemy("Grammar Nazi C", calculateRoll("2d8"), 13, "1d4+3", "d20+3", "Correct Grammar")
          ]
          break
        case 66:
          encounter.text = "The mini-people have contracted their deadliest assassin to assault you. The twelve-inch pianist is on the move!"
          encounter.enemies = [
            createEnemy("Pianist", calculateRoll("5d10+10"), 12, "2d6+3", "d20+2", "Deadly Tune5d4")
          ]
          break
        case 67:
          encounter.text = "Take it easy this time. A rude tortoise is slowly coming this way and it has foul plans for the party."
          encounter.enemies = [
            createEnemy("Rude Tortoise", calculateRoll("5d10+10"), 11, "2d6+3", "d20+2", "Shell Up")
          ]
          break
        case 68:
          encounter.text = "The ninja-mime attacks! Why won't he say anything?"
          encounter.enemies = [
            createEnemy("Ninja Mime", calculateRoll("2d6"), 15, "1d6+2", "d20+2", "Pantomime3d6")
          ]
          break
        case 69:
          encounter.text = "A disgusting fashion faux pas presents itself in front of the party. Defend yourself."
          encounter.enemies = [
            createEnemy("Ill Fitting Clothes", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Color Clash", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Pleated Pants", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Black and White Stripes", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2")
          ]
          break
        case 70:
          encounter.text = "A miserable plate of unfinished food reveals itself. \"Waste not, want not,\" it says menacingly."
          encounter.enemies = [
            createEnemy("Food Plate", calculateRoll("2d8+2"), 12, "1d6+1", "d20+1", "Glutton")
          ]
          break
        case 71:
          encounter.text = "A spork is a multifunctional utensil. It turns its malicious gaze towards you."
          encounter.enemies = [
            createEnemy("Spork", calculateRoll("2d8+2"), 16, "1d8+1", "d20+1", "Transform into Fork", "Transform into Spoon")
          ]
          break
        case 72:
          encounter.text = "An angry mother-in-law nags into your general area."
          encounter.enemies = [
            createEnemy("Mother-In-Law", calculateRoll("6d10+18"), 13, "2d10+4", "d20+1", "Nag", "Verbal Assault3d10")
          ]
          break
        case 73:
          encounter.text = "A squad of trick motorcyclists wheel into your area! They're doing dastardly maneuvers in front of your face."
          encounter.enemies = [
            createEnemy("Motorcyclist A", calculateRoll("6d10+12"), 12, "2d6+4", "d20+2", "Trick"),
            createEnemy("Motorcyclist B", calculateRoll("6d10+12"), 12, "2d6+4", "d20+2", "Trick"),
            createEnemy("Motorcyclist C", calculateRoll("6d10+12"), 12, "2d6+4", "d20+2", "Trick"),
            createEnemy("Ring Leader", calculateRoll("7d8+21"), 15, "1d6+2", calculateRoll("d20"), "Command")
          ]
          break
        case 74:
          encounter.text = "Some stressed out people are here and they misinterpret your casual greeting as a taunt. Emotions are on high."
          encounter.enemies = [
            createEnemy("Angry Guy", calculateRoll("8d12+8"), 12, "2d8+4", "d20+2"),
            createEnemy("Stressed Pal", calculateRoll("8d12+8"), 12, "2d8+4", "d20+2"),
            createEnemy("The Instigator", calculateRoll("8d12+8"), 12, "2d8+4", calculateRoll("d20+10"), "Instigate"),
          ]
          break
        case 75:
          encounter.text = "An ominous stop sign is placed here at odds with your sensibility. It directs you to cease moving at once."
          encounter.enemies = [
            createEnemy("Stop Sign", calculateRoll("6d8"), 14, "2d6+2", "d20+2", "Red Light", "Green Light")
          ]
          break
        case 76:
          encounter.text = "Elliot Carver, the villain from Tomorrow Never Dies, ridicules your martial ability. You will not let this stand."
          encounter.enemies = [
            createEnemy("Elliot Carver", calculateRoll("6d10+12"), 12, "2d8+4", "d20+1", "Berate3d10"),
            createEnemy("Goon A", calculateRoll("3d10+3"), 11, "3d10+5", "d20-1"),
            createEnemy("Goon B", calculateRoll("3d10+3"), 11, "3d10+5", "d20-1"),
          ]
          break
        case 77:
          encounter.text = "So, you accidentally punched yourself while carrying a load and picking up something off the ground at the same time. Pissed off, you decide to fight yourself."
          encounter.enemies = [
            createEnemy("Yourself", calculateRoll("6d8+18"), 15, "1d6+3", "d20+3")
          ]
          break
        case 78:
          encounter.text = "A suspension of bad feelings waddles toward you. You have no choice but to take to arms."
          encounter.enemies = [
            createEnemy("Sad", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
            createEnemy("Mad", calculateRoll("6d10+12"), 8, "2d6+3", "d20-2"),
            createEnemy("Depressed", calculateRoll("6d10+12"), 8, "2d6+3", "d20-2"),
            createEnemy("Upset", calculateRoll("6d10+12"), 8, "2d6+3", "d20-2")
          ]
          break
        case 79:
          encounter.text = "A gambler is here. Feeling cheated, he directs his misfortune at you."
          encounter.enemies = [
            createEnemy("A gambler", calculateRoll("7d10+21"), 13, "2d8+5", "d20+1", "Even the Odds")
          ]
          break
        case 80:
          encounter.text = "You know how they say, \"You miss 100% of the shots you don't take?\" Well here's that shot you didn't take."
          encounter.enemies = [
            createEnemy("The Shot", calculateRoll("5d10+5"), 13, "1d10+2", "d20+2")
          ]
          break
        case 81:
          encounter.text = "You know how they say, \"The path to hell is paved with good intentions?\" Here are those good intentions."
          encounter.enemies = [
            createEnemy("Good Intention A", calculateRoll("6d8+12"), 14, "1d6-1", "d20+2"),
            createEnemy("Good Intention B", calculateRoll("6d8+12"), 14, "1d6-1", "d20+2"),
            createEnemy("Good Intention C", calculateRoll("6d8+12"), 14, "1d6-1", "d20+2")
          ]
          break
        case 82:
          encounter.text = "It's the AI from AI Dungeon! Man your battle stations."
          encounter.enemies = [
            createEnemy("AI", calculateRoll("5d10+10"), 12, "2d4+2", "d20+1", "Hallucinate")
          ]
          break
        case 83:
          encounter.text = "You shouldn't have kicked that puppy when you were a kid because it's all grown up and it remembers."
          encounter.enemies = [
            createEnemy("Vengeance Dog", calculateRoll("6d8+18"), 14, "1d8+2", "d20+2", "Intimidating Growl")
          ]
          break
        case 84:
          encounter.text = "Hah! You're screwed now! Your worst fear is actualized in front of you. It's a thing!"
          encounter.enemies = [
            createEnemy("Thing You Fear Most", calculateRoll("10d10+20"), 13, "2d6+4", "d20+1", "Morph")
          ]
          break
        case 85:
          encounter.text = "Well, if it isn't the consequences of your actions."
          encounter.enemies = [
            createEnemy("Consequence A", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Consequence B", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Consequence C", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Consequence D", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Consequence E", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2")
          ]
          break
        case 86:
          encounter.text = "A thousand armies of the Persian empire descend upon you. They will drink the rivers dry. Their arrows will blot out the sun."
          encounter.enemies = [
            createEnemy("One Thousand", calculateRoll("8d12+16"), 15, "4d6+4", calculateRoll("d20")),
            createEnemy("Two Thousand", calculateRoll("8d12+16"), 15, "4d6+4", calculateRoll("d20")),
            createEnemy("Three Thousand", calculateRoll("8d12+16"), 15, "4d6+4", calculateRoll("d20"))
          ]
          break
        case 87:
          encounter.text = "The embodiment of really poor decisions and a hangover approaches you in a disturbing pattern."
          encounter.enemies = [
            createEnemy("Hangover", calculateRoll("8d8+16"), 15, "2d6+3", "d20-1", "Head Pain3d6"),
            createEnemy("Poor Decision A", calculateRoll("8d8+16"), 15, "2d6+3", "d20-1"),
            createEnemy("Poor Decision B", calculateRoll("8d8+16"), 15, "2d6+3", "d20-1")
          ]
          break
        case 88:
          encounter.text = "An annoying sales-person is using hard-sale tactics at you. Resist!"
          encounter.enemies = [
            createEnemy("Sales-Person", calculateRoll("8d8+16"), 14, "1d6+4", "d20+4", "Big Sale")
          ]
          break
        case 89:
          encounter.text = "A group of Reddit mods are here. This is not a good sign."
          encounter.enemies = [
            createEnemy("Reddit Mod A", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod B", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod C", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Reddit Mod D", calculateRoll("2d6"), 12, "1d4+2", "d20+2"),
            createEnemy("Grand Reddit Mod", calculateRoll("7d10+14"), 15, "1d10+2", "d20+1")
          ]
          break
        case 90:
          encounter.text = "An expert in bulshiddo beckoms toward you. You have no other choice but to engage."
          encounter.enemies = [
            createEnemy("Bulshiddo Expert", calculateRoll("7d10+14"), 15, "1d10+2", "d20+1", "Focus Chit")
          ]
          break
        case 91:
          encounter.text = "You know how they say \"Hope springs eternal?\" Well, Hope is springing her way to your direction."
          encounter.enemies = [
            createEnemy("Hope", calculateRoll("7d8+14"), 15, "1d8+3", "d20+1", "Spring Eternal5d4")
          ]
          break
        case 92:
          encounter.text = "An immodest pixie points and laughs at you. She thinks you're funny looking. Battle is inevitable."
          encounter.enemies = [
            createEnemy("Pixie", calculateRoll("12d12+12"), 12, "2d6+3", calculateRoll("d20"), "Shameless Magic2d10")
          ]
          break
        case 93:
          encounter.text = "A touring squad of basketball players send a stray rebound right to your head. It's on now!"
          encounter.enemies = [
            createEnemy("Scottie P", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
            createEnemy("M Jordan", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
            createEnemy("L Bird", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
            createEnemy("Magic J", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
            createEnemy("C Barkley", calculateRoll("6d10+12"), 8, "2d6+2", "d20-2"),
          ]
          break
        case 94:
          encounter.text = "What happens if you fight the void? Let's see."
          encounter.enemies = [
            createEnemy("The Void", calculateRoll("5d10+5"), 13, "1d10+2", "d20+2", "Darkness")
          ]
          break
        case 95:
          encounter.text = "Oh god, I've written so many encounters at this point. Just use your imagination."
          encounter.enemies = [
            createEnemy("Your Imagination", calculateRoll("6d8+12"), 14, "1d6-1", "d20+2", "Detect Thoughts")
          ]
          break
        case 96:
          encounter.text = "A tachometer is revving up!"
          encounter.enemies = [
            createEnemy("Tachometer", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2", "Accelerate")
          ]
          break
        case 97:
          encounter.text = "Taco Tuesdays are back and with a serious vengeance."
          encounter.enemies = [
            createEnemy("Taco Tuesday A", calculateRoll("9d8+18"), 11, "1d6+2", "d20+1", "Diarrhea3d10"),
            createEnemy("Taco Tuesday B", calculateRoll("9d8+18"), 11, "1d6+2", "d20+1", "Diarrhea3d10")
          ]
          break
        case 98:
          encounter.text = "There's like one dude screaming here. It's not clear who he's yelling at or why. Can you please shut him up?"
          encounter.enemies = [
            createEnemy("Screaming Dude", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2", "Scream")
          ]
          break
        case 99:
          encounter.text = "Magneto has somehow entered your world. He blames you for this injustice."
          encounter.enemies = [
            createEnemy("Magneto", calculateRoll("6d8+18"), 14, "1d8+2", "d20+2", "Manipulate Metal", "Shield"),
            createEnemy("The Juggernaut", calculateRoll("6d8+18"), 14, "1d8+2", "d20+2", "Charge3d10"),
            createEnemy("Sabretooth", calculateRoll("6d8+18"), 14, "1d8+2", "d20+2"),
          ]
          break
        case 100:
          encounter.text = "A banker has come to collect on your debts."
          encounter.enemies = [
            createEnemy("The Banker", calculateRoll("10d10+20"), 13, "2d6+4", "d20+1", "Prisoner's Dilemma", "PMT Function3d6", "Tax Break")
          ]
          break
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
            createEnemy("Specter", calculateRoll("5d8"), 12, "1d10", "d20+2")
          ]
          break
        case 51:
          encounter.text = "An awakened shrub shifts towards you. It seems like it was guarding this place."
          encounter.enemies = [
            createEnemy("Awakened Shrub", calculateRoll("2d+6"), 9, "1d4-1", "d20-1")
          ]
          break
        case 52:
          encounter.text = "Brigands are attacking!"
          encounter.enemies = [
            createEnemy("Brigand A", calculateRoll("5d8+10"), 11, "1d6+2", "d20"),
            createEnemy("Brigand B", calculateRoll("5d8+10"), 11, "1d6+2", "d20"),
            createEnemy("Brigand C", calculateRoll("5d8+10"), 11, "1d6+2", "d20")
          ]
          break
        case 53:
          encounter.text = "A wounded black bear is here. Baring its teeth, it seems to consider you as a threat."
          encounter.enemies = [
            createEnemy("Black Bear", calculateRoll("3d8+6"), 11, "2d4+2", "d20")
          ]
          break
        case 54:
          encounter.text = "An angry boar is charging at you!"
          encounter.enemies = [
            createEnemy("Boar", calculateRoll("2d8+2"), 11, "1d6+1", "d20")
          ]
          break
        case 55:
          encounter.text = "Two cockatrices have somehow flanked you on both sides. Prepare for battle!"
          encounter.enemies = [
            createEnemy("Cockatrice A", calculateRoll("6d6+6"), 11, "1d4+1", "d20+1", "Petrifying Bite1d4+1"),
            createEnemy("Cockatrice B", calculateRoll("6d6+6"), 11, "1d4+1", "d20+1", "Petrifying Bite1d4+1")
          ]
          break
        case 56:
          encounter.text = "You've fallen into a pit of snakes. A group of them slither up to you, winding up to strike."
          encounter.enemies = [
            createEnemy("Snake", calculateRoll("2d10+2"), 12, "1d8+2", "d20+2", "Poison Bite2d4+1")
          ]
          break
        case 57:
          encounter.text = "A dire wolf has caught your scent. It's going to make its move!"
          encounter.enemies = [
            createEnemy("Dire Wolf", calculateRoll("5d10+10"), 14, "2d6+3", "d20+2")
          ]
          break
        case 58:
          encounter.text = "The remarkable pattern on the skin of this giant frog is a clear indication that it's poisonous. Watch out!"
          encounter.enemies = [
            createEnemy("Giant Frog", calculateRoll("4d8"), 11, "1d6+1", "d20+1", "Poison2d4+1")
          ]
          break
        case 59:
          encounter.text = "A very intricate gargoyle statue has been placed here as a centerpiece in an altar. Without warning, it turns its head toward you and its lips turn upwards into an evil grin."
          encounter.enemies = [
            createEnemy("Gargoyle", calculateRoll("7d8+21"), 15, "1d6+2", "d20")
          ]
          break
        case 60:
          encounter.text = "You have disturbed an ancient burial ground! Ghouls have risen from their eternal sleep."
          encounter.enemies = [
            createEnemy("Ghoul A", calculateRoll("5d8"), 12, "2d6+2", "d20+2"),
            createEnemy("Ghoul B", calculateRoll("5d8"), 12, "2d6+2", "d20+2"),
            createEnemy("Ghoul C", calculateRoll("5d8"), 12, "2d6+2", "d20+2"),
            createEnemy("Ghoul D", calculateRoll("5d8"), 12, "2d6+2", "d20+2")
          ]
          break
        case 61:
          encounter.text = "A giant badger has claimed this plot of land and he'll be damned if he lets the likes of you tread all over it."
          encounter.enemies = [
            createEnemy("Giant Badger", calculateRoll("2d8+4"), 10, "1d6+1", "d20")
          ]
          break
        case 62:
          encounter.text = "A giant centipede crawls into view. Its terrifying shriek makes your skin crawl. Prepare yourself!"
          encounter.enemies = [
            createEnemy("Giant Centipede", calculateRoll("1d6+1"), 13, "1d4+2", "d20+2")
          ]
          break
        case 63:
          encounter.text = "A feral pack of hyenas have nested here. They smell your blood..."
          encounter.enemies = [
            createEnemy("Hyena A", calculateRoll("1d8+1"), 11, "1d6", "d20+1"),
            createEnemy("Hyena B", calculateRoll("1d8+1"), 11, "1d6", "d20+1"),
            createEnemy("Giant Hyena", calculateRoll("6d10+12"), 12, "2d6+3", "d20+2")
          ]
          break
        case 64:
          encounter.text = "A swarm of rats are sweeping across the ground and heading toward you!"
          encounter.enemies = [
            createEnemy("Swarm of Rats", calculateRoll("7d8-7"), 10, "2d6", "d20")
          ]
          break
        case 65:
          encounter.text = "A group of gnolls have coalesced here. Your arrival has activated their senses."
          encounter.enemies = [
            createEnemy("Gnoll A", calculateRoll("5d8"), 15, "1d8+2", "d20+1"),
            createEnemy("Gnoll B", calculateRoll("5d8"), 15, "1d8+2", "d20+1"),
            createEnemy("Gnoll C", calculateRoll("5d8"), 15, "1d8+2", "d20+1")
          ]
          break
        case 66:
          encounter.text = "The group of goblins are as surprised to see you as you are to see them. Get ready!"
          encounter.enemies = [
            createEnemy("Goblin A", calculateRoll("2d6"), 15, "1d6+2", "d20+2"),
            createEnemy("Goblin B", calculateRoll("2d6"), 15, "1d6+2", "d20+2"),
            createEnemy("Goblin C", calculateRoll("2d6"), 15, "1d6+2", "d20+2"),
            createEnemy("Goblin D", calculateRoll("2d6"), 15, "1d6+2", "d20+2")
          ]
          break
        case 67:
          encounter.text = "A sweet lullaby carries through the air. You are enchanted by its melody. But wait! It's a harpy's luring song. Resist!"
          encounter.enemies = [
            createEnemy("Harpy", calculateRoll("7d8+7"), 11, "2d4+1", "d20+1", "Luring Song")
          ]
          break
        case 68:
          encounter.text = "You spot a hobgoblin crouched over his battle axe. As he sharpens its blade, he menaces at you, \"You shouldn't have come here, meat.\""
          encounter.enemies = [
            createEnemy("Hobgoblin", calculateRoll("2d8+2"), 18, "1d8+1", "d20+1")
          ]
          break
        case 69:
          encounter.text = "A kobold sticks his head out from barrel. Aware of your presence, it signals to the rest of the pack."
          encounter.enemies = [
            createEnemy("Kobold A", calculateRoll("2d6-2"), 12, "1d4+2", "d20+2"),
            createEnemy("Kobold B", calculateRoll("2d6-2"), 12, "1d4+2", "d20+2"),
            createEnemy("Kobold C", calculateRoll("2d6-2"), 12, "1d4+2", "d20+2"),
            createEnemy("Kobold D", calculateRoll("2d6-2"), 12, "1d4+2", "d20+2")
          ]
          break
        case 70:
          encounter.text = "A magically entranced Satyr has come into view. Some dark force is compelling it to attack you!"
          encounter.enemies = [
            createEnemy("Satyr", calculateRoll("5d8"), 15, "1d8+2", "d20+3")
          ]
          break
        case 71:
          encounter.text = "A skeleton archer has the drop on you! It looses a bolt that very narrowly misses its mark. Get ready for a fight!"
          encounter.enemies = [
            createEnemy("Skeleton", calculateRoll("2d8+4"), 13, "1d6+2", "d20+2")
          ]
          break
        case 72:
          encounter.text = "A group of stirge descend on you. Their stink should have given them away."
          encounter.enemies = [
            createEnemy("Strige A", calculateRoll("1d4"), 14, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Strige B", calculateRoll("1d4"), 14, "1d4+3", "d20+1", "Blood Drain2d4+6"),
            createEnemy("Strige C", calculateRoll("1d4"), 14, "1d4+3", "d20+1", "Blood Drain2d4+6")
          ]
          break
        case 73:
          encounter.text = "You have never seen a Worg this large before. Its snarling teeth glint in the light."
          encounter.enemies = [
            createEnemy("Worg", calculateRoll("4d10+4"), 13, "2d6+3", "d20+1")
          ]
          break
        case 74:
          encounter.text = "Everywhere you look... Zombies! You are surrounded as they shuffle towards you, drawn by the heat of your flesh."
          encounter.enemies = [
            createEnemy("Zombie A", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Zombie B", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Zombie C", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Zombie D", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2"),
            createEnemy("Zombie E", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2")
          ]
          break
        case 75:
          encounter.text = "Your arrival has interrupted a dark acolyte's ritual. His eyes go steely as he plans his retribution."
          encounter.enemies = [
            createEnemy("Dark Acolyte", calculateRoll("2d8"), 10, "1d4", "d20", "Sacred Flame2d6", "Bless")
          ]
          break
        case 76:
          encounter.text = "A bandit duo eyes your gear. A combination of greed and desperation drive them to attack you."
          encounter.enemies = [
            createEnemy("Bandit A", calculateRoll("5d8+10"), 11, "1d6+2", "d20"),
            createEnemy("Bandit B", calculateRoll("5d8+10"), 11, "1d6+2", "d20")
          ]
          break
        case 77:
          encounter.text = "A crowd of cultists walk into view. Their aim is clear: to sacrifice you as an offering to their god. Attack before you are torn limb from limb!"
          encounter.enemies = [
            createEnemy("name", calculateRoll("health"), 8, "damage", "d20+")
          ]
          break
        case 78:
          encounter.text = "A gnoll has strayed from its herd. You take the opportunity to attack before it alerts the others."
          encounter.enemies = [
            createEnemy("name", calculateRoll("health"), 8, "damage", "d20+")
          ]
          break
        case 79:
          encounter.text = "A majestic white wolf has been tracking you for some time. It can no longer ignore its hunger pangs and begins racing at you."
          encounter.enemies = [
            createEnemy("name", calculateRoll("health"), 8, "damage", "d20+")
          ]
          break
        case 80:
          encounter.text = "An orc looks up from his fire. You're spotted!"
          encounter.enemies = [
            createEnemy("name", calculateRoll("health"), 8, "damage", "d20+")
          ]
          break
        case 81:
          encounter.text = "A wyrmling is spotted circling around you. It's coming in for an attack!"
          encounter.enemies = [
            createEnemy("name", calculateRoll("health"), 8, "damage", "d20+")
          ]
          break
        case 82:
          encounter.text = "A pack of death dogs are directly ahead. There is no avoiding their dark gaze. Prepare for combat!"
          encounter.enemies = [
            createEnemy("Death Dog A", calculateRoll("6d8+12"), 12, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog B", calculateRoll("6d8+12"), 12, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog C", calculateRoll("6d8+12"), 12, "1d6+2", "d20+2", "Diseased Bite2d6+2"),
            createEnemy("Death Dog D", calculateRoll("6d8+12"), 12, "1d6+2", "d20+2", "Diseased Bite2d6+2")
          ]
          break
        case 83:
          encounter.text = "The deep gnome mercenary looks at you with a sinister scowl. \"I don't very much like you.\" He brandishes a sword and prepares to attack you."
          encounter.enemies = [
            createEnemy("Deep Gnome Merc", calculateRoll("3d6+6"), 15, "1d8+2", "d20+2", "Poison Dart1d4+2", "Stone Camoflage")
          ]
          break
        case 84:
          encounter.text = "That stink! What is it? A dretch raises its head, clearly alarmed by your presence. It's going to rush you!"
          encounter.enemies = [
            createEnemy("Dretch", calculateRoll("4d6+4"), 11, "2d4", "d20")
          ]
          break
        case 85:
          encounter.text = "A drow raider! Take cover!"
          encounter.enemies = [
            createEnemy("Drow Raider", calculateRoll("3d8"), 15, "1d6+2", "d20+2")
          ]
          break
        case 86:
          encounter.text = "It's not your imagination: a gray ooze is seeping through the cracks. It coalesces into a hideous aberration before you."
          encounter.enemies = [
            createEnemy("Gray Ooze", calculateRoll("3d8+9"), 8, "1d6+1", "d20-2", "Corrode Metal")
          ]
          break
        case 87:
          encounter.text = "You catch a Grimlock tearing meat from the leg of some hapless victim. It drops it immediately once it spots you."
          encounter.enemies = [
            createEnemy("Grimlock", calculateRoll("2d8+2"), 11, "1d4+3", "d20+1")
          ]
          break
        case 88:
          encounter.text = "Who summoned these homunculi? They don't look friendly. Suddenly, a loud shriek!"
          encounter.enemies = [
            createEnemy("Homunculus A", calculateRoll("2d4"), 13, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus B", calculateRoll("2d4"), 13, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus C", calculateRoll("2d4"), 13, "1d10", "d20+2", "Poison Bite1d10"),
            createEnemy("Homunculus D", calculateRoll("2d4"), 13, "1d10", "d20+2", "Poison Bite1d10")
          ]
          break
        case 89:
          encounter.text = "A group of lemures block the way. Their hideous forms disgust you."
          encounter.enemies = [
            createEnemy("Lemure", calculateRoll("3d8"), 7, "1d4", "d20-3")
          ]
          break
        case 90:
          encounter.text = "The sulfur stink reaches your nose first, then the sight of them: a group of Magmin are on approach."
          encounter.enemies = [
            createEnemy("Magmin A", calculateRoll("2d6+2"), 14, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Magmin B", calculateRoll("2d6+2"), 14, "2d6", "d20+2", "Fire Touch3d6"),
            createEnemy("Magmin C", calculateRoll("2d6+2"), 14, "2d6", "d20+2", "Fire Touch3d6")
          ]
          break
        case 91:
          encounter.text = "Out of the corner of your eye you spot a dark figure moving. \"Quasits!\" You prepare for the ambush."
          encounter.enemies = [
            createEnemy("Quasit A", calculateRoll("3d4"), 13, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit B", calculateRoll("3d4"), 13, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit C", calculateRoll("3d4"), 13, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit D", calculateRoll("3d4"), 13, "1d4+3", "d20+", "Invisibility", "Scare"),
            createEnemy("Quasit E", calculateRoll("3d4"), 13, "1d4+3", "d20+", "Invisibility", "Scare")
          ]
          break
        case 92:
          encounter.text = "A rust monster! A killing blow will corrode any common weapons."
          encounter.enemies = [
            createEnemy("Rust Monster", calculateRoll("5d8+5"), 14, "1d8+1", "d20+1")
          ]
          break
        case 93:
          encounter.text = "An undead specter reveals itself. It's malevolence can be felt in your bones."
          encounter.enemies = [
            createEnemy("Specter", calculateRoll("5d8"), 12, "3d6", "d20+2", "Life Drain3d6", "Incorporeal Movement")
          ]
          break
        case 94:
          encounter.text = "Enchanted weasels are commanded to attack you. Oh god, they're everywhere!"
          encounter.enemies = [
            createEnemy("Weasel A", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel B", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel C", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel D", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel E", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel F", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel G", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel H", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel I", calculateRoll("1d4-1"), 13, "1", "d20+3"),
            createEnemy("Weasel J", calculateRoll("1d4-1"), 13, "1", "d20+3")
          ]
          break
        case 95:
          encounter.text = "An awakened tree lumbers toward you. Apparently, this is sacred ground that you tarnish with your presence."
          encounter.enemies = [
            createEnemy("Awakened Tree", calculateRoll("7d12+14"), 13, "3d6+4", "d20-2")
          ]
          break
        case 96:
          encounter.text = "A centaur is leading up to you. It may have been tracking your for some time. Get ready!"
          encounter.enemies = [
            createEnemy("Centaur", calculateRoll("6d10+12"), 12, "2d6+4", "d20+2", "Charge3d6")
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
            createEnemy("Ghast", calculateRoll("8d8"), 13, "2d8+3", "d20+3")
          ]
          break
        case 99:
          encounter.text = "An orc war party comes upon you!"
          encounter.enemies = [
            createEnemy("Orc A", calculateRoll("2d8+6"), 13, "1d12+3", "d20+1"),
            createEnemy("Orc B", calculateRoll("2d8+6"), 13, "1d12+3", "d20+1"),
            createEnemy("Orc C", calculateRoll("2d8+6"), 13, "1d12+3", "d20+1"),
            createEnemy("Orc D", calculateRoll("2d8+6"), 13, "1d12+3", "d20+1")
          ]
          break
      }
      break
    case "medium":
      if (encounter.cr == null) encounter.cr = 5
      break
    case "hard":
      if (encounter.cr == null) encounter.cr = 9
      break
    case "boss":
      if (encounter.cr == null) encounter.cr = 13
      break
    case "god":
      if (encounter.cr == null) encounter.cr = 17
      break
  }

  for (var enemy of encounter.enemies) {
    enemy.health = Math.floor(enemy.health * multiplier)
    enemy.ac = Math.floor(enemy.ac * multiplier)

    damagePrefix = enemy.damage.match(/^\d*d\d*/gi)[0]
    damageSuffix = enemy.damage.match(/(?<=^\d*d\d*).*$/gi)
    damageSuffix = damageSuffix != null ? parseInt(damageSuffix[0]) : 0
    damageSuffix += Math.floor(3 * (multiplier - 1))
    enemy.damage = damagePrefix + damageSuffix

    initiativePrefix = enemy.initiative.match(/^\d*d\d*/gi)[0]
    initiativeSuffix = enemy.initiative.match(/(?<=^\d*d\d*).*$/gi)
    initiativeSuffix = initiativeSuffix != null ? parseInt(initiativeSuffix[0]) : 0
    initiativeSuffix += Math.floor(3 * (multiplier - 1))
    enemy.initiative = initiativePrefix + initiativeSuffix
  }

  return encounter
}

function createEnemy(name, health, ac, damage, initiative, ...spells) {
  var enemy = {
    name: name,
    health: health,
    ac: ac,
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
  return storyCards.findIndex((element) => element.type == "spell" && element.keys == name)
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