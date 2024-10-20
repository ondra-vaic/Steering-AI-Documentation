---
sidebar_position: 1
---

# Debug Neighbors

Draw a line from each entity to all of it's neighbors and a circle showing the maximum distance where a neighbor can be detected.

## DebugNeighborsJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `0` *(constant)*

## DebugNeighborsComponent

The `DebugNeighborsComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:
- `BaseData`
    - `IsActive` - *mark it to activate the behavior*
    - `DebugColor` - *color to use for debugging*