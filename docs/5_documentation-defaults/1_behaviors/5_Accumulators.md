---
sidebar_position: 5
---

# Accumulators

The library includes three *accumulators* which are commonly useful. *Accumulators* are implementations of [`IAccumulator`](/docs/documentation-core/behaviors/accumulators). They aggregate information about neighbors or raycasts inside implementations of [neighbor behaviors](/docs/documentation-core/behaviors/neighbor-behaviors/#implementing-ineighborbehaviorjobc1-c2-a-r) and [raycast behaviors](/docs/documentation-core/behaviors/ray-behaviors/ray-behaviors#implementing-iraycastbehaviorjobc-a1-a2-r).

## NoneAccumulator

Doesn't do anything. Useful when an accumulator is not needed. Example of this is the `OnMiss` of [`EnvironmentAvoidanceJob`](/docs/documentation-defaults/behaviors/ray-behaviors/envrionment-avoidance).

```csharp title="NoneAccumulator.cs"
public struct NoneAccumulator : IAccumulator
{
    public void Init() { }
}
```

## MaxAccumulator

Finds a vector with a largest `weight` passed into the `Add` function. Useful for example to find a centroid inside [`CohesionJob`](/docs/documentation-defaults/behaviors/neighbor-behaviors/cohesion).

```csharp title="MaxAccumulator.cs"
public struct MaxAccumulator : IAccumulator
{
    public float MaxMagnitude;
    public float3 Direction;
    
    public void Add(float3 direction, float weight)
    {
        if (magnitude > MaxMagnitude)
        {
            MaxMagnitude = magnitude;
            Direction = direction;
        }
    }

    public void Init()
    {
        MaxMagnitude = float.NegativeInfinity;
    }
}
```

## SimpleAccumulator

Accumulates a weighted sum of vectors passed into the `Add` function. Useful for example to find a centroid inside [`CohesionJob`](/docs/documentation-defaults/behaviors/neighbor-behaviors/cohesion).

```csharp title="SimpleAccumulator.cs"
public struct SimpleAccumulator : IAccumulator
{
    public float3 SumVector;
    public float SumMagnitude;

    public void Add(float3 vector, float weight)
    {
        SumVector += vector;
        SumMagnitude += magnitude;
    }

    public void Init()
    {
        SumVector = new float3();
        SumMagnitude = 0;
    }
}
```