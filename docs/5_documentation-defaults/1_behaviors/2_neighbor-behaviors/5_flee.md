---
sidebar_position: 5
---

# Flee

Makes entities speed up and flee from their neighbors.

## FleeJob

Internally, the behavior calculates a weighted sum of directions away from neigbhors. The weight of each neighbor is higher the closer it is and the more it is directly in front of the entity. The behavior gives this direction, and possibly an increased speed. The strengths and desired speed of the behavior grows larger the closer the neighbors are. 

This behavior outputs the following: 
- `DesiredDirection` - *weighted sum of directions away from neigbhors*
- `DirectionDesire` - *from `0` to `DirectionStrength`, grows with the sum of the weights used for direction*
- `DesiredSpeed` - *from `MinSpeed` to `MaxSpeed`, grows with the sum of the weights used for direction*
- `SpeedDesire` - *from `0` to `SpeedStrength`, grows with the sum of the weights used for direction*
- `Priority` -  `Priority` *(constant)*

## FleeComponent

- *Activation*
    - `ActivationP` - **
    - `ActivationK` - **
    - `MinSpeed` - **
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `SpeedStrength` - *multiplies `SpeedDesire`*
    - `Priority` - *priority*