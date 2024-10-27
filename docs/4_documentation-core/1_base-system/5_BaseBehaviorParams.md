---
sidebar_position: 4
---

# BaseBehaviorParams

Contains information extracted from entities which matched an entity query. Each array has `EntityCount` elements. Each element at index `i` contains some piece of information about entity `i`. If you need to look up an arbitrary components on an entity, you can do so through `ArchetypeChunk` [link].

```csharp title="BaseBehaviorParams.cs"
public struct BaseBehaviorParams
{
    [ReadOnly] public NativeArray<LocalToWorld> LocalToWorlds;
    [ReadOnly] public NativeArray<VelocityComponent> Velocities;
    [ReadOnly] public NativeArray<float> Radii;
    [ReadOnly] public NativeArray<ArchetypeChunk> ArchetypeChunks;
    ...
}
```