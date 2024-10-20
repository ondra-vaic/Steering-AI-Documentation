---
sidebar_position: 6
---

# Seeking

## SeekingJob

This behavior outputs the following: 
- `DesiredDirection` - **
- `DirectionDesire` - **
- `DesiredSpeed` - **
- `SpeedDesire` - **
- `Priority` -  `Priority` *(constant)*

## SeekingComponent

- *Activation*
    - `MaxSpeedOverPrey` - **
    - `MinChaseSpeed` - **
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `SpeedStrength` - *multiplies `SpeedDesire`*
    - `Priority` - *priority*