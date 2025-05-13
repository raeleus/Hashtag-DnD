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
          text += `What character will you choose?\n1. Soldier: A skilled warrior specializing in weapons and armor.\n2. Medic: A healer specializing in medical equipment and amplifying abilities.\n3. Spec Ops: An expert in stealth, subterfuge, and exploitation.\n4. Sniper: A tracker and survivalist specializing in long range weaponry.\n5. Heavy Weapons: Combat expert experienced with explosives, heavy automatic weapons, and powered melee weapons.\n6. Officer: A psi ops officer skilled in command, negotiation, and fortifying their team.\n7. Scientist: Commands the nanotech, biologic, and cybernetic sciences.\n8. Pilot: A skilled navigator augmenting their abilities with cybernetic implants and robotic suits used for melee combat.\n9. Marine: A well-rounded combatant that supports their attacks with technological enhancements.\n10. Hacker: An expert in computer technology, artificial intelligence, and the digital plane.\n11. Mutate: Genetically modified to control the forces of nanotech and biotics to achieve incredible power.\n12. Synth: A robotic soldier that is granted enhanced abilities through instructions from an AI directive.\n13. Engineer: An inventor and chemist capable of imbuing objects with technological power.\n\nEnter the number or q to quit.\n`
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
    case "spellShop":
      text += handleSpellShop()
      break
    case "itemShop":
      text += handleItemShop()
      break
    case "lockpicking":
      text += handleLockpicking()
      break
    case "memory":
      text += handleMemory()
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
      text += "\n#takeweapon damage_dice hit_bonus ability weapon_name"
      text += "\n    Allows a character to manually add a weapon to their inventory that is compatible with the #equip command. It is highly recommended to use #itemstore instead. damage_dice is the dice roll (e.g. 1d12+2) used to calculate the damage of the weapon. hit_bonus is a positive or negative number that modifies how accurate the weapon is. Ability is the base ability that is used in conjunction with the weapon. Typically, melee weapons use strength and ranged weapons use dexterity."
      text += "\n#takearmor ac weapon_name"
      text += "\n    Allows a character to manually add armor to their inventory that is compatible with the #equip command. It is highly recommended to use #itemstore instead. ac is the armor class or how hard the character is to hit. If you have an item that adds to the current armor class, precede the number with a plus sign (e.g. +2)."
      text += "\n#equip weapon_or_armor_name"
      text += "\n    Equips a weapon or armor and automatically changes the character's damage/weapon proficiency or armor class respectively. weapon_or_armor_name must be a weapon or type of armor purchased through #itemshop or added to the character inventory through #takeweapon or #takearmor. Shields should be equipped after equipping armor because shield AC is added to the total."
      text += "\n#buy (buy_quantity) buy_item (sell_quantity) sell_item"
      text += "\n    Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. Quotes are necessary for items with spaces in the name. The words for, with, the, a, and an are ignored."
      text += "\n#sell (sell_quantity) sell_item (buy_quantity) buy_item"
      text += "\n    Just like #buy, but with the parameters reversed. Adds the specified buy_quantity of the buy_item to the character's inventory and also removes the sell_quantity of sell_item. If quantities are omitted, they are assumed to be 1. The words for, with, the, a, and an are ignored. Quotes are necessary for items with spaces in the name."
      text += "\n#drop (quantity or all|every) item"
      text += "\n    Removes the specified quantity of item from the character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored. Quotes are not necessary."
      text += "\n#give other_character (quantity or all|every) item"
      text += "\n    Removes the quantity of item from the character's inventory and adds it to the other_character's inventory. If a quantity is omitted, it's assumed to be 1. The words the, a, and an are ignored. Quotes are not necessary for the item."
      text += "\n#itemshop (default|weapons|armor|tools|gear|common|uncommon|rare|very rare|legendary|artifact) (free) (all)"
      text += "\n    This opens the items shop where characters can spend gold to purchase new equipment. default is a general store with a variety of items and a small chance for magically enhanced loot. The selection is randomized based on the day. Include the argument \"free\" to not require gold to purchase the item. Include the argument \"all\" to list all available items. Otherwise, the list is randomized and a small selection of the item list is presented."
      text += "\n#reward (count) (default|weapons|armor|tools|gear|common|uncommon|rare|very rare|legendary|artifact)"
      text += "\n    Gives the character a random item selected from the given list. count determines how many rewards are drawn (default is 1). The default list has a weighted chance of drawing from any of the lists with increasing rarity."
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
      text += "\n#spellshop (officer|medic|scientist|marine|sniper|mutate|synth|hacker) (level) (free) (all)"
      text += "\n    This opens the spell shop where characters can spend gold to purchase new spells. The selection is randomized based on the day and on the character's class and spell level. Full casters, such as bards, clerics, druids, sorcerers, warlocks, and wizards, have spell levels from 0-9. Half casters, such as paladins and rangers, have spell levels from 1-5. Include the argument \"free\" to not require gold to purchase the spell. Include the argument \"all\" to list all available spells for that level. Otherwise, the list is randomized and a selection of lower level spells are included."

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

      text += "\n\n--Lockpicking Minigame--"
      text += "\n#lockpick (automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Initiates a lockpicking minigame similar to Mastermind where you have to guess the correct combination with a limited number of tries in order to defeat a lock. Specifying a difficulty (default is easy) sets the number of combinations and tries accordingly. Please see the game manual on github for rules, tactics, and a complete tutorial: github.com/raeleus/Hashtag-DnD/"

      text += "\n\n--Memory Minigame--"
      text += "\n#memory (automatic|effortless|easy|medium|hard|impossible)"
      text += "\n    Initiates a memory minigame where you have to flip cards one at a time until you make a matching pair. You only have a set number of turns to finish the game. Specifying a difficulty (default is easy) sets the number of cards and maximum turns accordingly."

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

