---
sidebar_position: 3
---

# Collision Resolution

Normally in Unity [`CharacterController`](https://docs.unity3d.com/ScriptReference/CharacterController.html) handles both movement and collision resolution. Here the collision resolution is split into a separate system - `CollideAndSlideSystem` which implements a [collide and slide algorithm](https://www.youtube.com/watch?v=YR6Q7dUz2uk). This allows the collision resolution to be used with any movement system. For now the algorithm only supports a sphere shape to detect collisions. The system takes the entities' [`RadiusComponent`](/docs/documentation-core/base-system/steering-entity) as the sphere's radius. Collisions are detected against any Unity [`Collider`](https://docs.unity3d.com/ScriptReference/Collider.html) in the scene. A collider does not need to be present on the entities themselves. 

To use it, add the `KinematicBodyAuthoring` which adds `CollideAndSlideComponent`. The `KinematicBodyAuthoring` has the following properties:

- `IsActive` - Should collisions be resolved
- `SkinWidth` - Skin width, small number to avoid floating point inaccuracies
- `LayerMask` - The [`LayerMask`](https://docs.unity3d.com/ScriptReference/LayerMask.html) to filter [`Collider`](https://docs.unity3d.com/ScriptReference/Collider.html)s
- `Debug` - Draws spheres for debugging different states of the collide and slide algorithm

:::note
The entities do not need to have a [`Collider`](https://docs.unity3d.com/ScriptReference/Collider.html) to detect and resolve collisions, they only need the `KinematicBodyAuthoring`.
:::

:::note 
The algorithm is based on [paper](https://arxiv.org/pdf/1211.0059) about numerically stable collide and slide algorithm by Jeff Linahan.
:::