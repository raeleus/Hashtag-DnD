const version = "Hashtag DnD v0.2.0"
const rollSynonyms = ["roll"]
const createSynonyms = ["create", "generate", "start", "begin", "setup", "party", "member", "new"]
const renameCharacterSynonyms = ["renamecharacter", "renameperson"]
const cloneCharacterSynonyms = ["clone", "clonecharacter", "cloneperson", "copycharacter", "copyperson", "duplicatecharacter", "duplicateperson", "dupecharacter", "dupeperson"]
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
const noteSynonyms = ["note", "takenote", "setnote", "createnote", "remember"]
const clearNotesSynonyms = ["clearnotes"]
const eraseNoteSynonyms = ["erasenote", "removenote", "deletenote", "cancelnote"]
const takeSynonyms = ["take", "steal", "get", "grab", "receive", "loot"]
const buySynonyms = ["buy", "purchase", "barter", "trade", "swap", "exchange"]
const sellSynonyms = ["sell"]
const dropSynonyms = ["remove", "discard", "drop", "leave", "dispose", "toss", "throw", "throwaway", "trash", "donate", "eat", "consume", "use", "drink", "pay", "lose"]
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
const createLocationSynonyms = ["createlocation", "makelocation", "generatelocation", "addlocation", "setlocation", "createplace", "makeplace", "generateplace", "addplace", "setplace", "createtown", "maketown", "generatetown", "addtown", "settown", "createvillage", "makevillage", "generatevillage", "addvillage", "setvillage", "createcity", "makecity", "generatecity", "addcity", "setcity", "updatelocation", "updateplace", "updatetown", "updatevillage", "updatecity"]
const goToLocationSynonyms = ["gotolocation", "golocation", "movetolocation", "traveltolocation", "travellocation", "gotoplace", "goplace", "movetoplace", "traveltoplace", "travelplace", "gototown", "gotown", "movetotown", "traveltotown", "traveltown", "gotovillage", "govillage", "movetovillage", "traveltovillage", "travelvillage", "gotocity", "gocity", "movetocity", "traveltocity", "travelcity", "goto", "go", "moveto", "move", "travelto", "travel"]
const removeLocationSynonyms = ["removelocation", "deletelocation", "eraselocation", "removeplace", "deleteplace", "eraseplace", "removetown", "deletetown", "erasetown", "removevillage", "deletevillage", "erasevillage", "removecity", "deletecity", "erasecity"]
const showLocationsSynonyms = ["showlocations", "showplaces", "showtowns", "showvillages", "showcities", "locations", "places", "towns", "villages", "cities"]
const getLocationSynonyms = ["getlocation", "location", "getcoordinates", "coordinates", "getcoords", "coords", "showlocation"]
const clearLocationsSynonyms = ["clearlocations", "eraselocations", "deletelocations", "resetlocations"]
const mapSynonyms = ["map", "showmap"]
const goNorthSynonyms = ["gonorth", "north", "goup", "up", "n"]
const goSouthSynonyms = ["gosouth", "south", "godown", "down", "s"]
const goEastSynonyms = ["goeast", "east", "goright", "right", "e"]
const goWestSynonyms = ["gowest", "west", "goleft", "left", "w"]
const showDaySynonyms = ["showday", "showdate", "day", "date"]
const setDaySynonyms = ["setday", "setdate"]
const encounterSynonyms = ["encounter", "startencounter"]
const showEnemiesSynonyms = ["showenemies", "enemies"]
const addEnemySynonyms = ["addenemy"]
const removeEnemySynonyms = ["removeenemy"]
const clearEnemiesSynonyms = ["clearenemies", "resetenemies", "removeenemies"]
const initiativeSynonyms = ["initiative"]
const setAcSynonyms = ["setac", "setarmorclass", "ac", "armorclass"]
const turnSynonyms = ["turn", "doturn", "taketurn"]
const fleeSynonyms = ["flee", "retreat", "runaway", "endcombat"]
const versionSynonyms = ["version", "ver", "showversion"]
const setupEnemySynonyms = ["setupenemy", "createenemy"]
const setDamageSynonyms = ["setdamage"]
const setProficiencySynonyms = ["setproficiency", "setweaponproficiency"]
const helpSynonyms = ["help"]

