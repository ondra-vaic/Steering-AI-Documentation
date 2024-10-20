---
sidebar_position: 3
---

# Follow Path

Mkes the entity follow a given path. 

## FollowPathJob

The behavior affects both direction and the speed. This behavior is unusual from the others, because it uses an additional system, the `PathUpdateSystem`. The system updates `FollowPathComponent.CurrentTarget` for each entity when it reaches it's previous target on the path. The behavior then returns direction to the current target at constant speed with constant desires.

This behavior outputs the following: 
- `DesiredDirection` - *Direction to `FollowPathComponent.CurrentTarget`*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

## FollowPathComponent

The main interesting properties to adjust on `FollowPathComponent` are:
- `Speed` - *how fast the entity should travel*
- `DistanceEpsilon` - *threshold distance to current target where the entity switches to next point*
- `BaseData`
    - `DirectionStrength` - *determines `DirectionDesire`*
    - `Priority` - *priority*

## Path

Path can be created in the editor as ordered list of `Transform` using `PathPoints` class. There is also an implementation of ordered list of `PathPoints` called `MultiPath`. The `FollowPathAuthoring` should have a reference to an instance of either of these classes. This set up is shown in the *Move 25D Sample* [link].
