Hostwalkers are mutated abomination humanoids that serve as [[Arangol]]'s personal army and are the upgraded versions of Necrowalkers. 
###### Appearance 
![[Hostwalker.png]]
###### Hostwalkers

```statblock
layout: Basic 5e Layout
image: Pasted image 20240909160855.png
name: Hostwalker
size: Meduim
type: Abberation Abomination
subtype: Mutated Soldier
alignment: Chaotic Evil
ac: Host +2
hp: Host + 10
hit_dice: Host
speed: Host + 10
stats: [Host +2, Host +2, Host +2, Host +2, Host +2, Host +2]
fage_stats: +5
saves:
  - Hosts: Strength
  - Hosts: Dexterity
  - Hosts: Constitution
  - Hosts: Intelligence
  - Hosts: Wisdom
  - Hosts: Charisma
skillsaves:
  - Hosts: Skills
damage_vulnerabilities: Hosts
damage_resistances: Hosts
damage_immunities: Hosts
condition_immunities: Hosts
senses: Hosts
languages: Hosts
cr: 
traits:
  - name: Hostmind
    desc: The Hostwalker is an exact duplicate of the host it infected, having all of its knowledge and abillities 
  - name: Soul Devour
    desc: If a Necrowalker devours your soul while either dead, unconscious, or restrained; it gains all of the soul owner's abilities and knowledge
  - name: Infection
    desc: If a creature has an infection counter and condition, they must be cured within the next 8 hours or else they will become a Hostwalker
  - name: Predator
    desc: If a Hostwalker bites you, it knows your exact location for the next 24 hours or until you kill it
actions:
  - name: Hosts knowledge
    desc: Uses any of the devoured hosts Actions 
  - name: Claws
    desc: "Melee Weapon Attack*. +Str or Dex and Prof Bonus to hit, reach 5ft., one target. Hit: 1d6+2 slashing damage"
  - name: Bite
    desc: "Melee Weapon Attack*. +4 to hit, reach 5ft., one target. Hit: 1d4+2 piercing and gain infection condition/counter"
legendary_actions:
  - name: Hosts knowledge
    desc: Uses any of the devoured hosts Legendary Actions
bonus_actions:
  - name: Hosts knowledge
    desc: Uses any of the devoured hosts Bonus Actions
reactions:
  - name: Hosts
    desc: Uses any of the devoured hosts Bonus Actions
```