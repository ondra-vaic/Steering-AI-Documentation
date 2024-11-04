---
sidebar_position: 4
---

# Separation

Makes entities keep distance from their neighbors.

## SeparationJob

Internally, the behavior calculates a weighted sum of directions away from neigbhors. The weight of each neighbor is higher the closer it is and the more it is directly in front of the entity. The behavior gives this direction. The strength of the behavior grows larger the closer the neighbors are.

This behavior outputs the following: 
- `DesiredDirection` - Weighted sum of directions away from neigbhors.
- `DirectionDesire` - From `0` to `DirectionStrength`, grows with the sum of the weights used for direction.
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## SeparationComponent

- *Observability*
    - `DistanceP` - Power for shaping the influence of each neighbor based on distance.
    - `StartAngle` - Above this angle a neighbor's influence on the centroid starts to decrease, below it it's at maximum.
    - `AngleP` - Power for shaping the influence of each neighbor based on angle.
- *Activation*
    - `ActivationP` - Power for shaping the interpolation of `DirectionDesire`.
    - `ActivationK` - Second parameter for shaping the interpolation of `DirectionDesire`.
- `BaseData`
    - `MaxDistance` - Maximum distance where neighbors will be detected.
    - `MaxAngle` - Maximum field of view angle where neighbors will be detected.
    - `DirectionStrength` - Multiplies `DirectionDesire`.
    - `Priority` - Priority.