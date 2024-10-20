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
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*