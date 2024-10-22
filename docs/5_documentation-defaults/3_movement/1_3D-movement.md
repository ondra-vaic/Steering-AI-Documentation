---
sidebar_position: 1
---

# Movement 3D

`Move3DSystem`, `Movement3DComponent`

- `MoveOptions`
    - `MaxSpeed` - *The maximum reachable speed*
    - `DefaultSpeed` - *The default speed (not used by the system can be looked up in behaviors)*
    - `MaxForwardAcceleration` - *The maximum acceleration in the entity's direction forward*
    - `MaxRightAcceleration` - *The maximum acceleration in the entity's left-right direction*
    - `Friction` - *Friction applied when moving*
    - `Move` - *Should the entity's velocity be updated*
- `RotationOptions`
    - `RotationSpeed` - *How fast the entity orients itself with it's new velocity*
    - `RollRotationSpeed` - *How fast the entity orients itself around it's local z axis for banking*
    - `Rotate` - *Should the entity's rotation be updated*
- `BankingGravity` - *Used for banking, lower values mean the entity will bank more*
- `IsActive` - *Should the system run at all*
- `UpdatePosition` - *Should the entity's position be updated*
- `Debug` - *Draws current and desired velocity and current and desired orientation as arrows*