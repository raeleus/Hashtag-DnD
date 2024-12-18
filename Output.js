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
    case "setupEnemy":
      switch (state.setupEnemyStep) {
        case 0:
          text += `***ENEMY CREATION***\nWould you like to use a preset enemy? (y/n/q to quit)\n`
          break
        case 1:
          text += `What is the enemy's name? This must be a unique name that has no duplicates in the current encounter. Type q to quit.\n`
          break
        case 2:
          text += `What is the enemy's health? This can be any positive integer or a dice roll (ie. 3d6+5). Type q to quit.\n`
          break
        case 3:
          text += `What is the enemy's armor class (AC)? This can be any positive integer with 10 being easy and 20 being incredibly difficult. It can also be a dice roll (ie. 2d4+5). Type q to quit\n`
          break
        case 4:
          text += `What is the enemy's hit modifier? This affects how accurate their attacks are. This can be any integer. 0 is normal accuracy. Type q to quit\n`
          break
        case 5:
          text += `What is the enemy's damage? This can be any positive integer or a dice roll (ie. 2d6+5). The dice roll is calculated at the time of each attack. Type q to quit.\n`
          break
        case 6:
          text += `What is the enemy's initiative? Initiative controls turn order. This can be any positive integer with higher numbers going first in battle. This can also be a dice roll (ie. 1d20+3). Type q to quit.\n`
          break
        case 7:
          text += "Enter the name of a spell that the enemy knows. If it can target this spell at a player character, add a dice roll for the damage calculation after it (ie. Ray of Frost3d6+2). Type s to stop entering spells or type q to quit.\n"
          break
        case 8:
          text += "Enter the name of another spell that the enemy knows. If it can target this spell at a player character, add a dice roll for the damage calculation after it (ie. Ray of Frost3d6+2). Type s to stop entering spells or type q to quit.\n"
          break
        case 100:
          text += `What enemy preset will you choose?\nLevel 1 or lesser\n1. Animated Armor\n2. Awakened Shrub\n3. Brigand\n4. Black Bear\n5. Boar\n6. Cockatrice\n7. Constrictor Snake\n8. Dire Wolf\n9. Ghoul\n10. Giant Centipede\n11. Giant Rat\n12. Giant Wolf Spider\n13. Gnoll\n14. Goblin\n15. Harpy\n16. Hobgoblin\n17. Kobold\n18. Orc\n19. Satyr\n20. Skeleton\n21. Strige\n22. Warhorse\n23. Wolf\n24. Worg`
          text += `\n\nLevels 2-5\n25. Zombie\n26. Air Elemental\n27. Basilisk\n28. Berserker\n29. Chuul\n30. Doppelganger\n31. Druid\n32. Earth Elemental\n33. Fire Elemental\n34. Gorgon\n35. Green Hag\n36. Griffon\n37. Hell Hound\n38. Hill Giant\n39.  Manticore\n40. Minotaur\n41. Mimic\n42. Ogre\n43. Owlbear\n44. Red Dragon Wyrmling\n45. Spectator\n46. Troll\n47. Wererat\n48. Werewolf\n49. Vampire Spawn\n50. Wight`
          text += `\n\nLevels 6-10\n51. Aboleth\n52. Assassin\n53. Chimera\n54. Cloud Giant\n55. Cyclops\n56. Deva\n57. Drider\n58. Frost Giant\n59. Hydra\n60. Insane Mage\n61. Medusa\n62. Shield Guardian\n63. Spirit Naga\n64. Stone Golem\n65. Treant\n66. Young Black Dragon\n67. Young Blue Dragon\n68. Young Brass Dragon\n69. Young Bronze Dragon\n70. Young Copper Dragon\n71. Young Gold Dragon\n72. Young Green Dragon\n73. Young Red Dragon\n74. Young Silver Dragon\n75. Young White Dragon`
          text += `\n\nLevels 11-15\n76. Adult Black Dragon\n77. Adult Bronze Dragon\n78. Adult Copper Dragon\n79. Adult Green Dragon\n80. Animated Statue\n81. Arch Mage\n82. Behir\n83. Boneclaw\n84. Deathwolf\n85. Djinni\n86. Drow Inquisitor\n87. Efreeti\n88. Elder Brain\n89. Erinyes\n90. Ice Devil\n91. Jabberwock\n92. Megapede\n93. Mummy Lord\n94. Purple Worm\n95. Remorhaz\n96. Skull Lord\n97. Spider Dragon\n98. Storm Giant\n99. Vampire\n100. Zikran`
          text += `\n\nLevels 16 and up\n101. Ancient Black Dragon\n102. Adult Blue Dragon\n103. Adult Gold Dragon\n104. Adult Silver Dragon\n105. Ancient Gold Dragon\n106. Ancient Red Dragon\n107. Androsphinx\n108. Bael\n109. Balor\n110. Baphomet\n111. Cosmic Horror\n112. Death Knight\n113. Demogorgon\n114. Dragon\n115. Drow Matron Mother\n116. Flesh Colossus\n117. Kraken\n118. Iron Golem\n119. Leviathan\n120. Lich\n121. Planetar\n122. Raeleus\n123. Solar\n124. Tarrasque\n125. Zariel`
          text += `\n\nHumanoid\n126. Commoner\n127. Bandit\n128. Guard\n129. Cultist\n130. Acolyte\n131. Apprentice\n132. Witch\n133. Buccaneer\n134. Spy\n135. Captain\n136. Bard\n137. Berserker\n138. Priest\n139. Knight\n140. Archer\n141. Warrior\n142. Conjurer\n143. Mage\n144. Assassin\n145. Evoker\n146. Necromancer\n147. Champion\n148. Warlord\n149. Archmage\n150. Archdruid`
          text += `\n\nEnter the number or q to quit. If you want to rename the enemy, add a space and type the name\n(ie. 25 Thuggish Zombie B)\n`
          break
        case 500:
          var hashtag = `#addenemy "${state.tempEnemy.name}" ${state.tempEnemy.health} ${state.tempEnemy.ac} ${state.tempEnemy.hitModifier} ${state.tempEnemy.damage} ${state.tempEnemy.initiative}`
          for (var spell of state.tempEnemy.spells) {
            hashtag += ` "${spell}"`
          }

          text += `${state.tempEnemy.name} has been created.\nType #initiative to start the battle.\nCopy and paste the following hashtag to create another identical enemy like this:\n${hashtag}\n***********\n`
          break;
        case null:
          text += `[Enemy creation has been aborted!]\n`
          break
      }
      break
    case "stragedy":
      text += handleStragedy()
      break
    case "stragedyShop":
      text += handleStragedyShop()
      break
    case "bio":
      text += `*** ${possessiveName.toUpperCase()} BIO ***\n`
      text += `Class: ${character.className}\n`
      text += `Health: ${character.health}/${getHealthMax()}\n`
      text += `Armor Class: ${character.ac}\n`
      text += `Damage: ${character.damage}\n`
      text += `Weapon Proficiency: ${character.proficiency}\n`
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
      if (state.notes.length == 0) text += "\nThere are no notes!"
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
    case "location":
      var localLocations = []
      for (location of state.locations) {
        if (location.x == state.x && location.y == state.y) localLocations.push(location)
      }

      if (localLocations.length > 0) {
        text += "Places of interest here:\n"
        for (location of localLocations) {
          text += `* ${location.name}\n`
        }
      } else {
        text += " "
      }
      break
    case "locations":
      text += `Player location: ${state.location == null ? "" : state.location + " "}(${state.x},${state.y})\n`
      text += `*** LOCATIONS ***\n`
      locations = state.locations
      if (state.sortLocations) {
        locations = [...new Set(state.locations)]
        locations.sort(function(a, b) {
          var distanceA = pointDistance(state.x, state.y, a.x, a.y)
          var distanceB = pointDistance(state.x, state.y, b.x, b.y)
          return distanceA - distanceB;
        });
      
      }

      if (locations.length > 0) {
        var index = 0
        locations.forEach(function(location) {
          var distance = pointDistance(state.x, state.y, location.x, location.y).toFixed(1)
          text += `${state.sortLocations ? "" : ++index + ". "}${toTitleCase(location.name)} (${location.x},${location.y}) Distance: ${distance}\n`
        })
      } else {
        text += `No locations have been discovered!\n`
      }
      text += "******************\n\n"
      break
    case "map":
      text += `A 11x11 map of the area surrounding (${state.x},${state.y}):\n`
      var map = mapGenerate()
      state.locations.forEach(location => {
        map = mapReplace(map, location.x, location.y, location.name.substring(0, 1).toUpperCase())
      })
      map = mapReplace(map, state.x, state.y, "@")
      text += map
      break
    case "none":
      text += " "
      break
    case "prefix":
      text = state.prefix + originalText
      break
    case "prefixOnly":
      text = state.prefix
      break
    case "clearInventory":
      text += `[${possessiveName} inventory has been emptied]\n`
      break
    case "clearSpells":
      text += `[${possessiveName} spells have been cleared]\n`
      break
    case "showEnemies":
      text += "*** ENEMIES ***\n"

      if (state.enemies.length == 0) {
        text += "There are no enemies present here. Type #encounter to generate a scripted set or #addenemy to add your own\n"
      } else {
        var index = 0
        for (var enemy of state.enemies) {
          text += `${++index}. ${toTitleCase(enemy.name)} (Health: ${enemy.health} AC: ${enemy.ac} Initiative: ${enemy.initiative})\n`
        }
      }

      text += "******************\n\n"
      break
    case "initiative":
      text += "*** INITIATIVE ORDER ***\n"

      if (state.initiativeOrder.length == 0) {
        text += "There is no one in the battle. This makes no sense!"
      } else {
        var index = 0
        for (var character of state.initiativeOrder) {
          text += `${++index}. ${toTitleCase(character.name)} (Initiative: ${character.calculatedInitiative})\n`
        }
      }

      text += "******************\n\n"
      
      if (state.initiativeOrder.length > 0) {
        state.initiativeOrder = []
        text += `[Type #turn]\n`
      }
      break
    case "reset":
      text += "[All settings have been reset]\n"
      break
    case "help":

      text += "--Basic Hashtags--"
      text += "\n#roll (advantage|disadvantage) (dice_value)"
      text += "\n    Rolls a die/dice and shows the result. dice_value can be in the following formats 5d20+6 or 5d20 or d20 or 20. The parameters can be listed in any order."
      text += "\n#generatename (male|female) (fantasy|modern|scifi|nordic)"
      text += "\n    Retrieves a random name from a list of names in the specified gender and genre. The parameters can be listed in any order."
      text += "\n#shownotes"
      text += "\n    Shows all the notes."
      text += "\n#note (message)"
      text += "\n    Adds the specified message as a note. If the message is not specified, the last action's text will be saved as a note. Keep in mind that player adventures have a limited amount of state storage (an unspecified amount) so avoid saving too many notes. Quotes are not necessary."
      text += "\n#clearnotes"
      text += "\n    Removes all notes."
      text += "\n#removenote value"
      text += "\n    Removes the specified note as indicated by the number listed in #shownotes. To delete multiple notes, type the numbers with spaces or commas between them. This is safer than calling #removenote multiple times because the numbers shift as notes are deleted."

      text += "\n\n--Characters--"
      text += "\n#setup"
      text += "\n    Launches the create character setup."
      text += "\n#bio"
      text += "\n    Shows the character's abilities, skills, spells, inventory, and everything else about this character."
      text += "\n#renamecharacter new_name"
      text += "\n    Renames the character to the new name. All abilities, skills, inventory, etc. will remain the same. Quotes are not necessary."
      text += "\n#clonecharacter new_name"
      text += "\n    Copies the abilities, skills, inventory, etc. of the current character to a new character with the name new_name. Quotes are not necessary."
      text += "\n#setclass class"
      text += "\n    Sets the class of the character for player reference. Quotes are not necessary."
      text += "\n#setsummary summary"
      text += "\n    Sets the summary of the character for player reference. Quotes are not necessary."
      text += "\n#sethealth value"
      text += "\n    Sets the character's health to specified value. It's capped at the character's max health."
      text += "\n#heal value or dice_roll (target)"
      text += "\n    Increases the target enemy's or character's health by the specified value or dice_roll. If a target isn't specified, the character calling the command is healed."
      text += "\n#healparty value or dice_roll"
      text += "\n    Increases the health of all party characters' by the specified value or dice_roll."
      text += "\n#damage value or dice_roll (target) "
      text += "\n    Decreases the target enemy's or character's health by the specified value or dice_roll. If a target isn't specified, the character calling the command is damaged. Reaching 0 causes the target to become \"unconscious\"."
      text += "\n#setac value"
      text += "\n    Sets the armor class of the character. The default is 10"
      text += "\n#setdamage value or dice_roll"
      text += "\n    Sets the default damage that the character causes when attacking. If a dice_roll is specified, a randomized damage will be calculated at the time of the attack. The default is 1d6"
      text += "\n#setweaponproficiency value or dice_roll"
      text += "\n    Sets the weapon proficiency of the character which affects the chance to hit. If a dice_roll is specified, a randomized value is calculated. The default is 2"
      text += "\n#rest"
      text += "\n    Sets all of the characters' health to their maximums. Use #shortrest to only restore half health. This command increases the day counter and displays the number of days since your adventure began."
      text += "\n#showday"
      text += "\n    Shows the number of days since your adventure began."
      text += "\n#setday"
      text += "\n    Sets the number of days since your adventure began."
      text += "\n#setxp value"
      text += "\n    Sets the character's experience to the specified value."
      text += "\n#addxp (party) value"
      text += "\n    Increases the character's experience by the specified value. The player is notified if there is a level up. If the parameter party is specified, xp will be added to the entire party instead. Parameters can be listed in any order."
      text += "\n#setautoxp value"
      text += "\n    Automatically increases the experience of all party members when a #try, #attack, or #cast is called. The amount of experience is scaled based on the difficulty class of the check with any check 20 or higher will result in the maximum specified by value. Set to 0 to disable."
      text += "\n#showautoxp"
      text += "\n    Shows the value of the auto xp."
      text += "\n#levelup"
      text += "\n    Increases the character's experience by the exact amount needed to reach the next level."
      text += "\n#setdefaultdifficulty (difficulty_class or automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Sets the default difficulty for #check, #try, #attack, and #cast when a difficulty is not specified. The normal default is 10 (easy). If you do not pass any parameters, the default will be set to 10 (easy)."
      text += "\n#showdefaultdifficulty"
      text += "\n    Shows the default difficulty for #check, #try, #attack, and #cast when a difficulty is not specified. The normal default is 10 (easy)."
      text += "\n#showcharacters"
      text += "\n    Lists all current characters and their classes/summaries."
      text += "\n#removecharacter name"
      text += "\n    Removes the character that has the indicated name."

      text += "\n\n--Character Checks--"
      text += "\n#check (ability|skill) (advantage|disadvantage) (difficulty_class or automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Rolls a d20 and compares the result (modified by the character's ability/skill) to the specified difficulty. The parameters can be listed in any order."
      text += "\n#try (ability|skill) (advantage|disadvantage) (difficulty_class or automatic|effortless|easy|medium|hard|impossible) task"
      text += "\n    Attempts to do the task based on the character's ability/skill against the specified difficulty. Quotes are not necessary."
      text += "\n#attack (ranged) (advantage|disadvantage) (ac or effortless|easy|medium|hard|impossible) target"
      text += "\n    Attacks the specified target with a melee (the default) or ranged attack. The roll is compared against the specified AC which will determine if the attack succeeds or misses. If the AC is not specified, the default AC or the AC of the opponent in combat will be used. The parameters can be listed in any order, except the target must be listed last. The target can include the name of the enemy or the word \"enemy\" and the number of the enemy as listed in #enemies. The target can also include a damage amount. If the damage is not specified, the character's default damage is used. Quotes are not necessary.\nExample:\nAstri #attack advantage The Evil Knight for 2d12+2 damage"
      text += "\n#cast (advantage|disadvantage) (difficulty_class or effortless|easy|medium|hard|impossible) spell(target)"
      text += "\n    Character will cast the indicated spell if the spell is in their spellbook. It will be a targeted spell if a target is indicated. The roll is modified by the spell casting ability of the character. You may type a phrase without quotes for spell such as \"cast fire bolt at the giant chicken\". If the difficulty is not specified, the default difficulty or the AC of the opponent in combat will be used. The parameters can be listed in any order, except the target must be listed last. The target can include the name of the enemy or the word \"enemy\" and the number of the enemy as listed in #enemies. The target can also include a damage amount. If the damage is not specified, the character's default damage is used. Quotes are not necessary.\nExample:\nAstri #attack advantage The Evil Knight for 2d12+2 damage"
      
      text += "\n\n--Abilities--"
      text += "\n#setability ability value"
      text += "\n    Adds the ability to the character if necessary and sets it to the specified value. Quotes are required for abilities with spaces."
      text += "\n#showabilities"
      text += "\n    Shows the character's list of abilities."
      text += "\n#removeability ability"
      text += "\n    Removes the ability from the character's list of abilities. Quotes are not necessary."
      text += "\n#clearabilities"
      text += "\n    Removes all abilities from the character."
      text += "\n#setspellability ability"
      text += "\n    Sets the ability that affects the modifier for #cast. Quotes are not necessary."
      text += "\n#setmeleeability ability"
      text += "\n    Sets the character's ability modifier that affects melee attacks. Quotes are not necessary."
      text += "\n#setrangedability ability"
      text += "\n    Sets the character's ability modifier that affects ranged attacks. Quotes are not necessary."

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
      text += "\n    Adds the specified quantity of item to the character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored. Quotes are not necessary."
      text += "\n#buy (buy_quantity) buy_item (sell_quantity) sell_item"
      text += "\n    Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. Quotes are necessary for items with spaces in the name. The words for, with, the, a, and an are ignored."
      text += "\n#sell (sell_quantity) sell_item (buy_quantity) buy_item"
      text += "\n    Just like #buy, but with the parameters reversed. Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. The words for, with, the, a, and an are ignored. Quotes are necessary for items with spaces in the name."
      text += "\n#drop (quantity or all|every) item"
      text += "\n    Removes the specified quantity of item from the character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored. Quotes are not necessary."
      text += "\n#give other_character (quantity or all|every) item"
      text += "\n    Removes the quantity of item from the character's inventory and adds it to the other_character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored. Quotes are not necessary for the item."
      text += "\n#renameitem original_name new_name"
      text += "\n    Renames the item indicated by original_name to the new_name. The quantity remains the same. Quotes are necessary for items with spaces in the name."
      text += "\n#inventory"
      text += "\n    Shows the items in the inventory of the character."
      text += "\n#clearinventory"
      text += "\n    Removes all items from the character's inventory."

      text += "\n\n--Spells--"
      text += "\n#learnspell spell"
      text += "\n    Adds the specified spell to the character's spellbook. Creates a story card if necessary. Quotes are not necessary."
      text += "\n#forgetSpell spell"
      text += "\n    Removes the specified spell from the character's spellbook. Quotes are not necessary."
      text += "\n#clearspells"
      text += "\n    Removes all spells from the character's spellbook."
      text += "\n#spellbook"
      text += "\n    Shows the list of spells that the character has learned."

      text += "\n\n--Combat--"
      text += "\n#setupenemy"
      text += "\nFollow prompts to create an enemy from a template or completely from scratch. It will be added to the existing encounter if there is one already specified."
      text += "\n#encounter (funny|easy|medium|hard|boss|god or cr)"
      text += "\n    Generate an encounter from the specified list. If a list is not specified, it will default to \"easy\" You can instead provide a number as a challenge rating which will scale encounters from the appropriate list and scale their difficulty."
      text += "\n#showenemies"
      text += "\n    Shows the list of current enemies."
      text += "\n#addenemy name health ac hitModifier damage initiative spells"
      text += "\n    Adds the specified enemy to the list of enemies. health, ac, hitModifier, damage, and initiative can be numbers or dice rolls such as 3d6+5. Type the name in quotes if the name contains a space. The rest of the parameters can be a list of spells. Each spell must be typed in quotes if it has a space. If the spell does damage, write the name and damage roll in the following format: \"Ray of Frost5d10\""
      text += "\n#removeenemy name or index"
      text += "\n    Removes the enemy as specified by the name or index. To delete multiple enemies, type the numbers with spaces or commas between them. This is safer than calling #removenote multiple times because the numbers shift as enemies are deleted. Quotes are not necessary."
      text += "\n#initiative"
      text += "\n    Assigns initiative to all characters and enemies. This begins combat."
      text += "\n#turn"
      text += "\n    Updates the turn to the next character in combat. If it is an enemy, the enemy will attack. If it's a player character, the system will allow the player to take their turn. If there are no enemies left or all the player characters are dead, combat ends."
      text += "\n#repeatTurn"
      text += "\n    Repeats the turn. If it is currently an enemy's turn, it will attack or cast another spell again."
      text += "\n#block"
      text += "\n    Reverses the damage that has been inflicted in the last turn. This applies to damage on characters and enemies."
      text += "\n#flee (difficulty_class or automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Attempt to flee from combat. If the difficulty is not specified, the default difficulty will be used instead."

      text += "\n\n--Locations--"
      text += "\n#createlocation [(x) (y) or (here|far) or (distance)] location_name"
      text += "\n    Creates a location at the given coordinates. The coordinates must be integers. If the coordinates are not provided, they are randomized within a range of 10 units from the party's current location. You can also use \"here\" to indicate that the location is at party's coordinates. \"far\" indicates that the coordinates will be randomly generated 50-100 units away. You may also just specify a distance. Multiple locations may exist at the same coordinates. A story card is created for the location. Quotes are not necessary."
      text += "\n#goto (x) (y) or (location_name) or (location_number)"
      text += "\n    Makes the party travel to the location specified by the coordinates (as integers), location_name, or location_number. You must provide at least one of these. If the location does not exist, it is created at your current coordinates. If you only specify coordinates, you will go to the first location at those coordinates. Quotes are not necessary."
      text += "\n#goto distance location_name"
      text += "\n    An alternative of the above. Travels the specified distance towards the location indicated by location name. Quotes are not necessary"
      text += "\n#gonorth (distance)"
      text += "\n    The party travels north the given distance (an integer). If distance is not specified, it is assumed to be 1."
      text += "\n#gosouth (distance)"
      text += "\n    The party travels south the given distance (an integer). If distance is not specified, it is assumed to be 1."
      text += "\n#goeast (distance)"
      text += "\n    The party travels east the given distance (an integer). If distance is not specified, it is assumed to be 1."
      text += "\n#gowest (distance)"
      text += "\n    The party travels west the given distance (an integer). If distance is not specified, it is assumed to be 1."
      text += "\n#getlocation"
      text += "\n    Returns the coordinates that the party is at. It will also list a location if a location was specified when using #goto."
      text += "\n#showlocations (sort)"
      text += "\n    Shows a list of all discovered locations with their coordinates and their distance from the party's current location. If the parameter \"sort\" is added, the locations will be listed by their distance to the party. Note that the location numbers will only be displayed in the unsorted list."
      text += "\n#removelocation location_name or location_number"
      text += "\n    Removes the specified location by location_name or location_number as listed in #showlocations. To delete multiple locations, type the numbers with spaces or commas between them. This is safer than calling #removenote multiple times because the numbers shift as locations are deleted. Quotes are not necessary."
      text += "\n#clearlocations"
      text += "\n    Deletes all discovered locations."
      text += "\n#map"
      text += "\n    Generates an 11x11 ASCII map of the surrounding locations centered at the party location. The @ symbol is the party location."

      text += "\n\n--Stragedy Card Game--"
      text += "\n#basicdeck"
      text += "\n    The basic cards necessary to enjoy the Stragedy card game are added to the character's inventory."
      text += "\n#cardshop"
      text += "\n    This opens the stragedy card shop where characters can spend gold to purchase cards. The inventory is randomized based on the day."
      text += "\n#addcard (card_name or card_rarity)"
      text += "\n    Adds the specified card or randomly generates a card and adds it to the character's inventory. Specifying a rarity (common, rare, epic, legendary) will choose a random card from those lists. Valid card names are a, ace, j, jack, q, queen, k, king, ?, joker, w, witch, p, priest, b, brigand, and any number 2-10"
      text += "\n#stragedy (automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Initiates a game of Stragedy, a card game played against an AI opponent. Specifying a difficulty (default is easy) grants the opponent a corresponding deck. Please see the game manual on github for rules, tactics, and a complete tutorial: github.com/raeleus/Hashtag-DnD/"

      text += "\n\n--Danger Zone--"
      text += "\n#reset"
      text += "\n    Removes all characters, locations, and notes. Changes all settings to their defaults. Use with caution!"
      
      text += "\n\n--Other--"
      text += "\n#version"
      text += "\n    Returns the current version of this scenario."
      text += "\n#help"
      text += "\n    This long ass help menu. I am paid by lines of codes."
      
      break
  }

  state.show = null
  return { text }
}

