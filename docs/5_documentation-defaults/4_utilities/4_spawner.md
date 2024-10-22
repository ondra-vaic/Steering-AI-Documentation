---
sidebar_position: 4
---

# Spawner

`SpawnerAuthoring` can be attached to a game object to spawn entities in random positions of some area. The system which does this is the `SpawnerSystem`. It spawns the entities in a radius around the game object with `SpawnerAuthoring`.

You can set the following properties on `SpawnerAuthoring`.

- `Prefab` - *prefab of an entity to spawn*
- `Count` - *how many to spawn*
- `Radius` - *radius of the area where entities can spawn*
- `Position` - *center of the area where entities can spawn*
- `PositionMask` - *multiplier for the random positions - for example `float3(1, 0, 1)` will make a circle, `float3(1, 1, 1)` a sphere and `float3(1, 0.1, 1)` would make a sphere squashed on y axis*

