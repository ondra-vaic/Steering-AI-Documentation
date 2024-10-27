---
sidebar_position: 1
---

# INeighborQueryJobWrapper


## Implementing a Neighbor Query

To implement your own query, create a class implementing the `INeighborQueryJobWrapper` interface. Mark it with `[JobWrapper]`, this will make it show up in the editor. The schedule method is expected to schedule a job which finds neighbors and writes them to the `neighbors` array. All the data necessary to find the neighbors is inside `NeighborQueryParams`. 

```csharp title="MyNeighborQueryJobWrapper.cs"
[JobWrapper]
public class MyNeighborQueryJobWrapper : INeighborQueryJobRunner
{
    public JobHandle Schedule(
        SystemBase systemBase,
        in NeighborQueryParams neighborQueryParams,
        in NativeArray<NeighborMatch> neighbors,
        in JobHandle dependency)
    {
        var handle = new MyNeighborQueryJob(neighborQueryParams).Schedule(dependency);
        return handle;
    }
}
```

`NeighborQueryParams` contains `NeighborhoodSettings` which has properties like `MaxNumNeighbors` set up in the editor. It also contains `BaseBehaviorParams` [link] for the main entities (based on *Main Tag*), and `BaseBehaviorParams` for the potential neighbors (based on the tags specified in the neighbor query).
```csharp title="INeighborQueryJobWrapper.cs"
public struct NeighborQueryParams
{
    public BaseBehaviorParams BaseBehaviorParams; // the entities which are looking for neighbors
    public BaseBehaviorParams OtherBehaviorParams; // the entities which are potential neighbors
    public NeighborhoodSettings NeighborhoodSettings; // information about the query
}
```

### Neighbors Array Format

The `neighbors` array is passed in preallocated with length of `neighborQueryParams.BaseBehaviorParams.EntityCount * MaxNumNeighbors`, to fit `MaxNumNeighbors` for each entity. The expected format is that indexes `i * MaxNumNeighbors` to `i * MaxNumNeighbors + MaxNumNeighbors - 1` contain neighbors for entity `i` from `neighborQueryParams.BaseBehaviorParams`. Each `NeighborMatch` element contains the index of neighbor `j` inside `neighborQueryParams.OtherBehaviorParams`. If not enough neighbors are found, the rest of the `NeighborMatch` elements should contain index `-1`.

```csharp title="INeighborQueryJobWrapper.cs"
public struct NeighborMatch
{
    public int OtherIndex; // index of the neighbor inside OtherBehaviorParams
    public float DistanceToOrigin; // distance between origins
    public float DistanceToSurface; // distance between origins minus the radii of the two entities
}
```