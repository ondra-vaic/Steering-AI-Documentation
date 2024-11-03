---
sidebar_position: 3
---

# Environment Avoidance

Makes the entities avoid all collisions with the environment.

## EnvironmentAvoidanceJob

Internally the behavior determines one hit as the most 'dangerous', and makes the entity move in a direction of the hit's normal. The hit is thought of as more dangerous the closer it is, and the more the ray aligns with the current direction of movement.

This behavior outputs the following: 
- `DesiredDirection` - *normal of the most 'dangerous' hit*
- `DirectionDesire` - *`0` to `DirectionStrength` as the distance to the hit and angle between the ray go to `0`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## EnvironmentAvoidanceComponent

- `BaseData`
    - `MaxDistance` - *maximum distance where a hit will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `Priority` - *priority*