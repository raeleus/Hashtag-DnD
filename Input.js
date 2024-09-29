const rollSynonyms = ["roll"]
const createSynonyms = ["create", "generate", "start", "begin", "setup", "party", "member", "new"]
const bioSynonyms = ["bio", "biography", "summary", "character", "charactersheet", "statsheet"]
const setClassSynonyms = ["setclass", "class"]
const setSummarySynonyms = ["setsummary", "summary"]
const trySynonyms = ["try", "tryto", "tries", "triesto", "attempt", "attemptto", "attemptsto", "do"]
const setHealthSynonyms = ["sethealth"]
const healSynonyms = ["heal", "mend", "restore"]
const damageSynonyms = ["damage", "hurt", "harm", "injure"]
const restSynonyms = ["rest", "longrest", "shortrest", "sleep", "nap"]
const setExperienceSynonyms = ["setexperience", "setexp", "setxp", "setexperiencepoints"]
const addExperienceSynonyms = ["addexperience", "addexp", "addxp", "addexperiencepoints", "experience", "exp", "gainxp", "gainexperience", "xp", "experiencepoints"]
const levelUpSynonyms = ["levelup", "level"]
const setStatSynonyms = ["setstat", "setstatistic", "setattribute", "setability", "changestat", "changestatistic", "changeattribute", "changeability", "updatestat", "updatestatistic", "updateattribute", "updateability", "stat", "attribute", "ability"]
const showStatsSynonym = ["showstats", "stats", "viewstats", "showabilities", "abilities", "viewabilities", "showstatistics", "statistics", "viewstatistics", "showattributes", "attributes", "viewattributes"]
const removeStatSynonyms = ["removestat", "deletestat", "cancelstat", "removeability", "deleteability", "cancelAbility", "removestatistic", "deletestatistic", "cancelstatistic", "removeattribute", "deleteattribute", "cancelattribute"]
const clearStatsSynonyms = ["clearstats", "clearabilities", "clearstatistics", "clearattributes"]
const setSpellStatSynonyms = ["setspellstat", "setspellstatistic", "setspellability", "setspellcastingability", "changespellstat", "changespellstatistic", "changespellability", "changespellcastingability"]
const setSkillSynonyms = ["setskill", "changeskill", "updateskill", "skill"]
const showSkillsSynonyms = ["showskills", "skills"]
const removeSkillSynonyms = ["removeskill", "deleteskill", "cancelskill"]
const clearSkillsSynonyms = ["clearskills"]
const checkSynonyms = ["check", "checkstat", "checkstatistic", "checkattribute", "checkability", "checkskill", "skillcheck", "abilitycheck"]
const showNotesSynonyms = ["notes", "shownotes", "viewnotes"]
const noteSynonyms = ["note", "takenote", "setnote", "createnote"]
const clearNotesSynonyms = ["clearnotes"]
const eraseNoteSynonyms = ["erasenote", "removenote", "deletenote", "cancelnote"]
const takeSynonyms = ["take", "steal", "get", "grab", "receive", "loot"]
const buySynonyms = ["buy", "purchase", "barter", "trade", "swap", "exchange"]
const sellSynonyms = ["sell"]
const dropSynonyms = ["remove", "discard", "drop", "leave", "dispose", "toss", "throw", "throwaway", "trash", "donate", "eat", "consume", "use", "drink", "pay"]
const giveSynonyms = ["give", "handover", "hand", "gift"]
const renameItemSynonyms = ["renameitem", "renameobject", "renamegear", "renameequipment"]
const inventorySynonyms = ["inv", "inventory", "backpack", "gear", "showinv", "showinventory", "viewinventory", "viewinv"]
const clearInventorySynonyms = ["clearinventory", "clearinv", "emptyinventory", "emptybackpack", "clearbackpack", "emptygear", "cleargear"]
const learnSpellSynonyms = ["learnspell", "learnmagic", "learnincantation", "learnritual", "memorizespell", "memorizemagic", "memorizeincantation", "memorizeritual", "learnsspell", "learnsmagic", "learnsincantation", "learnsritual", "memorizesspell", "memorizesmagic", "memorizesincantation", "memorizesritual", "learn"]
const forgetSpellSynonyms = ["forgetspell", "forgetmagic", "forgetincantation", "forgetritual", "forgetsspell", "forgetsmagic", "forgetsincantation", "forgetsritual", "deletespell", "deletemagic", "deleteincantation", "deleteritual", "deletesspell", "deletesmagic", "deletesincantation", "deletesritual", "cancelspell", "cancelmagic", "cancelincantation", "cancelritual", "cancelsspell", "cancelsmagic", "cancelsincantation", "cancelsritual", "removespell", "removemagic", "removeincantation", "removeritual", "removesspell", "removesmagic", "removesincantation", "removesritual", "forget"]
const castSpellSynonyms = ["cast", "castspell", "castmagic", "castincantation", "castritual", "castsspell", "castsmagic", "castsincantation", "castsritual"]
const clearSpellsSynonyms = ["clearspells", "clearmagic", "clearincantations", "clearrituals", "forgetallspells", "forgetallmagic", "forgetallincantation", "forgetallritual"]
const spellbookSynonyms = ["spellbook", "spells", "listspells", "showspells", "spelllist", "spellcatalog", "spellinventory"]
const resetSynonyms = ["reset", "cleandata", "cleardata", "resetdata", "resetsettings", "clearsettings", "profile"]
const allSynonyms = ["all", "every", "each", "every one", "everyone"]
const attackSynonyms = ["attack", "strike", "ambush", "assault", "fireat", "fireon"]
const setMeleeStatSynonyms = ["setmeleestat", "setmeleestatistic", "setmeleeability", "changemeleestat", "changemeleestatistic", "changemeleeability"]
const setrangedStatSynonyms = ["setrangedstat", "setrangedstatistic", "setrangedability", "changerangedstat", "changerangedstatistic", "changerangedability"]
const showCharactersSynonyms = ["showcharacters", "showparty", "showteam", "characters", "party", "team"]
const removeCharacterSynonyms = ["removecharacter", "deletecharacter", "erasecharacter"]
const setAutoXpSynonyms = ["setautoxp", "autoxp"]
const showAutoXpSynonyms = ["showautoxp"]
const setDefaultDifficultySynonyms = ["setdefaultdifficulty", "defaultdifficulty", "setdefaultdc", "defaultdc", "setdefaultac", "defaultac", "setdifficulty", "difficulty", "dc"]
const showDefaultDifficultySynonyms = ["showdefaultdifficulty", "showdefaultdc", "showdefaultac"]
const generateNameSynonyms = ["generatename", "name", "randomname", "makename", "createname"]
const helpSynonyms = ["help"]

