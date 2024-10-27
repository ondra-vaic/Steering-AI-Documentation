---
sidebar_position: 1
---

# NeighborQueryParams

`NeighborQueryParams` is passed into all implementations of `INeighborQueryJobWrapper`. It has `NeighborhoodSettings` containing properties like `MaxNumNeighbors` set up in the editor. There are also `BaseBehaviorParams` [link] for the main entities (based on *Main Tag*), and `BaseBehaviorParams` for the potential neighbors (based on the tags specified in the neighbor query).

```csharp title="INeighborQueryJobWrapper.cs"
public struct NeighborQueryParams
{
    public BaseBehaviorParams BaseBehaviorParams; // the entities which are looking for neighbors
    public BaseBehaviorParams OtherBehaviorParams; // the entities which are potential neighbors
    public NeighborhoodSettings NeighborhoodSettings; // information about the query
}
```