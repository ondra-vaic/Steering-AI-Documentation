---
sidebar_position: 6
---

# Seeking

Makes entities speed up towards their closest neighbor.

## SeekingJob

Internally, the behavior finds an entity's closest neigbhor. It gives a direction towards it and speed greater than or higher that the neigbor's. The strengths and speed grow as the distance to the neighbor decreases.

This behavior outputs the following: 
- `DesiredDirection` - Direction to the closest neighbor.
- `DirectionDesire` - From `0` to `DirectionStrength` as distance to the neighbor goes from `MaxDistance` to `0`.
- `DesiredSpeed` - From `MinChaseSpeed` to target's speed plus `MaxSpeedOverPrey` as distance to the neighbor goes from `MaxDistance` to `0`.
- `SpeedDesire` - From `0` to `DirectionStrength` as distance to the neighbor goes from `MaxDistance` to `0`.
- `Priority` -  `Priority` *(constant)*

## SeekingComponent

- *Activation*
    - `MaxSpeedOverPrey` - Maximum speed to chase will be the target's speed plus this.
    - `MinChaseSpeed` - Minimum speed to chase at.
- `BaseData`
    - `MaxDistance` - Maximum distance where neighbors will be detected.
    - `MaxAngle` - Maximum field of view angle where neighbors will be detected.
    - `DirectionStrength` - Multiplies `DirectionDesire`.
    - `SpeedStrength` - Multiplies `SpeedDesire`.
    - `Priority` - Priority.