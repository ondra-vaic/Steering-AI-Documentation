---
sidebar_position: 7
---

# Wandering

Makes the entity wander around the world smoothly changing the desired direction and speed. 

:::tip
Using either `GoForwardJobWrapper` or `WanderingJobWrapper` is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always has something to do. 
:::

## WanderingJob

This behavior outputs the following: 
- `DesiredDirection` - *random direction smoothly changing over time*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - *random speed smoothly changing over time between `MinSpeed` and `MaxSpeed`*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

## WanderingComponent

The main interesting properties to adjust on `WanderingComponent` are:
- `MaxUpDownAngle` - *maximum possible angle between the returned desired direction and *XZ* plane* 
- `XFrequency` - *frequency of desired direction change in the *XZ* plane* 
- `YFrequency` - *frequency of desired direction change in it's `y` component* 
- `SpeedFrequency` - *frequency of the speed changing*
- `MinSpeed` - *minimum desired speed*
- `MaxSpeed` - *maximum desired speed*
- `BaseData`
    - `DirectionStrength` - *determines `DirectionDesire`*
    - `SpeedStrength` - *determines `SpeedDesire`*
    - `Priority` - *priority*