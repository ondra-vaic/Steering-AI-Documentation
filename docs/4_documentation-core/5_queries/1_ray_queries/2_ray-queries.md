---
sidebar_position: 1
---

# ICreateRaysJob

## Overview
Ray queries cast *k* rays to intersect the scene per each entity. The image below shows a `SteeringSystemAsset` with one group of *ray behaviors*. The selected ray query here is `Sweep2DCreateRaysJobWrapper`. It casts `NumRays` rays, to max distance of `MaxDistance`. The `Sweep2DCreateRaysJobWrapper` casts the rays in section of a circle with a given field of view `FOV`. The rays will only hit objects matching the selected `LayerMask`. 

<img src="/img/core/RayQuery.png" alt="Description of the image"/>
*Image of a `SteeringSystemAsset`. `Sweep2DCreateRaysJobWrapper` is selected as implementation of ray query to use for the `EnvironmentAvoidanceJobWrapper` behavior.*

<video controls width="800">
    <source src="/videos/Raycasts.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
*Video showing ray query visualized. The green arrows show rays which did not intersect the scene, the red arrows show a hit.*

:::tip
`DebugRayJobWrapper` can help to visualize a ray query, as in the video.
:::

## Implementing a Ray Query

To implement your own query, create a class implementing the `ICreateRaysJobRunner` interface. Mark it with `[JobWrapper]`, this will make it show up in the editor. The schedule method is expected to schedule a job which creates `NumRays` rays for each entity. There is helper custom job prepared to ease this process - `ICreateRaysJob`. It's `Execute` method will be called `NumRays` with indexes from `0` to `NumRays - 1` for each entity. The function should return the origin, direction and maximum distance of a ray to cast. The code below can be used as a template to create new ray queries through implementations of `ICreateRaysJobRunner` and `ICreateRaysJob`.

```csharp title="MyNeighborQueryJobWrapper.cs"
[BurstCompile]
struct MyCreateRaysJob : ICreateRaysJob
{
    public float MaxDistance;
		
    public RayData Execute(
        int rayIndex,
        in EntityInformation<SteeringEntityTagComponent> entityInformation)
    {
        
        // highlight-next-line
        float3 direction = ... // Calculate direction based on rayIndex
			
        return new RayData
        {
            Origin = entityInformation.Position,
            Direction = ,
            MaxDistance = MaxDistance
        };
    }
}

[JobWrapper]
[Serializable]
public class MyCreateRaysJobWrapper : ICreateRaysJobRunner
{
    public JobHandle Schedule(
        SystemBase systemBase,
        in CreateRaysParams createRaysParams,
        in NativeArray<RayCommand> raycastCommands,
        in NativeArray<RayData> rayDatas,
        JobHandle dependency)
    {
        return new MyCreateRaysJob
        {
            MaxDistance = createRaysParams.RaySettings.MaxDistance,
        }.Schedule(
            createRaysParams,
            raycastCommands,
            rayDatas,
            1,
            dependency);
    }
}
```