# Hashtag-DnD
 Scenario script for AI Dungeon

Hashtag DnD is a scripted AI Dungeon scenario that gives you a variety of tools to enhance your adventure!

Features:
Fully working inventory system<br>
Health points and a focus on strategic combat.<br>
Skill/Ability based gameplay guarantees a challenge at every turn<br>
Advanced dice rolling syntax allows you to set the precise odds<br>
Unlimited party size with each character having their own inventory, stats, and biographies<br>
Multiplayer compatible<br>
Personalized note system that does not take up context space<br>

Commands are entered with hashtags. For example, you can roll a die if you type the following:
`#roll`<br>

Hashtags can have parameters:<br>
`#roll advantage 4d6`<br>

The hashtags allow for as much immersion and complexity as you want:<br>
`#attack the evil chicken`<br>
`#attack ranged disadvantage easy the goblin with your spear`<br>
`#cast thunderwave at the skeletons`<br>
`#check persuasion 15`<br>
`#try charisma to kiss the frog`<br>

Use quotes when you have spaces in a parameter. This isn't always necessary, but it is advised when multiple parameters make the phrase ambiguous:<br>
`#buy 2 "red herrings" with 3 gold`<br>

You should start by creating a character:<br>
`#setup`<br>

You can create multiple characters in your party. In story mode, type the following:<br>
`Barbara #setup`<br>

You will then use story mode to act upon that character:<br>
`Barbara #take greataxe`<br>

To see the full list of hashtags, use `#help`

If the scenario is having trouble responding to your hashtags, use Story mode. Try not to use Say mode with hash tags, but it works for most commands. Do mode automatically assigns the character name to the character name you set in AID when third person mode is activated.

The provided scenario is very bare bones. This is intended to be the base for your own story development. Look out for future scenarios based on Hashtag DnD!

v. 0.0.1
* Initial release