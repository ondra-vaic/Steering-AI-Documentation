---
sidebar_position: 0
---

# Movement 2D

This movement system is suitable for movemement in 2D. The logic is implemented inside `Move2DSystem`, which works with `Movement2DComponent`. The following properties can be set on the `Movement2DComponent`:

To use it, add `Movement2DAuthoring` which adds `Movement2DComponent` with these properties:

- `MoveOptions`
    - `MaxSpeed` - *The maximum reachable speed*
    - `DefaultSpeed` - *The default speed (not used by the system can be looked up in behaviors)*
    - `MaxForwardAcceleration` - *The maximum acceleration in the entity's direction forward*
    - `MaxRightAcceleration` - *The maximum acceleration in the entity's left-right direction*
    - `Friction` - *Friction applied when moving*
    - `Move` - *Should the entity's velocity be updated*
- `RotationOptions`
    - `RotationSpeed` - *How fast the entity orients itself with it's new velocity*
    - `Rotate` - *Should the entity's rotation be updated*
- `IsActive` - *Should the system run at all*
- `UpdatePosition` - *Should the entity's position be updated*
- `Debug` - *Draws current and desired velocity as arrows*