const modifier = (text) => {
  init()
  const rawText = text

  if (state.createStep != null) {
    text = handleCreateStep(text)
    if (state.createStep != null) return { text }
    else text = rawText
  }

  if (state.initialized == null || !text.includes("#")) {
    state.initialized = true;
    return { text }
  }

  state.characterName = getCharacterName(rawText)
  text = sanitizeText(text)
  
  command = text.substring(text.search(/#/) + 1)
  var commandName = getCommandName(command).toLowerCase().replaceAll(/[^a-z0-9\s]*/gi, "")
  
  if (state.characterName == null || !hasCharacter(state.characterName)) {
    var found = processCommandSynonyms(command, commandName, createSynonyms, function () {return true})

    if (state.characterName == null && found) {
      state.show = "none"
      text = `\n[Error: Character name not specified. Use the "do" or "say" modes. Alternatively, use "story" mode with the following format without quotes: "charactername #hashtag"]\n`
      return { text }
    }

    if (!found) found = processCommandSynonyms(command, commandName, helpSynonyms.concat(rollSynonyms, noteSynonyms, eraseNoteSynonyms, showNotesSynonyms, clearNotesSynonyms, showCharactersSynonyms, removeCharacterSynonyms, generateNameSynonyms, setDefaultDifficultySynonyms, showDefaultDifficultySynonyms, resetSynonyms), function () {return true})

    if (found == null) {
      if (state.characterName == null) {
        state.show = "none"
        text = `\n[Error: Character name not specified. Use the "do" or "say" modes. Alternatively, use "story" mode with the following format without quotes: "charactername #hashtag"]\n`
        return { text }
      } else {
        state.show = "none"
        text = `\n[Error: Character ${state.characterName} does not exist. Type #setup to create this character.]\n`
        return { text }
      }
    }
  }

  text = processCommandSynonyms(command, commandName, rollSynonyms, doRoll)
  if (text == null) text = processCommandSynonyms(command, commandName, createSynonyms, doCreate)
  if (text == null) text = processCommandSynonyms(command, commandName, showCharactersSynonyms, doShowCharacters)
  if (text == null) text = processCommandSynonyms(command, commandName, removeCharacterSynonyms, doRemoveCharacter)
  if (text == null) text = processCommandSynonyms(command, commandName, bioSynonyms, doBio)
  if (text == null) text = processCommandSynonyms(command, commandName, setClassSynonyms, doSetClass)
  if (text == null) text = processCommandSynonyms(command, commandName, setSummarySynonyms, doSetSummary)
  if (text == null) text = processCommandSynonyms(command, commandName, setHealthSynonyms, doSetHealth)
  if (text == null) text = processCommandSynonyms(command, commandName, healSynonyms, doHeal)
  if (text == null) text = processCommandSynonyms(command, commandName, damageSynonyms, doDamage)
  if (text == null) text = processCommandSynonyms(command, commandName, restSynonyms, doRest)
  if (text == null) text = processCommandSynonyms(command, commandName, setExperienceSynonyms, doSetExperience)
  if (text == null) text = processCommandSynonyms(command, commandName, addExperienceSynonyms, doAddExperience)
  if (text == null) text = processCommandSynonyms(command, commandName, levelUpSynonyms, doLevelUp)
  if (text == null) text = processCommandSynonyms(command, commandName, showStatsSynonym, doShowStats)
  if (text == null) text = processCommandSynonyms(command, commandName, setStatSynonyms, doSetStat)
  if (text == null) text = processCommandSynonyms(command, commandName, setSpellStatSynonyms, doSetSpellStat)
  if (text == null) text = processCommandSynonyms(command, commandName, showSkillsSynonyms, doShowSkills)
  if (text == null) text = processCommandSynonyms(command, commandName, setSkillSynonyms, doSetSkill)
  if (text == null) text = processCommandSynonyms(command, commandName, checkSynonyms, doCheck)
  if (text == null) text = processCommandSynonyms(command, commandName, trySynonyms, doTry)
  if (text == null) text = processCommandSynonyms(command, commandName, showNotesSynonyms, doShowNotes)
  if (text == null) text = processCommandSynonyms(command, commandName, noteSynonyms, doNote)
  if (text == null) text = processCommandSynonyms(command, commandName, clearNotesSynonyms, doClearNotes)
  if (text == null) text = processCommandSynonyms(command, commandName, eraseNoteSynonyms, doEraseNote)
  if (text == null) text = processCommandSynonyms(command, commandName, takeSynonyms, doTake)
  if (text == null) text = processCommandSynonyms(command, commandName, dropSynonyms, doDrop)
  if (text == null) text = processCommandSynonyms(command, commandName, giveSynonyms, doGive)
  if (text == null) text = processCommandSynonyms(command, commandName, renameItemSynonyms, doRenameItem)
  if (text == null) text = processCommandSynonyms(command, commandName, inventorySynonyms, doInventory)
  if (text == null) text = processCommandSynonyms(command, commandName, clearInventorySynonyms, doClearInventory)
  if (text == null) text = processCommandSynonyms(command, commandName, learnSpellSynonyms, doLearnSpell)
  if (text == null) text = processCommandSynonyms(command, commandName, forgetSpellSynonyms, doForgetSpell)
  if (text == null) text = processCommandSynonyms(command, commandName, castSpellSynonyms, doCastSpell)
  if (text == null) text = processCommandSynonyms(command, commandName, clearSpellsSynonyms, doClearSpells)
  if (text == null) text = processCommandSynonyms(command, commandName, spellbookSynonyms, doSpellbook)
  if (text == null) text = processCommandSynonyms(command, commandName, removeStatSynonyms, doRemoveStat)
  if (text == null) text = processCommandSynonyms(command, commandName, clearStatsSynonyms, doClearStats)
  if (text == null) text = processCommandSynonyms(command, commandName, removeSkillSynonyms, doRemoveSkill)
  if (text == null) text = processCommandSynonyms(command, commandName, clearSkillsSynonyms, doClearSkills)
  if (text == null) text = processCommandSynonyms(command, commandName, attackSynonyms, doAttack)
  if (text == null) text = processCommandSynonyms(command, commandName, setMeleeStatSynonyms, doSetMeleeStat)
  if (text == null) text = processCommandSynonyms(command, commandName, setrangedStatSynonyms, doSetRangedStat)
  if (text == null) text = processCommandSynonyms(command, commandName, buySynonyms, doBuy)
  if (text == null) text = processCommandSynonyms(command, commandName, sellSynonyms, doSell)
  if (text == null) text = processCommandSynonyms(command, commandName, resetSynonyms, doReset)
  if (text == null) text = processCommandSynonyms(command, commandName, setAutoXpSynonyms, doSetAutoXp)
  if (text == null) text = processCommandSynonyms(command, commandName, showAutoXpSynonyms, doShowAutoXp)
  if (text == null) text = processCommandSynonyms(command, commandName, setDefaultDifficultySynonyms, doSetDefaultDifficulty)
  if (text == null) text = processCommandSynonyms(command, commandName, showDefaultDifficultySynonyms, doShowDefaultDifficulty)
  if (text == null) text = processCommandSynonyms(command, commandName, generateNameSynonyms, doGenerateName)
  if (text == null) text = processCommandSynonyms(command, commandName, helpSynonyms, doHelp)
  if (text == null) {
    var character = getCharacter()
    var statNames = []
    character.stats.forEach(x => {
      statNames.push(x.name.toLowerCase())
    })
    character.skills.forEach(x => {
      statNames.push(x.name.toLowerCase())
    })

    text = processCommandSynonyms(command, commandName, statNames, doFlipCommandAbility)
  }

  return { text }
}

function handleCreateStep(text) {
  state.show = "create"

  if (/^\s*>.*says? ".*/.test(text)) {
    text = text.replace(/^\s*>.*says? "/, "")
    text = text.replace(/"\s*$/, "")
  } else if (/^\s*>\s.*/.test(text)) {
    text = text.replace(/\s*> /, "")
    for (var i = 0; i < info.characters.length; i++) {
      var matchString = info.characters[i] == "" ? "You " : `${info.characters[i]} `
      if (text.startsWith(matchString)) {
        text = text.replace(matchString, "")
        break
      }
    }
    text = text.replace(/\.?\s*$/, "")
  } else {
    text = text.replace(/^\s+/, "")
  }

  if (text.toLowerCase() == "q") {
    state.createStep = null
    return text
  }

  switch (state.createStep) {
    case 0:
      text = text.toLowerCase();
      if (text.startsWith("y")) state.createStep = 100
      else if (text.startsWith("n")) state.createStep++
      break
    case 1:
      if (text.length > 0) {
        state.tempCharacter.className = text
        state.createStep++

        state.statDice = []
        for (var i = 0; i < 6; i++) {
          var dice = []
          for (var j = 0; j < 4; j++) {
            dice.push(parseInt(calculateRoll("d6")))
          }
          dice.sort(function(a, b) {
            return b - a;
          });
          dice.splice(3, 1)
          state.statDice.push(dice[0] + dice[1] + dice[2])
        }
        state.statDice.sort(function(a, b) {
          return b - a
        })
      }
      return text
      break
    case 2:
      if (text.length > 0) {
        var choices = text.split(/\D+/)
        choices = [...new Set(choices)];
        if (choices.length != 6) break

        for (var i = 0; i < 6; i++) {
          const stat = {
            name: "temp",
            value: state.statDice[i]
          }
          switch (parseInt(choices[i])) {
            case 1:
              stat.name = "Strength"
              break
            case 2:
              stat.name = "Dexterity"
              break
            case 3:
              stat.name = "Constitution"
              break
            case 4:
              stat.name = "Intelligence"
              break
            case 5:
              stat.name = "Wisdom"
              break
            case 6:
              stat.name = "Charisma"
              break
            default:
              return text
          }
          state.tempCharacter.stats.push(stat)
        }

        state.createStep++
      }
      return text
    case 3:
      if (text.length == 0) state.createStep++
      if (!isNaN(text)) {
        switch (parseInt(text)) {
          case 1:
            state.tempCharacter.spellStat = "Intelligence"
            break
          case 2:
            state.tempCharacter.spellStat = "Wisdom"
            break
          case 3:
            state.tempCharacter.spellStat = "Charisma"
            break
          case 4:
            state.tempCharacter.spellStat = null
        }
        state.createStep++
      }
      return text
    case 4:
      if (text.length > 0) {
        state.tempCharacter.summary = text
        state.createStep = 500
      }
      return text
    case 100:
      if (!isNaN(text)) {
        state.createStep = 500

        switch (parseInt(text)) {
          case 1:
            state.tempCharacter.className = "Fighter"
            state.tempCharacter.stats = [{name: "Strength", value: 16}, {name: "Dexterity", value: 9}, {name: "Constitution", value: 15}, {name: "Intelligence", value: 11}, {name: "Wisdom", value: 13}, {name: "Charisma", value: 14}]
            state.tempCharacter.inventory.push({name: "Greatsword", quantity: 1}, {name: "Javelin", quantity: 2})
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "History").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Persuasion").modifier = 2;
            state.tempCharacter.summary = "A skilled melee warrior specializing in weapons and armor."
            break
          case 2:
            state.tempCharacter.className = "Cleric"
            state.tempCharacter.stats = [{name: "Strength", value: 14}, {name: "Dexterity", value: 12}, {name: "Constitution", value: 14}, {name: "Intelligence", value: 11}, {name: "Wisdom", value: 18}, {name: "Charisma", value: 14}]
            state.tempCharacter.inventory.push({name: "Mace", quantity: 1}, {name: "Light Crossbow", quantity: 1}, {name: "Bolts", quantity: 10})
            state.tempCharacter.spells = ["Spiritual Weapon", "Mass Healing Word"]
            state.tempCharacter.spellStat = "Wisdom"
            state.tempCharacter.skills.find((element) => element.name == "Insight").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Medicine").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Religion").modifier = 2;
            state.tempCharacter.summary = "A follower of a deity that can call on divine power."
            break
          case 3:
            state.tempCharacter.className = "Rogue"
            state.tempCharacter.stats = [{name: "Strength", value: 8}, {name: "Dexterity", value: 16}, {name: "Constitution", value: 12}, {name: "Intelligence", value: 13}, {name: "Wisdom", value: 10}, {name: "Charisma", value: 16}]
            state.tempCharacter.inventory.push({name: "Shortsword", quantity: 1}, {name: "Dagger", quantity: 1}, {name: "Hand Crossbow", quantity: 1}, {name: "Bolts", quantity: 10})
            state.tempCharacter.skills.find((element) => element.name == "Acrobatics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Deception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Investigation").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Performance").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Sleight of Hand").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Stealth").modifier = 2;
            state.tempCharacter.summary = "An expert in stealth, subterfuge, and exploitation."
            break
          case 4:
            state.tempCharacter.className = "Ranger"
            state.tempCharacter.stats = [{name: "Strength", value: 12}, {name: "Dexterity", value: 17}, {name: "Constitution", value: 13}, {name: "Intelligence", value: 10}, {name: "Wisdom", value: 15}, {name: "Charisma", value: 8}]
            state.tempCharacter.inventory.push({name: "Shortsword", quantity: 1}, {name: "Longbow", quantity: 1}, {name: "Arrows", quantity: 20})
            state.tempCharacter.skills.find((element) => element.name == "Animal Handling").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Nature").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Stealth").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Survival").modifier = 2;
            state.tempCharacter.summary = "A talented hunter adept in tracking, survival, and animal handling."
            break
          case 5:
            state.tempCharacter.className = "Barbarian"
            state.tempCharacter.stats = [{name: "Strength", value: 17}, {name: "Dexterity", value: 13}, {name: "Constitution", value: 15}, {name: "Intelligence", value: 8}, {name: "Wisdom", value: 12}, {name: "Charisma", value: 10}]
            state.tempCharacter.inventory.push({name: "Greataxe", quantity: 1}, {name: "Javelin", quantity: 1})
            state.tempCharacter.skills.find((element) => element.name == "Animal Handling").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Intimidation").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.summary = "Combat expert focused on brute strength and raw fury."
            break
          case 6:
            state.tempCharacter.className = "Bard"
            state.tempCharacter.stats = [{name: "Strength", value: 8}, {name: "Dexterity", value: 15}, {name: "Constitution", value: 14}, {name: "Intelligence", value: 13}, {name: "Wisdom", value: 10}, {name: "Charisma", value: 15}]
            state.tempCharacter.inventory.push({name: "Rapier", quantity: 1}, {name: "Lute", quantity: 1})
            state.tempCharacter.spells = ["Vicious Mockery", "Charm Person", "Healing Word"]
            state.tempCharacter.spellStat = "Charisma"
            state.tempCharacter.skills.find((element) => element.name == "Acrobatics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Deception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Performance").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Sleight of Hand").modifier = 2;
            state.tempCharacter.summary = "A musician that can transform song and word into magic."
            break
          case 7:
            state.tempCharacter.className = "Druid"
            state.tempCharacter.stats = [{name: "Strength", value: 11}, {name: "Dexterity", value: 13}, {name: "Constitution", value: 16}, {name: "Intelligence", value: 14}, {name: "Wisdom", value: 16}, {name: "Charisma", value: 9}]
            state.tempCharacter.spells = ["Druidcraft", "Animal Friendship", "Healing Word"]
            state.tempCharacter.spellStat = "Wisdom"
            state.tempCharacter.inventory.push({name: "Quarterstaff", quantity: 1}, {name: "Small Knife", quantity: 1})
            state.tempCharacter.skills.find((element) => element.name == "Arcana").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "History").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Medicine").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Nature").modifier = 2;
            state.tempCharacter.summary = "Commands the natural world to cast spells and harness its power."
            break
          case 8:
            state.tempCharacter.className = "Monk"
            state.tempCharacter.stats = [{name: "Strength", value: 16}, {name: "Dexterity", value: 14}, {name: "Constitution", value: 14}, {name: "Intelligence", value: 8}, {name: "Wisdom", value: 17}, {name: "Charisma", value: 10}]
            state.tempCharacter.inventory.push({name: "Dart", quantity: 5}, {name: "Shortsword", quantity: 1})
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Deception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Sleight of Hand").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Stealth").modifier = 2;
            state.tempCharacter.summary = "A martial artist who has mastered melee and unarmed combat."
            break
          case 9:
            state.tempCharacter.className = "Paladin"
            state.tempCharacter.stats = [{name: "Strength", value: 16}, {name: "Dexterity", value: 9}, {name: "Constitution", value: 15}, {name: "Intelligence", value: 11}, {name: "Wisdom", value: 13}, {name: "Charisma", value: 14}]
            state.tempCharacter.spells = ["Thunderous Smite", "Divine Favor", "Cure Wounds"]
            state.tempCharacter.spellStat = "Charisma"
            state.tempCharacter.inventory.push({name: "Longsword", quantity: 1}, {name: "Javelin", quantity: 2})
            state.tempCharacter.skills.find((element) => element.name == "Athletics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "History").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Insight").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Persuasion").modifier = 2;
            state.tempCharacter.summary = "A virtuous holy warrior with expertise in armor and mysticism."
            break
          case 10:
            state.tempCharacter.className = "Wizard"
            state.tempCharacter.stats = [{name: "Strength", value: 10}, {name: "Dexterity", value: 15}, {name: "Constitution", value: 14}, {name: "Intelligence", value: 16}, {name: "Wisdom", value: 12}, {name: "Charisma", value: 8}]
            state.tempCharacter.inventory.push({name: "Quarterstaff", quantity: 1}, {name: "Spellbook", quantity: 1})
            state.tempCharacter.spells = ["Fire Bolt", "Mage Hand", "Magic Missile"]
            state.tempCharacter.spellStat = "Intelligence"
            state.tempCharacter.skills.find((element) => element.name == "Arcana").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Insight").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Investigation").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Religion").modifier = 2;
            state.tempCharacter.summary = "An expert in magic ability who found their power through arcane knowledge."
            break
          case 11:
            state.tempCharacter.className = "Sorcerer"
            state.tempCharacter.stats = [{name: "Strength", value: 8}, {name: "Dexterity", value: 16}, {name: "Constitution", value: 13}, {name: "Intelligence", value: 11}, {name: "Wisdom", value: 12}, {name: "Charisma", value: 15}]
            state.tempCharacter.inventory.push({name: "Dagger", quantity: 1}, {name: "Bag of Holding", quantity: 1})
            state.tempCharacter.spells = ["Ray of Frost", "Minor Illusion", "Shield"]
            state.tempCharacter.spellStat = "Charisma"
            state.tempCharacter.skills.find((element) => element.name == "Arcana").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Intimidation").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Perception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Persuasion").modifier = 2;
            state.tempCharacter.summary = "A masterful spellcaster deriving their power from an innate source."
            break
          case 12:
            state.tempCharacter.className = "Warlock"
            state.tempCharacter.stats = [{name: "Strength", value: 9}, {name: "Dexterity", value: 13}, {name: "Constitution", value: 15}, {name: "Intelligence", value: 14}, {name: "Wisdom", value: 11}, {name: "Charisma", value: 16}]
            state.tempCharacter.spells = ["Eldritch Blast", "Witch Bolt", "Thunderwave"]
            state.tempCharacter.spellStat = "Charisma"
            state.tempCharacter.inventory.push({name: "Dagger", quantity: 1}, {name: "Orb", quantity: 1})
            state.tempCharacter.skills.find((element) => element.name == "Arcana").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Deception").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "History").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Religion").modifier = 2;
            state.tempCharacter.summary = "A magic user granted ability by a pact with a powerful patron."
            break
          case 13:
            state.tempCharacter.className = "Artificer"
            state.tempCharacter.stats = [{name: "Strength", value: 10}, {name: "Dexterity", value: 14}, {name: "Constitution", value: 14}, {name: "Intelligence", value: 17}, {name: "Wisdom", value: 12}, {name: "Charisma", value: 8}]
            state.tempCharacter.inventory.push({name: "Shortsword", quantity: 1}, {name: "Hand Crossbow", quantity: 1}, {name: "Bolts", quantity: 20})
            state.tempCharacter.skills.find((element) => element.name == "Acrobatics").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Performance").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Persuasion").modifier = 2;
            state.tempCharacter.skills.find((element) => element.name == "Arcana").modifier = 2;
            state.tempCharacter.summary = "An inventor and alchemist capable of imbuing objects with magic."
            break
        }
      }
      return text
    case 500:
      state.show = null
      state.createStep = null

      var character = getCharacter(state.tempCharacter.name)
      character.className = state.tempCharacter.className
      character.experience = 0
      character.stats = [...state.tempCharacter.stats]
      character.inventory = [...state.tempCharacter.inventory]
      character.skills = [...state.tempCharacter.skills]
      character.spells = [...state.tempCharacter.spells]
      character.health = getHealthMax()
      character.spellStat = state.tempCharacter.spellStat
      character.meleeStat = state.tempCharacter.meleeStat
      character.rangedStat = state.tempCharacter.rangedStat
      character.summary = state.tempCharacter.summary
      break
  }
  return text
}

