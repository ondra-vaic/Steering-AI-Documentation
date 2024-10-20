---
sidebar_position: 6
---

# Seeking

Makes entities speed up towards their closest neighbor.

## SeekingJob

Internally, the behavior find an entity's closest neigbhor. It gives a direction towards it and speed greater than or higher that the neigbor's. The strengths and speed grow as the distance to the neighbor decreases.

This behavior outputs the following: 
- `DesiredDirection` - *direction to the closest neighbor*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance to the neighbor goes from `MaxDistance` to `0`*
- `DesiredSpeed` - *from `MinChaseSpeed` to target's speed plus `MaxSpeedOverPrey` as distance to the neighbor goes from `MaxDistance` to `0`*
- `SpeedDesire` - *from `0` to `DirectionStrength` as distance to the neighbor goes from `MaxDistance` to `0`*
- `Priority` -  `Priority` *(constant)*

## SeekingComponent

- *Activation*
    - `MaxSpeedOverPrey` - *maximum speed to chase will be the target's speed plus this*
    - `MinChaseSpeed` - *minimum speed to chase at*
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `SpeedStrength` - *multiplies `SpeedDesire`*
    - `Priority` - *priority*