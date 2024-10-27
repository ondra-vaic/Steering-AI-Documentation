---
sidebar_position: 1
---

# Tags

Tags components are components with no properties. Their main usage is to uniquely identify all entities which share the same tag - for example all birds in [link sample] have `BirdTagComponent`. *Entity Queries* [link] can match entities with a given tag. The tags can also be used in *Neighbor Queries* to filter out potential neighbors. 

:::note
To avoid creating an authoring and a baker for each new tag, the tags marked with `[SteeringEntityTag]` can be added through the `FlockingEntityAuthoring`. 
:::

```csharp title="SampleEntityTag.cs"
// highlight-next-line
[SteeringEntityTag] // This will let the editor find this tag. 
public struct SampleEntityTagComponent : IComponentData {}
```