---
sidebar_position: 2
---

# Cohesion

Makes entities go towards their neighbors. 

## CohesionJob

Internally, the behavior calculates a weighted centroid of it's neigbhors positions. The weight of each neighbor is higher the closer it is and the more it is directly in front of the entity. The behavior gives direction to the centroid and possibly makes the entity speed up to catch up to it's neighbors. The strength of the behavior grows larger the further away the weighted centroid is.

This behavior outputs the following: 
- `DesiredDirection` - *direction to a weighted centroid of neighbors position*
- `DirectionDesire` - *from `MinActivation * DirectionStrength` to `DirectionStrength` as distance to the weighted centroid goes from `0` to `MaxDistance`*
- `DesiredSpeed` - *from `MinSpeed` to `MaxSpeed` as distance to the weighted centroid goes from `0` to `MaxDistance`*
- `SpeedDesire` - *from `MinActivation * SpeedStrength` to `SpeedStrength` as distance to the weighted centroid goes from `0` to `MaxDistance`*
- `Priority` -  `Priority` *(constant)*

## CohesionComponent

The main interesting properties to adjust on `CohesionComponent` are:

- `DistanceP` - *power for shaping the influence of each neighbor based on distance*
- `StartAngle` - *above this angle a neighbor's influence on the centroid starts to decrease, below it it's at maximum*
- `AngleP` - *power for shaping the influence of each neighbor based on angle*
- `ActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
- `MinActivation` - *the minimum `DirectionDesire` returned will `MinActivation * DirectionStrength`*
- `MinSpeed` - *the minimum desired speed to catch up with neighbors*
- `BaseData`
    - `BaseData.MaxDistance` - *maximum distance where neighbors will be detected*
    - `BaseData.MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
    - `BaseData.SpeedStrength` - *multiplies `SpeedDesire`*
    - `BaseData.Priority` - *priority*