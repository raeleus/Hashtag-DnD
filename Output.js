const modifier = (text) => {
  if (state.show == null) return { text }

  var character = getCharacter()
  var possessiveName = character == null ? null : getPossessiveName(character.name)
  var type = history[history.length - 1].type
  const originalText = text
  text = type != "story" ? "" : history[history.length - 1].text.endsWith("\n") ? "" : "\n"
  
  switch (state.show) {
    case "create":
      switch (state.createStep) {
        case 0:
          text += `***CHARACTER CREATION***\nCharacter: ${state.tempCharacter.name}\nWould you like to use a prefab character? (y/n/q to quit)\n`
          break
        case 1:
          text += `What class is your character?\n`
          break
        case 2:
          text += `You rolled the following stat dice: ${state.statDice}\nChoose your abilities in order from highest to lowest\n1. Strength: Physical power and endurance\n2. Dexterity: Agility and coordination\n3. Constitution: Toughness and physique \n4. Intelligence: Reasoning and memory\n5. Wisdom: Judgement and insight\n6. Charisma: Force of personality and persuasiveness\n\nEnter the numbers with spaces between or q to quit.\n`
          break
        case 3:
          text += `What ability is your spell casting ability?\n1. Intelligence\n2. Wisdom\n3. Charisma\n4. Not a spell caster\nq to quit\n`
          break
        case 4:
          text += `Enter a short summary about your character or q to quit\n`
          break
        case 100:
          text += `What character will you choose?\n1. Fighter: A skilled melee warrior specializing in weapons and armor.\n2. Cleric: A follower of a deity that can call on divine power.\n3. Rogue: An expert in stealth, subterfuge, and exploitation.\n4. Ranger: A talented hunter adept in tracking, survival, and animal handling.\n5. Barbarian: Combat expert focused on brute strength and raw fury.\n6. Bard: A musician that can transform song and word into magic.\n7. Druid: Commands the natural world to cast spells and harness its power.\n8. Monk: A martial artist who has mastered melee and unarmed combat.\n9. Paladin: A virtuous holy warrior with expertise in armor and mysticism.\n10. Wizard: An expert in magic ability who found their power through arcane knowledge.\n11. Sorcerer: A masterful spellcaster deriving their power from an innate source.\n12. Warlock: A magic user granted ability by a pact with a powerful patron.\n13. Artificer: An inventor and alchemist capable of imbuing objects with magic.\n\nEnter the number or q to quit.\n`
          break
        case 500:
          text += `${state.tempCharacter.name} the ${state.tempCharacter.className} has been created.\nType #bio to see a summary of your character.\n***********\n`
          break;
        case null:
          text += `[Character creation has been aborted!]\n`
          break
      }
      break
    case "bio":
      text += `*** ${possessiveName.toUpperCase()} BIO ***\n`
      text += `Class: ${character.className}\n`
      text += `Health: ${character.health}/${getHealthMax()}\n`
      text += `Experience: ${character.experience}\n`
      text += `Level: ${getLevel(character.experience)}\n`
      var nextLevel = getNextLevelXp(character.experience)
      text += `Next level at: ${nextLevel == - 1 ? "(at maximum)": nextLevel + " xp"}\n\n`
      text += `-ABILITIES-\n`

      character.stats.forEach(function(x) {
        text += `* ${toTitleCase(x.name)} ${x.value}\n`
      })

      text += `----\n\n`

      text += `-SKILLS-\n`

      character.skills.forEach(function(x) {
        const stat = character.stats.find(y => y.name.toLowerCase() == x.stat.toLowerCase())

        var statModifier = stat != null ? getModifier(stat.value): 0
        var totalModifier = x.modifier + statModifier
        var modifier = x.modifier

        if (statModifier >= 0) statModifier = `+${statModifier}`
        if (totalModifier >= 0) totalModifier = `+${totalModifier}`
        if (modifier >= 0) modifier = `+${modifier}`

        text += `* ${toTitleCase(x.name)} ${totalModifier} = ${toTitleCase(x.stat)} ${statModifier} Proficiency ${modifier}\n`
      })

      text += `----\n\n`

      text += `Melee Ability: ${character.meleeStat == null ? "none" : character.meleeStat}\n\n`
      text += `Ranged Ability: ${character.rangedStat == null ? "none" : character.rangedStat}\n\n`
      text += `Spellcasting Ability: ${character.spellStat == null ? "none" : character.spellStat}\n\n`

      if (character.spellStat != null) {
        text += `-SPELLS-\n`
        
        character.spells.forEach(function(x) {
          text += `* ${toTitleCase(x)}\n`
        })

        text += `----\n\n`
      }

      text += `-INVENTORY-\n`
      
      character.inventory.forEach(function(x) {
        text += `* ${x.quantity} ${toTitleCase(x.name.plural(x.quantity == 1))}\n`
      })

      text += `----\n\n`

      text += `Summary: ${character.summary}\n\n`

      text += `**************\n\n`
      break
    case "showNotes":
      text += "*** NOTES ***"
      var counter = 1
      state.notes.forEach(function(x) {
        text += `\n${counter++}. ${x}`
      })
      text += "\n**************\n\n"
      break
    case "clearNotes":
      text += "[Notes cleared successfully]\n"
      break
    case "inventory":
      text += `*** ${possessiveName.toUpperCase()} INVENTORY ***`
      if (character.inventory.length > 0) {
        character.inventory.forEach(function(x) {
          text += `\n* ${x.quantity} ${toTitleCase(x.name.plural(x.quantity == 1))}`
        })
      } else {
        text += `\n${possessiveName} inventory is empty!`
      }
      text += "\n******************\n\n"
      break
    case "characters":
      text += `*** CHARACTERS ***`
      if (state.characters.length > 0) {
        state.characters.forEach(function(x) {
          text += `\n* ${toTitleCase(x.name)} the ${toTitleCase(x.className)}: ${x.summary}`
        })
      } else {
        text += `\n${possessiveName} inventory is empty!`
      }
      text += "\n******************\n\n"
      break
    case "spellbook":
      text += `*** ${possessiveName.toUpperCase()} SPELLBOOK ***`
      if (character.spells.length > 0) {
        character.spells.forEach(function(x) {
          text += "\n* " + toTitleCase(x)
        })
      } else {
        text += `\n${possessiveName} spellbook is empty!`
      }
      text += "\n******************\n\n"
      break
    case "stats":
      text += `*** ${possessiveName.toUpperCase()} ABILITIES ***\n`
      if (character.stats.length > 0) {
        character.stats.forEach(function(x) {
          text += `* ${toTitleCase(x.name)} ${x.value}\n`
        })
      } else {
        text += `${character.name} has no abilities!\n`
      }
      text += "******************\n\n"
      break
    case "skills":
      text += `*** ${possessiveName.toUpperCase()} SKILLS ***\n`
      if (character.skills.length > 0) {
        character.skills.forEach(function(x) {
          const stat = character.stats.find(y => y.name.toLowerCase() == x.stat.toLowerCase())
          
          var statModifier = stat != null ? getModifier(stat.value): 0
          var totalModifier = x.modifier + statModifier
          var modifier = x.modifier

          if (statModifier >= 0) statModifier = `+${statModifier}`
          if (totalModifier >= 0) totalModifier = `+${totalModifier}`
          if (modifier >= 0) modifier = `+${modifier}`

          text += `* ${toTitleCase(x.name)} ${totalModifier} = ${toTitleCase(x.stat)} ${statModifier} Proficiency ${modifier}\n`
        })
      } else {
        text += `${character.name} has no skills!\n`
      }
      text += "******************\n\n"
      break
    case "none":
      text += " "
      break
    case "prefix":
      text = state.prefix + originalText
      break
    case "clearInventory":
      text += `[${possessiveName} inventory has been emptied]\n`
      break
    case "reset":
      text += "[All settings have been reset]\n"
      break
    case "help":

      text += "--Basic Hashtags--"
      text += "\n#roll (advantage|disadvantage) (dice_value)"
      text += "\n    Rolls a die/dice and shows the result. dice_value can be in the following formats 5d20 or d20 or 20"
      text += "\n#generatename (male|female) (fantasy|modern|scifi|nordic)"
      text += "\n    Retrieves a random name from a list of names in the specified gender and genre"
      text += "\n#shownotes"
      text += "\n    Shows all the notes."
      text += "\n#note message"
      text += "\n    Adds the specified message as a note."
      text += "\n#clearnotes"
      text += "\n    Removes all notes."
      text += "\n#removenote value"
      text += "\n    Removes the specified note as indicated by the number listed in #shownotes."

      text += "\n\n--Characters--"
      text += "\n#setup"
      text += "\n    Launches the create character setup."
      text += "\n#bio"
      text += "\n    Shows the character's abilities, skills, spells, inventory, and everything else about this character."
      text += "\n#setclass"
      text += "\n    Sets the class of the character for player reference."
      text += "\n#setsummary"
      text += "\n    Sets the summary of the character for player reference."
      text += "\n#sethealth value"
      text += "\n    Sets the character's health to specified value. It's capped at the character's max health."
      text += "\n#heal value"
      text += "\n    Increases the character's health by the specified value. It's capped at the character's max health."
      text += "\n#damage value"
      text += "\n    Decreases the character's health by the specified value. Reaching 0 causes the character to become \"unconcious\"."
      text += "\n#rest"
      text += "\n    Sets all of the characters' health to their maximums. Use #shortrest to only restore half health."
      text += "\n#setxp value"
      text += "\n    Sets the character's experience to the specified value."
      text += "\n#addxp value"
      text += "\n    Increases the character's experience by the specified value. The player is notified if there is a level up."
      text += "\n#setautoxp value"
      text += "\n    Automatically increases the experience of all party members when a #try, #attack, or #cast is called. The amount of experience is scaled based on the difficulty class of the check with any check 20 or higher will result in the maximum specified by value. Set to 0 to disable."
      text += "\n#showautoxp"
      text += "\n    Shows the value of the auto xp."
      text += "\n#levelup"
      text += "\n    Increases the character's experience by the exact amount needed to reach the next level."
      text += "\n#setdefaultdifficulty (difficulty_class or effortless|easy|medium|hard|impossible)"
      text += "\n    Sets the default difficulty for #check, #try, #attack, and #cast when a difficulty is not specified. The normal default is 10 (easy)"
      text += "\n#showdefaultdifficulty"
      text += "\n    Shows the default difficulty for #check, #try, #attack, and #cast when a difficulty is not specified. The normal default is 10 (easy)"
      text += "\n#showcharacters"
      text += "\n    Lists all current characters and their classes/summaries."
      text += "\n#removecharacter name"
      text += "\n    Removes the character that has the indicated name."

      text += "\n\n--Character Checks--"
      text += "\n#check (ability|skill) (advantage|disadvantage) (difficulty_class or effortless|easy|medium|hard|impossible)"
      text += "\n    Rolls a d20 and compares the result (modified by the character's ability/skill) to the specified difficulty"
      text += "\n#try (ability|skill) (advantage|disadvantage) (difficulty_class or effortless|easy|medium|hard|impossible) task"
      text += "\n    Attempts to do the task based on the character's ability/skill against the specified difficulty."
      text += "\n#attack (ranged) (advantage|disadvantage) (ac or effortless|easy|medium|hard|impossible) target"
      text += "\n    Attacks the specified target with a melee (the default) or ranged attack. The roll is compared against the specified AC which will determine if the attack succeeds or misses."
      text += "\n#cast (advantage|disadvantage) (difficulty_class or effortless|easy|medium|hard|impossible) spell(target)"
      text += "\n    Character will cast the indicated spell if the spell is in their spellbook. It will be a targeted spell if a target is indicated. The roll is modified by the spell casting ability of the character. You may type a phrase without quotes for spell such as \"cast fire bolt at the giant chicken\""
      
      text += "\n\n--Abilities--"
      text += "\n#setability ability value"
      text += "\n    Adds the ability to the character if necessary and sets it to the specified value."
      text += "\n#showabilities"
      text += "\n    Shows the character's list of abilities."
      text += "\n#removeability ability"
      text += "\n    Removes the ability from the character's list of abilities."
      text += "\n#clearabilities"
      text += "\n    Removes all abilities from the character."
      text += "\n#setspellability ability"
      text += "\n    Sets the ability that affects the modifier for #cast."
      text += "\n#setmeleeability ability"
      text += "\n    Sets the character's ability modifier that affects melee attacks."
      text += "\n#setrangedability ability"
      text += "\n    Sets the character's ability modifier that affects ranged attacks."

      text += "\n\n--Skills--"
      text += "\n#setskill skill (ability) value"
      text += "\n    Adds the skill to the character if necessary, and associates it with the specified ability and value. The ability is optional only if this is an existing skill. New skills need an ability specified."
      text += "\n#showskills"
      text += "\n    Shows the character's list of skills"
      text += "\n#removeskill"
      text += "\n    Removes the skill from the character's list of skills."
      text += "\n#clearskills"
      text += "\n    Removes all skills from the character."
      
      text += "\n\n--Inventory--"
      text += "\n#take (quantity) item"
      text += "\n    Adds the specified quantity of item to the character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored."
      text += "\n#buy (buy_quantity) buy_item (sell_quantity) sell_item"
      text += "\n    Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. Quotes are necessary for items with spaces. The words for, with, the, a, and an are ignored."
      text += "\n#sell (sell_quantity) sell_item (buy_quantity) buy_item"
      text += "\n    Just like #buy, but with the parameters reversed. Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. The words for, with, the, a, and an are ignored."
      text += "\n#drop (quantity or all|every) item"
      text += "\n    Removes the specified quantity of item from the character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored."
      text += "\n#give other_character (quantity or all|every) item"
      text += "\n    Removes the quantity of item from the character's inventory and adds it to the other_character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored."
      text += "\n#inventory"
      text += "\n    Shows the items in the inventory of the character."
      text += "\n#clearinventory"
      text += "\n    Removes all items from the character's inventory."

      text += "\n\n--Spells--"
      text += "\n#learnspell spell"
      text += "\n    Adds the specified spell to the character's spellbook. Creates a story card if necessary."
      text += "\n#forgetSpell"
      text += "\n    Removes the specified spell from the character's spellbook"
      text += "\n#clearspells"
      text += "\n    Removes all spells from the character's spellbook."
      text += "\n#spellbook"
      text += "\n    Shows the list of spells that the character has learned."

      text += "\n\n--Danger Zone--"
      text += "\n#reset"
      text += "\n    Removes all characters and changes all settings to their defaults. Use with caution!"
      
      text += "\n\n--Other--"
      text += "\n#help"
      text += "\n    This long ass help menu. I am paid by lines of codes."
      
      break
  }

  state.show = null
  return { text }
}

modifier(text)