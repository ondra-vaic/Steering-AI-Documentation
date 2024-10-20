---
sidebar_position: 6
---

# Keep Height

Makes the entities stay within a specified range of `y` coordinates. It can be for example useful to restrict how high the entities will fly.

## KeepHeightJob

This behavior outputs the following: 
- `DesiredDirection` - *direction up or down back to the zone if `y` is outside `MinY` and `MaxY`*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance from either boundaries goes from `0` to `CalmZoneHeight`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

## KeepHeightComponent

The main interesting properties to adjust on `KeepHeightComponent` are:
- `MaxY` - *maximum y coordinate of the entity*
- `MinY` - *minimum y coordinate of the entity*
- `CalmZoneHeight` - *at this distance from either boundary, the behavior has maximum effect*
- `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
- `BaseData.Priority` - *priority*