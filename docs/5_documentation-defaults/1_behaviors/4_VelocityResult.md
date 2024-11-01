---
sidebar_position: 4
---

# VelocityResult

All behaviors in the defaults library return a `VelocityResult`. These results are compatible with the [`CombineVelocitiesJobWrapper`](/docs/documentation-defaults/Combiner). The `VelocityResult` says how desirable it is to travel at a certain velocity. It contains the following properties:

- `float3 Direction` - Which direction to travel in.
- `float Speed` - What speed to travel at.
- `float DirectionDesire` - How much (0, 1) do we want to travel in `Direction`.
- `float SpeedDesire` - How much (0, 1) do we want to travel at `Speed`.
- `byte Priority` - What is the priority (0, 255) of this behavior.