---
sidebar_position: 3
---

# Environment Avoidance

## EnvironmentAvoidanceJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `0` *(constant)*

## EnvironmentAvoidanceComponent

- `BaseData`
    - `MaxDistance` - *maximum distance where a hit will be detected*
    - `DirectionStrength` - *multiplies `DirectionDesire`*
    - `Priority` - *priority*