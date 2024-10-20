---
sidebar_position: 7
---

# MultiHoming

Makes entities go towards the smallest of home areas they are currently in.

## MultiHomingJob

For this behavior, the neighbors need to have a `HomeComponent` on them. The component contains the radius and other properties of the home area. The behavior finds a home with the smallest radius which contains the entity. It gives a direction towards the target home. The behavior's strength grows as the distance to the home increases.

This behavior outputs the following: 
- `DesiredDirection` - *direction to the target home*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance to the home goes from `MinRadius` to `MaxRadius`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## MultiHomingComponent

- *Activation*
    - `ActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `Priority` - *priority*


## HomeComponent