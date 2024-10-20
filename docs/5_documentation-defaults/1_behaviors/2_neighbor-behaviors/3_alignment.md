---
sidebar_position: 3
---

# Alignment

Makes entities align their velocity with their neighbors.

## AlignmentJob

Internally, the behavior calculates a weighted average of it's neigbhors directions and speeds. The weight of each neighbor is higher the closer it is and the more it is directly in front of the entity. The behavior gives the weighted average direction and weighted average speed. The strength of the behavior grows larger the further the direction and speed are from the averages. 

This behavior outputs the following: 
- `DesiredDirection` - *weighted average direction of neighbors' velocity*
- `DirectionDesire` - *from `MinAngleWeight * DirectionStrength` to `DirectionStrength` as angle between current direction and `DesiredDirection` goes from `StartActivationAngle` to `360` degress*
- `DesiredSpeed` - *weighted average speed of neighbors' velocity*
- `SpeedDesire` - *from `MinSpeedDiffWeight * SpeedStrength` to `SpeedStrength` as difference between the average speed and current speed divided by `MaxSpeed` goes from `StartSpeedDiffFraction` to `1`.*
- `Priority` -  `Priority` *(constant)*

## AlignmentComponent

The main interesting properties to adjust on `AlignmentComponent` are:

- *Observability*
    - `DistanceP` - *power for shaping the influence of each neighbor based on distance*
    - `StartAngle` - *above this angle a neighbor's influence on the centroid starts to decrease, below it it's at maximum*
    - `AngleP` - *power for shaping the influence of each neighbor based on angle*
- *Direction Activation*
    - `AngleActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
    - `MinAngleWeight` - *the minimum `DirectionDesire` returned will `MinAngleWeight * DirectionStrength`*
    - `StartActivationAngle` - *above this angle between entity's direction and the weighted average direction the `DirectionDesire` starts increase, below it it's `MinAngleWeight * DirectionStrength`*
- *Speed Activation*
    - `SpeedDiffActivationP` - *power for shaping the interpolation of `SpeedDesire`.*
    - `MinSpeedDiffWeight` - *the minimum `SpeedDesire` returned will be `MinSpeedDiffWeight * SpeedStrength`*
    - `StartSpeedDiffFraction` - *the minimum difference between the average speed and current speed divided by `MaxSpeed` after which the `SpeedDesire` starts to increase above `MinSpeedDiffWeight * SpeedStrength`*
- `BaseData`
    - `MaxDistance` - *maximum distance where neighbors will be detected*
    - `MaxAngle` - *maximum field of view angle where neighbors will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `SpeedStrength` - *multiplies `SpeedDesire`*
    - `Priority` - *priority*