function resetTempCharacterSkills() {
  state.tempCharacter.skills = [
    {name: "Acrobatics", stat: "Dexterity", modifier: 0},
    {name: "Animal Handling", stat: "Wisdom", modifier: 0},
    {name: "Arcana", stat: "Intelligence", modifier: 0},
    {name: "Athletics", stat: "Strength", modifier: 0},
    {name: "Deception", stat: "Charisma", modifier: 0},
    {name: "History", stat: "Intelligence", modifier: 0},
    {name: "Insight", stat: "Wisdom", modifier: 0},
    {name: "Intimidation", stat: "Charisma", modifier: 0},
    {name: "Investigation", stat: "Intelligence", modifier: 0},
    {name: "Medicine", stat: "Wisdom", modifier: 0},
    {name: "Nature", stat: "Intelligence", modifier: 0},
    {name: "Perception", stat: "Wisdom", modifier: 0},
    {name: "Performance", stat: "Charisma", modifier: 0},
    {name: "Persuasion", stat: "Charisma", modifier: 0},
    {name: "Religion", stat: "Intelligence", modifier: 0},
    {name: "Sleight of Hand", stat: "Dexterity", modifier: 0},
    {name: "Stealth", stat: "Dexterity", modifier: 0},
    {name: "Survival", stat: "Wisdom", modifier: 0},
  ]
}

