---
sidebar_position: 5
---

# BaseBehaviorParams

This struct is passed into all behaviors. It has information about the entities matched by the `BaseSystem`'s main entity query. There are several arrays, each containing `EntityCount` elements (with the exception of `ArchetypeChunks` and `ChunkBaseIndexArray`). Each array element has some information about an entity at index `i` in the query. The `BaseBehaviorParams` struct contains these fields:

- `LocalToWorlds[EntityInQueryIndex]` - *entity's postion, rotation and scale*
- `Velocities[EntityInQueryIndex]` - *entity's current velocity from `VelocityComponent`*
- `CachedSpeeds[EntityInQueryIndex]` - *magnitude of entity's current velocity*
- `MaxSpeeds[EntityInQueryIndex]` - *entity's maximum speed from `MaxSpeedComponent`*
- `Radii[EntityInQueryIndex]` - *entity's radius from `RadiusComponent`*
- `IndexesArray[EntityInQueryIndex]` - *entity's `Indexes`* 
- `ChunkBaseIndexArray[ChunkIndex]` - *chunk base index array [link]*
- `ArchetypeChunks[ChunkIndex]` - *archetype chunks [link]*
- `EntityCount` - *number of entities in the query*
- `DeltaTime` - *time since last frame*

:::tip
You can use `ArchetypeChunks` to lookup any component on an entity [link].
:::

```csharp title="BaseBehaviorParams.cs"
public struct BaseBehaviorParams
{
    public NativeArray<LocalToWorld> LocalToWorlds;
    public NativeArray<VelocityComponent> Velocities;
    public int EntityCount;
    ...
}

public struct Indexes
{
    public int ChunkIndex; // index of chunk in `ArchetypeChunks`
    public int EntityInChunkIndex; // index of entity inside chunk
    public int EntityInQueryIndex; // index of entity in query
}
```

## Indexing ArchetypeChunk

The `ArchetypeChunks` gives access to all archetype chunks of the entities. This can be used to look up any arbitrary component on them. `ArchetypeChunk` containing an entity can be found at it's `ChunkIndex`. It's archetype inside the chunk is at `EntityInChunkIndex`. The following example shows looking up `LocalToWorld` on an entity. 

```csharp title=""
int i = ... // EntityInQueryIndex
int chunkIndex = Indexes[i].ChunkIndex;
int entityInChunkIndex = Indexes[i].EntityInChunkIndex;

ArchetypeChunk chunk = ArchetypeChunks[chunkIndex];
NativeArray<LocalToWorld> transforms = chunk.GetNativeArray(ref Handle);
LocalToWorld transform = transforms[entityInChunkIndex]
```