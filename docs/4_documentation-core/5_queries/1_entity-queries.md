---
sidebar_position: 1
---

# Entity Queries

Entity queries are from the Unity's ECS package [link]. They find all entities matching some set of components. The base system runs an entity query which matches all entities with the same *Main Tag*. Information about these entities is then packaged and passed around to all behaviors as `BaseBehaviorParams` by the `BaseSteeringSystem`.

## Base Behavior Params

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