function processCommandSynonyms(command, commandName, synonyms, func) {
  text = null
  synonyms.forEach(x => {
    if (commandName == x || commandName == x + "s") {
      text = func(command)
    }
  })
  return text
}

function init() {
  if (state.tempCharacter == null) {
    state.tempCharacter = {
      name: "template",
      className: "adventurer",
      summary: "Template character not meant to be used.",
      inventory: [],
      spells: [],
      stats: [],
      spellStat: null,
      meleeStat: null,
      rangedStat: null,
      experience: 0,
      health: 10
    }
  }
  if (state.characters == null) state.characters = []
  if (state.notes == null) state.notes = []
  if (state.autoXp == null) state.autoXp = 0
  if (state.defaultDifficulty == null) state.defaultDifficulty = 10
  state.show = null
  state.prefix = null
  state.critical = null
}

function doRoll(command) {
  var rollType = searchArgument(command, /^(advantage)|(disadvantage)$/gi)
  if (rollType == null) rollType = "normal"

  var dice = searchArgument(command, /^.*\d.*$/gi)
  if (dice == null) dice = "d20"
  dice = formatRoll(dice)

  var roll = calculateRoll(dice)
  if (rollType == "advantage") roll = Math.max(roll, calculateRoll(dice))
  if (rollType == "disadvantage") roll = Math.min(roll, calculateRoll(dice))
  
  state.show = "none"

  var text = `\n[You roll a ${dice}`
  if (rollType != "normal") text += ` with ${rollType}`
  text += `. Score: ${roll}`
    
  if (roll == 20) text += " Critical Success!"
  else if (roll == 1) text += " Critical Failure!"

  text += "]\n"
  return text
}

function doCreate(command) {
  if (!hasCharacter(state.characterName)) createCharacter(state.characterName)
  var character = getCharacter()

  state.createStep = 0
  state.tempCharacter.name = character.name
  resetTempCharacterSkills()
  state.tempCharacter.stats = []
  state.tempCharacter.spells = []
  state.tempCharacter.inventory = [{name: "Gold", quantity: 50}, {name: "Rope", quantity: 1}, {name: "Ration", quantity: 10}, {name: "Torch", quantity: 1}]
  state.tempCharacter.spellStat = null
  state.tempCharacter.meleeStat = "Strength"
  state.tempCharacter.rangedStat = "Dexterity"
  
  state.show = "create"
  return " "
}

function doBio(command) {
  state.show = "bio"
  return " "
}

function doSetStat(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var arg1 = clamp(parseInt(getArgument(command, 1)), 1, 100)
  var possessiveName = getPossessiveName(character.name)

  const stat = {
    name: arg0,
    value: arg1
  }

  var index = character.stats.findIndex((element) => element.name.toLowerCase() == stat.name.toLowerCase())
  if (index == -1) {
    character.stats.push(stat)
  } else {
    var existingStat = character.stats[index]
    existingStat.value = parseInt(stat.value)
  }

  state.show = "none"
  return `\n[${possessiveName} ${toTitleCase(arg0)} ability is now ${arg1}.]\n`
}

function doSetSpellStat(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  character.spellStat = arg0

  state.show = "none"
  return `\nSpellcasting Ability is set to ${arg0}\n`
}

function doSetMeleeStat(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  character.meleeStat = arg0

  state.show = "none"
  return `\nMelee Ability is set to ${arg0}\n`
}

function doSetRangedStat(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  character.rangedStat = arg0

  state.show = "none"
  return `\nRanged Ability is set to ${arg0}\n`
}

function doSetAutoXp(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  if (isNaN(arg0)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }

  state.autoXp = Math.max(0, arg0)

  state.show = "none"
  return state.autoXp <= 0 ? `\n[Auto XP is disabled]\n` : `\n[Auto XP is set to ${state.autoXp}]\n`
}

function doShowAutoXp(command) {
  state.show = "none"
  return state.autoXp <= 0 ? `\n[Auto XP is disabled]\n` : `\n[Auto XP is set to ${state.autoXp}]\n`
}

