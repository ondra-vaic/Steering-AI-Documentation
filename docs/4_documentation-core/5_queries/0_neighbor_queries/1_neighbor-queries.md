---
sidebar_position: 1
---

# INeighborQueryJobWrapper

Neighbor queries are implementations of `INeighborQueryJobWrapper`. Given two sets of entities, they find `MaxNumNeighbors` neighbors for each entity from the first set. Normally this is `MaxNumNeighbors` nearest entities restricted by field of view `FOV`, but generally other criteria of a neighborhood could be implemented. The resulting neighborhood is passed into [neighbor behaviors](/docs/documentation-core/behaviors/neighbor-behaviors/intro).

## Implementing a Neighbor Query

To implement your own neighbor query, create a class implementing the `INeighborQueryJobWrapper` interface. Mark it with [`[JobWrapper]`](/docs/documentation-core/attributes#jobwrapperattribute), this will make it show up in the [editor](/docs/documentation-core/editor). The schedule method is expected to schedule a [job](https://docs.unity3d.com/Manual/job-system.html) which finds neighbors and writes them to the `neighbors` array. See below for details about the format of `neighbors` which the behaviors will expect. All the data necessary to find the neighbors is passed inside [`NeighborQueryParams`](/docs/documentation-core/queries/neighbor_queries/neighbor-params).

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

### Neighbors Array Format

The `neighbors` array is passed in preallocated with `MaxNumNeighbors` elements for each entity. The expected format is that indexes `i * MaxNumNeighbors` to `i * MaxNumNeighbors + MaxNumNeighbors - 1` contain neighbors for entity `i` from `neighborQueryParams.BaseBehaviorParams`. Each `NeighborMatch` element contains the index of neighbor `j` inside `neighborQueryParams.OtherBehaviorParams`. Elements in the array where `OtherIndex` is `-1` signify none neighbor. 

```csharp title="INeighborQueryJobWrapper.cs"
public struct NeighborMatch
{
    public int OtherIndex; // index of the neighbor inside OtherBehaviorParams
    public float DistanceToOrigin; // distance between origins
    public float DistanceToSurface; // distance between origins minus the radii of the two entities
}
```