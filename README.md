# Hashtag-DnD
A Scenario script for AI Dungeon

Hashtag DnD is a scripted AI Dungeon scenario that gives you a variety of tools to enhance your adventure!

Features:
Fully working inventory system<br>
Health points and a focus on strategic combat.<br>
Skill/Ability based gameplay guarantees a challenge at every turn<br>
Advanced dice rolling syntax allows you to set the precise odds<br>
Unlimited party size with each character having their own inventory, stats, and biographies<br>
Multiplayer compatible<br>
Personalized note system that does not take up context space<br>
Create locations to travel to and view them in a map

See the [user guide here](https://github.com/raeleus/Hashtag-DnD/wiki).
Watch the [tutorial video](https://youtu.be/E5TYU7rDaBQ).

v. 0.3.0
* Added Boss and God difficulty encounters
* Added Humanoid Enemy Presets
* Added optional enemy parameter to #heal
* Added #healparty
* Added #block which reverses damage inflicted in the last turn in combat
* Added #repeatturn to allow an enemy to do another attack
* Tweaked #heal and #damage to allow targeting characters specified as a parameter
* Fixed defeated enemies not being removed from combat
* Minor bug fixes and improvements

v. 0.2.1 Hotfix 1
* Call `#xp` with the parameter `party` to add xp to the entire group
* List places of interest at your current coordinates to `#location`
* Hotfix: Fixed being unable to use #damage to target enemies in combat. Thanks coryking!
* Minor bug fixes and improvements

v. 0.2.0
* Added combat hashtags: #setupenemy, #encounter, #showenemies, #addenemy, #removeenemy, #initiative, #turn, #flee
* `#note` without parameters will store the last action's text into the notes
* `#goto` specified with a distance and location name will take you partially toward the target
* `#goto` allows you to travel by typing a location number instead of a name
* You may add flavor text to any hashtag by typing text after a line break after the hashtag (shift + enter on desktop). Thanks Xiron!
* You may use commas in coordinates now
* The scenario keeps track of how many days have passed since the adventure has started. See `#rest`, `#showday`, `#setday`.
* Added `automatic` difficulty which is DC 0
* Added `#version`
* Allow adding a plus or minus number to `#roll`. ie. `#roll 5d20+6`
* Fixed `#buy` and `#sell` resulting in unusable items because of plural item names
* Minor bug fixes and improvements

v. 0.1.0
* Added `#createlocation`, `#goto`, `#gonorth`, `#gosouth`, `#goeast`, `#gowest`, `#removelocation`, `#clearlocations`, `#getlocation` and `#showlocations` to enable travelling.
* Added `#map` to generate an ASCII map based on the locations and player location.
* Added `#renameitem` to rename an existing item
* Added `#renamecharacter` to rename an existing character
* Added `#clonecharacter` to copy an existing character
* `#removenote` can remove more than one note at a time
* Minor bug fixes and improvements

v. 0.0.6
* #cast no longer requires quotes
* Minor bug fixes and improvements

v. 0.0.5
* Fixed using the "all" keyword in the #drop fails
* Minor bug fixes and improvements

v. 0.0.4
* Added `#generatename (male|female) (fantasy|modern|scifi|nordic)` to retrieve a random name from the specified gender and genre

v. 0.0.3
* Added `#setdefaultdifficulty (difficulty_class or effortless|easy|medium|hard|impossible)` to set the default difficulty of `#check`, `#try`, `#attack`, `#cast`

v. 0.0.2
* Fixed incorrect synonyms
* You may use #pay as a synonym for `#drop`
* You may inverse skill/ability with the hashtag. ie. `#intelligence check` instead of `#check intelligence`
* Adjusted `#showskills` to display both the proficiency and ability modifier
* Minor improvements and bug fixes

v. 0.0.1
* Initial release