const modifier = (text) => {
  init()
  const rawText = text

  if (state.createStep != null) {
    text = handleCreateStep(text)
    if (state.createStep != null) return { text }
    else text = rawText
  }

  if (state.setupEnemyStep != null) {
    state.setupEnemyStep
    text = handleSetupEnemyStep(text)
    if (state.setupEnemyStep != null) return { text }
    else text = rawText
  }

  if (state.initialized == null || !text.includes("#")) {
    state.initialized = true;
    return { text }
  }

  state.characterName = getCharacterName(rawText)
  text = sanitizeText(text)

  var lineBreakIndex = text.indexOf("\n")
  if (lineBreakIndex > -1) {
    state.flavorText = text.substring(lineBreakIndex + 1)
    if (!state.flavorText.startsWith(" ")) state.flavorText = " " + state.flavorText
    text = text.substring(0, lineBreakIndex)
  } else {
    state.flavorText = null
  }
  
  command = text.substring(text.search(/#/) + 1)
  var commandName = getCommandName(command).toLowerCase().replaceAll(/[^a-z0-9\s]*/gi, "")
  
  if (state.characterName == null || !hasCharacter(state.characterName)) {
    var found = processCommandSynonyms(command, commandName, createSynonyms, function () {return true})

    if (state.characterName == null && found) {
      state.show = "none"
      text = `\n[Error: Character name not specified. Use the "do" or "say" modes. Alternatively, use "story" mode with the following format without quotes: "charactername #hashtag"]\n`
      return { text }
    }

    if (!found) found = processCommandSynonyms(command, commandName, helpSynonyms.concat(rollSynonyms, noteSynonyms, eraseNoteSynonyms, showNotesSynonyms, clearNotesSynonyms, showCharactersSynonyms, removeCharacterSynonyms, generateNameSynonyms, setDefaultDifficultySynonyms, showDefaultDifficultySynonyms, renameCharacterSynonyms, cloneCharacterSynonyms, createLocationSynonyms, showLocationsSynonyms, goToLocationSynonyms, removeLocationSynonyms, getLocationSynonyms, clearLocationsSynonyms, goNorthSynonyms, goSouthSynonyms, goEastSynonyms, goWestSynonyms, encounterSynonyms, showEnemiesSynonyms, addEnemySynonyms, removeEnemySynonyms, clearEnemiesSynonyms, initiativeSynonyms, turnSynonyms, fleeSynonyms, versionSynonyms, setupEnemySynonyms, damageSynonyms, restSynonyms, resetSynonyms), function () {return true})

    if (found == null) {
      if (state.characterName == null) {
        state.show = "none"
        text = `\n[Error: Character name not specified. Use the "do" or "say" modes. Alternatively, use "story" mode with the following format without quotes: "charactername #hashtag"]\n`
        return { text }
      } else {
        state.show = "none"
        text = `\n[Error: Character ${state.characterName} does not exist. Type #setup to create this character]\n`
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
  if (text == null) text = processCommandSynonyms(command, commandName, createLocationSynonyms, doCreateLocation)
  if (text == null) text = processCommandSynonyms(command, commandName, goToLocationSynonyms, doGoToLocation)
  if (text == null) text = processCommandSynonyms(command, commandName, clearLocationsSynonyms, doClearLocations)
  if (text == null) text = processCommandSynonyms(command, commandName, removeLocationSynonyms, doRemoveLocation)
  if (text == null) text = processCommandSynonyms(command, commandName, showLocationsSynonyms, doShowLocations)
  if (text == null) text = processCommandSynonyms(command, commandName, getLocationSynonyms, doGetLocation)
  if (text == null) text = processCommandSynonyms(command, commandName, mapSynonyms, doMap)
  if (text == null) text = processCommandSynonyms(command, commandName, goNorthSynonyms, doGoNorth)
  if (text == null) text = processCommandSynonyms(command, commandName, goSouthSynonyms, doGoSouth)
  if (text == null) text = processCommandSynonyms(command, commandName, goEastSynonyms, doGoEast)
  if (text == null) text = processCommandSynonyms(command, commandName, goWestSynonyms, doGoWest)
  if (text == null) text = processCommandSynonyms(command, commandName, renameCharacterSynonyms, doRenameCharacter)
  if (text == null) text = processCommandSynonyms(command, commandName, cloneCharacterSynonyms, doCloneCharacter)
  if (text == null) text = processCommandSynonyms(command, commandName, showDaySynonyms, doShowDay)
  if (text == null) text = processCommandSynonyms(command, commandName, setDaySynonyms, doSetDay)
  if (text == null) text = processCommandSynonyms(command, commandName, versionSynonyms, doVersion)
  if (text == null) text = processCommandSynonyms(command, commandName, setAcSynonyms, doSetAc)
  if (text == null) text = processCommandSynonyms(command, commandName, encounterSynonyms, doEncounter)
  if (text == null) text = processCommandSynonyms(command, commandName, showEnemiesSynonyms, doShowEnemies)
  if (text == null) text = processCommandSynonyms(command, commandName, removeEnemySynonyms, doRemoveEnemy)
  if (text == null) text = processCommandSynonyms(command, commandName, clearEnemiesSynonyms, doClearEnemies)
  if (text == null) text = processCommandSynonyms(command, commandName, addEnemySynonyms, doAddEnemy)
  if (text == null) text = processCommandSynonyms(command, commandName, initiativeSynonyms, doInitiative)
  if (text == null) text = processCommandSynonyms(command, commandName, fleeSynonyms, doFlee)
  if (text == null) text = processCommandSynonyms(command, commandName, turnSynonyms, doTurn)
  if (text == null) text = processCommandSynonyms(command, commandName, setupEnemySynonyms, doSetupEnemy)
  if (text == null) text = processCommandSynonyms(command, commandName, setDamageSynonyms, doSetDamage)
  if (text == null) text = processCommandSynonyms(command, commandName, setProficiencySynonyms, doSetProficiency)
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

  if (state.flavorText != null) text += state.flavorText

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

function handleSetupEnemyStep(text) {
  state.show = "setupEnemy"

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
    state.setupEnemyStep = null
    return text
  }

  switch (state.setupEnemyStep) {
    case 0:
      text = text.toLowerCase();
      if (text.startsWith("y")) state.setupEnemyStep = 100
      else if (text.startsWith("n")) state.setupEnemyStep++
      break
    case 1:
      if (text.length > 0) {
        state.tempEnemy.name = text
        state.setupEnemyStep++
      }
      return text
    case 2:
      if (text.length > 0) {
        if (/^\d*d\d+((\+|-)\d+)?$/gi.test(text)) {
          state.tempEnemy.health = calculateRoll(text)
          state.setupEnemyStep++
        } else if (!isNaN(text)) {
          state.tempEnemy.health = Math.max(0, parseInt(text))
          state.setupEnemyStep++
        }
      }
      return text
    case 3:
      if (/^\d*d\d+((\+|-)\d+)?$/gi.test(text)) {
        state.tempEnemy.ac = calculateRoll(text)
        state.setupEnemyStep++
      } else if (!isNaN(text)) {
        state.tempEnemy.ac = Math.max(0, parseInt(text))
        state.setupEnemyStep++
      }
      return text
    case 4:
      if (!isNaN(text)) {
        state.tempEnemy.hitModifier = Math.max(0, parseInt(text))
        state.setupEnemyStep++
      }
      return text
    case 5:
      if (/^\d*d\d+((\+|-)\d+)?$/gi.test(text)) {
        state.tempEnemy.damage = text
        state.setupEnemyStep++
      } else if (!isNaN(text)) {
        state.tempEnemy.damage = Math.max(0, parseInt(text))
        state.setupEnemyStep++
      }
      return text
    case 6:
      if (/^\d*d\d+((\+|-)\d+)?$/gi.test(text)) {
        state.tempEnemy.initiative = calculateRoll(text)
        state.setupEnemyStep++
      } else if (!isNaN(text)) {
        state.tempEnemy.initiative = Math.max(0, parseInt(text))
        state.setupEnemyStep++
      }
      return text
    case 7:
      if (text.toLowerCase() == "s") {
        state.setupEnemyStep = 500
      }
      else if (text.length > 0) {
        state.tempEnemy.spells.push(text)
        state.setupEnemyStep++
      }
      return text
    case 8:
      if (text.toLowerCase() == "s") {
        state.setupEnemyStep = 500
      }
      else if (text.length > 0) {
        state.tempEnemy.spells.push(text)
      }
      return text
    case 100:
      if (/^\d+(\s.*)?$/gi.test(text)) {
        state.setupEnemyStep = 500

        var value = text.match(/^\d+/gi)[0]
        var nameMatches = text.match(/(?<=\s).*/gi)

        switch (parseInt(value)) {
          case 1:
            state.tempEnemy = createEnemy("Animated Armor", calculateRoll("6d8+6"), 18, 6, "1d6+2", "d20")
            break
          case 2:
            state.tempEnemy = createEnemy("Awakened Shrub", calculateRoll("2d+6"), 9, -3, "1d4-1", "d20-1")
            break
          case 3:
            state.tempEnemy = createEnemy("Brigand", calculateRoll("5d8+10"), 11, 6, "1d6+2", "d20")
            break
          case 4:
            state.tempEnemy = createEnemy("Black Bear", calculateRoll("3d8+6"), 11, 6, "2d4+2", "d20")
            break
          case 5:
            state.tempEnemy = createEnemy("Boar", calculateRoll("2d8+2"), 11, 4, "1d6+1", "d20")
            break
          case 6:
            state.tempEnemy = createEnemy("Cockatrice", calculateRoll("6d6+6"), 11, 1, "1d4+1", "d20+1", "Petrifying Bite1d4+1")
            break
          case 7:
            state.tempEnemy = createEnemy("Snake", calculateRoll("2d10+2"), 12, 6, "1d8+2", "d20+2", "Poison Bite2d4+1")
            break
          case 8:
            state.tempEnemy = createEnemy("Dire Wolf", calculateRoll("5d10+10"), 14, 8, "2d6+3", "d20+2")
            break
          case 9:
            state.tempEnemy = createEnemy("Ghoul", calculateRoll("5d8"), 12, 3, "2d6+2", "d20+2")
            break
          case 10:
            state.tempEnemy = createEnemy("Giant Centipede", calculateRoll("1d6+1"), 13, 1, "1d4+2", "d20+2")
            break
          case 11:
            state.tempEnemy = createEnemy("Giant Rat", calculateRoll("2d6"), 12, 2, "1d4+2", "d20+2")
            break
          case 12:
            state.tempEnemy = createEnemy("Giant Wolf Spider", calculateRoll("2d8+2"), 13, 4, "1d6+1", "d20+3", "Poison Bite1d6+8")
            break
          case 13:
            state.tempEnemy = createEnemy("Gnoll", calculateRoll("5d8"), 15, 6, "1d8+2", "d20+1")
            break
          case 14:
            state.tempEnemy = createEnemy("Goblin", calculateRoll("2d6"), 15, 3, "1d6+2", "d20+2")
            break
          case 15:
            state.tempEnemy = createEnemy("Harpy", calculateRoll("7d8+7"), 11, 4, "2d4+1", "d20+1", "Luring Song")
            break
          case 16:
            state.tempEnemy = createEnemy("Hobgoblin", calculateRoll("2d8+2"), 18, 4, "1d8+1", "d20+1")
            break
          case 17:
            state.tempEnemy = createEnemy("Kobold", calculateRoll("2d6-2"), 12, 2, "1d4+2", "d20+2")
            break
          case 18:
            state.tempEnemy = createEnemy("Orc", calculateRoll("2d8+6"), 13, 8, "1d12+3", "d20+1")
            break
          case 19:
            state.tempEnemy = createEnemy("Satyr", calculateRoll("5d8"), 15, 4, "1d8+2", "d20+3")
            break
          case 20:
            state.tempEnemy = createEnemy("Skeleton", calculateRoll("2d8+4"), 13, 5, "1d6+2", "d20+2")
            break
          case 21:
            state.tempEnemy = createEnemy("Stirge", calculateRoll("1d4"), 14, 2, "1d4+3", "d20+1", "Blood Drain2d4+6")
            break
          case 22:
            state.tempEnemy = createEnemy("Warhorse", calculateRoll("3d10+3"), 11, 10, "2d6+4", "d20+1", "Charge")
            break
          case 23:
            state.tempEnemy = createEnemy("Wolf", calculateRoll("2d+2"), 13, 6, "2d4+2", "d20+2")
            break
          case 24:
            state.tempEnemy = createEnemy("Worg", calculateRoll("4d10+4"), 13, 8, "2d6+3", "d20+1")
            break
          case 25:
            state.tempEnemy = createEnemy("Zombie", calculateRoll("3d8+9"), 8, 4, "1d6+1", "d20-2")
            break
          case 26:
            state.tempEnemy = createEnemy("Air Elemental", calculateRoll("12d10+24"), 15, 8, "2d8+5", "d20+5", "Whirlwind3d8+2")
            break
          case 27:
            state.tempEnemy = createEnemy("Basilisk", calculateRoll("8d8+16"), 15, 5, "2d6+3", "d20-1")
            break
          case 28:
            state.tempEnemy = createEnemy("Berserker", calculateRoll("9d8+27"), 13, 5, "1d12+3", "d20+1")
            break
          case 29:
            state.tempEnemy = createEnemy("Chuul", calculateRoll("11d10+33"), 16, 6, "2d6+4", "d20", "Tentacles")
            break
          case 30:
            state.tempEnemy = createEnemy("Doppelganger", calculateRoll("8d8+16"), 14, 6, "1d6+4", "d20+4", "Shapechange")
            break
          case 31:
            state.tempEnemy = createEnemy("Druid", calculateRoll("5d8+5"), 11, 4, "1d8", "d20+1", "Produce Flame3d6", "Bark Skin", "Entangle")
            break
          case 32:
            state.tempEnemy = createEnemy("Earth Elemental", calculateRoll("12d10+60"), 17, 8, "2d8+5", "d20-1", "Earth Glide")
            break
          case 33:
            state.tempEnemy = createEnemy("Fire Elemental", calculateRoll("12d10+36"), 13, 6, "2d6+3", "d20+3", "Fire Form")
            break
          case 34:
            state.tempEnemy = createEnemy("Gorgon", calculateRoll("12d8+48"), 19, 8, "2d12+5", "d20", "Petrifying Breath")
            break
          case 35:
            state.tempEnemy = createEnemy("Green Hag", calculateRoll("11d8+33"), 17, 6, "2d8+4", "d20+1", "Minor Illusion", "Invisible Passage")
            break
          case 36:
            state.tempEnemy = createEnemy("Griffon", calculateRoll("7d10+21"), 12, 6, "1d8+4", "d20+2")
            break
          case 37:
            state.tempEnemy = createEnemy("Hell Hound", calculateRoll("7d8+14"), 15, 5, "1d8+3", "d20+1", "Fire Breath6d6")
            break
          case 38:
            state.tempEnemy = createEnemy("Hill Giant", calculateRoll("10d12+40"), 13, 8, "3d8+5", "d20-1", "Throw Rock3d10+5")
            break
          case 39:
            state.tempEnemy = createEnemy("Manticore", calculateRoll("8d10+24"), 14, 5, "1d8+3", "d20+3")
            break
          case 40:
            state.tempEnemy = createEnemy("Minotaur", calculateRoll("9d10+27"), 14, 6, "2d12+4", "d20")
            break
          case 41:
            state.tempEnemy = createEnemy("Mimic", calculateRoll("9d8+18"), 12, 5, "1d8+3", "d20+1", "Grapple")
            break
          case 42:
            state.tempEnemy = createEnemy("Ogre", calculateRoll("7d10+21"), 11, 6, "2d8+4", "d20-1")
            break
          case 43:
            state.tempEnemy = createEnemy("Owlbear", calculateRoll("7d10+21"), 13, 7, "1d10+5", "initiative")
            break
          case 44:
            state.tempEnemy = createEnemy("Red Dragon Wyrmling", calculateRoll("10d8+30"), 17, 6, "1d10+4", "d20")
            break
          case 45:
            state.tempEnemy = createEnemy("Spectator", calculateRoll("6d8+12"), 14, 1, "1d6-1", "d20+2", "Confusion Ray", "Paralyzing Ray", "Fear Ray", "Wounding Ray3d10")
            break
          case 46:
            state.tempEnemy = createEnemy("Troll", calculateRoll("8d10+40"), 15, 7, "1d6+4", "d20+1")
            break
          case 47:
            state.tempEnemy = createEnemy("Wererat", calculateRoll("6d8+6"), 12, 4, "1d4+2", "d20+2")
            break
          case 48:
            state.tempEnemy = createEnemy("Werewolf", calculateRoll("9d8+18"), 12, 4, "18+2", "d20+1")
            break
          case 49:
            state.tempEnemy = createEnemy("Vampire Spawn", calculateRoll("11d8+33"), 15, 6, "2d4+3", "d20+3", "Bite3d6+3")
            break
          case 50:
            state.tempEnemy = createEnemy("Wight", calculateRoll("6d8+18"), 14, 4, "1d8+2", "d20+1", "Life Drain4d6+3")
            break
          case 51:
            createEnemy("Aboleth", calculateRoll("18d10"), 17, 9, "6d6+15", "d20-1", "Enslave", "Psychic Drain3d6")
            break
          case 52:
            createEnemy("Assassin", calculateRoll("12d8+24"), 15, 6, "2d6+6", "d20+3")
            break
          case 53:
            createEnemy("Chimera", calculateRoll("12d10+48"), 14, 7, "2d6+4", "d20", "Fire Breath7d8")
            break
          case 54:
            createEnemy("Cloud Giant", calculateRoll("16d12+96"), 14, 12, "6d8+16", "d20", "Throw Rock4d10+8", "Control Weather")
            break
          case 55:
            createEnemy("Cyclops", calculateRoll("12d12+60"), 14, 9, "3d8+6", "d20")
            break
          case 56:
            createEnemy("Deva", calculateRoll("16d8+64"), 17, 8, "2d6+8", "d20+4")
            break
          case 57:
            createEnemy("Drider", calculateRoll("13d10+52"), 19, 6, "3d8", "1d10+3", "Poison Bite2d8")
            break
          case 58:
            createEnemy("Frost Giant", calculateRoll("12d12+60"), 15, 9, "6d12+12", "d20-1")
            break
          case 59:
            createEnemy("Hydra", calculateRoll("15d12+75"), 15, 8, "3d10+15", "d20+1")
            break
          case 60:
            createEnemy("Insane Mage", calculateRoll("9d8"), 12, 5, "1d4+2", "d20+2", "Cone of Cold8d8", "Greater Invisibility", "Fireball8d6", "Shield")
            break
          case 61:
            createEnemy("Medusa", calculateRoll("17d8+51"), 15, 5, "1d6+2", "d20+2", "Petrifying Gaze", "Snake Hair5d6")
            break
          case 62:
            createEnemy("Shield Guardian", calculateRoll("15d10+60"), 17, 7, "4d6+4", "d20-1", "Shield")
            break
          case 63:
            createEnemy("Spirit Naga", calculateRoll("10d10+20"), 15, 7, "8d8+4", "d20+3", "Dominate Person", "Lightning Bolt9d6")
            break
          case 64:
            createEnemy("Stone Golem", calculateRoll("17d10+85"), 17, 10, "6d8+12", "d20-1")
            break
          case 65:
            createEnemy("Treant", calculateRoll("12d12+60"), 16, 10, "6d6+12", "d20-1")
            break
          case 66:
            createEnemy("Young Black Dragon", calculateRoll("15d10+45"), 18, 7, "4d6+8", "d20+2", "Acid Breath11d8")
            break
          case 67:
            createEnemy("Young Blue Dragon", calculateRoll("16d10+64"), 18, 9, "12d6+10", "d20", "Lightning Breath10d10")
            break
          case 68:
            createEnemy("Young Brass Dragon", calculateRoll("13d10+39"), 17, 7, "2d10+4", "d20", "Fire Breath12d6", "Sleep Breath")
            break
          case 69:
            createEnemy("Young Bronze Dragon", calculateRoll("15d10+60"), 18, 8, "4d6+10", "d20+1", "Lightning Breath10d10", "Repulsion Breath")
            break
          case 70:
            createEnemy("Young Copper Dragon", calculateRoll("14d10+42"), 17, 7, "4d6+8", "d20+1", "Acid Breath9d8", "Slowing Breath")
            break
          case 71:
            createEnemy("Young Gold Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20+2", "Fire Breath10d10", "Weakening Breath")
            break
          case 72:
            createEnemy("Young Green Dragon", calculateRoll("16d10+48"), 18, 7, "4d6+8", "d20+1", "Poison Breath12d6")
            break
          case 73:
            createEnemy("Young Red Dragon", calculateRoll("17d10+85"), 18, 10, "4d6+12", "d20", "Fire Breath16d6")
            break
          case 74:
            createEnemy("Young Silver Dragon", calculateRoll("16d10+8-"), 18, 10, "4d6+12", "d20", "Cold Breath12d8", "Paralyzing Breath")
            break
          case 75:
            createEnemy("Young White Dragon", calculateRoll("14d10+56"), 17, 7, "2d10+4", "d20", "Cold Breath10d8", "Ice Walk")
            break
        }

        if (nameMatches != null) state.tempEnemy.name = nameMatches[0]
      }
      return text
    case 500:
      state.show = null
      state.setupEnemyStep = null

      var enemy = createEnemy(state.tempEnemy.name, state.tempEnemy.health, state.tempEnemy.ac, state.tempEnemy.hitModifier, state.tempEnemy.damage, state.tempEnemy.initiative)
      enemy.spells = [...state.tempEnemy.spells]
      
      var enemyMatches = state.enemies.filter(x => x.name.toLowerCase() == enemy.name.toLowerCase() || x.name.toLowerCase() == `${enemy.name.toLowerCase()} a`)
      if (enemyMatches.length > 0) {
        enemy.name = getUniqueName(enemy.name)
        if (enemy.name.endsWith("A")) {
          enemyMatches[0].name = enemy.name
          enemy.name = enemy.name.substring(0, enemy.name.length - 1) + "B"
        }
      }

      state.enemies.push(enemy)
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
      health: 10,
      ac: 10,
      damage: "1d6",
      proficiency: 2
    }
  }

  if (state.tempEnemy == null) state.tempEnemy = createEnemy("enemy", 10, 10, "2d6", 10)
  if (state.characters == null) state.characters = []
  if (state.notes == null) state.notes = []
  if (state.locations == null) state.locations = []
  if (state.x == null) state.x = 0
  if (state.y == null) state.y = 0
  if (state.autoXp == null) state.autoXp = 0
  if (state.defaultDifficulty == null) state.defaultDifficulty = 10
  if (state.day == null) state.day = 0
  if (state.enemies == null) state.enemies = []
  if (state.initiativeOrder == null) state.initiativeOrder = []
  state.show = null
  state.prefix = null
  state.critical = null

  state.characters.forEach(x => {
    if (x.ac == null) x.ac = 10
    if (x.damage == null) x.damage = "1d6"
    if (x.proficiency == null) x.proficiency = 2
  })
}

function doRoll(command) {
  var rollType = searchArgument(command, /^(advantage)|(disadvantage)$/gi)
  if (rollType == null) rollType = "normal"

  var dice = searchArgument(command, /^.*\d.*$/gi)
  if (dice == null) dice = "d20"
  dice = formatRoll(dice)

  var addition = getAddition(dice)
  var roll = calculateRoll(dice) - addition
  if (rollType == "advantage") roll = Math.max(roll, calculateRoll(dice) - addition)
  if (rollType == "disadvantage") roll = Math.min(roll, calculateRoll(dice) - addition)
  
  state.show = "none"

  var text = `\n[You roll a ${dice}`
  if (rollType != "normal") text += ` with ${rollType}`
  text += `. Score: ${roll}`
    
  if (roll == 20) text += " Critical Success!"
  else if (roll == 1) text += " Critical Failure!"
  else if (addition > 0) text += ` + ${addition} = ${roll + addition}`
  else if (addition < 0) text += ` - ${Math.abs(addition)} = ${roll + addition}`

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
  state.tempCharacter.ac = 10
  state.tempCharacter.damage = "1d6"
  state.tempCharacter.proficiency = 2
  
  state.show = "create"
  return " "
}

function doSetupEnemy(command) {
  state.setupEnemyStep = 0
  state.tempEnemy = createEnemy("enemy", 20, 10, 0, "2d6", 10)
  state.show = "setupEnemy"
  return " "
}

function doBio(command) {
  state.show = "bio"
  return " "
}

function doRenameCharacter(command) {
  var character = getCharacter()
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  var possessiveName = getPossessiveName(character.name)

  state.show = "none"
  var text = `\n[${possessiveName} name has been changed to ${arg0}]\n`

  character.name = arg0

  return text
}

function doCloneCharacter(command) {
  var character = getCharacter()
  var possessiveName = getPossessiveName(character.name)

  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (!hasCharacter(arg0)) createCharacter(arg0)
  var newCharacter = getCharacter(arg0)
  copyCharacter(character, newCharacter)

  state.show = "none"
  var text = `\n[${character.name} has been cloned to a new character called ${newCharacter.name}]\n`

  return text
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
  return `\n[${possessiveName} ${toTitleCase(arg0)} ability is now ${arg1}]\n`
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
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
  const difficultyScores = [30, 25, 20, 15, 10, 5, 0]

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficulty = getArgument(command, 0)
  if (difficulty == null) difficulty = "easy"

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
  return `\n[${possessiveName} ${toTitleCase(arg0)} skill is now ${arg2 >= 0 ? "+" + arg2 : "-" + arg2} and based on ${toTitleCase(arg1)}]\n`
}

function doSetAc(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (isNaN(arg0)) {
    state.show = "none"
    return "\n[Error: Not a number. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.ac = parseInt(arg0)

  state.show = "none"
  return `\n[${possessiveName} armor class is set to ${character.ac}]\n`
}

function doSetExperience(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (isNaN(arg0)) {
    state.show = "none"
    return "\n[Error: Not a number. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  character.experience = parseInt(arg0)

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
  return `\n[${possessiveName} experience is increased to ${character.experience}]\n`
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
  return `\n[${possessiveName} class is set to "${character.className}"]\n`
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
  return `\n[${possessiveName} summary is set]\n`
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

  var arg1 = getArgumentRemainder(command, 1)
  
  if (arg1 == null) {
    if (character == null) {
      state.show = "none"
      return "\n[Error: Character must be specified. See #help]\n"
    }

    var damage

    var damageMatches = arg0.match(/\d*d\d+((\+|-)d+)?/gi)
    if (damageMatches != null) damage = calculateRoll(damageMatches[0])
    else {
      damageMatches = arg0.match(/\d+/g)
      if (damageMatches != null) damage = parseInt(damageMatches[damageMatches.length - 1])
    }

    if (damage == null) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }

    var haveWord = character.name == "You" ? "have" : "has"

    character.health -= damage
    character.health = clamp(character.health, 0, getHealthMax())

    state.show = "none"
    return `\n[${character.name} ${haveWord} been damaged for ${damage} hp with ${character.health} remaining].${character.health == 0 ? " You are unconscious" : ""}\n`
  } else {
    if (arg1 == null) {
      state.show = "none"
      return "\n[Error: Not enough parameters. See #help]\n"
    }

    var damage

    var damageMatches = arg1.match(/\d*d\d+((\+|-)d+)?/gi)
    if (damageMatches != null) damage = calculateRoll(damageMatches[0])
    else {
      damageMatches = arg1.match(/\d+/g)
      if (damageMatches != null) damage = parseInt(damageMatches[damageMatches.length - 1])
    }

    if (damage == null) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }

    for (var enemy of state.enemies) {
      if (enemy.name.toLowerCase() == arg0.toLowerCase()) {
        enemy.health = Math.max(0, enemy.health - damage)
        return `\n[${toTitleCase(enemy.name)} has been damaged for ${damage} hp with ${enemy.health} remaining].${enemy.health == 0 ? " " + toTitleCase(enemy.name) + " has been defeated!" : ""}\n`
      }
    }
  }
}

function doRest(command) {
  var commandName = getCommandName(command)
  state.day++
  state.enemies = []

  var healingFactor = 1
  var text
  if (commandName.toLowerCase() == "shortrest") {
    state.day--
    healingFactor = .5
    text = `\n[All characters have healed 50%]\n`
  } else {
    text = `\n[All characters have rested and feel rejuvinated. It's now day ${state.day}]\n`
  }

  state.characters.forEach(function(character) {
    var max = getHealthMax(character)
    character.health += Math.floor(max * healingFactor)
    if (character.health > max) character.health = max
  })
  state.show = "none"
  return text
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
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
  const difficultyScores = [30, 25, 20, 15, 10, 5, 0]
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
  if (getArguments(command).length <= 1) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  const advantageNames = ["normal", "advantage", "disadvantage"]
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
  const difficultyScores = [30, 25, 20, 15, 10, 5, 0]
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
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
  const difficultyScores = [30, 25, 20, 15, 10, 5, 0]
  var character = getCharacter()
  var textIndex = 3
  var missWord = character.name == "You" ? "miss" : "misses"
  var tryWord = character.name == "You" ? "try" : "tries"
  var usingDefaultDifficulty = false

  var statText = null
  statText = searchArgument(command, /ranged/gi, textIndex - 1)
  if (statText == null) {
    statText = character.meleeStat
    textIndex--
  } else if (statText.toLowerCase() == "ranged") statText = character.rangedStat
  statText = toTitleCase(statText)
  
  var advantageText = searchArgument(command, arrayToOrPattern(advantageNames), textIndex - 1)
  if (advantageText == null) {
    advantageText = "normal"
    textIndex--
  }
  else advantageText = advantageText.toLowerCase()

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficultyText = searchArgument(command, arrayToOrPattern(difficultyPatternNames), textIndex - 1)
  if (difficultyText == null) {
    difficultyText = state.defaultDifficulty
    usingDefaultDifficulty = true
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
  modifier = character.proficiency
  if (stat != null) modifier += getModifier(stat.value)

  var targetRoll = 15
  if (/^\d+$/.test(difficultyText)) targetRoll = difficultyText
  else {
    var targetIndex = difficultyNames.indexOf(difficultyText)
    if (targetIndex >= 0 && targetIndex < difficultyNames.length) targetRoll = difficultyScores[targetIndex]
  }

  var enemyString = ""
  if (state.initiativeOrder.length > 0) {
    var foundEnemy

    for (var enemy of state.enemies) {
      if (targetText.toLowerCase().includes(enemy.name.toLowerCase())) {
        foundEnemy = enemy
        break
      }
    }

    if (foundEnemy == null) {
      var indexMatches = targetText.match(/(?<=enemy\s*)\d+/gi)
      if (indexMatches != null) {
        foundEnemy = state.enemies[parseInt(indexMatches[0]) - 1]
        log(`foundEnemy:${foundEnemy}`)
        targetText = targetText.replace(/enemy\s*d+/gi, foundEnemy.name)
      }
    }

    var damage
    if (/^\d*d\d+((\+|-)d+)?$/gi.test(character.damage)) damage = score == 20 ? calculateRoll(character.damage) + calculateRoll(character.damage) : calculateRoll(character.damage)
    else damage = parseInt(character.damage)

    var damageMatches = targetText.match(/\d*d\d+((\+|-)d+)?/gi)
    if (damageMatches != null) damage = score == 20 ? calculateRoll(damageMatches[0]) + calculateRoll(damageMatches[0]) : calculateRoll(damageMatches[0])
    else {
      damageMatches = targetText.match(/\d+/g)
      if (damageMatches != null) damage = score == 20 ? parseInt(damageMatches[damageMatches.length - 1]) * 2 : parseInt(damageMatches[damageMatches.length - 1])
    }

    if (foundEnemy != null) {
      if (usingDefaultDifficulty) targetRoll = foundEnemy.ac
      if (score == 20 || score + modifier >= targetRoll) {
        if (score == 20) enemyString += `\nCritical Damage: ${damage}\n`
        else enemyString += `\nDamage: ${damage}\n`
        foundEnemy.health = Math.max(0, foundEnemy.health - damage)
        if (foundEnemy.health == 0) enemyString += ` ${toTitleCase(foundEnemy.name)} has been defeated!`
        else enemyString += ` ${toTitleCase(foundEnemy.name)} has ${foundEnemy.health} health remaining!`
      }
    }
  }

  var dieText = advantageText == "advantage" || advantageText == "disadvantage" ? `${advantageText}(${die1},${die2})` : die1

  state.show = "prefix"
  
  if (score == 20) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}]\n`
  else if (score == 1) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}]\n`
  else if (modifier != 0) state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${score + modifier}. ${score + modifier >= targetRoll ? "Success!" : "Failure!"}]\n`
  else state.prefix = `\n[Enemy AC: ${targetRoll} Attack roll: ${dieText}. ${score >= targetRoll ? "Success!" : "Failure!"}]\n`

  var text
  if (score + modifier >= targetRoll) text = `\n${toTitleCase(character.name)} successfully hit ${targetText}!`
  else text = `\n${toTitleCase(character.name)} ${tryWord} to hit ${targetText} ${toTitleCase(character.name)} ${missWord}!`

  if (score == 20) text += " Critical success! Your attack is exceptionally damaging!"
  else if (score == 1) text += " Critical failure! Your attack missed in a spectacular way!"

  if (enemyString != null) text += enemyString

  if (score + modifier >= targetRoll || score == 20) text += addXpToAll(Math.floor(state.autoXp * clamp(targetRoll, 1, 20) / 20))
  return text + "\n"
}

function doNote(command) {
  var arg0 = getArgumentRemainder(command, 0)
  
  if (arg0 != null && arg0.length > 0) {
    state.notes.push(arg0)
    state.show = "none"
    return "\n[Note added successfully]\n"
  } else {
    state.notes.push(history[history.length - 1].text)
    state.show = "none"
    return "\n[The last action was successfully added to the notes]\n"
  }
}

function doShowDay(command) {
  state.show = "none"
  return `\n[It is day ${state.day}]\n`
}

function doSetDay(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null || isNaN(arg0)) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  state.day = parseInt(arg0)

  state.show = "none"
  return `\n[The day has been set to day ${state.day}]\n`
}

function doShowNotes(command) {
  state.show = "showNotes"
  return " "
}

function doCreateLocation(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var locationArgIndex = 2

  var arg0 = getArgument(command, 0)
  var arg1 = getArgument(command, 1)

  if (arg0.toLowerCase() == "here") {
    arg0 = state.x
    arg1 = state.y
    locationArgIndex = 1
  } else if (arg0.toLowerCase() == "far") {
    var cx = state.x
    var cy = state.y
    var coords = rotate(cx, cy, getRandomFloat(50, 100) + cx, cy, Math.random() * 360)

    arg0 = coords[0]
    arg1 = coords[1]
    locationArgIndex = 1
  } else if (arg0 == null || isNaN(arg0)) {
    var cx = state.x
    var cy = state.y
    var coords = rotate(cx, cy, getRandomFloat(1, 10) + cx, cy, Math.random() * 360)

    arg0 = coords[0]
    arg1 = coords[1]
    locationArgIndex = 0
  } else if (arg1 == null || isNaN(arg1)) {
    var cx = state.x
    var cy = state.y
    var coords = rotate(cx, cy, parseFloat(arg0) + cx, cy, Math.random() * 360)

    arg0 = coords[0]
    arg1 = coords[1]
    locationArgIndex = 1
  }

  var arg2 = getArgumentRemainder(command, locationArgIndex)
  if (arg2 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var location = createLocation(arg0, arg1, arg2)
  
  state.show = "none"
  return `\n[Location ${toTitleCase(arg2)} has been created at (${location.x},${location.y})]\n`
}

function doGoNorth(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var commandName = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) arg0 = 1
  else {
    if (isNaN(arg0)) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }
    arg0 = parseInt(arg0)
  }
  return doGoToLocation(`${commandName} ${state.x} ${state.y - arg0}`)
}

function doGoSouth(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var commandName = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) arg0 = 1
  else {
    if (isNaN(arg0)) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }
    arg0 = parseInt(arg0)
  }
  return doGoToLocation(`${commandName} ${state.x} ${state.y + arg0}`)
}

function doGoEast(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var commandName = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) arg0 = 1
  else {
    if (isNaN(arg0)) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }
    arg0 = parseInt(arg0)
  }
  return doGoToLocation(`${commandName} ${state.x + arg0} ${state.y}`)
}

function doGoWest(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var commandName = getCommandName(command)
  var arg0 = getArgument(command, 0)
  if (arg0 == null) arg0 = 1
  else {
    if (isNaN(arg0)) {
      state.show = "none"
      return "\n[Error: Expected a number. See #help]\n"
    }
    arg0 = parseInt(arg0)
  }
  return doGoToLocation(`${commandName} ${state.x - arg0} ${state.y}`)
}

function doGoToLocation(command) {
  command = command.replaceAll(/\s*,\s*/g, " ")
  var character = getCharacter()
  var characterName = character == null ? "You" : character.name
  var possessiveName = getPossessiveName(characterName)
  var travelWord = characterName == "You" ? "travel" : "travels"
  var locationArgIndex = 2

  var arg0 = getArgument(command, 0)
  var arg1 = getArgument(command, 1)

  if (arg0 == null || isNaN(arg0)) {
    arg0 = state.x
    arg1 = state.y
    locationArgIndex = 0
  }

  if (arg0 != null && (arg1 == null || isNaN(arg1))) {
    arg1 = null
    locationArgIndex = 1
  }

  var distance = 0
  var location
  var locationName = getArgumentRemainder(command, locationArgIndex)
  if (locationName == null && locationArgIndex == 0) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }
  
  if (!isNaN(arg0) && arg1 == null && locationName == null) {
    arg0 = parseInt(arg0) - 1

    if (arg0 < 0 || arg0 >= state.locations.length) {
      state.show = "none"
      return "\n[Error: Incorrect location number. See #help]\n"
    }

    location = state.locations[arg0]
    arg0 = null
    arg1 = null
  } else if (arg1 == null && locationName != null) {
    var index = state.locations.findIndex(x => x.name.toLowerCase() == locationName.toLowerCase())
    if (index != -1) {
      location = state.locations[index]
      var direction = pointDirection(state.x, state.y, location.x, location.y)
      var args = rotate(state.x, state.y, state.x + parseInt(arg0), state.y, direction)
      arg0 = Math.round(args[0])
      arg1 = Math.round(args[1])
      location = null
    } else {
      arg1 = state.y
      location = null
    }
  } else if (locationName == null) {
    var index = state.locations.findIndex(x => x.x == arg0 && x.y == arg1)
    if (index != -1) location = state.locations[index]
  } else {
    var index = state.locations.findIndex(x => x.name.toLowerCase() == locationName.toLowerCase())
    if (index != -1) location = state.locations[index]
    else location = createLocation(arg0, arg1, locationName)
  }
  
  if (location == null) {
    distance = pointDistance(state.x, state.y, arg0, arg1)
    state.x = parseInt(arg0)
    state.y = parseInt(arg1)
    state.location = null
  } else {
    distance = pointDistance(state.x, state.y, location.x, location.y)
    state.x = location.x
    state.y = location.y
    state.location = location.name
  }
  distance = distance.toFixed(1)
  
  state.show = "none"
  if (location == null) return `\n${characterName} ${travelWord} ${distance > 0 ? distance + " units " : ""} to (${arg0},${arg1})`
  if (state.characters.length > 1) return `\n${possessiveName} party travels ${distance > 0 ? distance + " units " : ""}to ${toTitleCase(location.name)} at (${location.x},${location.y})\n`
  return `\n${characterName} ${travelWord} ${distance > 0 ? distance + " units " : ""}to ${toTitleCase(location.name)} at (${location.x},${location.y})\n`
}

function doGetLocation(command) {
  state.show = "none"
  return `\n[You are at ${state.location == null ? "" : "the location " + toTitleCase(state.location) + " "}(${state.x},${state.y})]`
}

function doClearLocations(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 != null) {
    return doRemoveLocation(command)
  }

  state.locations = []
  state.location = null

  state.show = "none"
  return "\n[The locations have been cleared]\n"
}

function doRemoveLocation(command) {
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (/\d+\D+(\d+\D*)+/gi.test(arg0)) {

    var list = arg0.split(/\D+/)
    list.sort(function(a, b) {
      return b - a;
    });

    var text = "\n"
    list.forEach(x => {
      var num = parseInt(x) - 1
      if (num >= state.locations.length) {
        state.show = "none"
        return `\n[Error: Location ${x} does not exist. See #showlocations]\n`
      }

      var location = state.locations[num]
      state.locations.splice(num, 1)
      text += `[The location ${toTitleCase(location.name)} has been removed]\n`
    })

    state.show = "none"
    return text
  }

  var location
  if (isNaN(arg0)) arg0 = state.locations.findIndex(x => x.name.toLowerCase() == arg0.toLowerCase())
  else arg0--

  if (arg0 == -1) {
    state.show = "none"
    return "\n[Error: Location not found. See #showlocations]\n"
  } else if (arg0 >= state.locations.length || arg0 < 0) {
    state.show = "none"
    return "\n[Error: Location number out of bounds. See #showlocations]\n"
  } else {
    location = state.locations[arg0]
    state.locations.splice(arg0, 1)
  }

  state.show = "none"
  return `\n[The location ${toTitleCase(location.name)} has been removed]\n`
}

