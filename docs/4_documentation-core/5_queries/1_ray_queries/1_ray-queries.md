---
sidebar_position: 1
---

# ICreateRaysJobWrapper

Implementations of `ICreateRaysJobWrapper` create `NumRays` rays per each entity. The rays are then cast by the [`BaseSteeringSystem`](/docs/documentation-core/base-system/BaseSteeringSystem) in the background. The results of these raycasts are then passed into ray behaviors. 

## Implementing a Ray Query

To implement your own ray query, create a class implementing the `ICreateRaysJobWrapper` interface. Mark it with [`[JobWrapper]`](/docs/documentation-core/attributes#jobwrapperattribute), this will make it show up in the editor. The schedule method is expected to schedule a job which creates `NumRays` rays for each entity. There is helper custom job prepared to ease this process - `ICreateRaysJob`. The code below can be used as template to create new ray queries.

```csharp title="MyNeighborQueryJobWrapper.cs"
[JobWrapper]
[Serializable]
public class MyCreateRaysJobWrapper : ICreateRaysJobWrapper
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

## ICreateRaysJob

`ICreateRaysJob` is a custom job which makes implementing a job to create rays easier. It's `Execute` method will be called `NumRays` times with indexes from `0` to `NumRays - 1` for each entity. The function should return the origin, direction and maximum distance of a ray to cast. Internally, the job makes sure that `raycastCommands` and `rayDatas` are filled in format expected by ray behaviors.

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
```