---
sidebar_position: 2
---

# Align Up

This behavior tries to prevent entites from flying up or down at too steep angles which may look unnatural. 

### AlignUpJob

The behavior affects only the direction, not speed. The `DesiredDirection` is the current direction of the entity projected on world's up. The `DirectionDesire` for this behavior increases with the angle difference between the world's up `float3(0, 1, 0)` and the entity's current direction. 

This behavior outputs the following: 

- `DesiredDirection` - *the current direction projected on `float3(0, 1, 0)`*
- `DirectionDesire` - *from `0` to `DirectionStrength` as angle between entity's up and `float3(0, 1, 0)` goes from `0` to `90` degrees.*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

### AlignUpComponent

The `AlignUpComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:

- `BaseData` 
    - `DirectionStrength` - *multiplier for `DirectionDesire`*
    - `Priority` - *priority*

:::tip
These two will likely be the most important properties for most behaviors.
:::