function handleMemory() {
  let text = " "
  switch (state.memoryTurn) {
    case "game":
      text = `**Memory**
Select a card from below by typing its number or type q to quit:

`

      let counter = 0
      for (let y = 0; y < state.memoryHeight; y++) {
        for (let x = 0; x < state.memoryWidth; x++) {
          counter++
          const solved = state.memorySolved[counter - 1] != null

          let cardText = ""
          if (solved) {
            cardText = state.memoryCards[counter - 1]
          } else {
            cardText = counter
          }

          text += `${cardText.toString().length == 1 ? "  " : ""}${cardText}        `
        }
        text += "\n"
      }

      text += `

It is turn ${state.memoryTurns} of ${state.memoryMaxTurns}`

      break
    case "win":
      text = `You won the game in ${state.memoryTurns} out of ${state.memoryMaxTurns} turns!\n`

      let counter1 = 0
      for (let y = 0; y < state.memoryHeight; y++) {
        for (let x = 0; x < state.memoryWidth; x++) {
          counter1++
          text += `${state.memoryCards[counter1 - 1]}        `
        }
        text += "\n"
      }
      break
    case "lose":
      text = `After ${state.memoryMaxTurns} turns, you were unable to complete the game.\n`

      let counter2 = 0
      for (let y = 0; y < state.memoryHeight; y++) {
        for (let x = 0; x < state.memoryWidth; x++) {
          counter2++
          text += `${state.memoryCards[counter2 - 1]}        `
        }
        text += "\n"
      }
      break
    case "forfeit":
      text = "You decided to give up on finishing the game.\n"

      let counter3 = 0
      for (let y = 0; y < state.memoryHeight; y++) {
        for (let x = 0; x < state.memoryWidth; x++) {
          counter3++
          text += `${state.memoryCards[counter3 - 1]}        `
        }
        text += "\n"
      }
      break
  }

  return text
}