function doShowLocations(command) {
  var arg0 = searchArgument(command, /^sort$/gi)
  state.sortLocations = arg0 != null

  state.show = "locations"
  return " "
}

function doEncounter(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    arg0 = "easy"
  }

  var encounter = createEncounter(arg0)
  state.enemies = encounter.enemies
  var text = `\n${encounter.text}\n`

  state.prefix = "\n"
  if (encounter.enemies.length > 0) {
    state.prefix += "You encounter the following enemies:\n"
    for (var enemy of encounter.enemies) {
      state.prefix += `${toTitleCase(enemy.name)} (Health: ${enemy.health} AC: ${enemy.ac} Initiative: ${enemy.initiative})\n`
    }
  }

  state.prefix += encounter.enemies.length > 0 ? "[Type #initiative to begin the battle]\n" : ""

  state.show = "prefix"
  return text
}

function doShowEnemies(command) {
  state.show = "showEnemies"
  return " "
}

function doRemoveEnemy(command) {
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (/\d+\D+(\d+\D*)+/gi.test(arg0)) {

    var list = arg0.split(/\D+/)
    list.sort(function(a, b) {
      return b - a;
    });

    var text = "\n"
    list.forEach(x => {
      var num = parseInt(x) - 1
      if (num >= state.enemies.length) {
        state.show = "none"
        return `\n[Error: Enemy ${x} does not exist. See #showenemies]\n`
      }

      var enemy = state.enemies[num]
      state.enemies.splice(num, 1)
      var index = state.initiativeOrder.indexOf(enemy)
      if (index >= 0) state.initiativeOrder.splice(index, 1)
      text += `[The enemy ${toTitleCase(enemy.name)} has been removed]\n`
    })

    state.show = "none"
    return text
  }

  var enemy
  if (isNaN(arg0)) arg0 = state.enemies.findIndex(x => x.name.toLowerCase() == arg0.toLowerCase())
  else arg0--

  if (arg0 == -1) {
    state.show = "none"
    return "\n[Error: Enemy not found. See #showenemies]\n"
  } else if (arg0 >= state.enemies.length || arg0 < 0) {
    state.show = "none"
    return "\n[Error: Location number out of bounds. See #showenemies]\n"
  } else {
    enemy = state.enemies[arg0]
    state.enemies.splice(arg0, 1)
  }

  state.show = "none"
  return `\n[The enemy ${toTitleCase(enemy.name)} has been removed]\n`
}

