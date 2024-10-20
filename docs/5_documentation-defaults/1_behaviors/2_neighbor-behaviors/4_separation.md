---
sidebar_position: 4
---

# Separation

## SeparationJob

This behavior outputs the following: 
- `DesiredDirection` - **
- `DirectionDesire` - **
- `DesiredSpeed` - **
- `SpeedDesire` - **
- `Priority` -  `Priority` *(constant)*

## SeparationComponent

- *Observability*
    - `DistanceP` - *power for shaping the influence of each neighbor based on distance*
    - `StartAngle` - *above this angle a neighbor's influence on the centroid starts to decrease, below it it's at maximum*
    - `AngleP` - *power for shaping the influence of each neighbor based on angle*
- *Activation*
    - `ActivationP` - **
    - `ActivationK` - **
- `BaseData`
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*