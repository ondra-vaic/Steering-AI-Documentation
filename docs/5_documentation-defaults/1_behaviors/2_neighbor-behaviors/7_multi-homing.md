---
sidebar_position: 7
---

# MultiHoming

## MultiHomingJob

This behavior outputs the following: 
- `DesiredDirection` - **
- `DirectionDesire` - **
- `DesiredSpeed` - **
- `SpeedDesire` - **
- `Priority` -  `Priority` *(constant)*

## MultiHomingComponent

- *Activation*
    - `ActivationP` - **
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `SpeedStrength` - *multiplies `SpeedDesire`*
    - `Priority` - *priority*