function doClearEnemies(command) {
  var arg0 = getArgument(command, 0)
  if (arg0 != null) {
    return doRemoveEnemy(command)
  }

  state.enemies = []
  state.initiativeOrder = []

  state.show = "none"
  return "\n[The enemies have been cleared]\n"
}

function doAddEnemy(command) {
  var name = getArgument(command, 0)
  if (name == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  var health = getArgument(command, 1)
  if (health == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  } else if (/^\d*d\d+((\+|-)\d+)?$/gi.test(health)) {
    health = calculateRoll(health)
  } else if (isNaN(health)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }
  health = parseInt(health)

  var ac = getArgument(command, 2)
  if (ac == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  } else if (/^\d*d\d+((\+|-)\d+)?$/gi.test(ac)) {
    ac = calculateRoll(ac)
  } else if (isNaN(ac)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }
  ac = parseInt(ac)

  var hitModifier = getArgument(command, 3)
  if (hitModifier == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  } else if (/^\d*d\d+((\+|-)\d+)?$/gi.test(hitModifier)) {
    hitModifier = calculateRoll(hitModifier)
  }  else if (isNaN(hitModifier)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }

  var damage = getArgument(command, 4)
  if (damage == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  } else if (isNaN(damage) && !/^\d*d\d+((\+|-)\d+)?$/gi.test(damage)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }

  var initiative = getArgument(command, 5)
  if (initiative == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  } else if (/^\d*d\d+((\+|-)\d+)?$/gi.test(initiative)) {
    initiative = calculateRoll(initiative)
  } else if (isNaN(initiative)) {
    state.show = "none"
    return "\n[Error: Expected a number. See #help]\n"
  }
  initiative = parseInt(initiative)

  var spells = []
  var spell = null
  var index = 6
  do {
    spell = getArgument(command, index++)
    if (spell != null) spells.push(spell)
  } while (spell != null)
  
  var enemy = createEnemy(name, health, ac, hitModifier, damage, initiative)
  enemy.spells = spells

  var enemyMatches = state.enemies.filter(x => x.name.toLowerCase() == enemy.name.toLowerCase() || x.name.toLowerCase() == `${enemy.name.toLowerCase()} a`)
  if (enemyMatches.length > 0) {
    enemy.name = getUniqueName(enemy.name)
    if (enemy.name.endsWith("A")) {
      enemyMatches[0].name = enemy.name
      enemy.name = enemy.name.substring(0, enemy.name.length - 1) + "B"
    }
  }

  state.enemies.push(enemy)

  return `[Enemy ${toTitleCase(enemy.name)} has been created]`
}

function doInitiative(command) {
  for (character of state.characters) {
    var stat = character.stats.find(element => element.name.toLowerCase() == "dexterity")
    if (stat == null) character.calculatedInitiative = calculateRoll("d20")
    else character.calculatedInitiative = calculateRoll("d20") + getModifier(stat.value)
  }

  for (enemy of state.enemies) {
    if (isNaN(enemy.initiative)) enemy.calculatedInitiative = calculateRoll(enemy.initiative)
    else enemy.calculatedInitiative = enemy.initiative
  }

  if (state.enemies.length == 0) {
    state.show = "none"
    return "\n[Error: No enemies! Type #addenemy or #encounter]\n"
  }

  createInitiativeOrder()

  if (state.initiativeOrder.length == 0) {
    state.show = "none"
    return "\n[Error: No combatants! Ensure that your characters have health and you have added enemies. See #help]\n"
  }

  state.show = "initiative"
  return "\nBattle has commenced!\n"
}

function doFlee(command) {
  if (state.initiativeOrder.length == 0) {
    state.show = "none"
    return "\n[Error: Not in combat. Type #initiative first]\n"
  }

  var difficulty = getArgument(command, 0)
  if (difficulty != null) {
    const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
    const difficultyScores = [30, 25, 20, 15, 10, 5, 0]

    const difficultyPatternNames = [...new Set(difficultyNames)]
    difficultyPatternNames.push("\\d+")
    var difficultyIndex = difficultyNames.indexOf(difficulty)
    if (difficultyIndex >= 0 && difficultyIndex < difficultyNames.length) {
      difficulty = difficultyScores[difficultyIndex]
    }
  } else {
    difficulty = state.defaultDifficulty
  }

  var roll = calculateRoll("d20")

  var text = ""
  if (difficulty != 0) text += `\n[DC: ${difficulty} Roll: ${roll}]\n`
  if (roll >= difficulty) {
    state.initiativeOrder = []
    text += `\nThe party successfuly flees from battle!\n`
  } else text += `\nThe party tries to flee from battle, but fails!\n`

  return text
}

function doTurn(command) {
  if (state.initiativeOrder.length > 0) state.initiativeOrder.splice(0, 1)

  var defeatedEnemies = 0
  for (var enemy of state.enemies) {
    if (enemy.health > 0) continue

    defeatedEnemies++
    var index = state.initiativeOrder.indexOf(enemy)
    if (index >= 0) state.initiativeOrder.splice(index, 1)
  }

  var defeatedCharacters = 0
  for (var character of state.characters) {
    if (character.health > 0) continue

    defeatedCharacters++
    var index = state.initiativeOrder.indexOf(character)
    if (index >= 0) state.initiativeOrder.splice(index, 1)
  }

  if (state.initiativeOrder.length == 0) createInitiativeOrder()
  
  if (state.initiativeOrder.length == 0) {
    return "\nDraw! All combatants have been incapacitated.\n"
  }

  if (defeatedEnemies == state.enemies.length) {
    state.initiativeOrder = []
    return "\nVictory! The party has defeated all opponents.\n"
  }

  if (defeatedCharacters == state.characters.length) {
    state.initiativeOrder = []
    return "\nDefeat! The entire party has been incapacitated.\n"
  }

  var activeCharacter = state.initiativeOrder[0]
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
    var hit = calculateRoll(`1d20${activeCharacter.hitModifier > 0 ? "+" + activeCharacter.hitModifier : activeCharacter.hitModifier < 0 ? activeCharacter.hitModifier : ""}`) >= target.ac

    var text = `\n[It is ${possessiveName} turn]\n`
    if (getRandomBoolean() || activeCharacter.spells.length == 0) {
      if (hit) {
        var damage = isNaN(activeCharacter.damage) ? calculateRoll(activeCharacter.damage) : activeCharacter.damage
        target.health = Math.max(target.health - damage, 0)
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

          text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} for ${damage} damage!`
          
          if (target.health == 0) text += ` ${toTitleCase(target.name)} ${areWord} unconscious!\n`
          else text += ` ${toTitleCase(target.name)} ${areWord} at ${target.health} health.\n`
        } else text += `${activeCharacterName} casts spell ${spell} at ${targetNameAdjustedCase} but misses!\n`
      }
    }
    return text
  }
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

  var character = getCharacter()
  var commandName = getCommandName(command)
  var commandNamePlural =  commandName.plural(character.name == "You") 
  var haveWord = character.name == "You" ? "have" : "has"
  var displayItemName = item.name.plural(item.quantity == 1)

  if (item.quantity < 0) item.quantity = 1

  var text = "\n"
  if (item.quantity == 1) text += `${character.name} ${commandNamePlural} ${displayItemName.toLowerCase().startsWith("the ") ? "" : "the "}${displayItemName}.\n`
  else text += `${character.name} ${commandNamePlural} ${item.quantity} ${displayItemName}.\n`

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

function doMap(command) {
  state.show = "map"
  return " "
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
    if (allSynonyms.indexOf(arg0.toLowerCase()) > -1) {
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
  
    if (existingItem.quantity == 1) text = `\n${character.name} ${commandName.plural(character.name == "You")} the ${displayItemName.plural(true)}.\n`
    else if (parseInt(item.quantity) >= parseInt(existingItem.quantity)) text = `${character.name} ${commandName.plural(character.name == "You")} all ${existingItem.quantity} of the ${displayItemName}.`
    else text =  `\n${character.name} ${commandName.plural(character.name == "You")} ${item.quantity} ${displayItemName}.\n`

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
  buyName = args[0].plural(true)

  var sellQuantity
  if (isNaN(args[1])) {
    sellQuantity = 1
  } else {
    sellQuantity = args[1]
    args.splice(1, 1)
  }

  var sellName = args[1].plural(true)

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
  if (found != null) return `\n[${character.name} ${tryWord} to learn the spell ${arg0}, but already knows it]\n`

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
  const difficultyNames = ["impossible", "extreme", "hard", "medium", "easy", "effortless", "automatic"]
  const difficultyScores = [30, 25, 20, 15, 10, 5, 0]
  var character = getCharacter()
  const dontWord = character.name == "You" ? "don't" : "doesn't"
  const tryWord = character.name == "You" ? "try" : "tries"
  var usingDefaultDifficulty = false

  var spellIndex = 2;

  var advantage = searchArgument(command, arrayToOrPattern(advantageNames), spellIndex - 1)
  if (advantage == null) {
    advantage = "normal"
    spellIndex--
  }

  const difficultyPatternNames = [...new Set(difficultyNames)]
  difficultyPatternNames.push("\\d+")
  var difficulty = searchArgument(command, arrayToOrPattern(difficultyPatternNames), spellIndex - 1)
  if (difficulty == null) {
    difficulty = state.defaultDifficulty
    usingDefaultDifficulty = true
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
  var targetText = null
  var atWord = null

  var found = character.spells.find(x => x.toLowerCase() == spell.toLowerCase())
  if (found != null) {
    targetText = getArgumentRemainder(command, spellIndex + 1)
    if (targetText != null) {
      targetText = targetText.trim()
      if (!/^((at)|(on))\s+.*/.test(targetText)) targetText = "at " + targetText
    }
  } else {
    var remainder = getArgumentRemainder(command, spellIndex)
    if (/.*\s((at)|(on))\s.*/i.test(remainder)) {
      spell = remainder.replace(/\s+((at)|(on)).*/i, "").trim()
      targetText = remainder.replace(/^.*\s+(?=(at)|(on))/i, "").trim()
    } else {
      spell = getArgumentRemainder(command, spellIndex).trim()
    }

    found = character.spells.find(x => x.toLowerCase() == spell.toLowerCase())
  }

  if (found == null) {
    state.show = "none"
    return `\n[${toTitleCase(character.name)} ${tryWord} to cast the spell ${spell}, but ${character.name == "You" ? "you" : toTitleCase(character.name)} ${dontWord} know it]\n`
  }

  var text = `${character.name} cast the spell ${spell}${advantage != "normal" ? " with " + advantage : ""}${targetText == null ? "" : " " + targetText}.`

  var modifier = 0
  if (character.spellStat != null) {
    var stat = character.stats.find((element) => element.name.toLowerCase() == character.spellStat.toLowerCase())
    if (stat != null) modifier = getModifier(stat.value)
  }

  var roll1 = calculateRoll("d20")
  var roll2 = calculateRoll("d20")
  var roll = advantage == "advantage" ? Math.max(roll1, roll2) : advantage == "disadvantage" ? Math.min(roll1, roll2) : roll1

  var enemyString = ""
  if (targetText != null && state.initiativeOrder.length > 0) {
    var foundEnemy

    for (var enemy of state.enemies) {
      if (targetText.toLowerCase().includes(enemy.name.toLowerCase())) {
        foundEnemy = enemy
        break
      }
    }

    if (foundEnemy == null) {
      var indexMatches = targetText.match(/(?<=enemy\s*)\d+/gi)
      if (indexMatches != null) {
        foundEnemy = state.enemies[parseInt(indexMatches[0]) - 1]
        targetText = targetText.replace(/enemy\s*d+/gi, foundEnemy.name)
      }
    }

    var damage = roll == 20 ? calculateRoll("2d6") + calculateRoll("2d6") : calculateRoll("2d6")

    var damageMatches = targetText.match(/\d*d\d+((\+|-)d+)?/gi)
    if (damageMatches != null) damage = roll == 20 ? calculateRoll(damageMatches[0]) + calculateRoll(damageMatches[0]) : calculateRoll(damageMatches[0])
    else {
      damageMatches = targetText.match(/\d+/g)
      if (damageMatches != null) damage = roll == 20 ? parseInt(damageMatches[damageMatches.length - 1]) * 2 : parseInt(damageMatches[damageMatches.length - 1])
    }

    if (foundEnemy != null) {
      if (usingDefaultDifficulty) difficulty = foundEnemy.ac
      if (roll == 20 || roll + modifier >= difficulty) {
        if (roll == 20) enemyString += `\nCritical Damage: ${damage}\n`
        else enemyString += `\nDamage: ${damage}\n`
        foundEnemy.health = Math.max(0, foundEnemy.health - damage)
        if (foundEnemy.health == 0) enemyString += ` ${toTitleCase(foundEnemy.name)} has been defeated!\n`
        else enemyString = ` ${toTitleCase(foundEnemy.name)} has ${foundEnemy.health} health remaining!\n`
      }
    }
  }

  state.show = "prefix"
  var dieText = advantage == "advantage" || advantage == "disadvantage" ? `${advantage}(${roll1},${roll2})` : roll1
  var difficultyWord = targetText == null ? "Difficulty" : "Armor"
  if (roll == 20) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. Critcal Success!]\n`
  else if (roll == 1) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. Critcal Failure!]\n`
  else if (modifier != 0) state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}${modifier > 0 ? "+" + modifier : modifier}=${roll + modifier}. ${roll + modifier >= difficulty ? "Success!" : "Failure!"}]\n`
  else state.prefix = `\n[${difficultyWord} Class: ${difficulty}. Roll: ${dieText}. ${roll + modifier >= difficulty ? "Success!" : "Failure!"}]\n`
  
  if (roll == 20) text += ` Critical success!`
  else if (roll == 1) text += ` Critical failure! The spell ${targetText != null ? "misses" : "fails"} in a spectacular way.`
  else if (roll + modifier >= difficulty) text += ` The spell ${targetText != null ? "hits the target" : "is successful"}!`
  else text += ` The spell ${targetText != null ? "misses" : "fails"}!`

  if (enemyString != null) text += enemyString

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
  var arg0 = getArgumentRemainder(command, 0)
  if (arg0 == null) arg0 = 1

  var list = arg0.split(/\D+/)
  list.sort(function(a, b) {
    return b - a;
  });

  var text = "\n"
  list.forEach(x => {
    var num = parseInt(x) - 1
    if (num >= state.notes.length) {
      state.show = "none"
      return `\n[Error: Note ${x} does not exist. Type #shownotes]\n`
    }

    state.notes.splice(num, 1)
    text += `[Note #${x} removed]\n`
  })
  
  state.show = "none"
  return text
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
      return `[Character ${character.name} removed]`
    }
  }

  return `[Character ${arg0} was not found]`
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
  state.show = "clearSpells"
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