function doSetDefaultDifficulty(command) {
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless"]
  const difficultyScores = [30, 25, 20, 15, 10, 5]

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficulty = getArgument(command, 0)
  if (difficulty == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var difficultyIndex = difficultyNames.indexOf(difficulty)
  if (difficultyIndex >= 0 && difficultyIndex < difficultyNames.length) {
    difficulty = difficultyScores[difficultyIndex]
  }

  state.defaultDifficulty = Math.max(0, difficulty)

  state.show = "none"
  return `\n[The default difficulty is set to ${state.defaultDifficulty}]\n`
}

function doShowDefaultDifficulty(command) {
  state.show = "none"
  return `\n[The default difficulty is set to ${state.defaultDifficulty}]\n`
}

function doSetSkill(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var arg1 = getArgument(command, 1)
  if (arg1 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var arg2 = getArgument(command, 2)
  if (arg2 == null) {
    arg2 = (clamp(parseInt(arg1, 1, 100)))
    arg1 = null
  } else {
    arg2 = clamp(parseInt(arg2), 1, 100)
  }

  var possessiveName = getPossessiveName(character.name)

  const skill = {
    name: arg0,
    stat: arg1,
    modifier: arg2
  }

  var index = character.skills.findIndex((element) => element.name.toLowerCase() == skill.name.toLowerCase())
  if (index == -1) {
    if (arg1 == null) {
      state.show = "none"
      return "\n[Error: New skills must have an ability specified. See #help]\n"
    }
    
    character.skills.push(skill)
  } else {
    var existingSkill = character.skills[index]
    existingSkill.modifier = parseInt(skill.modifier)
    if (arg1 != null) existingSkill.stat = skill.stat
  }

  state.show = "none"
  return `\n[${possessiveName} ${toTitleCase(arg0)} skill is now ${arg2 >= 0 ? "+" + arg2 : "-" + arg2} and based on ${toTitleCase(arg1)}.]\n`
}

function doSetExperience(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.experience = arg0

  state.show = "none"
  return `\n[${possessiveName} experience is set to ${character.experience}]\n`
}

function doAddExperience(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  arg0 = parseInt(arg0)

  var possessiveName = getPossessiveName(character.name)

  var level = getLevel(character.experience)
  character.experience += arg0
  var newLevel = getLevel(character.experience)

  if (newLevel > level) {
    state.show = "none"
    return `\n[${possessiveName} experience is increased to ${character.experience}. LEVEL UP! Level: ${newLevel}, Health Max: ${getHealthMax()}]\n`
  }

  state.show = "none"
  return `\n[${possessiveName} experience is increased to ${character.experience}.]\n`
}

function doLevelUp(command) {
  var character = getCharacter()
  var level = getLevel(character.experience)
  var experience = level >= levelSplits.length ? 0 : levelSplits[level] - character.experience
  return doAddExperience(`${command} ${experience}`)
}

function doSetClass(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.className = arg0

  state.show = "none"
  return `\n[${possessiveName} class is set to "${character.className}".]\n`
}

function doSetSummary(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.summary = arg0

  state.show = "none"
  return `\n[${possessiveName} summary is set.]\n`
}

function doSetHealth(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.health = arg0
  character.health = clamp(character.health, 0, getHealthMax())

  state.show = "none"
  return `\n[${possessiveName} health is set to ${character.health} health]\n`
}

function doHeal(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  arg0 = parseInt(arg0)

  var haveWord = character.name == "You" ? "have" : "has"
  var areWord = character.name == "You" ? "are" : "is"

  if (character.health >= getHealthMax()) {
    state.show = "none"
    return `\n[${character.name} ${areWord} at maximum health]\n`
  }

  character.health = character.health + arg0
  character.health = clamp(character.health, 0, getHealthMax())

  state.show = "none"
  return `\n[${character.name} ${haveWord} been healed by ${arg0} hp to ${character.health} health]\n`
}

function doDamage(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var haveWord = character.name == "You" ? "have" : "has"

  character.health -= arg0
  character.health = clamp(character.health, 0, getHealthMax())

  state.show = "none"
  return `\n[${character.name} ${haveWord} been damaged for ${arg0} hp with ${character.health} remaining].${character.health == 0 ? " You are unconcious" : ""}\n`
}

function doRest(command) {
  var commandName = getCommandName(command)
  state.characters.forEach(function(character) {
    if (commandName.toLowerCase() == "shortrest") {
      var max = getHealthMax(character)
      character.health += Math.floor(max / 2)
      if (character.health > max) character.health = max
    } else {
      character.health = getHealthMax(character)
    }

    state.show = "none"
  })
  return `\n[All characters have rested and feel rejuvinated]\n`
}

function doFlipCommandAbility(command) {
  var ability = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) return;
  var remainder = getArgumentRemainder(command, 1)

  command = `${arg0} "${ability}"${remainder == null ? "" : " " + remainder}`
  text = processCommandSynonyms(command, arg0, checkSynonyms, doCheck)
  if (text == null) text = processCommandSynonyms(command, arg0, trySynonyms, doTry)
  return text
}

function doCheck(command) {
  const advantageNames = ["normal", "advantage", "disadvantage"]
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless"]
  const difficultyScores = [30, 25, 20, 15, 10, 5]
  var character = getCharacter()

  var arg0 = null
  if (character.stats.length > 0) arg0 = searchArgument(command, statsToOrPattern(character.stats))
  if (arg0 == null && character.skills.length > 0) arg0 = searchArgument(command, statsToOrPattern(character.skills))
  if (arg0 == null) arg0 = "Ability"
  arg0 = toTitleCase(arg0)
  
  var arg1 = searchArgument(command, arrayToOrPattern(advantageNames))
  if (arg1 == null) arg1 = "normal"
  else arg1 = arg1.toLowerCase()

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var arg2 = searchArgument(command, arrayToOrPattern(difficultyPatternNames))
  if (arg2 == null) arg2 = state.defaultDifficulty
  else arg2 = arg2.toLowerCase()

  var die1 = calculateRoll("1d20")
  var die2 = calculateRoll("1d20")
  var score = arg1 == "advantage" ? Math.max(die1, die2) : arg1 == "disadvantage" ? Math.min(die1, die2) : die1

  var modifier = 0

  var skill = character.skills.find(x => x.name.toLowerCase() == arg0.toLowerCase())
  if (skill != null) {
    var stat = character.stats.find((element) => element.name.toLowerCase() == skill.stat.toLowerCase())
    if (stat != null) modifier = skill.modifier + getModifier(stat.value)
  } else {
    var stat = character.stats.find((element) => element.name.toLowerCase() == arg0.toLowerCase())
    if (stat != null) modifier = getModifier(stat.value)
  }

  var target = 15
  if (/^\d+$/.test(arg2)) target = arg2
  else {
    var targetIndex = difficultyNames.indexOf(arg2)
    if (targetIndex >= 0 && targetIndex < difficultyNames.length) target = difficultyScores[targetIndex]
  }
  
  state.show = "none"

  var dieText = arg1 == "advantage" || arg1 == "disadvantage" ? `${arg1}(${die1},${die2})` : die1

  var text
  if (score == 20) text = `\n[${arg0} check DC: ${target} roll: ${dieText}. Critical Success!]\n`
  else if (score == 1) text = `\n[${arg0} check DC: ${target} roll: ${dieText}. Critical Failure!]\n`
  else if (modifier != 0) text = `\n[${arg0} check DC: ${target} roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${score + modifier}. ${score + modifier >= target ? "Success!" : "Failure!"}]\n`
  else text = `\n[${arg0} check DC: ${target} roll: ${dieText}. ${score >= target ? "Success!" : "Failure!"}]\n`
  return text
}

function doTry(command) {
  const advantageNames = ["normal", "advantage", "disadvantage"]
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless"]
  const difficultyScores = [30, 25, 20, 15, 10, 5]
  var character = getCharacter()
  var textIndex = 3
  var failword = character.name == "You" ? "fail" : "fails"

  var arg0 = null
  if (character.stats.length > 0) arg0 = searchArgument(command, statsToOrPattern(character.stats))
  if (arg0 == null && character.skills.length > 0) arg0 = searchArgument(command, statsToOrPattern(character.skills))
  if (arg0 == null) {
    arg0 = "Ability"
    textIndex--
  }
  arg0 = toTitleCase(arg0)
  
  var arg1 = searchArgument(command, arrayToOrPattern(advantageNames))
  if (arg1 == null) {
    arg1 = "normal"
    textIndex--
  }
  else arg1 = arg1.toLowerCase()

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var arg2 = searchArgument(command, arrayToOrPattern(difficultyPatternNames))
  if (arg2 == null) {
    arg2 = state.defaultDifficulty
    textIndex--
  }
  else arg2 = arg2.toLowerCase()

  var arg3 = getArgumentRemainder(command, textIndex)
  var toMatches = arg3.match(/^to\s+/gi)
  if (toMatches != null) arg3 = arg3.substring(toMatches[0].length)
  if (!/^.*(\.|!|\?)$/gi.test(arg3)) arg3 += "."

  var die1 = calculateRoll("1d20")
  var die2 = calculateRoll("1d20")
  var score = arg1 == "advantage" ? Math.max(die1, die2) : arg1 == "disadvantage" ? Math.min(die1, die2) : die1

  var modifier = 0

  var skill = character.skills.find(x => x.name.toLowerCase() == arg0.toLowerCase())
  if (skill != null) {
    var stat = character.stats.find(x => x.name.toLowerCase() == skill.stat.toLowerCase())
    if (stat != null) modifier = skill.modifier + getModifier(stat.value)
  } else {
    var stat = character.stats.find(x => x.name.toLowerCase() == arg0.toLowerCase())
    if (stat != null) modifier = getModifier(stat.value)
  }

  var target = 15
  if (/^\d+$/.test(arg2)) target = arg2
  else {
    var targetIndex = difficultyNames.indexOf(arg2)
    if (targetIndex >= 0 && targetIndex < difficultyNames.length) target = difficultyScores[targetIndex]
  }

  var dieText = arg1 == "advantage" || arg1 == "disadvantage" ? `${arg1}(${die1},${die2})` : die1

  state.show = "prefix"
  if (score == 20) state.prefix = `\n[${arg0} check DC: ${target} roll: ${dieText}]\n`
  else if (score == 1) state.prefix = `\n[${arg0} check DC: ${target} roll: ${dieText}]\n`
  else if (modifier != 0) state.prefix = `\n[${arg0} check DC: ${target} roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${score + modifier}. ${score + modifier >= target ? "Success!" : "Failure!"}]\n`
  else state.prefix = `\n[${arg0} check DC: ${target} roll: ${dieText}. ${score >= target ? "Success!" : "Failure!"}]\n`
  var text = `\n${character.name} ${score + modifier >= target ? "successfully" : failword + " to"} ${arg3}`
  if (score == 20) text += " Critical success! Your action was extremely effective."
  else if (score == 1) text += " Critical failure! There are dire consequences for your action."
  
  if (score + modifier >= target || score == 20) text += addXpToAll(Math.floor(state.autoXp * clamp(target, 1, 20) / 20)) + "\n"
  return text
}

function doAttack(command) {
  const advantageNames = ["normal", "advantage", "disadvantage"]
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless"]
  const difficultyScores = [30, 25, 20, 15, 10, 5]
  var character = getCharacter()
  var textIndex = 3
  var missWord = character.name == "You" ? "miss" : "misses"
  var tryWord = character.name == "You" ? "try" : "tries"

  var statText = null
  statText = searchArgument(command, /ranged/gi)
  if (statText == null) {
    statText = character.meleeStat
    textIndex--
  } else if (statText.toLowerCase() == "ranged") statText = character.rangedStat
  statText = toTitleCase(statText)
  
  var advantageText = searchArgument(command, arrayToOrPattern(advantageNames))
  if (advantageText == null) {
    advantageText = "normal"
    textIndex--
  }
  else advantageText = advantageText.toLowerCase()

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficultyText = searchArgument(command, arrayToOrPattern(difficultyPatternNames))
  if (difficultyText == null) {
    difficultyText = state.defaultDifficulty
    textIndex--
  }
  else difficultyText = difficultyText.toLowerCase()

  var targetText = getArgumentRemainder(command, textIndex)
  if (targetText == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var toMatches = targetText.match(/^to\s+/gi)
  if (toMatches != null) targetText = targetText.substring(toMatches[0].length)
  targetText = stripPunctuation(targetText)

  var die1 = calculateRoll("1d20")
  var die2 = calculateRoll("1d20")
  var score = advantageText == "advantage" ? Math.max(die1, die2) : advantageText == "disadvantage" ? Math.min(die1, die2) : die1

  var modifier = 0

  var stat = character.stats.find(x => x.name.toLowerCase() == statText.toLowerCase())
  if (stat != null) modifier = getModifier(stat.value)

  var targetRoll = 15
  if (/^\d+$/.test(difficultyText)) targetRoll = difficultyText
  else {
    var targetIndex = difficultyNames.indexOf(difficultyText)
    if (targetIndex >= 0 && targetIndex < difficultyNames.length) targetRoll = difficultyScores[targetIndex]
  }

  var dieText = advantageText == "advantage" || advantageText == "disadvantage" ? `${advantageText}(${die1},${die2})` : die1

  state.show = "prefix"
  
  if (score == 20) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}]\n`
  else if (score == 1) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}]\n`
  else if (modifier != 0) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${score + modifier}. ${score + modifier >= targetRoll ? "Success!" : "Failure!"}]\n`
  else state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}. ${score >= targetRoll ? "Success!" : "Failure!"}]\n`

  var text
  if (score + modifier >= targetRoll) text = `\n${character.name} successfully hit ${targetText}!`
  else text = `\n${character.name} ${tryWord} to hit ${targetText} ${character.name} ${missWord}!`

  if (score == 20) text += " Critical success! Your attack is exceptionally damaging!"
  else if (score == 1) text += " Critical failure! Your attack missed in a spectacular way!"

  if (score + modifier >= targetRoll || score == 20) text += addXpToAll(Math.floor(state.autoXp * clamp(targetRoll, 1, 20) / 20))
  return text + "\n"
}

