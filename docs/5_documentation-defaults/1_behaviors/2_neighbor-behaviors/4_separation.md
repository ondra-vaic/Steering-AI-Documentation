---
sidebar_position: 4
---

# Separation

Makes entities keep distance from their neighbors.

## SeparationJob

Internally, the behavior calculates a weighted sum of directions away from neigbhors. The weight of each neighbor is higher the closer it is and the more it is directly in front of the entity. The behavior gives this direction. The strength of the behavior grows larger the closer the neighbors are.

This behavior outputs the following: 
- `DesiredDirection` - *weighted sum of directions away from neigbhors*
- `DirectionDesire` - *from `0` to `BaseData.DirectionStrength`, grows with the sum of the weights used for direction*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## SeparationComponent

- *Observability*
    - `DistanceP` - *power for shaping the influence of each neighbor based on distance*
    - `StartAngle` - *above this angle a neighbor's influence on the centroid starts to decrease, below it it's at maximum*
    - `AngleP` - *power for shaping the influence of each neighbor based on angle*
- *Activation*
    - `ActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
    - `ActivationK` - *second parameter for shaping the interpolation of `DirectionDesire`*
- `BaseData`
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*