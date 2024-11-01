---
sidebar_position: 3
---

# Follow Path

Mkes the entity follow a given path. 

## FollowPathJob

The behavior affects both direction and the speed. This behavior is unusual from the others, because it uses an additional system, the [`PathUpdateSystem`](/docs/documentation-defaults/utilities/path). The system updates `FollowPathComponent.CurrentTarget` for each entity when it reaches it's previous target on the path. The behavior then returns direction to the current target at constant speed with constant desires.

This behavior outputs the following: 
- `DesiredDirection` - *Direction to `FollowPathComponent.CurrentTarget`*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

## FollowPathComponent

The main interesting properties to adjust on [`FollowPathComponent`](/docs/documentation-defaults/behaviors/simple-behaviors/follow-path#followpathcomponent) are:
- `Speed` - *how fast the entity should travel*
- `DistanceEpsilon` - *threshold distance to current target where the entity switches to next point*
- `BaseData`
    - `DirectionStrength` - *determines `DirectionDesire`*
    - `Priority` - *priority*

## Path

The authoring must have a path assigned. The path only needs to implement a [`IPathPoints`](/docs/documentation-defaults/utilities/path#multipath) interface, for example [`PathPoints`](/docs/documentation-defaults/utilities/path#pathpoints) and [`Multipath`](/docs/documentation-defaults/utilities/path#multipath). You can see an example of this in *Move 25D Sample* [link].

