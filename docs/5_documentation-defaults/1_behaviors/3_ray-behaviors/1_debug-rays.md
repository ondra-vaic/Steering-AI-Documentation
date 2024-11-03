---
sidebar_position: 1
---

# Debug Rays

Draw an arrow for each cast ray, green for rays that miss, red for rays that hit. Can be used to debug [ray queries](/docs/documentation-core/queries/ray_queries/overview).


## DebugRaysJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `0` *(constant)*

## DebugRaysComponent

The `DebugRaysComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:

- `BaseData`
    - `IsActive` - *mark it to activate the behavior*