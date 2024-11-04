---
sidebar_position: 5
---

# Homing

Makes the entities go back towards a predefined home position if they get too far from it. It is very useful to constraint entities to some area.

## HomingJob

This behavior outputs the following: 
- `DesiredDirection` - Direction to home.
- `DirectionDesire` - Drom `0` to `DirectionStrength` as distance to home goes from `MinRadius` to `MaxRadius`.
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## HomingComponent

The main interesting properties to adjust on `HomingComponent` are:
- `HomePosition` - The position of the home.
- `MinRadius` - Distance to home where the behavior has no effect.
- `MaxRadius` - Distance to home where the behavior has maximum effect.
- `ActivationP` - Power for shaping the interpolation of `DirectionDesire`.
- `BaseData`
    - `DirectionStrength` - Multiplies `DirectionDesire`.
    - `Priority` - Priority.
