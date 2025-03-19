
```statblock
layout: Basic 5e Layout
name: Archer
size: Meduim
type: Humanoid
alignment: Any
ac: 16
hp: 75
hit_dice: 10d8 + 30
speed: 30
stats: [11, 18, 16, 11, 13, 10]
fage_stats: 
skillsaves:
  - Athletics: +6
  - Perception: +6
senses: passive Perception 16
languages: Any
cr: 3
actions:
  - name: Multiattack
    desc: The archer makes two Shortsword or Longbow attacks
  - name: Shortsword
    desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage."
  - name: Longbow
    desc: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
bonus_actions:
  - name: Archer's Eye 3x day
    desc: Immediately after making an attack roll or a damage roll with a ranged weapon, the archer can roll a d10 and add the number rolled to the total.
Monster: <SRD/Archer>
```
