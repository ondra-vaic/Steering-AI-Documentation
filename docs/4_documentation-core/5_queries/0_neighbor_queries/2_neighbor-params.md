---
sidebar_position: 1
---

# NeighborQueryParams

`NeighborQueryParams` is passed into all implementations of [`INeighborQueryJobWrapper`](/docs/documentation-core/queries/neighbor_queries/neighbor-queries). It has `NeighborhoodSettings` containing properties like `MaxNumNeighbors` set up in the [editor](/docs/documentation-core/editor). There are also [`BaseBehaviorParams`](/docs/documentation-core/base-system/BaseBehaviorParams) [link] for the main entities (based on *Main Tag*), and [`BaseBehaviorParams`](/docs/documentation-core/base-system/BaseBehaviorParams) for the potential neighbors (based on the [tags](/docs/documentation-core/components/Tags) specified in the neighbor query).

```csharp title="INeighborQueryJobWrapper.cs"
public struct NeighborQueryParams
{
    public BaseBehaviorParams BaseBehaviorParams; // the entities which are looking for neighbors
    public BaseBehaviorParams OtherBehaviorParams; // the entities which are potential neighbors
    public NeighborhoodSettings NeighborhoodSettings; // information about the query
}
```