const mapLineBreak = "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n"
const mapLine = "|     *     *     *     *     *     *     *     *     *     *     *     |\n"

function mapGenerate() {
  var map = mapLineBreak
  for (var i = 0; i < 11; i++) map += mapLine
  map += mapLineBreak
  return map
}

function mapReplace(map, x, y, character) {
  x += 5 - state.x
  y += 5 - state.y
  
  if (x < 0 || x > 10 || y < 0 || y > 10) return map

  index = mapLineBreak.length + 6 + x * 6 + y * mapLine.length

  map = map.replaceAt(index, character)

  return map
}

function handleStragedy() {
  var character = getCharacter()
  var haveWord = character.name == "You" ? "have" : "has"
  var possessiveName = getPossessiveName(character.name)

  var text = " "
  switch (state.stragedyTurn) {
    case "intro":
      text = `**Stragedy**
Welcome to Stragedy! A trading card game of wits, strategy, and tragic outcomes!
Please see the game manual on github for rules, tactics, and a complete tutorial:
github.com/raeleus/Hashtag-DnD/
Type d to deal the cards or press f to forfeit.
`
      break
    case "game":
      var hasJokerOnBattlefield = false
      for (var card of state.stragedyPlayerBattlefield) {
        if (card.includes("?")) {
          hasJokerOnBattlefield = true
          break
        }
      }

      var kingCards = new Set()
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

      var priestPoints = 0
      for (var card of state.stragedyPlayerBattlefield) {
        if (card.includes("p")) {
          var number = card.replaceAll(/\D/gi, "")
          var value = parseInt(number)
          if (kingCards.has(number)) value *= 2

          priestPoints += value
        }
      }

      var enemyPriestPoints = 0
      for (var card of state.stragedyEnemyBattlefield) {
        if (card.includes("p")) {
          var number = card.replaceAll(/\D/gi, "")
          var value = parseInt(number)
          if (kingCards.has(number)) value *= 2

          enemyPriestPoints += value
        }
      }

      var enemyBattlefield = state.stragedyEnemyBattlefield.length > 0 ? "" : "No cards!"
      state.stragedyEnemyBattlefield.sort()
      for (card of state.stragedyEnemyBattlefield) {
        enemyBattlefield += `${card}, `
      }
      if (state.stragedyEnemyBattlefield.length > 0) enemyBattlefield = enemyBattlefield.substring(0, enemyBattlefield.length - 2)

      var enemyDeckCount = state.stragedyEnemyDeck.length
      var enemyDiscardCount = state.stragedyEnemyDiscard.length
      var enemyHandCount = state.stragedyEnemyHand.length

      var playerBattlefield = state.stragedyPlayerBattlefield.length > 0 ? "" : "No cards!"
      state.stragedyPlayerBattlefield.sort()
      for (card of state.stragedyPlayerBattlefield) {
        playerBattlefield += `${card}, `
      }
      if (state.stragedyPlayerBattlefield.length > 0) playerBattlefield = playerBattlefield.substring(0, playerBattlefield.length - 2)

      var playerHand = state.stragedyPlayerHand.length > 0 ? "" : "No cards!"
      state.stragedyPlayerHand.sort()
      for (card of state.stragedyPlayerHand) {
        playerHand += `${card}, `
      }
      if (state.stragedyPlayerHand.length > 0) playerHand = playerHand.substring(0, playerHand.length - 2)

      var playerDeckCount = state.stragedyPlayerDeck.length
      var playerDiscardCount = state.stragedyPlayerDiscard.length

      if (!state.stragedyEnemySkipTurn) text = `-----The Opponent's Turn-----${state.stragedyEnemyTurnText}`
      else text = "-----The Opponent's Cards-----\n"

      text += `The opponent has ${enemyDeckCount} cards in the deck, ${enemyDiscardCount} in the discard pile, and ${enemyHandCount} in their hand.

-----The Battlefield-----
Opponent's cards on the battlefield: ${enemyBattlefield} = ${state.stragedyEnemyScore} points${enemyPriestPoints > 0 ? `. Blessed points: ${enemyPriestPoints}` : ""}
${possessiveName} cards on the battlefield: ${playerBattlefield} = ${state.stragedyPlayerScore} points${priestPoints > 0 ? `. Blessed points: ${priestPoints}` : ""}

-----${possessiveName} Cards-----
${possessiveName} hand: ${playerHand}
${toTitleCase(character.name)} ${haveWord} ${playerDeckCount} cards in the deck and ${playerDiscardCount} in the discard pile.

-----${possessiveName} Turn-----`

      if (state.stragedyPlayerHand.length > 0) text += `
Play a number card by typing its number. Play a letter card by typing the letter and target card.
Type d and a number/letter to discard. ${!hasJokerOnBattlefield ? "Type r to retire. " : ""}Type f to forfeit.
`
      else text += `
Type d to draw a card. ${!hasJokerOnBattlefield ? "Type r to retire. " : ""}Type f to forfeit.
`
      if (state.stragedyPlayerScore > 30) text += `WARNING: You must lower your score below 30 or you will bust!\n`
      break
    case "gameOver":
      text = ""

      if (state.stragedyWinner != "forfeit" && state.stragedyEnemyTurnText != null) text += state.stragedyEnemyTurnText

      text += `The battle has concluded.${state.stragedyWinner != "forfeit" ? `\nFinal scores:\n${character.name}: ${state.stragedyPlayerScore}\nOpponent: ${state.stragedyEnemyScore}`: ""}
`
      if (state.stragedyWinner == "player") text += `${toTitleCase(character.name)} ${haveWord} won! Congratulations.`
      else if (state.stragedyWinner == "enemy" || state.stragedyWinner == "forfeit") text += `${toTitleCase(character.name)} ${haveWord} lost! Better luck next time.`
      else text += `${toTitleCase(character.name)} and the opponent have tied! Try again.`
      break
  }

  return text
}