function doNote(command) {
  var arg0 = getArgumentRemainder(command, 0)
  
  if (arg0 != null && arg0.length > 0) {
    state.notes.push(arg0)
    state.show = "none"
    return "\n[Note added successfully]\n"
  } else return doShowNotes(command)
}

function doShowNotes(command) {
  state.show = "showNotes"
  return " "
}

function doTake(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  const item = {
    quantity: isNaN(arg0) ? 1 : arg0,
    name: getArgumentRemainder(command, isNaN(arg0) ? 0 : 1).replace(/^((the)|(a)|(an))\s/, "").plural(true)
  }

  var commandName = getCommandName(command)
  var character = getCharacter()
  var haveWord = character.name == "You" ? "have" : "has"
  var displayItemName = item.name.plural(item.quantity == 1)

  if (item.quantity < 0) item.quantity = 1

  var text = "\n"
  if (item.quantity == 1) text += `${character.name} ${commandName} ${displayItemName.toLowerCase().startsWith("the ") ? "" : "the "}${displayItemName}.\n`
  else text += `${character.name} ${commandName} ${item.quantity} ${displayItemName}.\n`

  var index = character.inventory.findIndex((element) => element.name.toLowerCase() == item.name.toLowerCase())
  if (index == -1) {
    character.inventory.push(item)
  } else {
    var existingItem = character.inventory[index]
    existingItem.quantity = parseInt(existingItem.quantity) + parseInt(item.quantity)

    displayItemName = existingItem.name.plural(existingItem.quantity == 1)
    text += `${character.name} now ${haveWord} ${existingItem.quantity} ${displayItemName}.\n`
  }

  return text
}

function doDrop(command) {
  var character = getCharacter()
  var commandName = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var characterNameAdjustedCase = character.name == "You" ? "you" : character.name
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var haveWord = character.name == "You" ? "have" : "has"
  var tryWord = character.name == "You" ? "try" : "tries"

  var itemArgIndex = 0
  if (isNaN(arg0)) {
    if (allSynonyms.indexOf(arg0.toLowerCase() > -1)) {
      arg0 = Number.MAX_SAFE_INTEGER
      itemArgIndex++
    } else {
      arg0 = 1
    }
  } else {
    itemArgIndex++
  }

  const item = {
    quantity: arg0,
    name: getArgumentRemainder(command, itemArgIndex).replace(/^((the)|(a)|(an))\s/, "").plural(true)
  }

  var displayItemName = item.name.plural(item.quantity == 1)
  
  if (item.quantity < 0) item.quantity = 1

  var text = "\n"
  var index = character.inventory.findIndex((element) => element.name.toLowerCase() == item.name.toLowerCase())
  if (index == -1) {
    if (item.quantity == 1) text += `${character.name} ${tryWord} to ${commandName} the ${displayItemName}, but ${character.name} ${dontWord} have any.`
    else text += `${character.name} ${tryWord} to ${commandName} ${item.quantity == Number.MAX_SAFE_INTEGER ? arg0 : item.quantity} ${displayItemName}, but ${characterNameAdjustedCase} ${dontWord} have any.`
  } else {
    var existingItem = character.inventory[index]
  
    if (existingItem.quantity == 1) text = `\n${character.name} ${commandName} the ${displayItemName.plural(true)}.\n`
    else if (parseInt(item.quantity) >= parseInt(existingItem.quantity)) text = `${character.name} ${commandName} all ${existingItem.quantity} of the ${displayItemName}.`
    else text =  `\n${character.name} ${commandName} ${item.quantity} ${displayItemName}.\n`

    existingItem.quantity -= item.quantity
    if (existingItem.quantity <= 0) {
      existingItem.quantity = 0
      character.inventory.splice(index, 1)
    }
    if (existingItem.quantity > 0) {
      displayItemName = existingItem.name.plural(existingItem.quantity == 1)
      text += ` ${character.name} now ${haveWord} ${existingItem.quantity} ${displayItemName}.\n`
    }
  }

  return text
}