function handleLockpicking() {
  var text = " "
  switch (state.lockpickingTurn) {
    case "intro":
      text = `**Mastermind**
Welcome to Mastermind! A minigame to stand in for lockpicking, hacking, and other tasks of skill.
Please see the game manual on github for rules, tactics, and a complete tutorial:
github.com/raeleus/Hashtag-DnD/
You must solve the ${state.lockpickingSlots} color combination within ${state.lockpickingGuessMax} guesses!
Colors: r (red), y (yellow), w (white), g (green), o (orange), b (blue)
Enter your first guess below by typing the letter for each color. Type "q" to quit:
`
      break
    case "game":
      if (state.lockpickingInput.length != state.lockpickingSlots) text = `\nAn incorrect number of colors was input. Only type ${state.lockpickingSlots} letters!\n`
      else text = `
Correct: ${state.lockpickingCorrect}.    Wrong position: ${state.lockpickingWrongPlace}.    ${state.lockpickingGuessMax - state.lockpickingGuesses} ${state.lockpickingGuessMax - state.lockpickingGuesses == 1 ? "try" : "tries"} left.
Colors: r (red), y (yellow), w (white), g (green), o (orange), b (blue)
Enter your guess below by typing the letter for each color. Type "q" to quit:
`
      break
    case "win":
      text = `You solved the combination with ${state.lockpickingGuesses} ${state.lockpickingGuesses == 1 ? "guess" : "guesses"}!`
      break
    case "lose":
      text = `After ${state.lockpickingGuesses} ${state.lockpickingGuesses == 1 ? "guess" : "guesses"}, you were unable to solve the combination...
The combination was ${state.lockpickingCombination}`
      break
    case "forfeit":
      text = "You decided to give up on solving the combination."
      break
  }

  return text
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

function itemShopPushDeal(items, name) {
  let quantity = 1
  let storyCardName = name
  name = itemShopConvertGenericName(name)

  state.itemShopDeals.push({
    className: state.itemShopCategoryName,
    name: name,
    storyCardName: storyCardName,
    price: 0,
    quantity: quantity,
    bought: false
  })
}

var itemShopSeed

function itemShopSelectItems(items, numberOfItems) {
  if (numberOfItems == null) numberOfItems = 1

  itemShopSeed += 100
  if (state.itemShopAll) {
    for (let i = 0; i < items.length; i++) {
      itemShopPushDeal(items, items[i])
    }
    return
  }

  shuffle(items, itemShopSeed)
  for (let i = 0; i < numberOfItems; i++) {
    itemShopPushDeal(items, items[i])
  }
}

function handleItemShop() {
  var character = getCharacter()
  var goldIndex = character.inventory.findIndex(x => x.name.toLowerCase() == "gold")
  var gold = goldIndex == -1 ? 0 : character.inventory[goldIndex].quantity
  var text = " "
  itemShopSeed = state.day

  if (state.itemShopDeals == null || state.itemShopClearDeals) state.itemShopDeals = []

  if (findItemShopDeals(state.itemShopCategoryName).length == 0) switch(state.itemShopCategoryName) {
    case "weapons":
      itemShopSelectItems(weaponsList, 5)
      break
    case "armor":
      itemShopSelectItems(armorList, 5)
      break
    case "tools":
      itemShopSelectItems(toolsList, 5)
      break
    case "gear":
      itemShopSelectItems(gearList, 10)
      break
    case "common":
      itemShopSelectItems(commonList, 5)
      break
    case "uncommon":
      itemShopSelectItems(uncommonList, 5)
      break
    case "rare":
      itemShopSelectItems(rareList, 5)
      break
    case "phenomenal":
      itemShopSelectItems(phenomenalList, 5)
      break
    case "legendary":
      itemShopSelectItems(legendaryList, 200000)
      break
    case "artifact":
      itemShopSelectItems(artifactList, 5)
      break
    case "default":
      let shuffled = [...weaponsList].sort(() => 0.5 - Math.random());
      let list = shuffled.slice(0, 3)
      shuffled = [...armorList].sort(() => 0.5 - Math.random());
      list = list.concat(shuffled.slice(0, 3))
      shuffled = [...toolsList].sort(() => 0.5 - Math.random());
      list = list.concat(shuffled.slice(0, 3))
      shuffled = [...gearList].sort(() => 0.5 - Math.random());
      list = list.concat(shuffled.slice(0, 5))

      let rand = Math.random()
      if (rand <= .50) {
        shuffled = [...commonList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      } else if (rand <= .70) {
        shuffled = [...uncommonList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      } else if (rand <= .86) {
        shuffled = [...rareList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      } else if (rand <= .94) {
        shuffled = [...phenomenalList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      } else if (rand <= .98) {
        shuffled = [...legendaryList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      } else {
        shuffled = [...artifactList].sort(() => 0.5 - Math.random());
        list = list.concat(shuffled.slice(0, 1))
      }
      
      itemShopSelectItems(list, 15)
      break
  }

  switch (state.itemShopStep) {
    case 0:
      text = `**Welcome to the Item Shop**
-${toTitleCase(state.itemShopCategoryName)}-
Deals change every day!`
      break
    case 1:
      text = "Item purchased!"
      break
    case 2:
      text = "You do not have enough gold!"
  }

  switch (state.itemShopStep) {
    case 0:
    case 1:
    case 2:
      text += `
Select a number from the list below to purchase an item:

`
      let deals = findItemShopDeals(state.itemShopCategoryName, false)
      deals = deals.filter(item => !item.bought)

      if (deals.length == 0) text += "There are no items left for sale!\n"
      for (var i = 0; i < deals.length; i++) {
        let itemStoryCard = findItemCard(deals[i].name, deals[i].storyCardName)
        let description = itemStoryCard == null ? "\nERROR: Story card is missing. You may import the latest story cards from the Hashtag DnD Github: https://github.com/raeleus/Hashtag-DnD/blob/master/story-cards.json\n\n" : `:\n${itemStoryCard.entry}\n\n`
        deals[i].price = itemStoryCard == null ? 0 : parseInt(itemStoryCard.description.split(",")[0])
        if (itemStoryCard != null && itemStoryCard.type == "weapon") {
          deals[i].damage = itemStoryCard.description.split(",")[1]
          deals[i].toHitBonus = itemStoryCard.description.split(",")[2]
          deals[i].ability = itemStoryCard.description.split(",")[3]
        } else if (itemStoryCard != null && itemStoryCard.type == "armor") {
          deals[i].ac = itemStoryCard.description.split(",")[1]
        }
        text += `${i + 1}. ${deals[i].name}${state.itemShopIsFree ? "" : ` for ${numberWithCommas(deals[i].price)} gold`}`
        text += description
      }

      text += `
${state.itemShopIsFree ? "These items come at no cost!" : `You have ${numberWithCommas(gold)} gold`}
Enter the number or q to quit:
`
      break
    case 500:
      text = "Thank you for shopping at the Item Shop!"
      break
  }

  return text
}

function spellShopPushDeal(items, name, price) {
  state.spellShopDeals.push({
    className: state.spellShopClassName,
    level: state.spellShopLevel,
    name: name,
    price: price,
    bought: false
  })
}

var spellShopSeed

function spellShopSelectSpells(spells, price, numberOfSpells) {
  if (numberOfSpells == null) numberOfSpells = 1

  spellShopSeed += 100
  index = Math.floor(getRandom(spellShopSeed) * spells.length)
  if (state.spellShopAll) {
    for (const spell of spells) {
      spellShopPushDeal(spells, spell, price)
    }
    return
  }

  shuffle(spells, spellShopSeed)
  for (let i = 0; i < numberOfSpells; i++) {
    spellShopPushDeal(spells, spells[i], price)
  }
}

function handleSpellShop() {
  var character = getCharacter()
  var goldIndex = character.inventory.findIndex(x => x.name.toLowerCase() == "gold")
  var gold = goldIndex == -1 ? 0 : character.inventory[goldIndex].quantity
  var text = " "
  spellShopSeed = state.day

  if (state.spellShopDeals == null || state.spellShopClearDeals) state.spellShopDeals = []

  if (findSpellShopDeals(state.spellShopClassName, state.spellShopLevel).length == 0) switch(state.spellShopClassName) {
    case "Officer":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Precog", "Command Prompt Heal", "Command Prompt Kill", "Laser Wall", "True Nanomorph"], 50000)
          if (state.spellShopAll) break
        case 8:
          spellShopSelectSpells(["Psycho Fear", "Catfish", "Brain Stupor", "Sequencer", "Polygraph Mask", "Harden Security", "Command Prompt Stun"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Dimension Slip", "Gravity Box", "Holodeck", "Digital Palace", "Sword Construct", "Command Prompt Fortify", "Laser Projector", "Clone Image", "Healing Factor", "Data Recovery", "Marker", "Teleporter"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Sick Sight", "GPS", "Defense System", "Lab Meat", "Mass Telepathic Suggestion", "Upload Hysteria", "Boolean Hologram", "Thermal Imaging"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Molecular Puppet", "Command Robots", "Social Engineering", "Night Terror", "Mind Control Serum", "Superior Antigen", "Stasis Field", "Data Archives", "Mass Healing Booster", "Decoy Projection", "Reformat Memory", "Extraterrestrial Bond", "Undo Death", "Wireless Communication", "Hack Webcam", "Image Generator", "Neurology", "Transporter", "Psycho Emitter"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Controller", "Force Strafe", "Crash Targeting System", "Transporter", "Shine Suit", "Axle Grease", "Null Zero Cloak", "Holographic Terrain", "Search Query Creature", "Cyber Assassin", "Nanomorph"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Borg Breaker", "Spy Wire", "EMP Spike", "Anxiety Wave", "Cryosleep", "Proximity Mine", "Interrupting Brain Waves", "Portable Shelter", "Hologram", "Healing Spray", "Radar Jammer", "Food Replicator", "Electronic Mail", "Degreaser", "Neuromancer", "Machine Code", "Trash Compacter", "Dual Lingo"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Health Booster", "Drone Messenger", "Accute Miopia", "White Noise Generator", "Narco Nullifier", "Sharps", "Mind Slave", "Mind Scanner", "Ability Trainer", "Growth Hormone", "Miniturization Ray", "Data Wipe", "Conductive Metal", "Paralysis Mite", "Cloak", "Crack Code", "Antigen", "Search Query Drone", "Search Query Thing", "Recording", "Optical Illusion", "Cognitive Implant", "Night Vision", "Shater", "Noise Cancelling", "Inception", "Truth Serum"], 500, state.spellShopLevel == 2 ? 5 : 1)
        case 1:
          spellShopSelectSpells(["Drone Affect", "Trip Hammer", "Brain Backdoor", "Cone of Lights", "Mind Hack", "Universal Translator", "Organic Transplant", "Circuit Detector", "Holographic Mask", "Psychotic Break", "X-Ray", "Retro Rockets", "Healing Dart", "Liquid Courage", "Analyze", "Enciphered Text", "Hyperdrive", "Muted Graphic", "Sleep Pill", "Speak with Drones", "Meme", "Concussive Round", "Nano Servants"], 250, state.spellShopLevel == 1 ? 5 : 1)
        case 0:
          spellShopSelectSpells(["Danger Suit", "Glow Orb", "Friendship Protocol", "Bioluminescent Gel", "Spider Bot", "Micro Mend", "Text Message", "Minor Hologram", "Format", "EM Shot", "Concussive Round", "Auto Aim", "Laugh Track"], 50, state.spellShopLevel == 0 ? 3 : 1)
      }
      break
    case "Medic":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Digital Self Image", "Interdimensional Gate", "Clinical Aid", "Command Prompt Heal", "Cellular Reconstruction"], 50000)
          if (state.spellShopAll) break
        case 8:
          spellShopSelectSpells(["EMP Generator", "Climate Control", "Aftershock", "5G Emitter", "Radio Blast"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Reaper Hologram", "Scramble Signal", "Dimension Slip", "Heisenberg Principle", "Extradimensional Shift", "Command Prompt Fortify", "Healing Factor", "Data Recovery", "Marker"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Razor Wire", "Necro Soldier", "GPS", "Faraday Cage", "Virus", "Lab Meat", "First Contact", "Fiber Optic Beam", "Thermal Imaging", "Total Recall"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Defense Thumper", "Communion with AI", "Corruption", "EMP Blast", "Thermite Strike", "Mind Control Serum", "Superior Antigen", "Zone Denial", "Drone Plague", "Data Archives", "Mass Healing Booster", "Extraterrestrial Bond", "Undo Death", "Hack Webcam", "Summon Alien"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Antinecrotic Orb", "Radiation Shielding", "Phaseshift", "Climate Control", "Death's Cure", "Hint Model", "Axle Grease", "Sentry Turret", "Search Query Creature", "Magneto Shape"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Nano-necrotic Command", "Bio Bot", "Juicer", "Borg Breaker", "Spy Wire", "Recycled Food and Drink", "Light Diffuser", "EMP Spike", "Cryosleep", "Proximity Mine", "Force Cage", "Mass Healing Ward", "Electronic Form", "Ablative Shielding", "Virus Removal", "Revivification Serum", "Electronic Mail", "Neuromancer", "Micro Machines", "Dual Lingo", "Hydrophobic Step"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Health Booster", "Simulation", "Accute Miopia", "White Noise Generator", "Narco Nullifier", "Laser Light", "Ability Trainer", "Threat Detector", "Death Vaccine", "Paralysis Mite", "Antigen", "Search Query Thing", "Program of Healing", "Pop-Up Blocker", "Noise Cancelling", "Light Form Weapon", "Shield Link", "Truth Serum"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Trip Hammer", "Boson", "Mind Hack", "Hydraulic Dam", "Evaporator", "Organic Transplant", "Motion Tracker", "Circuit Detector", "Geiger Counter", "Paint Target", "Healing Dart", "Tear Sutures", "Heuristic Protection", "Food Sanitizer", "Honeypot", "Echo Chamber"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
        case 0:
          spellShopSelectSpells(["Telemetry", "Bioluminescent Gel", "Micro Mend", "Reactive Armor", "Fire Sale", "Triage Cell", "Audio Filter", "System Beep", "Night Light"], 50, state.spellShopLevel == 0 ? 3 : 1)
          break
      }
      break
    case "Scientist":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Precog", "Gene Editor", "Static Storm", "Cellular Reconstruction"], 50000)
          if (state.spellShopAll) break
        case 8:
          spellShopSelectSpells(["Nanotech Shapes", "Psycho Fear", "Catfish", "Brain Stupor", "Climate Control", "Aftershock", "Air Burst", "Radio Blast", "Tidal Lock"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Heisenberg Principle", "Holodeck", "Extradimensional Shift", "Healing Factor", "Inverse Graviton", "Marker"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Dark Dimensional", "GPS", "Medusa Cell", "Healing Gel", "Lab Meat", "Metal Working", "Fiber Optic Beam", "Transport via Computers", "Razor Wall", "Base Jumping"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Radiation Shielding", "Command Robots", "Event Log", "Snow Blaster", "Elemental Matrix", "Corruption", "Mind Control Serum", "Superior Antigen", "Drone Plague", "Mass Healing Booster", "Extraterrestrial Bond", "Brain Transplant", "Hack Webcam", "Electrical Wire Transmission", "Metal Wall"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Radioactive Decay", "Controller", "Crash Targeting System", "Conjure Helibots", "Hydraulic Dam", "Hint Model", "Drone Backdoor", "Heat Shield", "Shine Suit", "Axle Grease", "Insect Gigas", "Grasping Cord", "Holographic Terrain", "Cold Snap", "Search Query Creature", "Nanomorph", "Magneto Shape", "Kevlar Skin", "Summon Nanoswarm", "Firewall"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Bio Bot", "Static Striker", "Conjure Drones", "Light Diffuser", "EMP Spike", "Infuser Round", "Cryosleep", "Electronic Form", "Food Replicator", "Ablative Shielding", "Revivification Serum", "Air Conditioner", "Machine Code", "Summon Dimensional", "Respirator", "Hydrophobic Step", "Oxygen Canister"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Health Booster", "Drone Messenger", "Simulation", "Bulletproof", "Drone Sense", "Laser Light", "Nightvision", "Ability Trainer", "Growth Hormone", "Miniturization Ray", "Threat Detector", "Arc Welder", "Flame Graviton", "Industrial Fan", "Conductive Metal", "Paralysis Mite", "Antigen", "Search Query Drone", "Search Query Thing", "Fiber Optics", "Cloaking Field", "Pop-Up Blocker", "Spike Bumps", "Summon Drone"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Drone Affect", "Brain Backdoor", "Hydraulic Dam", "Evaporator", "Organic Transplant", "Circuit Detector", "Geiger Counter", "Sticky Foam", "X-Ray", "Fog Generator", "MRE", "Healing Dart", "Freeze Grenade", "Jump Jets", "Hyperdrive", "Heuristic Protection", "Food Sanitizer", "Speak with Drones", "Concussive Round"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
        case 0:
          spellShopSelectSpells(["Cybercraft", "Periodic Elements", "Telemetry", "Micro Mend", "Text Message", "Chemical Spray", "Lighter", "Reactive Armor", "Download Specs", "Triage Cell", "EM Shot", "Block-Chain", "Concussive Round"], 50, state.spellShopLevel == 0 ? 3 : 1)
          if (state.spellShopAll) break
          break
      }
      break
    case "Marine":
      switch(state.spellShopLevel) {
        case 5:
          spellShopSelectSpells(["Banishing Graviton", "Defense Thumper", "Seismic Wave", "EMP Blast", "Mind Control Serum", "Superior Antigen", "Undo Death", "Summon Alien"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Antinecrotic Orb", "Radiation Shielding", "Phaseshift", "Death's Cure", "Search Query Creature", "Syntax Error"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Bio Bot", "Blinding Graviton", "Recycled Food and Drink", "Light Emitting Diode", "Light Diffuser", "EMP Spike", "Infuser Round", "Force Cage", "Virus Removal", "Revivification Serum"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Health Booster", "Jump Bike", "Death Vaccine", "Antigen", "Search Query Thing", "Weapon Mod", "Program of Healing", "Pop-Up Blocker", "Shiny Hack", "Shield Link", "Truth Serum"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Boson", "Mind Hack", "Cellular Focus", "Organic Transplant", "Motion Tracker", "Circuit Detector", "Geiger Counter", "Technological Superiority", "Atomic Smite", "Liquid Courage", "Heuristic Protection", "Food Sanitizer", "Searing Hack", "Echo Chamber", "Electrical Hack", "Angry Emote"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
          break
      }
      break
    case "Sniper":
      switch(state.spellShopLevel) {
        case 5:
          spellShopSelectSpells(["Commune with Nature", "Mortar", "Superior Antigen", "Blink Boots", "Quick Reload", "Electrical Wire Transmission"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Conjure Helibots", "Drone Backdoor", "Axle Grease", "Grasping Cord", "Search Query Creature", "Kevlar Skin", "Summon Nanoswarm"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Conjure Drones", "Light Artillary", "Light Diffuser", "EMP Spike", "Infuser Round", "Charged Ammunition", "Electronic Form", "Radar Jammer", "Food Replicator", "Ablative Shielding", "Revivification Serum", "Machine Code", "Summon Dimensional", "Respirator", "Hydrophobic Step", "Oxygen Canister"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Health Booster", "Drone Messenger", "Bulletproof", "Drone Sense", "Bouncing Betty", "Nightvision", "Ability Trainer", "Threat Detector", "Industrial Fan", "Antigen", "Search Query Drone", "Search Query Thing", "Weapon Mod", "Cloaking Field", "Pop-Up Blocker", "Noise Cancelling", "Spike Bumps", "Summon Drone"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Proximity Alert", "Drone Affect", "Organic Transplant", "Circuit Detector", "Geiger Counter", "Tripwire", "Sticky Foam", "Fog Generator", "MRE", "Scrap Shower", "Tracker Tag", "Jump Jets", "Hyperdrive", "Speak with Drones"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
          break
      }
      break
    case "Mutate":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Interdimensional Gate", "Artillery", "Command Prompt Kill", "Chrono Trigger", "AI Prompt"], 50000)
          if (state.spellShopAll) break
        case 8:
          spellShopSelectSpells(["Dimension Compressor", "Sequencer", "Aftershock", "Air Burst", "Command Prompt Stun", "Radio Blast"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Timebomb", "Dimension Slip", "Syringe of Death", "Heisenberg Principle", "Extradimensional Shift", "Laser Projector", "Inverse Graviton", "Teleporter"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Wormhole", "Static Shock", "Nanite Bomb", "Rust", "Sick Sight", "Medusa Cell", "Force Field", "Mass Telepathic Suggestion", "Metal Working", "Cryonic Sphere", "Fiber Optic Beam", "Thermal Imaging"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Molecular Puppet", "Robotic Rover", "Carnivorous Cloud", "Snow Blaster", "Malleable Steel", "Social Engineering", "Stasis Field", "Drone Plague", "Image Generator", "Neurology", "Magnetic Attraction", "Transporter", "Metal Wall"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Phaseshift", "Radioactive Decay", "Controller", "Crash Targeting System", "Transporter", "Drone Backdoor", "Heat Shield", "Null Zero Cloak", "Cold Snap", "Nanomorph", "Kevlar Skin", "Anti-Material Round", "Firewall"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Encode", "Spy Wire", "Counter Hack", "Light Diffuser", "EMP Spike", "Anxiety Wave", "Incendiary Rocket", "Anti-Gravity Driver", "Cloud Form", "Stim Pack", "Interrupting Brain Waves", "Tesla Coil", "Hologram", "Ablative Shielding", "Air Conditioner", "Degreaser", "Trash Compacter", "Dual Lingo", "Transfusion", "Respirator", "Hydrophobic Step"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Augmentation", "Health Stim", "Accute Miopia", "White Noise Generator", "Focal Aperture", "Sharps", "Mind Slave", "Vertiblack Cloud", "Nightvision", "Mind Scanner", "Flamethrower", "Ability Trainer", "Growth Hormone", "Miniturization Ray", "Arc Welder", "Flame Graviton", "Industrial Fan", "Paralysis Mite", "Cloak", "Crack Code", "Antigravity Puck", "Weapon Mod", "Macro Virus", "Optical Illusion", "Electric Step", "Cognitive Implant", "Solar Panel", "Night Vision", "Hadron Collider", "Electro-Adhesion", "Inception", "Sticky Bomb"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Thermite Spray", "Brain Backdoor", "Elemental Ball", "Cone of Lights", "Universal Translator", "Circuit Detector", "Holographic Mask", "Hyper Motivator", "Pain Inhibitor", "Retro Rockets", "Fog Generator", "Motor Oil", "Freeze Grenade", "Jump Jets", "Power Armor", "Seeker Missiles", "Dirty Bomb", "Malware Blocker", "Muted Graphic", "Sleep Pill", "Concussive Round", "Power Coupling"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
        case 0:
          spellShopSelectSpells(["Biotic Acid", "Danger Suit", "Nano-necrotic Touch", "Glow Orb", "Periodic Elements", "Incendiary Sabot Round", "Friendship Protocol", "Bioluminescent Gel", "Spider Bot", "Micro Mend", "Text Message", "Minor Hologram", "Chemical Spray", "Format", "Cryo Blast", "Short Circuit", "Atomic Energy", "Concussive Round", "Auto Aim"], 50, state.spellShopLevel == 0 ? 3 : 1)
          if (state.spellShopAll) break
          break
      }
      break
    case "Synth":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Digital Self Image", "Social Engineering", "Precog", "Interdimensional Gate", "Mind Control Serum", "Superior Antigen", "Force Shackles", "Drone Plague", "Reformat Memory", "Command Prompt Kill", "Image Generator", "Summon Alien", "Magnetic Attraction", "True Nanomorph", "Censorship"], 50000)
        case 8:
          spellShopSelectSpells(["Brain Stupor", "Dimension Compressor", "Sequencer", "Polygraph Mask", "Command Prompt Stun"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Drone Backdoor", "Dimension Slip", "Syringe of Death", "Heat Shield", "Gravity Box", "Null Zero Cloak", "Sentry Turret", "Extradimensional Shift", "Firewall"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Wormhole", "Nanite Bomb", "Necro Soldier", "Sick Sight", "Summon Daemon Process", "Replicator", "Thermal Imaging"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Encode", "Spy Wire", "Crash Targeting System", "Virtual Deity", "Light Diffuser", "Night Terror", "Incendiary Rocket", "Stasis Field", "Absolute Zero", "Weather Wizard", "Decoy Projection", "Extraterrestrial Bond", "Food Replicator", "Revivification Serum", "Hack Webcam", "Trash Compacter", "Summon Gel Construct", "Neurology", "Transporter"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Phaseshift", "Radioactive Decay", "Controller", "Transporter", "Holographic Terrain", "Summon Gel Construct"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Counter Hack", "EMP Spike", "Anxiety Wave", "Anti-Gravity Driver", "Cloud Form", "Absolute Zero", "Interrupting Brain Waves", "Force Cage", "Hologram", "Virus Removal", "Summon Dimensional", "Summon Necro", "Dual Lingo", "Transfusion"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Sharps", "Mind Slave", "Vertiblack Cloud", "Data Wipe", "Paralysis Mite", "Cloak", "Macro Virus", "Optical Illusion", "Electric Step", "Ray of Arthritis", "Electro-Adhesion", "Inception"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Coolant Armor", "Robotic Tentacles", "Trip Hammer", "Brain Backdoor", "Universal Translator", "Circuit Detector", "Hyper Motivator", "Counter Strike", "Worm", "Enciphered Text", "Heuristic Protection", "Speak with Drones", "Meme", "Nano Servants", "Power Coupling"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
        case 0:
          spellShopSelectSpells(["Danger Suit", "Nano-necrotic Touch", "Energy Beam", "Friendship Protocol", "Spider Bot", "Compromise System", "Minor Hologram", "Chemical Spray"], 50, state.spellShopLevel == 0 ? 3 : 1)
          if (state.spellShopAll) break
          break
      }
      break
    case "Hacker":
      switch(state.spellShopLevel) {
        case 9:
          spellShopSelectSpells(["Digital Self Image", "Precog", "Interdimensional Gate", "Force Shackles", "Artillery", "Command Prompt Kill", "Laser Wall", "Gene Editor", "Chrono Trigger", "True Nanomorph", "Censorship", "AI Prompt"], 50000)
          if (state.spellShopAll) break
        case 8:
          spellShopSelectSpells(["EMP Generator", "Psycho Fear", "Catfish", "Brain Stupor", "Grow Clone", "Climate Control", "Dimension Compressor", "Sequencer", "Air Burst", "Infinite Loop", "Harden Security", "Command Prompt Stun", "Radio Blast", "Transponder"], 25000)
          if (state.spellShopAll) break
        case 7:
          spellShopSelectSpells(["Timebomb", "Dimension Slip", "Syringe of Death", "Gravity Box", "Holodeck", "Digital Palace", "Sword Construct", "Extradimensional Shift", "Laser Projector", "Clone Image", "Inverse Graviton", "Time Shift", "Mecha Maker", "Marker", "Teleporter"], 20000, state.spellShopLevel == 7 ? 2 : 1)
          if (state.spellShopAll) break
        case 6:
          spellShopSelectSpells(["Wormhole", "Static Shock", "Nanite Bomb", "Boolean Trigger", "Necro Soldier", "Rust", "Item Warp", "Sick Sight", "Medusa Cell", "Force Field", "Defense System", "Body Jack", "Mass Telepathic Suggestion", "Metal Working", "Cryonic Sphere", "Upload Hysteria", "Boolean Hologram", "Summon Daemon Process", "Fiber Optic Beam", "Replicator", "Thermal Imaging", "Cold Fusion Wall"], 10000, state.spellShopLevel == 6 ? 2 : 1)
          if (state.spellShopAll) break
        case 5:
          spellShopSelectSpells(["Molecular Puppet", "Robotic Rover", "Defense Thumper", "Carnivorous Cloud", "Snow Blaster", "Elemental Matrix", "Virtual Deity", "Malleable Steel", "Social Engineering", "Night Terror", "Mind Control Serum", "Stasis Field", "Weather Wizard", "Data Archives", "Decoy Projection", "Reformat Memory", "Drill", "Extraterrestrial Bond", "Wireless Communication", "Hack Webcam", "Image Generator", "Blink Boots", "Summon Cyborg", "Neurology", "Magnetic Attraction", "Transporter", "Code Blocks", "Metal Wall", "Psycho Emitter"], 5000, state.spellShopLevel == 5 ? 3 : 1)
          if (state.spellShopAll) break
        case 4:
          spellShopSelectSpells(["Stealth Drone", "Phaseshift", "Radioactive Decay", "Controller", "Crash Targeting System", "Tiny Robots", "Hydraulic Dam", "Transporter", "Hint Model", "Grey Goo", "Printer", "Heat Shield", "Null Zero Cloak", "Holographic Terrain", "Cold Snap", "Flat Space Compartment", "Search Query Creature", "Robo Dog", "Hermetic Seal", "Containment Field", "Cyber Assassin", "Nanomorph", "Kevlar Skin", "Summon Gel Construct", "Summon Robot", "Summon Nanoswarm", "Anti-Material Round", "Firewall"], 2500, state.spellShopLevel == 4 ? 3 : 1)
          if (state.spellShopAll) break
        case 3:
          spellShopSelectSpells(["Nano-necrotic Command", "Borg Breaker", "Encode", "Spy Wire", "Counter Hack", "EMP Spike", "Anxiety Wave", "Cryosleep", "Incendiary Rocket", "Anti-Gravity Driver", "Cloud Form", "Proximity Mine", "Stim Pack", "Interrupting Brain Waves", "Portable Shelter", "Tesla Coil", "Force Cage", "Hologram", "Radar Jammer", "Light Cycle", "Ablative Shielding", "Virus Removal", "Electronic Mail", "Air Conditioner", "Degreaser", "Neuromancer", "Trash Compacter", "Summon Dimensional", "Summon Necro", "Dual Lingo", "Transfusion", "Respirator"], 1000, state.spellShopLevel == 3 ? 5 : 1)
          if (state.spellShopAll) break
        case 2:
          spellShopSelectSpells(["Augmentation", "Cryptographic Lock", "Health Stim", "Simulation", "Accute Miopia", "White Noise Generator", "Focal Aperture", "Sharps", "Laser Light", "Mind Slave", "Vertiblack Cloud", "Nightvision", "Mind Scanner", "Flamethrower", "Ability Trainer", "Growth Hormone", "Miniturization Ray", "Flame Graviton", "Death Vaccine", "Industrial Fan", "Paralysis Mite", "Cloak", "Crack Code", "Antigravity Puck", "Search Query Thing", "Recording", "Weapon Mod", "Acid Shell", "Macro Virus", "Optical Illusion", "Electric Step", "Siphon Filter", "Cognitive Implant", "Ray of Arthritis", "Chain Link", "Solar Panel", "Night Vision", "Hadron Collider", "Electro-Adhesion", "Inception", "Sticky Bomb"], 500, state.spellShopLevel == 2 ? 5 : 1)
          if (state.spellShopAll) break
        case 1:
          spellShopSelectSpells(["Proximity Alert", "Thermite Spray", "Brain Backdoor", "Elemental Ball", "Cone of Lights", "Universal Translator", "Circuit Detector", "Holographic Mask", "Hyper Motivator", "Pain Inhibitor", "Retro Rockets", "Find Robot Companion", "Fog Generator", "Motor Oil", "Freeze Grenade", "Analyze", "Enciphered Text", "Jump Jets", "Hyperdrive", "Power Armor", "Seeker Missiles", "Heuristic Protection", "Dirty Bomb", "Malware Blocker", "Muted Graphic", "Sleep Pill", "Meme", "Hover Board", "Concussive Round", "Nano Servants", "Power Coupling"], 250, state.spellShopLevel == 1 ? 5 : 1)
          if (state.spellShopAll) break
        case 0:
          spellShopSelectSpells(["Biotic Acid", "Danger Suit", "Nano-necrotic Touch", "Glow Orb", "Periodic Elements", "Incendiary Sabot Round", "Friendship Protocol", "Bioluminescent Gel", "Spider Bot", "Micro Mend", "Text Message", "Compromise System", "Minor Hologram", "Chemical Spray", "Format", "Cryo Blast", "Short Circuit", "Concussive Round", "System Beep", "Auto Aim"], 50, state.spellShopLevel == 0 ? 3 : 1)
          if (state.spellShopAll) break
          break
      }
      break
  }

  switch (state.spellShopStep) {
    case 0:
      text = `**Welcome to the Spell Shop**
Deals change every day!`
      break
    case 1:
      text = "Spell purchased!"
      break
    case 2:
      text = "You do not have enough gold!"
    case 3:
      text = "You already know that spell!"
  }

  switch (state.spellShopStep) {
    case 0:
    case 1:
    case 2:
    case 3:
      text += `
Select a number from the list below to purchase a spell:

`
      let deals = findSpellShopDeals(state.spellShopClassName, state.spellShopLevel, false)
      if (deals.length == 0) text += "There are no spells left for sale!\n"
      for (var i = 0; i < deals.length; i++) {
        let spellStoryCard = findSpellCard(deals[i].name)
        let description = spellStoryCard == null ? "\nERROR: Story card is missing. You may import the latest story cards from the Hashtag DnD Github: https://github.com/raeleus/Hashtag-DnD/blob/master/story-cards.json\n\n" : `:\n${spellStoryCard.entry}\n\n`
        let found = character.spells.find((element) => element == deals[i].name) != undefined
        text += `${i + 1}. ${deals[i].name}${state.spellShopIsFree ? "" : ` for ${numberWithCommas(deals[i].price)} gold`}`
        if (found) text += " (Already Known)"
        text += description
      }

      text += `
${state.spellShopIsFree ? "These spells come at no cost!" : `You have ${numberWithCommas(gold)} gold`}
Enter the number or q to quit:
`
      break
    case 500:
      text = "Thank you for shopping at the Spell Shop!"
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
        text += `${i + 1}. Stragedy ${state.cardDeals[i]} Card for ${numberWithCommas(state.cardPrices[i])} gold\n`
      }

      text += `
You have ${numberWithCommas(gold)} gold
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