function handleStragedyShop() {
  var character = getCharacter()
  var goldIndex = character.inventory.findIndex(x => x.name.toLowerCase() == "gold")
  var gold = goldIndex == -1 ? 0 : character.inventory[goldIndex].quantity
  var text = " "
  var seed = state.day
  if (state.cardDeals == null) {
    state.cardDeals = ["2", "3", "4", "5", "6", "7", "8", "9"]
    state.cardPrices = [400, 400, 400, 400, 400, 400, 400, 400, 2000]
    var items = ["10", "Ace", "Jack"]
    state.cardDeals.push(items[Math.floor(getRandom(seed) * 3)])
    seed += 100
    if (getRandom(seed) > .6) {
      items = ["Queen", "King", "Joker"]
      state.cardDeals.push(getRandomFromList(items[Math.floor(getRandom(seed) * 3)]))
      seed += 100
      state.cardPrices.push(5000)
    }
    if (getRandom(seed) > .9) {
      items = ["Witch", "Priest", "Brigand"]
      state.cardDeals.push(getRandomFromList(items[Math.floor(getRandom(seed) * 3)]))
      seed += 100
      state.cardPrices.push(12000)
    }
  }

  switch (state.stragedyShopStep) {
    case 0:
      text = `**Welcome to the Stragedy Shop**
Deals change every day!`
      break
    case 1:
      text = "Card purchased!"
      break
    case 2:
      text = "You do not have enough gold!"
  }

  switch (state.stragedyShopStep) {
    case 0:
    case 1:
    case 2:
      text += `
Select a number from the list below to purchase a card:

`
      if (state.cardDeals.length == 0) text += "There are no cards left for sale!\n"
      for (var i = 0; i < state.cardDeals.length; i++) {
        text += `${i + 1}. Stragedy ${state.cardDeals[i]} Card for ${state.cardPrices[i]} gold\n`
      }

      text += `
You have ${gold} gold
Enter the number or q to quit:
`
      break
    case 500:
      text = "Thank you for shopping at the Stragedy Shop!"
      break
  }

  return text
}

modifier(text)