function doGive(command) {
  var character = getCharacter()
  var commandName = getCommandName(command)

  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var arg1 = getArgument(command, 1)
  if (arg1 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var foundAll = allSynonyms.indexOf(arg1) > -1

  const item = {
    quantity: !isNaN(arg1) ? arg1 : foundAll ? Number.MAX_SAFE_INTEGER : 1,
    name: getArgumentRemainder(command, isNaN(arg1) && !foundAll ? 1 : 2).replace(/^((the)|(a)|(an)|(of the))\s/, "").plural(true)
  }

  var otherCharacter = getCharacter(arg0)
  if (otherCharacter == null || otherCharacter.name == "You" && arg0.toLowerCase() != "you") {
    state.show = "none"
    return "\n[Error: Target character does not exist. See #characters]\n"
  }

  var characterNameAdjustedCase = character.name == "You" ? "you" : character.name
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var haveWord = character.name == "You" ? "have" : "has"
  var tryWord = character.name == "You" ? "try" : "tries"
  var otherHaveWord = otherCharacter.name == "You" ? "have" : "has"
  var otherNameAdjustedCase = otherCharacter.name == "You" ? "you" : otherCharacter.name
  var displayItemName = item.name.plural(item.quantity == 1)
  var characterQuantityText = ""

  if (item.quantity < 0) item.quantity = 1

  var text = "\n\n"

  var index = character.inventory.findIndex((element) => element.name.toLowerCase() == item.name.toLowerCase())
  if (index == -1) {
    if (item.quantity == 1) text += `${character.name} ${tryWord} to ${commandName.plural(true)} the ${displayItemName}, but ${characterNameAdjustedCase} ${dontWord} have any.`
    else text += `${character.name} ${tryWord} to ${commandName.plural(true)} ${item.quantity == Number.MAX_SAFE_INTEGER ? arg0 : item.quantity} ${displayItemName}, but ${characterNameAdjustedCase} ${dontWord} have any.`
    return text + "\n\n"
  } else {
    var existingItem = character.inventory[index]

    if (item.quantity >= existingItem.quantity) {
      item.quantity = existingItem.quantity
      existingItem.quantity = 0
      character.inventory.splice(index, 1)
    } else {
      existingItem.quantity -= item.quantity
    }

    if (existingItem.quantity > 0) {
      characterQuantityText = ` ${character.name} now ${haveWord} ${existingItem.quantity} ${existingItem.name.plural(existingItem.quantity == 1)}.`
    } else if (item.quantity > 1) {
      characterQuantityText = ` ${character.name} ${dontWord} have any more.`
    }
  }

  if (item.quantity == 1) text += `${character.name} ${commandName.plural(character.name == "You")} ${otherNameAdjustedCase} the ${displayItemName}.`
  else text += `${character.name} ${commandName.plural(character.name == "You")} ${otherNameAdjustedCase} ${item.quantity} ${displayItemName}.`

  var otherIndex = otherCharacter.inventory.findIndex((element) => element.name.toLowerCase() == item.name.toLowerCase())
  if (otherIndex == -1) {
    otherCharacter.inventory.push(item)
  } else {
    var existingItem = otherCharacter.inventory[otherIndex]
    existingItem.quantity = parseInt(existingItem.quantity) + parseInt(item.quantity)

    displayItemName = existingItem.name.plural(existingItem.quantity == 1)
    text += ` ${otherCharacter.name} now ${otherHaveWord} ${existingItem.quantity} ${displayItemName}.`
  }

  return text + characterQuantityText + "\n\n"
}

function doBuy(command) {
  var character = getCharacter()

  command = command.replaceAll(/\s+((for)|(with)|(the)|(a)|(an))\s+/g, " ")

  var args = []
  args.push(getArgument(command, 0))
  if (args[0] == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  args.push(getArgument(command, 1))
  if (args[1] == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  args.push(getArgument(command, 2))
  args.push(getArgument(command, 3))

  var buyQuantity
  if (isNaN(args[0])) {
    buyQuantity = 1
  } else {
    buyQuantity = args[0]
    args.splice(0, 1)
  }

  var buyName
  buyName = args[0]

  var sellQuantity
  if (isNaN(args[1])) {
    sellQuantity = 1
  } else {
    sellQuantity = args[1]
    args.splice(1, 1)
  }

  var sellName = args[1]

  var characterNameAdjustedCase = character.name == "You" ? "you" : character.name
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var haveWord = character.name == "You" ? "have" : "has"
  var tryWord = character.name == "You" ? "try" : "tries"
  var tradeWord = character.name == "You" ? "trade" : "trades"
  var buyWord = character.name == "You" ? "buy" : "buys"
  var displayItemName = sellName.plural(sellQuantity == 1)
  var buyItemTotal = 0;
  var sellItemTotal = 0;

  if (sellQuantity < 0) sellQuantity = 1

  var text = "\n\n"

  var index = character.inventory.findIndex((element) => element.name.toLowerCase() == sellName.toLowerCase())
  if (index == -1) {
    if (sellQuantity == 1) text += `${character.name} ${tryWord} to trade the ${displayItemName}, but ${characterNameAdjustedCase} ${dontWord} have any.`
    else text += `${character.name} ${tryWord} to trade ${sellQuantity} ${displayItemName}, but ${characterNameAdjustedCase} ${dontWord} have any.`
    return text + "\n\n"
  } else {
    var existingItem = character.inventory[index]

    if (sellQuantity >= existingItem.quantity) {
      sellQuantity = existingItem.quantity
      existingItem.quantity = 0
      character.inventory.splice(index, 1)
    } else {
      existingItem.quantity -= sellQuantity
    }

    sellItemTotal = existingItem.quantity
  }

  var suffix = `${buyQuantity} ${buyName.plural()}`
  if (buyQuantity == 1) suffix = `the ${buyName.plural(true)}`

  if (sellQuantity == 1) text += `${character.name} ${tradeWord} the ${displayItemName} for ${suffix}.`
  else text += `${character.name} ${tradeWord} ${sellQuantity} ${displayItemName} for ${suffix}.`

  index = character.inventory.findIndex((element) => element.name.toLowerCase() == buyName.toLowerCase())
  if (index == -1) {
    character.inventory.push({name: buyName, quantity: buyQuantity})
    buyItemTotal = buyQuantity
  } else {
    var existingItem = character.inventory[index]
    existingItem.quantity = parseInt(existingItem.quantity) + parseInt(buyQuantity)

    buyItemTotal = existingItem.quantity
  }

  text += ` ${character.name} now ${haveWord} ${sellItemTotal} ${sellName.plural(sellItemTotal == 1)} and ${buyItemTotal} ${buyName.plural(buyItemTotal == 1)}.`
  return text + "\n\n"
}

function doSell(command) {
  command = command.replace(/\s+((for)|(with))\s+/, " ")

  var args = []
  args.push(getArgument(command, 0))
  if (args[0] == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  args.push(getArgument(command, 1))
  if (args[1] == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  args.push(getArgument(command, 2))
  args.push(getArgument(command, 3))

  var sellQuantity
  if (isNaN(args[0])) {
    sellQuantity = 1
  } else {
    sellQuantity = args[0]
    args.splice(0, 1)
  }

  var sellName
  sellName = args[0]

  var buyQuantity
  if (isNaN(args[1])) {
    buyQuantity = 1
  } else {
    buyQuantity = args[1]
    args.splice(1, 1)
  }

  var buyName = args[1]

  return doBuy(`buy ${buyQuantity} ${buyName} ${sellQuantity} ${sellName}`)
}

function doRenameItem(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var arg1 = getArgument(command, 1)
  if (arg1 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var commandName = getCommandName(command)
  var character = getCharacter()
  var haveWord = character.name == "You" ? "have" : "has"
  var possessiveName = getPossessiveName(character.name)

  state.show = "none"
  var text = `\n[${possessiveName} ${arg0} has been renamed to ${arg1}]\n`

  var index = character.inventory.findIndex((element) => element.name.toLowerCase() == arg0.toLowerCase())
  if (index >= 0 ) {
    var existingItem = character.inventory[index]
    existingItem.name = arg1
  }

  return text
}

function doInventory(command) {
  state.show = "inventory"
  return " "
}

function doLearnSpell(command) {
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == "") {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var character = getCharacter()
  var tryWord = character.name == "You" ? "try" : "tries"

  var found = character.spells.find((element) => element == arg0)
  if (found != null) return `\n[${character.name} ${tryWord} to learn the spell ${arg0}, but already knows it.]\n`

  character.spells.push(arg0)
  addStoryCard(arg0, "", "spell")

  return `\n${character.name} learned the spell ${toTitleCase(arg0)}.\n`
}

function doForgetSpell(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == "") {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var tryWord = character.name == "You" ? "try" : "tries"

  var found = character.spells.find(x => x.toLowerCase() == arg0.toLowerCase())
  if (found == null) {
    state.show = "none"
    return `\n[${character.name} ${tryWord} to forget the spell ${arg0}, but ${character.name} ${dontWord} even know it]\n`
  }
  
  var index = character.spells.findIndex(x => x.toLowerCase() == arg0.toLowerCase())
  character.spells.splice(index, 1)

  state.show = "none"
  return `\n[${character.name} forgot the spell ${arg0}]\n`
}

function doRemoveStat(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == "") {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var tryWord = character.name == "You" ? "try" : "tries"

  var found = character.stats.find((element) => element == arg0)
  if (found == null) return `\n[${character.name} ${tryWord} to remove the ability ${arg0}, but ${character.name} ${dontWord} even know it]\n`
  
  var index = character.stats.findIndex((element) => element.toLowerCase() == arg0.toLowerCase())
  character.stats.splice(index, 1)

  return `\n[${character.name} removed the ability ${arg0}]\n`
}

function doRemoveSkill(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == "") {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var dontWord = character.name == "You" ? "don't" : "doesn't"
  var tryWord = character.name == "You" ? "try" : "tries"

  var found = character.skills.find((element) => element == arg0)
  if (found == null) return `\n[${character.name} ${tryWord} to remove the skill ${arg0}, but ${character.name} ${dontWord} even know it]\n`
  
  var index = character.skills.findIndex((element) => element.toLowerCase() == arg0.toLowerCase())
  character.skills.splice(index, 1)

  return `\n[${character.name} removed the skill ${arg0}]\n`
}

function doCastSpell(command) {
  const advantageNames = ["normal", "advantage", "disadvantage"]
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless"]
  const difficultyScores = [30, 25, 20, 15, 10, 5]
  var character = getCharacter()
  const dontWord = character.name == "You" ? "don't" : "doesn't"
  const tryWord = character.name == "You" ? "try" : "tries"

  var spellIndex = 2;

  var advantage = searchArgument(command, arrayToOrPattern(advantageNames))
  if (advantage == null) {
    advantage = "normal"
    spellIndex--
  }

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficulty = searchArgument(command, arrayToOrPattern(difficultyPatternNames))
  if (difficulty == null) {
    difficulty = state.defaultDifficulty
    spellIndex--
  }
  var difficultyIndex = difficultyNames.indexOf(difficulty)
  if (difficultyIndex >= 0 && difficultyIndex < difficultyNames.length) {
    difficulty = difficultyScores[difficultyIndex]
  }

  var spell = getArgument(command, spellIndex)
  if (spell == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var target = null
  var atWord = null

  var found = character.spells.find(x => x.toLowerCase() == spell.toLowerCase())
  if (found != null) {
    target = getArgumentRemainder(command, spellIndex + 1)
    if (target != null) {
      target = target.trim()
      if (!/^((at)|(on))\s+.*/.test(target)) target = "at " + target
    }
  } else {
    var remainder = getArgumentRemainder(command, spellIndex)
    if (/.*\s((at)|(on))\s.*/i.test(remainder)) {
      spell = remainder.replace(/\s+((at)|(on)).*/i, "").trim()
      target = remainder.replace(/^.*\s+(?=(at)|(on))/i, "").trim()
    } else {
      spell = getArgumentRemainder(command, spellIndex).trim()
    }

    found = character.spells.find(x => x.toLowerCase() == spell.toLowerCase())
  }

  if (found == null) {
    state.show = "none"
    return `\n[${character.name} ${tryWord} to cast the spell ${spell}, but ${character.name == "You" ? "you" : character.name} ${dontWord} know it.]\n`
  }

  var text = `${character.name} cast the spell ${spell}${advantage != "normal" ? " with " + advantage : ""}${target == null ? "" : " " + target}.`

  var modifier = 0
  if (character.spellStat != null) {
    var stat = character.stats.find((element) => element.name.toLowerCase() == character.spellStat.toLowerCase())
    if (stat != null) modifier = getModifier(stat.value)
  }

  var roll1 = calculateRoll("d20")
  var roll2 = calculateRoll("d20")
  var roll = advantage == "advantage" ? Math.max(roll1, roll2) : advantage == "disadvantage" ? Math.min(roll1, roll2) : roll1

  state.show = "prefix"
  var dieText = advantage == "advantage" || advantage == "disadvantage" ? `${advantage}(${roll1},${roll2})` : roll1
  var difficultyWord = target == null ? "Difficulty" : "Armor"
  if (roll == 20) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. Critcal Success!]\n`
  else if (roll == 1) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. Critcal Failure!]\n`
  else if (modifier != 0) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${roll + modifier}. ${roll + modifier >= difficulty ? "Success!" : "Failure!"}]\n`
  else state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. ${roll + modifier >= difficulty ? "Success!" : "Failure!"}]\n`
  
  if (roll == 20) text += ` Critical success!`
  else if (roll == 1) text += ` Critical failure! The spell ${target != null ? "misses" : "fails"} in a spectacular way.`
  else if (roll + modifier >= difficulty) text += ` The spell ${target != null ? "hits the target" : "is successful"}!`
  else text += ` The spell ${target != null ? "misses" : "fails"}!`

  if (roll + modifier >= difficulty || roll == 20) text += addXpToAll(Math.floor(state.autoXp * clamp(difficulty, 1, 20) / 20))
  return `\n${text}\n`
}

function doShowCharacters(command) {
  state.show = "characters"
  return " "
}

function doSpellbook(command) {
  state.show = "spellbook"
  return " "
}

function doShowSkills(command) {
  state.show = "skills"
  return " "
}
function doShowStats(command) {
  state.show = "stats"
  return " "
}

function doClearNotes(command) {
  state.notes = []
  
  state.show = "clearNotes"
  return " "
}

function doClearInventory(command) {
  var character = getCharacter()
  character.inventory = []
  state.show = "clearInventory"
  return " "
}

function doEraseNote(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null) arg0 = 1

  arg0 = parseInt(arg0) - 1
  if (arg0 >= state.notes.length) {
    state.show = "none"
    return "\n[Error: Note does not exist. Call #showNotes.]\n"
  }

  state.notes.splice(arg0, 1)
  state.show = "none"
  return `[Note #${arg0 + 1} removed]`
}

function doRemoveCharacter(command) {
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  for (var i = 0; i < state.characters.length; i++) {
    var character = state.characters[i]
    if (character.name.toLowerCase() == arg0.toLowerCase()) {
      state.characters.splice(i, 1)
      state.show = "none"
      return `[Character ${character.name} removed.]`
    }
  }

  return `[Character ${arg0} was not found.]`
}

function doGenerateName(command) {
  var gender = searchArgument(command, /^(male)|(female)$/gi)
  if (gender == null) gender = "male"

  var genre = searchArgument(command, /^(fantasy)|(modern)|(scifi)|(nordic)$/gi)
  if (genre == null) genre = "fantasy"

  state.show = "none"
  return `[The character's name is ${generateName(genre, gender.toLowerCase() == "male")}]`
}

function doClearSpells(command) {
  var character = getCharacter()
  character.spells = []
  state.show = "clearInventory"
  return " "
}

function doClearStats(command) {
  var character = getCharacter()
  character.stats = []
  state.show = "clearStats"
  return " "
}

function doClearSkills(command) {
  var character = getCharacter()
  character.skills = []
  state.show = "clearSkills"
  return " "
}

function doReset(command) {
  state.notes = []
  state.characters = []
  state.defaultDifficulty = null
  state.autoXp = null

  state.show = "reset"
  return " "
}

function doHelp(command) {
  state.show = "help"
  return " "
}

modifier(text)