function doVersion(command) {
  state.show = "none"
  return `[${version}]`
}

function doSetDamage(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (/^\d*d\d+((\+|-)\d+)?$/gi.test(arg0)) {
    character.damage = arg0
  } else if (!isNaN(arg0)) {
    character.damage = parseInt(arg0)
  } else {
    state.show = "none"
    return "\n[Error: Not a number. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  state.show = "none"
  return `\n[${possessiveName} attack damage is set to ${character.damage}]\n`
}

function doSetProficiency(command) {
  var character = getCharacter()
  var arg0 = getArgument(command, 0)
  if (arg0 == null) {
    state.show = "none"
    return "\n[Error: Not enough parameters. See #help]\n"
  }

  if (/^\d*d\d+((\+|-)\d+)?$/gi.test(arg0)) {
    character.hitModifier = calculateRoll(arg0)
  } else if (!isNaN(arg0)) {
    character.hitModifier = parseInt(arg0)
  } else {
    state.show = "none"
    return "\n[Error: Not a number. See #help]\n"
  }

  var possessiveName = getPossessiveName(character.name)

  state.show = "none"
  return `\n[${possessiveName} proficiency is set to ${character.hitModifier}]\n`
}

function doReset(command) {
  state.notes = []
  state.characters = []
  state.locations = []
  state.location = null
  state.enemies = null
  state.initiativeOrder = []
  state.x = null
  state.y = null
  state.defaultDifficulty = null
  state.autoXp = null
  state.day = null

  state.show = "reset"
  return " "
}

function doHelp(command) {
  state.show = "help"
  return " "
}

modifier(text)