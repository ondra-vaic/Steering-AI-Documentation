---
sidebar_position: 1
---

# ICreateRaysJob

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