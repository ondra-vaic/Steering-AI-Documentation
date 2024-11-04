---
sidebar_position: 7
---

# Wandering

Makes the entity wander around the world smoothly changing the desired direction and speed. 

:::tip
Using either [`GoForwardJobWrapper`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward) or `WanderingJobWrapper` is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always 'has something to do'. 
:::

## WanderingJob

This behavior outputs the following: 
- `DesiredDirection` - Random direction smoothly changing over time.
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - Random speed smoothly changing over time between `MinSpeed` and `MaxSpeed`.
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

## WanderingComponent

The main interesting properties to adjust on `WanderingComponent` are:
- `MaxUpDownAngle` - Maximum possible angle between the returned desired direction and *XZ* plane.
- `XFrequency` - Frequency of desired direction change in the *XZ* plane.
- `YFrequency` - Frequency of desired direction change in it's `y` component.
- `SpeedFrequency` - Frequency of the speed changing.
- `MinSpeed` - Minimum desired speed.
- `MaxSpeed` - Maximum desired speed.
- `BaseData`
    - `DirectionStrength` - Determines `DirectionDesire`.
    - `SpeedStrength` - Determines `SpeedDesire`.
    - `Priority` - Priority.