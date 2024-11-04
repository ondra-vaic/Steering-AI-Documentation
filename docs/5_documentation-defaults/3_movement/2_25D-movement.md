---
sidebar_position: 2
---

# Movement 2.5D 

The `Move25DSystem` is suitable for movement on a 3D surface, for example a terrain. It is our replacement for Unity's [`CharacterController`](https://docs.unity3d.com/ScriptReference/CharacterController.html) which works with [ECS](https://docs.unity3d.com/Packages/com.unity.entities@1.3/manual/index.html). The `Move25DSystem` is only usable with [`CollideAndSlideSystem`](/docs/documentation-defaults/movement/collision-resolution), and so [`KinematicBodyAuthoring`](/docs/documentation-defaults/movement/collision-resolution) must be added any entity which wants to use it.

To use it, add `KinematicBodyAuthoring` and `Movement25DAuthoring` which adds `Movement25DComponent` with these properties:

- `MoveOptions`
    - `MaxSpeed` - The maximum reachable speed.
    - `DefaultSpeed` - The default speed (not used by the system can be looked up in behaviors).
    - `MaxForwardAcceleration` - The maximum acceleration in the entity's direction forward.
    - `MaxRightAcceleration` - The maximum acceleration in the entity's left-right direction.
    - `Friction` - Friction applied when moving.
    - `Move` - Should the entity's velocity be updated.
- `RotationOptions`
    - `RotationSpeed` - How fast the entity orients itself with it's new velocity.
    - `SwingRotationSpeed` - How fast the entity orients it's local y axis with the surface below.
    - `Rotate` - Should the entity's rotation be updated.
- *(Walking)*
    - `MinAngleToSlide` - Surface angle to start having reduced `MaxSpeed` if going up.
    - `MaxAngleToSlide` - Surface angle where `MaxSpeed = 0` if going up.
    - `MinAngleToSpeedUp` - Surface to start having increased `MaxSpeed` if going down.
    - `MaxAngleToSpeedUp` - Surface angle where max speed is `MaxDownhillSpeedUp * MaxSpeed` if going down.
    - `MaxDownhillSpeedUp` - Maximum speed multiplier if going down.
    - `UpAlignment` - How smoothly the detected surface up direction changes (can smooth out movement over terrain with sharp features).
    - `StepHeight` - How high can the entity step.
    - `StepDownGravity` - Accelaration when taking a step down.
- *(Falling)*
    - `AirGravity` - Gravity when falling.
    - `AirLinearDrag` - Linear drag when falling.
    - `AirAlignmentSpeed` - How fast the entity's rotation updates while falling.
- `IsActive`- Should the system run at all.
- `UpdatePosition` - Should the entity's position be updated.
- `Debug` - Draws multiple spheres and arrows for debugging.