---
sidebar_position: 5
---

# Combine Velocities

The library contains one implementation of a combiner - `CombineVelocitiesJobWrapper`. It turns all the `VelocityResult` from behaviors into one `DesiredVelocity` which the movement systems use to update the entities' velocity. The combiner requires that a `DesiredVelocityComponent` is present on the entity. Behaviors which can be used with it must return `VelocityResult` (all behaviors in the defaults library do).

## CombineVelocitiesJob

For each entity, the combiner sorts it's `VelocityResult`s by priority first. Starting with the highest priority, it starts accumulating a weighted sum of `VelocityResult.Direction * VelocityResult.DirectionDesire`, until there are results or sum of `VelocityResult.DirectionDesire` is at least one. This way results from low priority behaviors can get completely filtered out. The direction of the weighted sum is then the desired direction in `DesiredVelocityComponent`. In the same way, a weighted sum of all `VelocityResult.Speed * VelocityResult.SpeedDesire` is calculated. It determines the desired speed in `DesiredVelocityComponent`. 

## DesiredVelocityComponent

Holds the desired velocity of the entity. Movement systems look to this as the direction and speed which the entity wants to have.

```csharp title="DesiredVelocityAuthoring.cs"
public struct DesiredVelocityComponent : IComponentData
{
    public float3 Value; // Desired velocity - direction and speed
    public bool Debug; // Toggle to debug
    public float DebugScale; // Scale for debugging
    public Color Color; // Color to draw Value with
}
```
