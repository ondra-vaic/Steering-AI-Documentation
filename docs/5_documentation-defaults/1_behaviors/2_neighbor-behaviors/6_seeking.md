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
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*