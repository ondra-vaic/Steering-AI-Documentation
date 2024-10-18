---
sidebar_position: 0
---

# Neighbor Queries

## Overview
Neighbor queries find *k* neighbors of each entity. The image below shows a `SteeringSystemAsset` with one group of *neighbor behaviors*. The selected neighbor query here is `KDTreeKNNJobWrapper`. It finds at most `MaxNumNeighbors` of neighbors which are less than `MaxNeighborDistance` units away. `MaxFOV` can be used to specify the field of view of each entity. In this case, the query only considers entities with `_6_SampleBehaviorsTagComponent`, here it's the same tag as the *Main Tag* but that is not necessary. It is also possible to add more tags. In that case a potential neighbors must have at least one of these tags on them. 

<img src="/img/samples/flocking/Asset.png" alt="Description of the image"/>
*Image of a `SteeringSystemAsset` from sample [link]. `KDTreeKNNJobWrapper` is selected as implementation of neighbor query which will search among entities tagged with `_6_SampleBehaviorsTagComponent`.*

<video controls width="800">
    <source src="/videos/DebugJob.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
*Video showing a neighbor query visualized. The connections show neighbor relationships. The radii show the maximum distance to consider a neighbor.*

:::tip
`DebugJobWrapper` can help to visualize a neighbor query, as in the video.
:::

## Implementing a Neighbor Query

To implement your own query, create a class implementing the `INeighborQueryJobRunner` interface. Mark it with `[JobWrapper]`, this will make it show up in the editor. The schedule method is expected to schedule a job which finds neighbors and writes them to the `neighbors` array. All the data necessary to find the neighbors is inside `NeighborQueryParams`. 

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