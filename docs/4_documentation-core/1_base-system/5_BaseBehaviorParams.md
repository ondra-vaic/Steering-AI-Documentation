---
sidebar_position: 5
---

# BaseBehaviorParams

This struct is passed into all [behaviors](/docs/category/behaviors). It has information about the entities matched by the [`BaseSteeringSystem`](/docs/documentation-core/base-system/BaseSteeringSystem)'s main [entity query](/docs/documentation-core/queries/entity-queries). There are several arrays, each containing `EntityCount` elements (with the exception of `ArchetypeChunks` and `ChunkBaseIndexArray`). Each array element has some information about an entity at index `i` in the query. The `BaseBehaviorParams` struct contains these fields:

- `LocalToWorlds[EntityInQueryIndex]` - *entity's postion, rotation and scale*
- `Velocities[EntityInQueryIndex]` - *entity's current velocity from [`VelocityComponent`](/docs/documentation-core/base-system/steering-entity)*
- `CachedSpeeds[EntityInQueryIndex]` - *magnitude of entity's current velocity*
- `MaxSpeeds[EntityInQueryIndex]` - *entity's maximum speed from `MaxSpeedComponent`*
- `Radii[EntityInQueryIndex]` - *entity's radius from [`RadiusComponent`](/docs/documentation-core/base-system/steering-entity)*
- `IndexesArray[EntityInQueryIndex]` - *entity's `Indexes`* 
- `ChunkBaseIndexArray[ChunkIndex]` - *[chunk base index array](https://docs.unity3d.com/Packages/com.unity.entities@1.3/api/Unity.Entities.EntityQuery.CalculateBaseEntityIndexArrayAsync.html)*
- `ArchetypeChunks[ChunkIndex]` - *[archetype chunk](https://docs.unity3d.com/Packages/com.unity.entities@1.3/manual/concepts-archetypes.html)s*
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

The `ArchetypeChunks` gives access to all [archetype chunks](https://docs.unity3d.com/Packages/com.unity.entities@1.0/manual/concepts-archetypes.html) of the entities. This can be used to look up any arbitrary component on them. [`ArchetypeChunk`](https://docs.unity3d.com/Packages/com.unity.entities@1.0/manual/concepts-archetypes.html) containing an entity can be found at it's `ChunkIndex`. It's archetype inside the chunk is at `EntityInChunkIndex`. The following example shows looking up [`LocalToWorld`](https://docs.unity3d.com/Packages/com.unity.entities@1.3/manual/transforms-concepts.html) on an entity. 

```csharp title=""
int i = ... // EntityInQueryIndex
int chunkIndex = Indexes[i].ChunkIndex;
int entityInChunkIndex = Indexes[i].EntityInChunkIndex;

ArchetypeChunk chunk = ArchetypeChunks[chunkIndex];
NativeArray<LocalToWorld> transforms = chunk.GetNativeArray(ref Handle);
LocalToWorld transform = transforms[entityInChunkIndex]
```