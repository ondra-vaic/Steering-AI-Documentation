---
sidebar_position: 5
---

# Flee

## FleeJob

This behavior outputs the following: 
- `DesiredDirection` - **
- `DirectionDesire` - **
- `DesiredSpeed` - **
- `SpeedDesire` - **
- `Priority` -  `Priority` *(constant)*

## FleeComponent

- *Activation*
    - `ActivationP` - **
    - `ActivationK` - **
    - `MinSpeed` - **
- `BaseData`
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*