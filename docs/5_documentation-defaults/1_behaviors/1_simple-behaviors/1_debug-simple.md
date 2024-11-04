---
sidebar_position: 1
---

# Debug Simple

Draws all the entities passed to it as circles. Can be useful for debugging.

## DebugSimpleJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `0` *(constant)*

## DebugSimpleComponent

The `DebugSimpleComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:

- `BaseData`
    - `IsActive` - Mark it to activate the behavior.
    - `DebugScale` - Increase the size of the circle.
    - `DebugColor` - Color of the cirle.