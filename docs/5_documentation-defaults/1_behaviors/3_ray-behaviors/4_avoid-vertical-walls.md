---
sidebar_position: 4
---

# Avoid Vertical Walls

Makes the entities avoid geometry which is at some minimum angle with the xz plane. It also does not affect the entity's direction up and down. 

This behavior proved to be useful especially for fish in the last sample [link]. There, it serves to keep the fish away from the edge of the pond. In that scenario, the `EnvironmentAvoidanceJobWrapper` does not work so well, because normals of the pond are partially up, that would unnecessarily bias the fish to swimming up towards the surface. On the other hand, not affecting the `y` component of the direction means that the behavior is useless for avoiding the ground, that is why geometry which is not at a steep angle with the xz plane is filtered out.

## AvoidVerticalWallsJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## AvoidVerticalWallsComponent

- `BaseData`
    - `MaxDistance` - *maximum distance where a hit will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `Priority` - *priority*