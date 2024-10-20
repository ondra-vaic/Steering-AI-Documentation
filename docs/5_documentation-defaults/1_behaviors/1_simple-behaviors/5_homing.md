---
sidebar_position: 5
---

# Homing

Makes the entities go back towards a predefined home position if they get too far from it. It is very useful to constraint entities to some area.

## HomingJob

This behavior outputs the following: 
- `DesiredDirection` - *direction to home*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance to home goes from `MinRadius` to `MaxRadius`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## HomingComponent

The main interesting properties to adjust on `HomingComponent` are:
- `HomePosition` - *the position of the home*
- `MinRadius` - *distance to home where the behavior has no effect*
- `MaxRadius` - *distance to home where the behavior has maximum effect*
- `ActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
- `BaseData`
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `Priority` - *priority*
