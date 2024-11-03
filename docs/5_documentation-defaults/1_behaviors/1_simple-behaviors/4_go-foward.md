---
sidebar_position: 4
---

# Go Forward

Makes the entity go in the direction of it's forward direction. 

## Common usage

Most behaviors influence only the direction, but not speed. If no behaviors used by the entity influences the speed, the entity will simply not move anywhere. To resolve this issue, you can add this behavior which will set a target speed for the entity. Moreover having a small tendency to always go in the current direction helps to reduce noise in the overall movement. Having **GoForward** behavior is almost always useful for these two reasons. Alternetively the [**Wandering**](/docs/documentation-defaults/behaviors/simple-behaviors/wandering) provides these benefits too, plus makes the entity wander around randomly.

:::tip
Using either [`GoForwardJobWrapper`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward) or [`WanderingJobWrapper`](/docs/documentation-defaults/behaviors/simple-behaviors/wandering) is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always 'has something to do'. 
:::

## GoForwardJob

This behavior outputs the following: 
- `DesiredDirection` - *the entity's current forward direction*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

## GoForwardComponent

It is also useful to use some low but non-zero `DirectionStrength` and the lowest priority. Having the tendency to always go in the current direction helps to reduce noise from other behaviors.

The main interesting properties to adjust on [`GoForwardComponent`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward#goforwardcomponent) are:
- `Speed` - *how fast the entity should travel*
- `BaseData`
    - `DirectionStrength` - *determines `DirectionDesire`*
    - `SpeedStrength` - *determines `SpeedDesire`*
    - `Priority` - *priority*
